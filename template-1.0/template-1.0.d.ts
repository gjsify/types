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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Template {
    /**
     * Template-1.0
     */

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

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

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace ExprBuiltin {
        export const $gtype: GObject.GType<ExprBuiltin>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace ExprType {
        export const $gtype: GObject.GType<ExprType>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace SymbolType {
        export const $gtype: GObject.GType<SymbolType>;
    }

    /**
     * @gir-type Enum
     */
    enum SymbolType {
        EXPR,
        VALUE,
    }

    const ENABLE_TRACE: number;
    const LOG_LEVEL_TRACE: number;
    /**
     * Template-GLibl major version component (e.g. 1 if `TMPL_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * Template-GLibl micro version component (e.g. 3 if `TMPL_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * Template-GLibl minor version component (e.g. 2 if `TMPL_VERSION` is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * Template-GLib version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    function error_quark(): GLib.Quark;
    /**
     * @param str
     */
    function expr_from_string(str: string): Expr;
    /**
     * @gir-type Callback
     */
    interface ScopeResolver {
        (scope: Scope, name: string, symbol: Symbol): boolean;
    }
    namespace Template {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::locator': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            locator: TemplateLocator;
        }
    }

    /**
     * @gir-type Class
     */
    class Template extends GObject.Object {
        static $gtype: GObject.GType<Template>;

        // Properties

        get locator(): TemplateLocator;
        set locator(val: TemplateLocator);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Template.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Template.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](locator?: TemplateLocator | null): Template;

        // Signals

        /** @signal */
        connect<K extends keyof Template.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Template.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Template.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Template.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Template.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Template.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Expands a template into `stream` using the `scope` provided.
         *
         * `scope` should have all of the variables set that are required to expand
         * the template, or you will get a symbol reference error and `false` will
         * be returned.
         *
         * To set a symbol value, get the symbol with `tmpl_scope_get()` and assign
         * a value using `tmpl_scope_assign_value()` or similar methods.
         * @param stream a {@link Gio.OutputStream} to write the results to
         * @param scope A {@link Template.Scope} containing state for the template, or `null`.
         * @param cancellable An optional cancellable for the operation.
         * @returns `true` if successful, otherwise `false` and `error` is set.
         */
        expand(stream: Gio.OutputStream, scope?: Scope | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Expands the template and returns the result as a string.
         * @param scope A {@link Template.Scope} or `null`.
         * @returns A newly allocated string, or `null` upon failure.
         */
        expand_string(scope?: Scope | null): string;
        /**
         * Gets the template locator used when resolving template includes.
         * @returns a {@link Template.TemplateLocator} or `null`.
         */
        get_locator(): TemplateLocator;
        /**
         * @param stream
         * @param cancellable
         */
        parse(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param file
         * @param cancellable
         */
        parse_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param path
         * @param cancellable
         */
        parse_path(path: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param path
         * @param cancellable
         */
        parse_resource(path: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param input
         */
        parse_string(input: string): boolean;
        /**
         * @param locator
         */
        set_locator(locator: TemplateLocator): void;
    }

    namespace TemplateLocator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The `TmplTemplateLoader` class is used to specify how templates
     * should be loaded. This can be used directly by your code that
     * will compile the data streams into {@link Template.Template} instances, or
     * by a {@link Template.Template} that is resolving includes from the
     * `{{include "path.tmpl"}}` directive.
     *
     * See {@link Template.Template.locator} for more information.
     * @gir-type Class
     */
    class TemplateLocator extends GObject.Object {
        static $gtype: GObject.GType<TemplateLocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TemplateLocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TemplateLocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TemplateLocator;

        // Signals

        /** @signal */
        connect<K extends keyof TemplateLocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TemplateLocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TemplateLocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TemplateLocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TemplateLocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TemplateLocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This will resolve the relative path using the search paths found within
         * the template loader.
         * @param path a relative path to the file
         * @virtual
         */
        vfunc_locate(path: string): Gio.InputStream;

        // Methods

        /**
         * @param path
         */
        append_search_path(path: string): void;
        /**
         * Gets the current search path used by the template locator.
         * @returns A `null`-terminated array of strings.
         */
        get_search_path(): string[];
        /**
         * This will resolve the relative path using the search paths found within
         * the template loader.
         * @param path a relative path to the file
         * @returns A {@link Gio.InputStream} or `null` and `error` is set.
         */
        locate(path: string): Gio.InputStream;
        /**
         * @param path
         */
        prepend_search_path(path: string): void;
    }

    /**
     * @gir-type Struct
     */
    class Scope {
        static $gtype: GObject.GType<Scope>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Scope;

        // Methods

        /**
         * Gets a string if the symbol `name` is a string.
         *
         * Otherwise, `null` is returned.
         * @param name
         * @returns a string or `null`
         */
        dup_string(name: string): string | null;
        /**
         * If the symbol could not be found, it will be allocated.
         * @param name
         * @returns A {@link Template.Symbol}.
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
         * @returns A newly created {@link Template.Scope}.
         */
        new_with_parent(): Scope;
        /**
         * If the symbol could not be found, `null` is returned.
         * @param name
         * @returns A {@link Template.Symbol} or `null`.
         */
        peek(name: string): Symbol | null;
        ref(): Scope;
        /**
         * Imports `namespace_` into `self` so it can be used by expressions.
         * @param namespace_ the namespace to import into the scope
         * @param version the version of `namespace_` to import
         * @returns `true` if successful; otherwise `false`
         */
        require(namespace_: string, version?: string | null): boolean;
        /**
         * If the symbol already exists, it will be overwritten.
         *
         * If `symbol` is `null`, the symbol will be removed from scope.
         * @param name the name of the symbol
         * @param symbol An {@link Template.Symbol} or `null`.
         */
        set(name: string, symbol?: Symbol | null): void;
        /**
         * Sets the value of the symbol named `name` to a gboolean value of `value`.
         * @param name a name for the symbol
         * @param value a `gboolean`
         */
        set_boolean(name: string, value: boolean): void;
        /**
         * Sets the value of the symbol named `name` to a gdouble value of `value`.
         * @param name a name for the symbol
         * @param value a `gdouble`
         */
        set_double(name: string, value: number): void;
        /**
         * @param name
         */
        set_null(name: string): void;
        /**
         * Sets the value of the symbol named `name` to the object `value`.
         * @param name a name for the symbol
         * @param value a {@link GObject.Object} or `null`.
         */
        set_object(name: string, value?: GObject.Object | null): void;
        /**
         * @param resolver
         */
        set_resolver(resolver: ScopeResolver): void;
        /**
         * Sets the value of the symbol named `name` to a string matching `value`.
         * @param name a name for the symbol
         * @param value A string or `null`.
         */
        set_string(name: string, value?: string | null): void;
        /**
         * Sets the value of the symbol named `name` to the strv `value`.
         * @param name a name for the symbol
         * @param value the value to set it to, or `null`
         */
        set_strv(name: string, value?: string[] | null): void;
        /**
         * Sets the contents of the symbol named `name` to the value `value`.
         * @param name a name for the symbol
         * @param value A {@link GObject.Value} or `null`
         */
        set_value(name: string, value?: GObject.Value | null): void;
        /**
         * Sets the value of the symbol named `name` to the variant `value`.
         *
         * If `value` has a floating reference, it is consumed.
         * @param name a name for the symbol
         * @param value the variant to set it to, or `null`
         */
        set_variant(name: string, value?: GLib.Variant | null): void;
        /**
         * Sets the symbol named `name` to `symbol` in `scope`.
         *
         * This differs from `tmpl_scope_set()` in that it takes ownership
         * of `symbol`.
         * @param name The name of the symbol
         * @param symbol A {@link Template.Symbol} or `null`
         */
        take(name: string, symbol?: Symbol | null): void;
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    class Symbol {
        static $gtype: GObject.GType<Symbol>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Symbol;

        // Methods

        /**
         * @param v_bool
         */
        assign_boolean(v_bool: boolean): void;
        /**
         * @param v_double
         */
        assign_double(v_double: number): void;
        /**
         * Sets the value to the object `v_object`.
         * @param v_object a {@link GObject.Object} or `null`.
         */
        assign_object(v_object?: GObject.Object | null): void;
        /**
         * @param v_string
         */
        assign_string(v_string: string): void;
        /**
         * Sets the value to the strv `strv`.
         * @param strv the value to set, or `null`
         */
        assign_strv(strv?: string[] | null): void;
        /**
         * @param value
         */
        assign_value(value: GObject.Value | any): void;
        /**
         * Sets the value to the {@link GLib.Variant} `v_variant`.
         *
         * If `v_variant` has a floating reference, it is consumed.
         * @param v_variant a {@link GLib.Variant} or `null`.
         */
        assign_variant(v_variant?: GLib.Variant | null): void;
        get_boxed(): any | null;
        /**
         * @returns A {@link Template.Expr}.
         */
        get_expr(): [Expr, string[] | null];
        get_symbol_type(): SymbolType;
        /**
         * @param value
         */
        get_value(value: GObject.Value | any): void;
        /**
         * @param type
         */
        holds(type: GObject.GType): boolean;
        ref(): Symbol;
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type TemplateClass = typeof Template;
    /**
     * @gir-type Alias
     */
    type TemplateLocatorClass = typeof TemplateLocator;
    /**
     * @gir-type Struct
     */
    class Expr {
        static $gtype: GObject.GType<Expr>;

        // Constructors

        constructor(properties?: Partial<{}>);

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

        // Static methods

        /**
         * @param str
         */
        static from_string(str: string): Expr;

        // Methods

        /**
         * @param scope
         * @param return_value
         */
        ['eval'](scope: Scope, return_value: GObject.Value | any): boolean;
        /**
         * @param params
         */
        new_anon_call(params: Expr): Expr;
        /**
         * @param attr
         */
        new_getattr(attr: string): Expr;
        /**
         * @param name
         * @param params
         */
        new_gi_call(name: string, params: Expr): Expr;
        new_invert_boolean(): Expr;
        /**
         * @param attr
         * @param right
         */
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
