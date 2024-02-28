/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gandiva-1.0-ambient.d.ts';
import './gandiva-1.0-import.d.ts';
/**
 * Gandiva-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
    }

    class AndNode extends BooleanNode {
        // Constructors of Gandiva-1.0.AndNode

        static ['new'](children: Node[]): AndNode;
    }

    module BinaryLiteralNode {
        // Constructor properties interface
    }

    class BinaryLiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.BinaryLiteralNode

        static ['new'](value: Uint8Array): BinaryLiteralNode;

        static new_bytes(value: GLib.Bytes): BinaryLiteralNode;

        // Owm methods of Gandiva-1.0.BinaryLiteralNode

        get_value(): GLib.Bytes;
    }

    module BooleanLiteralNode {
        // Constructor properties interface
    }

    class BooleanLiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.BooleanLiteralNode

        static ['new'](value: boolean): BooleanLiteralNode;

        // Owm methods of Gandiva-1.0.BooleanLiteralNode

        get_value(): boolean;
    }

    module BooleanNode {
        // Constructor properties interface
    }

    class BooleanNode extends Node {
        // Owm methods of Gandiva-1.0.BooleanNode

        get_children(): Node[];
    }

    module DoubleLiteralNode {
        // Constructor properties interface
    }

    class DoubleLiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.DoubleLiteralNode

        static ['new'](value: number): DoubleLiteralNode;

        // Owm methods of Gandiva-1.0.DoubleLiteralNode

        get_value(): number;
    }

    module Expression {
        // Constructor properties interface
    }

    class Expression extends GObject.Object {
        // Own properties of Gandiva-1.0.Expression

        expression: any;
        result_field: Arrow.Field;
        resultField: Arrow.Field;
        root_node: Node;
        rootNode: Node;

        // Constructors of Gandiva-1.0.Expression

        static ['new'](root_node: Node, result_field: Arrow.Field): Expression;

        // Owm methods of Gandiva-1.0.Expression

        to_string(): string;
    }

    module FieldNode {
        // Constructor properties interface
    }

    class FieldNode extends Node {
        // Own properties of Gandiva-1.0.FieldNode

        field: Arrow.Field;

        // Constructors of Gandiva-1.0.FieldNode

        static ['new'](field: Arrow.Field): FieldNode;
    }

    module FloatLiteralNode {
        // Constructor properties interface
    }

    class FloatLiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.FloatLiteralNode

        static ['new'](value: number): FloatLiteralNode;

        // Owm methods of Gandiva-1.0.FloatLiteralNode

        get_value(): number;
    }

    module FunctionNode {
        // Constructor properties interface
    }

    class FunctionNode extends Node {
        // Own properties of Gandiva-1.0.FunctionNode

        name: string;

        // Constructors of Gandiva-1.0.FunctionNode

        static ['new'](name: string, parameters: Node[], return_type: Arrow.DataType): FunctionNode;

        // Owm methods of Gandiva-1.0.FunctionNode

        get_parameters(): Node[];
    }

    module FunctionRegistry {
        // Constructor properties interface
    }

    class FunctionRegistry extends GObject.Object {
        // Constructors of Gandiva-1.0.FunctionRegistry

        static ['new'](): FunctionRegistry;

        // Owm methods of Gandiva-1.0.FunctionRegistry

        get_native_functions(): NativeFunction[];
        lookup(function_signature: FunctionSignature): NativeFunction | null;
    }

    module FunctionSignature {
        // Constructor properties interface
    }

    class FunctionSignature extends GObject.Object {
        // Own properties of Gandiva-1.0.FunctionSignature

        function_signature: any;
        functionSignature: any;

        // Constructors of Gandiva-1.0.FunctionSignature

        static ['new'](
            base_name: string,
            parameter_types: Arrow.DataType[],
            return_type: Arrow.DataType,
        ): FunctionSignature;

        // Owm methods of Gandiva-1.0.FunctionSignature

        equal(other_function_signature: FunctionSignature): boolean;
        get_base_name(): string;
        get_param_types(): Arrow.DataType[];
        get_return_type(): Arrow.DataType;
        to_string(): string;
    }

    module IfNode {
        // Constructor properties interface
    }

    class IfNode extends Node {
        // Own properties of Gandiva-1.0.IfNode

        condition_node: Node;
        conditionNode: Node;
        else_node: Node;
        elseNode: Node;
        then_node: Node;
        thenNode: Node;

        // Constructors of Gandiva-1.0.IfNode

        static ['new'](condition_node: Node, then_node: Node, else_node: Node, return_type: Arrow.DataType): IfNode;
    }

    module Int16LiteralNode {
        // Constructor properties interface
    }

    class Int16LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.Int16LiteralNode

        static ['new'](value: number): Int16LiteralNode;

        // Owm methods of Gandiva-1.0.Int16LiteralNode

        get_value(): number;
    }

    module Int32LiteralNode {
        // Constructor properties interface
    }

    class Int32LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.Int32LiteralNode

        static ['new'](value: number): Int32LiteralNode;

        // Owm methods of Gandiva-1.0.Int32LiteralNode

        get_value(): number;
    }

    module Int64LiteralNode {
        // Constructor properties interface
    }

    class Int64LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.Int64LiteralNode

        static ['new'](value: number): Int64LiteralNode;

        // Owm methods of Gandiva-1.0.Int64LiteralNode

        get_value(): number;
    }

    module Int8LiteralNode {
        // Constructor properties interface
    }

    class Int8LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.Int8LiteralNode

        static ['new'](value: number): Int8LiteralNode;

        // Owm methods of Gandiva-1.0.Int8LiteralNode

        get_value(): number;
    }

    module LiteralNode {
        // Constructor properties interface
    }

    class LiteralNode extends Node {}

    module NativeFunction {
        // Constructor properties interface
    }

    class NativeFunction extends GObject.Object {
        // Own properties of Gandiva-1.0.NativeFunction

        native_function: any;
        nativeFunction: any;

        // Owm methods of Gandiva-1.0.NativeFunction

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
    }

    class Node extends GObject.Object {
        // Own properties of Gandiva-1.0.Node

        node: any;
        return_type: Arrow.DataType;
        returnType: Arrow.DataType;

        // Owm methods of Gandiva-1.0.Node

        to_string(): string;
    }

    module NullLiteralNode {
        // Constructor properties interface
    }

    class NullLiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.NullLiteralNode

        static ['new'](return_type: Arrow.DataType): NullLiteralNode;
    }

    module OrNode {
        // Constructor properties interface
    }

    class OrNode extends BooleanNode {
        // Constructors of Gandiva-1.0.OrNode

        static ['new'](children: Node[]): OrNode;
    }

    module Projector {
        // Constructor properties interface
    }

    class Projector extends GObject.Object {
        // Own properties of Gandiva-1.0.Projector

        projector: any;

        // Constructors of Gandiva-1.0.Projector

        static ['new'](schema: Arrow.Schema, expressions: Expression[]): Projector;

        // Owm methods of Gandiva-1.0.Projector

        evaluate(record_batch: Arrow.RecordBatch): Arrow.Array[] | null;
    }

    module StringLiteralNode {
        // Constructor properties interface
    }

    class StringLiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.StringLiteralNode

        static ['new'](value: string): StringLiteralNode;

        // Owm methods of Gandiva-1.0.StringLiteralNode

        get_value(): string;
    }

    module UInt16LiteralNode {
        // Constructor properties interface
    }

    class UInt16LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.UInt16LiteralNode

        static ['new'](value: number): UInt16LiteralNode;

        // Owm methods of Gandiva-1.0.UInt16LiteralNode

        get_value(): number;
    }

    module UInt32LiteralNode {
        // Constructor properties interface
    }

    class UInt32LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.UInt32LiteralNode

        static ['new'](value: number): UInt32LiteralNode;

        // Owm methods of Gandiva-1.0.UInt32LiteralNode

        get_value(): number;
    }

    module UInt64LiteralNode {
        // Constructor properties interface
    }

    class UInt64LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.UInt64LiteralNode

        static ['new'](value: number): UInt64LiteralNode;

        // Owm methods of Gandiva-1.0.UInt64LiteralNode

        get_value(): number;
    }

    module UInt8LiteralNode {
        // Constructor properties interface
    }

    class UInt8LiteralNode extends LiteralNode {
        // Constructors of Gandiva-1.0.UInt8LiteralNode

        static ['new'](value: number): UInt8LiteralNode;

        // Owm methods of Gandiva-1.0.UInt8LiteralNode

        get_value(): number;
    }

    class AndNodeClass {}

    class BinaryLiteralNodeClass {}

    class BooleanLiteralNodeClass {}

    class BooleanNodeClass {}

    class DoubleLiteralNodeClass {}

    class ExpressionClass {}

    class FieldNodeClass {}

    class FloatLiteralNodeClass {}

    class FunctionNodeClass {}

    class FunctionRegistryClass {}

    class FunctionSignatureClass {}

    class IfNodeClass {}

    class Int16LiteralNodeClass {}

    class Int32LiteralNodeClass {}

    class Int64LiteralNodeClass {}

    class Int8LiteralNodeClass {}

    class LiteralNodeClass {}

    class NativeFunctionClass {}

    class NodeClass {}

    class NullLiteralNodeClass {}

    class OrNodeClass {}

    class ProjectorClass {}

    class StringLiteralNodeClass {}

    class UInt16LiteralNodeClass {}

    class UInt32LiteralNodeClass {}

    class UInt64LiteralNodeClass {}

    class UInt8LiteralNodeClass {}

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
