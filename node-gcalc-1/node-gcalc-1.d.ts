
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
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

    // Own properties of GCalc-1.GCalc.Assign

    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Assign

    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Assign

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Assign {

    // Own properties of GCalc-1.GCalc.Assign

    static name: string

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

    // Own properties of GCalc-1.GCalc.BinaryOperator

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.BinaryOperator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BinaryOperator {

    // Own properties of GCalc-1.GCalc.BinaryOperator

    static name: string

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

    // Own properties of GCalc-1.GCalc.Constant

    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Constant

    // Has conflict: real(): number
    // Has conflict: imag(): number
    // Has conflict: zero(): void
    // Has conflict: add(c: Constant): Constant
    // Has conflict: multiply(c: Constant): Constant
    // Has conflict: divide(c: Constant): Constant
    // Has conflict: neg(): Constant
    // Has conflict: pow(c: Constant): Constant

    // Own virtual methods of GCalc-1.GCalc.Constant

    real(): number
    imag(): number
    zero(): void
    add(c: Constant): Constant
    multiply(c: Constant): Constant
    divide(c: Constant): Constant
    neg(): Constant
    pow(c: Constant): Constant

    // Class property signals of GCalc-1.GCalc.Constant

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Constant {

    // Own properties of GCalc-1.GCalc.Constant

    static name: string

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

    // Own properties of GCalc-1.GCalc.Division

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.Division

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Division {

    // Own properties of GCalc-1.GCalc.Division

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Expression

    // Has conflict: toString(): string | null
    // Has conflict: solve(): Result
    // Has conflict: getParent(): Expression
    // Has conflict: setParent(value: Expression): void
    // Has conflict: getExpressions(): ExpressionContainer

    // Own virtual methods of GCalc-1.GCalc.Expression

    toString(): string | null
    solve(): Result
    getParent(): Expression
    setParent(value: Expression): void
    getExpressions(): ExpressionContainer

    // Class property signals of GCalc-1.GCalc.Expression

    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
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

class Expression {

    // Own properties of GCalc-1.GCalc.Expression

    static name: string

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

    // Own properties of GCalc-1.GCalc.ErrorExpression

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.ErrorExpression

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ErrorExpression {

    // Own properties of GCalc-1.GCalc.ErrorExpression

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Function

    // Has conflict: evaluate(): Expression
    // Has conflict: verifyParams(): boolean
    // Has conflict: getParamTypes(): ExpressionContainer
    // Has conflict: getName(): string | null
    // Has conflict: setName(value: string | null): void
    // Has conflict: getNParams(): number
    // Has conflict: setNParams(value: number): void
    // Has conflict: getClosed(): boolean
    // Has conflict: setClosed(value: boolean): void

    // Own virtual methods of GCalc-1.GCalc.Function

    evaluate(): Expression
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string | null
    setName(value: string | null): void
    getNParams(): number
    setNParams(value: number): void
    getClosed(): boolean
    setClosed(value: boolean): void

    // Class property signals of GCalc-1.GCalc.Function

    connect(sigName: "notify::param-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::param-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::param-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::param-types", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::n-params", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-params", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Function {

    // Own properties of GCalc-1.GCalc.Function

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.ErrorResult

    // Has conflict: getMessage(): string | null

    // Own virtual methods of GCalc-1.GCalc.ErrorResult

    getMessage(): string | null

    // Class property signals of GCalc-1.GCalc.ErrorResult

    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::expression", callback: (...args: any[]) => void): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ErrorResult {

    // Own properties of GCalc-1.GCalc.ErrorResult

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Group

    // Has conflict: evaluate(): Expression
    // Has conflict: getLevel(): GroupLevel
    // Has conflict: setLevel(value: GroupLevel): void
    // Has conflict: getClosed(): boolean
    // Has conflict: setClosed(value: boolean): void

    // Own virtual methods of GCalc-1.GCalc.Group

    evaluate(): Expression
    getLevel(): GroupLevel
    setLevel(value: GroupLevel): void
    getClosed(): boolean
    setClosed(value: boolean): void

    // Class property signals of GCalc-1.GCalc.Group

    connect(sigName: "notify::level", callback: (...args: any[]) => void): number
    on(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Group {

    // Own properties of GCalc-1.GCalc.Group

    static name: string

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

    // Own properties of GCalc-1.GCalc.Hashable

    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Hashable

    // Has conflict: hash(): number

    // Own virtual methods of GCalc-1.GCalc.Hashable

    hash(): number

    // Class property signals of GCalc-1.GCalc.Hashable

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

class Hashable {

    // Own properties of GCalc-1.GCalc.Hashable

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.MathEquation

    // Has conflict: getVariables(): ExpressionHashMap

    // Own virtual methods of GCalc-1.GCalc.MathEquation

    getVariables(): ExpressionHashMap

    // Class property signals of GCalc-1.GCalc.MathEquation

    connect(sigName: "notify::variables", callback: (...args: any[]) => void): number
    on(sigName: "notify::variables", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::variables", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::variables", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MathEquation {

    // Own properties of GCalc-1.GCalc.MathEquation

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.MathEquationManager

    // Has conflict: findVariable(name: string | null): Variable
    // Has conflict: getEquations(): ExpressionContainer
    // Has conflict: getFunctions(): ExpressionContainer

    // Own virtual methods of GCalc-1.GCalc.MathEquationManager

    findVariable(name: string | null): Variable
    getEquations(): ExpressionContainer
    getFunctions(): ExpressionContainer

    // Class property signals of GCalc-1.GCalc.MathEquationManager

    connect(sigName: "notify::equations", callback: (...args: any[]) => void): number
    on(sigName: "notify::equations", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equations", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equations", ...args: any[]): void
    connect(sigName: "notify::functions", callback: (...args: any[]) => void): number
    on(sigName: "notify::functions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::functions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::functions", ...args: any[]): void
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

class MathEquationManager {

    // Own properties of GCalc-1.GCalc.MathEquationManager

    static name: string

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

    // Own properties of GCalc-1.GCalc.Minus

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.Minus

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Minus {

    // Own properties of GCalc-1.GCalc.Minus

    static name: string

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

    // Own properties of GCalc-1.GCalc.Multiply

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.Multiply

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Multiply {

    // Own properties of GCalc-1.GCalc.Multiply

    static name: string

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

    // Own properties of GCalc-1.GCalc.Operator

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.Operator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Operator {

    // Own properties of GCalc-1.GCalc.Operator

    static name: string

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

    // Own properties of GCalc-1.GCalc.Plus

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.Plus

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Plus {

    // Own properties of GCalc-1.GCalc.Plus

    static name: string

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

    // Own properties of GCalc-1.GCalc.Polynomial

    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Polynomial

    // Has conflict: evaluate(): Expression

    // Own virtual methods of GCalc-1.GCalc.Polynomial

    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Polynomial

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Polynomial {

    // Own properties of GCalc-1.GCalc.Polynomial

    static name: string

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

    // Own properties of GCalc-1.GCalc.Pow

    __gtype__: number

    // Class property signals of GCalc-1.GCalc.Pow

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Pow {

    // Own properties of GCalc-1.GCalc.Pow

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Result

    // Has conflict: toString(): string | null
    // Has conflict: getExpression(): Expression

    // Own virtual methods of GCalc-1.GCalc.Result

    toString(): string | null
    getExpression(): Expression

    // Class property signals of GCalc-1.GCalc.Result

    connect(sigName: "notify::expression", callback: (...args: any[]) => void): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expression", ...args: any[]): void
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

class Result {

    // Own properties of GCalc-1.GCalc.Result

    static name: string

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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Solver

    // Has conflict: solve(str: string | null): Result
    // Has conflict: getEquationManager(): MathEquationManager
    // Has conflict: setEquationManager(value: MathEquationManager): void

    // Own virtual methods of GCalc-1.GCalc.Solver

    solve(str: string | null): Result
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void

    // Class property signals of GCalc-1.GCalc.Solver

    connect(sigName: "notify::equation-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::equation-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equation-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equation-manager", ...args: any[]): void
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

class Solver {

    // Own properties of GCalc-1.GCalc.Solver

    static name: string

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

    // Own properties of GCalc-1.GCalc.Term

    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Term

    // Has conflict: add(t: Term): Expression
    // Has conflict: evaluate(): Expression

    // Own virtual methods of GCalc-1.GCalc.Term

    add(t: Term): Expression
    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Term

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Term {

    // Own properties of GCalc-1.GCalc.Term

    static name: string

    // Constructors of GCalc-1.GCalc.Term

    constructor(config?: Term.ConstructorProperties) 
    _init(config?: Term.ConstructorProperties): void
    static evaluateConstants(c1: Constant, c2: Constant, op: Operator): Expression
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
    __gtype__: number

    // Owm methods of GCalc-1.GCalc.Variable

    // Has conflict: evaluate(): Expression
    // Has conflict: getName(): string | null
    // Has conflict: setName(value: string | null): void
    // Has conflict: getValue(): Constant
    // Has conflict: setValue(value: Constant): void
    // Has conflict: getBind(): Variable
    // Has conflict: setBind(value: Variable): void
    // Has conflict: getBinded(): boolean

    // Own virtual methods of GCalc-1.GCalc.Variable

    evaluate(): Expression
    getName(): string | null
    setName(value: string | null): void
    getValue(): Constant
    setValue(value: Constant): void
    getBind(): Variable
    setBind(value: Variable): void
    getBinded(): boolean

    // Class property signals of GCalc-1.GCalc.Variable

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::bind", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Variable {

    // Own properties of GCalc-1.GCalc.Variable

    static name: string

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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any
    size: any

    // Own fields of GCalc-1.GCalc.ExpressionContainer

    parentInstance: Gee.ArrayList
    priv: ExpressionContainerPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionContainer

    add(exp: Expression): void

    // Overloads of add

    add(item: any | null): boolean
    removeAt(index: number): Expression

    // Overloads of removeAt

    removeAt(index: number): any | null
    remove(exp: Expression): Expression

    // Overloads of remove

    remove(item: any | null): boolean
    getObject(position: number): GObject.Object | null
    find(exp: Expression): Expression | null
    findNamed(name: string | null): Expression | null
    getParent(): Expression
    setParent(value: Expression): void

    // Conflicting methods

    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    insert(index: number, item: any | null): void
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of GCalc-1.GCalc.ExpressionContainer

    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ExpressionContainer extends Gee.ArrayList {

    // Own properties of GCalc-1.GCalc.ExpressionContainer

    static name: string

    // Constructors of GCalc-1.GCalc.ExpressionContainer

    constructor(config?: ExpressionContainer.ConstructorProperties) 
    constructor() 
    static new(): ExpressionContainer

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionContainer.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
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
    __gtype__: number

    // Own fields of GCalc-1.GCalc.ExpressionHashMap

    parentInstance: Gee.HashMap
    priv: ExpressionHashMapPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionHashMap

    add(exp: Expression): void
    remove(exp: Expression): void

    // Overloads of remove

    remove(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    findNamed(name: string | null): Expression
    getParent(): Expression
    setParent(value: Expression): void

    // Conflicting methods

    hasKey(key: any | null): boolean

    // Overloads of hasKey

    hasKey(key: any | null): boolean
    hasKey(key: any | null): boolean
    has(key: any | null, value: any | null): boolean

    // Overloads of has

    has(key: any | null, value: any | null): boolean
    has(key: any | null, value: any | null): boolean
    get(key: any | null): any | null

    // Overloads of get

    get(key: any | null): any | null
    get(key: any | null): any | null
    set(key: any | null, value: any | null): void

    // Overloads of set

    set(key: any | null, value: any | null): void
    set(key: any | null, value: any | null): void
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    mapIterator(): Gee.MapIterator

    // Overloads of mapIterator

    mapIterator(): Gee.MapIterator
    mapIterator(): Gee.MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Gee.Set

    // Overloads of getKeys

    getKeys(): Gee.Set
    getKeys(): Gee.Set
    getValues(): Gee.Collection

    // Overloads of getValues

    getValues(): Gee.Collection
    getValues(): Gee.Collection
    getEntries(): Gee.Set

    // Overloads of getEntries

    getEntries(): Gee.Set
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Map
    getReadOnlyView(): Gee.Map

    // Class property signals of GCalc-1.GCalc.ExpressionHashMap

    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (...args: any[]) => void): number
    on(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ExpressionHashMap extends Gee.HashMap {

    // Own properties of GCalc-1.GCalc.ExpressionHashMap

    static name: string

    // Constructors of GCalc-1.GCalc.ExpressionHashMap

    constructor(config?: ExpressionHashMap.ConstructorProperties) 
    constructor() 
    static new(): ExpressionHashMap

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ExpressionHashMap.ConstructorProperties): void
}

module GFunctionAcos {

    // Constructor properties interface

    interface ConstructorProperties extends GFunction.ConstructorProperties {
    }

}

interface GFunctionAcos {

    // Own properties of GCalc-1.GCalc.GFunctionAcos

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionAcos

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionAcos

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

class GFunctionAcos extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAcos

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionAcosh

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionAcosh

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionAcosh

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

class GFunctionAcosh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAcosh

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionAsin

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionAsin

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionAsin

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

class GFunctionAsin extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAsin

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionAsinh

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionAsinh

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionAsinh

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

class GFunctionAsinh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAsinh

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionAtan

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionAtan

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionAtan

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

class GFunctionAtan extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAtan

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionAtanh

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionAtanh

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionAtanh

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

class GFunctionAtanh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAtanh

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionCos

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionCos

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionCos

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

class GFunctionCos extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionCos

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionCosh

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionCosh

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionCosh

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

class GFunctionCosh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionCosh

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionExp

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionExp

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionExp

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

class GFunctionExp extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionExp

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionLog

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionLog

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionLog

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

class GFunctionLog extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionLog

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionSin

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionSin

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionSin

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

class GFunctionSin extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSin

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionSinh

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionSinh

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionSinh

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

class GFunctionSinh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSinh

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionSqrt

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionSqrt

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionSqrt

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

class GFunctionSqrt extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSqrt

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionTan

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionTan

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionTan

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

class GFunctionTan extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionTan

    static name: string

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

    // Own properties of GCalc-1.GCalc.GFunctionTanh

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunctionTanh

    parentInstance: any
    priv: any

    // Conflicting methods

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression
    evaluate(): Expression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GFunctionTanh

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

class GFunctionTanh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionTanh

    static name: string

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

    // Own properties of GCalc-1.GCalc.GExpression

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GExpression

    parentInstance: GObject.Object
    priv: GExpressionPrivate

    // Owm methods of GCalc-1.GCalc.GExpression

    // Has conflict: toString(): string | null
    // Has conflict: solve(): Result

    // Own virtual methods of GCalc-1.GCalc.GExpression

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result

    // Class property signals of GCalc-1.GCalc.GExpression

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GExpression extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GExpression

    static name: string

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

    // Own properties of GCalc-1.GCalc.GErrorExpression

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GErrorExpression

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GErrorExpression

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GErrorExpression extends GExpression {

    // Own properties of GCalc-1.GCalc.GErrorExpression

    static name: string

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

    // Own properties of GCalc-1.GCalc.GAssign

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GAssign

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GAssign

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GAssign extends GExpression {

    // Own properties of GCalc-1.GCalc.GAssign

    static name: string

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

    // Own properties of GCalc-1.GCalc.GConstant

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GConstant

    parentInstance: any
    priv: any

    // Owm methods of GCalc-1.GCalc.GConstant

    subtract(c: Constant): Constant

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GConstant

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GConstant extends GExpression {

    // Own properties of GCalc-1.GCalc.GConstant

    static name: string

    // Constructors of GCalc-1.GCalc.GConstant

    constructor(config?: GConstant.ConstructorProperties) 
    static integer(val: number): GConstant
    static unsignedInteger(val: number): GConstant
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

    // Own properties of GCalc-1.GCalc.GDivision

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GDivision

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GDivision

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GDivision extends GExpression {

    // Own properties of GCalc-1.GCalc.GDivision

    static name: string

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

    // Own properties of GCalc-1.GCalc.GErrorResult

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GErrorResult

    parentInstance: GObject.Object
    priv: GErrorResultPrivate

    // Class property signals of GCalc-1.GCalc.GErrorResult

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::expression", callback: (...args: any[]) => void): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GErrorResult extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GErrorResult

    static name: string

    // Constructors of GCalc-1.GCalc.GErrorResult

    constructor(config?: GErrorResult.ConstructorProperties) 
    constructor(msg: string | null) 
    static new(msg: string | null): GErrorResult
    _init(config?: GErrorResult.ConstructorProperties): void
}

module GFunction {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties, Hashable.ConstructorProperties, GExpression.ConstructorProperties {
    }

}

interface GFunction extends Function, Hashable {

    // Own properties of GCalc-1.GCalc.GFunction

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GFunction

    parentInstance: any
    priv: any

    // Owm methods of GCalc-1.GCalc.GFunction

    // Has conflict: evaluate(): Expression

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Own virtual methods of GCalc-1.GCalc.GFunction

    evaluate(): Expression

    // Overloads of evaluate

    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.GFunction

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::param-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::param-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::param-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::param-types", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::n-params", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-params", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-params", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunction extends GExpression {

    // Own properties of GCalc-1.GCalc.GFunction

    static name: string

    // Constructors of GCalc-1.GCalc.GFunction

    constructor(config?: GFunction.ConstructorProperties) 
    static withName(name: string | null, nparams: number): GFunction
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

    // Own properties of GCalc-1.GCalc.GMathEquation

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GMathEquation

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GMathEquation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::variables", callback: (...args: any[]) => void): number
    on(sigName: "notify::variables", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::variables", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::variables", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GMathEquation extends GExpression {

    // Own properties of GCalc-1.GCalc.GMathEquation

    static name: string

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

    // Own properties of GCalc-1.GCalc.GMathEquationManager

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GMathEquationManager

    parentInstance: GObject.Object
    priv: GMathEquationManagerPrivate

    // Class property signals of GCalc-1.GCalc.GMathEquationManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::equations", callback: (...args: any[]) => void): number
    on(sigName: "notify::equations", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equations", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equations", ...args: any[]): void
    connect(sigName: "notify::functions", callback: (...args: any[]) => void): number
    on(sigName: "notify::functions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::functions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::functions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GMathEquationManager extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GMathEquationManager

    static name: string

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

    // Own properties of GCalc-1.GCalc.GMinus

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GMinus

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GMinus

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GMinus extends GExpression {

    // Own properties of GCalc-1.GCalc.GMinus

    static name: string

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

    // Own properties of GCalc-1.GCalc.GMultiply

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GMultiply

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GMultiply

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GMultiply extends GExpression {

    // Own properties of GCalc-1.GCalc.GMultiply

    static name: string

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

    // Own properties of GCalc-1.GCalc.GParser

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GParser

    parentInstance: GObject.Object
    priv: GParserPrivate

    // Owm methods of GCalc-1.GCalc.GParser

    parse(str: string | null, eqman: MathEquationManager): void
    readToken(): GParserTokenType
    tokenToString(): string | null

    // Class property signals of GCalc-1.GCalc.GParser

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

class GParser extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GParser

    static name: string

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

    // Own properties of GCalc-1.GCalc.GPlus

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GPlus

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GPlus

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GPlus extends GExpression {

    // Own properties of GCalc-1.GCalc.GPlus

    static name: string

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

    // Own properties of GCalc-1.GCalc.GPolynomial

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GPolynomial

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GPolynomial

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GPolynomial extends GExpression {

    // Own properties of GCalc-1.GCalc.GPolynomial

    static name: string

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

    // Own properties of GCalc-1.GCalc.GPow

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GPow

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GPow

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GPow extends GExpression {

    // Own properties of GCalc-1.GCalc.GPow

    static name: string

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

    // Own properties of GCalc-1.GCalc.GResult

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GResult

    parentInstance: GObject.Object
    priv: GResultPrivate

    // Class property signals of GCalc-1.GCalc.GResult

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::expression", callback: (...args: any[]) => void): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GResult extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GResult

    static name: string

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

    // Own properties of GCalc-1.GCalc.GGroup

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GGroup

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GGroup

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::level", callback: (...args: any[]) => void): number
    on(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GGroup extends GExpression {

    // Own properties of GCalc-1.GCalc.GGroup

    static name: string

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

    // Own properties of GCalc-1.GCalc.GSolver

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GSolver

    parentInstance: GObject.Object
    priv: GSolverPrivate

    // Class property signals of GCalc-1.GCalc.GSolver

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::equation-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::equation-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equation-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equation-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GSolver extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GSolver

    static name: string

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

    // Own properties of GCalc-1.GCalc.GTerm

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GTerm

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GTerm

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GTerm extends GExpression {

    // Own properties of GCalc-1.GCalc.GTerm

    static name: string

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

    // Own properties of GCalc-1.GCalc.GVariable

    __gtype__: number

    // Own fields of GCalc-1.GCalc.GVariable

    parentInstance: any
    priv: any

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): Result

    // Overloads of solve

    solve(): Result
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GVariable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::bind", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: (...args: any[]) => void): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GVariable extends GExpression {

    // Own properties of GCalc-1.GCalc.GVariable

    static name: string

    // Constructors of GCalc-1.GCalc.GVariable

    constructor(config?: GVariable.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): GVariable

    // Overloads of new

    static new(): GExpression
    _init(config?: GVariable.ConstructorProperties): void
}

interface ExpressionContainerClass {

    // Own fields of GCalc-1.GCalc.ExpressionContainerClass

    parentClass: Gee.ArrayListClass
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

    parentClass: Gee.HashMapClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GFunctionClass
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

    parentClass: GObject.ObjectClass
    toString: (self: GExpression) => string | null
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GExpressionClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GExpressionClass
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

    parentClass: GExpressionClass
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

    parentIface: GObject.TypeInterface
}

abstract class AssignIface {

    // Own properties of GCalc-1.GCalc.AssignIface

    static name: string
}

interface BinaryOperatorIface {

    // Own fields of GCalc-1.GCalc.BinaryOperatorIface

    parentIface: GObject.TypeInterface
}

abstract class BinaryOperatorIface {

    // Own properties of GCalc-1.GCalc.BinaryOperatorIface

    static name: string
}

interface ConstantIface {

    // Own fields of GCalc-1.GCalc.ConstantIface

    parentIface: GObject.TypeInterface
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

    parentIface: GObject.TypeInterface
}

abstract class DivisionIface {

    // Own properties of GCalc-1.GCalc.DivisionIface

    static name: string
}

interface ExpressionIface {

    // Own fields of GCalc-1.GCalc.ExpressionIface

    parentIface: GObject.TypeInterface
    toString: (self: Expression) => string | null
    solve: (self: Expression) => Result
    getParent: (self: Expression) => Expression
    setParent: (self: Expression, value: Expression) => void
    getExpressions: (self: Expression) => ExpressionContainer
}

abstract class ExpressionIface {

    // Own properties of GCalc-1.GCalc.ExpressionIface

    static name: string
}

interface ErrorExpressionIface {

    // Own fields of GCalc-1.GCalc.ErrorExpressionIface

    parentIface: GObject.TypeInterface
}

abstract class ErrorExpressionIface {

    // Own properties of GCalc-1.GCalc.ErrorExpressionIface

    static name: string
}

interface FunctionIface {

    // Own fields of GCalc-1.GCalc.FunctionIface

    parentIface: GObject.TypeInterface
    evaluate: (self: Function) => Expression
    verifyParams: (self: Function) => boolean
    getParamTypes: (self: Function) => ExpressionContainer
    getName: (self: Function) => string | null
    setName: (self: Function, value: string | null) => void
    getNParams: (self: Function) => number
    setNParams: (self: Function, value: number) => void
    getClosed: (self: Function) => boolean
    setClosed: (self: Function, value: boolean) => void
}

abstract class FunctionIface {

    // Own properties of GCalc-1.GCalc.FunctionIface

    static name: string
}

interface ErrorResultIface {

    // Own fields of GCalc-1.GCalc.ErrorResultIface

    parentIface: GObject.TypeInterface
    getMessage: (self: ErrorResult) => string | null
}

abstract class ErrorResultIface {

    // Own properties of GCalc-1.GCalc.ErrorResultIface

    static name: string
}

interface GroupIface {

    // Own fields of GCalc-1.GCalc.GroupIface

    parentIface: GObject.TypeInterface
    evaluate: (self: Group) => Expression
    getLevel: (self: Group) => GroupLevel
    setLevel: (self: Group, value: GroupLevel) => void
    getClosed: (self: Group) => boolean
    setClosed: (self: Group, value: boolean) => void
}

abstract class GroupIface {

    // Own properties of GCalc-1.GCalc.GroupIface

    static name: string
}

interface HashableIface {

    // Own fields of GCalc-1.GCalc.HashableIface

    parentIface: GObject.TypeInterface
    hash: (self: Hashable) => number
}

abstract class HashableIface {

    // Own properties of GCalc-1.GCalc.HashableIface

    static name: string
}

interface MathEquationIface {

    // Own fields of GCalc-1.GCalc.MathEquationIface

    parentIface: GObject.TypeInterface
    getVariables: (self: MathEquation) => ExpressionHashMap
}

abstract class MathEquationIface {

    // Own properties of GCalc-1.GCalc.MathEquationIface

    static name: string
}

interface MathEquationManagerIface {

    // Own fields of GCalc-1.GCalc.MathEquationManagerIface

    parentIface: GObject.TypeInterface
    findVariable: (self: MathEquationManager, name: string | null) => Variable
    getEquations: (self: MathEquationManager) => ExpressionContainer
    getFunctions: (self: MathEquationManager) => ExpressionContainer
}

abstract class MathEquationManagerIface {

    // Own properties of GCalc-1.GCalc.MathEquationManagerIface

    static name: string
}

interface MinusIface {

    // Own fields of GCalc-1.GCalc.MinusIface

    parentIface: GObject.TypeInterface
}

abstract class MinusIface {

    // Own properties of GCalc-1.GCalc.MinusIface

    static name: string
}

interface MultiplyIface {

    // Own fields of GCalc-1.GCalc.MultiplyIface

    parentIface: GObject.TypeInterface
}

abstract class MultiplyIface {

    // Own properties of GCalc-1.GCalc.MultiplyIface

    static name: string
}

interface OperatorIface {

    // Own fields of GCalc-1.GCalc.OperatorIface

    parentIface: GObject.TypeInterface
}

abstract class OperatorIface {

    // Own properties of GCalc-1.GCalc.OperatorIface

    static name: string
}

interface PlusIface {

    // Own fields of GCalc-1.GCalc.PlusIface

    parentIface: GObject.TypeInterface
}

abstract class PlusIface {

    // Own properties of GCalc-1.GCalc.PlusIface

    static name: string
}

interface PolynomialIface {

    // Own fields of GCalc-1.GCalc.PolynomialIface

    parentIface: GObject.TypeInterface
    evaluate: (self: Polynomial) => Expression
}

abstract class PolynomialIface {

    // Own properties of GCalc-1.GCalc.PolynomialIface

    static name: string
}

interface PowIface {

    // Own fields of GCalc-1.GCalc.PowIface

    parentIface: GObject.TypeInterface
}

abstract class PowIface {

    // Own properties of GCalc-1.GCalc.PowIface

    static name: string
}

interface ResultIface {

    // Own fields of GCalc-1.GCalc.ResultIface

    parentIface: GObject.TypeInterface
    toString: (self: Result) => string | null
    getExpression: (self: Result) => Expression
}

abstract class ResultIface {

    // Own properties of GCalc-1.GCalc.ResultIface

    static name: string
}

interface SolverIface {

    // Own fields of GCalc-1.GCalc.SolverIface

    parentIface: GObject.TypeInterface
    solve: (self: Solver, str: string | null) => Result
    getEquationManager: (self: Solver) => MathEquationManager
    setEquationManager: (self: Solver, value: MathEquationManager) => void
}

abstract class SolverIface {

    // Own properties of GCalc-1.GCalc.SolverIface

    static name: string
}

interface TermIface {

    // Own fields of GCalc-1.GCalc.TermIface

    parentIface: GObject.TypeInterface
    add: (self: Term, t: Term) => Expression
    evaluate: (self: Term) => Expression
}

abstract class TermIface {

    // Own properties of GCalc-1.GCalc.TermIface

    static name: string
}

interface VariableIface {

    // Own fields of GCalc-1.GCalc.VariableIface

    parentIface: GObject.TypeInterface
    evaluate: (self: Variable) => Expression
    getName: (self: Variable) => string | null
    setName: (self: Variable, value: string | null) => void
    getValue: (self: Variable) => Constant
    setValue: (self: Variable, value: Constant) => void
    getBind: (self: Variable) => Variable
    setBind: (self: Variable, value: Variable) => void
    getBinded: (self: Variable) => boolean
}

abstract class VariableIface {

    // Own properties of GCalc-1.GCalc.VariableIface

    static name: string
}

}

export default GCalc;