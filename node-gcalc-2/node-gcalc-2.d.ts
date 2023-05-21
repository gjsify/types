
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gcalc-2-import.d.ts';
    
/**
 * GCalc-2
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gee from '@girs/node-gee-0.8';

export namespace GCalc {

enum AngleUnit {
    RADIANS,
    DEGREES,
    GRADIANS,
}
enum AssigError {
    INVALID_STRUCTURE_ERROR,
}
enum FunctionError {
    INVALID_PARAMETERS_ERROR,
    INVOCATION_ERROR,
}
enum GroupError {
    INVALID_POLYNOMIAL,
    INVALID_INTERNAL_TERM,
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
enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
enum SolverError {
    EXPRESSION_ERROR,
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
module Hashable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Hashable extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Hashable

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.Hashable

    // Has conflict: hash(): number

    // Own virtual methods of GCalc-2.GCalc.Hashable

    hash(): number

    // Class property signals of GCalc-2.GCalc.Hashable

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

    // Own properties of GCalc-2.GCalc.Hashable

    static name: string

    // Constructors of GCalc-2.GCalc.Hashable

    constructor(config?: Hashable.ConstructorProperties) 
    _init(config?: Hashable.ConstructorProperties): void
}

module MathAssign {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

interface MathAssign extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Own properties of GCalc-2.GCalc.MathAssign

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathAssign

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathAssign

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

class MathAssign {

    // Own properties of GCalc-2.GCalc.MathAssign

    static name: string

    // Constructors of GCalc-2.GCalc.MathAssign

    constructor(config?: MathAssign.ConstructorProperties) 
    _init(config?: MathAssign.ConstructorProperties): void
}

module MathBinaryOperator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties {
    }

}

interface MathBinaryOperator extends GObject.Object, MathExpression, MathOperator {

    // Own properties of GCalc-2.GCalc.MathBinaryOperator

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.MathBinaryOperator

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

class MathBinaryOperator {

    // Own properties of GCalc-2.GCalc.MathBinaryOperator

    static name: string

    // Constructors of GCalc-2.GCalc.MathBinaryOperator

    constructor(config?: MathBinaryOperator.ConstructorProperties) 
    _init(config?: MathBinaryOperator.ConstructorProperties): void
}

module MathConstant {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

interface MathConstant extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathConstant

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathConstant

    // Has conflict: add(c: MathConstant): MathConstant
    // Has conflict: subtract(c: MathConstant): MathConstant
    // Has conflict: multiply(c: MathConstant): MathConstant
    // Has conflict: divide(c: MathConstant): MathConstant
    // Has conflict: neg(): MathConstant
    // Has conflict: pow(c: MathConstant): MathConstant

    // Own virtual methods of GCalc-2.GCalc.MathConstant

    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant

    // Class property signals of GCalc-2.GCalc.MathConstant

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

class MathConstant {

    // Own properties of GCalc-2.GCalc.MathConstant

    static name: string

    // Constructors of GCalc-2.GCalc.MathConstant

    constructor(config?: MathConstant.ConstructorProperties) 
    _init(config?: MathConstant.ConstructorProperties): void
}

module MathConstantComplex {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathConstant.ConstructorProperties {
    }

}

interface MathConstantComplex extends GObject.Object, MathExpression, MathConstant {

    // Own properties of GCalc-2.GCalc.MathConstantComplex

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathConstantComplex

    // Has conflict: real(): number
    // Has conflict: imag(): number
    // Has conflict: zero(): void

    // Own virtual methods of GCalc-2.GCalc.MathConstantComplex

    real(): number
    imag(): number
    zero(): void

    // Class property signals of GCalc-2.GCalc.MathConstantComplex

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

class MathConstantComplex {

    // Own properties of GCalc-2.GCalc.MathConstantComplex

    static name: string

    // Constructors of GCalc-2.GCalc.MathConstantComplex

    constructor(config?: MathConstantComplex.ConstructorProperties) 
    _init(config?: MathConstantComplex.ConstructorProperties): void
}

module MathConstantNumber {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathConstant.ConstructorProperties {
    }

}

interface MathConstantNumber extends GObject.Object, MathExpression, MathConstant {

    // Own properties of GCalc-2.GCalc.MathConstantNumber

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathConstantNumber

    // Has conflict: value(): number

    // Own virtual methods of GCalc-2.GCalc.MathConstantNumber

    value(): number

    // Class property signals of GCalc-2.GCalc.MathConstantNumber

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

class MathConstantNumber {

    // Own properties of GCalc-2.GCalc.MathConstantNumber

    static name: string

    // Constructors of GCalc-2.GCalc.MathConstantNumber

    constructor(config?: MathConstantNumber.ConstructorProperties) 
    _init(config?: MathConstantNumber.ConstructorProperties): void
}

module MathConstantVector {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathConstant.ConstructorProperties {
    }

}

interface MathConstantVector extends GObject.Object, MathExpression, MathConstant {

    // Own properties of GCalc-2.GCalc.MathConstantVector

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathConstantVector

    // Has conflict: mag(): MathConstant
    // Has conflict: ang(): MathConstant
    // Has conflict: x(): MathConstant
    // Has conflict: y(): MathConstant

    // Own virtual methods of GCalc-2.GCalc.MathConstantVector

    mag(): MathConstant
    ang(): MathConstant
    x(): MathConstant
    y(): MathConstant

    // Class property signals of GCalc-2.GCalc.MathConstantVector

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

class MathConstantVector {

    // Own properties of GCalc-2.GCalc.MathConstantVector

    static name: string

    // Constructors of GCalc-2.GCalc.MathConstantVector

    constructor(config?: MathConstantVector.ConstructorProperties) 
    _init(config?: MathConstantVector.ConstructorProperties): void
}

module MathDivision {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

interface MathDivision extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Own properties of GCalc-2.GCalc.MathDivision

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.MathDivision

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

class MathDivision {

    // Own properties of GCalc-2.GCalc.MathDivision

    static name: string

    // Constructors of GCalc-2.GCalc.MathDivision

    constructor(config?: MathDivision.ConstructorProperties) 
    _init(config?: MathDivision.ConstructorProperties): void
}

module MathEquation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

interface MathEquation extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathEquation

    readonly variables: ExpressionHashMap
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathEquation

    // Has conflict: getVariables(): ExpressionHashMap

    // Own virtual methods of GCalc-2.GCalc.MathEquation

    getVariables(): ExpressionHashMap

    // Class property signals of GCalc-2.GCalc.MathEquation

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

    // Own properties of GCalc-2.GCalc.MathEquation

    static name: string

    // Constructors of GCalc-2.GCalc.MathEquation

    constructor(config?: MathEquation.ConstructorProperties) 
    _init(config?: MathEquation.ConstructorProperties): void
}

module MathEquationManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MathEquationManager extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathEquationManager

    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathEquationManager

    // Has conflict: findVariable(name: string | null): MathVariable
    // Has conflict: getEquations(): ExpressionContainer
    // Has conflict: getFunctions(): ExpressionContainer

    // Own virtual methods of GCalc-2.GCalc.MathEquationManager

    findVariable(name: string | null): MathVariable
    getEquations(): ExpressionContainer
    getFunctions(): ExpressionContainer

    // Class property signals of GCalc-2.GCalc.MathEquationManager

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

    // Own properties of GCalc-2.GCalc.MathEquationManager

    static name: string

    // Constructors of GCalc-2.GCalc.MathEquationManager

    constructor(config?: MathEquationManager.ConstructorProperties) 
    _init(config?: MathEquationManager.ConstructorProperties): void
}

module MathErrorResult {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathResult.ConstructorProperties {
    }

}

interface MathErrorResult extends GObject.Object, MathResult {

    // Own properties of GCalc-2.GCalc.MathErrorResult

    readonly message: string | null
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathErrorResult

    // Has conflict: getMessage(): string | null

    // Own virtual methods of GCalc-2.GCalc.MathErrorResult

    getMessage(): string | null

    // Class property signals of GCalc-2.GCalc.MathErrorResult

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

class MathErrorResult {

    // Own properties of GCalc-2.GCalc.MathErrorResult

    static name: string

    // Constructors of GCalc-2.GCalc.MathErrorResult

    constructor(config?: MathErrorResult.ConstructorProperties) 
    _init(config?: MathErrorResult.ConstructorProperties): void
}

module MathExpression {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathExpression

        parent?: MathExpression | null
    }

}

interface MathExpression extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathExpression

    parent: MathExpression
    readonly expressions: ExpressionContainer
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathExpression

    // Has conflict: toString(): string | null
    // Has conflict: solve(): MathResult
    // Has conflict: getParent(): MathExpression
    // Has conflict: setParent(value: MathExpression): void
    // Has conflict: getExpressions(): ExpressionContainer

    // Own virtual methods of GCalc-2.GCalc.MathExpression

    toString(): string | null
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer

    // Class property signals of GCalc-2.GCalc.MathExpression

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

class MathExpression {

    // Own properties of GCalc-2.GCalc.MathExpression

    static name: string

    // Constructors of GCalc-2.GCalc.MathExpression

    constructor(config?: MathExpression.ConstructorProperties) 
    _init(config?: MathExpression.ConstructorProperties): void
}

module MathFunction {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathFunction

        name?: string | null
        nParams?: number | null
        closed?: boolean | null
    }

}

interface MathFunction extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathFunction

    readonly paramTypes: ExpressionContainer
    name: string | null
    nParams: number
    closed: boolean
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathFunction

    // Has conflict: evaluate(): MathExpression
    // Has conflict: verifyParams(): boolean
    // Has conflict: getParamTypes(): ExpressionContainer
    // Has conflict: getName(): string | null
    // Has conflict: setName(value: string | null): void
    // Has conflict: getNParams(): number
    // Has conflict: setNParams(value: number): void
    // Has conflict: getClosed(): boolean
    // Has conflict: setClosed(value: boolean): void

    // Own virtual methods of GCalc-2.GCalc.MathFunction

    evaluate(): MathExpression
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string | null
    setName(value: string | null): void
    getNParams(): number
    setNParams(value: number): void
    getClosed(): boolean
    setClosed(value: boolean): void

    // Class property signals of GCalc-2.GCalc.MathFunction

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

class MathFunction {

    // Own properties of GCalc-2.GCalc.MathFunction

    static name: string

    // Constructors of GCalc-2.GCalc.MathFunction

    constructor(config?: MathFunction.ConstructorProperties) 
    _init(config?: MathFunction.ConstructorProperties): void
}

module MathGroup {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathGroup

        level?: MathGroupLevel | null
        closed?: boolean | null
    }

}

interface MathGroup extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathGroup

    level: MathGroupLevel
    closed: boolean
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathGroup

    // Has conflict: evaluate(): MathExpression
    // Has conflict: getLevel(): MathGroupLevel
    // Has conflict: setLevel(value: MathGroupLevel): void
    // Has conflict: getClosed(): boolean
    // Has conflict: setClosed(value: boolean): void

    // Own virtual methods of GCalc-2.GCalc.MathGroup

    evaluate(): MathExpression
    getLevel(): MathGroupLevel
    setLevel(value: MathGroupLevel): void
    getClosed(): boolean
    setClosed(value: boolean): void

    // Class property signals of GCalc-2.GCalc.MathGroup

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

class MathGroup {

    // Own properties of GCalc-2.GCalc.MathGroup

    static name: string

    // Constructors of GCalc-2.GCalc.MathGroup

    constructor(config?: MathGroup.ConstructorProperties) 
    _init(config?: MathGroup.ConstructorProperties): void
}

module MathMinus {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

interface MathMinus extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Own properties of GCalc-2.GCalc.MathMinus

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.MathMinus

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

class MathMinus {

    // Own properties of GCalc-2.GCalc.MathMinus

    static name: string

    // Constructors of GCalc-2.GCalc.MathMinus

    constructor(config?: MathMinus.ConstructorProperties) 
    _init(config?: MathMinus.ConstructorProperties): void
}

module MathMultiply {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

interface MathMultiply extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Own properties of GCalc-2.GCalc.MathMultiply

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.MathMultiply

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

class MathMultiply {

    // Own properties of GCalc-2.GCalc.MathMultiply

    static name: string

    // Constructors of GCalc-2.GCalc.MathMultiply

    constructor(config?: MathMultiply.ConstructorProperties) 
    _init(config?: MathMultiply.ConstructorProperties): void
}

module MathOperator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

interface MathOperator extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathOperator

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.MathOperator

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

class MathOperator {

    // Own properties of GCalc-2.GCalc.MathOperator

    static name: string

    // Constructors of GCalc-2.GCalc.MathOperator

    constructor(config?: MathOperator.ConstructorProperties) 
    _init(config?: MathOperator.ConstructorProperties): void
}

module MathParameter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathVariable.ConstructorProperties {
    }

}

interface MathParameter extends GObject.Object, MathExpression, MathVariable {

    // Own properties of GCalc-2.GCalc.MathParameter

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathParameter

    // Has conflict: setValue(val: any | null): void
    // Has conflict: getValue(): any | null

    // Own virtual methods of GCalc-2.GCalc.MathParameter

    setValue(val: any | null): void

    // Overloads of setValue

    setValue(value: MathConstant): void
    getValue(): any | null

    // Overloads of getValue

    getValue(): MathConstant

    // Class property signals of GCalc-2.GCalc.MathParameter

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MathParameter {

    // Own properties of GCalc-2.GCalc.MathParameter

    static name: string

    // Constructors of GCalc-2.GCalc.MathParameter

    constructor(config?: MathParameter.ConstructorProperties) 
    _init(config?: MathParameter.ConstructorProperties): void
}

module MathPlus {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

interface MathPlus extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Own properties of GCalc-2.GCalc.MathPlus

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.MathPlus

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

class MathPlus {

    // Own properties of GCalc-2.GCalc.MathPlus

    static name: string

    // Constructors of GCalc-2.GCalc.MathPlus

    constructor(config?: MathPlus.ConstructorProperties) 
    _init(config?: MathPlus.ConstructorProperties): void
}

module MathPolynomial {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

interface MathPolynomial extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathPolynomial

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathPolynomial

    // Has conflict: evaluate(): MathExpression

    // Own virtual methods of GCalc-2.GCalc.MathPolynomial

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathPolynomial

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

class MathPolynomial {

    // Own properties of GCalc-2.GCalc.MathPolynomial

    static name: string

    // Constructors of GCalc-2.GCalc.MathPolynomial

    constructor(config?: MathPolynomial.ConstructorProperties) 
    _init(config?: MathPolynomial.ConstructorProperties): void
}

module MathPow {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties {
    }

}

interface MathPow extends GObject.Object, MathExpression, MathOperator {

    // Own properties of GCalc-2.GCalc.MathPow

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.MathPow

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

class MathPow {

    // Own properties of GCalc-2.GCalc.MathPow

    static name: string

    // Constructors of GCalc-2.GCalc.MathPow

    constructor(config?: MathPow.ConstructorProperties) 
    _init(config?: MathPow.ConstructorProperties): void
}

module MathResult {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MathResult extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathResult

    readonly expression: MathExpression
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathResult

    // Has conflict: toString(): string | null
    // Has conflict: getExpression(): MathExpression

    // Own virtual methods of GCalc-2.GCalc.MathResult

    toString(): string | null
    getExpression(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathResult

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

class MathResult {

    // Own properties of GCalc-2.GCalc.MathResult

    static name: string

    // Constructors of GCalc-2.GCalc.MathResult

    constructor(config?: MathResult.ConstructorProperties) 
    _init(config?: MathResult.ConstructorProperties): void
}

module MathTerm {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

interface MathTerm extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathTerm

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathTerm

    // Has conflict: add(t: MathTerm): MathExpression
    // Has conflict: evaluate(): MathExpression

    // Own virtual methods of GCalc-2.GCalc.MathTerm

    add(t: MathTerm): MathExpression
    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathTerm

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

class MathTerm {

    // Own properties of GCalc-2.GCalc.MathTerm

    static name: string

    // Constructors of GCalc-2.GCalc.MathTerm

    constructor(config?: MathTerm.ConstructorProperties) 
    _init(config?: MathTerm.ConstructorProperties): void
    static evaluateConstants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
}

module MathVariable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathVariable

        name?: string | null
        value?: MathConstant | null
        bind?: MathVariable | null
    }

}

interface MathVariable extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathVariable

    name: string | null
    value: MathConstant
    bind: MathVariable
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.MathVariable

    // Has conflict: evaluate(): MathExpression
    // Has conflict: getName(): string | null
    // Has conflict: setName(value: string | null): void
    // Has conflict: getValue(): MathConstant
    // Has conflict: setValue(value: MathConstant): void
    // Has conflict: getBind(): MathVariable
    // Has conflict: setBind(value: MathVariable): void
    // Has conflict: getBinded(): boolean

    // Own virtual methods of GCalc-2.GCalc.MathVariable

    evaluate(): MathExpression
    getName(): string | null
    setName(value: string | null): void
    getValue(): MathConstant
    setValue(value: MathConstant): void
    getBind(): MathVariable
    setBind(value: MathVariable): void
    getBinded(): boolean

    // Class property signals of GCalc-2.GCalc.MathVariable

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

class MathVariable {

    // Own properties of GCalc-2.GCalc.MathVariable

    static name: string

    // Constructors of GCalc-2.GCalc.MathVariable

    constructor(config?: MathVariable.ConstructorProperties) 
    _init(config?: MathVariable.ConstructorProperties): void
}

module Assign {

    // Constructor properties interface

    interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathAssign.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Assign extends MathOperator, MathBinaryOperator, MathAssign {

    // Own properties of GCalc-2.GCalc.Assign

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Assign

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

class Assign extends Expression {

    // Own properties of GCalc-2.GCalc.Assign

    static name: string

    // Constructors of GCalc-2.GCalc.Assign

    constructor(config?: Assign.ConstructorProperties) 
    constructor() 
    static new(): Assign

    // Overloads of new

    static new(): Expression
    _init(config?: Assign.ConstructorProperties): void
}

module Calculator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Calculator {

    // Own properties of GCalc-2.GCalc.Calculator

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.Calculator

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

class Calculator extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Calculator

    static name: string

    // Constructors of GCalc-2.GCalc.Calculator

    constructor(config?: Calculator.ConstructorProperties) 
    constructor() 
    static new(): Calculator
    _init(config?: Calculator.ConstructorProperties): void
    static add(c1: MathConstant, c2: MathConstant): MathConstant
    static subtract(c1: MathConstant, c2: MathConstant): MathConstant
    static multiply(c1: MathConstant, c2: MathConstant): MathConstant
    static divide(c1: MathConstant, c2: MathConstant): MathConstant
    static neg(c: MathConstant): MathConstant
    static pow(c: MathConstant, p: MathConstant): MathConstant
    static sqrt(c: MathConstant): MathConstant
    static pi(): MathConstant
    static log2(): MathConstant
    static euler(): MathConstant
    static catalan(): MathConstant
    static eq(c1: MathConstant, c2: MathConstant): boolean
    static gt(c1: MathConstant, c2: MathConstant): boolean
    static lt(c1: MathConstant, c2: MathConstant): boolean
    static cos(c1: MathConstant, units: AngleUnit): MathConstant
    static sin(c1: MathConstant, units: AngleUnit): MathConstant
    static tan(c1: MathConstant, units: AngleUnit): MathConstant
    static acos(c1: MathConstant, units: AngleUnit): MathConstant
    static asin(c1: MathConstant, units: AngleUnit): MathConstant
    static atan(c1: MathConstant, units: AngleUnit): MathConstant
    static log10(c1: MathConstant): MathConstant
    static exp(c1: MathConstant): MathConstant
}

module Constant {

    // Constructor properties interface

    interface ConstructorProperties extends MathConstant.ConstructorProperties, MathConstantNumber.ConstructorProperties, MathConstantComplex.ConstructorProperties, MathConstantVector.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Constant extends MathConstant, MathConstantNumber, MathConstantComplex, MathConstantVector {

    // Own properties of GCalc-2.GCalc.Constant

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Constant

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

class Constant extends Expression {

    // Own properties of GCalc-2.GCalc.Constant

    static name: string

    // Constructors of GCalc-2.GCalc.Constant

    constructor(config?: Constant.ConstructorProperties) 
    static integer(val: number): Constant
    static unsignedInteger(val: number): Constant
    static double(val: number): Constant
    static complex(real: number, imag: number): Constant
    static assign(c: MathConstant): Constant
    constructor() 
    static new(): Constant

    // Overloads of new

    static new(): Expression
    _init(config?: Constant.ConstructorProperties): void
}

module Division {

    // Constructor properties interface

    interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathDivision.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Division extends MathOperator, MathBinaryOperator, MathDivision {

    // Own properties of GCalc-2.GCalc.Division

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Division

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

class Division extends Expression {

    // Own properties of GCalc-2.GCalc.Division

    static name: string

    // Constructors of GCalc-2.GCalc.Division

    constructor(config?: Division.ConstructorProperties) 
    constructor() 
    static new(): Division

    // Overloads of new

    static new(): Expression
    _init(config?: Division.ConstructorProperties): void
}

module Equation {

    // Constructor properties interface

    interface ConstructorProperties extends MathEquation.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Equation extends MathEquation {

    // Own properties of GCalc-2.GCalc.Equation

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Equation

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

class Equation extends Expression {

    // Own properties of GCalc-2.GCalc.Equation

    static name: string

    // Constructors of GCalc-2.GCalc.Equation

    constructor(config?: Equation.ConstructorProperties) 
    constructor() 
    static new(): Equation

    // Overloads of new

    static new(): Expression
    _init(config?: Equation.ConstructorProperties): void
}

module EquationManager {

    // Constructor properties interface

    interface ConstructorProperties extends MathEquationManager.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface EquationManager extends MathEquationManager {

    // Own properties of GCalc-2.GCalc.EquationManager

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.EquationManager

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

class EquationManager extends GObject.Object {

    // Own properties of GCalc-2.GCalc.EquationManager

    static name: string

    // Constructors of GCalc-2.GCalc.EquationManager

    constructor(config?: EquationManager.ConstructorProperties) 
    constructor() 
    static new(): EquationManager
    _init(config?: EquationManager.ConstructorProperties): void
}

module ErrorResult {

    // Constructor properties interface

    interface ConstructorProperties extends MathResult.ConstructorProperties, MathErrorResult.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ErrorResult extends MathResult, MathErrorResult {

    // Own properties of GCalc-2.GCalc.ErrorResult

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.ErrorResult

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

class ErrorResult extends GObject.Object {

    // Own properties of GCalc-2.GCalc.ErrorResult

    static name: string

    // Constructors of GCalc-2.GCalc.ErrorResult

    constructor(config?: ErrorResult.ConstructorProperties) 
    constructor(msg: string | null) 
    static new(msg: string | null): ErrorResult
    _init(config?: ErrorResult.ConstructorProperties): void
}

module Expression {

    // Constructor properties interface

    interface ConstructorProperties extends MathExpression.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Expression extends MathExpression {

    // Own properties of GCalc-2.GCalc.Expression

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.Expression

    // Has conflict: toString(): string | null
    // Has conflict: solve(): MathResult

    // Own virtual methods of GCalc-2.GCalc.Expression

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Expression

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

class Expression extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Expression

    static name: string

    // Constructors of GCalc-2.GCalc.Expression

    constructor(config?: Expression.ConstructorProperties) 
    constructor() 
    static new(): Expression
    _init(config?: Expression.ConstructorProperties): void
}

module ErrorExpression {

    // Constructor properties interface

    interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

interface ErrorExpression {

    // Own properties of GCalc-2.GCalc.ErrorExpression

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.ErrorExpression

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

class ErrorExpression extends Expression {

    // Own properties of GCalc-2.GCalc.ErrorExpression

    static name: string

    // Constructors of GCalc-2.GCalc.ErrorExpression

    constructor(config?: ErrorExpression.ConstructorProperties) 
    constructor() 
    static new(): ErrorExpression

    // Overloads of new

    static new(): Expression
    _init(config?: ErrorExpression.ConstructorProperties): void
}

module ExpressionContainer {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, Gee.ArrayList.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.ExpressionContainer

        parent?: MathExpression | null
    }

}

interface ExpressionContainer extends Gio.ListModel {

    // Own properties of GCalc-2.GCalc.ExpressionContainer

    parent: MathExpression
    __gtype__: number

    // Conflicting properties

    readOnlyView: any
    size: any

    // Owm methods of GCalc-2.GCalc.ExpressionContainer

    getObject(position: number): GObject.Object | null
    find(exp: MathExpression): MathExpression | null
    findNamed(name: string | null): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void

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
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

    // Class property signals of GCalc-2.GCalc.ExpressionContainer

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

    // Own properties of GCalc-2.GCalc.ExpressionContainer

    static name: string

    // Constructors of GCalc-2.GCalc.ExpressionContainer

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

        // Own constructor properties of GCalc-2.GCalc.ExpressionHashMap

        parent?: MathExpression | null
    }

}

interface ExpressionHashMap {

    // Own properties of GCalc-2.GCalc.ExpressionHashMap

    parent: MathExpression
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.ExpressionHashMap

    add(exp: MathExpression): void
    remove(exp: MathExpression): void

    // Overloads of remove

    remove(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    findNamed(name: string | null): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void

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

    // Class property signals of GCalc-2.GCalc.ExpressionHashMap

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

    // Own properties of GCalc-2.GCalc.ExpressionHashMap

    static name: string

    // Constructors of GCalc-2.GCalc.ExpressionHashMap

    constructor(config?: ExpressionHashMap.ConstructorProperties) 
    constructor() 
    static new(): ExpressionHashMap

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ExpressionHashMap.ConstructorProperties): void
}

module Function {

    // Constructor properties interface

    interface ConstructorProperties extends MathFunction.ConstructorProperties, Hashable.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Function extends MathFunction, Hashable {

    // Own properties of GCalc-2.GCalc.Function

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.Function

    // Has conflict: evaluate(): MathExpression

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Own virtual methods of GCalc-2.GCalc.Function

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.Function

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

class Function extends Expression {

    // Own properties of GCalc-2.GCalc.Function

    static name: string

    // Constructors of GCalc-2.GCalc.Function

    constructor(config?: Function.ConstructorProperties) 
    static withName(name: string | null, nparams: number): Function
    constructor() 
    static new(): Function

    // Overloads of new

    static new(): Expression
    _init(config?: Function.ConstructorProperties): void
}

module FunctionAcos {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionAcos {

    // Own properties of GCalc-2.GCalc.FunctionAcos

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAcos

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

class FunctionAcos extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAcos

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAcos

    constructor(config?: FunctionAcos.ConstructorProperties) 
    constructor() 
    static new(): FunctionAcos

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAcos.ConstructorProperties): void
}

module FunctionAcosh {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionAcosh {

    // Own properties of GCalc-2.GCalc.FunctionAcosh

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAcosh

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

class FunctionAcosh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAcosh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAcosh

    constructor(config?: FunctionAcosh.ConstructorProperties) 
    constructor() 
    static new(): FunctionAcosh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAcosh.ConstructorProperties): void
}

module FunctionAsin {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionAsin {

    // Own properties of GCalc-2.GCalc.FunctionAsin

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAsin

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

class FunctionAsin extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAsin

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAsin

    constructor(config?: FunctionAsin.ConstructorProperties) 
    constructor() 
    static new(): FunctionAsin

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAsin.ConstructorProperties): void
}

module FunctionAsinh {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionAsinh {

    // Own properties of GCalc-2.GCalc.FunctionAsinh

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAsinh

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

class FunctionAsinh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAsinh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAsinh

    constructor(config?: FunctionAsinh.ConstructorProperties) 
    constructor() 
    static new(): FunctionAsinh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAsinh.ConstructorProperties): void
}

module FunctionAtan {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionAtan {

    // Own properties of GCalc-2.GCalc.FunctionAtan

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAtan

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

class FunctionAtan extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAtan

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAtan

    constructor(config?: FunctionAtan.ConstructorProperties) 
    constructor() 
    static new(): FunctionAtan

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAtan.ConstructorProperties): void
}

module FunctionAtanh {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionAtanh {

    // Own properties of GCalc-2.GCalc.FunctionAtanh

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAtanh

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

class FunctionAtanh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAtanh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAtanh

    constructor(config?: FunctionAtanh.ConstructorProperties) 
    constructor() 
    static new(): FunctionAtanh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAtanh.ConstructorProperties): void
}

module FunctionCos {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionCos {

    // Own properties of GCalc-2.GCalc.FunctionCos

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionCos

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

class FunctionCos extends Function {

    // Own properties of GCalc-2.GCalc.FunctionCos

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionCos

    constructor(config?: FunctionCos.ConstructorProperties) 
    constructor() 
    static new(): FunctionCos

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionCos.ConstructorProperties): void
}

module FunctionCosh {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionCosh {

    // Own properties of GCalc-2.GCalc.FunctionCosh

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionCosh

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

class FunctionCosh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionCosh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionCosh

    constructor(config?: FunctionCosh.ConstructorProperties) 
    constructor() 
    static new(): FunctionCosh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionCosh.ConstructorProperties): void
}

module FunctionExp {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionExp {

    // Own properties of GCalc-2.GCalc.FunctionExp

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionExp

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

class FunctionExp extends Function {

    // Own properties of GCalc-2.GCalc.FunctionExp

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionExp

    constructor(config?: FunctionExp.ConstructorProperties) 
    constructor() 
    static new(): FunctionExp

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionExp.ConstructorProperties): void
}

module FunctionLog {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionLog {

    // Own properties of GCalc-2.GCalc.FunctionLog

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionLog

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

class FunctionLog extends Function {

    // Own properties of GCalc-2.GCalc.FunctionLog

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionLog

    constructor(config?: FunctionLog.ConstructorProperties) 
    constructor() 
    static new(): FunctionLog

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionLog.ConstructorProperties): void
}

module FunctionSin {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionSin {

    // Own properties of GCalc-2.GCalc.FunctionSin

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionSin

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

class FunctionSin extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSin

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionSin

    constructor(config?: FunctionSin.ConstructorProperties) 
    constructor() 
    static new(): FunctionSin

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSin.ConstructorProperties): void
}

module FunctionSinh {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionSinh {

    // Own properties of GCalc-2.GCalc.FunctionSinh

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionSinh

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

class FunctionSinh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSinh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionSinh

    constructor(config?: FunctionSinh.ConstructorProperties) 
    constructor() 
    static new(): FunctionSinh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSinh.ConstructorProperties): void
}

module FunctionSqrt {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionSqrt {

    // Own properties of GCalc-2.GCalc.FunctionSqrt

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionSqrt

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

class FunctionSqrt extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSqrt

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionSqrt

    constructor(config?: FunctionSqrt.ConstructorProperties) 
    constructor() 
    static new(): FunctionSqrt

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSqrt.ConstructorProperties): void
}

module FunctionTan {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionTan {

    // Own properties of GCalc-2.GCalc.FunctionTan

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionTan

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

class FunctionTan extends Function {

    // Own properties of GCalc-2.GCalc.FunctionTan

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionTan

    constructor(config?: FunctionTan.ConstructorProperties) 
    constructor() 
    static new(): FunctionTan

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionTan.ConstructorProperties): void
}

module FunctionTanh {

    // Constructor properties interface

    interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

interface FunctionTanh {

    // Own properties of GCalc-2.GCalc.FunctionTanh

    __gtype__: number

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionTanh

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

class FunctionTanh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionTanh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionTanh

    constructor(config?: FunctionTanh.ConstructorProperties) 
    constructor() 
    static new(): FunctionTanh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionTanh.ConstructorProperties): void
}

module Group {

    // Constructor properties interface

    interface ConstructorProperties extends MathGroup.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Group extends MathGroup {

    // Own properties of GCalc-2.GCalc.Group

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Group

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

class Group extends Expression {

    // Own properties of GCalc-2.GCalc.Group

    static name: string

    // Constructors of GCalc-2.GCalc.Group

    constructor(config?: Group.ConstructorProperties) 
    constructor() 
    static new(): Group

    // Overloads of new

    static new(): Expression
    _init(config?: Group.ConstructorProperties): void
}

module Minus {

    // Constructor properties interface

    interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathMinus.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Minus extends MathOperator, MathBinaryOperator, MathMinus {

    // Own properties of GCalc-2.GCalc.Minus

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Minus

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

class Minus extends Expression {

    // Own properties of GCalc-2.GCalc.Minus

    static name: string

    // Constructors of GCalc-2.GCalc.Minus

    constructor(config?: Minus.ConstructorProperties) 
    constructor() 
    static new(): Minus

    // Overloads of new

    static new(): Expression
    _init(config?: Minus.ConstructorProperties): void
}

module Multiply {

    // Constructor properties interface

    interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathMultiply.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Multiply extends MathOperator, MathBinaryOperator, MathMultiply {

    // Own properties of GCalc-2.GCalc.Multiply

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Multiply

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

class Multiply extends Expression {

    // Own properties of GCalc-2.GCalc.Multiply

    static name: string

    // Constructors of GCalc-2.GCalc.Multiply

    constructor(config?: Multiply.ConstructorProperties) 
    constructor() 
    static new(): Multiply

    // Overloads of new

    static new(): Expression
    _init(config?: Multiply.ConstructorProperties): void
}

module Parameter {

    // Constructor properties interface

    interface ConstructorProperties extends MathParameter.ConstructorProperties, Variable.ConstructorProperties {
    }

}

interface Parameter extends MathParameter {

    // Own properties of GCalc-2.GCalc.Parameter

    __gtype__: number

    // Conflicting methods

    setValue(val: any | null): void

    // Overloads of setValue

    setValue(value: MathConstant): void
    setValue(value: MathConstant): void
    getValue(): any | null

    // Overloads of getValue

    getValue(): MathConstant
    getValue(): MathConstant
    toString(): string | null
    toString(): string | null

    // Overloads of toString

    toString(): string | null
    solve(): MathResult
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Parameter

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Parameter extends Variable {

    // Own properties of GCalc-2.GCalc.Parameter

    static name: string

    // Constructors of GCalc-2.GCalc.Parameter

    constructor(config?: Parameter.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): Parameter

    // Overloads of new

    static new(): Expression
    _init(config?: Parameter.ConstructorProperties): void
}

module Parser {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Parser {

    // Own properties of GCalc-2.GCalc.Parser

    __gtype__: number

    // Owm methods of GCalc-2.GCalc.Parser

    parse(str: string | null, eqman: MathEquationManager): void
    readToken(): ParserTokenType
    tokenToString(): string | null

    // Class property signals of GCalc-2.GCalc.Parser

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

class Parser extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Parser

    static name: string

    // Constructors of GCalc-2.GCalc.Parser

    constructor(config?: Parser.ConstructorProperties) 
    constructor() 
    static new(): Parser
    _init(config?: Parser.ConstructorProperties): void
}

module Plus {

    // Constructor properties interface

    interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathPlus.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Plus extends MathOperator, MathBinaryOperator, MathPlus {

    // Own properties of GCalc-2.GCalc.Plus

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Plus

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

class Plus extends Expression {

    // Own properties of GCalc-2.GCalc.Plus

    static name: string

    // Constructors of GCalc-2.GCalc.Plus

    constructor(config?: Plus.ConstructorProperties) 
    constructor() 
    static new(): Plus

    // Overloads of new

    static new(): Expression
    _init(config?: Plus.ConstructorProperties): void
}

module Polynomial {

    // Constructor properties interface

    interface ConstructorProperties extends MathPolynomial.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Polynomial extends MathPolynomial {

    // Own properties of GCalc-2.GCalc.Polynomial

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Polynomial

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

class Polynomial extends Expression {

    // Own properties of GCalc-2.GCalc.Polynomial

    static name: string

    // Constructors of GCalc-2.GCalc.Polynomial

    constructor(config?: Polynomial.ConstructorProperties) 
    constructor() 
    static new(): Polynomial

    // Overloads of new

    static new(): Expression
    _init(config?: Polynomial.ConstructorProperties): void
}

module Pow {

    // Constructor properties interface

    interface ConstructorProperties extends MathOperator.ConstructorProperties, MathPow.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Pow extends MathOperator, MathPow {

    // Own properties of GCalc-2.GCalc.Pow

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Pow

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

class Pow extends Expression {

    // Own properties of GCalc-2.GCalc.Pow

    static name: string

    // Constructors of GCalc-2.GCalc.Pow

    constructor(config?: Pow.ConstructorProperties) 
    constructor() 
    static new(): Pow

    // Overloads of new

    static new(): Expression
    _init(config?: Pow.ConstructorProperties): void
}

module Result {

    // Constructor properties interface

    interface ConstructorProperties extends MathResult.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Result extends MathResult {

    // Own properties of GCalc-2.GCalc.Result

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.Result

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

class Result extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Result

    static name: string

    // Constructors of GCalc-2.GCalc.Result

    constructor(config?: Result.ConstructorProperties) 
    constructor(exp: MathExpression) 
    static new(exp: MathExpression): Result
    _init(config?: Result.ConstructorProperties): void
}

module Solver {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.Solver

        equationManager?: MathEquationManager | null
    }

}

interface Solver {

    // Own properties of GCalc-2.GCalc.Solver

    equationManager: MathEquationManager
    __gtype__: number

    // Owm methods of GCalc-2.GCalc.Solver

    addExpression(exp: string | null): void
    solve(str: string | null): MathResult
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void

    // Class property signals of GCalc-2.GCalc.Solver

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

class Solver extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Solver

    static name: string

    // Constructors of GCalc-2.GCalc.Solver

    constructor(config?: Solver.ConstructorProperties) 
    constructor() 
    static new(): Solver
    _init(config?: Solver.ConstructorProperties): void
}

module Term {

    // Constructor properties interface

    interface ConstructorProperties extends MathTerm.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Term extends MathTerm {

    // Own properties of GCalc-2.GCalc.Term

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Term

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

class Term extends Expression {

    // Own properties of GCalc-2.GCalc.Term

    static name: string

    // Constructors of GCalc-2.GCalc.Term

    constructor(config?: Term.ConstructorProperties) 
    constructor() 
    static new(): Term

    // Overloads of new

    static new(): Expression
    _init(config?: Term.ConstructorProperties): void
}

module UnitConverter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface UnitConverter {

    // Own properties of GCalc-2.GCalc.UnitConverter

    __gtype__: number

    // Class property signals of GCalc-2.GCalc.UnitConverter

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

class UnitConverter extends GObject.Object {

    // Own properties of GCalc-2.GCalc.UnitConverter

    static name: string

    // Constructors of GCalc-2.GCalc.UnitConverter

    constructor(config?: UnitConverter.ConstructorProperties) 
    constructor() 
    static new(): UnitConverter
    _init(config?: UnitConverter.ConstructorProperties): void
    static angle(c: MathConstant, ori: AngleUnit, dst: AngleUnit): MathConstant
}

module Variable {

    // Constructor properties interface

    interface ConstructorProperties extends MathVariable.ConstructorProperties, Hashable.ConstructorProperties, Expression.ConstructorProperties {
    }

}

interface Variable extends MathVariable, Hashable {

    // Own properties of GCalc-2.GCalc.Variable

    __gtype__: number

    // Conflicting methods

    toString(): string | null

    // Overloads of toString

    toString(): string | null
    toString(): string | null
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Variable

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

class Variable extends Expression {

    // Own properties of GCalc-2.GCalc.Variable

    static name: string

    // Constructors of GCalc-2.GCalc.Variable

    constructor(config?: Variable.ConstructorProperties) 
    _init(config?: Variable.ConstructorProperties): void
}

interface AssignClass {
}

abstract class AssignClass {

    // Own properties of GCalc-2.GCalc.AssignClass

    static name: string
}

interface AssignPrivate {
}

class AssignPrivate {

    // Own properties of GCalc-2.GCalc.AssignPrivate

    static name: string
}

interface CalculatorClass {
}

abstract class CalculatorClass {

    // Own properties of GCalc-2.GCalc.CalculatorClass

    static name: string
}

interface CalculatorPrivate {
}

class CalculatorPrivate {

    // Own properties of GCalc-2.GCalc.CalculatorPrivate

    static name: string
}

interface ConstantClass {
}

abstract class ConstantClass {

    // Own properties of GCalc-2.GCalc.ConstantClass

    static name: string
}

interface ConstantPrivate {
}

class ConstantPrivate {

    // Own properties of GCalc-2.GCalc.ConstantPrivate

    static name: string
}

interface DivisionClass {
}

abstract class DivisionClass {

    // Own properties of GCalc-2.GCalc.DivisionClass

    static name: string
}

interface DivisionPrivate {
}

class DivisionPrivate {

    // Own properties of GCalc-2.GCalc.DivisionPrivate

    static name: string
}

interface EquationClass {
}

abstract class EquationClass {

    // Own properties of GCalc-2.GCalc.EquationClass

    static name: string
}

interface EquationPrivate {
}

class EquationPrivate {

    // Own properties of GCalc-2.GCalc.EquationPrivate

    static name: string
}

interface EquationManagerClass {
}

abstract class EquationManagerClass {

    // Own properties of GCalc-2.GCalc.EquationManagerClass

    static name: string
}

interface EquationManagerPrivate {
}

class EquationManagerPrivate {

    // Own properties of GCalc-2.GCalc.EquationManagerPrivate

    static name: string
}

interface ErrorResultClass {
}

abstract class ErrorResultClass {

    // Own properties of GCalc-2.GCalc.ErrorResultClass

    static name: string
}

interface ErrorResultPrivate {
}

class ErrorResultPrivate {

    // Own properties of GCalc-2.GCalc.ErrorResultPrivate

    static name: string
}

interface ExpressionClass {

    // Own fields of GCalc-2.GCalc.ExpressionClass

    toString: (self: Expression) => string | null
    solve: (self: Expression) => MathResult
}

abstract class ExpressionClass {

    // Own properties of GCalc-2.GCalc.ExpressionClass

    static name: string
}

interface ExpressionPrivate {
}

class ExpressionPrivate {

    // Own properties of GCalc-2.GCalc.ExpressionPrivate

    static name: string
}

interface ErrorExpressionClass {
}

abstract class ErrorExpressionClass {

    // Own properties of GCalc-2.GCalc.ErrorExpressionClass

    static name: string
}

interface ErrorExpressionPrivate {
}

class ErrorExpressionPrivate {

    // Own properties of GCalc-2.GCalc.ErrorExpressionPrivate

    static name: string
}

interface ExpressionContainerClass {
}

abstract class ExpressionContainerClass {

    // Own properties of GCalc-2.GCalc.ExpressionContainerClass

    static name: string
}

interface ExpressionContainerPrivate {
}

class ExpressionContainerPrivate {

    // Own properties of GCalc-2.GCalc.ExpressionContainerPrivate

    static name: string
}

interface ExpressionHashMapClass {
}

abstract class ExpressionHashMapClass {

    // Own properties of GCalc-2.GCalc.ExpressionHashMapClass

    static name: string
}

interface ExpressionHashMapPrivate {
}

class ExpressionHashMapPrivate {

    // Own properties of GCalc-2.GCalc.ExpressionHashMapPrivate

    static name: string
}

interface FunctionClass {

    // Own fields of GCalc-2.GCalc.FunctionClass

    evaluate: (self: Function) => MathExpression
}

abstract class FunctionClass {

    // Own properties of GCalc-2.GCalc.FunctionClass

    static name: string
}

interface FunctionPrivate {
}

class FunctionPrivate {

    // Own properties of GCalc-2.GCalc.FunctionPrivate

    static name: string
}

interface FunctionAcosClass {
}

abstract class FunctionAcosClass {

    // Own properties of GCalc-2.GCalc.FunctionAcosClass

    static name: string
}

interface FunctionAcosPrivate {
}

class FunctionAcosPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAcosPrivate

    static name: string
}

interface FunctionAcoshClass {
}

abstract class FunctionAcoshClass {

    // Own properties of GCalc-2.GCalc.FunctionAcoshClass

    static name: string
}

interface FunctionAcoshPrivate {
}

class FunctionAcoshPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAcoshPrivate

    static name: string
}

interface FunctionAsinClass {
}

abstract class FunctionAsinClass {

    // Own properties of GCalc-2.GCalc.FunctionAsinClass

    static name: string
}

interface FunctionAsinPrivate {
}

class FunctionAsinPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAsinPrivate

    static name: string
}

interface FunctionAsinhClass {
}

abstract class FunctionAsinhClass {

    // Own properties of GCalc-2.GCalc.FunctionAsinhClass

    static name: string
}

interface FunctionAsinhPrivate {
}

class FunctionAsinhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAsinhPrivate

    static name: string
}

interface FunctionAtanClass {
}

abstract class FunctionAtanClass {

    // Own properties of GCalc-2.GCalc.FunctionAtanClass

    static name: string
}

interface FunctionAtanPrivate {
}

class FunctionAtanPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAtanPrivate

    static name: string
}

interface FunctionAtanhClass {
}

abstract class FunctionAtanhClass {

    // Own properties of GCalc-2.GCalc.FunctionAtanhClass

    static name: string
}

interface FunctionAtanhPrivate {
}

class FunctionAtanhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAtanhPrivate

    static name: string
}

interface FunctionCosClass {
}

abstract class FunctionCosClass {

    // Own properties of GCalc-2.GCalc.FunctionCosClass

    static name: string
}

interface FunctionCosPrivate {
}

class FunctionCosPrivate {

    // Own properties of GCalc-2.GCalc.FunctionCosPrivate

    static name: string
}

interface FunctionCoshClass {
}

abstract class FunctionCoshClass {

    // Own properties of GCalc-2.GCalc.FunctionCoshClass

    static name: string
}

interface FunctionCoshPrivate {
}

class FunctionCoshPrivate {

    // Own properties of GCalc-2.GCalc.FunctionCoshPrivate

    static name: string
}

interface FunctionExpClass {
}

abstract class FunctionExpClass {

    // Own properties of GCalc-2.GCalc.FunctionExpClass

    static name: string
}

interface FunctionExpPrivate {
}

class FunctionExpPrivate {

    // Own properties of GCalc-2.GCalc.FunctionExpPrivate

    static name: string
}

interface FunctionLogClass {
}

abstract class FunctionLogClass {

    // Own properties of GCalc-2.GCalc.FunctionLogClass

    static name: string
}

interface FunctionLogPrivate {
}

class FunctionLogPrivate {

    // Own properties of GCalc-2.GCalc.FunctionLogPrivate

    static name: string
}

interface FunctionSinClass {
}

abstract class FunctionSinClass {

    // Own properties of GCalc-2.GCalc.FunctionSinClass

    static name: string
}

interface FunctionSinPrivate {
}

class FunctionSinPrivate {

    // Own properties of GCalc-2.GCalc.FunctionSinPrivate

    static name: string
}

interface FunctionSinhClass {
}

abstract class FunctionSinhClass {

    // Own properties of GCalc-2.GCalc.FunctionSinhClass

    static name: string
}

interface FunctionSinhPrivate {
}

class FunctionSinhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionSinhPrivate

    static name: string
}

interface FunctionSqrtClass {
}

abstract class FunctionSqrtClass {

    // Own properties of GCalc-2.GCalc.FunctionSqrtClass

    static name: string
}

interface FunctionSqrtPrivate {
}

class FunctionSqrtPrivate {

    // Own properties of GCalc-2.GCalc.FunctionSqrtPrivate

    static name: string
}

interface FunctionTanClass {
}

abstract class FunctionTanClass {

    // Own properties of GCalc-2.GCalc.FunctionTanClass

    static name: string
}

interface FunctionTanPrivate {
}

class FunctionTanPrivate {

    // Own properties of GCalc-2.GCalc.FunctionTanPrivate

    static name: string
}

interface FunctionTanhClass {
}

abstract class FunctionTanhClass {

    // Own properties of GCalc-2.GCalc.FunctionTanhClass

    static name: string
}

interface FunctionTanhPrivate {
}

class FunctionTanhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionTanhPrivate

    static name: string
}

interface GroupClass {
}

abstract class GroupClass {

    // Own properties of GCalc-2.GCalc.GroupClass

    static name: string
}

interface GroupPrivate {
}

class GroupPrivate {

    // Own properties of GCalc-2.GCalc.GroupPrivate

    static name: string
}

interface MinusClass {
}

abstract class MinusClass {

    // Own properties of GCalc-2.GCalc.MinusClass

    static name: string
}

interface MinusPrivate {
}

class MinusPrivate {

    // Own properties of GCalc-2.GCalc.MinusPrivate

    static name: string
}

interface MultiplyClass {
}

abstract class MultiplyClass {

    // Own properties of GCalc-2.GCalc.MultiplyClass

    static name: string
}

interface MultiplyPrivate {
}

class MultiplyPrivate {

    // Own properties of GCalc-2.GCalc.MultiplyPrivate

    static name: string
}

interface ParameterClass {
}

abstract class ParameterClass {

    // Own properties of GCalc-2.GCalc.ParameterClass

    static name: string
}

interface ParameterPrivate {
}

class ParameterPrivate {

    // Own properties of GCalc-2.GCalc.ParameterPrivate

    static name: string
}

interface ParserClass {
}

abstract class ParserClass {

    // Own properties of GCalc-2.GCalc.ParserClass

    static name: string
}

interface ParserPrivate {
}

class ParserPrivate {

    // Own properties of GCalc-2.GCalc.ParserPrivate

    static name: string
}

interface PlusClass {
}

abstract class PlusClass {

    // Own properties of GCalc-2.GCalc.PlusClass

    static name: string
}

interface PlusPrivate {
}

class PlusPrivate {

    // Own properties of GCalc-2.GCalc.PlusPrivate

    static name: string
}

interface PolynomialClass {
}

abstract class PolynomialClass {

    // Own properties of GCalc-2.GCalc.PolynomialClass

    static name: string
}

interface PolynomialPrivate {
}

class PolynomialPrivate {

    // Own properties of GCalc-2.GCalc.PolynomialPrivate

    static name: string
}

interface PowClass {
}

abstract class PowClass {

    // Own properties of GCalc-2.GCalc.PowClass

    static name: string
}

interface PowPrivate {
}

class PowPrivate {

    // Own properties of GCalc-2.GCalc.PowPrivate

    static name: string
}

interface ResultClass {
}

abstract class ResultClass {

    // Own properties of GCalc-2.GCalc.ResultClass

    static name: string
}

interface ResultPrivate {
}

class ResultPrivate {

    // Own properties of GCalc-2.GCalc.ResultPrivate

    static name: string
}

interface SolverClass {
}

abstract class SolverClass {

    // Own properties of GCalc-2.GCalc.SolverClass

    static name: string
}

interface SolverPrivate {
}

class SolverPrivate {

    // Own properties of GCalc-2.GCalc.SolverPrivate

    static name: string
}

interface TermClass {
}

abstract class TermClass {

    // Own properties of GCalc-2.GCalc.TermClass

    static name: string
}

interface TermPrivate {
}

class TermPrivate {

    // Own properties of GCalc-2.GCalc.TermPrivate

    static name: string
}

interface UnitConverterClass {
}

abstract class UnitConverterClass {

    // Own properties of GCalc-2.GCalc.UnitConverterClass

    static name: string
}

interface UnitConverterPrivate {
}

class UnitConverterPrivate {

    // Own properties of GCalc-2.GCalc.UnitConverterPrivate

    static name: string
}

interface VariableClass {
}

abstract class VariableClass {

    // Own properties of GCalc-2.GCalc.VariableClass

    static name: string
}

interface VariablePrivate {
}

class VariablePrivate {

    // Own properties of GCalc-2.GCalc.VariablePrivate

    static name: string
}

interface HashableIface {

    // Own fields of GCalc-2.GCalc.HashableIface

    hash: (self: Hashable) => number
}

abstract class HashableIface {

    // Own properties of GCalc-2.GCalc.HashableIface

    static name: string
}

interface MathAssignIface {
}

abstract class MathAssignIface {

    // Own properties of GCalc-2.GCalc.MathAssignIface

    static name: string
}

interface MathBinaryOperatorIface {
}

abstract class MathBinaryOperatorIface {

    // Own properties of GCalc-2.GCalc.MathBinaryOperatorIface

    static name: string
}

interface MathConstantIface {

    // Own fields of GCalc-2.GCalc.MathConstantIface

    add: (self: MathConstant, c: MathConstant) => MathConstant
    subtract: (self: MathConstant, c: MathConstant) => MathConstant
    multiply: (self: MathConstant, c: MathConstant) => MathConstant
    divide: (self: MathConstant, c: MathConstant) => MathConstant
    neg: (self: MathConstant) => MathConstant
    pow: (self: MathConstant, c: MathConstant) => MathConstant
}

abstract class MathConstantIface {

    // Own properties of GCalc-2.GCalc.MathConstantIface

    static name: string
}

interface MathConstantComplexIface {

    // Own fields of GCalc-2.GCalc.MathConstantComplexIface

    real: (self: MathConstantComplex) => number
    imag: (self: MathConstantComplex) => number
    zero: (self: MathConstantComplex) => void
}

abstract class MathConstantComplexIface {

    // Own properties of GCalc-2.GCalc.MathConstantComplexIface

    static name: string
}

interface MathConstantNumberIface {

    // Own fields of GCalc-2.GCalc.MathConstantNumberIface

    value: (self: MathConstantNumber) => number
}

abstract class MathConstantNumberIface {

    // Own properties of GCalc-2.GCalc.MathConstantNumberIface

    static name: string
}

interface MathConstantVectorIface {

    // Own fields of GCalc-2.GCalc.MathConstantVectorIface

    mag: (self: MathConstantVector) => MathConstant
    ang: (self: MathConstantVector) => MathConstant
    x: (self: MathConstantVector) => MathConstant
    y: (self: MathConstantVector) => MathConstant
}

abstract class MathConstantVectorIface {

    // Own properties of GCalc-2.GCalc.MathConstantVectorIface

    static name: string
}

interface MathDivisionIface {
}

abstract class MathDivisionIface {

    // Own properties of GCalc-2.GCalc.MathDivisionIface

    static name: string
}

interface MathEquationIface {

    // Own fields of GCalc-2.GCalc.MathEquationIface

    getVariables: (self: MathEquation) => ExpressionHashMap
}

abstract class MathEquationIface {

    // Own properties of GCalc-2.GCalc.MathEquationIface

    static name: string
}

interface MathEquationManagerIface {

    // Own fields of GCalc-2.GCalc.MathEquationManagerIface

    findVariable: (self: MathEquationManager, name: string | null) => MathVariable
    getEquations: (self: MathEquationManager) => ExpressionContainer
    getFunctions: (self: MathEquationManager) => ExpressionContainer
}

abstract class MathEquationManagerIface {

    // Own properties of GCalc-2.GCalc.MathEquationManagerIface

    static name: string
}

interface MathErrorResultIface {

    // Own fields of GCalc-2.GCalc.MathErrorResultIface

    getMessage: (self: MathErrorResult) => string | null
}

abstract class MathErrorResultIface {

    // Own properties of GCalc-2.GCalc.MathErrorResultIface

    static name: string
}

interface MathExpressionIface {

    // Own fields of GCalc-2.GCalc.MathExpressionIface

    toString: (self: MathExpression) => string | null
    solve: (self: MathExpression) => MathResult
    getParent: (self: MathExpression) => MathExpression
    setParent: (self: MathExpression, value: MathExpression) => void
    getExpressions: (self: MathExpression) => ExpressionContainer
}

abstract class MathExpressionIface {

    // Own properties of GCalc-2.GCalc.MathExpressionIface

    static name: string
}

interface MathFunctionIface {

    // Own fields of GCalc-2.GCalc.MathFunctionIface

    evaluate: (self: MathFunction) => MathExpression
    verifyParams: (self: MathFunction) => boolean
    getParamTypes: (self: MathFunction) => ExpressionContainer
    getName: (self: MathFunction) => string | null
    setName: (self: MathFunction, value: string | null) => void
    getNParams: (self: MathFunction) => number
    setNParams: (self: MathFunction, value: number) => void
    getClosed: (self: MathFunction) => boolean
    setClosed: (self: MathFunction, value: boolean) => void
}

abstract class MathFunctionIface {

    // Own properties of GCalc-2.GCalc.MathFunctionIface

    static name: string
}

interface MathGroupIface {

    // Own fields of GCalc-2.GCalc.MathGroupIface

    evaluate: (self: MathGroup) => MathExpression
    getLevel: (self: MathGroup) => MathGroupLevel
    setLevel: (self: MathGroup, value: MathGroupLevel) => void
    getClosed: (self: MathGroup) => boolean
    setClosed: (self: MathGroup, value: boolean) => void
}

abstract class MathGroupIface {

    // Own properties of GCalc-2.GCalc.MathGroupIface

    static name: string
}

interface MathMinusIface {
}

abstract class MathMinusIface {

    // Own properties of GCalc-2.GCalc.MathMinusIface

    static name: string
}

interface MathMultiplyIface {
}

abstract class MathMultiplyIface {

    // Own properties of GCalc-2.GCalc.MathMultiplyIface

    static name: string
}

interface MathOperatorIface {
}

abstract class MathOperatorIface {

    // Own properties of GCalc-2.GCalc.MathOperatorIface

    static name: string
}

interface MathParameterIface {

    // Own fields of GCalc-2.GCalc.MathParameterIface

    setValue: (self: MathParameter, val: any | null) => void
    getValue: (self: MathParameter) => any | null
}

abstract class MathParameterIface {

    // Own properties of GCalc-2.GCalc.MathParameterIface

    static name: string
}

interface MathPlusIface {
}

abstract class MathPlusIface {

    // Own properties of GCalc-2.GCalc.MathPlusIface

    static name: string
}

interface MathPolynomialIface {

    // Own fields of GCalc-2.GCalc.MathPolynomialIface

    evaluate: (self: MathPolynomial) => MathExpression
}

abstract class MathPolynomialIface {

    // Own properties of GCalc-2.GCalc.MathPolynomialIface

    static name: string
}

interface MathPowIface {
}

abstract class MathPowIface {

    // Own properties of GCalc-2.GCalc.MathPowIface

    static name: string
}

interface MathResultIface {

    // Own fields of GCalc-2.GCalc.MathResultIface

    toString: (self: MathResult) => string | null
    getExpression: (self: MathResult) => MathExpression
}

abstract class MathResultIface {

    // Own properties of GCalc-2.GCalc.MathResultIface

    static name: string
}

interface MathTermIface {

    // Own fields of GCalc-2.GCalc.MathTermIface

    add: (self: MathTerm, t: MathTerm) => MathExpression
    evaluate: (self: MathTerm) => MathExpression
}

abstract class MathTermIface {

    // Own properties of GCalc-2.GCalc.MathTermIface

    static name: string
}

interface MathVariableIface {

    // Own fields of GCalc-2.GCalc.MathVariableIface

    evaluate: (self: MathVariable) => MathExpression
    getName: (self: MathVariable) => string | null
    setName: (self: MathVariable, value: string | null) => void
    getValue: (self: MathVariable) => MathConstant
    setValue: (self: MathVariable, value: MathConstant) => void
    getBind: (self: MathVariable) => MathVariable
    setBind: (self: MathVariable, value: MathVariable) => void
    getBinded: (self: MathVariable) => boolean
}

abstract class MathVariableIface {

    // Own properties of GCalc-2.GCalc.MathVariableIface

    static name: string
}

}

export default GCalc;
// END