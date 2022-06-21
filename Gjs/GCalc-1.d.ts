// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCalc-1
 */

import type * as Gjs from './Gjs';
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

    constructor(config?: Assign_ConstructProps) 
    _init(config?: Assign_ConstructProps): void
}

interface BinaryOperator_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps {
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

    constructor(config?: Constant_ConstructProps) 
    _init(config?: Constant_ConstructProps): void
}

interface Division_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
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

    to_string(): string
    solve(): Result
    get_parent(): Expression
    set_parent(value: Expression): void
    get_expressions(): ExpressionContainer

    // Own virtual methods of GCalc-1.GCalc.Expression

    vfunc_to_string(): string
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

    constructor(config?: Expression_ConstructProps) 
    _init(config?: Expression_ConstructProps): void
}

interface ErrorExpression_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
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

    constructor(config?: ErrorExpression_ConstructProps) 
    _init(config?: ErrorExpression_ConstructProps): void
}

interface Function_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.Function

    name?: string | null
    n_params?: number | null
    closed?: boolean | null
}

interface Function extends GObject.Object, Expression {

    // Own properties of GCalc-1.GCalc.Function

    readonly param_types: ExpressionContainer
    name: string
    n_params: number
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

    constructor(config?: Function_ConstructProps) 
    _init(config?: Function_ConstructProps): void
}

interface ErrorResult_ConstructProps extends GObject.Object_ConstructProps, Result_ConstructProps {
}

interface ErrorResult extends GObject.Object, Result {

    // Own properties of GCalc-1.GCalc.ErrorResult

    readonly message: string

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

    constructor(config?: Group_ConstructProps) 
    _init(config?: Group_ConstructProps): void
}

interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
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

    constructor(config?: Hashable_ConstructProps) 
    _init(config?: Hashable_ConstructProps): void
}

interface MathEquation_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
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

    constructor(config?: MathEquationManager_ConstructProps) 
    _init(config?: MathEquationManager_ConstructProps): void
}

interface Minus_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
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

    constructor(config?: Minus_ConstructProps) 
    _init(config?: Minus_ConstructProps): void
}

interface Multiply_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
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

    constructor(config?: Multiply_ConstructProps) 
    _init(config?: Multiply_ConstructProps): void
}

interface Operator_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
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

    constructor(config?: Operator_ConstructProps) 
    _init(config?: Operator_ConstructProps): void
}

interface Plus_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps, BinaryOperator_ConstructProps {
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

    constructor(config?: Plus_ConstructProps) 
    _init(config?: Plus_ConstructProps): void
}

interface Polynomial_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
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

    constructor(config?: Polynomial_ConstructProps) 
    _init(config?: Polynomial_ConstructProps): void
}

interface Pow_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps, Operator_ConstructProps {
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

    constructor(config?: Pow_ConstructProps) 
    _init(config?: Pow_ConstructProps): void
}

interface Result_ConstructProps extends GObject.Object_ConstructProps {
}

interface Result extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Result

    readonly expression: Expression

    // Owm methods of GCalc-1.GCalc.Result

    to_string(): string
    get_expression(): Expression

    // Own virtual methods of GCalc-1.GCalc.Result

    vfunc_to_string(): string
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

    constructor(config?: Result_ConstructProps) 
    _init(config?: Result_ConstructProps): void
}

interface Solver_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCalc-1.GCalc.Solver

    equation_manager?: MathEquationManager | null
}

interface Solver extends GObject.Object {

    // Own properties of GCalc-1.GCalc.Solver

    equation_manager: MathEquationManager

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

    constructor(config?: Solver_ConstructProps) 
    _init(config?: Solver_ConstructProps): void
}

interface Term_ConstructProps extends GObject.Object_ConstructProps, Expression_ConstructProps {
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

    constructor(config?: Term_ConstructProps) 
    _init(config?: Term_ConstructProps): void
    static evaluate_constants(c1: Constant, c2: Constant, op: Operator): Expression
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

    read_only_view: any

    // Own fields of GCalc-1.GCalc.ExpressionContainer

    parent_instance: Gee.ArrayList
    priv: ExpressionContainerPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionContainer

    add(exp: Expression): void

    // Overloads of add

    add(item: object | null): boolean
    add(...args: any[]): any
    add(args_or_item: any[] | object | null): void | boolean | any
    remove_at(index: number): Expression

    // Overloads of remove_at

    remove_at(index: number): object | null
    remove_at(...args: any[]): any
    remove_at(args_or_index: any[] | number): Expression | object | null | any
    remove(exp: Expression): Expression

    // Overloads of remove

    remove(item: object | null): boolean
    remove(...args: any[]): any
    remove(args_or_item: any[] | object | null): Expression | boolean | any
    get_object(position: number): GObject.Object | null
    find(exp: Expression): Expression | null
    find_named(name: string): Expression | null
    get_parent(): Expression
    set_parent(value: Expression): void

    // Conflicting methods

    get_read_only_view(...args: any[]): any
    vfunc_get_read_only_view(...args: any[]): any

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

    constructor(config?: ExpressionContainer_ConstructProps) 
    constructor() 
    static new(): ExpressionContainer

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
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

    parent_instance: Gee.HashMap
    priv: ExpressionHashMapPrivate

    // Owm methods of GCalc-1.GCalc.ExpressionHashMap

    add(exp: Expression): void
    remove(exp: Expression): void

    // Overloads of remove

    remove(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    remove(...args: any[]): any
    remove(args_or_key: any[] | object | null): [ /* returnType */ void | boolean | any, /* value */ object ]
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

    constructor(config?: ExpressionHashMap_ConstructProps) 
    constructor() 
    static new(): ExpressionHashMap

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ExpressionHashMap_ConstructProps): void
}

interface GFunctionAcos_ConstructProps extends GFunction_ConstructProps {
}

interface GFunctionAcos {

    // Own fields of GCalc-1.GCalc.GFunctionAcos

    parent_instance: GFunction
    priv: GFunctionAcosPrivate

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

    parent_instance: GFunction
    priv: GFunctionAcoshPrivate

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

    parent_instance: GFunction
    priv: GFunctionAsinPrivate

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

    parent_instance: GFunction
    priv: GFunctionAsinhPrivate

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

    parent_instance: GFunction
    priv: GFunctionAtanPrivate

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

    parent_instance: GFunction
    priv: GFunctionAtanhPrivate

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

    parent_instance: GFunction
    priv: GFunctionCosPrivate

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

    parent_instance: GFunction
    priv: GFunctionCoshPrivate

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

    parent_instance: GFunction
    priv: GFunctionExpPrivate

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

    parent_instance: GFunction
    priv: GFunctionLogPrivate

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

    parent_instance: GFunction
    priv: GFunctionSinPrivate

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

    parent_instance: GFunction
    priv: GFunctionSinhPrivate

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

    parent_instance: GFunction
    priv: GFunctionSqrtPrivate

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

    parent_instance: GFunction
    priv: GFunctionTanPrivate

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

    parent_instance: GFunction
    priv: GFunctionTanhPrivate

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

    parent_instance: GObject.Object
    priv: GExpressionPrivate

    // Owm methods of GCalc-1.GCalc.GExpression

    to_string(): string
    solve(): Result

    // Own virtual methods of GCalc-1.GCalc.GExpression

    vfunc_to_string(): string
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

    constructor(config?: GExpression_ConstructProps) 
    constructor() 
    static new(): GExpression
    _init(config?: GExpression_ConstructProps): void
}

interface GErrorExpression_ConstructProps extends ErrorExpression_ConstructProps, GExpression_ConstructProps {
}

interface GErrorExpression extends ErrorExpression {

    // Own fields of GCalc-1.GCalc.GErrorExpression

    parent_instance: GExpression
    priv: GErrorExpressionPrivate

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

    parent_instance: GExpression
    priv: GAssignPrivate

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

    parent_instance: GExpression
    priv: GConstantPrivate

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

    constructor(config?: GConstant_ConstructProps) 
    static integer(val: number): GConstant
    static unsigned_integer(val: number): GConstant
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

    parent_instance: GExpression
    priv: GDivisionPrivate

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

    constructor(config?: GErrorResult_ConstructProps) 
    constructor(msg: string) 
    static new(msg: string): GErrorResult
    _init(config?: GErrorResult_ConstructProps): void
}

interface GFunction_ConstructProps extends Function_ConstructProps, Hashable_ConstructProps, GExpression_ConstructProps {
}

interface GFunction extends Function, Hashable {

    // Own fields of GCalc-1.GCalc.GFunction

    parent_instance: GExpression
    priv: GFunctionPrivate

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

    constructor(config?: GFunction_ConstructProps) 
    static with_name(name: string, nparams: number): GFunction
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

    parent_instance: GExpression
    priv: GMathEquationPrivate

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

    constructor(config?: GMathEquationManager_ConstructProps) 
    constructor() 
    static new(): GMathEquationManager
    _init(config?: GMathEquationManager_ConstructProps): void
}

interface GMinus_ConstructProps extends Operator_ConstructProps, BinaryOperator_ConstructProps, Minus_ConstructProps, GExpression_ConstructProps {
}

interface GMinus extends Operator, BinaryOperator, Minus {

    // Own fields of GCalc-1.GCalc.GMinus

    parent_instance: GExpression
    priv: GMinusPrivate

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

    parent_instance: GExpression
    priv: GMultiplyPrivate

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

    parent_instance: GObject.Object
    priv: GParserPrivate

    // Owm methods of GCalc-1.GCalc.GParser

    parse(str: string, eqman: MathEquationManager): void
    read_token(): GParserTokenType
    token_to_string(): string

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

    constructor(config?: GParser_ConstructProps) 
    constructor() 
    static new(): GParser
    _init(config?: GParser_ConstructProps): void
}

interface GPlus_ConstructProps extends Operator_ConstructProps, BinaryOperator_ConstructProps, Plus_ConstructProps, GExpression_ConstructProps {
}

interface GPlus extends Operator, BinaryOperator, Plus {

    // Own fields of GCalc-1.GCalc.GPlus

    parent_instance: GExpression
    priv: GPlusPrivate

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

    parent_instance: GExpression
    priv: GPolynomialPrivate

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

    parent_instance: GExpression
    priv: GPowPrivate

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

    constructor(config?: GResult_ConstructProps) 
    constructor(exp: Expression) 
    static new(exp: Expression): GResult
    _init(config?: GResult_ConstructProps): void
}

interface GGroup_ConstructProps extends Group_ConstructProps, GExpression_ConstructProps {
}

interface GGroup extends Group {

    // Own fields of GCalc-1.GCalc.GGroup

    parent_instance: GExpression
    priv: GGroupPrivate

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

    constructor(config?: GSolver_ConstructProps) 
    constructor() 
    static new(): GSolver
    _init(config?: GSolver_ConstructProps): void
}

interface GTerm_ConstructProps extends Term_ConstructProps, GExpression_ConstructProps {
}

interface GTerm extends Term {

    // Own fields of GCalc-1.GCalc.GTerm

    parent_instance: GExpression
    priv: GTermPrivate

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

    parent_instance: GExpression
    priv: GVariablePrivate

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

    constructor(config?: GVariable_ConstructProps) 
    constructor(name: string) 
    static new(name: string): GVariable

    // Overloads of new

    static new(): GExpression
    _init(config?: GVariable_ConstructProps): void
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
    to_string: (self: GExpression) => string
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
    to_string: (self: Expression) => string
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
    to_string: (self: Result) => string
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

}
export default GCalc;