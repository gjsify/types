/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gcalc-1-ambient.d.ts';
import './gcalc-1-import.d.ts';
/**
 * GCalc-1
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type Gee from '@girs/gee-0.8';

export namespace GCalc {
    class AssigError extends GLib.Error {
        // Own fields of GCalc-1.AssigError

        INVALID_STRUCTURE_ERROR: number;

        // Constructors of GCalc-1.AssigError

        constructor(options: { message: string; code: number });
    }

    class FunctionError extends GLib.Error {
        // Own fields of GCalc-1.FunctionError

        INVALID_PARAMETERS_ERROR: number;
        INVOCATION_ERROR: number;

        // Constructors of GCalc-1.FunctionError

        constructor(options: { message: string; code: number });
    }

    class ParserError extends GLib.Error {
        // Own fields of GCalc-1.ParserError

        INVALID_TOKEN_ERROR: number;
        INVALID_EXPRESSION_ERROR: number;

        // Constructors of GCalc-1.ParserError

        constructor(options: { message: string; code: number });
    }

    class GroupError extends GLib.Error {
        // Own fields of GCalc-1.GroupError

        INVALID_POLYNOMIAL: number;
        INVALID_INTERNAL_TERM: number;

        // Constructors of GCalc-1.GroupError

        constructor(options: { message: string; code: number });
    }

    class SolverError extends GLib.Error {
        // Own fields of GCalc-1.SolverError

        EXPRESSION_ERROR: number;

        // Constructors of GCalc-1.SolverError

        constructor(options: { message: string; code: number });
    }

    class TermError extends GLib.Error {
        // Own fields of GCalc-1.TermError

        INVALID_OPERATOR: number;
        EVALUATION_FAIL: number;

        // Constructors of GCalc-1.TermError

        constructor(options: { message: string; code: number });
    }

    class VariableError extends GLib.Error {
        // Own fields of GCalc-1.VariableError

        INVALID_PARENT: number;
        INVALID_EXPRESSION_DEFINITION: number;
        EVALUATION_FAIL: number;

        // Constructors of GCalc-1.VariableError

        constructor(options: { message: string; code: number });
    }

    enum GParserTokenType {
        NONE,
        EOF,
        IDENTIFIER,
        INTEGER_LITERAL,
        REAL_LITERAL,
        STAR,
        PLUS,
        DIV,
        MINUS,
        ASSIGN,
        OPEN_PARENS,
        CLOSE_PARENS,
        CARRET,
        CLOSE_BRACE,
        CLOSE_BRACKET,
        OPEN_BRACE,
        OPEN_BRACKET,
        STRING_LITERAL,
        OP_AND,
        OP_COALESCING,
        OP_DEC,
        OP_EQ,
        OP_GE,
        OP_GT,
        OP_INC,
        OP_LE,
        OP_LT,
        OP_NE,
        OP_NEG,
        OP_OR,
        OP_PTR,
        OP_SHIFT_LEFT,
        SEMICOLON,
        TILDE,
        COLON,
        COMMA,
        DOUBLE_COLON,
        DOT,
        ELLIPSIS,
        INTERR,
        HASH,
    }
    enum GroupLevel {
        ONE,
        TWO,
        THREE,
    }
    module ExpressionContainer {
        // Constructor properties interface
    }

    class ExpressionContainer<A extends GObject.Object = GObject.Object> extends Gee.ArrayList {
        // Own properties of GCalc-1.ExpressionContainer

        parent: Expression;

        // Constructors of GCalc-1.ExpressionContainer

        static ['new'](): ExpressionContainer;

        // Owm methods of GCalc-1.ExpressionContainer

        add(exp: Expression): void;
        remove_at(index: number): Expression;
        remove(exp: Expression): Expression;
        get_object<T = GObject.Object>(position: number): T;
        find(exp: Expression): Expression;
        find_named(name: string): Expression;
        get_parent(): Expression;
        set_parent(value: Expression): void;
    }

    module ExpressionHashMap {
        // Constructor properties interface
    }

    class ExpressionHashMap extends Gee.HashMap {
        // Own properties of GCalc-1.ExpressionHashMap

        parent: Expression;

        // Constructors of GCalc-1.ExpressionHashMap

        static ['new'](): ExpressionHashMap;

        // Owm methods of GCalc-1.ExpressionHashMap

        add(exp: Expression): void;
        remove(exp: Expression): void;
        find_named(name: string): Expression;
        get_parent(): Expression;
        set_parent(value: Expression): void;
    }

    module GFunctionAcos {
        // Constructor properties interface
    }

    class GFunctionAcos extends GFunction {
        // Constructors of GCalc-1.GFunctionAcos

        static ['new'](): GFunctionAcos;
    }

    module GFunctionAcosh {
        // Constructor properties interface
    }

    class GFunctionAcosh extends GFunction {
        // Constructors of GCalc-1.GFunctionAcosh

        static ['new'](): GFunctionAcosh;
    }

    module GFunctionAsin {
        // Constructor properties interface
    }

    class GFunctionAsin extends GFunction {
        // Constructors of GCalc-1.GFunctionAsin

        static ['new'](): GFunctionAsin;
    }

    module GFunctionAsinh {
        // Constructor properties interface
    }

    class GFunctionAsinh extends GFunction {
        // Constructors of GCalc-1.GFunctionAsinh

        static ['new'](): GFunctionAsinh;
    }

    module GFunctionAtan {
        // Constructor properties interface
    }

    class GFunctionAtan extends GFunction {
        // Constructors of GCalc-1.GFunctionAtan

        static ['new'](): GFunctionAtan;
    }

    module GFunctionAtanh {
        // Constructor properties interface
    }

    class GFunctionAtanh extends GFunction {
        // Constructors of GCalc-1.GFunctionAtanh

        static ['new'](): GFunctionAtanh;
    }

    module GFunctionCos {
        // Constructor properties interface
    }

    class GFunctionCos extends GFunction {
        // Constructors of GCalc-1.GFunctionCos

        static ['new'](): GFunctionCos;
    }

    module GFunctionCosh {
        // Constructor properties interface
    }

    class GFunctionCosh extends GFunction {
        // Constructors of GCalc-1.GFunctionCosh

        static ['new'](): GFunctionCosh;
    }

    module GFunctionExp {
        // Constructor properties interface
    }

    class GFunctionExp extends GFunction {
        // Constructors of GCalc-1.GFunctionExp

        static ['new'](): GFunctionExp;
    }

    module GFunctionLog {
        // Constructor properties interface
    }

    class GFunctionLog extends GFunction {
        // Constructors of GCalc-1.GFunctionLog

        static ['new'](): GFunctionLog;
    }

    module GFunctionSin {
        // Constructor properties interface
    }

    class GFunctionSin extends GFunction {
        // Constructors of GCalc-1.GFunctionSin

        static ['new'](): GFunctionSin;
    }

    module GFunctionSinh {
        // Constructor properties interface
    }

    class GFunctionSinh extends GFunction {
        // Constructors of GCalc-1.GFunctionSinh

        static ['new'](): GFunctionSinh;
    }

    module GFunctionSqrt {
        // Constructor properties interface
    }

    class GFunctionSqrt extends GFunction {
        // Constructors of GCalc-1.GFunctionSqrt

        static ['new'](): GFunctionSqrt;
    }

    module GFunctionTan {
        // Constructor properties interface
    }

    class GFunctionTan extends GFunction {
        // Constructors of GCalc-1.GFunctionTan

        static ['new'](): GFunctionTan;
    }

    module GFunctionTanh {
        // Constructor properties interface
    }

    class GFunctionTanh extends GFunction {
        // Constructors of GCalc-1.GFunctionTanh

        static ['new'](): GFunctionTanh;
    }

    module GExpression {
        // Constructor properties interface
    }

    class GExpression extends GObject.Object {
        // Constructors of GCalc-1.GExpression

        static ['new'](): GExpression;

        // Owm methods of GCalc-1.GExpression

        to_string(): string;
        solve(): Result;
    }

    module GErrorExpression {
        // Constructor properties interface
    }

    class GErrorExpression extends GExpression {
        // Constructors of GCalc-1.GErrorExpression

        static ['new'](): GErrorExpression;
    }

    module GAssign {
        // Constructor properties interface
    }

    class GAssign extends GExpression {
        // Constructors of GCalc-1.GAssign

        static ['new'](): GAssign;
    }

    module GConstant {
        // Constructor properties interface
    }

    class GConstant extends GExpression {
        // Constructors of GCalc-1.GConstant

        static integer(val: number): GConstant;

        static unsigned_integer(val: number): GConstant;

        static double(val: number): GConstant;

        static complex(real: number, imag: number): GConstant;

        static ['new'](): GConstant;

        // Owm methods of GCalc-1.GConstant

        subtract(c: Constant): Constant;
    }

    module GDivision {
        // Constructor properties interface
    }

    class GDivision extends GExpression {
        // Constructors of GCalc-1.GDivision

        static ['new'](): GDivision;
    }

    module GErrorResult {
        // Constructor properties interface
    }

    class GErrorResult extends GObject.Object {
        // Constructors of GCalc-1.GErrorResult

        static ['new'](msg: string): GErrorResult;
    }

    module GFunction {
        // Constructor properties interface
    }

    class GFunction extends GExpression {
        // Constructors of GCalc-1.GFunction

        static with_name(name: string, nparams: number): GFunction;

        static ['new'](): GFunction;

        // Owm methods of GCalc-1.GFunction

        evaluate(): Expression;
    }

    module GMathEquation {
        // Constructor properties interface
    }

    class GMathEquation extends GExpression {
        // Constructors of GCalc-1.GMathEquation

        static ['new'](): GMathEquation;
    }

    module GMathEquationManager {
        // Constructor properties interface
    }

    class GMathEquationManager extends GObject.Object {
        // Constructors of GCalc-1.GMathEquationManager

        static ['new'](): GMathEquationManager;
    }

    module GMinus {
        // Constructor properties interface
    }

    class GMinus extends GExpression {
        // Constructors of GCalc-1.GMinus

        static ['new'](): GMinus;
    }

    module GMultiply {
        // Constructor properties interface
    }

    class GMultiply extends GExpression {
        // Constructors of GCalc-1.GMultiply

        static ['new'](): GMultiply;
    }

    module GParser {
        // Constructor properties interface
    }

    class GParser extends GObject.Object {
        // Constructors of GCalc-1.GParser

        static ['new'](): GParser;

        // Owm methods of GCalc-1.GParser

        parse(str: string, eqman: MathEquationManager): void;
        read_token(): GParserTokenType;
        token_to_string(): string;
    }

    module GPlus {
        // Constructor properties interface
    }

    class GPlus extends GExpression {
        // Constructors of GCalc-1.GPlus

        static ['new'](): GPlus;
    }

    module GPolynomial {
        // Constructor properties interface
    }

    class GPolynomial extends GExpression {
        // Constructors of GCalc-1.GPolynomial

        static ['new'](): GPolynomial;
    }

    module GPow {
        // Constructor properties interface
    }

    class GPow extends GExpression {
        // Constructors of GCalc-1.GPow

        static ['new'](): GPow;
    }

    module GResult {
        // Constructor properties interface
    }

    class GResult extends GObject.Object {
        // Constructors of GCalc-1.GResult

        static ['new'](exp: Expression): GResult;
    }

    module GGroup {
        // Constructor properties interface
    }

    class GGroup extends GExpression {
        // Constructors of GCalc-1.GGroup

        static ['new'](): GGroup;
    }

    module GSolver {
        // Constructor properties interface
    }

    class GSolver extends GObject.Object {
        // Constructors of GCalc-1.GSolver

        static ['new'](): GSolver;
    }

    module GTerm {
        // Constructor properties interface
    }

    class GTerm extends GExpression {
        // Constructors of GCalc-1.GTerm

        static ['new'](): GTerm;
    }

    module GVariable {
        // Constructor properties interface
    }

    class GVariable extends GExpression {
        // Constructors of GCalc-1.GVariable

        static ['new'](name: string): GVariable;
    }

    class ExpressionContainerClass {}

    class ExpressionContainerPrivate {}

    class ExpressionHashMapClass {}

    class ExpressionHashMapPrivate {}

    class GFunctionAcosClass {}

    class GFunctionAcosPrivate {}

    class GFunctionAcoshClass {}

    class GFunctionAcoshPrivate {}

    class GFunctionAsinClass {}

    class GFunctionAsinPrivate {}

    class GFunctionAsinhClass {}

    class GFunctionAsinhPrivate {}

    class GFunctionAtanClass {}

    class GFunctionAtanPrivate {}

    class GFunctionAtanhClass {}

    class GFunctionAtanhPrivate {}

    class GFunctionCosClass {}

    class GFunctionCosPrivate {}

    class GFunctionCoshClass {}

    class GFunctionCoshPrivate {}

    class GFunctionExpClass {}

    class GFunctionExpPrivate {}

    class GFunctionLogClass {}

    class GFunctionLogPrivate {}

    class GFunctionSinClass {}

    class GFunctionSinPrivate {}

    class GFunctionSinhClass {}

    class GFunctionSinhPrivate {}

    class GFunctionSqrtClass {}

    class GFunctionSqrtPrivate {}

    class GFunctionTanClass {}

    class GFunctionTanPrivate {}

    class GFunctionTanhClass {}

    class GFunctionTanhPrivate {}

    class GExpressionClass {}

    class GExpressionPrivate {}

    class GErrorExpressionClass {}

    class GErrorExpressionPrivate {}

    class GAssignClass {}

    class GAssignPrivate {}

    class GConstantClass {}

    class GConstantPrivate {}

    class GDivisionClass {}

    class GDivisionPrivate {}

    class GErrorResultClass {}

    class GErrorResultPrivate {}

    class GFunctionClass {}

    class GFunctionPrivate {}

    class GMathEquationClass {}

    class GMathEquationPrivate {}

    class GMathEquationManagerClass {}

    class GMathEquationManagerPrivate {}

    class GMinusClass {}

    class GMinusPrivate {}

    class GMultiplyClass {}

    class GMultiplyPrivate {}

    class GParserClass {}

    class GParserPrivate {}

    class GPlusClass {}

    class GPlusPrivate {}

    class GPolynomialClass {}

    class GPolynomialPrivate {}

    class GPowClass {}

    class GPowPrivate {}

    class GResultClass {}

    class GResultPrivate {}

    class GGroupClass {}

    class GGroupPrivate {}

    class GSolverClass {}

    class GSolverPrivate {}

    class GTermClass {}

    class GTermPrivate {}

    class GVariableClass {}

    class GVariablePrivate {}

    class AssignIface {}

    class BinaryOperatorIface {}

    class ConstantIface {}

    class DivisionIface {}

    class ExpressionIface {}

    class ErrorExpressionIface {}

    class FunctionIface {}

    class ErrorResultIface {}

    class GroupIface {}

    class HashableIface {}

    class MathEquationIface {}

    class MathEquationManagerIface {}

    class MinusIface {}

    class MultiplyIface {}

    class OperatorIface {}

    class PlusIface {}

    class PolynomialIface {}

    class PowIface {}

    class ResultIface {}

    class SolverIface {}

    class TermIface {}

    class VariableIface {}

    interface Assign {
        // Owm methods of GCalc-1.Assign

        evaluate(): Expression;
    }

    interface BinaryOperator {}

    interface Constant {
        // Owm methods of GCalc-1.Constant

        real(): number;
        imag(): number;
        zero(): void;
        add(c: Constant): Constant;
        multiply(c: Constant): Constant;
        divide(c: Constant): Constant;
        neg(): Constant;
        pow(c: Constant): Constant;

        // Own virtual methods of GCalc-1.Constant

        vfunc_real(): number;
        vfunc_imag(): number;
        vfunc_zero(): void;
        vfunc_add(c: Constant): Constant;
        vfunc_multiply(c: Constant): Constant;
        vfunc_divide(c: Constant): Constant;
        vfunc_neg(): Constant;
        vfunc_pow(c: Constant): Constant;
    }

    interface Division {}

    interface Expression {
        // Own properties of GCalc-1.Expression

        parent: Expression;
        readonly expressions: ExpressionContainer;

        // Owm methods of GCalc-1.Expression

        to_string(): string;
        solve(): Result;
        get_parent(): Expression;
        set_parent(value: Expression): void;
        get_expressions(): ExpressionContainer;

        // Own virtual methods of GCalc-1.Expression

        vfunc_to_string(): string;
        vfunc_solve(): Result;
        vfunc_get_parent(): Expression;
        vfunc_set_parent(value: Expression): void;
        vfunc_get_expressions(): ExpressionContainer;
    }

    interface ErrorExpression {}

    interface Function {
        // Own properties of GCalc-1.Function

        readonly param_types: ExpressionContainer;
        readonly paramTypes: ExpressionContainer;
        name: string;
        n_params: number;
        nParams: number;
        closed: boolean;

        // Owm methods of GCalc-1.Function

        evaluate(): Expression;
        verify_params(): boolean;
        get_param_types(): ExpressionContainer;
        get_name(): string;
        set_name(value: string): void;
        get_n_params(): number;
        set_n_params(value: number): void;
        get_closed(): boolean;
        set_closed(value: boolean): void;

        // Own virtual methods of GCalc-1.Function

        vfunc_evaluate(): Expression;
        vfunc_verify_params(): boolean;
        vfunc_get_param_types(): ExpressionContainer;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_n_params(): number;
        vfunc_set_n_params(value: number): void;
        vfunc_get_closed(): boolean;
        vfunc_set_closed(value: boolean): void;
    }

    interface ErrorResult {
        // Own properties of GCalc-1.ErrorResult

        readonly message: string;

        // Owm methods of GCalc-1.ErrorResult

        get_message(): string;

        // Own virtual methods of GCalc-1.ErrorResult

        vfunc_get_message(): string;
    }

    interface Group {
        // Own properties of GCalc-1.Group

        level: GroupLevel;
        closed: boolean;

        // Owm methods of GCalc-1.Group

        evaluate(): Expression;
        get_level(): GroupLevel;
        set_level(value: GroupLevel): void;
        get_closed(): boolean;
        set_closed(value: boolean): void;

        // Own virtual methods of GCalc-1.Group

        vfunc_evaluate(): Expression;
        vfunc_get_level(): GroupLevel;
        vfunc_set_level(value: GroupLevel): void;
        vfunc_get_closed(): boolean;
        vfunc_set_closed(value: boolean): void;
    }

    interface Hashable {
        // Owm methods of GCalc-1.Hashable

        hash(): number;

        // Own virtual methods of GCalc-1.Hashable

        vfunc_hash(): number;
    }

    interface MathEquation {
        // Own properties of GCalc-1.MathEquation

        readonly variables: ExpressionHashMap;

        // Owm methods of GCalc-1.MathEquation

        get_variables(): ExpressionHashMap;

        // Own virtual methods of GCalc-1.MathEquation

        vfunc_get_variables(): ExpressionHashMap;
    }

    interface MathEquationManager {
        // Own properties of GCalc-1.MathEquationManager

        readonly equations: ExpressionContainer;
        readonly functions: ExpressionContainer;

        // Owm methods of GCalc-1.MathEquationManager

        find_variable(name: string): Variable;
        get_equations(): ExpressionContainer;
        get_functions(): ExpressionContainer;

        // Own virtual methods of GCalc-1.MathEquationManager

        vfunc_find_variable(name: string): Variable;
        vfunc_get_equations(): ExpressionContainer;
        vfunc_get_functions(): ExpressionContainer;
    }

    interface Minus {}

    interface Multiply {}

    interface Operator {}

    interface Plus {}

    interface Polynomial {
        // Owm methods of GCalc-1.Polynomial

        evaluate(): Expression;

        // Own virtual methods of GCalc-1.Polynomial

        vfunc_evaluate(): Expression;
    }

    interface Pow {}

    interface Result {
        // Own properties of GCalc-1.Result

        readonly expression: Expression;

        // Owm methods of GCalc-1.Result

        to_string(): string;
        get_expression(): Expression;

        // Own virtual methods of GCalc-1.Result

        vfunc_to_string(): string;
        vfunc_get_expression(): Expression;
    }

    interface Solver {
        // Own properties of GCalc-1.Solver

        equation_manager: MathEquationManager;
        equationManager: MathEquationManager;

        // Owm methods of GCalc-1.Solver

        solve(str: string): Result;
        get_equation_manager(): MathEquationManager;
        set_equation_manager(value: MathEquationManager): void;

        // Own virtual methods of GCalc-1.Solver

        vfunc_solve(str: string): Result;
        vfunc_get_equation_manager(): MathEquationManager;
        vfunc_set_equation_manager(value: MathEquationManager): void;
    }

    interface Term {
        // Owm methods of GCalc-1.Term

        add(t: Term): Expression;
        evaluate(): Expression;

        // Own virtual methods of GCalc-1.Term

        vfunc_add(t: Term): Expression;
        vfunc_evaluate(): Expression;
    }

    interface Variable {
        // Own properties of GCalc-1.Variable

        name: string;
        value: Constant;
        bind: Variable;

        // Owm methods of GCalc-1.Variable

        evaluate(): Expression;
        get_name(): string;
        set_name(value: string): void;
        get_value(): Constant;
        set_value(value: Constant): void;
        get_bind(): Variable;
        set_bind(value: Variable): void;
        get_binded(): boolean;

        // Own virtual methods of GCalc-1.Variable

        vfunc_evaluate(): Expression;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_value(): Constant;
        vfunc_set_value(value: Constant): void;
        vfunc_get_bind(): Variable;
        vfunc_set_bind(value: Variable): void;
        vfunc_get_binded(): boolean;
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

export default GCalc;
// END
