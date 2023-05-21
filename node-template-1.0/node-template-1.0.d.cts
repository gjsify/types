
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-template-1.0-import.d.ts';
    
/**
 * Template-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum Error {
    INVALID_STATE,
    TEMPLATE_NOT_FOUND,
    CIRCULAR_INCLUDE,
    SYNTAX_ERROR,
    LEXER_FAILURE,
    TYPE_MISMATCH,
    INVALID_OP_CODE,
    DIVIDE_BY_ZERO,
    MISSING_SYMBOL,
    SYMBOL_REDEFINED,
    NOT_AN_OBJECT,
    NULL_POINTER,
    NO_SUCH_PROPERTY,
    GI_FAILURE,
    RUNTIME_ERROR,
    NOT_IMPLEMENTED,
    NOT_A_VALUE,
    NOT_A_FUNCTION,
}
export enum ExprBuiltin {
    ABS,
    CEIL,
    FLOOR,
    HEX,
    LOG,
    PRINT,
    REPR,
    SQRT,
    TYPEOF,
    ASSERT,
    SIN,
    TAN,
    COS,
    PRINTERR,
    CAST_BYTE,
    CAST_CHAR,
    CAST_I32,
    CAST_U32,
    CAST_I64,
    CAST_U64,
    CAST_FLOAT,
    CAST_DOUBLE,
    CAST_BOOL,
}
export enum ExprType {
    ADD,
    SUB,
    MUL,
    DIV,
    BOOLEAN,
    NUMBER,
    STRING,
    GT,
    LT,
    NE,
    EQ,
    GTE,
    LTE,
    UNARY_MINUS,
    STMT_LIST,
    IF,
    WHILE,
    SYMBOL_REF,
    SYMBOL_ASSIGN,
    FN_CALL,
    ANON_FN_CALL,
    USER_FN_CALL,
    GETATTR,
    SETATTR,
    GI_CALL,
    REQUIRE,
    AND,
    OR,
    INVERT_BOOLEAN,
    ARGS,
    FUNC,
    NOP,
    NULL,
}
export enum SymbolType {
    EXPR,
    VALUE,
}
export const ENABLE_TRACE: number
export const LOG_LEVEL_TRACE: number
/**
 * Template-GLibl major version component (e.g. 1 if %TMPL_VERSION is 1.2.3)
 */
export const MAJOR_VERSION: number
/**
 * Template-GLibl micro version component (e.g. 3 if %TMPL_VERSION is 1.2.3)
 */
export const MICRO_VERSION: number
/**
 * Template-GLibl minor version component (e.g. 2 if %TMPL_VERSION is 1.2.3)
 */
export const MINOR_VERSION: number
/**
 * Template-GLib version, encoded as a string, useful for printing and
 * concatenation.
 */
export const VERSION_S: string | null
export function errorQuark(): GLib.Quark
export function exprFromString(str: string | null): Expr
export interface ScopeResolver {
    (scope: Scope, name: string | null, symbol: Symbol): boolean
}
export module Template {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Template-1.0.Template.Template

        locator?: TemplateLocator | null
    }

}

export interface Template {

    // Own properties of Template-1.0.Template.Template

    locator: TemplateLocator
    __gtype__: number

    // Own fields of Template-1.0.Template.Template

    parentInstance: GObject.Object

    // Owm methods of Template-1.0.Template.Template

    /**
     * Expands a template into `stream` using the `scope` provided.
     * 
     * `scope` should have all of the variables set that are required to expand
     * the template, or you will get a symbol reference error and %FALSE will
     * be returned.
     * 
     * To set a symbol value, get the symbol with tmpl_scope_get() and assign
     * a value using tmpl_scope_assign_value() or similar methods.
     * @param stream a #GOutputStream to write the results to
     * @param scope A #TmplScope containing state for the template, or %NULL.
     * @param cancellable An optional cancellable for the operation.
     * @returns %TRUE if successful, otherwise %FALSE and @error is set.
     */
    expand(stream: Gio.OutputStream, scope: Scope | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Expands the template and returns the result as a string.
     * @param scope A #TmplScope or %NULL.
     * @returns A newly allocated string, or %NULL upon failure.
     */
    expandString(scope: Scope | null): string | null
    /**
     * Gets the template locator used when resolving template includes.
     * @returns a #TmplTemplateLocator or %NULL.
     */
    getLocator(): TemplateLocator
    parse(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    parseFile(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
    parsePath(path: string | null, cancellable: Gio.Cancellable | null): boolean
    parseResource(path: string | null, cancellable: Gio.Cancellable | null): boolean
    parseString(input: string | null): boolean
    setLocator(locator: TemplateLocator): void

    // Class property signals of Template-1.0.Template.Template

    connect(sigName: "notify::locator", callback: (...args: any[]) => void): number
    on(sigName: "notify::locator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locator", ...args: any[]): void
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
}

export class Template extends GObject.Object {

    // Own properties of Template-1.0.Template.Template

    static name: string

    // Constructors of Template-1.0.Template.Template

    constructor(config?: Template.ConstructorProperties) 
    /**
     * Creates a new #TmplTemplate.
     * 
     * If `locator` is specified, `locator` will be used to resolve include
     * directives when parsing the template.
     * @constructor 
     * @param locator A #TmplTemplateLocator or %NULL.
     * @returns A #TmplTemplate.
     */
    constructor(locator: TemplateLocator | null) 
    /**
     * Creates a new #TmplTemplate.
     * 
     * If `locator` is specified, `locator` will be used to resolve include
     * directives when parsing the template.
     * @constructor 
     * @param locator A #TmplTemplateLocator or %NULL.
     * @returns A #TmplTemplate.
     */
    static new(locator: TemplateLocator | null): Template
    _init(config?: Template.ConstructorProperties): void
}

export module TemplateLocator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TemplateLocator {

    // Own properties of Template-1.0.Template.TemplateLocator

    __gtype__: number

    // Own fields of Template-1.0.Template.TemplateLocator

    parentInstance: GObject.Object

    // Owm methods of Template-1.0.Template.TemplateLocator

    appendSearchPath(path: string | null): void
    /**
     * Gets the current search path used by the template locator.
     * @returns A %NULL-terminated array of strings.
     */
    getSearchPath(): string[]
    // Has conflict: locate(path: string | null): Gio.InputStream
    prependSearchPath(path: string | null): void

    // Own virtual methods of Template-1.0.Template.TemplateLocator

    /**
     * This will resolve the relative path using the search paths found within
     * the template loader.
     * @virtual 
     * @param path a relative path to the file
     * @returns A #GInputStream or %NULL and @error is set.
     */
    locate(path: string | null): Gio.InputStream

    // Class property signals of Template-1.0.Template.TemplateLocator

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
}

/**
 * The #TmplTemplateLoader class is used to specify how templates
 * should be loaded. This can be used directly by your code that
 * will compile the data streams into #TmplTemplate instances, or
 * by a #TmplTemplate that is resolving includes from the
 * `{{include "path.tmpl"}}` directive.
 * 
 * See #TmplTemplate:locator for more information.
 * @class 
 */
export class TemplateLocator extends GObject.Object {

    // Own properties of Template-1.0.Template.TemplateLocator

    static name: string

    // Constructors of Template-1.0.Template.TemplateLocator

    constructor(config?: TemplateLocator.ConstructorProperties) 
    constructor() 
    static new(): TemplateLocator
    _init(config?: TemplateLocator.ConstructorProperties): void
}

export interface Scope {

    // Owm methods of Template-1.0.Template.Scope

    /**
     * Gets a string if the symbol `name` is a string.
     * 
     * Otherwise, %NULL is returned.
     * @param name 
     * @returns a string or %NULL
     */
    dupString(name: string | null): string | null
    /**
     * If the symbol could not be found, it will be allocated.
     * @param name 
     * @returns A #TmplSymbol.
     */
    get(name: string | null): Symbol
    /**
     * Gets the names of all symbols within the scope.
     * @param recursive if the parent scopes should be included
     * @returns    an array containing the names of all symbols within the scope.
     */
    listSymbols(recursive: boolean): string[]
    /**
     * Creates a new scope to contain variables and custom expressions,
     * If `parent` is set, the parent scope will be inherited.
     * @returns A newly created #TmplScope.
     */
    newWithParent(): Scope
    /**
     * If the symbol could not be found, %NULL is returned.
     * @param name 
     * @returns A #TmplSymbol or %NULL.
     */
    peek(name: string | null): Symbol | null
    ref(): Scope
    /**
     * Imports `namespace_` into `self` so it can be used by expressions.
     * @param namespace the namespace to import into the scope
     * @param version the version of `namespace_` to import
     * @returns %TRUE if successful; otherwise %FALSE
     */
    require(namespace: string | null, version: string | null): boolean
    /**
     * If the symbol already exists, it will be overwritten.
     * 
     * If `symbol` is %NULL, the symbol will be removed from scope.
     * @param name the name of the symbol
     * @param symbol An #TmplSymbol or %NULL.
     */
    set(name: string | null, symbol: Symbol | null): void
    /**
     * Sets the value of the symbol named `name` to a gboolean value of `value`.
     * @param name a name for the symbol
     * @param value a #gboolean
     */
    setBoolean(name: string | null, value: boolean): void
    /**
     * Sets the value of the symbol named `name` to a gdouble value of `value`.
     * @param name a name for the symbol
     * @param value a #gdouble
     */
    setDouble(name: string | null, value: number): void
    setNull(name: string | null): void
    /**
     * Sets the value of the symbol named `name` to the object `value`.
     * @param name a name for the symbol
     * @param value a #GObject or %NULL.
     */
    setObject(name: string | null, value: GObject.Object | null): void
    setResolver(resolver: ScopeResolver): void
    /**
     * Sets the value of the symbol named `name` to a string matching `value`.
     * @param name a name for the symbol
     * @param value A string or %NULL.
     */
    setString(name: string | null, value: string | null): void
    /**
     * Sets the value of the symbol named `name` to the strv `value`.
     * @param name a name for the symbol
     * @param value the value to set it to, or %NULL
     */
    setStrv(name: string | null, value: string[] | null): void
    /**
     * Sets the contents of the symbol named `name` to the value `value`.
     * @param name a name for the symbol
     * @param value A #GValue or %NULL
     */
    setValue(name: string | null, value: any | null): void
    /**
     * Sets the value of the symbol named `name` to the variant `value`.
     * 
     * If `value` has a floating reference, it is consumed.
     * @param name a name for the symbol
     * @param value the variant to set it to, or %NULL
     */
    setVariant(name: string | null, value: GLib.Variant | null): void
    /**
     * Sets the symbol named `name` to `symbol` in `scope`.
     * 
     * This differs from tmpl_scope_set() in that it takes ownership
     * of `symbol`.
     * @param name The name of the symbol
     * @param symbol A #TmplSymbol or %NULL
     */
    take(name: string | null, symbol: Symbol | null): void
    unref(): void
}

export class Scope {

    // Own properties of Template-1.0.Template.Scope

    static name: string

    // Constructors of Template-1.0.Template.Scope

    /**
     * Creates a new scope to contain variables and custom expressions,
     * @constructor 
     * @returns A newly created #TmplScope.
     */
    constructor() 
    /**
     * Creates a new scope to contain variables and custom expressions,
     * @constructor 
     * @returns A newly created #TmplScope.
     */
    static new(): Scope
}

export interface Symbol {

    // Owm methods of Template-1.0.Template.Symbol

    assignBoolean(vBool: boolean): void
    assignDouble(vDouble: number): void
    /**
     * Sets the value to the object `v_object`.
     * @param vObject a #GObject or %NULL.
     */
    assignObject(vObject: GObject.Object | null): void
    assignString(vString: string | null): void
    /**
     * Sets the value to the strv `strv`.
     * @param strv the value to set, or %NULL
     */
    assignStrv(strv: string[] | null): void
    assignValue(value: any): void
    /**
     * Sets the value to the #GVariant `v_variant`.
     * 
     * If `v_variant` has a floating reference, it is consumed.
     * @param vVariant a #GVariant or %NULL.
     */
    assignVariant(vVariant: GLib.Variant | null): void
    getBoxed(): any | null
    getExpr(): [ /* returnType */ Expr, /* params */ string[] | null ]
    getSymbolType(): SymbolType
    getValue(value: any): void
    holds(type: GObject.GType): boolean
    ref(): Symbol
    unref(): void
}

export class Symbol {

    // Own properties of Template-1.0.Template.Symbol

    static name: string

    // Constructors of Template-1.0.Template.Symbol

    constructor() 
    static new(): Symbol
}

export interface TemplateClass {

    // Own fields of Template-1.0.Template.TemplateClass

    parentClass: GObject.ObjectClass
}

export abstract class TemplateClass {

    // Own properties of Template-1.0.Template.TemplateClass

    static name: string
}

export interface TemplateLocatorClass {

    // Own fields of Template-1.0.Template.TemplateLocatorClass

    parentInstance: GObject.ObjectClass
    locate: (self: TemplateLocator, path: string | null) => Gio.InputStream
}

export abstract class TemplateLocatorClass {

    // Own properties of Template-1.0.Template.TemplateLocatorClass

    static name: string
}

export interface Expr {

    // Owm methods of Template-1.0.Template.Expr

    eval(scope: Scope, returnValue: any): boolean
    newAnonCall(params: Expr): Expr
    newGetattr(attr: string | null): Expr
    newGiCall(name: string | null, params: Expr): Expr
    newInvertBoolean(): Expr
    newSetattr(attr: string | null, right: Expr): Expr
    ref(): Expr
    unref(): void
}

export class Expr {

    // Own properties of Template-1.0.Template.Expr

    static name: string

    // Constructors of Template-1.0.Template.Expr

    static newBoolean(value: boolean): Expr
    static newFlow(type: ExprType, condition: Expr, primary: Expr, secondary: Expr): Expr
    static newFnCall(builtin: ExprBuiltin, param: Expr): Expr
    static newFunc(name: string | null, symlist: string | null, list: Expr): Expr
    static newNop(): Expr
    static newNull(): Expr
    static newNumber(value: number): Expr
    static newRequire(typelib: string | null, version: string | null): Expr
    static newSimple(type: ExprType, left: Expr, right: Expr): Expr
    /**
     * Creates a new statement list for which the last item will be
     * used as the "return value" from execution.
     * @constructor 
     * @param stmts a #GPtrArray of   #TmplExpr which will be evaluated in sequence.
     * @returns a new #TmplExpr
     */
    static newStmtList(stmts: Expr[]): Expr
    static newString(value: string | null, length: number): Expr
    static newSymbolAssign(symbol: string | null, right: Expr): Expr
    static newSymbolRef(symbol: string | null): Expr
    static newUserFnCall(name: string | null, param: Expr): Expr
    static fromString(str: string | null): Expr
}

// END