// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Template-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Template {

enum Error {
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
enum ExprBuiltin {
    ABS,
    CEIL,
    FLOOR,
    HEX,
    LOG,
    PRINT,
    REPR,
    SQRT,
    TYPEOF,
}
enum ExprType {
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
    USER_FN_CALL,
    GETATTR,
    SETATTR,
    GI_CALL,
    REQUIRE,
    AND,
    OR,
    INVERT_BOOLEAN,
}
enum SymbolType {
    EXPR,
    VALUE,
}
const ENABLE_TRACE: number
const LOG_LEVEL_TRACE: number
/**
 * Template-GLibl major version component (e.g. 1 if %TMPL_VERSION is 1.2.3)
 */
const MAJOR_VERSION: number
/**
 * Template-GLibl micro version component (e.g. 3 if %TMPL_VERSION is 1.2.3)
 */
const MICRO_VERSION: number
/**
 * Template-GLibl minor version component (e.g. 2 if %TMPL_VERSION is 1.2.3)
 */
const MINOR_VERSION: number
/**
 * Dazzle version, encoded as a string, useful for printing and
 * concatenation.
 */
const VERSION_S: string
function errorQuark(): GLib.Quark
function exprFromString(str: string): Expr
interface ScopeResolver {
    (scope: Scope, name: string, symbol: Symbol): boolean
}
interface Template_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Template-1.0.Template.Template

    locator?: TemplateLocator | null
}

interface Template {

    // Own properties of Template-1.0.Template.Template

    locator: TemplateLocator

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
     */
    expand(stream: Gio.OutputStream, scope: Scope | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Expands the template and returns the result as a string.
     * @param scope A #TmplScope or %NULL.
     */
    expandString(scope: Scope | null): string
    /**
     * Gets the template locator used when resolving template includes.
     */
    getLocator(): TemplateLocator
    parse(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    parseFile(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
    parsePath(path: string, cancellable: Gio.Cancellable | null): boolean
    parseResource(path: string, cancellable: Gio.Cancellable | null): boolean
    parseString(input: string): boolean
    setLocator(locator: TemplateLocator): void

    // Class property signals of Template-1.0.Template.Template

    connect(sigName: "notify::locator", callback: (...args: any[]) => void): number
    on(sigName: "notify::locator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locator", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Template extends GObject.Object {

    // Own properties of Template-1.0.Template.Template

    static name: string
    static $gtype: GObject.GType<Template>

    // Constructors of Template-1.0.Template.Template

    constructor(config?: Template_ConstructProps) 
    /**
     * Creates a new #TmplTemplate.
     * 
     * If `locator` is specified, `locator` will be used to resolve include
     * directives when parsing the template.
     * @constructor 
     * @param locator A #TmplTemplateLocator or %NULL.
     */
    constructor(locator: TemplateLocator | null) 
    /**
     * Creates a new #TmplTemplate.
     * 
     * If `locator` is specified, `locator` will be used to resolve include
     * directives when parsing the template.
     * @constructor 
     * @param locator A #TmplTemplateLocator or %NULL.
     */
    static new(locator: TemplateLocator | null): Template
    _init(config?: Template_ConstructProps): void
}

interface TemplateLocator_ConstructProps extends GObject.Object_ConstructProps {
}

interface TemplateLocator {

    // Own fields of Template-1.0.Template.TemplateLocator

    parentInstance: GObject.Object

    // Owm methods of Template-1.0.Template.TemplateLocator

    appendSearchPath(path: string): void
    /**
     * Gets the current search path used by the template locator.
     */
    getSearchPath(): string[]
    /**
     * This will resolve the relative path using the search paths found within
     * the template loader.
     * @param path a relative path to the file
     */
    locate(path: string): Gio.InputStream
    prependSearchPath(path: string): void

    // Class property signals of Template-1.0.Template.TemplateLocator

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
class TemplateLocator extends GObject.Object {

    // Own properties of Template-1.0.Template.TemplateLocator

    static name: string
    static $gtype: GObject.GType<TemplateLocator>

    // Constructors of Template-1.0.Template.TemplateLocator

    constructor(config?: TemplateLocator_ConstructProps) 
    constructor() 
    static new(): TemplateLocator
    _init(config?: TemplateLocator_ConstructProps): void
}

interface Scope {

    // Owm methods of Template-1.0.Template.Scope

    /**
     * If the symbol could not be found, it will be allocated.
     * @param name 
     */
    get(name: string): Symbol
    /**
     * Creates a new scope to contain variables and custom expressions,
     * If `parent` is set, the parent scope will be inherited.
     */
    newWithParent(): Scope
    /**
     * If the symbol could not be found, %NULL is returned.
     * @param name 
     */
    peek(name: string): Symbol | null
    ref(): Scope
    /**
     * If the symbol already exists, it will be overwritten.
     * 
     * If `symbol` is %NULL, the symbol will be removed from scope.
     * @param name the name of the symbol
     * @param symbol An #TmplSymbol or %NULL.
     */
    set(name: string, symbol: Symbol | null): void
    /**
     * Sets the value of the symbol named `name` to a gboolean value of `value`.
     * @param name a name for the symbol
     * @param value a #gboolean
     */
    setBoolean(name: string, value: boolean): void
    /**
     * Sets the value of the symbol named `name` to a gdouble value of `value`.
     * @param name a name for the symbol
     * @param value a #gdouble
     */
    setDouble(name: string, value: number): void
    /**
     * Sets the value of the symbol named `name` to the object `value`.
     * @param name a name for the symbol
     * @param value a #GObject or %NULL.
     */
    setObject(name: string, value: GObject.Object | null): void
    setResolver(resolver: ScopeResolver): void
    /**
     * Sets the value of the symbol named `name` to a string matching `value`.
     * @param name a name for the symbol
     * @param value A string or %NULL.
     */
    setString(name: string, value: string | null): void
    /**
     * Sets the value of the symbol named `name` to the strv `value`.
     * @param name a name for the symbol
     * @param value the value to set it to, or %NULL
     */
    setStrv(name: string, value: string[] | null): void
    /**
     * Sets the contents of the symbol named `name` to the value `value`.
     * @param name a name for the symbol
     * @param value A #GValue or %NULL
     */
    setValue(name: string, value: any | null): void
    /**
     * Sets the value of the symbol named `name` to the variant `value`.
     * 
     * If `value` has a floating reference, it is consumed.
     * @param name a name for the symbol
     * @param value the variant to set it to, or %NULL
     */
    setVariant(name: string, value: GLib.Variant | null): void
    /**
     * Sets the symbol named `name` to `symbol` in `scope`.
     * 
     * This differs from tmpl_scope_set() in that it takes ownership
     * of `symbol`.
     * @param name The name of the symbol
     * @param symbol A #TmplSymbol or %NULL
     */
    take(name: string, symbol: Symbol | null): void
    unref(): void
}

class Scope {

    // Own properties of Template-1.0.Template.Scope

    static name: string

    // Constructors of Template-1.0.Template.Scope

    /**
     * Creates a new scope to contain variables and custom expressions,
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new scope to contain variables and custom expressions,
     * @constructor 
     */
    static new(): Scope
}

interface Symbol {

    // Owm methods of Template-1.0.Template.Symbol

    assignBoolean(vBool: boolean): void
    assignDouble(vDouble: number): void
    /**
     * Sets the value to the object `v_object`.
     * @param vObject a #GObject or %NULL.
     */
    assignObject(vObject: GObject.Object | null): void
    assignString(vString: string): void
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
    getExpr(): [ /* returnType */ Expr, /* params */ string[] | null ]
    getSymbolType(): SymbolType
    getValue(value: any): void
    ref(): Symbol
    unref(): void
}

class Symbol {

    // Own properties of Template-1.0.Template.Symbol

    static name: string

    // Constructors of Template-1.0.Template.Symbol

    constructor() 
    static new(): Symbol
}

interface TemplateClass {

    // Own fields of Template-1.0.Template.TemplateClass

    parentClass: GObject.ObjectClass
}

abstract class TemplateClass {

    // Own properties of Template-1.0.Template.TemplateClass

    static name: string
}

interface TemplateLocatorClass {

    // Own fields of Template-1.0.Template.TemplateLocatorClass

    parentInstance: GObject.ObjectClass
    locate: (self: TemplateLocator, path: string) => Gio.InputStream
}

abstract class TemplateLocatorClass {

    // Own properties of Template-1.0.Template.TemplateLocatorClass

    static name: string
}

interface Expr {

    // Owm methods of Template-1.0.Template.Expr

    eval(scope: Scope, returnValue: any): boolean
    newGetattr(attr: string): Expr
    newGiCall(name: string, params: Expr): Expr
    newInvertBoolean(): Expr
    newSetattr(attr: string, right: Expr): Expr
    ref(): Expr
    unref(): void
}

class Expr {

    // Own properties of Template-1.0.Template.Expr

    static name: string

    // Constructors of Template-1.0.Template.Expr

    static newBoolean(value: boolean): Expr
    static newFlow(type: ExprType, condition: Expr, primary: Expr, secondary: Expr): Expr
    static newFnCall(builtin: ExprBuiltin, param: Expr): Expr
    static newNumber(value: number): Expr
    static newRequire(typelib: string, version: string): Expr
    static newSimple(type: ExprType, left: Expr, right: Expr): Expr
    static newString(value: string, length: number): Expr
    static newSymbolAssign(symbol: string, right: Expr): Expr
    static newSymbolRef(symbol: string): Expr
    static newUserFnCall(name: string, param: Expr): Expr
    static fromString(str: string): Expr
}

}
export default Template;