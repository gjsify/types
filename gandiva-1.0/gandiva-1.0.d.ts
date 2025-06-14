/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gandiva {
    /**
     * Gandiva-1.0
     */

    /**
     * They are corresponding to `gandiva::ResultNullableType` values.
     */

    /**
     * They are corresponding to `gandiva::ResultNullableType` values.
     */
    export namespace ResultNullableType {
        export const $gtype: GObject.GType<ResultNullableType>;
    }

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
    namespace AndNode {
        // Signal signatures
        interface SignalSignatures extends BooleanNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BooleanNode.ConstructorProps {}
    }

    class AndNode extends BooleanNode {
        static $gtype: GObject.GType<AndNode>;
        declare static readonly __signalSignatures: AndNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AndNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](children: Node[]): AndNode;
    }

    namespace BinaryLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class BinaryLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<BinaryLiteralNode>;
        declare static readonly __signalSignatures: BinaryLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BinaryLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Uint8Array | string): BinaryLiteralNode;

        static new_bytes(value: GLib.Bytes | Uint8Array): BinaryLiteralNode;

        // Methods

        get_value(): GLib.Bytes;
    }

    namespace BooleanLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class BooleanLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<BooleanLiteralNode>;
        declare static readonly __signalSignatures: BooleanLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BooleanLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: boolean): BooleanLiteralNode;

        // Methods

        get_value(): boolean;
    }

    namespace BooleanNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {}
    }

    class BooleanNode extends Node {
        static $gtype: GObject.GType<BooleanNode>;
        declare static readonly __signalSignatures: BooleanNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BooleanNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_children(): Node[];
    }

    namespace DoubleLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class DoubleLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<DoubleLiteralNode>;
        declare static readonly __signalSignatures: DoubleLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DoubleLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): DoubleLiteralNode;

        // Methods

        get_value(): number;
    }

    namespace Expression {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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
        declare static readonly __signalSignatures: Expression.SignalSignatures;

        // Properties

        set expression(val: any);
        get result_field(): Arrow.Field;
        get resultField(): Arrow.Field;
        get root_node(): Node;
        get rootNode(): Node;

        // Constructors

        constructor(properties?: Partial<Expression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root_node: Node, result_field: Arrow.Field): Expression;

        // Methods

        to_string(): string;
    }

    namespace FieldNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            field: Arrow.Field;
        }
    }

    class FieldNode extends Node {
        static $gtype: GObject.GType<FieldNode>;
        declare static readonly __signalSignatures: FieldNode.SignalSignatures;

        // Properties

        get field(): Arrow.Field;

        // Constructors

        constructor(properties?: Partial<FieldNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](field: Arrow.Field): FieldNode;
    }

    namespace FloatLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class FloatLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<FloatLiteralNode>;
        declare static readonly __signalSignatures: FloatLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FloatLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): FloatLiteralNode;

        // Methods

        get_value(): number;
    }

    namespace FunctionNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            name: string;
        }
    }

    class FunctionNode extends Node {
        static $gtype: GObject.GType<FunctionNode>;
        declare static readonly __signalSignatures: FunctionNode.SignalSignatures;

        // Properties

        get name(): string;

        // Constructors

        constructor(properties?: Partial<FunctionNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, parameters: Node[], return_type: Arrow.DataType): FunctionNode;

        // Methods

        get_parameters(): Node[];
    }

    namespace FunctionRegistry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FunctionRegistry extends GObject.Object {
        static $gtype: GObject.GType<FunctionRegistry>;
        declare static readonly __signalSignatures: FunctionRegistry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FunctionRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FunctionRegistry;

        // Methods

        get_native_functions(): NativeFunction[];
        lookup(function_signature: FunctionSignature): NativeFunction | null;
    }

    namespace FunctionSignature {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            function_signature: any;
            functionSignature: any;
        }
    }

    class FunctionSignature extends GObject.Object {
        static $gtype: GObject.GType<FunctionSignature>;
        declare static readonly __signalSignatures: FunctionSignature.SignalSignatures;

        // Properties

        set function_signature(val: any);
        set functionSignature(val: any);

        // Constructors

        constructor(properties?: Partial<FunctionSignature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            base_name: string,
            parameter_types: Arrow.DataType[],
            return_type: Arrow.DataType,
        ): FunctionSignature;

        // Methods

        equal(other_function_signature: FunctionSignature): boolean;
        get_base_name(): string;
        get_param_types(): Arrow.DataType[];
        get_return_type(): Arrow.DataType;
        to_string(): string;
    }

    namespace IfNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {}

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
        declare static readonly __signalSignatures: IfNode.SignalSignatures;

        // Properties

        get condition_node(): Node;
        get conditionNode(): Node;
        get else_node(): Node;
        get elseNode(): Node;
        get then_node(): Node;
        get thenNode(): Node;

        // Constructors

        constructor(properties?: Partial<IfNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](condition_node: Node, then_node: Node, else_node: Node, return_type: Arrow.DataType): IfNode;
    }

    namespace Int16LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int16LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int16LiteralNode>;
        declare static readonly __signalSignatures: Int16LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int16LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int16LiteralNode;

        // Methods

        get_value(): number;
    }

    namespace Int32LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int32LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int32LiteralNode>;
        declare static readonly __signalSignatures: Int32LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int32LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int32LiteralNode;

        // Methods

        get_value(): number;
    }

    namespace Int64LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int64LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int64LiteralNode>;
        declare static readonly __signalSignatures: Int64LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int64LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int64LiteralNode;

        // Methods

        get_value(): number;
    }

    namespace Int8LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int8LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int8LiteralNode>;
        declare static readonly __signalSignatures: Int8LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int8LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int8LiteralNode;

        // Methods

        get_value(): number;
    }

    namespace LiteralNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {}
    }

    class LiteralNode extends Node {
        static $gtype: GObject.GType<LiteralNode>;
        declare static readonly __signalSignatures: LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace NativeFunction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            native_function: any;
            nativeFunction: any;
        }
    }

    class NativeFunction extends GObject.Object {
        static $gtype: GObject.GType<NativeFunction>;
        declare static readonly __signalSignatures: NativeFunction.SignalSignatures;

        // Properties

        set native_function(val: any);
        set nativeFunction(val: any);

        // Constructors

        constructor(properties?: Partial<NativeFunction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        can_return_errors(): boolean;
        equal(other_native_function: NativeFunction): boolean;
        get_result_nullable_type(): ResultNullableType;
        get_signatures(): FunctionSignature[];
        need_context(): boolean;
        need_function_holder(): boolean;
        to_string(): string;
    }

    namespace Node {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: any;
            return_type: Arrow.DataType;
            returnType: Arrow.DataType;
        }
    }

    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;
        declare static readonly __signalSignatures: Node.SignalSignatures;

        // Properties

        set node(val: any);
        get return_type(): Arrow.DataType;
        get returnType(): Arrow.DataType;

        // Constructors

        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        to_string(): string;
    }

    namespace NullLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class NullLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<NullLiteralNode>;
        declare static readonly __signalSignatures: NullLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NullLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](return_type: Arrow.DataType): NullLiteralNode;
    }

    namespace OrNode {
        // Signal signatures
        interface SignalSignatures extends BooleanNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BooleanNode.ConstructorProps {}
    }

    class OrNode extends BooleanNode {
        static $gtype: GObject.GType<OrNode>;
        declare static readonly __signalSignatures: OrNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OrNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](children: Node[]): OrNode;
    }

    namespace Projector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            projector: any;
        }
    }

    class Projector extends GObject.Object {
        static $gtype: GObject.GType<Projector>;
        declare static readonly __signalSignatures: Projector.SignalSignatures;

        // Properties

        set projector(val: any);

        // Constructors

        constructor(properties?: Partial<Projector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Arrow.Schema, expressions: Expression[]): Projector;

        // Methods

        evaluate(record_batch: Arrow.RecordBatch): Arrow.Array[] | null;
    }

    namespace StringLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class StringLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<StringLiteralNode>;
        declare static readonly __signalSignatures: StringLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StringLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string): StringLiteralNode;

        // Methods

        get_value(): string;
    }

    namespace UInt16LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt16LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt16LiteralNode>;
        declare static readonly __signalSignatures: UInt16LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt16LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt16LiteralNode;

        // Methods

        get_value(): number;
    }

    namespace UInt32LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt32LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt32LiteralNode>;
        declare static readonly __signalSignatures: UInt32LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt32LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt32LiteralNode;

        // Methods

        get_value(): number;
    }

    namespace UInt64LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt64LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt64LiteralNode>;
        declare static readonly __signalSignatures: UInt64LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt64LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt64LiteralNode;

        // Methods

        get_value(): number;
    }

    namespace UInt8LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt8LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt8LiteralNode>;
        declare static readonly __signalSignatures: UInt8LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt8LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt8LiteralNode;

        // Methods

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
