// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCalc-1
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type Gee from './Gee-0.8';

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
interface Assign_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
}

interface Assign extends GObject.Object, Expression, Operator, BinaryOperator {

    // Owm methods of GCalc-1.GCalc.Assign

    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Assign

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
    static $gtype: GObject.GType<Assign>

    // Constructors of GCalc-1.GCalc.Assign

    constructor(config?: Assign_ConstructProps) 
    _init(config?: Assign_ConstructProps): void
}

interface BinaryOperator_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps {
}

interface BinaryOperator extends GObject.Object, Expression, Operator {

    // Class property signals of GCalc-1.GCalc.BinaryOperator

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
    static $gtype: GObject.GType<BinaryOperator>

    // Constructors of GCalc-1.GCalc.BinaryOperator

    constructor(config?: BinaryOperator_ConstructProps) 
    _init(config?: BinaryOperator_ConstructProps): void
}

interface Constant_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
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

    // Class property signals of GCalc-1.GCalc.Constant

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
    static $gtype: GObject.GType<Constant>

    // Constructors of GCalc-1.GCalc.Constant

    constructor(config?: Constant_ConstructProps) 
    _init(config?: Constant_ConstructProps): void
}

interface Division_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
}

interface Division extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Division

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
    static $gtype: GObject.GType<Division>

    // Constructors of GCalc-1.GCalc.Division

    constructor(config?: Division_ConstructProps) 
    _init(config?: Division_ConstructProps): void
}

interface Expression_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.Expression

    parent?: Expression | null
}

interface Expression extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Expression

    parent: Expression
    readonly expressions: ExpressionContainer

    // Owm methods of GCalc-1.GCalc.Expression

    toString(): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Expression {

    // Own properties of GCalc-1.GCalc.Expression

    static name: string
    static $gtype: GObject.GType<Expression>

    // Constructors of GCalc-1.GCalc.Expression

    constructor(config?: Expression_ConstructProps) 
    _init(config?: Expression_ConstructProps): void
}

interface ErrorExpression_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
}

interface ErrorExpression extends GObject.Object, Expression {

    // Class property signals of GCalc-1.GCalc.ErrorExpression

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
    static $gtype: GObject.GType<ErrorExpression>

    // Constructors of GCalc-1.GCalc.ErrorExpression

    constructor(config?: ErrorExpression_ConstructProps) 
    _init(config?: ErrorExpression_ConstructProps): void
}

interface Function_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.Function

    name?: string | null
    nParams?: number | null
    closed?: boolean | null
}

interface Function extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.Function

    readonly paramTypes: ExpressionContainer
    name: string
    nParams: number
    closed: boolean

    // Owm methods of GCalc-1.GCalc.Function

    evaluate(): Expression
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string
    setName(value: string): void
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
    static $gtype: GObject.GType<Function>

    // Constructors of GCalc-1.GCalc.Function

    constructor(config?: Function_ConstructProps) 
    _init(config?: Function_ConstructProps): void
}

interface ErrorResult_ConstructProps extends GObject.Object_ConstructProps, Result_ConstructProps {
}

interface ErrorResult extends GObject.Object, Result {

    // Own properties of GCalc-1.GCalc.ErrorResult

    readonly message: string

    // Owm methods of GCalc-1.GCalc.ErrorResult

    getMessage(): string

    // Class property signals of GCalc-1.GCalc.ErrorResult

    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
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
    static $gtype: GObject.GType<ErrorResult>

    // Constructors of GCalc-1.GCalc.ErrorResult

    constructor(config?: ErrorResult_ConstructProps) 
    _init(config?: ErrorResult_ConstructProps): void
}

interface Group_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.Group

    level?: GroupLevel | null
    closed?: boolean | null
}

interface Group extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.Group

    level: GroupLevel
    closed: boolean

    // Owm methods of GCalc-1.GCalc.Group

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
    static $gtype: GObject.GType<Group>

    // Constructors of GCalc-1.GCalc.Group

    constructor(config?: Group_ConstructProps) 
    _init(config?: Group_ConstructProps): void
}

interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Hashable extends GObject.Object {

    // Owm methods of GCalc-1.GCalc.Hashable

    hash(): number

    // Class property signals of GCalc-1.GCalc.Hashable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Hashable {

    // Own properties of GCalc-1.GCalc.Hashable

    static name: string
    static $gtype: GObject.GType<Hashable>

    // Constructors of GCalc-1.GCalc.Hashable

    constructor(config?: Hashable_ConstructProps) 
    _init(config?: Hashable_ConstructProps): void
}

interface MathEquation_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
}

interface MathEquation extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.MathEquation

    readonly variables: ExpressionHashMap

    // Owm methods of GCalc-1.GCalc.MathEquation

    getVariables(): ExpressionHashMap

    // Class property signals of GCalc-1.GCalc.MathEquation

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

class MathEquation {

    // Own properties of GCalc-1.GCalc.MathEquation

    static name: string
    static $gtype: GObject.GType<MathEquation>

    // Constructors of GCalc-1.GCalc.MathEquation

    constructor(config?: MathEquation_ConstructProps) 
    _init(config?: MathEquation_ConstructProps): void
}

interface MathEquationManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface MathEquationManager extends GObject.Object {

    // Own properties of GCalc-1.GCalc.MathEquationManager

    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer

    // Owm methods of GCalc-1.GCalc.MathEquationManager

    findVariable(name: string): Variable
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MathEquationManager {

    // Own properties of GCalc-1.GCalc.MathEquationManager

    static name: string
    static $gtype: GObject.GType<MathEquationManager>

    // Constructors of GCalc-1.GCalc.MathEquationManager

    constructor(config?: MathEquationManager_ConstructProps) 
    _init(config?: MathEquationManager_ConstructProps): void
}

interface Minus_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
}

interface Minus extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Minus

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
    static $gtype: GObject.GType<Minus>

    // Constructors of GCalc-1.GCalc.Minus

    constructor(config?: Minus_ConstructProps) 
    _init(config?: Minus_ConstructProps): void
}

interface Multiply_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
}

interface Multiply extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Multiply

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
    static $gtype: GObject.GType<Multiply>

    // Constructors of GCalc-1.GCalc.Multiply

    constructor(config?: Multiply_ConstructProps) 
    _init(config?: Multiply_ConstructProps): void
}

interface Operator_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
}

interface Operator extends GObject.Object, Expression {

    // Class property signals of GCalc-1.GCalc.Operator

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
    static $gtype: GObject.GType<Operator>

    // Constructors of GCalc-1.GCalc.Operator

    constructor(config?: Operator_ConstructProps) 
    _init(config?: Operator_ConstructProps): void
}

interface Plus_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
}

interface Plus extends GObject.Object, Expression, Operator, BinaryOperator {

    // Class property signals of GCalc-1.GCalc.Plus

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
    static $gtype: GObject.GType<Plus>

    // Constructors of GCalc-1.GCalc.Plus

    constructor(config?: Plus_ConstructProps) 
    _init(config?: Plus_ConstructProps): void
}

interface Polynomial_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
}

interface Polynomial extends GObject.Object, Expression {

    // Owm methods of GCalc-1.GCalc.Polynomial

    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Polynomial

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
    static $gtype: GObject.GType<Polynomial>

    // Constructors of GCalc-1.GCalc.Polynomial

    constructor(config?: Polynomial_ConstructProps) 
    _init(config?: Polynomial_ConstructProps): void
}

interface Pow_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps {
}

interface Pow extends GObject.Object, Expression, Operator {

    // Class property signals of GCalc-1.GCalc.Pow

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
    static $gtype: GObject.GType<Pow>

    // Constructors of GCalc-1.GCalc.Pow

    constructor(config?: Pow_ConstructProps) 
    _init(config?: Pow_ConstructProps): void
}

interface Result_ConstructProps extends GObject.Object_ConstructProps {
}

interface Result extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Result

    readonly expression: Expression

    // Owm methods of GCalc-1.GCalc.Result

    toString(): string
    getExpression(): Expression

    // Class property signals of GCalc-1.GCalc.Result

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

class Result {

    // Own properties of GCalc-1.GCalc.Result

    static name: string
    static $gtype: GObject.GType<Result>

    // Constructors of GCalc-1.GCalc.Result

    constructor(config?: Result_ConstructProps) 
    _init(config?: Result_ConstructProps): void
}

interface Solver_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.Solver

    equationManager?: MathEquationManager | null
}

interface Solver extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Solver

    equationManager: MathEquationManager

    // Owm methods of GCalc-1.GCalc.Solver

    solve(str: string): Result
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void

    // Class property signals of GCalc-1.GCalc.Solver

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

class Solver {

    // Own properties of GCalc-1.GCalc.Solver

    static name: string
    static $gtype: GObject.GType<Solver>

    // Constructors of GCalc-1.GCalc.Solver

    constructor(config?: Solver_ConstructProps) 
    _init(config?: Solver_ConstructProps): void
}

interface Term_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
}

interface Term extends GObject.Object, Expression {

    // Owm methods of GCalc-1.GCalc.Term

    add(t: Term): Expression
    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.Term

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
    static $gtype: GObject.GType<Term>

    // Constructors of GCalc-1.GCalc.Term

    constructor(config?: Term_ConstructProps) 
    _init(config?: Term_ConstructProps): void
    static evaluateConstants(c1: Constant, c2: Constant, op: Operator): Expression
}

interface Variable_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.Variable

    name?: string | null
    value?: Constant | null
    bind?: Variable | null
}

interface Variable extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.Variable

    name: string
    value: Constant
    bind: Variable

    // Owm methods of GCalc-1.GCalc.Variable

    evaluate(): Expression
    getName(): string
    setName(value: string): void
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
    static $gtype: GObject.GType<Variable>

    // Constructors of GCalc-1.GCalc.Variable

    constructor(config?: Variable_ConstructProps) 
    _init(config?: Variable_ConstructProps): void
}

interface ExpressionContainer_ConstructProps extends Gio.ListModel_ConstructProps, Gee.ArrayList_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.ExpressionContainer

    parent?: Expression | null
}

interface ExpressionContainer extends Gio.ListModel {

    // Own properties of GCalc-1.GCalc.ExpressionContainer

    parent: Expression

    // Conflicting properties

    readOnlyView: any
    size: any

    // Own fields of GCalc-1.GCalc.ExpressionContainer

    parentInstance: Gee.ArrayList
    priv: ExpressionContainerPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionContainer

    add(exp: Expression): void

    // Overloads of add

    add(item: object | null): boolean
    add(...args: any[]): any
    add(args_or_item: any[] | object | null): void | boolean | any
    removeAt(index: number): Expression

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(...args: any[]): any
    removeAt(args_or_index: any[] | number): Expression | object | null | any
    remove(exp: Expression): Expression

    // Overloads of remove

    remove(item: object | null): boolean
    remove(...args: any[]): any
    remove(args_or_item: any[] | object | null): Expression | boolean | any
    getObject(position: number): GObject.Object | null
    find(exp: Expression): Expression | null
    findNamed(name: string): Expression | null
    getParent(): Expression
    setParent(value: Expression): void

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of GCalc-1.GCalc.ExpressionContainer

    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
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
    static $gtype: GObject.GType<ExpressionContainer>

    // Constructors of GCalc-1.GCalc.ExpressionContainer

    constructor(config?: ExpressionContainer_ConstructProps) 
    constructor() 
    static new(): ExpressionContainer

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionContainer_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ExpressionHashMap_ConstructProps extends Gee.HashMap_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.ExpressionHashMap

    parent?: Expression | null
}

interface ExpressionHashMap {

    // Own properties of GCalc-1.GCalc.ExpressionHashMap

    parent: Expression

    // Own fields of GCalc-1.GCalc.ExpressionHashMap

    parentInstance: Gee.HashMap
    priv: ExpressionHashMapPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionHashMap

    add(exp: Expression): void
    remove(exp: Expression): void

    // Overloads of remove

    remove(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    remove(...args: any[]): any
    remove(args_or_key: any[] | object | null): [ /* returnType */ void | boolean | any, /* value */ object ]
    findNamed(name: string): Expression
    getParent(): Expression
    setParent(value: Expression): void

    // Class property signals of GCalc-1.GCalc.ExpressionHashMap

    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
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
    static $gtype: GObject.GType<ExpressionHashMap>

    // Constructors of GCalc-1.GCalc.ExpressionHashMap

    constructor(config?: ExpressionHashMap_ConstructProps) 
    constructor() 
    static new(): ExpressionHashMap

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ExpressionHashMap_ConstructProps): void
}

interface GFunctionAcos_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionAcos {

    // Own fields of GCalc-1.GCalc.GFunctionAcos

    parentInstance: GFunction
    priv: GFunctionAcosPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionAcos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionAcos extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAcos

    static name: string
    static $gtype: GObject.GType<GFunctionAcos>

    // Constructors of GCalc-1.GCalc.GFunctionAcos

    constructor(config?: GFunctionAcos_ConstructProps) 
    constructor() 
    static new(): GFunctionAcos

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAcos_ConstructProps): void
}

interface GFunctionAcosh_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionAcosh {

    // Own fields of GCalc-1.GCalc.GFunctionAcosh

    parentInstance: GFunction
    priv: GFunctionAcoshPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionAcosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionAcosh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAcosh

    static name: string
    static $gtype: GObject.GType<GFunctionAcosh>

    // Constructors of GCalc-1.GCalc.GFunctionAcosh

    constructor(config?: GFunctionAcosh_ConstructProps) 
    constructor() 
    static new(): GFunctionAcosh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAcosh_ConstructProps): void
}

interface GFunctionAsin_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionAsin {

    // Own fields of GCalc-1.GCalc.GFunctionAsin

    parentInstance: GFunction
    priv: GFunctionAsinPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionAsin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionAsin extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAsin

    static name: string
    static $gtype: GObject.GType<GFunctionAsin>

    // Constructors of GCalc-1.GCalc.GFunctionAsin

    constructor(config?: GFunctionAsin_ConstructProps) 
    constructor() 
    static new(): GFunctionAsin

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAsin_ConstructProps): void
}

interface GFunctionAsinh_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionAsinh {

    // Own fields of GCalc-1.GCalc.GFunctionAsinh

    parentInstance: GFunction
    priv: GFunctionAsinhPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionAsinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionAsinh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAsinh

    static name: string
    static $gtype: GObject.GType<GFunctionAsinh>

    // Constructors of GCalc-1.GCalc.GFunctionAsinh

    constructor(config?: GFunctionAsinh_ConstructProps) 
    constructor() 
    static new(): GFunctionAsinh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAsinh_ConstructProps): void
}

interface GFunctionAtan_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionAtan {

    // Own fields of GCalc-1.GCalc.GFunctionAtan

    parentInstance: GFunction
    priv: GFunctionAtanPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionAtan

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionAtan extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAtan

    static name: string
    static $gtype: GObject.GType<GFunctionAtan>

    // Constructors of GCalc-1.GCalc.GFunctionAtan

    constructor(config?: GFunctionAtan_ConstructProps) 
    constructor() 
    static new(): GFunctionAtan

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAtan_ConstructProps): void
}

interface GFunctionAtanh_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionAtanh {

    // Own fields of GCalc-1.GCalc.GFunctionAtanh

    parentInstance: GFunction
    priv: GFunctionAtanhPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionAtanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionAtanh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionAtanh

    static name: string
    static $gtype: GObject.GType<GFunctionAtanh>

    // Constructors of GCalc-1.GCalc.GFunctionAtanh

    constructor(config?: GFunctionAtanh_ConstructProps) 
    constructor() 
    static new(): GFunctionAtanh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionAtanh_ConstructProps): void
}

interface GFunctionCos_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionCos {

    // Own fields of GCalc-1.GCalc.GFunctionCos

    parentInstance: GFunction
    priv: GFunctionCosPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionCos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionCos extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionCos

    static name: string
    static $gtype: GObject.GType<GFunctionCos>

    // Constructors of GCalc-1.GCalc.GFunctionCos

    constructor(config?: GFunctionCos_ConstructProps) 
    constructor() 
    static new(): GFunctionCos

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionCos_ConstructProps): void
}

interface GFunctionCosh_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionCosh {

    // Own fields of GCalc-1.GCalc.GFunctionCosh

    parentInstance: GFunction
    priv: GFunctionCoshPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionCosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionCosh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionCosh

    static name: string
    static $gtype: GObject.GType<GFunctionCosh>

    // Constructors of GCalc-1.GCalc.GFunctionCosh

    constructor(config?: GFunctionCosh_ConstructProps) 
    constructor() 
    static new(): GFunctionCosh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionCosh_ConstructProps): void
}

interface GFunctionExp_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionExp {

    // Own fields of GCalc-1.GCalc.GFunctionExp

    parentInstance: GFunction
    priv: GFunctionExpPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionExp extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionExp

    static name: string
    static $gtype: GObject.GType<GFunctionExp>

    // Constructors of GCalc-1.GCalc.GFunctionExp

    constructor(config?: GFunctionExp_ConstructProps) 
    constructor() 
    static new(): GFunctionExp

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionExp_ConstructProps): void
}

interface GFunctionLog_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionLog {

    // Own fields of GCalc-1.GCalc.GFunctionLog

    parentInstance: GFunction
    priv: GFunctionLogPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionLog

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionLog extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionLog

    static name: string
    static $gtype: GObject.GType<GFunctionLog>

    // Constructors of GCalc-1.GCalc.GFunctionLog

    constructor(config?: GFunctionLog_ConstructProps) 
    constructor() 
    static new(): GFunctionLog

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionLog_ConstructProps): void
}

interface GFunctionSin_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionSin {

    // Own fields of GCalc-1.GCalc.GFunctionSin

    parentInstance: GFunction
    priv: GFunctionSinPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionSin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionSin extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSin

    static name: string
    static $gtype: GObject.GType<GFunctionSin>

    // Constructors of GCalc-1.GCalc.GFunctionSin

    constructor(config?: GFunctionSin_ConstructProps) 
    constructor() 
    static new(): GFunctionSin

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionSin_ConstructProps): void
}

interface GFunctionSinh_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionSinh {

    // Own fields of GCalc-1.GCalc.GFunctionSinh

    parentInstance: GFunction
    priv: GFunctionSinhPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionSinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionSinh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSinh

    static name: string
    static $gtype: GObject.GType<GFunctionSinh>

    // Constructors of GCalc-1.GCalc.GFunctionSinh

    constructor(config?: GFunctionSinh_ConstructProps) 
    constructor() 
    static new(): GFunctionSinh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionSinh_ConstructProps): void
}

interface GFunctionSqrt_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionSqrt {

    // Own fields of GCalc-1.GCalc.GFunctionSqrt

    parentInstance: GFunction
    priv: GFunctionSqrtPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionSqrt

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionSqrt extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionSqrt

    static name: string
    static $gtype: GObject.GType<GFunctionSqrt>

    // Constructors of GCalc-1.GCalc.GFunctionSqrt

    constructor(config?: GFunctionSqrt_ConstructProps) 
    constructor() 
    static new(): GFunctionSqrt

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionSqrt_ConstructProps): void
}

interface GFunctionTan_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionTan {

    // Own fields of GCalc-1.GCalc.GFunctionTan

    parentInstance: GFunction
    priv: GFunctionTanPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionTan

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionTan extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionTan

    static name: string
    static $gtype: GObject.GType<GFunctionTan>

    // Constructors of GCalc-1.GCalc.GFunctionTan

    constructor(config?: GFunctionTan_ConstructProps) 
    constructor() 
    static new(): GFunctionTan

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionTan_ConstructProps): void
}

interface GFunctionTanh_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionTanh {

    // Own fields of GCalc-1.GCalc.GFunctionTanh

    parentInstance: GFunction
    priv: GFunctionTanhPrivate

    // Class property signals of GCalc-1.GCalc.GFunctionTanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GFunctionTanh extends GFunction {

    // Own properties of GCalc-1.GCalc.GFunctionTanh

    static name: string
    static $gtype: GObject.GType<GFunctionTanh>

    // Constructors of GCalc-1.GCalc.GFunctionTanh

    constructor(config?: GFunctionTanh_ConstructProps) 
    constructor() 
    static new(): GFunctionTanh

    // Overloads of new

    static new(): GFunction
    static new(): GExpression
    _init(config?: GFunctionTanh_ConstructProps): void
}

interface GExpression_ConstructProps extends Expression_ConstructProps, GObject.Object_ConstructProps {
}

interface GExpression extends Expression {

    // Own fields of GCalc-1.GCalc.GExpression

    parentInstance: GObject.Object
    priv: GExpressionPrivate

    // Owm methods of GCalc-1.GCalc.GExpression

    toString(): string
    solve(): Result

    // Class property signals of GCalc-1.GCalc.GExpression

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
    static $gtype: GObject.GType<GExpression>

    // Constructors of GCalc-1.GCalc.GExpression

    constructor(config?: GExpression_ConstructProps) 
    constructor() 
    static new(): GExpression
    _init(config?: GExpression_ConstructProps): void
}

interface GErrorExpression_ConstructProps extends ErrorExpression_ConstructProps, GExpression_ConstructProps {
}

interface GErrorExpression extends ErrorExpression {

    // Own fields of GCalc-1.GCalc.GErrorExpression

    parentInstance: GExpression
    priv: GErrorExpressionPrivate

    // Class property signals of GCalc-1.GCalc.GErrorExpression

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
    static $gtype: GObject.GType<GErrorExpression>

    // Constructors of GCalc-1.GCalc.GErrorExpression

    constructor(config?: GErrorExpression_ConstructProps) 
    constructor() 
    static new(): GErrorExpression

    // Overloads of new

    static new(): GExpression
    _init(config?: GErrorExpression_ConstructProps): void
}

interface GAssign_ConstructProps extends Operator_ConstructProps, BinaryOperator_ConstructProps, Assign_ConstructProps, GExpression_ConstructProps {
}

interface GAssign extends Operator, BinaryOperator, Assign {

    // Own fields of GCalc-1.GCalc.GAssign

    parentInstance: GExpression
    priv: GAssignPrivate

    // Class property signals of GCalc-1.GCalc.GAssign

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
    static $gtype: GObject.GType<GAssign>

    // Constructors of GCalc-1.GCalc.GAssign

    constructor(config?: GAssign_ConstructProps) 
    constructor() 
    static new(): GAssign

    // Overloads of new

    static new(): GExpression
    _init(config?: GAssign_ConstructProps): void
}

interface GConstant_ConstructProps extends Constant_ConstructProps, GExpression_ConstructProps {
}

interface GConstant extends Constant {

    // Own fields of GCalc-1.GCalc.GConstant

    parentInstance: GExpression
    priv: GConstantPrivate

    // Owm methods of GCalc-1.GCalc.GConstant

    subtract(c: Constant): Constant

    // Class property signals of GCalc-1.GCalc.GConstant

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
    static $gtype: GObject.GType<GConstant>

    // Constructors of GCalc-1.GCalc.GConstant

    constructor(config?: GConstant_ConstructProps) 
    static integer(val: number): GConstant
    static unsignedInteger(val: number): GConstant
    static double(val: number): GConstant
    static complex(real: number, imag: number): GConstant
    constructor() 
    static new(): GConstant

    // Overloads of new

    static new(): GExpression
    _init(config?: GConstant_ConstructProps): void
}

interface GDivision_ConstructProps extends Operator_ConstructProps, BinaryOperator_ConstructProps, Division_ConstructProps, GExpression_ConstructProps {
}

interface GDivision extends Operator, BinaryOperator, Division {

    // Own fields of GCalc-1.GCalc.GDivision

    parentInstance: GExpression
    priv: GDivisionPrivate

    // Class property signals of GCalc-1.GCalc.GDivision

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
    static $gtype: GObject.GType<GDivision>

    // Constructors of GCalc-1.GCalc.GDivision

    constructor(config?: GDivision_ConstructProps) 
    constructor() 
    static new(): GDivision

    // Overloads of new

    static new(): GExpression
    _init(config?: GDivision_ConstructProps): void
}

interface GErrorResult_ConstructProps extends Result_ConstructProps, ErrorResult_ConstructProps, GObject.Object_ConstructProps {
}

interface GErrorResult extends Result, ErrorResult {

    // Own fields of GCalc-1.GCalc.GErrorResult

    parentInstance: GObject.Object
    priv: GErrorResultPrivate

    // Class property signals of GCalc-1.GCalc.GErrorResult

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
    static $gtype: GObject.GType<GErrorResult>

    // Constructors of GCalc-1.GCalc.GErrorResult

    constructor(config?: GErrorResult_ConstructProps) 
    constructor(msg: string) 
    static new(msg: string): GErrorResult
    _init(config?: GErrorResult_ConstructProps): void
}

interface GFunction_ConstructProps extends Function_ConstructProps, Hashable_ConstructProps, GExpression_ConstructProps {
}

interface GFunction extends Function, Hashable {

    // Own fields of GCalc-1.GCalc.GFunction

    parentInstance: GExpression
    priv: GFunctionPrivate

    // Owm methods of GCalc-1.GCalc.GFunction

    evaluate(): Expression

    // Class property signals of GCalc-1.GCalc.GFunction

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
    static $gtype: GObject.GType<GFunction>

    // Constructors of GCalc-1.GCalc.GFunction

    constructor(config?: GFunction_ConstructProps) 
    static withName(name: string, nparams: number): GFunction
    constructor() 
    static new(): GFunction

    // Overloads of new

    static new(): GExpression
    _init(config?: GFunction_ConstructProps): void
}

interface GMathEquation_ConstructProps extends MathEquation_ConstructProps, GExpression_ConstructProps {
}

interface GMathEquation extends MathEquation {

    // Own fields of GCalc-1.GCalc.GMathEquation

    parentInstance: GExpression
    priv: GMathEquationPrivate

    // Class property signals of GCalc-1.GCalc.GMathEquation

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
    static $gtype: GObject.GType<GMathEquation>

    // Constructors of GCalc-1.GCalc.GMathEquation

    constructor(config?: GMathEquation_ConstructProps) 
    constructor() 
    static new(): GMathEquation

    // Overloads of new

    static new(): GExpression
    _init(config?: GMathEquation_ConstructProps): void
}

interface GMathEquationManager_ConstructProps extends MathEquationManager_ConstructProps, GObject.Object_ConstructProps {
}

interface GMathEquationManager extends MathEquationManager {

    // Own fields of GCalc-1.GCalc.GMathEquationManager

    parentInstance: GObject.Object
    priv: GMathEquationManagerPrivate

    // Class property signals of GCalc-1.GCalc.GMathEquationManager

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
    static $gtype: GObject.GType<GMathEquationManager>

    // Constructors of GCalc-1.GCalc.GMathEquationManager

    constructor(config?: GMathEquationManager_ConstructProps) 
    constructor() 
    static new(): GMathEquationManager
    _init(config?: GMathEquationManager_ConstructProps): void
}

interface GMinus_ConstructProps extends Operator_ConstructProps, BinaryOperator_ConstructProps, Minus_ConstructProps, GExpression_ConstructProps {
}

interface GMinus extends Operator, BinaryOperator, Minus {

    // Own fields of GCalc-1.GCalc.GMinus

    parentInstance: GExpression
    priv: GMinusPrivate

    // Class property signals of GCalc-1.GCalc.GMinus

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
    static $gtype: GObject.GType<GMinus>

    // Constructors of GCalc-1.GCalc.GMinus

    constructor(config?: GMinus_ConstructProps) 
    constructor() 
    static new(): GMinus

    // Overloads of new

    static new(): GExpression
    _init(config?: GMinus_ConstructProps): void
}

interface GMultiply_ConstructProps extends Operator_ConstructProps, BinaryOperator_ConstructProps, Multiply_ConstructProps, GExpression_ConstructProps {
}

interface GMultiply extends Operator, BinaryOperator, Multiply {

    // Own fields of GCalc-1.GCalc.GMultiply

    parentInstance: GExpression
    priv: GMultiplyPrivate

    // Class property signals of GCalc-1.GCalc.GMultiply

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
    static $gtype: GObject.GType<GMultiply>

    // Constructors of GCalc-1.GCalc.GMultiply

    constructor(config?: GMultiply_ConstructProps) 
    constructor() 
    static new(): GMultiply

    // Overloads of new

    static new(): GExpression
    _init(config?: GMultiply_ConstructProps): void
}

interface GParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface GParser {

    // Own fields of GCalc-1.GCalc.GParser

    parentInstance: GObject.Object
    priv: GParserPrivate

    // Owm methods of GCalc-1.GCalc.GParser

    parse(str: string, eqman: MathEquationManager): void
    readToken(): GParserTokenType
    tokenToString(): string

    // Class property signals of GCalc-1.GCalc.GParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GParser extends GObject.Object {

    // Own properties of GCalc-1.GCalc.GParser

    static name: string
    static $gtype: GObject.GType<GParser>

    // Constructors of GCalc-1.GCalc.GParser

    constructor(config?: GParser_ConstructProps) 
    constructor() 
    static new(): GParser
    _init(config?: GParser_ConstructProps): void
}

interface GPlus_ConstructProps extends Operator_ConstructProps, BinaryOperator_ConstructProps, Plus_ConstructProps, GExpression_ConstructProps {
}

interface GPlus extends Operator, BinaryOperator, Plus {

    // Own fields of GCalc-1.GCalc.GPlus

    parentInstance: GExpression
    priv: GPlusPrivate

    // Class property signals of GCalc-1.GCalc.GPlus

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
    static $gtype: GObject.GType<GPlus>

    // Constructors of GCalc-1.GCalc.GPlus

    constructor(config?: GPlus_ConstructProps) 
    constructor() 
    static new(): GPlus

    // Overloads of new

    static new(): GExpression
    _init(config?: GPlus_ConstructProps): void
}

interface GPolynomial_ConstructProps extends Polynomial_ConstructProps, GExpression_ConstructProps {
}

interface GPolynomial extends Polynomial {

    // Own fields of GCalc-1.GCalc.GPolynomial

    parentInstance: GExpression
    priv: GPolynomialPrivate

    // Class property signals of GCalc-1.GCalc.GPolynomial

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
    static $gtype: GObject.GType<GPolynomial>

    // Constructors of GCalc-1.GCalc.GPolynomial

    constructor(config?: GPolynomial_ConstructProps) 
    constructor() 
    static new(): GPolynomial

    // Overloads of new

    static new(): GExpression
    _init(config?: GPolynomial_ConstructProps): void
}

interface GPow_ConstructProps extends Operator_ConstructProps, Pow_ConstructProps, GExpression_ConstructProps {
}

interface GPow extends Operator, Pow {

    // Own fields of GCalc-1.GCalc.GPow

    parentInstance: GExpression
    priv: GPowPrivate

    // Class property signals of GCalc-1.GCalc.GPow

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
    static $gtype: GObject.GType<GPow>

    // Constructors of GCalc-1.GCalc.GPow

    constructor(config?: GPow_ConstructProps) 
    constructor() 
    static new(): GPow

    // Overloads of new

    static new(): GExpression
    _init(config?: GPow_ConstructProps): void
}

interface GResult_ConstructProps extends Result_ConstructProps, GObject.Object_ConstructProps {
}

interface GResult extends Result {

    // Own fields of GCalc-1.GCalc.GResult

    parentInstance: GObject.Object
    priv: GResultPrivate

    // Class property signals of GCalc-1.GCalc.GResult

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
    static $gtype: GObject.GType<GResult>

    // Constructors of GCalc-1.GCalc.GResult

    constructor(config?: GResult_ConstructProps) 
    constructor(exp: Expression) 
    static new(exp: Expression): GResult
    _init(config?: GResult_ConstructProps): void
}

interface GGroup_ConstructProps extends Group_ConstructProps, GExpression_ConstructProps {
}

interface GGroup extends Group {

    // Own fields of GCalc-1.GCalc.GGroup

    parentInstance: GExpression
    priv: GGroupPrivate

    // Class property signals of GCalc-1.GCalc.GGroup

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
    static $gtype: GObject.GType<GGroup>

    // Constructors of GCalc-1.GCalc.GGroup

    constructor(config?: GGroup_ConstructProps) 
    constructor() 
    static new(): GGroup

    // Overloads of new

    static new(): GExpression
    _init(config?: GGroup_ConstructProps): void
}

interface GSolver_ConstructProps extends Solver_ConstructProps, GObject.Object_ConstructProps {
}

interface GSolver extends Solver {

    // Own fields of GCalc-1.GCalc.GSolver

    parentInstance: GObject.Object
    priv: GSolverPrivate

    // Class property signals of GCalc-1.GCalc.GSolver

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
    static $gtype: GObject.GType<GSolver>

    // Constructors of GCalc-1.GCalc.GSolver

    constructor(config?: GSolver_ConstructProps) 
    constructor() 
    static new(): GSolver
    _init(config?: GSolver_ConstructProps): void
}

interface GTerm_ConstructProps extends Term_ConstructProps, GExpression_ConstructProps {
}

interface GTerm extends Term {

    // Own fields of GCalc-1.GCalc.GTerm

    parentInstance: GExpression
    priv: GTermPrivate

    // Class property signals of GCalc-1.GCalc.GTerm

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
    static $gtype: GObject.GType<GTerm>

    // Constructors of GCalc-1.GCalc.GTerm

    constructor(config?: GTerm_ConstructProps) 
    constructor() 
    static new(): GTerm

    // Overloads of new

    static new(): GExpression
    _init(config?: GTerm_ConstructProps): void
}

interface GVariable_ConstructProps extends Variable_ConstructProps, Hashable_ConstructProps, GExpression_ConstructProps {
}

interface GVariable extends Variable, Hashable {

    // Own fields of GCalc-1.GCalc.GVariable

    parentInstance: GExpression
    priv: GVariablePrivate

    // Class property signals of GCalc-1.GCalc.GVariable

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
    static $gtype: GObject.GType<GVariable>

    // Constructors of GCalc-1.GCalc.GVariable

    constructor(config?: GVariable_ConstructProps) 
    constructor(name: string) 
    static new(name: string): GVariable

    // Overloads of new

    static new(): GExpression
    _init(config?: GVariable_ConstructProps): void
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
    toString: (self: GExpression) => string
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
    toString: (self: Expression) => string
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
    getName: (self: Function) => string
    setName: (self: Function, value: string) => void
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
    getMessage: (self: ErrorResult) => string
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
    findVariable: (self: MathEquationManager, name: string) => Variable
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
    toString: (self: Result) => string
    getExpression: (self: Result) => Expression
}

abstract class ResultIface {

    // Own properties of GCalc-1.GCalc.ResultIface

    static name: string
}

interface SolverIface {

    // Own fields of GCalc-1.GCalc.SolverIface

    parentIface: GObject.TypeInterface
    solve: (self: Solver, str: string) => Result
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
    getName: (self: Variable) => string
    setName: (self: Variable, value: string) => void
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