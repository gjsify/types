
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './javascriptcore-5.0-ambient.d.ts';
import './javascriptcore-5.0-import.d.ts';
/**
 * JavaScriptCore-5.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Enum values to specify a mode to check for syntax errors in jsc_context_check_syntax().
 */
export enum CheckSyntaxMode {
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
export enum CheckSyntaxResult {
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
export enum OptionType {
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
 * Possible types of the elements contained in a typed array.
 */
export enum TypedArrayType {
    /**
     * Not a typed array, or type unsupported.
     */
    NONE,
    /**
     * Array elements are 8-bit signed integers (int8_t).
     */
    INT8,
    /**
     * Array elements are 16-bit signed integers (int16_t).
     */
    INT16,
    /**
     * Array elements are 32-bit signed integers (int32_t).
     */
    INT32,
    /**
     * Array elements are 64-bit signed integers (int64_t).
     */
    INT64,
    /**
     * Array elements are 8-bit unsigned integers (uint8_t).
     */
    UINT8,
    /**
     * Array elements are 8-bit unsigned integers (uint8_t).
     */
    UINT8_CLAMPED,
    /**
     * Array elements are 16-bit unsigned integers (uint16_t).
     */
    UINT16,
    /**
     * Array elements are 32-bit unsigned integers (uint32_t).
     */
    UINT32,
    /**
     * Array elements are 64-bit unsigned integers (uint64_t).
     */
    UINT64,
    /**
     * Array elements are 32-bit floating point numbers (float).
     */
    FLOAT32,
    /**
     * Array elements are 64-bit floating point numbers (double).
     */
    FLOAT64,
}
/**
 * Flags used when defining properties with jsc_value_object_define_property_data() and
 * jsc_value_object_define_property_accessor().
 * @bitfield 
 */
export enum ValuePropertyFlags {
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
export const MAJOR_VERSION: number
/**
 * Like jsc_get_micro_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
export const MICRO_VERSION: number
/**
 * Like jsc_get_minor_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
export const MINOR_VERSION: number
/**
 * Allows the DFG JIT to be used if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
export const OPTIONS_USE_DFG: string | null
/**
 * Allows the FTL JIT to be used if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
export const OPTIONS_USE_FTL: string | null
/**
 * Allows the executable pages to be allocated for JIT and thunks if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
export const OPTIONS_USE_JIT: string | null
/**
 * Allows the LLINT to be used if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
export const OPTIONS_USE_LLINT: string | null
/**
 * Returns the major version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 1.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MAJOR_VERSION
 * macro, which represents the major version of the JavaScriptCore headers you
 * have included when compiling your code.
 * @returns the major version number of the JavaScriptCore library
 */
export function get_major_version(): number
/**
 * Returns the micro version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 3.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MICRO_VERSION
 * macro, which represents the micro version of the JavaScriptCore headers you
 * have included when compiling your code.
 * @returns the micro version number of the JavaScriptCore library
 */
export function get_micro_version(): number
/**
 * Returns the minor version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 8.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MINOR_VERSION
 * macro, which represents the minor version of the JavaScriptCore headers you
 * have included when compiling your code.
 * @returns the minor version number of the JavaScriptCore library
 */
export function get_minor_version(): number
/**
 * Iterates all available options calling `function` for each one. Iteration can
 * stop early if `function` returns %FALSE.
 * @param function_ a #JSCOptionsFunc callback
 */
export function options_foreach(function_: OptionsFunc): void
/**
 * Get `option` as a #gboolean value.
 * @param option the option identifier
 * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
 */
export function options_get_boolean(option: string | null): [ /* returnType */ boolean, /* value */ boolean ]
/**
 * Get `option` as a #gdouble value.
 * @param option the option identifier
 * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
 */
export function options_get_double(option: string | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Get `option` as a #gint value.
 * @param option the option identifier
 * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
 */
export function options_get_int(option: string | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Create a #GOptionGroup to handle JSCOptions as command line arguments.
 * The options will be exposed as command line arguments with the form
 * <emphasis>--jsc-&lt;option&gt;=&lt;value&gt;</emphasis>.
 * Each entry in the returned #GOptionGroup is configured to apply the
 * corresponding option during command line parsing. Applications only need to
 * pass the returned group to g_option_context_add_group(), and the rest will
 * be taken care for automatically.
 * @returns a #GOptionGroup for the JSCOptions
 */
export function options_get_option_group(): GLib.OptionGroup
/**
 * Get `option` as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 * @param option the option identifier
 * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
 */
export function options_get_range_string(option: string | null): [ /* returnType */ boolean, /* value */ string | null ]
/**
 * Get `option` as a #gsize value.
 * @param option the option identifier
 * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
 */
export function options_get_size(option: string | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Get `option` as a string.
 * @param option the option identifier
 * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
 */
export function options_get_string(option: string | null): [ /* returnType */ boolean, /* value */ string | null ]
/**
 * Get `option` as a #guint value.
 * @param option the option identifier
 * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
 */
export function options_get_uint(option: string | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Set `option` as a #gboolean value.
 * @param option the option identifier
 * @param value the value to set
 * @returns %TRUE if option was correctly set or %FALSE otherwise.
 */
export function options_set_boolean(option: string | null, value: boolean): boolean
/**
 * Set `option` as a #gdouble value.
 * @param option the option identifier
 * @param value the value to set
 * @returns %TRUE if option was correctly set or %FALSE otherwise.
 */
export function options_set_double(option: string | null, value: number): boolean
/**
 * Set `option` as a #gint value.
 * @param option the option identifier
 * @param value the value to set
 * @returns %TRUE if option was correctly set or %FALSE otherwise.
 */
export function options_set_int(option: string | null, value: number): boolean
/**
 * Set `option` as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 * @param option the option identifier
 * @param value the value to set
 * @returns %TRUE if option was correctly set or %FALSE otherwise.
 */
export function options_set_range_string(option: string | null, value: string | null): boolean
/**
 * Set `option` as a #gsize value.
 * @param option the option identifier
 * @param value the value to set
 * @returns %TRUE if option was correctly set or %FALSE otherwise.
 */
export function options_set_size(option: string | null, value: number): boolean
/**
 * Set `option` as a string.
 * @param option the option identifier
 * @param value the value to set
 * @returns %TRUE if option was correctly set or %FALSE otherwise.
 */
export function options_set_string(option: string | null, value: string | null): boolean
/**
 * Set `option` as a #guint value.
 * @param option the option identifier
 * @param value the value to set
 * @returns %TRUE if option was correctly set or %FALSE otherwise.
 */
export function options_set_uint(option: string | null, value: number): boolean
/**
 * The type of delete_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 * @returns %TRUE if handled or %FALSE to to forward the request to the parent class or prototype chain.
 */
export interface ClassDeletePropertyFunction {
    (jsc_class: Class, context: Context, instance: any | null, name: string | null): boolean
}
/**
 * The type of enumerate_properties in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @returns a %NULL-terminated array of strings    containing the property names, or %NULL if @instance doesn't have enumerable properties.
 */
export interface ClassEnumeratePropertiesFunction {
    (jsc_class: Class, context: Context, instance: any | null): string[] | null
}
/**
 * The type of get_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 * @returns a #JSCValue or %NULL to forward the request to    the parent class or prototype chain
 */
export interface ClassGetPropertyFunction {
    (jsc_class: Class, context: Context, instance: any | null, name: string | null): Value | null
}
/**
 * The type of has_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 * @returns %TRUE if @instance has a property with @name or %FALSE to forward the request    to the parent class or prototype chain.
 */
export interface ClassHasPropertyFunction {
    (jsc_class: Class, context: Context, instance: any | null, name: string | null): boolean
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
 * @returns %TRUE if handled or %FALSE to forward the request to the parent class or prototype chain.
 */
export interface ClassSetPropertyFunction {
    (jsc_class: Class, context: Context, instance: any | null, name: string | null, value: Value): boolean
}
/**
 * Function used to handle JavaScript exceptions in a #JSCContext.
 * @callback 
 * @param context a #JSCContext
 * @param exception a #JSCException
 */
export interface ExceptionHandler {
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
 * @returns %TRUE to stop the iteration, or %FALSE otherwise
 */
export interface OptionsFunc {
    (option: string | null, type: OptionType, description: string | null): boolean
}
export module Class {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of JavaScriptCore-5.0.JavaScriptCore.Class

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

}

export interface Class {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.Class

    /**
     * The #JSCContext in which the class was registered.
     */
    readonly context: Context
    /**
     * The name of the class.
     */
    readonly name: string | null
    /**
     * The parent class or %NULL in case of final classes.
     */
    readonly parent: Class

    // Owm methods of JavaScriptCore-5.0.JavaScriptCore.Class

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
     * @returns a #JSCValue representing the class constructor.
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
     * @returns a #JSCValue representing the class constructor.
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
    add_method_variadic(name: string | null, callback: GObject.Callback, return_type: GObject.GType): void
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
    add_method(name: string | null, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): void
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
    add_property(name: string | null, property_type: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void
    /**
     * Get the class name of `jsc_class`
     * @returns the name of @jsc_class
     */
    get_name(): string | null
    /**
     * Get the parent class of `jsc_class`
     * @returns the parent class of @jsc_class
     */
    get_parent(): Class

    // Class property signals of JavaScriptCore-5.0.JavaScriptCore.Class

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

/**
 * A JSSClass represents a custom JavaScript class registered by the user in a #JSCContext.
 * It allows to create new JavaScripts objects whose instances are created by the user using
 * this API.
 * It's possible to add constructors, properties and methods for a JSSClass by providing
 * #GCallback<!-- -->s to implement them.
 * @class 
 */
export class Class extends GObject.Object {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.Class

    static name: string
    static $gtype: GObject.GType<Class>

    // Constructors of JavaScriptCore-5.0.JavaScriptCore.Class

    constructor(config?: Class.ConstructorProperties) 
    _init(config?: Class.ConstructorProperties): void
}

export module Context {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of JavaScriptCore-5.0.JavaScriptCore.Context

        /**
         * The #JSCVirtualMachine in which the context was created.
         */
        virtual_machine?: VirtualMachine | null
        /**
         * The #JSCVirtualMachine in which the context was created.
         */
        virtualMachine?: VirtualMachine | null
    }

}

export interface Context {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.Context

    /**
     * The #JSCVirtualMachine in which the context was created.
     */
    readonly virtual_machine: VirtualMachine
    /**
     * The #JSCVirtualMachine in which the context was created.
     */
    readonly virtualMachine: VirtualMachine

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.Context

    parent: GObject.Object

    // Owm methods of JavaScriptCore-5.0.JavaScriptCore.Context

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
     * @returns a #JSCCheckSyntaxResult
     */
    check_syntax(code: string | null, length: number, mode: CheckSyntaxMode, uri: string | null, line_number: number): [ /* returnType */ CheckSyntaxResult, /* exception */ Exception ]
    /**
     * Clear the uncaught exception in `context` if any.
     */
    clear_exception(): void
    /**
     * Evaluate `code` in `context`.
     * @param code a JavaScript script to evaluate
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     * @returns a #JSCValue representing the last value generated by the script.
     */
    evaluate(code: string | null, length: number): Value
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
     * @returns a #JSCValue representing the last value generated by the script.
     */
    evaluate_in_object(code: string | null, length: number, object_instance: any | null, object_class: Class | null, uri: string | null, line_number: number): [ /* returnType */ Value, /* object */ Value ]
    /**
     * Evaluate `code` in `context` using `uri` as the source URI. The `line_number` is the starting line number
     * in `uri;` the value is one-based so the first line is 1. `uri` and `line_number` will be shown in exceptions and
     * they don't affect the behavior of the script.
     * @param code a JavaScript script to evaluate
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     * @param uri the source URI
     * @param line_number the starting line number
     * @returns a #JSCValue representing the last value generated by the script.
     */
    evaluate_with_source_uri(code: string | null, length: number, uri: string | null, line_number: number): Value
    /**
     * Get the last unhandled exception thrown in `context` by API functions calls.
     * @returns a #JSCException or %NULL if there isn't any    unhandled exception in the #JSCContext.
     */
    get_exception(): Exception | null
    /**
     * Get a #JSCValue referencing the `context` global object
     * @returns a #JSCValue
     */
    get_global_object(): Value
    /**
     * Get a property of `context` global object with `name`.
     * @param name the value name
     * @returns a #JSCValue
     */
    get_value(name: string | null): Value
    /**
     * Get the #JSCVirtualMachine where `context` was created.
     * @returns the #JSCVirtualMachine where the #JSCContext was created.
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
     * @returns a #JSCClass
     */
    register_class(name: string | null, parent_class: Class | null, vtable: ClassVTable | null, destroy_notify: GLib.DestroyNotify | null): Class
    /**
     * Set a property of `context` global object with `name` and `value`.
     * @param name the value name
     * @param value a #JSCValue
     */
    set_value(name: string | null, value: Value): void
    /**
     * Throw an exception to `context` using the given error message. The created #JSCException
     * can be retrieved with jsc_context_get_exception().
     * @param error_message an error message
     */
    throw(error_message: string | null): void
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
    throw_with_name(error_name: string | null, error_message: string | null): void

    // Class property signals of JavaScriptCore-5.0.JavaScriptCore.Context

    connect(sigName: "notify::virtual-machine", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::virtual-machine", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::virtual-machine", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * JSCContext represents a JavaScript execution context, where all operations
 * take place and where the values will be associated.
 * 
 * When a new context is created, a global object is allocated and the built-in JavaScript
 * objects (Object, Function, String, Array) are populated. You can execute JavaScript in
 * the context by using jsc_context_evaluate() or jsc_context_evaluate_with_source_uri().
 * It's also possible to register custom objects in the context with jsc_context_register_class().
 * @class 
 */
export class Context extends GObject.Object {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of JavaScriptCore-5.0.JavaScriptCore.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Create a new #JSCContext. The context is created in a new #JSCVirtualMachine.
     * Use jsc_context_new_with_virtual_machine() to create a new #JSCContext in an
     * existing #JSCVirtualMachine.
     * @constructor 
     * @returns the newly created #JSCContext.
     */
    constructor() 
    /**
     * Create a new #JSCContext. The context is created in a new #JSCVirtualMachine.
     * Use jsc_context_new_with_virtual_machine() to create a new #JSCContext in an
     * existing #JSCVirtualMachine.
     * @constructor 
     * @returns the newly created #JSCContext.
     */
    static new(): Context
    /**
     * Create a new #JSCContext in `virtual_machine`.
     * @constructor 
     * @param vm a #JSCVirtualMachine
     * @returns the newly created #JSCContext.
     */
    static new_with_virtual_machine(vm: VirtualMachine): Context
    _init(config?: Context.ConstructorProperties): void
    /**
     * Get the #JSCContext that is currently executing a function. This should only be
     * called within a function or method callback, otherwise %NULL will be returned.
     * @returns the #JSCContext that is currently executing.
     */
    static get_current(): Context | null
}

export module Exception {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Exception {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.Exception

    parent: GObject.Object

    // Owm methods of JavaScriptCore-5.0.JavaScriptCore.Exception

    /**
     * Get a string with the exception backtrace.
     * @returns the exception backtrace string or %NULL.
     */
    get_backtrace_string(): string | null
    /**
     * Get the column number at which `exception` happened.
     * @returns the column number of @exception.
     */
    get_column_number(): number
    /**
     * Get the line number at which `exception` happened.
     * @returns the line number of @exception.
     */
    get_line_number(): number
    /**
     * Get the error message of `exception`.
     * @returns the @exception error message.
     */
    get_message(): string | null
    /**
     * Get the error name of `exception`
     * @returns the @exception error name.
     */
    get_name(): string | null
    /**
     * Get the source URI of `exception`.
     * @returns the the source URI of @exception, or %NULL.
     */
    get_source_uri(): string | null
    /**
     * Return a report message of `exception,` containing all the possible details such us
     * source URI, line, column and backtrace, and formatted to be printed.
     * @returns a new string with the exception report
     */
    report(): string | null
    /**
     * Get the string representation of `exception` error.
     * @returns the string representation of @exception.
     */
    to_string(): string | null

    // Class property signals of JavaScriptCore-5.0.JavaScriptCore.Exception

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * JSCException represents a JavaScript exception.
 * @class 
 */
export class Exception extends GObject.Object {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.Exception

    static name: string
    static $gtype: GObject.GType<Exception>

    // Constructors of JavaScriptCore-5.0.JavaScriptCore.Exception

    constructor(config?: Exception.ConstructorProperties) 
    /**
     * Create a new #JSCException in `context` with `message`.
     * @constructor 
     * @param context a #JSCContext
     * @param message the error message
     * @returns a new #JSCException.
     */
    constructor(context: Context, message: string | null) 
    /**
     * Create a new #JSCException in `context` with `message`.
     * @constructor 
     * @param context a #JSCContext
     * @param message the error message
     * @returns a new #JSCException.
     */
    static new(context: Context, message: string | null): Exception
    /**
     * Create a new #JSCException in `context` with `name` and `message`.
     * @constructor 
     * @param context a #JSCContext
     * @param name the error name
     * @param message the error message
     * @returns a new #JSCException.
     */
    static new_with_name(context: Context, name: string | null, message: string | null): Exception
    _init(config?: Exception.ConstructorProperties): void
}

export module Value {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of JavaScriptCore-5.0.JavaScriptCore.Value

        /**
         * The #JSCContext in which the value was created.
         */
        context?: Context | null
    }

}

export interface Value {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.Value

    /**
     * The #JSCContext in which the value was created.
     */
    readonly context: Context

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.Value

    parent: GObject.Object

    // Owm methods of JavaScriptCore-5.0.JavaScriptCore.Value

    /**
     * Gets a pointer to memory that contains the array buffer data.
     * 
     * Obtains a pointer to the memory region that holds the contents of the
     * %ArrayBuffer; modifications done to the data will be visible to JavaScript
     * code. If `size` is not %NULL, the size in bytes of the memory region
     * will also be stored in the pointed location.
     * 
     * Note that the pointer returned by this function is not guaranteed to remain
     * the same after calls to other JSC API functions. If you plan to access the
     * data of the %ArrayBuffer later, you can keep a reference to the `value` and
     * obtain the data pointer at a later point. Keep in mind that if JavaScript
     * code has a chance to run, for example due to main loop events that result
     * in JSC being called, the contents of the memory region might be modified in
     * the meantime. Consider taking a copy of the data and using the copy instead
     * in asynchronous code.
     * @param size location where to store the size of the memory region.
     * @returns pointer to memory.
     */
    array_buffer_get_data(size: number | null): any | null
    /**
     * Gets the size in bytes of the array buffer.
     * 
     * Obtains the size in bytes of the memory region that holds the contents of
     * an %ArrayBuffer.
     * @returns size, in bytes.
     */
    array_buffer_get_size(): number
    /**
     * Invoke <function>new</function> with constructor referenced by `value`. If `n_parameters`
     * is 0 no parameters will be passed to the constructor.
     * @param parameters the #JSCValue<!-- -->s to pass as parameters to the constructor, or %NULL
     * @returns a #JSCValue referencing the newly created object instance.
     */
    constructor_call(parameters: Value[] | null): Value
    /**
     * Call function referenced by `value,` passing the given `parameters`. If `n_parameters`
     * is 0 no parameters will be passed to the function.
     * 
     * This function always returns a #JSCValue, in case of void functions a #JSCValue referencing
     * <function>undefined</function> is returned
     * @param parameters the #JSCValue<!-- -->s to pass as parameters to the function, or %NULL
     * @returns a #JSCValue with the return value of the function.
     */
    function_call(parameters: Value[] | null): Value
    /**
     * Get the #JSCContext in which `value` was created.
     * @returns the #JSCValue context.
     */
    get_context(): Context
    /**
     * Get whether the value referenced by `value` is an array.
     * @returns whether the value is an array.
     */
    is_array(): boolean
    /**
     * Check whether the `value` is an %ArrayBuffer.
     * @returns whether the value is an %ArrayBuffer
     */
    is_array_buffer(): boolean
    /**
     * Get whether the value referenced by `value` is a boolean.
     * @returns whether the value is a boolean.
     */
    is_boolean(): boolean
    /**
     * Get whether the value referenced by `value` is a constructor.
     * @returns whether the value is a constructor.
     */
    is_constructor(): boolean
    /**
     * Get whether the value referenced by `value` is a function
     * @returns whether the value is a function.
     */
    is_function(): boolean
    /**
     * Get whether the value referenced by `value` is <function>null</function>.
     * @returns whether the value is null.
     */
    is_null(): boolean
    /**
     * Get whether the value referenced by `value` is a number.
     * @returns whether the value is a number.
     */
    is_number(): boolean
    /**
     * Get whether the value referenced by `value` is an object.
     * @returns whether the value is an object.
     */
    is_object(): boolean
    /**
     * Get whether the value referenced by `value` is a string
     * @returns whether the value is a string
     */
    is_string(): boolean
    /**
     * Determines whether a value is a typed array.
     * @returns Whether @value is a typed array.
     */
    is_typed_array(): boolean
    /**
     * Get whether the value referenced by `value` is <function>undefined</function>.
     * @returns whether the value is undefined.
     */
    is_undefined(): boolean
    /**
     * Create a new typed array value with elements from an array buffer.
     * 
     * Create a #JSCValue referencing a new typed array value containing
     * elements of the given `type,` where the elements are stored at the memory
     * region represented by the `array_buffer`.
     * 
     * The `type` must *not* be %JSC_TYPED_ARRAY_NONE.
     * 
     * The `offset` and `length` parameters can be used to indicate which part of
     * the array buffer can be accessed through the typed array. If both are
     * omitted (passing zero as `offset,` and `-1` as `length)`, the whole
     * `array_buffer` is exposed through the typed array. Omitting the `length`
     * with a non-zero `offset` will expose the remainder of the `array_buffer`
     * starting at the indicated offset.
     * @param type type of array elements.
     * @param offset offset, in bytes.
     * @param length number of array elements, or `-1`.
     * @returns a #JSCValue
     */
    new_typed_array_with_buffer(type: TypedArrayType, offset: number, length: number): Value
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
    object_define_property_accessor(property_name: string | null, flags: ValuePropertyFlags, property_type: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void
    /**
     * Define or modify a property with `property_name` in object referenced by `value`. This is equivalent to
     * JavaScript <function>Object.defineProperty()</function> when used with a data descriptor.
     * @param property_name the name of the property to define
     * @param flags #JSCValuePropertyFlags
     * @param property_value the default property value
     */
    object_define_property_data(property_name: string | null, flags: ValuePropertyFlags, property_value: Value | null): void
    /**
     * Try to delete property with `name` from `value`. This function will return %FALSE if
     * the property was defined without %JSC_VALUE_PROPERTY_CONFIGURABLE flag.
     * @param name the property name
     * @returns %TRUE if the property was deleted, or %FALSE otherwise.
     */
    object_delete_property(name: string | null): boolean
    /**
     * Get the list of property names of `value`. Only properties defined with %JSC_VALUE_PROPERTY_ENUMERABLE
     * flag will be collected.
     * @returns a %NULL-terminated array of strings containing the    property names, or %NULL if @value doesn't have enumerable properties.  Use g_strfreev() to free.
     */
    object_enumerate_properties(): string[] | null
    /**
     * Get property with `name` from `value`.
     * @param name the property name
     * @returns the property #JSCValue.
     */
    object_get_property(name: string | null): Value
    /**
     * Get property at `index` from `value`.
     * @param index the property index
     * @returns the property #JSCValue.
     */
    object_get_property_at_index(index: number): Value
    /**
     * Get whether `value` has property with `name`.
     * @param name the property name
     * @returns %TRUE if @value has a property with @name, or %FALSE otherwise
     */
    object_has_property(name: string | null): boolean
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
     * @returns a #JSCValue with the return value of the method.
     */
    object_invoke_method(name: string | null, parameters: Value[] | null): Value
    /**
     * Get whether the value referenced by `value` is an instance of class `name`.
     * @param name a class name
     * @returns whether the value is an object instance of class @name.
     */
    object_is_instance_of(name: string | null): boolean
    /**
     * Set `property` with `name` on `value`.
     * @param name the property name
     * @param property the #JSCValue to set
     */
    object_set_property(name: string | null, property: Value): void
    /**
     * Set `property` at `index` on `value`.
     * @param index the property index
     * @param property the #JSCValue to set
     */
    object_set_property_at_index(index: number, property: Value): void
    /**
     * Convert `value` to a boolean.
     * @returns a #gboolean result of the conversion.
     */
    to_boolean(): boolean
    /**
     * Convert `value` to a double.
     * @returns a #gdouble result of the conversion.
     */
    to_double(): number
    /**
     * Convert `value` to a #gint32.
     * @returns a #gint32 result of the conversion.
     */
    to_int32(): number
    /**
     * Create a JSON string of `value` serialization. If `indent` is 0, the resulting JSON will
     * not contain newlines. The size of the indent is clamped to 10 spaces.
     * @param indent The number of spaces to indent when nesting.
     * @returns a null-terminated JSON string with serialization of @value
     */
    to_json(indent: number): string | null
    /**
     * Convert `value` to a string. Use jsc_value_to_string_as_bytes() instead, if you need to
     * handle strings containing null characters.
     * @returns a null-terminated string result of the conversion.
     */
    to_string(): string | null
    /**
     * Convert `value` to a string and return the results as #GBytes. This is needed
     * to handle strings with null characters.
     * @returns a #GBytes with the result of the conversion.
     */
    to_string_as_bytes(): GLib.Bytes
    /**
     * Obtain the %ArrayBuffer for the memory region of the typed array elements.
     * @returns A #JSCValue
     */
    typed_array_get_buffer(): Value
    /**
     * Obtains a pointer to the memory region that holds the elements of the typed
     * array; modifications done to them will be visible to JavaScript code. If
     * `length` is not %NULL, the number of elements contained in the typed array
     * are also stored in the pointed location.
     * 
     * The returned pointer needs to be casted to the appropriate type (see
     * #JSCTypedArrayType), and has the `offset` over the underlying array
     * buffer data applied—that is, points to the first element of the typed
     * array:
     * 
     * 
     * ```c
     * if (jsc_value_typed_array_get_type(value) != JSC_TYPED_ARRAY_UINT32)
     *     g_error ("Only arrays of uint32_t are supported");
     * 
     * gsize count = 0;
     * uint32_t *elements = jsc_value_typed_array_get_contents (value, &count);
     * for (gsize i = 0; i < count; i++)
     *      g_print ("index %zu, value %" PRIu32 "\n", i, elements[i]);
     * ```
     * 
     * 
     * Note that the pointer returned by this function is not guaranteed to remain
     * the same after calls to other JSC API functions. See
     * jsc_value_array_buffer_get_data() for details.
     * @returns pointer to memory.
     */
    typed_array_get_data(): [ /* returnType */ any | null, /* length */ number | null ]
    /**
     * Gets the number of elements in a typed array.
     * @returns number of elements.
     */
    typed_array_get_length(): number
    /**
     * Gets the offset over the underlying array buffer data.
     * @returns offset, in bytes.
     */
    typed_array_get_offset(): number
    /**
     * Gets the size of a typed array.
     * @returns size, in bytes.
     */
    typed_array_get_size(): number
    /**
     * Gets the type of elements contained in a typed array.
     * @returns type of the elements, or %JSC_TYPED_ARRAY_NONE if @value is not a typed array.
     */
    typed_array_get_type(): TypedArrayType

    // Class property signals of JavaScriptCore-5.0.JavaScriptCore.Value

    connect(sigName: "notify::context", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * JSCValue represents a reference to a value in a #JSCContext. The JSCValue
 * protects the referenced value from being garbage collected.
 * @class 
 */
export class Value extends GObject.Object {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.Value

    static name: string
    static $gtype: GObject.GType<Value>

    // Constructors of JavaScriptCore-5.0.JavaScriptCore.Value

    constructor(config?: Value.ConstructorProperties) 
    /**
     * Creates a new %ArrayBuffer from existing `data` in memory.
     * 
     * The `data` is not copied: while this allows sharing data with JavaScript
     * efficiently, the caller must ensure that the memory region remains valid
     * until the newly created object is released by JSC.
     * 
     * Optionally, a `destroy_notify` callback can be provided, which will be
     * invoked with `user_data` as parameter when the %ArrayBuffer object is
     * released. This is intended to be used for freeing resources related to
     * the memory region which contains the data:
     * 
     * 
     * ```!<-- language="C" -->
     * GMappedFile *f = g_mapped_file_new (file_path, TRUE, NULL);
     * JSCValue *value = jsc_value_new_array_buffer (context,
     *     g_mapped_file_get_contents (f), g_mapped_file_get_length (f),
     *     (GDestroyNotify) g_mapped_file_unref, f);
     * ```
     * 
     * 
     * Note that the `user_data` can be the same value as `data:`
     * 
     * 
     * ```!<-- language="C" -->
     * void *bytes = g_malloc0 (100);
     * JSCValue *value = jsc_value_new_array_buffer (context, bytes, 100, g_free, bytes);
     * ```
     * 
     * @constructor 
     * @param context A #JSCContext
     * @param data Pointer to a region of memory.
     * @param size Size in bytes of the memory region.
     * @param destroy_notify destroy notifier for `user_data`.
     * @param user_data user data.
     * @returns A #JSCValue, or %NULL in case of exception.
     */
    static new_array_buffer(context: Context, data: any | null, size: number, destroy_notify: GLib.DestroyNotify | null, user_data: any | null): Value
    /**
     * Create a new #JSCValue referencing an array with the items from `array`. If `array`
     * is %NULL or empty a new empty array will be created. Elements of `array` should be
     * pointers to a #JSCValue.
     * @constructor 
     * @param context a #JSCContext
     * @param array a #GPtrArray
     * @returns a #JSCValue.
     */
    static new_array_from_garray(context: Context, array: Value[] | null): Value
    /**
     * Create a new #JSCValue referencing an array of strings with the items from `strv`. If `array`
     * is %NULL or empty a new empty array will be created.
     * @constructor 
     * @param context a #JSCContext
     * @param strv a %NULL-terminated array of strings
     * @returns a #JSCValue.
     */
    static new_array_from_strv(context: Context, strv: string[]): Value
    /**
     * Create a new #JSCValue from `value`
     * @constructor 
     * @param context a #JSCContext
     * @param value a #gboolean
     * @returns a #JSCValue.
     */
    static new_boolean(context: Context, value: boolean): Value
    /**
     * Create a new #JSCValue referencing a new value created by parsing `json`.
     * @constructor 
     * @param context a #JSCContext
     * @param json the JSON string to be parsed
     * @returns a #JSCValue.
     */
    static new_from_json(context: Context, json: string | null): Value
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
     * @returns a #JSCValue.
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
     * @returns a #JSCValue.
     */
    static new_function(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): Value
    /**
     * Create a new #JSCValue referencing <function>null</function> in `context`.
     * @constructor 
     * @param context a #JSCContext
     * @returns a #JSCValue.
     */
    static new_null(context: Context): Value
    /**
     * Create a new #JSCValue from `number`.
     * @constructor 
     * @param context a #JSCContext
     * @param number a number
     * @returns a #JSCValue.
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
     * @returns a #JSCValue.
     */
    static new_object(context: Context, instance: any | null, jsc_class: Class | null): Value
    /**
     * Create a new #JSCValue from `string`. If you need to create a #JSCValue from a
     * string containing null characters, use jsc_value_new_string_from_bytes() instead.
     * @constructor 
     * @param context a #JSCContext
     * @param string a null-terminated string
     * @returns a #JSCValue.
     */
    static new_string(context: Context, string: string | null): Value
    /**
     * Create a new #JSCValue from `bytes`.
     * @constructor 
     * @param context a #JSCContext
     * @param bytes a #GBytes
     * @returns a #JSCValue.
     */
    static new_string_from_bytes(context: Context, bytes: GLib.Bytes | null): Value
    /**
     * Create a new typed array containing a given amount of elements.
     * 
     * Create a #JSCValue referencing a new typed array with space for `length`
     * elements of a given `type`. As all typed arrays must have an associated
     * `ArrayBuffer`, a new one of suitable size will be allocated to store
     * the elements, which will be initialized to zero.
     * 
     * The `type` must *not* be %JSC_TYPED_ARRAY_NONE.
     * @constructor 
     * @param context a #JSCContext
     * @param type the type of array elements
     * @param length number of elements in the array
     * @returns a #JSCValue
     */
    static new_typed_array(context: Context, type: TypedArrayType, length: number): Value
    /**
     * Create a new #JSCValue referencing <function>undefined</function> in `context`.
     * @constructor 
     * @param context a #JSCContext
     * @returns a #JSCValue.
     */
    static new_undefined(context: Context): Value
    _init(config?: Value.ConstructorProperties): void
}

export module VirtualMachine {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VirtualMachine {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.VirtualMachine

    parent: GObject.Object

    // Class property signals of JavaScriptCore-5.0.JavaScriptCore.VirtualMachine

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * JSCVirtualMachine represents a group of JSCContext<!-- -->s. It allows
 * concurrent JavaScript execution by creating a different instance of
 * JSCVirtualMachine in each thread.
 * 
 * To create a group of JSCContext<!-- -->s pass the same JSCVirtualMachine
 * instance to every JSCContext constructor.
 * @class 
 */
export class VirtualMachine extends GObject.Object {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.VirtualMachine

    static name: string
    static $gtype: GObject.GType<VirtualMachine>

    // Constructors of JavaScriptCore-5.0.JavaScriptCore.VirtualMachine

    constructor(config?: VirtualMachine.ConstructorProperties) 
    /**
     * Create a new #JSCVirtualMachine.
     * @constructor 
     * @returns the newly created #JSCVirtualMachine.
     */
    constructor() 
    /**
     * Create a new #JSCVirtualMachine.
     * @constructor 
     * @returns the newly created #JSCVirtualMachine.
     */
    static new(): VirtualMachine
    _init(config?: VirtualMachine.ConstructorProperties): void
}

export module WeakValue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cleared`
     */
    export interface ClearedSignalCallback {
        ($obj: WeakValue): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of JavaScriptCore-5.0.JavaScriptCore.WeakValue

        /**
         * The #JSCValue referencing the JavaScript value.
         */
        value?: Value | null
    }

}

export interface WeakValue {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.WeakValue

    /**
     * The #JSCValue referencing the JavaScript value.
     */
    readonly value: Value

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.WeakValue

    parent: GObject.Object

    // Owm methods of JavaScriptCore-5.0.JavaScriptCore.WeakValue

    /**
     * Get a #JSCValue referencing the JavaScript value of `weak_value`.
     * @returns a new #JSCValue or %NULL if @weak_value was cleared.
     */
    get_value(): Value

    // Own signals of JavaScriptCore-5.0.JavaScriptCore.WeakValue

    connect(sigName: "cleared", callback: WeakValue.ClearedSignalCallback): number
    connect_after(sigName: "cleared", callback: WeakValue.ClearedSignalCallback): number
    emit(sigName: "cleared", ...args: any[]): void

    // Class property signals of JavaScriptCore-5.0.JavaScriptCore.WeakValue

    connect(sigName: "notify::value", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * JSCWeakValue represents a weak reference to a value in a #JSCContext. It can be used
 * to keep a reference to a JavaScript value without protecting it from being garbage
 * collected and without referencing the #JSCContext either.
 * @class 
 */
export class WeakValue extends GObject.Object {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.WeakValue

    static name: string
    static $gtype: GObject.GType<WeakValue>

    // Constructors of JavaScriptCore-5.0.JavaScriptCore.WeakValue

    constructor(config?: WeakValue.ConstructorProperties) 
    /**
     * Create a new #JSCWeakValue for the JavaScript value referenced by `value`.
     * @constructor 
     * @param value a #JSCValue
     * @returns a new #JSCWeakValue
     */
    constructor(value: Value) 
    /**
     * Create a new #JSCWeakValue for the JavaScript value referenced by `value`.
     * @constructor 
     * @param value a #JSCValue
     * @returns a new #JSCWeakValue
     */
    static new(value: Value): WeakValue
    _init(config?: WeakValue.ConstructorProperties): void
}

export interface ClassClass {
}

export abstract class ClassClass {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ClassClass

    static name: string
}

export interface ClassVTable {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.ClassVTable

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
export class ClassVTable {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ClassVTable

    static name: string
}

export interface ContextClass {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.ContextClass

    parent_class: GObject.ObjectClass
}

export abstract class ContextClass {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ContextClass

    static name: string
}

export interface ContextPrivate {
}

export class ContextPrivate {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ContextPrivate

    static name: string
}

export interface ExceptionClass {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.ExceptionClass

    parent_class: GObject.ObjectClass
}

export abstract class ExceptionClass {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ExceptionClass

    static name: string
}

export interface ExceptionPrivate {
}

export class ExceptionPrivate {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ExceptionPrivate

    static name: string
}

export interface ValueClass {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.ValueClass

    parent_class: GObject.ObjectClass
}

export abstract class ValueClass {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ValueClass

    static name: string
}

export interface ValuePrivate {
}

export class ValuePrivate {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.ValuePrivate

    static name: string
}

export interface VirtualMachineClass {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.VirtualMachineClass

    parent_class: GObject.ObjectClass
}

export abstract class VirtualMachineClass {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.VirtualMachineClass

    static name: string
}

export interface VirtualMachinePrivate {
}

export class VirtualMachinePrivate {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.VirtualMachinePrivate

    static name: string
}

export interface WeakValueClass {

    // Own fields of JavaScriptCore-5.0.JavaScriptCore.WeakValueClass

    parent_class: GObject.ObjectClass
}

export abstract class WeakValueClass {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.WeakValueClass

    static name: string
}

export interface WeakValuePrivate {
}

export class WeakValuePrivate {

    // Own properties of JavaScriptCore-5.0.JavaScriptCore.WeakValuePrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END