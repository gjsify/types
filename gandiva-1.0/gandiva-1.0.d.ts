/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * Gandiva-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gandiva {
    /**
     * They are corresponding to `gandiva::ResultNullableType` values.
     */
    enum ResultNullableType {
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
    const VERSION_MAJOR: number;
    /**
     * The micro version.
     */
    const VERSION_MICRO: number;
    /**
     * The minor version.
     */
    const VERSION_MINOR: number;
    /**
     * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
     * for snapshot version.
     */
    const VERSION_TAG: string;
    module AndNode {
        // Constructor properties interface

        interface ConstructorProps extends BooleanNode.ConstructorProps {}
    }

    class AndNode extends BooleanNode {
        static $gtype: GObject.GType<AndNode>;

        // Constructors of Gandiva.AndNode

        constructor(properties?: Partial<AndNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](children: Node[]): AndNode;
    }

    module BinaryLiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class BinaryLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<BinaryLiteralNode>;

        // Constructors of Gandiva.BinaryLiteralNode

        constructor(properties?: Partial<BinaryLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Uint8Array | string): BinaryLiteralNode;

        static new_bytes(value: GLib.Bytes | Uint8Array): BinaryLiteralNode;

        // Own methods of Gandiva.BinaryLiteralNode

        get_value(): GLib.Bytes;
    }

    module BooleanLiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class BooleanLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<BooleanLiteralNode>;

        // Constructors of Gandiva.BooleanLiteralNode

        constructor(properties?: Partial<BooleanLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: boolean): BooleanLiteralNode;

        // Own methods of Gandiva.BooleanLiteralNode

        get_value(): boolean;
    }

    module BooleanNode {
        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {}
    }

    class BooleanNode extends Node {
        static $gtype: GObject.GType<BooleanNode>;

        // Constructors of Gandiva.BooleanNode

        constructor(properties?: Partial<BooleanNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gandiva.BooleanNode

        get_children(): Node[];
    }

    module DoubleLiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class DoubleLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<DoubleLiteralNode>;

        // Constructors of Gandiva.DoubleLiteralNode

        constructor(properties?: Partial<DoubleLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): DoubleLiteralNode;

        // Own methods of Gandiva.DoubleLiteralNode

        get_value(): number;
    }

    module Expression {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expression: any;
            result_field: Arrow.Field;
            resultField: Arrow.Field;
            root_node: Node;
            rootNode: Node;
        }
    }

    class Expression extends GObject.Object {
        static $gtype: GObject.GType<Expression>;

        // Own properties of Gandiva.Expression

        set expression(val: any);
        get result_field(): Arrow.Field;
        get resultField(): Arrow.Field;
        get root_node(): Node;
        get rootNode(): Node;

        // Constructors of Gandiva.Expression

        constructor(properties?: Partial<Expression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root_node: Node, result_field: Arrow.Field): Expression;

        // Own methods of Gandiva.Expression

        to_string(): string;
    }

    module FieldNode {
        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            field: Arrow.Field;
        }
    }

    class FieldNode extends Node {
        static $gtype: GObject.GType<FieldNode>;

        // Own properties of Gandiva.FieldNode

        get field(): Arrow.Field;

        // Constructors of Gandiva.FieldNode

        constructor(properties?: Partial<FieldNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](field: Arrow.Field): FieldNode;
    }

    module FloatLiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class FloatLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<FloatLiteralNode>;

        // Constructors of Gandiva.FloatLiteralNode

        constructor(properties?: Partial<FloatLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): FloatLiteralNode;

        // Own methods of Gandiva.FloatLiteralNode

        get_value(): number;
    }

    module FunctionNode {
        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            name: string;
        }
    }

    class FunctionNode extends Node {
        static $gtype: GObject.GType<FunctionNode>;

        // Own properties of Gandiva.FunctionNode

        get name(): string;

        // Constructors of Gandiva.FunctionNode

        constructor(properties?: Partial<FunctionNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, parameters: Node[], return_type: Arrow.DataType): FunctionNode;

        // Own methods of Gandiva.FunctionNode

        get_parameters(): Node[];
    }

    module FunctionRegistry {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FunctionRegistry extends GObject.Object {
        static $gtype: GObject.GType<FunctionRegistry>;

        // Constructors of Gandiva.FunctionRegistry

        constructor(properties?: Partial<FunctionRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FunctionRegistry;

        // Own methods of Gandiva.FunctionRegistry

        get_native_functions(): NativeFunction[];
        lookup(function_signature: FunctionSignature): NativeFunction | null;
    }

    module FunctionSignature {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            function_signature: any;
            functionSignature: any;
        }
    }

    class FunctionSignature extends GObject.Object {
        static $gtype: GObject.GType<FunctionSignature>;

        // Own properties of Gandiva.FunctionSignature

        set function_signature(val: any);
        set functionSignature(val: any);

        // Constructors of Gandiva.FunctionSignature

        constructor(properties?: Partial<FunctionSignature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            base_name: string,
            parameter_types: Arrow.DataType[],
            return_type: Arrow.DataType,
        ): FunctionSignature;

        // Own methods of Gandiva.FunctionSignature

        equal(other_function_signature: FunctionSignature): boolean;
        get_base_name(): string;
        get_param_types(): Arrow.DataType[];
        get_return_type(): Arrow.DataType;
        to_string(): string;
    }

    module IfNode {
        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            condition_node: Node;
            conditionNode: Node;
            else_node: Node;
            elseNode: Node;
            then_node: Node;
            thenNode: Node;
        }
    }

    class IfNode extends Node {
        static $gtype: GObject.GType<IfNode>;

        // Own properties of Gandiva.IfNode

        get condition_node(): Node;
        get conditionNode(): Node;
        get else_node(): Node;
        get elseNode(): Node;
        get then_node(): Node;
        get thenNode(): Node;

        // Constructors of Gandiva.IfNode

        constructor(properties?: Partial<IfNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](condition_node: Node, then_node: Node, else_node: Node, return_type: Arrow.DataType): IfNode;
    }

    module Int16LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int16LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int16LiteralNode>;

        // Constructors of Gandiva.Int16LiteralNode

        constructor(properties?: Partial<Int16LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int16LiteralNode;

        // Own methods of Gandiva.Int16LiteralNode

        get_value(): number;
    }

    module Int32LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int32LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int32LiteralNode>;

        // Constructors of Gandiva.Int32LiteralNode

        constructor(properties?: Partial<Int32LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int32LiteralNode;

        // Own methods of Gandiva.Int32LiteralNode

        get_value(): number;
    }

    module Int64LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int64LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int64LiteralNode>;

        // Constructors of Gandiva.Int64LiteralNode

        constructor(properties?: Partial<Int64LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int64LiteralNode;

        // Own methods of Gandiva.Int64LiteralNode

        get_value(): number;
    }

    module Int8LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int8LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int8LiteralNode>;

        // Constructors of Gandiva.Int8LiteralNode

        constructor(properties?: Partial<Int8LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int8LiteralNode;

        // Own methods of Gandiva.Int8LiteralNode

        get_value(): number;
    }

    module LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {}
    }

    class LiteralNode extends Node {
        static $gtype: GObject.GType<LiteralNode>;

        // Constructors of Gandiva.LiteralNode

        constructor(properties?: Partial<LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module NativeFunction {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            native_function: any;
            nativeFunction: any;
        }
    }

    class NativeFunction extends GObject.Object {
        static $gtype: GObject.GType<NativeFunction>;

        // Own properties of Gandiva.NativeFunction

        set native_function(val: any);
        set nativeFunction(val: any);

        // Constructors of Gandiva.NativeFunction

        constructor(properties?: Partial<NativeFunction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gandiva.NativeFunction

        can_return_errors(): boolean;
        equal(other_native_function: NativeFunction): boolean;
        get_result_nullable_type(): ResultNullableType;
        get_signatures(): FunctionSignature[];
        need_context(): boolean;
        need_function_holder(): boolean;
        to_string(): string;
    }

    module Node {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: any;
            return_type: Arrow.DataType;
            returnType: Arrow.DataType;
        }
    }

    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        // Own properties of Gandiva.Node

        set node(val: any);
        get return_type(): Arrow.DataType;
        get returnType(): Arrow.DataType;

        // Constructors of Gandiva.Node

        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gandiva.Node

        to_string(): string;
    }

    module NullLiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class NullLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<NullLiteralNode>;

        // Constructors of Gandiva.NullLiteralNode

        constructor(properties?: Partial<NullLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](return_type: Arrow.DataType): NullLiteralNode;
    }

    module OrNode {
        // Constructor properties interface

        interface ConstructorProps extends BooleanNode.ConstructorProps {}
    }

    class OrNode extends BooleanNode {
        static $gtype: GObject.GType<OrNode>;

        // Constructors of Gandiva.OrNode

        constructor(properties?: Partial<OrNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](children: Node[]): OrNode;
    }

    module Projector {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            projector: any;
        }
    }

    class Projector extends GObject.Object {
        static $gtype: GObject.GType<Projector>;

        // Own properties of Gandiva.Projector

        set projector(val: any);

        // Constructors of Gandiva.Projector

        constructor(properties?: Partial<Projector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Arrow.Schema, expressions: Expression[]): Projector;

        // Own methods of Gandiva.Projector

        evaluate(record_batch: Arrow.RecordBatch): Arrow.Array[] | null;
    }

    module StringLiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class StringLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<StringLiteralNode>;

        // Constructors of Gandiva.StringLiteralNode

        constructor(properties?: Partial<StringLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string): StringLiteralNode;

        // Own methods of Gandiva.StringLiteralNode

        get_value(): string;
    }

    module UInt16LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt16LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt16LiteralNode>;

        // Constructors of Gandiva.UInt16LiteralNode

        constructor(properties?: Partial<UInt16LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt16LiteralNode;

        // Own methods of Gandiva.UInt16LiteralNode

        get_value(): number;
    }

    module UInt32LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt32LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt32LiteralNode>;

        // Constructors of Gandiva.UInt32LiteralNode

        constructor(properties?: Partial<UInt32LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt32LiteralNode;

        // Own methods of Gandiva.UInt32LiteralNode

        get_value(): number;
    }

    module UInt64LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt64LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt64LiteralNode>;

        // Constructors of Gandiva.UInt64LiteralNode

        constructor(properties?: Partial<UInt64LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt64LiteralNode;

        // Own methods of Gandiva.UInt64LiteralNode

        get_value(): number;
    }

    module UInt8LiteralNode {
        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt8LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt8LiteralNode>;

        // Constructors of Gandiva.UInt8LiteralNode

        constructor(properties?: Partial<UInt8LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt8LiteralNode;

        // Own methods of Gandiva.UInt8LiteralNode

        get_value(): number;
    }

    type AndNodeClass = typeof AndNode;
    type BinaryLiteralNodeClass = typeof BinaryLiteralNode;
    type BooleanLiteralNodeClass = typeof BooleanLiteralNode;
    type BooleanNodeClass = typeof BooleanNode;
    type DoubleLiteralNodeClass = typeof DoubleLiteralNode;
    type ExpressionClass = typeof Expression;
    type FieldNodeClass = typeof FieldNode;
    type FloatLiteralNodeClass = typeof FloatLiteralNode;
    type FunctionNodeClass = typeof FunctionNode;
    type FunctionRegistryClass = typeof FunctionRegistry;
    type FunctionSignatureClass = typeof FunctionSignature;
    type IfNodeClass = typeof IfNode;
    type Int16LiteralNodeClass = typeof Int16LiteralNode;
    type Int32LiteralNodeClass = typeof Int32LiteralNode;
    type Int64LiteralNodeClass = typeof Int64LiteralNode;
    type Int8LiteralNodeClass = typeof Int8LiteralNode;
    type LiteralNodeClass = typeof LiteralNode;
    type NativeFunctionClass = typeof NativeFunction;
    type NodeClass = typeof Node;
    type NullLiteralNodeClass = typeof NullLiteralNode;
    type OrNodeClass = typeof OrNode;
    type ProjectorClass = typeof Projector;
    type StringLiteralNodeClass = typeof StringLiteralNode;
    type UInt16LiteralNodeClass = typeof UInt16LiteralNode;
    type UInt32LiteralNodeClass = typeof UInt32LiteralNode;
    type UInt64LiteralNodeClass = typeof UInt64LiteralNode;
    type UInt8LiteralNodeClass = typeof UInt8LiteralNode;
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

export default Gandiva;
// END
