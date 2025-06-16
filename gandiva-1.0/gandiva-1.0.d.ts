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
        interface SignalSignatures extends BooleanNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends BooleanNode.ConstructorProps {}
    }

    class AndNode extends BooleanNode {
        static $gtype: GObject.GType<AndNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AndNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AndNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](children: Node[]): AndNode;

        // Signals

        connect<K extends keyof AndNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AndNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AndNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AndNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AndNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AndNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace BinaryLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class BinaryLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<BinaryLiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BinaryLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BinaryLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Uint8Array | string): BinaryLiteralNode;

        static new_bytes(value: GLib.Bytes | Uint8Array): BinaryLiteralNode;

        // Signals

        connect<K extends keyof BinaryLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BinaryLiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BinaryLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BinaryLiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BinaryLiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BinaryLiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): GLib.Bytes;
    }

    namespace BooleanLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class BooleanLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<BooleanLiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BooleanLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BooleanLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: boolean): BooleanLiteralNode;

        // Signals

        connect<K extends keyof BooleanLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BooleanLiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BooleanLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BooleanLiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BooleanLiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BooleanLiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): boolean;
    }

    namespace BooleanNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {}
    }

    class BooleanNode extends Node {
        static $gtype: GObject.GType<BooleanNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BooleanNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BooleanNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof BooleanNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BooleanNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BooleanNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BooleanNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BooleanNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BooleanNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_children(): Node[];
    }

    namespace DoubleLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class DoubleLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<DoubleLiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DoubleLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DoubleLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): DoubleLiteralNode;

        // Signals

        connect<K extends keyof DoubleLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DoubleLiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DoubleLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DoubleLiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DoubleLiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DoubleLiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace Expression {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::expression': (pspec: GObject.ParamSpec) => void;
            'notify::result-field': (pspec: GObject.ParamSpec) => void;
            'notify::root-node': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

        set expression(val: any);
        get result_field(): Arrow.Field;
        get resultField(): Arrow.Field;
        get root_node(): Node;
        get rootNode(): Node;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Expression.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Expression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root_node: Node, result_field: Arrow.Field): Expression;

        // Signals

        connect<K extends keyof Expression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Expression.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Expression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Expression.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Expression.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Expression.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        to_string(): string;
    }

    namespace FieldNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::field': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            field: Arrow.Field;
        }
    }

    class FieldNode extends Node {
        static $gtype: GObject.GType<FieldNode>;

        // Properties

        get field(): Arrow.Field;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FieldNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FieldNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](field: Arrow.Field): FieldNode;

        // Signals

        connect<K extends keyof FieldNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FieldNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FieldNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FieldNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FieldNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FieldNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FloatLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class FloatLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<FloatLiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FloatLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FloatLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): FloatLiteralNode;

        // Signals

        connect<K extends keyof FloatLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FloatLiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FloatLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FloatLiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FloatLiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FloatLiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace FunctionNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            name: string;
        }
    }

    class FunctionNode extends Node {
        static $gtype: GObject.GType<FunctionNode>;

        // Properties

        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FunctionNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FunctionNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, parameters: Node[], return_type: Arrow.DataType): FunctionNode;

        // Signals

        connect<K extends keyof FunctionNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FunctionNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FunctionNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FunctionNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FunctionNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FunctionNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FunctionRegistry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FunctionRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FunctionRegistry;

        // Signals

        connect<K extends keyof FunctionRegistry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FunctionRegistry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FunctionRegistry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FunctionRegistry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FunctionRegistry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FunctionRegistry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_native_functions(): NativeFunction[];
        lookup(function_signature: FunctionSignature): NativeFunction | null;
    }

    namespace FunctionSignature {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::function-signature': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            function_signature: any;
            functionSignature: any;
        }
    }

    class FunctionSignature extends GObject.Object {
        static $gtype: GObject.GType<FunctionSignature>;

        // Properties

        set function_signature(val: any);
        set functionSignature(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FunctionSignature.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FunctionSignature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            base_name: string,
            parameter_types: Arrow.DataType[],
            return_type: Arrow.DataType,
        ): FunctionSignature;

        // Signals

        connect<K extends keyof FunctionSignature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FunctionSignature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FunctionSignature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FunctionSignature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FunctionSignature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FunctionSignature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        equal(other_function_signature: FunctionSignature): boolean;
        get_base_name(): string;
        get_param_types(): Arrow.DataType[];
        get_return_type(): Arrow.DataType;
        to_string(): string;
    }

    namespace IfNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::condition-node': (pspec: GObject.ParamSpec) => void;
            'notify::else-node': (pspec: GObject.ParamSpec) => void;
            'notify::then-node': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

        get condition_node(): Node;
        get conditionNode(): Node;
        get else_node(): Node;
        get elseNode(): Node;
        get then_node(): Node;
        get thenNode(): Node;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IfNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IfNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](condition_node: Node, then_node: Node, else_node: Node, return_type: Arrow.DataType): IfNode;

        // Signals

        connect<K extends keyof IfNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IfNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IfNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IfNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IfNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IfNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Int16LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int16LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int16LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Int16LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int16LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int16LiteralNode;

        // Signals

        connect<K extends keyof Int16LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int16LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Int16LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int16LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Int16LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Int16LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace Int32LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int32LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int32LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Int32LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int32LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int32LiteralNode;

        // Signals

        connect<K extends keyof Int32LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int32LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Int32LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int32LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Int32LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Int32LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace Int64LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int64LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int64LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Int64LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int64LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int64LiteralNode;

        // Signals

        connect<K extends keyof Int64LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int64LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Int64LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int64LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Int64LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Int64LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace Int8LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class Int8LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<Int8LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Int8LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int8LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int8LiteralNode;

        // Signals

        connect<K extends keyof Int8LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int8LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Int8LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int8LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Int8LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Int8LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace LiteralNode {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {}
    }

    class LiteralNode extends Node {
        static $gtype: GObject.GType<LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace NativeFunction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::native-function': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            native_function: any;
            nativeFunction: any;
        }
    }

    class NativeFunction extends GObject.Object {
        static $gtype: GObject.GType<NativeFunction>;

        // Properties

        set native_function(val: any);
        set nativeFunction(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NativeFunction.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NativeFunction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof NativeFunction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NativeFunction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NativeFunction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NativeFunction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NativeFunction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NativeFunction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: any;
            return_type: Arrow.DataType;
            returnType: Arrow.DataType;
        }
    }

    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        // Properties

        set node(val: any);
        get return_type(): Arrow.DataType;
        get returnType(): Arrow.DataType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Node.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Node.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        to_string(): string;
    }

    namespace NullLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class NullLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<NullLiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NullLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NullLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](return_type: Arrow.DataType): NullLiteralNode;

        // Signals

        connect<K extends keyof NullLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NullLiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NullLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NullLiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NullLiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NullLiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OrNode {
        // Signal signatures
        interface SignalSignatures extends BooleanNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends BooleanNode.ConstructorProps {}
    }

    class OrNode extends BooleanNode {
        static $gtype: GObject.GType<OrNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OrNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OrNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](children: Node[]): OrNode;

        // Signals

        connect<K extends keyof OrNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OrNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OrNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OrNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OrNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OrNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Projector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::projector': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            projector: any;
        }
    }

    class Projector extends GObject.Object {
        static $gtype: GObject.GType<Projector>;

        // Properties

        set projector(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Projector.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Projector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Arrow.Schema, expressions: Expression[]): Projector;

        // Signals

        connect<K extends keyof Projector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Projector.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Projector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Projector.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Projector.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Projector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        evaluate(record_batch: Arrow.RecordBatch): Arrow.Array[] | null;
    }

    namespace StringLiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class StringLiteralNode extends LiteralNode {
        static $gtype: GObject.GType<StringLiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StringLiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StringLiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string): StringLiteralNode;

        // Signals

        connect<K extends keyof StringLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StringLiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StringLiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StringLiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StringLiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StringLiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): string;
    }

    namespace UInt16LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt16LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt16LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UInt16LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt16LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt16LiteralNode;

        // Signals

        connect<K extends keyof UInt16LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt16LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UInt16LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt16LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UInt16LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UInt16LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace UInt32LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt32LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt32LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UInt32LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt32LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt32LiteralNode;

        // Signals

        connect<K extends keyof UInt32LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt32LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UInt32LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt32LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UInt32LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UInt32LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace UInt64LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt64LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt64LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UInt64LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt64LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt64LiteralNode;

        // Signals

        connect<K extends keyof UInt64LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt64LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UInt64LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt64LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UInt64LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UInt64LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): number;
    }

    namespace UInt8LiteralNode {
        // Signal signatures
        interface SignalSignatures extends LiteralNode.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::return-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LiteralNode.ConstructorProps {}
    }

    class UInt8LiteralNode extends LiteralNode {
        static $gtype: GObject.GType<UInt8LiteralNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UInt8LiteralNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UInt8LiteralNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt8LiteralNode;

        // Signals

        connect<K extends keyof UInt8LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt8LiteralNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UInt8LiteralNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UInt8LiteralNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UInt8LiteralNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UInt8LiteralNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
