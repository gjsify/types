/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './template-1.0-ambient.d.ts';

/**
 * Template-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Template {
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields of Template.Error

        static INVALID_STATE: number;
        static TEMPLATE_NOT_FOUND: number;
        static CIRCULAR_INCLUDE: number;
        static SYNTAX_ERROR: number;
        static LEXER_FAILURE: number;
        static TYPE_MISMATCH: number;
        static INVALID_OP_CODE: number;
        static DIVIDE_BY_ZERO: number;
        static MISSING_SYMBOL: number;
        static SYMBOL_REDEFINED: number;
        static NOT_AN_OBJECT: number;
        static NULL_POINTER: number;
        static NO_SUCH_PROPERTY: number;
        static GI_FAILURE: number;
        static RUNTIME_ERROR: number;
        static NOT_IMPLEMENTED: number;
        static NOT_A_VALUE: number;
        static NOT_A_FUNCTION: number;

        // Constructors of Template.Error

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Template.Error

        static quark(): GLib.Quark;
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
    enum SymbolType {
        EXPR,
        VALUE,
    }
    const ENABLE_TRACE: number;
    const LOG_LEVEL_TRACE: number;
    /**
     * Template-GLibl major version component (e.g. 1 if %TMPL_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * Template-GLibl micro version component (e.g. 3 if %TMPL_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * Template-GLibl minor version component (e.g. 2 if %TMPL_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * Template-GLib version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    function error_quark(): GLib.Quark;
    function expr_from_string(str: string): Expr;
    interface ScopeResolver {
        (scope: Scope, name: string, symbol: Symbol): boolean;
    }
    module Template {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            locator: TemplateLocator;
        }
    }

    class Template extends GObject.Object {
        static $gtype: GObject.GType<Template>;

        // Own properties of Template.Template

        get locator(): TemplateLocator;
        set locator(val: TemplateLocator);

        // Constructors of Template.Template

        constructor(properties?: Partial<Template.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](locator?: TemplateLocator | null): Template;

        // Own methods of Template.Template

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
        expand(stream: Gio.OutputStream, scope?: Scope | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Expands the template and returns the result as a string.
         * @param scope A #TmplScope or %NULL.
         * @returns A newly allocated string, or %NULL upon failure.
         */
        expand_string(scope?: Scope | null): string;
        /**
         * Gets the template locator used when resolving template includes.
         * @returns a #TmplTemplateLocator or %NULL.
         */
        get_locator(): TemplateLocator;
        parse(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
        parse_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
        parse_path(path: string, cancellable?: Gio.Cancellable | null): boolean;
        parse_resource(path: string, cancellable?: Gio.Cancellable | null): boolean;
        parse_string(input: string): boolean;
        set_locator(locator: TemplateLocator): void;
    }

    module TemplateLocator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #TmplTemplateLoader class is used to specify how templates
     * should be loaded. This can be used directly by your code that
     * will compile the data streams into #TmplTemplate instances, or
     * by a #TmplTemplate that is resolving includes from the
     * `{{include "path.tmpl"}}` directive.
     *
     * See #TmplTemplate:locator for more information.
     */
    class TemplateLocator extends GObject.Object {
        static $gtype: GObject.GType<TemplateLocator>;

        // Constructors of Template.TemplateLocator

        constructor(properties?: Partial<TemplateLocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TemplateLocator;

        // Own virtual methods of Template.TemplateLocator

        /**
         * This will resolve the relative path using the search paths found within
         * the template loader.
         * @param path a relative path to the file
         */
        vfunc_locate(path: string): Gio.InputStream;

        // Own methods of Template.TemplateLocator

        append_search_path(path: string): void;
        /**
         * Gets the current search path used by the template locator.
         * @returns A %NULL-terminated array of strings.
         */
        get_search_path(): string[];
        /**
         * This will resolve the relative path using the search paths found within
         * the template loader.
         * @param path a relative path to the file
         * @returns A #GInputStream or %NULL and @error is set.
         */
        locate(path: string): Gio.InputStream;
        prepend_search_path(path: string): void;
    }

    abstract class Scope {
        static $gtype: GObject.GType<Scope>;

        // Constructors of Template.Scope

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): Scope;

        // Own methods of Template.Scope

        /**
         * Gets a string if the symbol `name` is a string.
         *
         * Otherwise, %NULL is returned.
         * @param name
         * @returns a string or %NULL
         */
        dup_string(name: string): string | null;
        /**
         * If the symbol could not be found, it will be allocated.
         * @param name
         * @returns A #TmplSymbol.
         */
        get(name: string): Symbol;
        /**
         * Gets the names of all symbols within the scope.
         * @param recursive if the parent scopes should be included
         * @returns an array containing the names of all symbols within the scope.
         */
        list_symbols(recursive: boolean): string[];
        /**
         * Creates a new scope to contain variables and custom expressions,
         * If `parent` is set, the parent scope will be inherited.
         * @returns A newly created #TmplScope.
         */
        new_with_parent(): Scope;
        /**
         * If the symbol could not be found, %NULL is returned.
         * @param name
         * @returns A #TmplSymbol or %NULL.
         */
        peek(name: string): Symbol | null;
        ref(): Scope;
        /**
         * Imports `namespace_` into `self` so it can be used by expressions.
         * @param namespace_ the namespace to import into the scope
         * @param version the version of @namespace_ to import
         * @returns %TRUE if successful; otherwise %FALSE
         */
        require(namespace_: string, version?: string | null): boolean;
        /**
         * If the symbol already exists, it will be overwritten.
         *
         * If `symbol` is %NULL, the symbol will be removed from scope.
         * @param name the name of the symbol
         * @param symbol An #TmplSymbol or %NULL.
         */
        set(name: string, symbol?: Symbol | null): void;
        /**
         * Sets the value of the symbol named `name` to a gboolean value of `value`.
         * @param name a name for the symbol
         * @param value a #gboolean
         */
        set_boolean(name: string, value: boolean): void;
        /**
         * Sets the value of the symbol named `name` to a gdouble value of `value`.
         * @param name a name for the symbol
         * @param value a #gdouble
         */
        set_double(name: string, value: number): void;
        set_null(name: string): void;
        /**
         * Sets the value of the symbol named `name` to the object `value`.
         * @param name a name for the symbol
         * @param value a #GObject or %NULL.
         */
        set_object(name: string, value?: GObject.Object | null): void;
        set_resolver(resolver: ScopeResolver): void;
        /**
         * Sets the value of the symbol named `name` to a string matching `value`.
         * @param name a name for the symbol
         * @param value A string or %NULL.
         */
        set_string(name: string, value?: string | null): void;
        /**
         * Sets the value of the symbol named `name` to the strv `value`.
         * @param name a name for the symbol
         * @param value the value to set it to, or %NULL
         */
        set_strv(name: string, value?: string[] | null): void;
        /**
         * Sets the contents of the symbol named `name` to the value `value`.
         * @param name a name for the symbol
         * @param value A #GValue or %NULL
         */
        set_value(name: string, value?: GObject.Value | null): void;
        /**
         * Sets the value of the symbol named `name` to the variant `value`.
         *
         * If `value` has a floating reference, it is consumed.
         * @param name a name for the symbol
         * @param value the variant to set it to, or %NULL
         */
        set_variant(name: string, value?: GLib.Variant | null): void;
        /**
         * Sets the symbol named `name` to `symbol` in `scope`.
         *
         * This differs from tmpl_scope_set() in that it takes ownership
         * of `symbol`.
         * @param name The name of the symbol
         * @param symbol A #TmplSymbol or %NULL
         */
        take(name: string, symbol?: Symbol | null): void;
        unref(): void;
    }

    abstract class Symbol {
        static $gtype: GObject.GType<Symbol>;

        // Constructors of Template.Symbol

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): Symbol;

        // Own methods of Template.Symbol

        assign_boolean(v_bool: boolean): void;
        assign_double(v_double: number): void;
        /**
         * Sets the value to the object `v_object`.
         * @param v_object a #GObject or %NULL.
         */
        assign_object(v_object?: GObject.Object | null): void;
        assign_string(v_string: string): void;
        /**
         * Sets the value to the strv `strv`.
         * @param strv the value to set, or %NULL
         */
        assign_strv(strv?: string[] | null): void;
        assign_value(value: GObject.Value): void;
        /**
         * Sets the value to the #GVariant `v_variant`.
         *
         * If `v_variant` has a floating reference, it is consumed.
         * @param v_variant a #GVariant or %NULL.
         */
        assign_variant(v_variant?: GLib.Variant | null): void;
        get_boxed(): any | null;
        get_expr(): [Expr, string[] | null];
        get_symbol_type(): SymbolType;
        get_value(value: GObject.Value): void;
        holds(type: GObject.GType): boolean;
        ref(): Symbol;
        unref(): void;
    }

    type TemplateClass = typeof Template;
    type TemplateLocatorClass = typeof TemplateLocator;
    class Expr {
        static $gtype: GObject.GType<Expr>;

        // Constructors of Template.Expr

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static new_boolean(value: boolean): Expr;

        static new_flow(type: ExprType, condition: Expr, primary: Expr, secondary: Expr): Expr;

        static new_fn_call(builtin: ExprBuiltin, param: Expr): Expr;

        static new_func(name: string, symlist: string, list: Expr): Expr;

        static new_nop(): Expr;

        static new_null(): Expr;

        static new_number(value: number): Expr;

        static new_require(typelib: string, version: string): Expr;

        static new_simple(type: ExprType, left: Expr, right: Expr): Expr;

        static new_stmt_list(stmts: Expr[]): Expr;

        static new_string(value: string, length: number): Expr;

        static new_symbol_assign(symbol: string, right: Expr): Expr;

        static new_symbol_ref(symbol: string): Expr;

        static new_user_fn_call(name: string, param: Expr): Expr;

        // Own static methods of Template.Expr

        static from_string(str: string): Expr;

        // Own methods of Template.Expr

        ['eval'](scope: Scope, return_value: GObject.Value): boolean;
        new_anon_call(params: Expr): Expr;
        new_getattr(attr: string): Expr;
        new_gi_call(name: string, params: Expr): Expr;
        new_invert_boolean(): Expr;
        new_setattr(attr: string, right: Expr): Expr;
        ref(): Expr;
        unref(): void;
    }

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

export default Template;
// END
