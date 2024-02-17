
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

enum AssigError {
    INVALID_STRUCTURE_ERROR,
}
enum FunctionError {
    INVALID_PARAMETERS_ERROR,
    INVOCATION_ERROR,
}
enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
enum GroupError {
    INVALID_POLYNOMIAL,
    INVALID_INTERNAL_TERM,
}
enum SolverError {
    EXPRESSION_ERROR,
}
enum TermError {
    INVALID_OPERATOR,
    EVALUATION_FAIL,
}
enum VariableError {
    INVALID_PARENT,
    INVALID_EXPRESSION_DEFINITION,
    EVALUATION_FAIL,
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
module Assign {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties, Operator.ConstructorProperties, BinaryOperator.ConstructorProperties {
    }

}

interface Assign extends GObject.Object, Expression, Operator, BinaryOperator {

    // Owm methods of GCalc-1.GCalc.Assign

    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Assign

    connect(sigName: "notify::parent", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Assign {

    // Own properties of GCalc-1.GCalc.Assign

    static name: string
    static $gtype: GObject.GType<Assign>

    // Constructors of GCalc-1.GCalc.Assign

    constructor(config?: Assign.ConstructorProperties) 
    _init(config?: Assign.ConstructorProperties): void
}

module BinaryOperator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties, Operator.ConstructorProperties {
    }

}

interface BinaryOperator extends GObject.Object, Expression, Operator {

    // Class property signals of GCalc-1.GCalc.BinaryOperator

    connect(sigName: "notify::parent", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BinaryOperator {

    // Own properties of GCalc-1.GCalc.BinaryOperator

    static name: string
    static $gtype: GObject.GType<BinaryOperator>

    // Constructors of GCalc-1.GCalc.BinaryOperator

    constructor(config?: BinaryOperator.ConstructorProperties) 
    _init(config?: BinaryOperator.ConstructorProperties): void
}

module Constant {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Constant extends GObject.Object, Expression {

    // Owm methods of GCalc-1.GCalc.Constant

    real(): number
    imag(): number
    zero(): void
    add(c: Constant): Constant
    multiply(c: Constant): Constant
    divide(c: Constant): Constant
    neg(): Constant
    pow(c: Constant): Constant

    // Own virtual methods of GCalc-1.GCalc.Constant

    vfunc_real(): number
    vfunc_imag(): number
    vfunc_zero(): void
    vfunc_add(c: Constant): Constant
    vfunc_multiply(c: Constant): Constant
    vfunc_divide(c: Constant): Constant
    vfunc_neg(): Constant
    vfunc_pow(c: Constant): Constant

    // Class property signals of GCalc-1.GCalc.Constant

    connect(sigName: "notify::parent", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Constant {

    // Own properties of GCalc-1.GCalc.Constant

    static name: string
    static $gtype: GObject.GType<Constant>

    // Constructors of GCalc-1.GCalc.Constant

    constructor(config?: Constant.ConstructorProperties) 
    _init(config?: Constant.ConstructorProperties): void
}

module Division {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties, Operator.ConstructorProperties, BinaryOperator.ConstructorProperties {
    }

}

interface Division extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Division

    connect(sigName: "notify::parent", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Division {

    // Own properties of GCalc-1.GCalc.Division

    static name: string
    static $gtype: GObject.GType<Division>

    // Constructors of GCalc-1.GCalc.Division

    constructor(config?: Division.ConstructorProperties) 
    _init(config?: Division.ConstructorProperties): void
}

module Expression {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCalc-1.GCalc.Expression

        parent?: Expression | null
    }

}

interface Expression extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Expression

    parent: Expression
    readonly expressions: ExpressionContainer

    // Owm methods of GCalc-1.GCalc.Expression

    to_string(): string | null
    solve(): Result
    get_parent(): Expression
    set_parent(value: Expression): void
    get_expressions(): ExpressionContainer

    // Own virtual methods of GCalc-1.GCalc.Expression

    vfunc_to_string(): string | null
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer

    // Class property signals of GCalc-1.GCalc.Expression

    connect(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Expression {

    // Own properties of GCalc-1.GCalc.Expression

    static name: string
    static $gtype: GObject.GType<Expression>

    // Constructors of GCalc-1.GCalc.Expression

    constructor(config?: Expression.ConstructorProperties) 
    _init(config?: Expression.ConstructorProperties): void
}

module ErrorExpression {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface ErrorExpression extends GObject.Object, Expression {

    // Class property signals of GCalc-1.GCalc.ErrorExpression

    connect(sigName: "notify::parent", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ErrorExpression {

    // Own properties of GCalc-1.GCalc.ErrorExpression

    static name: string
    static $gtype: GObject.GType<ErrorExpression>

    // Constructors of GCalc-1.GCalc.ErrorExpression

    constructor(config?: ErrorExpression.ConstructorProperties) 
    _init(config?: ErrorExpression.ConstructorProperties): void
}

module Function {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {

        // Own constructor properties of GCalc-1.GCalc.Function

        name?: string | null
        nParams?: number | null
        closed?: boolean | null
    }

}

interface Function extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.Function

    readonly paramTypes: ExpressionContainer
    name: string | null
    nParams: number
    closed: boolean

    // Owm methods of GCalc-1.GCalc.Function

    evaluate(): Expression
    verify_params(): boolean
    get_param_types(): ExpressionContainer
    get_name(): string
    set_name(value: string): void
    get_n_params(): number
    set_n_params(value: number): void
    get_closed(): boolean
    set_closed(value: boolean): void

    // Own virtual methods of GCalc-1.GCalc.Function

    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void

    // Class property signals of GCalc-1.GCalc.Function

    connect(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::param-types", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-params", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Function {

    // Own properties of GCalc-1.GCalc.Function

    static name: string
    static $gtype: GObject.GType<Function>

    // Constructors of GCalc-1.GCalc.Function

    constructor(config?: Function.ConstructorProperties) 
    _init(config?: Function.ConstructorProperties): void
}

module ErrorResult {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Result.ConstructorProperties {
    }

}

interface ErrorResult extends GObject.Object, Result {

    // Own properties of GCalc-1.GCalc.ErrorResult

    readonly message: string | null

    // Owm methods of GCalc-1.GCalc.ErrorResult

    get_message(): string

    // Own virtual methods of GCalc-1.GCalc.ErrorResult

    vfunc_get_message(): string

    // Class property signals of GCalc-1.GCalc.ErrorResult

    connect(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::expression", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ErrorResult {

    // Own properties of GCalc-1.GCalc.ErrorResult

    static name: string
    static $gtype: GObject.GType<ErrorResult>

    // Constructors of GCalc-1.GCalc.ErrorResult

    constructor(config?: ErrorResult.ConstructorProperties) 
    _init(config?: ErrorResult.ConstructorProperties): void
}

module Group {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {

        // Own constructor properties of GCalc-1.GCalc.Group

        level?: GroupLevel | null
        closed?: boolean | null
    }

}

interface Group extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.Group

    level: GroupLevel
    closed: boolean

    // Owm methods of GCalc-1.GCalc.Group

    evaluate(): Expression
    get_level(): GroupLevel
    set_level(value: GroupLevel): void
    get_closed(): boolean
    set_closed(value: boolean): void

    // Own virtual methods of GCalc-1.GCalc.Group

    vfunc_evaluate(): Expression
    vfunc_get_level(): GroupLevel
    vfunc_set_level(value: GroupLevel): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void

    // Class property signals of GCalc-1.GCalc.Group

    connect(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Group {

    // Own properties of GCalc-1.GCalc.Group

    static name: string
    static $gtype: GObject.GType<Group>

    // Constructors of GCalc-1.GCalc.Group

    constructor(config?: Group.ConstructorProperties) 
    _init(config?: Group.ConstructorProperties): void
}

module Hashable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Hashable extends GObject.Object {

    // Owm methods of GCalc-1.GCalc.Hashable

    hash(): number

    // Own virtual methods of GCalc-1.GCalc.Hashable

    vfunc_hash(): number

    // Class property signals of GCalc-1.GCalc.Hashable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Hashable {

    // Own properties of GCalc-1.GCalc.Hashable

    static name: string
    static $gtype: GObject.GType<Hashable>

    // Constructors of GCalc-1.GCalc.Hashable

    constructor(config?: Hashable.ConstructorProperties) 
    _init(config?: Hashable.ConstructorProperties): void
}

module MathEquation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface MathEquation extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.MathEquation

    readonly variables: ExpressionHashMap

    // Owm methods of GCalc-1.GCalc.MathEquation

    get_variables(): ExpressionHashMap

    // Own virtual methods of GCalc-1.GCalc.MathEquation

    vfunc_get_variables(): ExpressionHashMap

    // Class property signals of GCalc-1.GCalc.MathEquation

    connect(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variables", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MathEquation {

    // Own properties of GCalc-1.GCalc.MathEquation

    static name: string
    static $gtype: GObject.GType<MathEquation>

    // Constructors of GCalc-1.GCalc.MathEquation

    constructor(config?: MathEquation.ConstructorProperties) 
    _init(config?: MathEquation.ConstructorProperties): void
}

module MathEquationManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MathEquationManager extends GObject.Object {

    // Own properties of GCalc-1.GCalc.MathEquationManager

    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer

    // Owm methods of GCalc-1.GCalc.MathEquationManager

    find_variable(name: string): Variable
    get_equations(): ExpressionContainer
    get_functions(): ExpressionContainer

    // Own virtual methods of GCalc-1.GCalc.MathEquationManager

    vfunc_find_variable(name: string): Variable
    vfunc_get_equations(): ExpressionContainer
    vfunc_get_functions(): ExpressionContainer

    // Class property signals of GCalc-1.GCalc.MathEquationManager

    connect(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equations", ...args: any[]): void
    connect(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::functions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MathEquationManager {

    // Own properties of GCalc-1.GCalc.MathEquationManager

    static name: string
    static $gtype: GObject.GType<MathEquationManager>

    // Constructors of GCalc-1.GCalc.MathEquationManager

    constructor(config?: MathEquationManager.ConstructorProperties) 
    _init(config?: MathEquationManager.ConstructorProperties): void
}

module Minus {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties, Operator.ConstructorProperties, BinaryOperator.ConstructorProperties {
    }

}

interface Minus extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Minus

    connect(sigName: "notify::parent", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Minus {

    // Own properties of GCalc-1.GCalc.Minus

    static name: string
    static $gtype: GObject.GType<Minus>

    // Constructors of GCalc-1.GCalc.Minus

    constructor(config?: Minus.ConstructorProperties) 
    _init(config?: Minus.ConstructorProperties): void
}

module Multiply {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties, Operator.ConstructorProperties, BinaryOperator.ConstructorProperties {
    }

}

interface Multiply extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Multiply

    connect(sigName: "notify::parent", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Multiply {

    // Own properties of GCalc-1.GCalc.Multiply

    static name: string
    static $gtype: GObject.GType<Multiply>

    // Constructors of GCalc-1.GCalc.Multiply

    constructor(config?: Multiply.ConstructorProperties) 
    _init(config?: Multiply.ConstructorProperties): void
}

module Operator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Operator extends GObject.Object, Expression {

    // Class property signals of GCalc-1.GCalc.Operator

    connect(sigName: "notify::parent", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Operator {

    // Own properties of GCalc-1.GCalc.Operator

    static name: string
    static $gtype: GObject.GType<Operator>

    // Constructors of GCalc-1.GCalc.Operator

    constructor(config?: Operator.ConstructorProperties) 
    _init(config?: Operator.ConstructorProperties): void
}

module Plus {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties, Operator.ConstructorProperties, BinaryOperator.ConstructorProperties {
    }

}

interface Plus extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Plus

    connect(sigName: "notify::parent", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Plus {

    // Own properties of GCalc-1.GCalc.Plus

    static name: string
    static $gtype: GObject.GType<Plus>

    // Constructors of GCalc-1.GCalc.Plus

    constructor(config?: Plus.ConstructorProperties) 
    _init(config?: Plus.ConstructorProperties): void
}

module Polynomial {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Polynomial extends GObject.Object, Expression {

    // Owm methods of GCalc-1.GCalc.Polynomial

    evaluate(): Expression

    // Own virtual methods of GCalc-1.GCalc.Polynomial

    vfunc_evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Polynomial

    connect(sigName: "notify::parent", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Polynomial {

    // Own properties of GCalc-1.GCalc.Polynomial

    static name: string
    static $gtype: GObject.GType<Polynomial>

    // Constructors of GCalc-1.GCalc.Polynomial

    constructor(config?: Polynomial.ConstructorProperties) 
    _init(config?: Polynomial.ConstructorProperties): void
}

module Pow {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties, Operator.ConstructorProperties {
    }

}

interface Pow extends GObject.Object, Expression, Operator {

    // Class property signals of GCalc-1.GCalc.Pow

    connect(sigName: "notify::parent", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Pow {

    // Own properties of GCalc-1.GCalc.Pow

    static name: string
    static $gtype: GObject.GType<Pow>

    // Constructors of GCalc-1.GCalc.Pow

    constructor(config?: Pow.ConstructorProperties) 
    _init(config?: Pow.ConstructorProperties): void
}

module Result {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Result extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Result

    readonly expression: Expression

    // Owm methods of GCalc-1.GCalc.Result

    to_string(): string | null
    get_expression(): Expression

    // Own virtual methods of GCalc-1.GCalc.Result

    vfunc_to_string(): string | null
    vfunc_get_expression(): Expression

    // Class property signals of GCalc-1.GCalc.Result

    connect(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Result {

    // Own properties of GCalc-1.GCalc.Result

    static name: string
    static $gtype: GObject.GType<Result>

    // Constructors of GCalc-1.GCalc.Result

    constructor(config?: Result.ConstructorProperties) 
    _init(config?: Result.ConstructorProperties): void
}

module Solver {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCalc-1.GCalc.Solver

        equationManager?: MathEquationManager | null
    }

}

interface Solver extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Solver

    equationManager: MathEquationManager

    // Owm methods of GCalc-1.GCalc.Solver

    solve(str: string): Result
    get_equation_manager(): MathEquationManager
    set_equation_manager(value: MathEquationManager): void

    // Own virtual methods of GCalc-1.GCalc.Solver

    vfunc_solve(str: string): Result
    vfunc_get_equation_manager(): MathEquationManager
    vfunc_set_equation_manager(value: MathEquationManager): void

    // Class property signals of GCalc-1.GCalc.Solver

    connect(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equation-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Solver {

    // Own properties of GCalc-1.GCalc.Solver

    static name: string
    static $gtype: GObject.GType<Solver>

    // Constructors of GCalc-1.GCalc.Solver

    constructor(config?: Solver.ConstructorProperties) 
    _init(config?: Solver.ConstructorProperties): void
}

module Term {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Term extends GObject.Object, Expression {

    // Owm methods of GCalc-1.GCalc.Term

    add(t: Term): Expression
    evaluate(): Expression

    // Own virtual methods of GCalc-1.GCalc.Term

    vfunc_add(t: Term): Expression
    vfunc_evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Term

    connect(sigName: "notify::parent", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Term {

    // Own properties of GCalc-1.GCalc.Term

    static name: string
    static $gtype: GObject.GType<Term>

    // Constructors of GCalc-1.GCalc.Term

    constructor(config?: Term.ConstructorProperties) 
    _init(config?: Term.ConstructorProperties): void
    static evaluate_constants(c1: Constant, c2: Constant, op: Operator): Expression
}

module Variable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Expression.ConstructorProperties {

        // Own constructor properties of GCalc-1.GCalc.Variable

        name?: string | null
        value?: Constant | null
        bind?: Variable | null
    }

}

interface Variable extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.Variable

    name: string | null
    value: Constant
    bind: Variable

    // Owm methods of GCalc-1.GCalc.Variable

    evaluate(): Expression
    get_name(): string
    set_name(value: string): void
    get_value(): Constant
    set_value(value: Constant): void
    get_bind(): Variable
    set_bind(value: Variable): void
    get_binded(): boolean

    // Own virtual methods of GCalc-1.GCalc.Variable

    vfunc_evaluate(): Expression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_value(): Constant
    vfunc_set_value(value: Constant): void
    vfunc_get_bind(): Variable
    vfunc_set_bind(value: Variable): void
    vfunc_get_binded(): boolean

    // Class property signals of GCalc-1.GCalc.Variable

    connect(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Variable {

    // Own properties of GCalc-1.GCalc.Variable

    static name: string
    static $gtype: GObject.GType<Variable>

    // Constructors of GCalc-1.GCalc.Variable

    constructor(config?: Variable.ConstructorProperties) 
    _init(config?: Variable.ConstructorProperties): void
}

module ExpressionContainer {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, Gee.ArrayList.ConstructorProperties {

        // Own constructor properties of GCalc-1.GCalc.ExpressionContainer

        parent?: Expression | null
    }

}

interface ExpressionContainer extends Gio.ListModel {

    // Own properties of GCalc-1.GCalc.ExpressionContainer

    parent: Expression

    // Conflicting properties

    readOnlyView: any

    // Own fields of GCalc-1.GCalc.ExpressionContainer

    parent_instance: Gee.ArrayList
    priv: ExpressionContainerPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionContainer

    add(exp: Expression): void

    // Overloads of add

    add(item: any): boolean
    remove_at(index: number): Expression

    // Overloads of remove_at

    remove_at(index: number): any
    remove(exp: Expression): Expression

    // Overloads of remove

    remove(item: any): boolean
    get_object(position: number): GObject.Object | null
    find(exp: Expression): Expression | null
    find_named(name: string): Expression | null
    get_parent(): Expression
    set_parent(value: Expression): void

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of GCalc-1.GCalc.ExpressionContainer

    connect(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionContainer extends Gee.ArrayList {

    // Own properties of GCalc-1.GCalc.ExpressionContainer

    static name: string
    static $gtype: GObject.GType<ExpressionContainer>

    // Constructors of GCalc-1.GCalc.ExpressionContainer

    constructor(config?: ExpressionContainer.ConstructorProperties) 
    constructor() 
    static new(): ExpressionContainer

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionContainer.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

module ExpressionHashMap {

    // Constructor properties interface

    interface ConstructorProperties extends Gee.HashMap.ConstructorProperties {

        // Own constructor properties of GCalc-1.GCalc.ExpressionHashMap

        parent?: Expression | null
    }

}

interface ExpressionHashMap {

    // Own properties of GCalc-1.GCalc.ExpressionHashMap

    parent: Expression

    // Own fields of GCalc-1.GCalc.ExpressionHashMap

    parent_instance: Gee.HashMap
    priv: ExpressionHashMapPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionHashMap

    add(exp: Expression): void
    remove(exp: Expression): void

    // Overloads of remove

    remove(key: any): [ /* returnType */ boolean, /* value */ any ]
    find_named(name: string): Expression
    get_parent(): Expression
    set_parent(value: Expression): void

    // Class property signals of GCalc-1.GCalc.ExpressionHashMap

    connect(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::k-type", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExpressionHashMap extends Gee.HashMap {

    // Own properties of GCalc-1.GCalc.ExpressionHashMap

    static name: string
    static $gtype: GObject.GType<ExpressionHashMap>

    // Constructors of GCalc-1.GCalc.ExpressionHashMap

    constructor(config?: ExpressionHashMap.ConstructorProperties) 
    constructor() 
    static new(): ExpressionHashMap

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ExpressionHashMap.ConstructorProperties): void
}

module GFunctionAcos {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionAcos {

    // Own fields of GCalc-1.GCalc.GFunctionAcos

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionAcos

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionAcos extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAcos

    static name: string
    static $gtype: GObject.GType<GFunctionAcos>

    // Constructors of GCalc-1.GCalc.GFunctionAcos

    constructor(config?: GFunctionAcos.ConstructorProperties) 
    constructor() 
    static new(): GFunctionAcos

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAcos.ConstructorProperties): void
}

module GFunctionAcosh {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionAcosh {

    // Own fields of GCalc-1.GCalc.GFunctionAcosh

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionAcosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionAcosh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAcosh

    static name: string
    static $gtype: GObject.GType<GFunctionAcosh>

    // Constructors of GCalc-1.GCalc.GFunctionAcosh

    constructor(config?: GFunctionAcosh.ConstructorProperties) 
    constructor() 
    static new(): GFunctionAcosh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAcosh.ConstructorProperties): void
}

module GFunctionAsin {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionAsin {

    // Own fields of GCalc-1.GCalc.GFunctionAsin

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionAsin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionAsin extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAsin

    static name: string
    static $gtype: GObject.GType<GFunctionAsin>

    // Constructors of GCalc-1.GCalc.GFunctionAsin

    constructor(config?: GFunctionAsin.ConstructorProperties) 
    constructor() 
    static new(): GFunctionAsin

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAsin.ConstructorProperties): void
}

module GFunctionAsinh {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionAsinh {

    // Own fields of GCalc-1.GCalc.GFunctionAsinh

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionAsinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionAsinh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAsinh

    static name: string
    static $gtype: GObject.GType<GFunctionAsinh>

    // Constructors of GCalc-1.GCalc.GFunctionAsinh

    constructor(config?: GFunctionAsinh.ConstructorProperties) 
    constructor() 
    static new(): GFunctionAsinh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAsinh.ConstructorProperties): void
}

module GFunctionAtan {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionAtan {

    // Own fields of GCalc-1.GCalc.GFunctionAtan

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionAtan

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionAtan extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAtan

    static name: string
    static $gtype: GObject.GType<GFunctionAtan>

    // Constructors of GCalc-1.GCalc.GFunctionAtan

    constructor(config?: GFunctionAtan.ConstructorProperties) 
    constructor() 
    static new(): GFunctionAtan

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAtan.ConstructorProperties): void
}

module GFunctionAtanh {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionAtanh {

    // Own fields of GCalc-1.GCalc.GFunctionAtanh

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionAtanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionAtanh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAtanh

    static name: string
    static $gtype: GObject.GType<GFunctionAtanh>

    // Constructors of GCalc-1.GCalc.GFunctionAtanh

    constructor(config?: GFunctionAtanh.ConstructorProperties) 
    constructor() 
    static new(): GFunctionAtanh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAtanh.ConstructorProperties): void
}

module GFunctionCos {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionCos {

    // Own fields of GCalc-1.GCalc.GFunctionCos

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionCos

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionCos extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionCos

    static name: string
    static $gtype: GObject.GType<GFunctionCos>

    // Constructors of GCalc-1.GCalc.GFunctionCos

    constructor(config?: GFunctionCos.ConstructorProperties) 
    constructor() 
    static new(): GFunctionCos

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionCos.ConstructorProperties): void
}

module GFunctionCosh {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionCosh {

    // Own fields of GCalc-1.GCalc.GFunctionCosh

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionCosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionCosh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionCosh

    static name: string
    static $gtype: GObject.GType<GFunctionCosh>

    // Constructors of GCalc-1.GCalc.GFunctionCosh

    constructor(config?: GFunctionCosh.ConstructorProperties) 
    constructor() 
    static new(): GFunctionCosh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionCosh.ConstructorProperties): void
}

module GFunctionExp {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionExp {

    // Own fields of GCalc-1.GCalc.GFunctionExp

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionExp extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionExp

    static name: string
    static $gtype: GObject.GType<GFunctionExp>

    // Constructors of GCalc-1.GCalc.GFunctionExp

    constructor(config?: GFunctionExp.ConstructorProperties) 
    constructor() 
    static new(): GFunctionExp

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionExp.ConstructorProperties): void
}

module GFunctionLog {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionLog {

    // Own fields of GCalc-1.GCalc.GFunctionLog

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionLog

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionLog extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionLog

    static name: string
    static $gtype: GObject.GType<GFunctionLog>

    // Constructors of GCalc-1.GCalc.GFunctionLog

    constructor(config?: GFunctionLog.ConstructorProperties) 
    constructor() 
    static new(): GFunctionLog

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionLog.ConstructorProperties): void
}

module GFunctionSin {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionSin {

    // Own fields of GCalc-1.GCalc.GFunctionSin

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionSin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionSin extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSin

    static name: string
    static $gtype: GObject.GType<GFunctionSin>

    // Constructors of GCalc-1.GCalc.GFunctionSin

    constructor(config?: GFunctionSin.ConstructorProperties) 
    constructor() 
    static new(): GFunctionSin

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionSin.ConstructorProperties): void
}

module GFunctionSinh {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionSinh {

    // Own fields of GCalc-1.GCalc.GFunctionSinh

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionSinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionSinh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSinh

    static name: string
    static $gtype: GObject.GType<GFunctionSinh>

    // Constructors of GCalc-1.GCalc.GFunctionSinh

    constructor(config?: GFunctionSinh.ConstructorProperties) 
    constructor() 
    static new(): GFunctionSinh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionSinh.ConstructorProperties): void
}

module GFunctionSqrt {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionSqrt {

    // Own fields of GCalc-1.GCalc.GFunctionSqrt

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionSqrt

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionSqrt extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSqrt

    static name: string
    static $gtype: GObject.GType<GFunctionSqrt>

    // Constructors of GCalc-1.GCalc.GFunctionSqrt

    constructor(config?: GFunctionSqrt.ConstructorProperties) 
    constructor() 
    static new(): GFunctionSqrt

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionSqrt.ConstructorProperties): void
}

module GFunctionTan {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionTan {

    // Own fields of GCalc-1.GCalc.GFunctionTan

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionTan

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionTan extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionTan

    static name: string
    static $gtype: GObject.GType<GFunctionTan>

    // Constructors of GCalc-1.GCalc.GFunctionTan

    constructor(config?: GFunctionTan.ConstructorProperties) 
    constructor() 
    static new(): GFunctionTan

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionTan.ConstructorProperties): void
}

module GFunctionTanh {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionTanh {

    // Own fields of GCalc-1.GCalc.GFunctionTanh

    parent_instance: GFunction & GExpression & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GFunctionTanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunctionTanh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionTanh

    static name: string
    static $gtype: GObject.GType<GFunctionTanh>

    // Constructors of GCalc-1.GCalc.GFunctionTanh

    constructor(config?: GFunctionTanh.ConstructorProperties) 
    constructor() 
    static new(): GFunctionTanh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionTanh.ConstructorProperties): void
}

module GExpression {

    // Constructor properties interface

    interface ConstructorProperties extends Expression.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GExpression extends Expression {

    // Own fields of GCalc-1.GCalc.GExpression

    parent_instance: GObject.Object
    priv: GExpressionPrivate

    // Owm methods of GCalc-1.GCalc.GExpression

    to_string(): string | null
    solve(): Result

    // Own virtual methods of GCalc-1.GCalc.GExpression

    vfunc_to_string(): string | null
    vfunc_solve(): Result

    // Class property signals of GCalc-1.GCalc.GExpression

    connect(sigName: "notify::parent", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GExpression extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GExpression

    static name: string
    static $gtype: GObject.GType<GExpression>

    // Constructors of GCalc-1.GCalc.GExpression

    constructor(config?: GExpression.ConstructorProperties) 
    constructor() 
    static new(): GExpression
    _init(config?: GExpression.ConstructorProperties): void
}

module GErrorExpression {

    // Constructor properties interface

    interface ConstructorProperties extends ErrorExpression.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GErrorExpression extends ErrorExpression {

    // Own fields of GCalc-1.GCalc.GErrorExpression

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GErrorExpression

    connect(sigName: "notify::parent", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GErrorExpression extends GExpression {

    // Own properties of GCalc-1.GCalc.GErrorExpression

    static name: string
    static $gtype: GObject.GType<GErrorExpression>

    // Constructors of GCalc-1.GCalc.GErrorExpression

    constructor(config?: GErrorExpression.ConstructorProperties) 
    constructor() 
    static new(): GErrorExpression

    // Overloads of new

    static new(): GExpression
    _init(config?: GErrorExpression.ConstructorProperties): void
}

module GAssign {

    // Constructor properties interface

    interface ConstructorProperties extends Operator.ConstructorProperties, BinaryOperator.ConstructorProperties, Assign.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GAssign extends Operator, BinaryOperator, Assign {

    // Own fields of GCalc-1.GCalc.GAssign

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GAssign

    connect(sigName: "notify::parent", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GAssign extends GExpression {

    // Own properties of GCalc-1.GCalc.GAssign

    static name: string
    static $gtype: GObject.GType<GAssign>

    // Constructors of GCalc-1.GCalc.GAssign

    constructor(config?: GAssign.ConstructorProperties) 
    constructor() 
    static new(): GAssign

    // Overloads of new

    static new(): GExpression
    _init(config?: GAssign.ConstructorProperties): void
}

module GConstant {

    // Constructor properties interface

    interface ConstructorProperties extends Constant.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GConstant extends Constant {

    // Own fields of GCalc-1.GCalc.GConstant

    parent_instance: GExpression & GObject.Object
    priv: any

    // Owm methods of GCalc-1.GCalc.GConstant

    subtract(c: Constant): Constant

    // Class property signals of GCalc-1.GCalc.GConstant

    connect(sigName: "notify::parent", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GConstant extends GExpression {

    // Own properties of GCalc-1.GCalc.GConstant

    static name: string
    static $gtype: GObject.GType<GConstant>

    // Constructors of GCalc-1.GCalc.GConstant

    constructor(config?: GConstant.ConstructorProperties) 
    static integer(val: number): GConstant
    static unsigned_integer(val: number): GConstant
    static double(val: number): GConstant
    static complex(real: number, imag: number): GConstant
    constructor() 
    static new(): GConstant

    // Overloads of new

    static new(): GExpression
    _init(config?: GConstant.ConstructorProperties): void
}

module GDivision {

    // Constructor properties interface

    interface ConstructorProperties extends Operator.ConstructorProperties, BinaryOperator.ConstructorProperties, Division.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GDivision extends Operator, BinaryOperator, Division {

    // Own fields of GCalc-1.GCalc.GDivision

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GDivision

    connect(sigName: "notify::parent", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GDivision extends GExpression {

    // Own properties of GCalc-1.GCalc.GDivision

    static name: string
    static $gtype: GObject.GType<GDivision>

    // Constructors of GCalc-1.GCalc.GDivision

    constructor(config?: GDivision.ConstructorProperties) 
    constructor() 
    static new(): GDivision

    // Overloads of new

    static new(): GExpression
    _init(config?: GDivision.ConstructorProperties): void
}

module GErrorResult {

    // Constructor properties interface

    interface ConstructorProperties extends Result.ConstructorProperties, ErrorResult.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GErrorResult extends Result, ErrorResult {

    // Own fields of GCalc-1.GCalc.GErrorResult

    parent_instance: GObject.Object
    priv: GErrorResultPrivate

    // Class property signals of GCalc-1.GCalc.GErrorResult

    connect(sigName: "notify::expression", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::message", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GErrorResult extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GErrorResult

    static name: string
    static $gtype: GObject.GType<GErrorResult>

    // Constructors of GCalc-1.GCalc.GErrorResult

    constructor(config?: GErrorResult.ConstructorProperties) 
    constructor(msg: string) 
    static new(msg: string): GErrorResult
    _init(config?: GErrorResult.ConstructorProperties): void
}

module GFunction {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties, Hashable.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GFunction extends Function, Hashable {

    // Own fields of GCalc-1.GCalc.GFunction

    parent_instance: GExpression & GObject.Object
    priv: any

    // Owm methods of GCalc-1.GCalc.GFunction

    evaluate(): Expression

    // Own virtual methods of GCalc-1.GCalc.GFunction

    vfunc_evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.GFunction

    connect(sigName: "notify::param-types", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::param-types", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::n-params", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-params", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GFunction extends GExpression {

    // Own properties of GCalc-1.GCalc.GFunction

    static name: string
    static $gtype: GObject.GType<GFunction>

    // Constructors of GCalc-1.GCalc.GFunction

    constructor(config?: GFunction.ConstructorProperties) 
    static with_name(name: string, nparams: number): GFunction
    constructor() 
    static new(): GFunction

    // Overloads of new

    static new(): GExpression
    _init(config?: GFunction.ConstructorProperties): void
}

module GMathEquation {

    // Constructor properties interface

    interface ConstructorProperties extends MathEquation.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GMathEquation extends MathEquation {

    // Own fields of GCalc-1.GCalc.GMathEquation

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GMathEquation

    connect(sigName: "notify::variables", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variables", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GMathEquation extends GExpression {

    // Own properties of GCalc-1.GCalc.GMathEquation

    static name: string
    static $gtype: GObject.GType<GMathEquation>

    // Constructors of GCalc-1.GCalc.GMathEquation

    constructor(config?: GMathEquation.ConstructorProperties) 
    constructor() 
    static new(): GMathEquation

    // Overloads of new

    static new(): GExpression
    _init(config?: GMathEquation.ConstructorProperties): void
}

module GMathEquationManager {

    // Constructor properties interface

    interface ConstructorProperties extends MathEquationManager.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GMathEquationManager extends MathEquationManager {

    // Own fields of GCalc-1.GCalc.GMathEquationManager

    parent_instance: GObject.Object
    priv: GMathEquationManagerPrivate

    // Class property signals of GCalc-1.GCalc.GMathEquationManager

    connect(sigName: "notify::equations", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equations", ...args: any[]): void
    connect(sigName: "notify::functions", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::functions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GMathEquationManager extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GMathEquationManager

    static name: string
    static $gtype: GObject.GType<GMathEquationManager>

    // Constructors of GCalc-1.GCalc.GMathEquationManager

    constructor(config?: GMathEquationManager.ConstructorProperties) 
    constructor() 
    static new(): GMathEquationManager
    _init(config?: GMathEquationManager.ConstructorProperties): void
}

module GMinus {

    // Constructor properties interface

    interface ConstructorProperties extends Operator.ConstructorProperties, BinaryOperator.ConstructorProperties, Minus.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GMinus extends Operator, BinaryOperator, Minus {

    // Own fields of GCalc-1.GCalc.GMinus

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GMinus

    connect(sigName: "notify::parent", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GMinus extends GExpression {

    // Own properties of GCalc-1.GCalc.GMinus

    static name: string
    static $gtype: GObject.GType<GMinus>

    // Constructors of GCalc-1.GCalc.GMinus

    constructor(config?: GMinus.ConstructorProperties) 
    constructor() 
    static new(): GMinus

    // Overloads of new

    static new(): GExpression
    _init(config?: GMinus.ConstructorProperties): void
}

module GMultiply {

    // Constructor properties interface

    interface ConstructorProperties extends Operator.ConstructorProperties, BinaryOperator.ConstructorProperties, Multiply.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GMultiply extends Operator, BinaryOperator, Multiply {

    // Own fields of GCalc-1.GCalc.GMultiply

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GMultiply

    connect(sigName: "notify::parent", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GMultiply extends GExpression {

    // Own properties of GCalc-1.GCalc.GMultiply

    static name: string
    static $gtype: GObject.GType<GMultiply>

    // Constructors of GCalc-1.GCalc.GMultiply

    constructor(config?: GMultiply.ConstructorProperties) 
    constructor() 
    static new(): GMultiply

    // Overloads of new

    static new(): GExpression
    _init(config?: GMultiply.ConstructorProperties): void
}

module GParser {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface GParser {

    // Own fields of GCalc-1.GCalc.GParser

    parent_instance: GObject.Object
    priv: GParserPrivate

    // Owm methods of GCalc-1.GCalc.GParser

    parse(str: string, eqman: MathEquationManager): void
    read_token(): GParserTokenType
    token_to_string(): string | null

    // Class property signals of GCalc-1.GCalc.GParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GParser extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GParser

    static name: string
    static $gtype: GObject.GType<GParser>

    // Constructors of GCalc-1.GCalc.GParser

    constructor(config?: GParser.ConstructorProperties) 
    constructor() 
    static new(): GParser
    _init(config?: GParser.ConstructorProperties): void
}

module GPlus {

    // Constructor properties interface

    interface ConstructorProperties extends Operator.ConstructorProperties, BinaryOperator.ConstructorProperties, Plus.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GPlus extends Operator, BinaryOperator, Plus {

    // Own fields of GCalc-1.GCalc.GPlus

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GPlus

    connect(sigName: "notify::parent", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GPlus extends GExpression {

    // Own properties of GCalc-1.GCalc.GPlus

    static name: string
    static $gtype: GObject.GType<GPlus>

    // Constructors of GCalc-1.GCalc.GPlus

    constructor(config?: GPlus.ConstructorProperties) 
    constructor() 
    static new(): GPlus

    // Overloads of new

    static new(): GExpression
    _init(config?: GPlus.ConstructorProperties): void
}

module GPolynomial {

    // Constructor properties interface

    interface ConstructorProperties extends Polynomial.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GPolynomial extends Polynomial {

    // Own fields of GCalc-1.GCalc.GPolynomial

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GPolynomial

    connect(sigName: "notify::parent", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GPolynomial extends GExpression {

    // Own properties of GCalc-1.GCalc.GPolynomial

    static name: string
    static $gtype: GObject.GType<GPolynomial>

    // Constructors of GCalc-1.GCalc.GPolynomial

    constructor(config?: GPolynomial.ConstructorProperties) 
    constructor() 
    static new(): GPolynomial

    // Overloads of new

    static new(): GExpression
    _init(config?: GPolynomial.ConstructorProperties): void
}

module GPow {

    // Constructor properties interface

    interface ConstructorProperties extends Operator.ConstructorProperties, Pow.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GPow extends Operator, Pow {

    // Own fields of GCalc-1.GCalc.GPow

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GPow

    connect(sigName: "notify::parent", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GPow extends GExpression {

    // Own properties of GCalc-1.GCalc.GPow

    static name: string
    static $gtype: GObject.GType<GPow>

    // Constructors of GCalc-1.GCalc.GPow

    constructor(config?: GPow.ConstructorProperties) 
    constructor() 
    static new(): GPow

    // Overloads of new

    static new(): GExpression
    _init(config?: GPow.ConstructorProperties): void
}

module GResult {

    // Constructor properties interface

    interface ConstructorProperties extends Result.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GResult extends Result {

    // Own fields of GCalc-1.GCalc.GResult

    parent_instance: GObject.Object
    priv: GResultPrivate

    // Class property signals of GCalc-1.GCalc.GResult

    connect(sigName: "notify::expression", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GResult extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GResult

    static name: string
    static $gtype: GObject.GType<GResult>

    // Constructors of GCalc-1.GCalc.GResult

    constructor(config?: GResult.ConstructorProperties) 
    constructor(exp: Expression) 
    static new(exp: Expression): GResult
    _init(config?: GResult.ConstructorProperties): void
}

module GGroup {

    // Constructor properties interface

    interface ConstructorProperties extends Group.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GGroup extends Group {

    // Own fields of GCalc-1.GCalc.GGroup

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GGroup

    connect(sigName: "notify::level", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GGroup extends GExpression {

    // Own properties of GCalc-1.GCalc.GGroup

    static name: string
    static $gtype: GObject.GType<GGroup>

    // Constructors of GCalc-1.GCalc.GGroup

    constructor(config?: GGroup.ConstructorProperties) 
    constructor() 
    static new(): GGroup

    // Overloads of new

    static new(): GExpression
    _init(config?: GGroup.ConstructorProperties): void
}

module GSolver {

    // Constructor properties interface

    interface ConstructorProperties extends Solver.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GSolver extends Solver {

    // Own fields of GCalc-1.GCalc.GSolver

    parent_instance: GObject.Object
    priv: GSolverPrivate

    // Class property signals of GCalc-1.GCalc.GSolver

    connect(sigName: "notify::equation-manager", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equation-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GSolver extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GSolver

    static name: string
    static $gtype: GObject.GType<GSolver>

    // Constructors of GCalc-1.GCalc.GSolver

    constructor(config?: GSolver.ConstructorProperties) 
    constructor() 
    static new(): GSolver
    _init(config?: GSolver.ConstructorProperties): void
}

module GTerm {

    // Constructor properties interface

    interface ConstructorProperties extends Term.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GTerm extends Term {

    // Own fields of GCalc-1.GCalc.GTerm

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GTerm

    connect(sigName: "notify::parent", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GTerm extends GExpression {

    // Own properties of GCalc-1.GCalc.GTerm

    static name: string
    static $gtype: GObject.GType<GTerm>

    // Constructors of GCalc-1.GCalc.GTerm

    constructor(config?: GTerm.ConstructorProperties) 
    constructor() 
    static new(): GTerm

    // Overloads of new

    static new(): GExpression
    _init(config?: GTerm.ConstructorProperties): void
}

module GVariable {

    // Constructor properties interface

    interface ConstructorProperties extends Variable.ConstructorProperties, Hashable.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GVariable extends Variable, Hashable {

    // Own fields of GCalc-1.GCalc.GVariable

    parent_instance: GExpression & GObject.Object
    priv: any

    // Class property signals of GCalc-1.GCalc.GVariable

    connect(sigName: "notify::name", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::bind", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GVariable extends GExpression {

    // Own properties of GCalc-1.GCalc.GVariable

    static name: string
    static $gtype: GObject.GType<GVariable>

    // Constructors of GCalc-1.GCalc.GVariable

    constructor(config?: GVariable.ConstructorProperties) 
    constructor(name: string) 
    static new(name: string): GVariable

    // Overloads of new

    static new(): GExpression
    _init(config?: GVariable.ConstructorProperties): void
}

interface ExpressionContainerClass {

    // Own fields of GCalc-1.GCalc.ExpressionContainerClass

    parent_class: Gee.ArrayListClass
}

abstract class ExpressionContainerClass {

    // Own properties of GCalc-1.GCalc.ExpressionContainerClass

    static name: string
}

interface ExpressionContainerPrivate {
}

class ExpressionContainerPrivate {

    // Own properties of GCalc-1.GCalc.ExpressionContainerPrivate

    static name: string
}

interface ExpressionHashMapClass {

    // Own fields of GCalc-1.GCalc.ExpressionHashMapClass

    parent_class: Gee.HashMapClass
}

abstract class ExpressionHashMapClass {

    // Own properties of GCalc-1.GCalc.ExpressionHashMapClass

    static name: string
}

interface ExpressionHashMapPrivate {
}

class ExpressionHashMapPrivate {

    // Own properties of GCalc-1.GCalc.ExpressionHashMapPrivate

    static name: string
}

interface GFunctionAcosClass {

    // Own fields of GCalc-1.GCalc.GFunctionAcosClass

    parent_class: GFunctionClass
}

abstract class GFunctionAcosClass {

    // Own properties of GCalc-1.GCalc.GFunctionAcosClass

    static name: string
}

interface GFunctionAcosPrivate {
}

class GFunctionAcosPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionAcosPrivate

    static name: string
}

interface GFunctionAcoshClass {

    // Own fields of GCalc-1.GCalc.GFunctionAcoshClass

    parent_class: GFunctionClass
}

abstract class GFunctionAcoshClass {

    // Own properties of GCalc-1.GCalc.GFunctionAcoshClass

    static name: string
}

interface GFunctionAcoshPrivate {
}

class GFunctionAcoshPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionAcoshPrivate

    static name: string
}

interface GFunctionAsinClass {

    // Own fields of GCalc-1.GCalc.GFunctionAsinClass

    parent_class: GFunctionClass
}

abstract class GFunctionAsinClass {

    // Own properties of GCalc-1.GCalc.GFunctionAsinClass

    static name: string
}

interface GFunctionAsinPrivate {
}

class GFunctionAsinPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionAsinPrivate

    static name: string
}

interface GFunctionAsinhClass {

    // Own fields of GCalc-1.GCalc.GFunctionAsinhClass

    parent_class: GFunctionClass
}

abstract class GFunctionAsinhClass {

    // Own properties of GCalc-1.GCalc.GFunctionAsinhClass

    static name: string
}

interface GFunctionAsinhPrivate {
}

class GFunctionAsinhPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionAsinhPrivate

    static name: string
}

interface GFunctionAtanClass {

    // Own fields of GCalc-1.GCalc.GFunctionAtanClass

    parent_class: GFunctionClass
}

abstract class GFunctionAtanClass {

    // Own properties of GCalc-1.GCalc.GFunctionAtanClass

    static name: string
}

interface GFunctionAtanPrivate {
}

class GFunctionAtanPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionAtanPrivate

    static name: string
}

interface GFunctionAtanhClass {

    // Own fields of GCalc-1.GCalc.GFunctionAtanhClass

    parent_class: GFunctionClass
}

abstract class GFunctionAtanhClass {

    // Own properties of GCalc-1.GCalc.GFunctionAtanhClass

    static name: string
}

interface GFunctionAtanhPrivate {
}

class GFunctionAtanhPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionAtanhPrivate

    static name: string
}

interface GFunctionCosClass {

    // Own fields of GCalc-1.GCalc.GFunctionCosClass

    parent_class: GFunctionClass
}

abstract class GFunctionCosClass {

    // Own properties of GCalc-1.GCalc.GFunctionCosClass

    static name: string
}

interface GFunctionCosPrivate {
}

class GFunctionCosPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionCosPrivate

    static name: string
}

interface GFunctionCoshClass {

    // Own fields of GCalc-1.GCalc.GFunctionCoshClass

    parent_class: GFunctionClass
}

abstract class GFunctionCoshClass {

    // Own properties of GCalc-1.GCalc.GFunctionCoshClass

    static name: string
}

interface GFunctionCoshPrivate {
}

class GFunctionCoshPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionCoshPrivate

    static name: string
}

interface GFunctionExpClass {

    // Own fields of GCalc-1.GCalc.GFunctionExpClass

    parent_class: GFunctionClass
}

abstract class GFunctionExpClass {

    // Own properties of GCalc-1.GCalc.GFunctionExpClass

    static name: string
}

interface GFunctionExpPrivate {
}

class GFunctionExpPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionExpPrivate

    static name: string
}

interface GFunctionLogClass {

    // Own fields of GCalc-1.GCalc.GFunctionLogClass

    parent_class: GFunctionClass
}

abstract class GFunctionLogClass {

    // Own properties of GCalc-1.GCalc.GFunctionLogClass

    static name: string
}

interface GFunctionLogPrivate {
}

class GFunctionLogPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionLogPrivate

    static name: string
}

interface GFunctionSinClass {

    // Own fields of GCalc-1.GCalc.GFunctionSinClass

    parent_class: GFunctionClass
}

abstract class GFunctionSinClass {

    // Own properties of GCalc-1.GCalc.GFunctionSinClass

    static name: string
}

interface GFunctionSinPrivate {
}

class GFunctionSinPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionSinPrivate

    static name: string
}

interface GFunctionSinhClass {

    // Own fields of GCalc-1.GCalc.GFunctionSinhClass

    parent_class: GFunctionClass
}

abstract class GFunctionSinhClass {

    // Own properties of GCalc-1.GCalc.GFunctionSinhClass

    static name: string
}

interface GFunctionSinhPrivate {
}

class GFunctionSinhPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionSinhPrivate

    static name: string
}

interface GFunctionSqrtClass {

    // Own fields of GCalc-1.GCalc.GFunctionSqrtClass

    parent_class: GFunctionClass
}

abstract class GFunctionSqrtClass {

    // Own properties of GCalc-1.GCalc.GFunctionSqrtClass

    static name: string
}

interface GFunctionSqrtPrivate {
}

class GFunctionSqrtPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionSqrtPrivate

    static name: string
}

interface GFunctionTanClass {

    // Own fields of GCalc-1.GCalc.GFunctionTanClass

    parent_class: GFunctionClass
}

abstract class GFunctionTanClass {

    // Own properties of GCalc-1.GCalc.GFunctionTanClass

    static name: string
}

interface GFunctionTanPrivate {
}

class GFunctionTanPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionTanPrivate

    static name: string
}

interface GFunctionTanhClass {

    // Own fields of GCalc-1.GCalc.GFunctionTanhClass

    parent_class: GFunctionClass
}

abstract class GFunctionTanhClass {

    // Own properties of GCalc-1.GCalc.GFunctionTanhClass

    static name: string
}

interface GFunctionTanhPrivate {
}

class GFunctionTanhPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionTanhPrivate

    static name: string
}

interface GExpressionClass {

    // Own fields of GCalc-1.GCalc.GExpressionClass

    parent_class: GObject.ObjectClass
    to_string: (self: GExpression) => string | null
    solve: (self: GExpression) => Result
}

abstract class GExpressionClass {

    // Own properties of GCalc-1.GCalc.GExpressionClass

    static name: string
}

interface GExpressionPrivate {
}

class GExpressionPrivate {

    // Own properties of GCalc-1.GCalc.GExpressionPrivate

    static name: string
}

interface GErrorExpressionClass {

    // Own fields of GCalc-1.GCalc.GErrorExpressionClass

    parent_class: GExpressionClass
}

abstract class GErrorExpressionClass {

    // Own properties of GCalc-1.GCalc.GErrorExpressionClass

    static name: string
}

interface GErrorExpressionPrivate {
}

class GErrorExpressionPrivate {

    // Own properties of GCalc-1.GCalc.GErrorExpressionPrivate

    static name: string
}

interface GAssignClass {

    // Own fields of GCalc-1.GCalc.GAssignClass

    parent_class: GExpressionClass
}

abstract class GAssignClass {

    // Own properties of GCalc-1.GCalc.GAssignClass

    static name: string
}

interface GAssignPrivate {
}

class GAssignPrivate {

    // Own properties of GCalc-1.GCalc.GAssignPrivate

    static name: string
}

interface GConstantClass {

    // Own fields of GCalc-1.GCalc.GConstantClass

    parent_class: GExpressionClass
}

abstract class GConstantClass {

    // Own properties of GCalc-1.GCalc.GConstantClass

    static name: string
}

interface GConstantPrivate {
}

class GConstantPrivate {

    // Own properties of GCalc-1.GCalc.GConstantPrivate

    static name: string
}

interface GDivisionClass {

    // Own fields of GCalc-1.GCalc.GDivisionClass

    parent_class: GExpressionClass
}

abstract class GDivisionClass {

    // Own properties of GCalc-1.GCalc.GDivisionClass

    static name: string
}

interface GDivisionPrivate {
}

class GDivisionPrivate {

    // Own properties of GCalc-1.GCalc.GDivisionPrivate

    static name: string
}

interface GErrorResultClass {

    // Own fields of GCalc-1.GCalc.GErrorResultClass

    parent_class: GObject.ObjectClass
}

abstract class GErrorResultClass {

    // Own properties of GCalc-1.GCalc.GErrorResultClass

    static name: string
}

interface GErrorResultPrivate {
}

class GErrorResultPrivate {

    // Own properties of GCalc-1.GCalc.GErrorResultPrivate

    static name: string
}

interface GFunctionClass {

    // Own fields of GCalc-1.GCalc.GFunctionClass

    parent_class: GExpressionClass
    evaluate: (self: GFunction) => Expression
}

abstract class GFunctionClass {

    // Own properties of GCalc-1.GCalc.GFunctionClass

    static name: string
}

interface GFunctionPrivate {
}

class GFunctionPrivate {

    // Own properties of GCalc-1.GCalc.GFunctionPrivate

    static name: string
}

interface GMathEquationClass {

    // Own fields of GCalc-1.GCalc.GMathEquationClass

    parent_class: GExpressionClass
}

abstract class GMathEquationClass {

    // Own properties of GCalc-1.GCalc.GMathEquationClass

    static name: string
}

interface GMathEquationPrivate {
}

class GMathEquationPrivate {

    // Own properties of GCalc-1.GCalc.GMathEquationPrivate

    static name: string
}

interface GMathEquationManagerClass {

    // Own fields of GCalc-1.GCalc.GMathEquationManagerClass

    parent_class: GObject.ObjectClass
}

abstract class GMathEquationManagerClass {

    // Own properties of GCalc-1.GCalc.GMathEquationManagerClass

    static name: string
}

interface GMathEquationManagerPrivate {
}

class GMathEquationManagerPrivate {

    // Own properties of GCalc-1.GCalc.GMathEquationManagerPrivate

    static name: string
}

interface GMinusClass {

    // Own fields of GCalc-1.GCalc.GMinusClass

    parent_class: GExpressionClass
}

abstract class GMinusClass {

    // Own properties of GCalc-1.GCalc.GMinusClass

    static name: string
}

interface GMinusPrivate {
}

class GMinusPrivate {

    // Own properties of GCalc-1.GCalc.GMinusPrivate

    static name: string
}

interface GMultiplyClass {

    // Own fields of GCalc-1.GCalc.GMultiplyClass

    parent_class: GExpressionClass
}

abstract class GMultiplyClass {

    // Own properties of GCalc-1.GCalc.GMultiplyClass

    static name: string
}

interface GMultiplyPrivate {
}

class GMultiplyPrivate {

    // Own properties of GCalc-1.GCalc.GMultiplyPrivate

    static name: string
}

interface GParserClass {

    // Own fields of GCalc-1.GCalc.GParserClass

    parent_class: GObject.ObjectClass
}

abstract class GParserClass {

    // Own properties of GCalc-1.GCalc.GParserClass

    static name: string
}

interface GParserPrivate {
}

class GParserPrivate {

    // Own properties of GCalc-1.GCalc.GParserPrivate

    static name: string
}

interface GPlusClass {

    // Own fields of GCalc-1.GCalc.GPlusClass

    parent_class: GExpressionClass
}

abstract class GPlusClass {

    // Own properties of GCalc-1.GCalc.GPlusClass

    static name: string
}

interface GPlusPrivate {
}

class GPlusPrivate {

    // Own properties of GCalc-1.GCalc.GPlusPrivate

    static name: string
}

interface GPolynomialClass {

    // Own fields of GCalc-1.GCalc.GPolynomialClass

    parent_class: GExpressionClass
}

abstract class GPolynomialClass {

    // Own properties of GCalc-1.GCalc.GPolynomialClass

    static name: string
}

interface GPolynomialPrivate {
}

class GPolynomialPrivate {

    // Own properties of GCalc-1.GCalc.GPolynomialPrivate

    static name: string
}

interface GPowClass {

    // Own fields of GCalc-1.GCalc.GPowClass

    parent_class: GExpressionClass
}

abstract class GPowClass {

    // Own properties of GCalc-1.GCalc.GPowClass

    static name: string
}

interface GPowPrivate {
}

class GPowPrivate {

    // Own properties of GCalc-1.GCalc.GPowPrivate

    static name: string
}

interface GResultClass {

    // Own fields of GCalc-1.GCalc.GResultClass

    parent_class: GObject.ObjectClass
}

abstract class GResultClass {

    // Own properties of GCalc-1.GCalc.GResultClass

    static name: string
}

interface GResultPrivate {
}

class GResultPrivate {

    // Own properties of GCalc-1.GCalc.GResultPrivate

    static name: string
}

interface GGroupClass {

    // Own fields of GCalc-1.GCalc.GGroupClass

    parent_class: GExpressionClass
}

abstract class GGroupClass {

    // Own properties of GCalc-1.GCalc.GGroupClass

    static name: string
}

interface GGroupPrivate {
}

class GGroupPrivate {

    // Own properties of GCalc-1.GCalc.GGroupPrivate

    static name: string
}

interface GSolverClass {

    // Own fields of GCalc-1.GCalc.GSolverClass

    parent_class: GObject.ObjectClass
}

abstract class GSolverClass {

    // Own properties of GCalc-1.GCalc.GSolverClass

    static name: string
}

interface GSolverPrivate {
}

class GSolverPrivate {

    // Own properties of GCalc-1.GCalc.GSolverPrivate

    static name: string
}

interface GTermClass {

    // Own fields of GCalc-1.GCalc.GTermClass

    parent_class: GExpressionClass
}

abstract class GTermClass {

    // Own properties of GCalc-1.GCalc.GTermClass

    static name: string
}

interface GTermPrivate {
}

class GTermPrivate {

    // Own properties of GCalc-1.GCalc.GTermPrivate

    static name: string
}

interface GVariableClass {

    // Own fields of GCalc-1.GCalc.GVariableClass

    parent_class: GExpressionClass
}

abstract class GVariableClass {

    // Own properties of GCalc-1.GCalc.GVariableClass

    static name: string
}

interface GVariablePrivate {
}

class GVariablePrivate {

    // Own properties of GCalc-1.GCalc.GVariablePrivate

    static name: string
}

interface AssignIface {

    // Own fields of GCalc-1.GCalc.AssignIface

    parent_iface: GObject.TypeInterface
}

abstract class AssignIface {

    // Own properties of GCalc-1.GCalc.AssignIface

    static name: string
}

interface BinaryOperatorIface {

    // Own fields of GCalc-1.GCalc.BinaryOperatorIface

    parent_iface: GObject.TypeInterface
}

abstract class BinaryOperatorIface {

    // Own properties of GCalc-1.GCalc.BinaryOperatorIface

    static name: string
}

interface ConstantIface {

    // Own fields of GCalc-1.GCalc.ConstantIface

    parent_iface: GObject.TypeInterface
    real: (self: Constant) => number
    imag: (self: Constant) => number
    zero: (self: Constant) => void
    add: (self: Constant, c: Constant) => Constant
    multiply: (self: Constant, c: Constant) => Constant
    divide: (self: Constant, c: Constant) => Constant
    neg: (self: Constant) => Constant
    pow: (self: Constant, c: Constant) => Constant
}

abstract class ConstantIface {

    // Own properties of GCalc-1.GCalc.ConstantIface

    static name: string
}

interface DivisionIface {

    // Own fields of GCalc-1.GCalc.DivisionIface

    parent_iface: GObject.TypeInterface
}

abstract class DivisionIface {

    // Own properties of GCalc-1.GCalc.DivisionIface

    static name: string
}

interface ExpressionIface {

    // Own fields of GCalc-1.GCalc.ExpressionIface

    parent_iface: GObject.TypeInterface
    to_string: (self: Expression) => string | null
    solve: (self: Expression) => Result
    get_parent: (self: Expression) => Expression
    set_parent: (self: Expression, value: Expression) => void
    get_expressions: (self: Expression) => ExpressionContainer
}

abstract class ExpressionIface {

    // Own properties of GCalc-1.GCalc.ExpressionIface

    static name: string
}

interface ErrorExpressionIface {

    // Own fields of GCalc-1.GCalc.ErrorExpressionIface

    parent_iface: GObject.TypeInterface
}

abstract class ErrorExpressionIface {

    // Own properties of GCalc-1.GCalc.ErrorExpressionIface

    static name: string
}

interface FunctionIface {

    // Own fields of GCalc-1.GCalc.FunctionIface

    parent_iface: GObject.TypeInterface
    evaluate: (self: Function) => Expression
    verify_params: (self: Function) => boolean
    get_param_types: (self: Function) => ExpressionContainer
    get_name: (self: Function) => string
    set_name: (self: Function, value: string) => void
    get_n_params: (self: Function) => number
    set_n_params: (self: Function, value: number) => void
    get_closed: (self: Function) => boolean
    set_closed: (self: Function, value: boolean) => void
}

abstract class FunctionIface {

    // Own properties of GCalc-1.GCalc.FunctionIface

    static name: string
}

interface ErrorResultIface {

    // Own fields of GCalc-1.GCalc.ErrorResultIface

    parent_iface: GObject.TypeInterface
    get_message: (self: ErrorResult) => string
}

abstract class ErrorResultIface {

    // Own properties of GCalc-1.GCalc.ErrorResultIface

    static name: string
}

interface GroupIface {

    // Own fields of GCalc-1.GCalc.GroupIface

    parent_iface: GObject.TypeInterface
    evaluate: (self: Group) => Expression
    get_level: (self: Group) => GroupLevel
    set_level: (self: Group, value: GroupLevel) => void
    get_closed: (self: Group) => boolean
    set_closed: (self: Group, value: boolean) => void
}

abstract class GroupIface {

    // Own properties of GCalc-1.GCalc.GroupIface

    static name: string
}

interface HashableIface {

    // Own fields of GCalc-1.GCalc.HashableIface

    parent_iface: GObject.TypeInterface
    hash: (self: Hashable) => number
}

abstract class HashableIface {

    // Own properties of GCalc-1.GCalc.HashableIface

    static name: string
}

interface MathEquationIface {

    // Own fields of GCalc-1.GCalc.MathEquationIface

    parent_iface: GObject.TypeInterface
    get_variables: (self: MathEquation) => ExpressionHashMap
}

abstract class MathEquationIface {

    // Own properties of GCalc-1.GCalc.MathEquationIface

    static name: string
}

interface MathEquationManagerIface {

    // Own fields of GCalc-1.GCalc.MathEquationManagerIface

    parent_iface: GObject.TypeInterface
    find_variable: (self: MathEquationManager, name: string) => Variable
    get_equations: (self: MathEquationManager) => ExpressionContainer
    get_functions: (self: MathEquationManager) => ExpressionContainer
}

abstract class MathEquationManagerIface {

    // Own properties of GCalc-1.GCalc.MathEquationManagerIface

    static name: string
}

interface MinusIface {

    // Own fields of GCalc-1.GCalc.MinusIface

    parent_iface: GObject.TypeInterface
}

abstract class MinusIface {

    // Own properties of GCalc-1.GCalc.MinusIface

    static name: string
}

interface MultiplyIface {

    // Own fields of GCalc-1.GCalc.MultiplyIface

    parent_iface: GObject.TypeInterface
}

abstract class MultiplyIface {

    // Own properties of GCalc-1.GCalc.MultiplyIface

    static name: string
}

interface OperatorIface {

    // Own fields of GCalc-1.GCalc.OperatorIface

    parent_iface: GObject.TypeInterface
}

abstract class OperatorIface {

    // Own properties of GCalc-1.GCalc.OperatorIface

    static name: string
}

interface PlusIface {

    // Own fields of GCalc-1.GCalc.PlusIface

    parent_iface: GObject.TypeInterface
}

abstract class PlusIface {

    // Own properties of GCalc-1.GCalc.PlusIface

    static name: string
}

interface PolynomialIface {

    // Own fields of GCalc-1.GCalc.PolynomialIface

    parent_iface: GObject.TypeInterface
    evaluate: (self: Polynomial) => Expression
}

abstract class PolynomialIface {

    // Own properties of GCalc-1.GCalc.PolynomialIface

    static name: string
}

interface PowIface {

    // Own fields of GCalc-1.GCalc.PowIface

    parent_iface: GObject.TypeInterface
}

abstract class PowIface {

    // Own properties of GCalc-1.GCalc.PowIface

    static name: string
}

interface ResultIface {

    // Own fields of GCalc-1.GCalc.ResultIface

    parent_iface: GObject.TypeInterface
    to_string: (self: Result) => string | null
    get_expression: (self: Result) => Expression
}

abstract class ResultIface {

    // Own properties of GCalc-1.GCalc.ResultIface

    static name: string
}

interface SolverIface {

    // Own fields of GCalc-1.GCalc.SolverIface

    parent_iface: GObject.TypeInterface
    solve: (self: Solver, str: string) => Result
    get_equation_manager: (self: Solver) => MathEquationManager
    set_equation_manager: (self: Solver, value: MathEquationManager) => void
}

abstract class SolverIface {

    // Own properties of GCalc-1.GCalc.SolverIface

    static name: string
}

interface TermIface {

    // Own fields of GCalc-1.GCalc.TermIface

    parent_iface: GObject.TypeInterface
    add: (self: Term, t: Term) => Expression
    evaluate: (self: Term) => Expression
}

abstract class TermIface {

    // Own properties of GCalc-1.GCalc.TermIface

    static name: string
}

interface VariableIface {

    // Own fields of GCalc-1.GCalc.VariableIface

    parent_iface: GObject.TypeInterface
    evaluate: (self: Variable) => Expression
    get_name: (self: Variable) => string
    set_name: (self: Variable, value: string) => void
    get_value: (self: Variable) => Constant
    set_value: (self: Variable, value: Constant) => void
    get_bind: (self: Variable) => Variable
    set_bind: (self: Variable, value: Variable) => void
    get_binded: (self: Variable) => boolean
}

abstract class VariableIface {

    // Own properties of GCalc-1.GCalc.VariableIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GCalc;
// END