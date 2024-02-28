/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gcalc-2-ambient.d.ts';
import './gcalc-2-import.d.ts';
/**
 * GCalc-2
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';

export namespace GCalc {
    enum AngleUnit {
        RADIANS,
        DEGREES,
        GRADIANS,
    }
    class AssigError extends GLib.Error {
        // Own fields of GCalc-2.AssigError

        INVALID_STRUCTURE_ERROR: number;

        // Constructors of GCalc-2.AssigError

        constructor(options: { message: string; code: number });
    }

    class FunctionError extends GLib.Error {
        // Own fields of GCalc-2.FunctionError

        INVALID_PARAMETERS_ERROR: number;
        INVOCATION_ERROR: number;

        // Constructors of GCalc-2.FunctionError

        constructor(options: { message: string; code: number });
    }

    class GroupError extends GLib.Error {
        // Own fields of GCalc-2.GroupError

        INVALID_POLYNOMIAL: number;
        INVALID_INTERNAL_TERM: number;

        // Constructors of GCalc-2.GroupError

        constructor(options: { message: string; code: number });
    }

    class TermError extends GLib.Error {
        // Own fields of GCalc-2.TermError

        INVALID_OPERATOR: number;
        EVALUATION_FAIL: number;

        // Constructors of GCalc-2.TermError

        constructor(options: { message: string; code: number });
    }

    class VariableError extends GLib.Error {
        // Own fields of GCalc-2.VariableError

        INVALID_PARENT: number;
        INVALID_EXPRESSION_DEFINITION: number;
        EVALUATION_FAIL: number;

        // Constructors of GCalc-2.VariableError

        constructor(options: { message: string; code: number });
    }

    class ParserError extends GLib.Error {
        // Own fields of GCalc-2.ParserError

        INVALID_TOKEN_ERROR: number;
        INVALID_EXPRESSION_ERROR: number;

        // Constructors of GCalc-2.ParserError

        constructor(options: { message: string; code: number });
    }

    class SolverError extends GLib.Error {
        // Own fields of GCalc-2.SolverError

        EXPRESSION_ERROR: number;

        // Constructors of GCalc-2.SolverError

        constructor(options: { message: string; code: number });
    }

    enum ParserTokenType {
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
        CURRENCY_SYMBOL,
    }
    enum MathGroupLevel {
        ONE,
        TWO,
        THREE,
    }
    module Assign {
        // Constructor properties interface
    }

    class Assign extends Expression {
        // Constructors of GCalc-2.Assign

        static ['new'](): Assign;
    }

    module Calculator {
        // Constructor properties interface
    }

    class Calculator extends GObject.Object {
        // Constructors of GCalc-2.Calculator

        static ['new'](): Calculator;

        // Owm methods of GCalc-2.Calculator

        static add(c1: MathConstant, c2: MathConstant): MathConstant;
        static subtract(c1: MathConstant, c2: MathConstant): MathConstant;
        static multiply(c1: MathConstant, c2: MathConstant): MathConstant;
        static divide(c1: MathConstant, c2: MathConstant): MathConstant;
        static neg(c: MathConstant): MathConstant;
        static pow(c: MathConstant, p: MathConstant): MathConstant;
        static sqrt(c: MathConstant): MathConstant;
        static pi(): MathConstant;
        static log2(): MathConstant;
        static euler(): MathConstant;
        static catalan(): MathConstant;
        static eq(c1: MathConstant, c2: MathConstant): boolean;
        static gt(c1: MathConstant, c2: MathConstant): boolean;
        static lt(c1: MathConstant, c2: MathConstant): boolean;
        static cos(c1: MathConstant, units: AngleUnit): MathConstant;
        static sin(c1: MathConstant, units: AngleUnit): MathConstant;
        static tan(c1: MathConstant, units: AngleUnit): MathConstant;
        static acos(c1: MathConstant, units: AngleUnit): MathConstant;
        static asin(c1: MathConstant, units: AngleUnit): MathConstant;
        static atan(c1: MathConstant, units: AngleUnit): MathConstant;
        static log10(c1: MathConstant): MathConstant;
        static exp(c1: MathConstant): MathConstant;
    }

    module Constant {
        // Constructor properties interface
    }

    class Constant extends Expression {
        // Constructors of GCalc-2.Constant

        static integer(val: number): Constant;

        static unsigned_integer(val: number): Constant;

        static double(val: number): Constant;

        static complex(real: number, imag: number): Constant;

        static assign(c: MathConstant): Constant;

        static ['new'](): Constant;
    }

    module Division {
        // Constructor properties interface
    }

    class Division extends Expression {
        // Constructors of GCalc-2.Division

        static ['new'](): Division;
    }

    module Equation {
        // Constructor properties interface
    }

    class Equation extends Expression {
        // Constructors of GCalc-2.Equation

        static ['new'](): Equation;
    }

    module EquationManager {
        // Constructor properties interface
    }

    class EquationManager extends GObject.Object {
        // Constructors of GCalc-2.EquationManager

        static ['new'](): EquationManager;
    }

    module ErrorResult {
        // Constructor properties interface
    }

    class ErrorResult extends GObject.Object {
        // Constructors of GCalc-2.ErrorResult

        static ['new'](msg: string): ErrorResult;
    }

    module Expression {
        // Constructor properties interface
    }

    class Expression extends GObject.Object {
        // Constructors of GCalc-2.Expression

        static ['new'](): Expression;

        // Owm methods of GCalc-2.Expression

        to_string(): string;
        solve(): MathResult;
    }

    module ErrorExpression {
        // Constructor properties interface
    }

    class ErrorExpression extends Expression {
        // Constructors of GCalc-2.ErrorExpression

        static ['new'](): ErrorExpression;
    }

    module ExpressionContainer {
        // Constructor properties interface
    }

    class ExpressionContainer<A extends GObject.Object = GObject.Object> extends Gee.ArrayList {
        // Own properties of GCalc-2.ExpressionContainer

        parent: MathExpression;

        // Constructors of GCalc-2.ExpressionContainer

        static ['new'](): ExpressionContainer;

        // Owm methods of GCalc-2.ExpressionContainer

        get_object<T = GObject.Object>(position: number): T;
        find(exp: MathExpression): MathExpression | null;
        find_named(name: string): MathExpression | null;
        get_parent(): MathExpression;
        set_parent(value: MathExpression): void;
    }

    module ExpressionHashMap {
        // Constructor properties interface
    }

    class ExpressionHashMap extends Gee.HashMap {
        // Own properties of GCalc-2.ExpressionHashMap

        parent: MathExpression;

        // Constructors of GCalc-2.ExpressionHashMap

        static ['new'](): ExpressionHashMap;

        // Owm methods of GCalc-2.ExpressionHashMap

        add(exp: MathExpression): void;
        remove(exp: MathExpression): void;
        find_named(name: string): MathExpression | null;
        get_parent(): MathExpression;
        set_parent(value: MathExpression): void;
    }

    module Function {
        // Constructor properties interface
    }

    class Function extends Expression {
        // Constructors of GCalc-2.Function

        static with_name(name: string, nparams: number): Function;

        static ['new'](): Function;

        // Owm methods of GCalc-2.Function

        evaluate(): MathExpression;
    }

    module FunctionAcos {
        // Constructor properties interface
    }

    class FunctionAcos extends Function {
        // Constructors of GCalc-2.FunctionAcos

        static ['new'](): FunctionAcos;
    }

    module FunctionAcosh {
        // Constructor properties interface
    }

    class FunctionAcosh extends Function {
        // Constructors of GCalc-2.FunctionAcosh

        static ['new'](): FunctionAcosh;
    }

    module FunctionAsin {
        // Constructor properties interface
    }

    class FunctionAsin extends Function {
        // Constructors of GCalc-2.FunctionAsin

        static ['new'](): FunctionAsin;
    }

    module FunctionAsinh {
        // Constructor properties interface
    }

    class FunctionAsinh extends Function {
        // Constructors of GCalc-2.FunctionAsinh

        static ['new'](): FunctionAsinh;
    }

    module FunctionAtan {
        // Constructor properties interface
    }

    class FunctionAtan extends Function {
        // Constructors of GCalc-2.FunctionAtan

        static ['new'](): FunctionAtan;
    }

    module FunctionAtanh {
        // Constructor properties interface
    }

    class FunctionAtanh extends Function {
        // Constructors of GCalc-2.FunctionAtanh

        static ['new'](): FunctionAtanh;
    }

    module FunctionCos {
        // Constructor properties interface
    }

    class FunctionCos extends Function {
        // Constructors of GCalc-2.FunctionCos

        static ['new'](): FunctionCos;
    }

    module FunctionCosh {
        // Constructor properties interface
    }

    class FunctionCosh extends Function {
        // Constructors of GCalc-2.FunctionCosh

        static ['new'](): FunctionCosh;
    }

    module FunctionExp {
        // Constructor properties interface
    }

    class FunctionExp extends Function {
        // Constructors of GCalc-2.FunctionExp

        static ['new'](): FunctionExp;
    }

    module FunctionLog {
        // Constructor properties interface
    }

    class FunctionLog extends Function {
        // Constructors of GCalc-2.FunctionLog

        static ['new'](): FunctionLog;
    }

    module FunctionSin {
        // Constructor properties interface
    }

    class FunctionSin extends Function {
        // Constructors of GCalc-2.FunctionSin

        static ['new'](): FunctionSin;
    }

    module FunctionSinh {
        // Constructor properties interface
    }

    class FunctionSinh extends Function {
        // Constructors of GCalc-2.FunctionSinh

        static ['new'](): FunctionSinh;
    }

    module FunctionSqrt {
        // Constructor properties interface
    }

    class FunctionSqrt extends Function {
        // Constructors of GCalc-2.FunctionSqrt

        static ['new'](): FunctionSqrt;
    }

    module FunctionTan {
        // Constructor properties interface
    }

    class FunctionTan extends Function {
        // Constructors of GCalc-2.FunctionTan

        static ['new'](): FunctionTan;
    }

    module FunctionTanh {
        // Constructor properties interface
    }

    class FunctionTanh extends Function {
        // Constructors of GCalc-2.FunctionTanh

        static ['new'](): FunctionTanh;
    }

    module Group {
        // Constructor properties interface
    }

    class Group extends Expression {
        // Constructors of GCalc-2.Group

        static ['new'](): Group;
    }

    module Minus {
        // Constructor properties interface
    }

    class Minus extends Expression {
        // Constructors of GCalc-2.Minus

        static ['new'](): Minus;
    }

    module Multiply {
        // Constructor properties interface
    }

    class Multiply extends Expression {
        // Constructors of GCalc-2.Multiply

        static ['new'](): Multiply;
    }

    module Parameter {
        // Constructor properties interface
    }

    class Parameter extends Variable {
        // Constructors of GCalc-2.Parameter

        static ['new'](name: string): Parameter;
    }

    module Parser {
        // Constructor properties interface
    }

    class Parser extends GObject.Object {
        // Constructors of GCalc-2.Parser

        static ['new'](): Parser;

        // Owm methods of GCalc-2.Parser

        parse(str: string, eqman: MathEquationManager): void;
        read_token(): ParserTokenType;
        token_to_string(): string;
    }

    module Plus {
        // Constructor properties interface
    }

    class Plus extends Expression {
        // Constructors of GCalc-2.Plus

        static ['new'](): Plus;
    }

    module Polynomial {
        // Constructor properties interface
    }

    class Polynomial extends Expression {
        // Constructors of GCalc-2.Polynomial

        static ['new'](): Polynomial;
    }

    module Pow {
        // Constructor properties interface
    }

    class Pow extends Expression {
        // Constructors of GCalc-2.Pow

        static ['new'](): Pow;
    }

    module Result {
        // Constructor properties interface
    }

    class Result extends GObject.Object {
        // Constructors of GCalc-2.Result

        static ['new'](exp: MathExpression): Result;
    }

    module Solver {
        // Constructor properties interface
    }

    class Solver extends GObject.Object {
        // Own properties of GCalc-2.Solver

        equation_manager: MathEquationManager;
        equationManager: MathEquationManager;

        // Constructors of GCalc-2.Solver

        static ['new'](): Solver;

        // Owm methods of GCalc-2.Solver

        add_expression(exp: string): void;
        solve(str: string): MathResult;
        get_equation_manager(): MathEquationManager;
        set_equation_manager(value: MathEquationManager): void;
    }

    module Term {
        // Constructor properties interface
    }

    class Term extends Expression {
        // Constructors of GCalc-2.Term

        static ['new'](): Term;
    }

    module UnitConverter {
        // Constructor properties interface
    }

    class UnitConverter extends GObject.Object {
        // Constructors of GCalc-2.UnitConverter

        static ['new'](): UnitConverter;

        // Owm methods of GCalc-2.UnitConverter

        static angle(c: MathConstant, ori: AngleUnit, dst: AngleUnit): MathConstant;
    }

    module Variable {
        // Constructor properties interface
    }

    class Variable extends Expression {}

    class AssignClass {}

    class AssignPrivate {}

    class CalculatorClass {}

    class CalculatorPrivate {}

    class ConstantClass {}

    class ConstantPrivate {}

    class DivisionClass {}

    class DivisionPrivate {}

    class EquationClass {}

    class EquationPrivate {}

    class EquationManagerClass {}

    class EquationManagerPrivate {}

    class ErrorResultClass {}

    class ErrorResultPrivate {}

    class ExpressionClass {}

    class ExpressionPrivate {}

    class ErrorExpressionClass {}

    class ErrorExpressionPrivate {}

    class ExpressionContainerClass {}

    class ExpressionContainerPrivate {}

    class ExpressionHashMapClass {}

    class ExpressionHashMapPrivate {}

    class FunctionClass {}

    class FunctionPrivate {}

    class FunctionAcosClass {}

    class FunctionAcosPrivate {}

    class FunctionAcoshClass {}

    class FunctionAcoshPrivate {}

    class FunctionAsinClass {}

    class FunctionAsinPrivate {}

    class FunctionAsinhClass {}

    class FunctionAsinhPrivate {}

    class FunctionAtanClass {}

    class FunctionAtanPrivate {}

    class FunctionAtanhClass {}

    class FunctionAtanhPrivate {}

    class FunctionCosClass {}

    class FunctionCosPrivate {}

    class FunctionCoshClass {}

    class FunctionCoshPrivate {}

    class FunctionExpClass {}

    class FunctionExpPrivate {}

    class FunctionLogClass {}

    class FunctionLogPrivate {}

    class FunctionSinClass {}

    class FunctionSinPrivate {}

    class FunctionSinhClass {}

    class FunctionSinhPrivate {}

    class FunctionSqrtClass {}

    class FunctionSqrtPrivate {}

    class FunctionTanClass {}

    class FunctionTanPrivate {}

    class FunctionTanhClass {}

    class FunctionTanhPrivate {}

    class GroupClass {}

    class GroupPrivate {}

    class MinusClass {}

    class MinusPrivate {}

    class MultiplyClass {}

    class MultiplyPrivate {}

    class ParameterClass {}

    class ParameterPrivate {}

    class ParserClass {}

    class ParserPrivate {}

    class PlusClass {}

    class PlusPrivate {}

    class PolynomialClass {}

    class PolynomialPrivate {}

    class PowClass {}

    class PowPrivate {}

    class ResultClass {}

    class ResultPrivate {}

    class SolverClass {}

    class SolverPrivate {}

    class TermClass {}

    class TermPrivate {}

    class UnitConverterClass {}

    class UnitConverterPrivate {}

    class VariableClass {}

    class VariablePrivate {}

    class HashableIface {}

    class MathAssignIface {}

    class MathBinaryOperatorIface {}

    class MathConstantIface {}

    class MathConstantComplexIface {}

    class MathConstantNumberIface {}

    class MathConstantVectorIface {}

    class MathDivisionIface {}

    class MathEquationIface {}

    class MathEquationManagerIface {}

    class MathErrorResultIface {}

    class MathExpressionIface {}

    class MathFunctionIface {}

    class MathGroupIface {}

    class MathMinusIface {}

    class MathMultiplyIface {}

    class MathOperatorIface {}

    class MathParameterIface {}

    class MathPlusIface {}

    class MathPolynomialIface {}

    class MathPowIface {}

    class MathResultIface {}

    class MathTermIface {}

    class MathVariableIface {}

    interface Hashable {
        // Owm methods of GCalc-2.Hashable

        hash(): number;

        // Own virtual methods of GCalc-2.Hashable

        vfunc_hash(): number;
    }

    interface MathAssign {
        // Owm methods of GCalc-2.MathAssign

        evaluate(): MathExpression;
    }

    interface MathBinaryOperator {}

    interface MathConstant {
        // Owm methods of GCalc-2.MathConstant

        add(c: MathConstant): MathConstant;
        subtract(c: MathConstant): MathConstant;
        multiply(c: MathConstant): MathConstant;
        divide(c: MathConstant): MathConstant;
        neg(): MathConstant;
        pow(c: MathConstant): MathConstant;

        // Own virtual methods of GCalc-2.MathConstant

        vfunc_add(c: MathConstant): MathConstant;
        vfunc_subtract(c: MathConstant): MathConstant;
        vfunc_multiply(c: MathConstant): MathConstant;
        vfunc_divide(c: MathConstant): MathConstant;
        vfunc_neg(): MathConstant;
        vfunc_pow(c: MathConstant): MathConstant;
    }

    interface MathConstantComplex {
        // Owm methods of GCalc-2.MathConstantComplex

        real(): number;
        imag(): number;
        zero(): void;

        // Own virtual methods of GCalc-2.MathConstantComplex

        vfunc_real(): number;
        vfunc_imag(): number;
        vfunc_zero(): void;
    }

    interface MathConstantNumber {
        // Owm methods of GCalc-2.MathConstantNumber

        value(): number;

        // Own virtual methods of GCalc-2.MathConstantNumber

        vfunc_value(): number;
    }

    interface MathConstantVector {
        // Owm methods of GCalc-2.MathConstantVector

        mag(): MathConstant;
        ang(): MathConstant;
        x(): MathConstant;
        y(): MathConstant;

        // Own virtual methods of GCalc-2.MathConstantVector

        vfunc_mag(): MathConstant;
        vfunc_ang(): MathConstant;
        vfunc_x(): MathConstant;
        vfunc_y(): MathConstant;
    }

    interface MathDivision {}

    interface MathEquation {
        // Own properties of GCalc-2.MathEquation

        readonly variables: ExpressionHashMap;

        // Owm methods of GCalc-2.MathEquation

        get_variables(): ExpressionHashMap;

        // Own virtual methods of GCalc-2.MathEquation

        vfunc_get_variables(): ExpressionHashMap;
    }

    interface MathEquationManager {
        // Own properties of GCalc-2.MathEquationManager

        readonly equations: ExpressionContainer;
        readonly functions: ExpressionContainer;

        // Owm methods of GCalc-2.MathEquationManager

        find_variable(name: string): MathVariable;
        get_equations(): ExpressionContainer;
        get_functions(): ExpressionContainer;

        // Own virtual methods of GCalc-2.MathEquationManager

        vfunc_find_variable(name: string): MathVariable;
        vfunc_get_equations(): ExpressionContainer;
        vfunc_get_functions(): ExpressionContainer;
    }

    interface MathErrorResult {
        // Own properties of GCalc-2.MathErrorResult

        readonly message: string;

        // Owm methods of GCalc-2.MathErrorResult

        get_message(): string;

        // Own virtual methods of GCalc-2.MathErrorResult

        vfunc_get_message(): string;
    }

    interface MathExpression {
        // Own properties of GCalc-2.MathExpression

        parent: MathExpression;
        readonly expressions: ExpressionContainer;

        // Owm methods of GCalc-2.MathExpression

        to_string(): string;
        solve(): MathResult;
        get_parent(): MathExpression;
        set_parent(value: MathExpression): void;
        get_expressions(): ExpressionContainer;

        // Own virtual methods of GCalc-2.MathExpression

        vfunc_to_string(): string;
        vfunc_solve(): MathResult;
        vfunc_get_parent(): MathExpression;
        vfunc_set_parent(value: MathExpression): void;
        vfunc_get_expressions(): ExpressionContainer;
    }

    interface MathFunction {
        // Own properties of GCalc-2.MathFunction

        readonly param_types: ExpressionContainer;
        readonly paramTypes: ExpressionContainer;
        name: string;
        n_params: number;
        nParams: number;
        closed: boolean;

        // Owm methods of GCalc-2.MathFunction

        evaluate(): MathExpression;
        verify_params(): boolean;
        get_param_types(): ExpressionContainer;
        get_name(): string;
        set_name(value: string): void;
        get_n_params(): number;
        set_n_params(value: number): void;
        get_closed(): boolean;
        set_closed(value: boolean): void;

        // Own virtual methods of GCalc-2.MathFunction

        vfunc_evaluate(): MathExpression;
        vfunc_verify_params(): boolean;
        vfunc_get_param_types(): ExpressionContainer;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_n_params(): number;
        vfunc_set_n_params(value: number): void;
        vfunc_get_closed(): boolean;
        vfunc_set_closed(value: boolean): void;
    }

    interface MathGroup {
        // Own properties of GCalc-2.MathGroup

        level: MathGroupLevel;
        closed: boolean;

        // Owm methods of GCalc-2.MathGroup

        evaluate(): MathExpression;
        get_level(): MathGroupLevel;
        set_level(value: MathGroupLevel): void;
        get_closed(): boolean;
        set_closed(value: boolean): void;

        // Own virtual methods of GCalc-2.MathGroup

        vfunc_evaluate(): MathExpression;
        vfunc_get_level(): MathGroupLevel;
        vfunc_set_level(value: MathGroupLevel): void;
        vfunc_get_closed(): boolean;
        vfunc_set_closed(value: boolean): void;
    }

    interface MathMinus {}

    interface MathMultiply {}

    interface MathOperator {}

    interface MathParameter {
        // Owm methods of GCalc-2.MathParameter

        set_value(val?: GObject.Value | null): void;
        get_value(): GObject.Value | null;

        // Own virtual methods of GCalc-2.MathParameter

        vfunc_set_value(val?: GObject.Value | null): void;
        vfunc_get_value(): GObject.Value | null;
    }

    interface MathPlus {}

    interface MathPolynomial {
        // Owm methods of GCalc-2.MathPolynomial

        evaluate(): MathExpression;

        // Own virtual methods of GCalc-2.MathPolynomial

        vfunc_evaluate(): MathExpression;
    }

    interface MathPow {}

    interface MathResult {
        // Own properties of GCalc-2.MathResult

        readonly expression: MathExpression;

        // Owm methods of GCalc-2.MathResult

        to_string(): string;
        get_expression(): MathExpression;

        // Own virtual methods of GCalc-2.MathResult

        vfunc_to_string(): string;
        vfunc_get_expression(): MathExpression;
    }

    interface MathTerm {
        // Owm methods of GCalc-2.MathTerm

        add(t: MathTerm): MathExpression;
        evaluate(): MathExpression;

        // Own virtual methods of GCalc-2.MathTerm

        vfunc_add(t: MathTerm): MathExpression;
        vfunc_evaluate(): MathExpression;
    }

    interface MathVariable {
        // Own properties of GCalc-2.MathVariable

        name: string;
        value: MathConstant;
        bind: MathVariable;

        // Owm methods of GCalc-2.MathVariable

        evaluate(): MathExpression;
        get_name(): string;
        set_name(value: string): void;
        get_value(): MathConstant;
        set_value(value: MathConstant): void;
        get_bind(): MathVariable;
        set_bind(value: MathVariable): void;
        get_binded(): boolean;

        // Own virtual methods of GCalc-2.MathVariable

        vfunc_evaluate(): MathExpression;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_value(): MathConstant;
        vfunc_set_value(value: MathConstant): void;
        vfunc_get_bind(): MathVariable;
        vfunc_set_bind(value: MathVariable): void;
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
