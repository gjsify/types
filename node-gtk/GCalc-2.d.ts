// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCalc-2
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';

export namespace GCalc {

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
interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Hashable extends GObject.Object {

    // Owm methods of GCalc-2.GCalc.Hashable

    hash(): number

    // Class property signals of GCalc-2.GCalc.Hashable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Hashable {

    // Own properties of GCalc-2.GCalc.Hashable

    static name: string
    static $gtype: GObject.GType<Hashable>

    // Constructors of GCalc-2.GCalc.Hashable

    constructor(config?: Hashable_ConstructProps) 
    _init(config?: Hashable_ConstructProps): void
}

interface MathAssign_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathOperator_ConstructProps, MathBinaryOperator_ConstructProps {
}

interface MathAssign extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Owm methods of GCalc-2.GCalc.MathAssign

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathAssign

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
    static $gtype: GObject.GType<MathAssign>

    // Constructors of GCalc-2.GCalc.MathAssign

    constructor(config?: MathAssign_ConstructProps) 
    _init(config?: MathAssign_ConstructProps): void
}

interface MathBinaryOperator_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathOperator_ConstructProps {
}

interface MathBinaryOperator extends GObject.Object, MathExpression, MathOperator {

    // Class property signals of GCalc-2.GCalc.MathBinaryOperator

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
    static $gtype: GObject.GType<MathBinaryOperator>

    // Constructors of GCalc-2.GCalc.MathBinaryOperator

    constructor(config?: MathBinaryOperator_ConstructProps) 
    _init(config?: MathBinaryOperator_ConstructProps): void
}

interface MathConstant_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {
}

interface MathConstant extends GObject.Object, MathExpression {

    // Owm methods of GCalc-2.GCalc.MathConstant

    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant

    // Class property signals of GCalc-2.GCalc.MathConstant

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
    static $gtype: GObject.GType<MathConstant>

    // Constructors of GCalc-2.GCalc.MathConstant

    constructor(config?: MathConstant_ConstructProps) 
    _init(config?: MathConstant_ConstructProps): void
}

interface MathConstantComplex_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathConstant_ConstructProps {
}

interface MathConstantComplex extends GObject.Object, MathExpression, MathConstant {

    // Owm methods of GCalc-2.GCalc.MathConstantComplex

    real(): number
    imag(): number
    zero(): void

    // Class property signals of GCalc-2.GCalc.MathConstantComplex

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
    static $gtype: GObject.GType<MathConstantComplex>

    // Constructors of GCalc-2.GCalc.MathConstantComplex

    constructor(config?: MathConstantComplex_ConstructProps) 
    _init(config?: MathConstantComplex_ConstructProps): void
}

interface MathConstantNumber_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathConstant_ConstructProps {
}

interface MathConstantNumber extends GObject.Object, MathExpression, MathConstant {

    // Owm methods of GCalc-2.GCalc.MathConstantNumber

    value(): number

    // Class property signals of GCalc-2.GCalc.MathConstantNumber

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
    static $gtype: GObject.GType<MathConstantNumber>

    // Constructors of GCalc-2.GCalc.MathConstantNumber

    constructor(config?: MathConstantNumber_ConstructProps) 
    _init(config?: MathConstantNumber_ConstructProps): void
}

interface MathDivision_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathOperator_ConstructProps, MathBinaryOperator_ConstructProps {
}

interface MathDivision extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathDivision

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
    static $gtype: GObject.GType<MathDivision>

    // Constructors of GCalc-2.GCalc.MathDivision

    constructor(config?: MathDivision_ConstructProps) 
    _init(config?: MathDivision_ConstructProps): void
}

interface MathEquation_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {
}

interface MathEquation extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathEquation

    readonly variables: ExpressionHashMap

    // Owm methods of GCalc-2.GCalc.MathEquation

    getVariables(): ExpressionHashMap

    // Class property signals of GCalc-2.GCalc.MathEquation

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

    // Own properties of GCalc-2.GCalc.MathEquation

    static name: string
    static $gtype: GObject.GType<MathEquation>

    // Constructors of GCalc-2.GCalc.MathEquation

    constructor(config?: MathEquation_ConstructProps) 
    _init(config?: MathEquation_ConstructProps): void
}

interface MathEquationManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface MathEquationManager extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathEquationManager

    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer

    // Owm methods of GCalc-2.GCalc.MathEquationManager

    findVariable(name: string): MathVariable
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MathEquationManager {

    // Own properties of GCalc-2.GCalc.MathEquationManager

    static name: string
    static $gtype: GObject.GType<MathEquationManager>

    // Constructors of GCalc-2.GCalc.MathEquationManager

    constructor(config?: MathEquationManager_ConstructProps) 
    _init(config?: MathEquationManager_ConstructProps): void
}

interface MathErrorResult_ConstructProps extends GObject.Object_ConstructProps, MathResult_ConstructProps {
}

interface MathErrorResult extends GObject.Object, MathResult {

    // Own properties of GCalc-2.GCalc.MathErrorResult

    readonly message: string

    // Owm methods of GCalc-2.GCalc.MathErrorResult

    getMessage(): string

    // Class property signals of GCalc-2.GCalc.MathErrorResult

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

class MathErrorResult {

    // Own properties of GCalc-2.GCalc.MathErrorResult

    static name: string
    static $gtype: GObject.GType<MathErrorResult>

    // Constructors of GCalc-2.GCalc.MathErrorResult

    constructor(config?: MathErrorResult_ConstructProps) 
    _init(config?: MathErrorResult_ConstructProps): void
}

interface MathExpression_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCalc-2.GCalc.MathExpression

    parent?: MathExpression | null
}

interface MathExpression extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathExpression

    parent: MathExpression
    readonly expressions: ExpressionContainer

    // Owm methods of GCalc-2.GCalc.MathExpression

    toString(): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MathExpression {

    // Own properties of GCalc-2.GCalc.MathExpression

    static name: string
    static $gtype: GObject.GType<MathExpression>

    // Constructors of GCalc-2.GCalc.MathExpression

    constructor(config?: MathExpression_ConstructProps) 
    _init(config?: MathExpression_ConstructProps): void
}

interface MathFunction_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {

    // Own constructor properties of GCalc-2.GCalc.MathFunction

    name?: string | null
    nParams?: number | null
    closed?: boolean | null
}

interface MathFunction extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathFunction

    readonly paramTypes: ExpressionContainer
    name: string
    nParams: number
    closed: boolean

    // Owm methods of GCalc-2.GCalc.MathFunction

    evaluate(): MathExpression
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string
    setName(value: string): void
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
    static $gtype: GObject.GType<MathFunction>

    // Constructors of GCalc-2.GCalc.MathFunction

    constructor(config?: MathFunction_ConstructProps) 
    _init(config?: MathFunction_ConstructProps): void
}

interface MathGroup_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {

    // Own constructor properties of GCalc-2.GCalc.MathGroup

    level?: MathGroupLevel | null
    closed?: boolean | null
}

interface MathGroup extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathGroup

    level: MathGroupLevel
    closed: boolean

    // Owm methods of GCalc-2.GCalc.MathGroup

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
    static $gtype: GObject.GType<MathGroup>

    // Constructors of GCalc-2.GCalc.MathGroup

    constructor(config?: MathGroup_ConstructProps) 
    _init(config?: MathGroup_ConstructProps): void
}

interface MathMinus_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathOperator_ConstructProps, MathBinaryOperator_ConstructProps {
}

interface MathMinus extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathMinus

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
    static $gtype: GObject.GType<MathMinus>

    // Constructors of GCalc-2.GCalc.MathMinus

    constructor(config?: MathMinus_ConstructProps) 
    _init(config?: MathMinus_ConstructProps): void
}

interface MathMultiply_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathOperator_ConstructProps, MathBinaryOperator_ConstructProps {
}

interface MathMultiply extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathMultiply

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
    static $gtype: GObject.GType<MathMultiply>

    // Constructors of GCalc-2.GCalc.MathMultiply

    constructor(config?: MathMultiply_ConstructProps) 
    _init(config?: MathMultiply_ConstructProps): void
}

interface MathOperator_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {
}

interface MathOperator extends GObject.Object, MathExpression {

    // Class property signals of GCalc-2.GCalc.MathOperator

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
    static $gtype: GObject.GType<MathOperator>

    // Constructors of GCalc-2.GCalc.MathOperator

    constructor(config?: MathOperator_ConstructProps) 
    _init(config?: MathOperator_ConstructProps): void
}

interface MathParameter_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathVariable_ConstructProps {
}

interface MathParameter extends GObject.Object, MathExpression, MathVariable {

    // Owm methods of GCalc-2.GCalc.MathParameter

    setValue(val?: any | null): void

    // Overloads of setValue

    setValue(value?: MathConstant): void
    setValue(...args: any[]): any
    setValue(args_or_value?: any[] | MathConstant): void | any
    getValue(): any | null

    // Overloads of getValue

    getValue(): MathConstant
    getValue(...args: any[]): any
    getValue(...args: any[]): any | null | MathConstant | any

    // Class property signals of GCalc-2.GCalc.MathParameter

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
    static $gtype: GObject.GType<MathParameter>

    // Constructors of GCalc-2.GCalc.MathParameter

    constructor(config?: MathParameter_ConstructProps) 
    _init(config?: MathParameter_ConstructProps): void
}

interface MathPlus_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathOperator_ConstructProps, MathBinaryOperator_ConstructProps {
}

interface MathPlus extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathPlus

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
    static $gtype: GObject.GType<MathPlus>

    // Constructors of GCalc-2.GCalc.MathPlus

    constructor(config?: MathPlus_ConstructProps) 
    _init(config?: MathPlus_ConstructProps): void
}

interface MathPolynomial_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {
}

interface MathPolynomial extends GObject.Object, MathExpression {

    // Owm methods of GCalc-2.GCalc.MathPolynomial

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathPolynomial

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
    static $gtype: GObject.GType<MathPolynomial>

    // Constructors of GCalc-2.GCalc.MathPolynomial

    constructor(config?: MathPolynomial_ConstructProps) 
    _init(config?: MathPolynomial_ConstructProps): void
}

interface MathPow_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps, MathOperator_ConstructProps {
}

interface MathPow extends GObject.Object, MathExpression, MathOperator {

    // Class property signals of GCalc-2.GCalc.MathPow

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
    static $gtype: GObject.GType<MathPow>

    // Constructors of GCalc-2.GCalc.MathPow

    constructor(config?: MathPow_ConstructProps) 
    _init(config?: MathPow_ConstructProps): void
}

interface MathResult_ConstructProps extends GObject.Object_ConstructProps {
}

interface MathResult extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathResult

    readonly expression: MathExpression

    // Owm methods of GCalc-2.GCalc.MathResult

    toString(): string
    getExpression(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathResult

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

class MathResult {

    // Own properties of GCalc-2.GCalc.MathResult

    static name: string
    static $gtype: GObject.GType<MathResult>

    // Constructors of GCalc-2.GCalc.MathResult

    constructor(config?: MathResult_ConstructProps) 
    _init(config?: MathResult_ConstructProps): void
}

interface MathTerm_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {
}

interface MathTerm extends GObject.Object, MathExpression {

    // Owm methods of GCalc-2.GCalc.MathTerm

    add(t: MathTerm): MathExpression
    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathTerm

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
    static $gtype: GObject.GType<MathTerm>

    // Constructors of GCalc-2.GCalc.MathTerm

    constructor(config?: MathTerm_ConstructProps) 
    _init(config?: MathTerm_ConstructProps): void
    static evaluateConstants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
}

interface MathVariable_ConstructProps extends GObject.Object_ConstructProps, MathExpression_ConstructProps {

    // Own constructor properties of GCalc-2.GCalc.MathVariable

    name?: string | null
    value?: MathConstant | null
    bind?: MathVariable | null
}

interface MathVariable extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathVariable

    name: string
    value: MathConstant
    bind: MathVariable

    // Owm methods of GCalc-2.GCalc.MathVariable

    evaluate(): MathExpression
    getName(): string
    setName(value: string): void
    getValue(): MathConstant
    setValue(value?: MathConstant): void
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
    static $gtype: GObject.GType<MathVariable>

    // Constructors of GCalc-2.GCalc.MathVariable

    constructor(config?: MathVariable_ConstructProps) 
    _init(config?: MathVariable_ConstructProps): void
}

interface Assign_ConstructProps extends MathOperator_ConstructProps, MathBinaryOperator_ConstructProps, MathAssign_ConstructProps, Expression_ConstructProps {
}

interface Assign extends MathOperator, MathBinaryOperator, MathAssign {

    // Class property signals of GCalc-2.GCalc.Assign

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
    static $gtype: GObject.GType<Assign>

    // Constructors of GCalc-2.GCalc.Assign

    constructor(config?: Assign_ConstructProps) 
    constructor() 
    static new(): Assign

    // Overloads of new

    static new(): Expression
    _init(config?: Assign_ConstructProps): void
}

interface Constant_ConstructProps extends MathConstant_ConstructProps, MathConstantNumber_ConstructProps, MathConstantComplex_ConstructProps, Expression_ConstructProps {
}

interface Constant extends MathConstant, MathConstantNumber, MathConstantComplex {

    // Class property signals of GCalc-2.GCalc.Constant

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
    static $gtype: GObject.GType<Constant>

    // Constructors of GCalc-2.GCalc.Constant

    constructor(config?: Constant_ConstructProps) 
    static integer(val: number): Constant
    static unsignedInteger(val: number): Constant
    static double(val: number): Constant
    static complex(real: number, imag: number): Constant
    constructor() 
    static new(): Constant

    // Overloads of new

    static new(): Expression
    _init(config?: Constant_ConstructProps): void
}

interface Division_ConstructProps extends MathOperator_ConstructProps, MathBinaryOperator_ConstructProps, MathDivision_ConstructProps, Expression_ConstructProps {
}

interface Division extends MathOperator, MathBinaryOperator, MathDivision {

    // Class property signals of GCalc-2.GCalc.Division

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
    static $gtype: GObject.GType<Division>

    // Constructors of GCalc-2.GCalc.Division

    constructor(config?: Division_ConstructProps) 
    constructor() 
    static new(): Division

    // Overloads of new

    static new(): Expression
    _init(config?: Division_ConstructProps): void
}

interface Equation_ConstructProps extends MathEquation_ConstructProps, Expression_ConstructProps {
}

interface Equation extends MathEquation {

    // Class property signals of GCalc-2.GCalc.Equation

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
    static $gtype: GObject.GType<Equation>

    // Constructors of GCalc-2.GCalc.Equation

    constructor(config?: Equation_ConstructProps) 
    constructor() 
    static new(): Equation

    // Overloads of new

    static new(): Expression
    _init(config?: Equation_ConstructProps): void
}

interface EquationManager_ConstructProps extends MathEquationManager_ConstructProps, GObject.Object_ConstructProps {
}

interface EquationManager extends MathEquationManager {

    // Class property signals of GCalc-2.GCalc.EquationManager

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
    static $gtype: GObject.GType<EquationManager>

    // Constructors of GCalc-2.GCalc.EquationManager

    constructor(config?: EquationManager_ConstructProps) 
    constructor() 
    static new(): EquationManager
    _init(config?: EquationManager_ConstructProps): void
}

interface ErrorResult_ConstructProps extends MathResult_ConstructProps, MathErrorResult_ConstructProps, GObject.Object_ConstructProps {
}

interface ErrorResult extends MathResult, MathErrorResult {

    // Class property signals of GCalc-2.GCalc.ErrorResult

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
    static $gtype: GObject.GType<ErrorResult>

    // Constructors of GCalc-2.GCalc.ErrorResult

    constructor(config?: ErrorResult_ConstructProps) 
    constructor(msg: string) 
    static new(msg: string): ErrorResult
    _init(config?: ErrorResult_ConstructProps): void
}

interface Expression_ConstructProps extends MathExpression_ConstructProps, GObject.Object_ConstructProps {
}

interface Expression extends MathExpression {

    // Owm methods of GCalc-2.GCalc.Expression

    toString(): string
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Expression

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
    static $gtype: GObject.GType<Expression>

    // Constructors of GCalc-2.GCalc.Expression

    constructor(config?: Expression_ConstructProps) 
    constructor() 
    static new(): Expression
    _init(config?: Expression_ConstructProps): void
}

interface ErrorExpression_ConstructProps extends Expression_ConstructProps {
}

interface ErrorExpression {

    // Class property signals of GCalc-2.GCalc.ErrorExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ErrorExpression extends Expression {

    // Own properties of GCalc-2.GCalc.ErrorExpression

    static name: string
    static $gtype: GObject.GType<ErrorExpression>

    // Constructors of GCalc-2.GCalc.ErrorExpression

    constructor(config?: ErrorExpression_ConstructProps) 
    constructor() 
    static new(): ErrorExpression

    // Overloads of new

    static new(): Expression
    _init(config?: ErrorExpression_ConstructProps): void
}

interface ExpressionContainer_ConstructProps extends Gio.ListModel_ConstructProps, Gee.ArrayList_ConstructProps {

    // Own constructor properties of GCalc-2.GCalc.ExpressionContainer

    parent?: MathExpression | null
}

interface ExpressionContainer extends Gio.ListModel {

    // Own properties of GCalc-2.GCalc.ExpressionContainer

    parent: MathExpression

    // Conflicting properties

    readOnlyView: any
    size: any

    // Owm methods of GCalc-2.GCalc.ExpressionContainer

    getObject(position: number): GObject.Object | null
    find(exp: MathExpression): MathExpression | null
    findNamed(name: string): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of GCalc-2.GCalc.ExpressionContainer

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

    // Own properties of GCalc-2.GCalc.ExpressionContainer

    static name: string
    static $gtype: GObject.GType<ExpressionContainer>

    // Constructors of GCalc-2.GCalc.ExpressionContainer

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

    // Own constructor properties of GCalc-2.GCalc.ExpressionHashMap

    parent?: MathExpression | null
}

interface ExpressionHashMap {

    // Own properties of GCalc-2.GCalc.ExpressionHashMap

    parent: MathExpression

    // Owm methods of GCalc-2.GCalc.ExpressionHashMap

    add(exp: MathExpression): void
    remove(exp: MathExpression): void

    // Overloads of remove

    remove(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    remove(...args: any[]): any
    remove(args_or_key: any[] | object | null): [ /* returnType */ void | boolean | any, /* value */ object ]
    findNamed(name: string): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void

    // Class property signals of GCalc-2.GCalc.ExpressionHashMap

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

    // Own properties of GCalc-2.GCalc.ExpressionHashMap

    static name: string
    static $gtype: GObject.GType<ExpressionHashMap>

    // Constructors of GCalc-2.GCalc.ExpressionHashMap

    constructor(config?: ExpressionHashMap_ConstructProps) 
    constructor() 
    static new(): ExpressionHashMap

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ExpressionHashMap_ConstructProps): void
}

interface Function_ConstructProps extends MathFunction_ConstructProps, Hashable_ConstructProps, Expression_ConstructProps {
}

interface Function extends MathFunction, Hashable {

    // Owm methods of GCalc-2.GCalc.Function

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.Function

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
    static $gtype: GObject.GType<Function>

    // Constructors of GCalc-2.GCalc.Function

    constructor(config?: Function_ConstructProps) 
    static withName(name: string, nparams: number): Function
    constructor() 
    static new(): Function

    // Overloads of new

    static new(): Expression
    _init(config?: Function_ConstructProps): void
}

interface FunctionAcos_ConstructProps extends Function_ConstructProps {
}

interface FunctionAcos {

    // Class property signals of GCalc-2.GCalc.FunctionAcos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionAcos extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAcos

    static name: string
    static $gtype: GObject.GType<FunctionAcos>

    // Constructors of GCalc-2.GCalc.FunctionAcos

    constructor(config?: FunctionAcos_ConstructProps) 
    constructor() 
    static new(): FunctionAcos

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAcos_ConstructProps): void
}

interface FunctionAcosh_ConstructProps extends Function_ConstructProps {
}

interface FunctionAcosh {

    // Class property signals of GCalc-2.GCalc.FunctionAcosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionAcosh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAcosh

    static name: string
    static $gtype: GObject.GType<FunctionAcosh>

    // Constructors of GCalc-2.GCalc.FunctionAcosh

    constructor(config?: FunctionAcosh_ConstructProps) 
    constructor() 
    static new(): FunctionAcosh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAcosh_ConstructProps): void
}

interface FunctionAsin_ConstructProps extends Function_ConstructProps {
}

interface FunctionAsin {

    // Class property signals of GCalc-2.GCalc.FunctionAsin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionAsin extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAsin

    static name: string
    static $gtype: GObject.GType<FunctionAsin>

    // Constructors of GCalc-2.GCalc.FunctionAsin

    constructor(config?: FunctionAsin_ConstructProps) 
    constructor() 
    static new(): FunctionAsin

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAsin_ConstructProps): void
}

interface FunctionAsinh_ConstructProps extends Function_ConstructProps {
}

interface FunctionAsinh {

    // Class property signals of GCalc-2.GCalc.FunctionAsinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionAsinh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAsinh

    static name: string
    static $gtype: GObject.GType<FunctionAsinh>

    // Constructors of GCalc-2.GCalc.FunctionAsinh

    constructor(config?: FunctionAsinh_ConstructProps) 
    constructor() 
    static new(): FunctionAsinh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAsinh_ConstructProps): void
}

interface FunctionAtan_ConstructProps extends Function_ConstructProps {
}

interface FunctionAtan {

    // Class property signals of GCalc-2.GCalc.FunctionAtan

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionAtan extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAtan

    static name: string
    static $gtype: GObject.GType<FunctionAtan>

    // Constructors of GCalc-2.GCalc.FunctionAtan

    constructor(config?: FunctionAtan_ConstructProps) 
    constructor() 
    static new(): FunctionAtan

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAtan_ConstructProps): void
}

interface FunctionAtanh_ConstructProps extends Function_ConstructProps {
}

interface FunctionAtanh {

    // Class property signals of GCalc-2.GCalc.FunctionAtanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionAtanh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAtanh

    static name: string
    static $gtype: GObject.GType<FunctionAtanh>

    // Constructors of GCalc-2.GCalc.FunctionAtanh

    constructor(config?: FunctionAtanh_ConstructProps) 
    constructor() 
    static new(): FunctionAtanh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAtanh_ConstructProps): void
}

interface FunctionCos_ConstructProps extends Function_ConstructProps {
}

interface FunctionCos {

    // Class property signals of GCalc-2.GCalc.FunctionCos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionCos extends Function {

    // Own properties of GCalc-2.GCalc.FunctionCos

    static name: string
    static $gtype: GObject.GType<FunctionCos>

    // Constructors of GCalc-2.GCalc.FunctionCos

    constructor(config?: FunctionCos_ConstructProps) 
    constructor() 
    static new(): FunctionCos

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionCos_ConstructProps): void
}

interface FunctionCosh_ConstructProps extends Function_ConstructProps {
}

interface FunctionCosh {

    // Class property signals of GCalc-2.GCalc.FunctionCosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionCosh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionCosh

    static name: string
    static $gtype: GObject.GType<FunctionCosh>

    // Constructors of GCalc-2.GCalc.FunctionCosh

    constructor(config?: FunctionCosh_ConstructProps) 
    constructor() 
    static new(): FunctionCosh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionCosh_ConstructProps): void
}

interface FunctionExp_ConstructProps extends Function_ConstructProps {
}

interface FunctionExp {

    // Class property signals of GCalc-2.GCalc.FunctionExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionExp extends Function {

    // Own properties of GCalc-2.GCalc.FunctionExp

    static name: string
    static $gtype: GObject.GType<FunctionExp>

    // Constructors of GCalc-2.GCalc.FunctionExp

    constructor(config?: FunctionExp_ConstructProps) 
    constructor() 
    static new(): FunctionExp

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionExp_ConstructProps): void
}

interface FunctionLog_ConstructProps extends Function_ConstructProps {
}

interface FunctionLog {

    // Class property signals of GCalc-2.GCalc.FunctionLog

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionLog extends Function {

    // Own properties of GCalc-2.GCalc.FunctionLog

    static name: string
    static $gtype: GObject.GType<FunctionLog>

    // Constructors of GCalc-2.GCalc.FunctionLog

    constructor(config?: FunctionLog_ConstructProps) 
    constructor() 
    static new(): FunctionLog

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionLog_ConstructProps): void
}

interface FunctionSin_ConstructProps extends Function_ConstructProps {
}

interface FunctionSin {

    // Class property signals of GCalc-2.GCalc.FunctionSin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionSin extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSin

    static name: string
    static $gtype: GObject.GType<FunctionSin>

    // Constructors of GCalc-2.GCalc.FunctionSin

    constructor(config?: FunctionSin_ConstructProps) 
    constructor() 
    static new(): FunctionSin

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSin_ConstructProps): void
}

interface FunctionSinh_ConstructProps extends Function_ConstructProps {
}

interface FunctionSinh {

    // Class property signals of GCalc-2.GCalc.FunctionSinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionSinh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSinh

    static name: string
    static $gtype: GObject.GType<FunctionSinh>

    // Constructors of GCalc-2.GCalc.FunctionSinh

    constructor(config?: FunctionSinh_ConstructProps) 
    constructor() 
    static new(): FunctionSinh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSinh_ConstructProps): void
}

interface FunctionSqrt_ConstructProps extends Function_ConstructProps {
}

interface FunctionSqrt {

    // Class property signals of GCalc-2.GCalc.FunctionSqrt

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionSqrt extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSqrt

    static name: string
    static $gtype: GObject.GType<FunctionSqrt>

    // Constructors of GCalc-2.GCalc.FunctionSqrt

    constructor(config?: FunctionSqrt_ConstructProps) 
    constructor() 
    static new(): FunctionSqrt

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSqrt_ConstructProps): void
}

interface FunctionTan_ConstructProps extends Function_ConstructProps {
}

interface FunctionTan {

    // Class property signals of GCalc-2.GCalc.FunctionTan

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionTan extends Function {

    // Own properties of GCalc-2.GCalc.FunctionTan

    static name: string
    static $gtype: GObject.GType<FunctionTan>

    // Constructors of GCalc-2.GCalc.FunctionTan

    constructor(config?: FunctionTan_ConstructProps) 
    constructor() 
    static new(): FunctionTan

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionTan_ConstructProps): void
}

interface FunctionTanh_ConstructProps extends Function_ConstructProps {
}

interface FunctionTanh {

    // Class property signals of GCalc-2.GCalc.FunctionTanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionTanh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionTanh

    static name: string
    static $gtype: GObject.GType<FunctionTanh>

    // Constructors of GCalc-2.GCalc.FunctionTanh

    constructor(config?: FunctionTanh_ConstructProps) 
    constructor() 
    static new(): FunctionTanh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionTanh_ConstructProps): void
}

interface Group_ConstructProps extends MathGroup_ConstructProps, Expression_ConstructProps {
}

interface Group extends MathGroup {

    // Class property signals of GCalc-2.GCalc.Group

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
    static $gtype: GObject.GType<Group>

    // Constructors of GCalc-2.GCalc.Group

    constructor(config?: Group_ConstructProps) 
    constructor() 
    static new(): Group

    // Overloads of new

    static new(): Expression
    _init(config?: Group_ConstructProps): void
}

interface Minus_ConstructProps extends MathOperator_ConstructProps, MathBinaryOperator_ConstructProps, MathMinus_ConstructProps, Expression_ConstructProps {
}

interface Minus extends MathOperator, MathBinaryOperator, MathMinus {

    // Class property signals of GCalc-2.GCalc.Minus

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
    static $gtype: GObject.GType<Minus>

    // Constructors of GCalc-2.GCalc.Minus

    constructor(config?: Minus_ConstructProps) 
    constructor() 
    static new(): Minus

    // Overloads of new

    static new(): Expression
    _init(config?: Minus_ConstructProps): void
}

interface Multiply_ConstructProps extends MathOperator_ConstructProps, MathBinaryOperator_ConstructProps, MathMultiply_ConstructProps, Expression_ConstructProps {
}

interface Multiply extends MathOperator, MathBinaryOperator, MathMultiply {

    // Class property signals of GCalc-2.GCalc.Multiply

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
    static $gtype: GObject.GType<Multiply>

    // Constructors of GCalc-2.GCalc.Multiply

    constructor(config?: Multiply_ConstructProps) 
    constructor() 
    static new(): Multiply

    // Overloads of new

    static new(): Expression
    _init(config?: Multiply_ConstructProps): void
}

interface Parameter_ConstructProps extends MathParameter_ConstructProps, Variable_ConstructProps {
}

interface Parameter extends MathParameter {

    // Conflicting methods

    setValue(...args: any[]): any
    getValue(...args: any[]): any
    vfuncSetValue(...args: any[]): any
    vfuncGetValue(...args: any[]): any

    // Class property signals of GCalc-2.GCalc.Parameter

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
    static $gtype: GObject.GType<Parameter>

    // Constructors of GCalc-2.GCalc.Parameter

    constructor(config?: Parameter_ConstructProps) 
    constructor(name: string) 
    static new(name: string): Parameter

    // Overloads of new

    static new(): Expression
    _init(config?: Parameter_ConstructProps): void
}

interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}

interface Parser {

    // Owm methods of GCalc-2.GCalc.Parser

    parse(str: string, eqman: MathEquationManager): void
    readToken(): ParserTokenType
    tokenToString(): string

    // Class property signals of GCalc-2.GCalc.Parser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Parser extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Parser

    static name: string
    static $gtype: GObject.GType<Parser>

    // Constructors of GCalc-2.GCalc.Parser

    constructor(config?: Parser_ConstructProps) 
    constructor() 
    static new(): Parser
    _init(config?: Parser_ConstructProps): void
}

interface Plus_ConstructProps extends MathOperator_ConstructProps, MathBinaryOperator_ConstructProps, MathPlus_ConstructProps, Expression_ConstructProps {
}

interface Plus extends MathOperator, MathBinaryOperator, MathPlus {

    // Class property signals of GCalc-2.GCalc.Plus

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
    static $gtype: GObject.GType<Plus>

    // Constructors of GCalc-2.GCalc.Plus

    constructor(config?: Plus_ConstructProps) 
    constructor() 
    static new(): Plus

    // Overloads of new

    static new(): Expression
    _init(config?: Plus_ConstructProps): void
}

interface Polynomial_ConstructProps extends MathPolynomial_ConstructProps, Expression_ConstructProps {
}

interface Polynomial extends MathPolynomial {

    // Class property signals of GCalc-2.GCalc.Polynomial

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
    static $gtype: GObject.GType<Polynomial>

    // Constructors of GCalc-2.GCalc.Polynomial

    constructor(config?: Polynomial_ConstructProps) 
    constructor() 
    static new(): Polynomial

    // Overloads of new

    static new(): Expression
    _init(config?: Polynomial_ConstructProps): void
}

interface Pow_ConstructProps extends MathOperator_ConstructProps, MathPow_ConstructProps, Expression_ConstructProps {
}

interface Pow extends MathOperator, MathPow {

    // Class property signals of GCalc-2.GCalc.Pow

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
    static $gtype: GObject.GType<Pow>

    // Constructors of GCalc-2.GCalc.Pow

    constructor(config?: Pow_ConstructProps) 
    constructor() 
    static new(): Pow

    // Overloads of new

    static new(): Expression
    _init(config?: Pow_ConstructProps): void
}

interface Result_ConstructProps extends MathResult_ConstructProps, GObject.Object_ConstructProps {
}

interface Result extends MathResult {

    // Class property signals of GCalc-2.GCalc.Result

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
    static $gtype: GObject.GType<Result>

    // Constructors of GCalc-2.GCalc.Result

    constructor(config?: Result_ConstructProps) 
    constructor(exp: MathExpression) 
    static new(exp: MathExpression): Result
    _init(config?: Result_ConstructProps): void
}

interface Solver_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCalc-2.GCalc.Solver

    equationManager?: MathEquationManager | null
}

interface Solver {

    // Own properties of GCalc-2.GCalc.Solver

    equationManager: MathEquationManager

    // Owm methods of GCalc-2.GCalc.Solver

    addExpression(exp: string): void
    solve(str: string): MathResult
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void

    // Class property signals of GCalc-2.GCalc.Solver

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

class Solver extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Solver

    static name: string
    static $gtype: GObject.GType<Solver>

    // Constructors of GCalc-2.GCalc.Solver

    constructor(config?: Solver_ConstructProps) 
    constructor() 
    static new(): Solver
    _init(config?: Solver_ConstructProps): void
}

interface Term_ConstructProps extends MathTerm_ConstructProps, Expression_ConstructProps {
}

interface Term extends MathTerm {

    // Class property signals of GCalc-2.GCalc.Term

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
    static $gtype: GObject.GType<Term>

    // Constructors of GCalc-2.GCalc.Term

    constructor(config?: Term_ConstructProps) 
    constructor() 
    static new(): Term

    // Overloads of new

    static new(): Expression
    _init(config?: Term_ConstructProps): void
}

interface Variable_ConstructProps extends MathVariable_ConstructProps, Hashable_ConstructProps, Expression_ConstructProps {
}

interface Variable extends MathVariable, Hashable {

    // Class property signals of GCalc-2.GCalc.Variable

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
    static $gtype: GObject.GType<Variable>

    // Constructors of GCalc-2.GCalc.Variable

    constructor(config?: Variable_ConstructProps) 
    _init(config?: Variable_ConstructProps): void
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

    toString: (self: Expression) => string
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

    findVariable: (self: MathEquationManager, name: string) => MathVariable
    getEquations: (self: MathEquationManager) => ExpressionContainer
    getFunctions: (self: MathEquationManager) => ExpressionContainer
}

abstract class MathEquationManagerIface {

    // Own properties of GCalc-2.GCalc.MathEquationManagerIface

    static name: string
}

interface MathErrorResultIface {

    // Own fields of GCalc-2.GCalc.MathErrorResultIface

    getMessage: (self: MathErrorResult) => string
}

abstract class MathErrorResultIface {

    // Own properties of GCalc-2.GCalc.MathErrorResultIface

    static name: string
}

interface MathExpressionIface {

    // Own fields of GCalc-2.GCalc.MathExpressionIface

    toString: (self: MathExpression) => string
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
    getName: (self: MathFunction) => string
    setName: (self: MathFunction, value: string) => void
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

    setValue: (self: MathParameter, val?: any | null) => void
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

    toString: (self: MathResult) => string
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
    getName: (self: MathVariable) => string
    setName: (self: MathVariable, value: string) => void
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