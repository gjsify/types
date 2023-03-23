
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Gandiva-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * They are corresponding to `gandiva::ResultNullableType` values.
 */
export enum ResultNullableType {
    /**
     * This means the result validity is an intersection of
     *   the validity of the children.
     */
    IF_NULL,
    /**
     * This means that the result is always valid.
     */
    NEVER,
    /**
     * This means that the result validity depends on some
     *   internal logic.
     */
    INTERNAL,
}
/**
 * The major version.
 */
export const VERSION_MAJOR: number
/**
 * The micro version.
 */
export const VERSION_MICRO: number
/**
 * The minor version.
 */
export const VERSION_MINOR: number
/**
 * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
 * for snapshot version.
 */
export const VERSION_TAG: string | null
export module AndNode {

    // Constructor properties interface

    export interface ConstructorProperties extends BooleanNode.ConstructorProperties {
    }

}

export interface AndNode {

    // Own fields of Gandiva-1.0.Gandiva.AndNode

    parent_instance: BooleanNode & Node & GObject.Object & GObject.Object

    // Class property signals of Gandiva-1.0.Gandiva.AndNode

    connect(sigName: "notify::node", callback: (($obj: AndNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: AndNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: AndNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: AndNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AndNode extends BooleanNode {

    // Own properties of Gandiva-1.0.Gandiva.AndNode

    static name: string
    static $gtype: GObject.GType<AndNode>

    // Constructors of Gandiva-1.0.Gandiva.AndNode

    constructor(config?: AndNode.ConstructorProperties) 
    constructor(children: Node[]) 
    static new(children: Node[]): AndNode
    _init(config?: AndNode.ConstructorProperties): void
}

export module BinaryLiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface BinaryLiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.BinaryLiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.BinaryLiteralNode

    get_value(): GLib.Bytes

    // Class property signals of Gandiva-1.0.Gandiva.BinaryLiteralNode

    connect(sigName: "notify::node", callback: (($obj: BinaryLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: BinaryLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: BinaryLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: BinaryLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BinaryLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.BinaryLiteralNode

    static name: string
    static $gtype: GObject.GType<BinaryLiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.BinaryLiteralNode

    constructor(config?: BinaryLiteralNode.ConstructorProperties) 
    constructor(value: Uint8Array) 
    static new(value: Uint8Array): BinaryLiteralNode
    static new_bytes(value: GLib.Bytes): BinaryLiteralNode
    _init(config?: BinaryLiteralNode.ConstructorProperties): void
}

export module BooleanLiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface BooleanLiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.BooleanLiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.BooleanLiteralNode

    get_value(): boolean

    // Class property signals of Gandiva-1.0.Gandiva.BooleanLiteralNode

    connect(sigName: "notify::node", callback: (($obj: BooleanLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: BooleanLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: BooleanLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: BooleanLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BooleanLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.BooleanLiteralNode

    static name: string
    static $gtype: GObject.GType<BooleanLiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.BooleanLiteralNode

    constructor(config?: BooleanLiteralNode.ConstructorProperties) 
    constructor(value: boolean) 
    static new(value: boolean): BooleanLiteralNode
    _init(config?: BooleanLiteralNode.ConstructorProperties): void
}

export module BooleanNode {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {
    }

}

export interface BooleanNode {

    // Own fields of Gandiva-1.0.Gandiva.BooleanNode

    parent_instance: Node & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.BooleanNode

    get_children(): Node[]

    // Class property signals of Gandiva-1.0.Gandiva.BooleanNode

    connect(sigName: "notify::node", callback: (($obj: BooleanNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: BooleanNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: BooleanNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: BooleanNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BooleanNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.BooleanNode

    static name: string
    static $gtype: GObject.GType<BooleanNode>

    // Constructors of Gandiva-1.0.Gandiva.BooleanNode

    constructor(config?: BooleanNode.ConstructorProperties) 
    _init(config?: BooleanNode.ConstructorProperties): void
}

export module DoubleLiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface DoubleLiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.DoubleLiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.DoubleLiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.DoubleLiteralNode

    connect(sigName: "notify::node", callback: (($obj: DoubleLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DoubleLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: DoubleLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: DoubleLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DoubleLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.DoubleLiteralNode

    static name: string
    static $gtype: GObject.GType<DoubleLiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.DoubleLiteralNode

    constructor(config?: DoubleLiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): DoubleLiteralNode
    _init(config?: DoubleLiteralNode.ConstructorProperties): void
}

export module Expression {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.Expression

        expression?: any | null
        result_field?: Arrow.Field | null
        root_node?: Node | null
    }

}

export interface Expression {

    // Own properties of Gandiva-1.0.Gandiva.Expression

    readonly expression: any
    readonly result_field: Arrow.Field
    readonly root_node: Node

    // Own fields of Gandiva-1.0.Gandiva.Expression

    parent_instance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Expression

    to_string(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.Expression

    connect(sigName: "notify::expression", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::result-field", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result-field", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::result-field", ...args: any[]): void
    connect(sigName: "notify::root-node", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-node", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Expression extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.Expression

    static name: string
    static $gtype: GObject.GType<Expression>

    // Constructors of Gandiva-1.0.Gandiva.Expression

    constructor(config?: Expression.ConstructorProperties) 
    constructor(root_node: Node, result_field: Arrow.Field) 
    static new(root_node: Node, result_field: Arrow.Field): Expression
    _init(config?: Expression.ConstructorProperties): void
}

export module FieldNode {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.FieldNode

        field?: Arrow.Field | null
    }

}

export interface FieldNode {

    // Own properties of Gandiva-1.0.Gandiva.FieldNode

    readonly field: Arrow.Field

    // Own fields of Gandiva-1.0.Gandiva.FieldNode

    parent_instance: Node & GObject.Object

    // Class property signals of Gandiva-1.0.Gandiva.FieldNode

    connect(sigName: "notify::field", callback: (($obj: FieldNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::field", callback: (($obj: FieldNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::field", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: FieldNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: FieldNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: FieldNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: FieldNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FieldNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.FieldNode

    static name: string
    static $gtype: GObject.GType<FieldNode>

    // Constructors of Gandiva-1.0.Gandiva.FieldNode

    constructor(config?: FieldNode.ConstructorProperties) 
    constructor(field: Arrow.Field) 
    static new(field: Arrow.Field): FieldNode
    _init(config?: FieldNode.ConstructorProperties): void
}

export module FloatLiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface FloatLiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.FloatLiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.FloatLiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.FloatLiteralNode

    connect(sigName: "notify::node", callback: (($obj: FloatLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: FloatLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: FloatLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: FloatLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FloatLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.FloatLiteralNode

    static name: string
    static $gtype: GObject.GType<FloatLiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.FloatLiteralNode

    constructor(config?: FloatLiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): FloatLiteralNode
    _init(config?: FloatLiteralNode.ConstructorProperties): void
}

export module FunctionNode {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.FunctionNode

        name?: string | null
    }

}

export interface FunctionNode {

    // Own properties of Gandiva-1.0.Gandiva.FunctionNode

    readonly name: string | null

    // Own fields of Gandiva-1.0.Gandiva.FunctionNode

    parent_instance: Node & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.FunctionNode

    get_parameters(): Node[]

    // Class property signals of Gandiva-1.0.Gandiva.FunctionNode

    connect(sigName: "notify::name", callback: (($obj: FunctionNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FunctionNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: FunctionNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: FunctionNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: FunctionNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: FunctionNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FunctionNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.FunctionNode

    static name: string
    static $gtype: GObject.GType<FunctionNode>

    // Constructors of Gandiva-1.0.Gandiva.FunctionNode

    constructor(config?: FunctionNode.ConstructorProperties) 
    constructor(name: string | null, parameters: Node[], return_type: Arrow.DataType) 
    static new(name: string | null, parameters: Node[], return_type: Arrow.DataType): FunctionNode
    _init(config?: FunctionNode.ConstructorProperties): void
}

export module FunctionRegistry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FunctionRegistry {

    // Own fields of Gandiva-1.0.Gandiva.FunctionRegistry

    parent_instance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.FunctionRegistry

    get_native_functions(): NativeFunction[]
    lookup(function_signature: FunctionSignature): NativeFunction | null

    // Class property signals of Gandiva-1.0.Gandiva.FunctionRegistry

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FunctionRegistry extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.FunctionRegistry

    static name: string
    static $gtype: GObject.GType<FunctionRegistry>

    // Constructors of Gandiva-1.0.Gandiva.FunctionRegistry

    constructor(config?: FunctionRegistry.ConstructorProperties) 
    constructor() 
    static new(): FunctionRegistry
    _init(config?: FunctionRegistry.ConstructorProperties): void
}

export module FunctionSignature {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.FunctionSignature

        function_signature?: any | null
    }

}

export interface FunctionSignature {

    // Own properties of Gandiva-1.0.Gandiva.FunctionSignature

    readonly function_signature: any

    // Own fields of Gandiva-1.0.Gandiva.FunctionSignature

    parent_instance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.FunctionSignature

    equal(other_function_signature: FunctionSignature): boolean
    get_base_name(): string | null
    get_param_types(): Arrow.DataType[]
    get_return_type(): Arrow.DataType
    to_string(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.FunctionSignature

    connect(sigName: "notify::function-signature", callback: (($obj: FunctionSignature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::function-signature", callback: (($obj: FunctionSignature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::function-signature", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FunctionSignature extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.FunctionSignature

    static name: string
    static $gtype: GObject.GType<FunctionSignature>

    // Constructors of Gandiva-1.0.Gandiva.FunctionSignature

    constructor(config?: FunctionSignature.ConstructorProperties) 
    constructor(base_name: string | null, parameter_types: Arrow.DataType[], return_type: Arrow.DataType) 
    static new(base_name: string | null, parameter_types: Arrow.DataType[], return_type: Arrow.DataType): FunctionSignature
    _init(config?: FunctionSignature.ConstructorProperties): void
}

export module IfNode {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.IfNode

        condition_node?: Node | null
        else_node?: Node | null
        then_node?: Node | null
    }

}

export interface IfNode {

    // Own properties of Gandiva-1.0.Gandiva.IfNode

    readonly condition_node: Node
    readonly else_node: Node
    readonly then_node: Node

    // Own fields of Gandiva-1.0.Gandiva.IfNode

    parent_instance: Node & GObject.Object

    // Class property signals of Gandiva-1.0.Gandiva.IfNode

    connect(sigName: "notify::condition-node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition-node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition-node", ...args: any[]): void
    connect(sigName: "notify::else-node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::else-node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::else-node", ...args: any[]): void
    connect(sigName: "notify::then-node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::then-node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::then-node", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: IfNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IfNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.IfNode

    static name: string
    static $gtype: GObject.GType<IfNode>

    // Constructors of Gandiva-1.0.Gandiva.IfNode

    constructor(config?: IfNode.ConstructorProperties) 
    constructor(condition_node: Node, then_node: Node, else_node: Node, return_type: Arrow.DataType) 
    static new(condition_node: Node, then_node: Node, else_node: Node, return_type: Arrow.DataType): IfNode
    _init(config?: IfNode.ConstructorProperties): void
}

export module Int16LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface Int16LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.Int16LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Int16LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int16LiteralNode

    connect(sigName: "notify::node", callback: (($obj: Int16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Int16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: Int16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: Int16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int16LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int16LiteralNode

    static name: string
    static $gtype: GObject.GType<Int16LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.Int16LiteralNode

    constructor(config?: Int16LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int16LiteralNode
    _init(config?: Int16LiteralNode.ConstructorProperties): void
}

export module Int32LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface Int32LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.Int32LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Int32LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int32LiteralNode

    connect(sigName: "notify::node", callback: (($obj: Int32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Int32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: Int32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: Int32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int32LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int32LiteralNode

    static name: string
    static $gtype: GObject.GType<Int32LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.Int32LiteralNode

    constructor(config?: Int32LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int32LiteralNode
    _init(config?: Int32LiteralNode.ConstructorProperties): void
}

export module Int64LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface Int64LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.Int64LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Int64LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int64LiteralNode

    connect(sigName: "notify::node", callback: (($obj: Int64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Int64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: Int64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: Int64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int64LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int64LiteralNode

    static name: string
    static $gtype: GObject.GType<Int64LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.Int64LiteralNode

    constructor(config?: Int64LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int64LiteralNode
    _init(config?: Int64LiteralNode.ConstructorProperties): void
}

export module Int8LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface Int8LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.Int8LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Int8LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int8LiteralNode

    connect(sigName: "notify::node", callback: (($obj: Int8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Int8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: Int8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: Int8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int8LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int8LiteralNode

    static name: string
    static $gtype: GObject.GType<Int8LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.Int8LiteralNode

    constructor(config?: Int8LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int8LiteralNode
    _init(config?: Int8LiteralNode.ConstructorProperties): void
}

export module LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {
    }

}

export interface LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.LiteralNode

    parent_instance: Node & GObject.Object

    // Class property signals of Gandiva-1.0.Gandiva.LiteralNode

    connect(sigName: "notify::node", callback: (($obj: LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LiteralNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.LiteralNode

    static name: string
    static $gtype: GObject.GType<LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.LiteralNode

    constructor(config?: LiteralNode.ConstructorProperties) 
    _init(config?: LiteralNode.ConstructorProperties): void
}

export module NativeFunction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.NativeFunction

        native_function?: any | null
    }

}

export interface NativeFunction {

    // Own properties of Gandiva-1.0.Gandiva.NativeFunction

    readonly native_function: any

    // Own fields of Gandiva-1.0.Gandiva.NativeFunction

    parent_instance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.NativeFunction

    can_return_errors(): boolean
    equal(other_native_function: NativeFunction): boolean
    get_result_nullable_type(): ResultNullableType
    get_signatures(): FunctionSignature[]
    need_context(): boolean
    need_function_holder(): boolean
    to_string(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.NativeFunction

    connect(sigName: "notify::native-function", callback: (($obj: NativeFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-function", callback: (($obj: NativeFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-function", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NativeFunction extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.NativeFunction

    static name: string
    static $gtype: GObject.GType<NativeFunction>

    // Constructors of Gandiva-1.0.Gandiva.NativeFunction

    constructor(config?: NativeFunction.ConstructorProperties) 
    _init(config?: NativeFunction.ConstructorProperties): void
}

export module Node {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.Node

        node?: any | null
        return_type?: Arrow.DataType | null
    }

}

export interface Node {

    // Own properties of Gandiva-1.0.Gandiva.Node

    readonly node: any
    readonly return_type: Arrow.DataType

    // Own fields of Gandiva-1.0.Gandiva.Node

    parent_instance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Node

    to_string(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.Node

    connect(sigName: "notify::node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Node extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of Gandiva-1.0.Gandiva.Node

    constructor(config?: Node.ConstructorProperties) 
    _init(config?: Node.ConstructorProperties): void
}

export module NullLiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface NullLiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.NullLiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Class property signals of Gandiva-1.0.Gandiva.NullLiteralNode

    connect(sigName: "notify::node", callback: (($obj: NullLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: NullLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: NullLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: NullLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NullLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.NullLiteralNode

    static name: string
    static $gtype: GObject.GType<NullLiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.NullLiteralNode

    constructor(config?: NullLiteralNode.ConstructorProperties) 
    constructor(return_type: Arrow.DataType) 
    static new(return_type: Arrow.DataType): NullLiteralNode
    _init(config?: NullLiteralNode.ConstructorProperties): void
}

export module OrNode {

    // Constructor properties interface

    export interface ConstructorProperties extends BooleanNode.ConstructorProperties {
    }

}

export interface OrNode {

    // Own fields of Gandiva-1.0.Gandiva.OrNode

    parent_instance: BooleanNode & Node & GObject.Object & GObject.Object

    // Class property signals of Gandiva-1.0.Gandiva.OrNode

    connect(sigName: "notify::node", callback: (($obj: OrNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: OrNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: OrNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: OrNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OrNode extends BooleanNode {

    // Own properties of Gandiva-1.0.Gandiva.OrNode

    static name: string
    static $gtype: GObject.GType<OrNode>

    // Constructors of Gandiva-1.0.Gandiva.OrNode

    constructor(config?: OrNode.ConstructorProperties) 
    constructor(children: Node[]) 
    static new(children: Node[]): OrNode
    _init(config?: OrNode.ConstructorProperties): void
}

export module Projector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.Projector

        projector?: any | null
    }

}

export interface Projector {

    // Own properties of Gandiva-1.0.Gandiva.Projector

    readonly projector: any

    // Own fields of Gandiva-1.0.Gandiva.Projector

    parent_instance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Projector

    evaluate(record_batch: Arrow.RecordBatch): Arrow.Array[] | null

    // Class property signals of Gandiva-1.0.Gandiva.Projector

    connect(sigName: "notify::projector", callback: (($obj: Projector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projector", callback: (($obj: Projector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projector", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Projector extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.Projector

    static name: string
    static $gtype: GObject.GType<Projector>

    // Constructors of Gandiva-1.0.Gandiva.Projector

    constructor(config?: Projector.ConstructorProperties) 
    constructor(schema: Arrow.Schema, expressions: Expression[]) 
    static new(schema: Arrow.Schema, expressions: Expression[]): Projector
    _init(config?: Projector.ConstructorProperties): void
}

export module StringLiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface StringLiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.StringLiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.StringLiteralNode

    get_value(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.StringLiteralNode

    connect(sigName: "notify::node", callback: (($obj: StringLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StringLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: StringLiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: StringLiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StringLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.StringLiteralNode

    static name: string
    static $gtype: GObject.GType<StringLiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.StringLiteralNode

    constructor(config?: StringLiteralNode.ConstructorProperties) 
    constructor(value: string | null) 
    static new(value: string | null): StringLiteralNode
    _init(config?: StringLiteralNode.ConstructorProperties): void
}

export module UInt16LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface UInt16LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.UInt16LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.UInt16LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt16LiteralNode

    connect(sigName: "notify::node", callback: (($obj: UInt16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: UInt16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: UInt16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: UInt16LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt16LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt16LiteralNode

    static name: string
    static $gtype: GObject.GType<UInt16LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.UInt16LiteralNode

    constructor(config?: UInt16LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt16LiteralNode
    _init(config?: UInt16LiteralNode.ConstructorProperties): void
}

export module UInt32LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface UInt32LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.UInt32LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.UInt32LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt32LiteralNode

    connect(sigName: "notify::node", callback: (($obj: UInt32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: UInt32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: UInt32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: UInt32LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt32LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt32LiteralNode

    static name: string
    static $gtype: GObject.GType<UInt32LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.UInt32LiteralNode

    constructor(config?: UInt32LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt32LiteralNode
    _init(config?: UInt32LiteralNode.ConstructorProperties): void
}

export module UInt64LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface UInt64LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.UInt64LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.UInt64LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt64LiteralNode

    connect(sigName: "notify::node", callback: (($obj: UInt64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: UInt64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: UInt64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: UInt64LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt64LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt64LiteralNode

    static name: string
    static $gtype: GObject.GType<UInt64LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.UInt64LiteralNode

    constructor(config?: UInt64LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt64LiteralNode
    _init(config?: UInt64LiteralNode.ConstructorProperties): void
}

export module UInt8LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface UInt8LiteralNode {

    // Own fields of Gandiva-1.0.Gandiva.UInt8LiteralNode

    parent_instance: LiteralNode & Node & GObject.Object & GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.UInt8LiteralNode

    get_value(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt8LiteralNode

    connect(sigName: "notify::node", callback: (($obj: UInt8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: UInt8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (($obj: UInt8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::return-type", callback: (($obj: UInt8LiteralNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt8LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt8LiteralNode

    static name: string
    static $gtype: GObject.GType<UInt8LiteralNode>

    // Constructors of Gandiva-1.0.Gandiva.UInt8LiteralNode

    constructor(config?: UInt8LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt8LiteralNode
    _init(config?: UInt8LiteralNode.ConstructorProperties): void
}

export interface AndNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.AndNodeClass

    parent_class: BooleanNodeClass
}

export abstract class AndNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.AndNodeClass

    static name: string
}

export interface BinaryLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.BinaryLiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class BinaryLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.BinaryLiteralNodeClass

    static name: string
}

export interface BooleanLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.BooleanLiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class BooleanLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.BooleanLiteralNodeClass

    static name: string
}

export interface BooleanNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.BooleanNodeClass

    parent_class: NodeClass
}

export abstract class BooleanNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.BooleanNodeClass

    static name: string
}

export interface DoubleLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.DoubleLiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class DoubleLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.DoubleLiteralNodeClass

    static name: string
}

export interface ExpressionClass {

    // Own fields of Gandiva-1.0.Gandiva.ExpressionClass

    parent_class: GObject.ObjectClass
}

export abstract class ExpressionClass {

    // Own properties of Gandiva-1.0.Gandiva.ExpressionClass

    static name: string
}

export interface FieldNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.FieldNodeClass

    parent_class: NodeClass
}

export abstract class FieldNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.FieldNodeClass

    static name: string
}

export interface FloatLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.FloatLiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class FloatLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.FloatLiteralNodeClass

    static name: string
}

export interface FunctionNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.FunctionNodeClass

    parent_class: NodeClass
}

export abstract class FunctionNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.FunctionNodeClass

    static name: string
}

export interface FunctionRegistryClass {

    // Own fields of Gandiva-1.0.Gandiva.FunctionRegistryClass

    parent_class: GObject.ObjectClass
}

export abstract class FunctionRegistryClass {

    // Own properties of Gandiva-1.0.Gandiva.FunctionRegistryClass

    static name: string
}

export interface FunctionSignatureClass {

    // Own fields of Gandiva-1.0.Gandiva.FunctionSignatureClass

    parent_class: GObject.ObjectClass
}

export abstract class FunctionSignatureClass {

    // Own properties of Gandiva-1.0.Gandiva.FunctionSignatureClass

    static name: string
}

export interface IfNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.IfNodeClass

    parent_class: NodeClass
}

export abstract class IfNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.IfNodeClass

    static name: string
}

export interface Int16LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int16LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class Int16LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int16LiteralNodeClass

    static name: string
}

export interface Int32LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int32LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class Int32LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int32LiteralNodeClass

    static name: string
}

export interface Int64LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int64LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class Int64LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int64LiteralNodeClass

    static name: string
}

export interface Int8LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int8LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class Int8LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int8LiteralNodeClass

    static name: string
}

export interface LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.LiteralNodeClass

    parent_class: NodeClass
}

export abstract class LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.LiteralNodeClass

    static name: string
}

export interface NativeFunctionClass {

    // Own fields of Gandiva-1.0.Gandiva.NativeFunctionClass

    parent_class: GObject.ObjectClass
}

export abstract class NativeFunctionClass {

    // Own properties of Gandiva-1.0.Gandiva.NativeFunctionClass

    static name: string
}

export interface NodeClass {

    // Own fields of Gandiva-1.0.Gandiva.NodeClass

    parent_class: GObject.ObjectClass
}

export abstract class NodeClass {

    // Own properties of Gandiva-1.0.Gandiva.NodeClass

    static name: string
}

export interface NullLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.NullLiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class NullLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.NullLiteralNodeClass

    static name: string
}

export interface OrNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.OrNodeClass

    parent_class: BooleanNodeClass
}

export abstract class OrNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.OrNodeClass

    static name: string
}

export interface ProjectorClass {

    // Own fields of Gandiva-1.0.Gandiva.ProjectorClass

    parent_class: GObject.ObjectClass
}

export abstract class ProjectorClass {

    // Own properties of Gandiva-1.0.Gandiva.ProjectorClass

    static name: string
}

export interface StringLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.StringLiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class StringLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.StringLiteralNodeClass

    static name: string
}

export interface UInt16LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt16LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class UInt16LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt16LiteralNodeClass

    static name: string
}

export interface UInt32LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt32LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class UInt32LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt32LiteralNodeClass

    static name: string
}

export interface UInt64LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt64LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class UInt64LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt64LiteralNodeClass

    static name: string
}

export interface UInt8LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt8LiteralNodeClass

    parent_class: LiteralNodeClass
}

export abstract class UInt8LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt8LiteralNodeClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END