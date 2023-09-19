
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gandiva-1.0-import.d.ts';
    
/**
 * Gandiva-1.0
 */

import type Arrow from '@girs/node-arrow-1.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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

    // Own properties of Gandiva-1.0.Gandiva.AndNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.AndNode

    parentInstance: any

    // Class property signals of Gandiva-1.0.Gandiva.AndNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AndNode extends BooleanNode {

    // Own properties of Gandiva-1.0.Gandiva.AndNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.BinaryLiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.BinaryLiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.BinaryLiteralNode

    getValue(): any

    // Class property signals of Gandiva-1.0.Gandiva.BinaryLiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BinaryLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.BinaryLiteralNode

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.BinaryLiteralNode

    constructor(config?: BinaryLiteralNode.ConstructorProperties) 
    constructor(value: number[]) 
    static new(value: number[]): BinaryLiteralNode
    static newBytes(value: any): BinaryLiteralNode
    _init(config?: BinaryLiteralNode.ConstructorProperties): void
}

export module BooleanLiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface BooleanLiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.BooleanLiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.BooleanLiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.BooleanLiteralNode

    getValue(): boolean

    // Class property signals of Gandiva-1.0.Gandiva.BooleanLiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BooleanLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.BooleanLiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.BooleanNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.BooleanNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.BooleanNode

    getChildren(): Node[]

    // Class property signals of Gandiva-1.0.Gandiva.BooleanNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BooleanNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.BooleanNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.DoubleLiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.DoubleLiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.DoubleLiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.DoubleLiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DoubleLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.DoubleLiteralNode

    static name: string

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
        resultField?: Arrow.Field | null
        rootNode?: Node | null
    }

}

export interface Expression {

    // Own properties of Gandiva-1.0.Gandiva.Expression

    readonly expression: any
    readonly resultField: Arrow.Field
    readonly rootNode: Node
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.Expression

    parentInstance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Expression

    toString(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.Expression

    connect(sigName: "notify::expression", callback: (...args: any[]) => void): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::result-field", callback: (...args: any[]) => void): number
    on(sigName: "notify::result-field", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::result-field", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::result-field", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::result-field", ...args: any[]): void
    connect(sigName: "notify::root-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-node", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Expression extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.Expression

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.Expression

    constructor(config?: Expression.ConstructorProperties) 
    constructor(rootNode: Node, resultField: Arrow.Field) 
    static new(rootNode: Node, resultField: Arrow.Field): Expression
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
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.FieldNode

    parentInstance: any

    // Class property signals of Gandiva-1.0.Gandiva.FieldNode

    connect(sigName: "notify::field", callback: (...args: any[]) => void): number
    on(sigName: "notify::field", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::field", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::field", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::field", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FieldNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.FieldNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.FloatLiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.FloatLiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.FloatLiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.FloatLiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FloatLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.FloatLiteralNode

    static name: string

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
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.FunctionNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.FunctionNode

    getParameters(): Node[]

    // Class property signals of Gandiva-1.0.Gandiva.FunctionNode

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FunctionNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.FunctionNode

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.FunctionNode

    constructor(config?: FunctionNode.ConstructorProperties) 
    constructor(name: string | null, parameters: Node[], returnType: Arrow.DataType) 
    static new(name: string | null, parameters: Node[], returnType: Arrow.DataType): FunctionNode
    _init(config?: FunctionNode.ConstructorProperties): void
}

export module FunctionRegistry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FunctionRegistry {

    // Own properties of Gandiva-1.0.Gandiva.FunctionRegistry

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.FunctionRegistry

    parentInstance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.FunctionRegistry

    getNativeFunctions(): NativeFunction[]
    lookup(functionSignature: FunctionSignature): NativeFunction | null

    // Class property signals of Gandiva-1.0.Gandiva.FunctionRegistry

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
    disconnect(id: number): void
}

export class FunctionRegistry extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.FunctionRegistry

    static name: string

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

        functionSignature?: any | null
    }

}

export interface FunctionSignature {

    // Own properties of Gandiva-1.0.Gandiva.FunctionSignature

    readonly functionSignature: any
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.FunctionSignature

    parentInstance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.FunctionSignature

    equal(otherFunctionSignature: FunctionSignature): boolean
    getBaseName(): string | null
    getParamTypes(): Arrow.DataType[]
    getReturnType(): Arrow.DataType
    toString(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.FunctionSignature

    connect(sigName: "notify::function-signature", callback: (...args: any[]) => void): number
    on(sigName: "notify::function-signature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::function-signature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::function-signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::function-signature", ...args: any[]): void
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
    disconnect(id: number): void
}

export class FunctionSignature extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.FunctionSignature

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.FunctionSignature

    constructor(config?: FunctionSignature.ConstructorProperties) 
    constructor(baseName: string | null, parameterTypes: Arrow.DataType[], returnType: Arrow.DataType) 
    static new(baseName: string | null, parameterTypes: Arrow.DataType[], returnType: Arrow.DataType): FunctionSignature
    _init(config?: FunctionSignature.ConstructorProperties): void
}

export module IfNode {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.IfNode

        conditionNode?: Node | null
        elseNode?: Node | null
        thenNode?: Node | null
    }

}

export interface IfNode {

    // Own properties of Gandiva-1.0.Gandiva.IfNode

    readonly conditionNode: Node
    readonly elseNode: Node
    readonly thenNode: Node
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.IfNode

    parentInstance: any

    // Class property signals of Gandiva-1.0.Gandiva.IfNode

    connect(sigName: "notify::condition-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::condition-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::condition-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::condition-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::condition-node", ...args: any[]): void
    connect(sigName: "notify::else-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::else-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::else-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::else-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::else-node", ...args: any[]): void
    connect(sigName: "notify::then-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::then-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::then-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::then-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::then-node", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IfNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.IfNode

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.IfNode

    constructor(config?: IfNode.ConstructorProperties) 
    constructor(conditionNode: Node, thenNode: Node, elseNode: Node, returnType: Arrow.DataType) 
    static new(conditionNode: Node, thenNode: Node, elseNode: Node, returnType: Arrow.DataType): IfNode
    _init(config?: IfNode.ConstructorProperties): void
}

export module Int16LiteralNode {

    // Constructor properties interface

    export interface ConstructorProperties extends LiteralNode.ConstructorProperties {
    }

}

export interface Int16LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int16LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.Int16LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.Int16LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int16LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int16LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int16LiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.Int32LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.Int32LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.Int32LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int32LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int32LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int32LiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.Int64LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.Int64LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.Int64LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int64LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int64LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int64LiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.Int8LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.Int8LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.Int8LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.Int8LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int8LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.Int8LiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.LiteralNode

    parentInstance: any

    // Class property signals of Gandiva-1.0.Gandiva.LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LiteralNode extends Node {

    // Own properties of Gandiva-1.0.Gandiva.LiteralNode

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.LiteralNode

    constructor(config?: LiteralNode.ConstructorProperties) 
    _init(config?: LiteralNode.ConstructorProperties): void
}

export module NativeFunction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.NativeFunction

        nativeFunction?: any | null
    }

}

export interface NativeFunction {

    // Own properties of Gandiva-1.0.Gandiva.NativeFunction

    readonly nativeFunction: any
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.NativeFunction

    parentInstance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.NativeFunction

    canReturnErrors(): boolean
    equal(otherNativeFunction: NativeFunction): boolean
    getResultNullableType(): ResultNullableType
    getSignatures(): FunctionSignature[]
    needContext(): boolean
    needFunctionHolder(): boolean
    toString(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.NativeFunction

    connect(sigName: "notify::native-function", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-function", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-function", ...args: any[]): void
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
    disconnect(id: number): void
}

export class NativeFunction extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.NativeFunction

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.NativeFunction

    constructor(config?: NativeFunction.ConstructorProperties) 
    _init(config?: NativeFunction.ConstructorProperties): void
}

export module Node {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gandiva-1.0.Gandiva.Node

        node?: any | null
        returnType?: Arrow.DataType | null
    }

}

export interface Node {

    // Own properties of Gandiva-1.0.Gandiva.Node

    readonly node: any
    readonly returnType: Arrow.DataType
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.Node

    parentInstance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Node

    toString(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.Node

    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Node extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.Node

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.NullLiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.NullLiteralNode

    parentInstance: any

    // Class property signals of Gandiva-1.0.Gandiva.NullLiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NullLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.NullLiteralNode

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.NullLiteralNode

    constructor(config?: NullLiteralNode.ConstructorProperties) 
    constructor(returnType: Arrow.DataType) 
    static new(returnType: Arrow.DataType): NullLiteralNode
    _init(config?: NullLiteralNode.ConstructorProperties): void
}

export module OrNode {

    // Constructor properties interface

    export interface ConstructorProperties extends BooleanNode.ConstructorProperties {
    }

}

export interface OrNode {

    // Own properties of Gandiva-1.0.Gandiva.OrNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.OrNode

    parentInstance: any

    // Class property signals of Gandiva-1.0.Gandiva.OrNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OrNode extends BooleanNode {

    // Own properties of Gandiva-1.0.Gandiva.OrNode

    static name: string

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
    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.Projector

    parentInstance: GObject.Object

    // Owm methods of Gandiva-1.0.Gandiva.Projector

    evaluate(recordBatch: Arrow.RecordBatch): Arrow.Array[] | null

    // Class property signals of Gandiva-1.0.Gandiva.Projector

    connect(sigName: "notify::projector", callback: (...args: any[]) => void): number
    on(sigName: "notify::projector", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projector", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projector", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Projector extends GObject.Object {

    // Own properties of Gandiva-1.0.Gandiva.Projector

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.StringLiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.StringLiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.StringLiteralNode

    getValue(): string | null

    // Class property signals of Gandiva-1.0.Gandiva.StringLiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StringLiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.StringLiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.UInt16LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.UInt16LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.UInt16LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt16LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt16LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt16LiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.UInt32LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.UInt32LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.UInt32LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt32LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt32LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt32LiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.UInt64LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.UInt64LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.UInt64LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt64LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt64LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt64LiteralNode

    static name: string

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

    // Own properties of Gandiva-1.0.Gandiva.UInt8LiteralNode

    __gtype__: number

    // Own fields of Gandiva-1.0.Gandiva.UInt8LiteralNode

    parentInstance: any

    // Owm methods of Gandiva-1.0.Gandiva.UInt8LiteralNode

    getValue(): number

    // Class property signals of Gandiva-1.0.Gandiva.UInt8LiteralNode

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::return-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::return-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::return-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::return-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UInt8LiteralNode extends LiteralNode {

    // Own properties of Gandiva-1.0.Gandiva.UInt8LiteralNode

    static name: string

    // Constructors of Gandiva-1.0.Gandiva.UInt8LiteralNode

    constructor(config?: UInt8LiteralNode.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt8LiteralNode
    _init(config?: UInt8LiteralNode.ConstructorProperties): void
}

export interface AndNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.AndNodeClass

    parentClass: BooleanNodeClass
}

export abstract class AndNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.AndNodeClass

    static name: string
}

export interface BinaryLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.BinaryLiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class BinaryLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.BinaryLiteralNodeClass

    static name: string
}

export interface BooleanLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.BooleanLiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class BooleanLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.BooleanLiteralNodeClass

    static name: string
}

export interface BooleanNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.BooleanNodeClass

    parentClass: NodeClass
}

export abstract class BooleanNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.BooleanNodeClass

    static name: string
}

export interface DoubleLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.DoubleLiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class DoubleLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.DoubleLiteralNodeClass

    static name: string
}

export interface ExpressionClass {

    // Own fields of Gandiva-1.0.Gandiva.ExpressionClass

    parentClass: GObject.ObjectClass
}

export abstract class ExpressionClass {

    // Own properties of Gandiva-1.0.Gandiva.ExpressionClass

    static name: string
}

export interface FieldNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.FieldNodeClass

    parentClass: NodeClass
}

export abstract class FieldNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.FieldNodeClass

    static name: string
}

export interface FloatLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.FloatLiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class FloatLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.FloatLiteralNodeClass

    static name: string
}

export interface FunctionNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.FunctionNodeClass

    parentClass: NodeClass
}

export abstract class FunctionNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.FunctionNodeClass

    static name: string
}

export interface FunctionRegistryClass {

    // Own fields of Gandiva-1.0.Gandiva.FunctionRegistryClass

    parentClass: GObject.ObjectClass
}

export abstract class FunctionRegistryClass {

    // Own properties of Gandiva-1.0.Gandiva.FunctionRegistryClass

    static name: string
}

export interface FunctionSignatureClass {

    // Own fields of Gandiva-1.0.Gandiva.FunctionSignatureClass

    parentClass: GObject.ObjectClass
}

export abstract class FunctionSignatureClass {

    // Own properties of Gandiva-1.0.Gandiva.FunctionSignatureClass

    static name: string
}

export interface IfNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.IfNodeClass

    parentClass: NodeClass
}

export abstract class IfNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.IfNodeClass

    static name: string
}

export interface Int16LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int16LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class Int16LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int16LiteralNodeClass

    static name: string
}

export interface Int32LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int32LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class Int32LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int32LiteralNodeClass

    static name: string
}

export interface Int64LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int64LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class Int64LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int64LiteralNodeClass

    static name: string
}

export interface Int8LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.Int8LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class Int8LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.Int8LiteralNodeClass

    static name: string
}

export interface LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.LiteralNodeClass

    parentClass: NodeClass
}

export abstract class LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.LiteralNodeClass

    static name: string
}

export interface NativeFunctionClass {

    // Own fields of Gandiva-1.0.Gandiva.NativeFunctionClass

    parentClass: GObject.ObjectClass
}

export abstract class NativeFunctionClass {

    // Own properties of Gandiva-1.0.Gandiva.NativeFunctionClass

    static name: string
}

export interface NodeClass {

    // Own fields of Gandiva-1.0.Gandiva.NodeClass

    parentClass: GObject.ObjectClass
}

export abstract class NodeClass {

    // Own properties of Gandiva-1.0.Gandiva.NodeClass

    static name: string
}

export interface NullLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.NullLiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class NullLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.NullLiteralNodeClass

    static name: string
}

export interface OrNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.OrNodeClass

    parentClass: BooleanNodeClass
}

export abstract class OrNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.OrNodeClass

    static name: string
}

export interface ProjectorClass {

    // Own fields of Gandiva-1.0.Gandiva.ProjectorClass

    parentClass: GObject.ObjectClass
}

export abstract class ProjectorClass {

    // Own properties of Gandiva-1.0.Gandiva.ProjectorClass

    static name: string
}

export interface StringLiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.StringLiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class StringLiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.StringLiteralNodeClass

    static name: string
}

export interface UInt16LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt16LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class UInt16LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt16LiteralNodeClass

    static name: string
}

export interface UInt32LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt32LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class UInt32LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt32LiteralNodeClass

    static name: string
}

export interface UInt64LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt64LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class UInt64LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt64LiteralNodeClass

    static name: string
}

export interface UInt8LiteralNodeClass {

    // Own fields of Gandiva-1.0.Gandiva.UInt8LiteralNodeClass

    parentClass: LiteralNodeClass
}

export abstract class UInt8LiteralNodeClass {

    // Own properties of Gandiva-1.0.Gandiva.UInt8LiteralNodeClass

    static name: string
}

// END