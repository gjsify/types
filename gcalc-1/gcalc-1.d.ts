
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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';

export namespace GCalc {

    /**
     * GCalc-1
     */


    /**
     * @gir-type Struct
     */
    class AssigError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID_STRUCTURE_ERROR: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Struct
     */
    class FunctionError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID_PARAMETERS_ERROR: number;

        static INVOCATION_ERROR: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Struct
     */
    class ParserError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID_TOKEN_ERROR: number;

        static INVALID_EXPRESSION_ERROR: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Struct
     */
    class GroupError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID_POLYNOMIAL: number;

        static INVALID_INTERNAL_TERM: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Struct
     */
    class SolverError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static EXPRESSION_ERROR: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Struct
     */
    class TermError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID_OPERATOR: number;

        static EVALUATION_FAIL: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Struct
     */
    class VariableError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID_PARENT: number;

        static INVALID_EXPRESSION_DEFINITION: number;

        static EVALUATION_FAIL: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Enum
     */
    export namespace GParserTokenType {
        export const $gtype: GObject.GType<GParserTokenType>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace GroupLevel {
        export const $gtype: GObject.GType<GroupLevel>;
    }

    /**
     * @gir-type Enum
     */
    enum GroupLevel {
        ONE,
        TWO,
        THREE,
    }


    namespace ExpressionContainer {
        // Signal signatures
        interface SignalSignatures extends Gee.ArrayList.SignalSignatures {
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends Gee.ArrayList.ConstructorProps, Gio.ListModel.ConstructorProps {
            parent: Expression;
        }
    }

    /**
     * @gir-type Class
     */
    class ExpressionContainer<A extends GObject.Object = GObject.Object> extends Gee.ArrayList implements Gio.ListModel<A> {
        static $gtype: GObject.GType<ExpressionContainer>;

        // Properties
        get parent(): Expression;
        set parent(val: Expression);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExpressionContainer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ExpressionContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ExpressionContainer;

        // Signals
        /** @signal */
        connect<K extends keyof ExpressionContainer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpressionContainer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ExpressionContainer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpressionContainer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ExpressionContainer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ExpressionContainer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param exp 
         */
        add(exp: Expression): void;

        /**
         * @param args 
         */
    // Conflicted with Gee.AbstractCollection.add
        add(...args: never[]): any;

        /**
         * @param index 
         */
        remove_at(index: number): Expression;

        /**
         * @param args 
         */
    // Conflicted with Gee.AbstractList.remove_at
        remove_at(...args: never[]): any;

        /**
         * @param exp 
         */
        remove(exp: Expression): Expression;

        /**
         * @param args 
         */
    // Conflicted with Gee.AbstractCollection.remove
        remove(...args: never[]): any;

        /**
         * @param position 
         */
        get_object<T = GObject.Object>(position: number): T;

        /**
         * @param exp 
         */
        find(exp: Expression): Expression;

        /**
         * @param name 
         */
        find_named(name: string): Expression;

        get_parent(): Expression;

        /**
         * @param value 
         */
        set_parent(value: Expression): void;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;

        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;

        /**
         * @param args 
         */
        // Conflicted with Gee.AbstractList.set
        set(...args: never[]): any;
    }


    namespace ExpressionHashMap {
        // Signal signatures
        interface SignalSignatures extends Gee.HashMap.SignalSignatures {
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::keys": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gee.HashMap.ConstructorProps {
            parent: Expression;
        }
    }

    /**
     * @gir-type Class
     */
    class ExpressionHashMap extends Gee.HashMap {
        static $gtype: GObject.GType<ExpressionHashMap>;

        // Properties
        get parent(): Expression;
        set parent(val: Expression);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExpressionHashMap.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ExpressionHashMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ExpressionHashMap;

        // Signals
        /** @signal */
        connect<K extends keyof ExpressionHashMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpressionHashMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ExpressionHashMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpressionHashMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ExpressionHashMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ExpressionHashMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param exp 
         */
        add(exp: Expression): void;

        /**
         * @param exp 
         */
        remove(exp: Expression): void;

        /**
         * @param args 
         */
    // Conflicted with Gee.Map.remove
        remove(...args: never[]): any;

        /**
         * @param name 
         */
        find_named(name: string): Expression;

        get_parent(): Expression;

        /**
         * @param value 
         */
        set_parent(value: Expression): void;
    }


    namespace GFunctionAcos {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionAcos extends GFunction {
        static $gtype: GObject.GType<GFunctionAcos>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionAcos.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionAcos.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionAcos;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionAcos.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAcos.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionAcos.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAcos.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionAcos.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionAcos.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionAcosh {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionAcosh extends GFunction {
        static $gtype: GObject.GType<GFunctionAcosh>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionAcosh.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionAcosh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionAcosh;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionAcosh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAcosh.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionAcosh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAcosh.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionAcosh.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionAcosh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionAsin {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionAsin extends GFunction {
        static $gtype: GObject.GType<GFunctionAsin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionAsin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionAsin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionAsin;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionAsin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAsin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionAsin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAsin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionAsin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionAsin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionAsinh {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionAsinh extends GFunction {
        static $gtype: GObject.GType<GFunctionAsinh>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionAsinh.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionAsinh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionAsinh;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionAsinh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAsinh.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionAsinh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAsinh.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionAsinh.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionAsinh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionAtan {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionAtan extends GFunction {
        static $gtype: GObject.GType<GFunctionAtan>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionAtan.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionAtan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionAtan;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionAtan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAtan.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionAtan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAtan.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionAtan.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionAtan.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionAtanh {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionAtanh extends GFunction {
        static $gtype: GObject.GType<GFunctionAtanh>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionAtanh.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionAtanh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionAtanh;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionAtanh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAtanh.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionAtanh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionAtanh.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionAtanh.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionAtanh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionCos {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionCos extends GFunction {
        static $gtype: GObject.GType<GFunctionCos>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionCos.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionCos.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionCos;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionCos.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionCos.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionCos.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionCos.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionCos.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionCos.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionCosh {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionCosh extends GFunction {
        static $gtype: GObject.GType<GFunctionCosh>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionCosh.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionCosh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionCosh;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionCosh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionCosh.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionCosh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionCosh.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionCosh.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionCosh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionExp {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionExp extends GFunction {
        static $gtype: GObject.GType<GFunctionExp>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionExp.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionExp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionExp;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionExp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionExp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionExp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionExp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionExp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionExp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionLog {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionLog extends GFunction {
        static $gtype: GObject.GType<GFunctionLog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionLog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionLog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionLog;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionLog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionLog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionLog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionLog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionLog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionLog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionSin {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionSin extends GFunction {
        static $gtype: GObject.GType<GFunctionSin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionSin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionSin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionSin;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionSin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionSin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionSin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionSin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionSin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionSin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionSinh {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionSinh extends GFunction {
        static $gtype: GObject.GType<GFunctionSinh>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionSinh.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionSinh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionSinh;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionSinh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionSinh.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionSinh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionSinh.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionSinh.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionSinh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionSqrt {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionSqrt extends GFunction {
        static $gtype: GObject.GType<GFunctionSqrt>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionSqrt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionSqrt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionSqrt;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionSqrt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionSqrt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionSqrt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionSqrt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionSqrt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionSqrt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionTan {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionTan extends GFunction {
        static $gtype: GObject.GType<GFunctionTan>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionTan.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionTan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionTan;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionTan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionTan.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionTan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionTan.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionTan.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionTan.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GFunctionTanh {
        // Signal signatures
        interface SignalSignatures extends GFunction.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GFunction.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunctionTanh extends GFunction {
        static $gtype: GObject.GType<GFunctionTanh>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunctionTanh.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunctionTanh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GFunctionTanh;

        // Signals
        /** @signal */
        connect<K extends keyof GFunctionTanh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionTanh.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunctionTanh.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunctionTanh.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunctionTanh.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunctionTanh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GExpression {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::expressions": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Expression.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GExpression extends GObject.Object implements Expression {
        static $gtype: GObject.GType<GExpression>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GExpression.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GExpression;

        // Signals
        /** @signal */
        connect<K extends keyof GExpression.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GExpression.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GExpression.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GExpression.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GExpression.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GExpression.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * @virtual
         */
        vfunc_solve(): Result;

        // Methods
        to_string(): string;

        solve(): Result;

        /** @category Inherited from GCalc.Expression */
        get parent(): Expression;
        set parent(val: Expression);

        /**
         * @read-only
          * @category Inherited from GCalc.Expression
         */
        get expressions(): ExpressionContainer;

        get_parent(): Expression;

        /**
         * @param value 
         */
        set_parent(value: Expression): void;

        get_expressions(): ExpressionContainer;

        /**
         * @virtual
         */
        vfunc_get_parent(): Expression;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_parent(value: Expression): void;

        /**
         * @virtual
         */
        vfunc_get_expressions(): ExpressionContainer;
    }


    namespace GErrorExpression {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, ErrorExpression.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GErrorExpression extends GExpression implements ErrorExpression {
        static $gtype: GObject.GType<GErrorExpression>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GErrorExpression.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GErrorExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GErrorExpression;

        // Signals
        /** @signal */
        connect<K extends keyof GErrorExpression.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GErrorExpression.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GErrorExpression.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GErrorExpression.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GErrorExpression.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GErrorExpression.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GAssign {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Operator.ConstructorProps, BinaryOperator.ConstructorProps, Assign.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GAssign extends GExpression implements Operator, BinaryOperator, Assign {
        static $gtype: GObject.GType<GAssign>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GAssign.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GAssign.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GAssign;

        // Signals
        /** @signal */
        connect<K extends keyof GAssign.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GAssign.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GAssign.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GAssign.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GAssign.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GAssign.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        evaluate(): Expression;
    }


    namespace GConstant {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Constant.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GConstant extends GExpression implements Constant {
        static $gtype: GObject.GType<GConstant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GConstant.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GConstant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static integer(val: number): GConstant;

        static unsigned_integer(val: number): GConstant;

        static double(val: number): GConstant;

        static complex(real: number, imag: number): GConstant;

        static ["new"](): GConstant;

        // Signals
        /** @signal */
        connect<K extends keyof GConstant.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GConstant.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GConstant.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GConstant.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GConstant.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GConstant.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param c 
         */
        subtract(c: Constant): Constant;

        real(): number;

        imag(): number;

        zero(): void;

        /**
         * @param c 
         */
        add(c: Constant): Constant;

        /**
         * @param c 
         */
        multiply(c: Constant): Constant;

        /**
         * @param c 
         */
        divide(c: Constant): Constant;

        neg(): Constant;

        /**
         * @param c 
         */
        pow(c: Constant): Constant;

        /**
         * @virtual
         */
        vfunc_real(): number;

        /**
         * @virtual
         */
        vfunc_imag(): number;

        /**
         * @virtual
         */
        vfunc_zero(): void;

        /**
         * @param c 
         * @virtual
         */
        vfunc_add(c: Constant): Constant;

        /**
         * @param c 
         * @virtual
         */
        vfunc_multiply(c: Constant): Constant;

        /**
         * @param c 
         * @virtual
         */
        vfunc_divide(c: Constant): Constant;

        /**
         * @virtual
         */
        vfunc_neg(): Constant;

        /**
         * @param c 
         * @virtual
         */
        vfunc_pow(c: Constant): Constant;
    }


    namespace GDivision {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Operator.ConstructorProps, BinaryOperator.ConstructorProps, Division.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GDivision extends GExpression implements Operator, BinaryOperator, Division {
        static $gtype: GObject.GType<GDivision>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GDivision.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GDivision.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GDivision;

        // Signals
        /** @signal */
        connect<K extends keyof GDivision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GDivision.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GDivision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GDivision.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GDivision.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GDivision.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GErrorResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::expression": (pspec: GObject.ParamSpec) => void;
            "notify::message": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Result.ConstructorProps, ErrorResult.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GErrorResult extends GObject.Object implements Result, ErrorResult {
        static $gtype: GObject.GType<GErrorResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GErrorResult.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GErrorResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](msg: string): GErrorResult;

        // Signals
        /** @signal */
        connect<K extends keyof GErrorResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GErrorResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GErrorResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GErrorResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GErrorResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GErrorResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @read-only
          * @category Inherited from GCalc.Result
         */
        get expression(): Expression;

        /**
         * @read-only
          * @category Inherited from GCalc.ErrorResult
         */
        get message(): string;

        to_string(): string;

        get_expression(): Expression;

        /**
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * @virtual
         */
        vfunc_get_expression(): Expression;

        get_message(): string;

        /**
         * @virtual
         */
        vfunc_get_message(): string;
    }


    namespace GFunction {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {
            "notify::param-types": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::n-params": (pspec: GObject.ParamSpec) => void;
            "notify::closed": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Function.ConstructorProps, Hashable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GFunction extends GExpression implements Function, Hashable {
        static $gtype: GObject.GType<GFunction>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GFunction.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GFunction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static with_name(name: string, nparams: number): GFunction;

        static ["new"](): GFunction;

        // Signals
        /** @signal */
        connect<K extends keyof GFunction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GFunction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GFunction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GFunction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GFunction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_evaluate(): Expression;

        // Methods
        evaluate(): Expression;

        /**
         * @read-only
          * @category Inherited from GCalc.Function
         */
        get param_types(): ExpressionContainer;

        /**
         * @read-only
          * @category Inherited from GCalc.Function
         */
        get paramTypes(): ExpressionContainer;

        /** @category Inherited from GCalc.Function */
        get name(): string;
        set name(val: string);

        /** @category Inherited from GCalc.Function */
        get n_params(): number;
        set n_params(val: number);

        /** @category Inherited from GCalc.Function */
        get nParams(): number;
        set nParams(val: number);

        /** @category Inherited from GCalc.Function */
        get closed(): boolean;
        set closed(val: boolean);

        verify_params(): boolean;

        get_param_types(): ExpressionContainer;

        get_name(): string;

        /**
         * @param value 
         */
        set_name(value: string): void;

        get_n_params(): number;

        /**
         * @param value 
         */
        set_n_params(value: number): void;

        get_closed(): boolean;

        /**
         * @param value 
         */
        set_closed(value: boolean): void;

        /**
         * @virtual
         */
        vfunc_verify_params(): boolean;

        /**
         * @virtual
         */
        vfunc_get_param_types(): ExpressionContainer;

        /**
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_name(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_n_params(): number;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_n_params(value: number): void;

        /**
         * @virtual
         */
        vfunc_get_closed(): boolean;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_closed(value: boolean): void;

        hash(): number;

        /**
         * @virtual
         */
        vfunc_hash(): number;
    }


    namespace GMathEquation {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {
            "notify::variables": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, MathEquation.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GMathEquation extends GExpression implements MathEquation {
        static $gtype: GObject.GType<GMathEquation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GMathEquation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GMathEquation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GMathEquation;

        // Signals
        /** @signal */
        connect<K extends keyof GMathEquation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMathEquation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GMathEquation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMathEquation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GMathEquation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GMathEquation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @read-only
          * @category Inherited from GCalc.MathEquation
         */
        get variables(): ExpressionHashMap;

        get_variables(): ExpressionHashMap;

        /**
         * @virtual
         */
        vfunc_get_variables(): ExpressionHashMap;
    }


    namespace GMathEquationManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::equations": (pspec: GObject.ParamSpec) => void;
            "notify::functions": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, MathEquationManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GMathEquationManager extends GObject.Object implements MathEquationManager {
        static $gtype: GObject.GType<GMathEquationManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GMathEquationManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GMathEquationManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GMathEquationManager;

        // Signals
        /** @signal */
        connect<K extends keyof GMathEquationManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMathEquationManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GMathEquationManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMathEquationManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GMathEquationManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GMathEquationManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @read-only
          * @category Inherited from GCalc.MathEquationManager
         */
        get equations(): ExpressionContainer;

        /**
         * @read-only
          * @category Inherited from GCalc.MathEquationManager
         */
        get functions(): ExpressionContainer;

        /**
         * @param name 
         */
        find_variable(name: string): Variable;

        get_equations(): ExpressionContainer;

        get_functions(): ExpressionContainer;

        /**
         * @param name 
         * @virtual
         */
        vfunc_find_variable(name: string): Variable;

        /**
         * @virtual
         */
        vfunc_get_equations(): ExpressionContainer;

        /**
         * @virtual
         */
        vfunc_get_functions(): ExpressionContainer;
    }


    namespace GMinus {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Operator.ConstructorProps, BinaryOperator.ConstructorProps, Minus.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GMinus extends GExpression implements Operator, BinaryOperator, Minus {
        static $gtype: GObject.GType<GMinus>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GMinus.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GMinus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GMinus;

        // Signals
        /** @signal */
        connect<K extends keyof GMinus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMinus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GMinus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMinus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GMinus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GMinus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GMultiply {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Operator.ConstructorProps, BinaryOperator.ConstructorProps, Multiply.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GMultiply extends GExpression implements Operator, BinaryOperator, Multiply {
        static $gtype: GObject.GType<GMultiply>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GMultiply.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GMultiply.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GMultiply;

        // Signals
        /** @signal */
        connect<K extends keyof GMultiply.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMultiply.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GMultiply.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GMultiply.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GMultiply.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GMultiply.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GParser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GParser extends GObject.Object {
        static $gtype: GObject.GType<GParser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GParser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GParser;

        // Signals
        /** @signal */
        connect<K extends keyof GParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GParser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GParser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GParser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GParser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param str 
         * @param eqman 
         */
        parse(str: string, eqman: MathEquationManager): void;

        read_token(): GParserTokenType;

        token_to_string(): string;
    }


    namespace GPlus {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Operator.ConstructorProps, BinaryOperator.ConstructorProps, Plus.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GPlus extends GExpression implements Operator, BinaryOperator, Plus {
        static $gtype: GObject.GType<GPlus>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GPlus.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GPlus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GPlus;

        // Signals
        /** @signal */
        connect<K extends keyof GPlus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GPlus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GPlus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GPlus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GPlus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GPlus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GPolynomial {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Polynomial.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GPolynomial extends GExpression implements Polynomial {
        static $gtype: GObject.GType<GPolynomial>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GPolynomial.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GPolynomial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GPolynomial;

        // Signals
        /** @signal */
        connect<K extends keyof GPolynomial.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GPolynomial.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GPolynomial.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GPolynomial.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GPolynomial.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GPolynomial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        evaluate(): Expression;

        /**
         * @virtual
         */
        vfunc_evaluate(): Expression;
    }


    namespace GPow {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Operator.ConstructorProps, Pow.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GPow extends GExpression implements Operator, Pow {
        static $gtype: GObject.GType<GPow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GPow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GPow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GPow;

        // Signals
        /** @signal */
        connect<K extends keyof GPow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GPow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GPow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GPow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GPow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GPow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::expression": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Result.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GResult extends GObject.Object implements Result {
        static $gtype: GObject.GType<GResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GResult.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](exp: Expression): GResult;

        // Signals
        /** @signal */
        connect<K extends keyof GResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @read-only
          * @category Inherited from GCalc.Result
         */
        get expression(): Expression;

        to_string(): string;

        get_expression(): Expression;

        /**
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * @virtual
         */
        vfunc_get_expression(): Expression;
    }


    namespace GGroup {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {
            "notify::level": (pspec: GObject.ParamSpec) => void;
            "notify::closed": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Group.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GGroup extends GExpression implements Group {
        static $gtype: GObject.GType<GGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GGroup;

        // Signals
        /** @signal */
        connect<K extends keyof GGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /** @category Inherited from GCalc.Group */
        get level(): GroupLevel;
        set level(val: GroupLevel);

        /** @category Inherited from GCalc.Group */
        get closed(): boolean;
        set closed(val: boolean);

        evaluate(): Expression;

        get_level(): GroupLevel;

        /**
         * @param value 
         */
        set_level(value: GroupLevel): void;

        get_closed(): boolean;

        /**
         * @param value 
         */
        set_closed(value: boolean): void;

        /**
         * @virtual
         */
        vfunc_evaluate(): Expression;

        /**
         * @virtual
         */
        vfunc_get_level(): GroupLevel;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_level(value: GroupLevel): void;

        /**
         * @virtual
         */
        vfunc_get_closed(): boolean;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_closed(value: boolean): void;
    }


    namespace GSolver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::equation-manager": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Solver.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GSolver extends GObject.Object implements Solver {
        static $gtype: GObject.GType<GSolver>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GSolver.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GSolver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GSolver;

        // Signals
        /** @signal */
        connect<K extends keyof GSolver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GSolver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GSolver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GSolver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GSolver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GSolver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /** @category Inherited from GCalc.Solver */
        get equation_manager(): MathEquationManager;
        set equation_manager(val: MathEquationManager);

        /** @category Inherited from GCalc.Solver */
        get equationManager(): MathEquationManager;
        set equationManager(val: MathEquationManager);

        /**
         * @param str 
         */
        solve(str: string): Result;

        get_equation_manager(): MathEquationManager;

        /**
         * @param value 
         */
        set_equation_manager(value: MathEquationManager): void;

        /**
         * @param str 
         * @virtual
         */
        vfunc_solve(str: string): Result;

        /**
         * @virtual
         */
        vfunc_get_equation_manager(): MathEquationManager;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_equation_manager(value: MathEquationManager): void;
    }


    namespace GTerm {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Term.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GTerm extends GExpression implements Term {
        static $gtype: GObject.GType<GTerm>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GTerm.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GTerm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GTerm;

        // Signals
        /** @signal */
        connect<K extends keyof GTerm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GTerm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GTerm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GTerm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GTerm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GTerm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param t 
         */
        add(t: Term): Expression;

        evaluate(): Expression;

        /**
         * @param t 
         * @virtual
         */
        vfunc_add(t: Term): Expression;

        /**
         * @virtual
         */
        vfunc_evaluate(): Expression;
    }


    namespace GVariable {
        // Signal signatures
        interface SignalSignatures extends GExpression.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::bind": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GExpression.ConstructorProps, Variable.ConstructorProps, Hashable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GVariable extends GExpression implements Variable, Hashable {
        static $gtype: GObject.GType<GVariable>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GVariable.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GVariable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string): GVariable;

        // Conflicted with GCalc.GExpression.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof GVariable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GVariable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GVariable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GVariable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GVariable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GVariable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /** @category Inherited from GCalc.Variable */
        get name(): string;
        set name(val: string);

        /** @category Inherited from GCalc.Variable */
        get value(): Constant;
        set value(val: Constant);

        /** @category Inherited from GCalc.Variable */
        get bind(): Variable;
        set bind(val: Variable);

        evaluate(): Expression;

        get_name(): string;

        /**
         * @param value 
         */
        set_name(value: string): void;

        get_value(): Constant;

        /**
         * @param value 
         */
        set_value(value: Constant): void;

        get_bind(): Variable;

        /**
         * @param value 
         */
        set_bind(value: Variable): void;

        get_binded(): boolean;

        /**
         * @virtual
         */
        vfunc_evaluate(): Expression;

        /**
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_name(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_value(): Constant;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value(value: Constant): void;

        /**
         * @virtual
         */
        vfunc_get_bind(): Variable;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_bind(value: Variable): void;

        /**
         * @virtual
         */
        vfunc_get_binded(): boolean;

        hash(): number;

        /**
         * @virtual
         */
        vfunc_hash(): number;
    }


    /**
     * @gir-type Alias
     */
    type ExpressionContainerClass = typeof ExpressionContainer;

    /**
     * @gir-type Struct
     */
    abstract class ExpressionContainerPrivate {
        static $gtype: GObject.GType<ExpressionContainerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ExpressionHashMapClass = typeof ExpressionHashMap;

    /**
     * @gir-type Struct
     */
    abstract class ExpressionHashMapPrivate {
        static $gtype: GObject.GType<ExpressionHashMapPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionAcosClass = typeof GFunctionAcos;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionAcosPrivate {
        static $gtype: GObject.GType<GFunctionAcosPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionAcoshClass = typeof GFunctionAcosh;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionAcoshPrivate {
        static $gtype: GObject.GType<GFunctionAcoshPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionAsinClass = typeof GFunctionAsin;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionAsinPrivate {
        static $gtype: GObject.GType<GFunctionAsinPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionAsinhClass = typeof GFunctionAsinh;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionAsinhPrivate {
        static $gtype: GObject.GType<GFunctionAsinhPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionAtanClass = typeof GFunctionAtan;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionAtanPrivate {
        static $gtype: GObject.GType<GFunctionAtanPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionAtanhClass = typeof GFunctionAtanh;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionAtanhPrivate {
        static $gtype: GObject.GType<GFunctionAtanhPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionCosClass = typeof GFunctionCos;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionCosPrivate {
        static $gtype: GObject.GType<GFunctionCosPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionCoshClass = typeof GFunctionCosh;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionCoshPrivate {
        static $gtype: GObject.GType<GFunctionCoshPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionExpClass = typeof GFunctionExp;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionExpPrivate {
        static $gtype: GObject.GType<GFunctionExpPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionLogClass = typeof GFunctionLog;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionLogPrivate {
        static $gtype: GObject.GType<GFunctionLogPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionSinClass = typeof GFunctionSin;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionSinPrivate {
        static $gtype: GObject.GType<GFunctionSinPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionSinhClass = typeof GFunctionSinh;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionSinhPrivate {
        static $gtype: GObject.GType<GFunctionSinhPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionSqrtClass = typeof GFunctionSqrt;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionSqrtPrivate {
        static $gtype: GObject.GType<GFunctionSqrtPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionTanClass = typeof GFunctionTan;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionTanPrivate {
        static $gtype: GObject.GType<GFunctionTanPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionTanhClass = typeof GFunctionTanh;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionTanhPrivate {
        static $gtype: GObject.GType<GFunctionTanhPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GExpressionClass = typeof GExpression;

    /**
     * @gir-type Struct
     */
    abstract class GExpressionPrivate {
        static $gtype: GObject.GType<GExpressionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GErrorExpressionClass = typeof GErrorExpression;

    /**
     * @gir-type Struct
     */
    abstract class GErrorExpressionPrivate {
        static $gtype: GObject.GType<GErrorExpressionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GAssignClass = typeof GAssign;

    /**
     * @gir-type Struct
     */
    abstract class GAssignPrivate {
        static $gtype: GObject.GType<GAssignPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GConstantClass = typeof GConstant;

    /**
     * @gir-type Struct
     */
    abstract class GConstantPrivate {
        static $gtype: GObject.GType<GConstantPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GDivisionClass = typeof GDivision;

    /**
     * @gir-type Struct
     */
    abstract class GDivisionPrivate {
        static $gtype: GObject.GType<GDivisionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GErrorResultClass = typeof GErrorResult;

    /**
     * @gir-type Struct
     */
    abstract class GErrorResultPrivate {
        static $gtype: GObject.GType<GErrorResultPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GFunctionClass = typeof GFunction;

    /**
     * @gir-type Struct
     */
    abstract class GFunctionPrivate {
        static $gtype: GObject.GType<GFunctionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GMathEquationClass = typeof GMathEquation;

    /**
     * @gir-type Struct
     */
    abstract class GMathEquationPrivate {
        static $gtype: GObject.GType<GMathEquationPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GMathEquationManagerClass = typeof GMathEquationManager;

    /**
     * @gir-type Struct
     */
    abstract class GMathEquationManagerPrivate {
        static $gtype: GObject.GType<GMathEquationManagerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GMinusClass = typeof GMinus;

    /**
     * @gir-type Struct
     */
    abstract class GMinusPrivate {
        static $gtype: GObject.GType<GMinusPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GMultiplyClass = typeof GMultiply;

    /**
     * @gir-type Struct
     */
    abstract class GMultiplyPrivate {
        static $gtype: GObject.GType<GMultiplyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GParserClass = typeof GParser;

    /**
     * @gir-type Struct
     */
    abstract class GParserPrivate {
        static $gtype: GObject.GType<GParserPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GPlusClass = typeof GPlus;

    /**
     * @gir-type Struct
     */
    abstract class GPlusPrivate {
        static $gtype: GObject.GType<GPlusPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GPolynomialClass = typeof GPolynomial;

    /**
     * @gir-type Struct
     */
    abstract class GPolynomialPrivate {
        static $gtype: GObject.GType<GPolynomialPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GPowClass = typeof GPow;

    /**
     * @gir-type Struct
     */
    abstract class GPowPrivate {
        static $gtype: GObject.GType<GPowPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GResultClass = typeof GResult;

    /**
     * @gir-type Struct
     */
    abstract class GResultPrivate {
        static $gtype: GObject.GType<GResultPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GGroupClass = typeof GGroup;

    /**
     * @gir-type Struct
     */
    abstract class GGroupPrivate {
        static $gtype: GObject.GType<GGroupPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GSolverClass = typeof GSolver;

    /**
     * @gir-type Struct
     */
    abstract class GSolverPrivate {
        static $gtype: GObject.GType<GSolverPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GTermClass = typeof GTerm;

    /**
     * @gir-type Struct
     */
    abstract class GTermPrivate {
        static $gtype: GObject.GType<GTermPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GVariableClass = typeof GVariable;

    /**
     * @gir-type Struct
     */
    abstract class GVariablePrivate {
        static $gtype: GObject.GType<GVariablePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AssignIface = typeof Assign;

    /**
     * @gir-type Alias
     */
    type BinaryOperatorIface = typeof BinaryOperator;

    /**
     * @gir-type Alias
     */
    type ConstantIface = typeof Constant;

    /**
     * @gir-type Alias
     */
    type DivisionIface = typeof Division;

    /**
     * @gir-type Alias
     */
    type ExpressionIface = typeof Expression;

    /**
     * @gir-type Alias
     */
    type ErrorExpressionIface = typeof ErrorExpression;

    /**
     * @gir-type Alias
     */
    type FunctionIface = typeof Function;

    /**
     * @gir-type Alias
     */
    type ErrorResultIface = typeof ErrorResult;

    /**
     * @gir-type Alias
     */
    type GroupIface = typeof Group;

    /**
     * @gir-type Alias
     */
    type HashableIface = typeof Hashable;

    /**
     * @gir-type Alias
     */
    type MathEquationIface = typeof MathEquation;

    /**
     * @gir-type Alias
     */
    type MathEquationManagerIface = typeof MathEquationManager;

    /**
     * @gir-type Alias
     */
    type MinusIface = typeof Minus;

    /**
     * @gir-type Alias
     */
    type MultiplyIface = typeof Multiply;

    /**
     * @gir-type Alias
     */
    type OperatorIface = typeof Operator;

    /**
     * @gir-type Alias
     */
    type PlusIface = typeof Plus;

    /**
     * @gir-type Alias
     */
    type PolynomialIface = typeof Polynomial;

    /**
     * @gir-type Alias
     */
    type PowIface = typeof Pow;

    /**
     * @gir-type Alias
     */
    type ResultIface = typeof Result;

    /**
     * @gir-type Alias
     */
    type SolverIface = typeof Solver;

    /**
     * @gir-type Alias
     */
    type TermIface = typeof Term;

    /**
     * @gir-type Alias
     */
    type VariableIface = typeof Variable;

    namespace Assign {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AssignNamespace {
        $gtype: GObject.GType<Assign>;
        prototype: Assign;
    }
    /**
     * @gir-type Interface
     */
    interface Assign extends GObject.Object {

        // Methods
        evaluate(): Expression;
    }


    export const Assign: AssignNamespace & {
        new (): Assign; // This allows `obj instanceof Assign`
    };

    namespace BinaryOperator {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface BinaryOperatorNamespace {
        $gtype: GObject.GType<BinaryOperator>;
        prototype: BinaryOperator;
    }
    /**
     * @gir-type Interface
     */
    interface BinaryOperator extends GObject.Object {
    }


    export const BinaryOperator: BinaryOperatorNamespace & {
        new (): BinaryOperator; // This allows `obj instanceof BinaryOperator`
    };

    namespace Constant {
        /**
         * Interface for implementing Constant.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_real(): number;

            /**
             * @virtual
             */
            vfunc_imag(): number;

            /**
             * @virtual
             */
            vfunc_zero(): void;

            /**
             * @param c 
             * @virtual
             */
            vfunc_add(c: Constant): Constant;

            /**
             * @param c 
             * @virtual
             */
            vfunc_multiply(c: Constant): Constant;

            /**
             * @param c 
             * @virtual
             */
            vfunc_divide(c: Constant): Constant;

            /**
             * @virtual
             */
            vfunc_neg(): Constant;

            /**
             * @param c 
             * @virtual
             */
            vfunc_pow(c: Constant): Constant;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConstantNamespace {
        $gtype: GObject.GType<Constant>;
        prototype: Constant;
    }
    /**
     * @gir-type Interface
     */
    interface Constant extends GObject.Object, Constant.Interface {

        // Methods
        real(): number;

        imag(): number;

        zero(): void;

        /**
         * @param c 
         */
        add(c: Constant): Constant;

        /**
         * @param c 
         */
        multiply(c: Constant): Constant;

        /**
         * @param c 
         */
        divide(c: Constant): Constant;

        neg(): Constant;

        /**
         * @param c 
         */
        pow(c: Constant): Constant;
    }


    export const Constant: ConstantNamespace & {
        new (): Constant; // This allows `obj instanceof Constant`
    };

    namespace Division {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DivisionNamespace {
        $gtype: GObject.GType<Division>;
        prototype: Division;
    }
    /**
     * @gir-type Interface
     */
    interface Division extends GObject.Object {
    }


    export const Division: DivisionNamespace & {
        new (): Division; // This allows `obj instanceof Division`
    };

    namespace Expression {
        /**
         * Interface for implementing Expression.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_to_string(): string;

            /**
             * @virtual
             */
            vfunc_solve(): Result;

            /**
             * @virtual
             */
            vfunc_get_parent(): Expression;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_parent(value: Expression): void;

            /**
             * @virtual
             */
            vfunc_get_expressions(): ExpressionContainer;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            parent: Expression;
            expressions: ExpressionContainer;
        }
    }

    export interface ExpressionNamespace {
        $gtype: GObject.GType<Expression>;
        prototype: Expression;
    }
    /**
     * @gir-type Interface
     */
    interface Expression extends GObject.Object, Expression.Interface {

        // Properties
        get parent(): Expression;
        set parent(val: Expression);

        /**
         * @read-only
         */
        get expressions(): ExpressionContainer;

        // Methods
        to_string(): string;

        solve(): Result;

        get_parent(): Expression;

        /**
         * @param value 
         */
        set_parent(value: Expression): void;

        get_expressions(): ExpressionContainer;
    }


    export const Expression: ExpressionNamespace & {
        new (): Expression; // This allows `obj instanceof Expression`
    };

    namespace ErrorExpression {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ErrorExpressionNamespace {
        $gtype: GObject.GType<ErrorExpression>;
        prototype: ErrorExpression;
    }
    /**
     * @gir-type Interface
     */
    interface ErrorExpression extends GObject.Object {
    }


    export const ErrorExpression: ErrorExpressionNamespace & {
        new (): ErrorExpression; // This allows `obj instanceof ErrorExpression`
    };

    namespace Function {
        /**
         * Interface for implementing Function.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_evaluate(): Expression;

            /**
             * @virtual
             */
            vfunc_verify_params(): boolean;

            /**
             * @virtual
             */
            vfunc_get_param_types(): ExpressionContainer;

            /**
             * @virtual
             */
            vfunc_get_name(): string;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_name(value: string): void;

            /**
             * @virtual
             */
            vfunc_get_n_params(): number;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_n_params(value: number): void;

            /**
             * @virtual
             */
            vfunc_get_closed(): boolean;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_closed(value: boolean): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            param_types: ExpressionContainer;
            paramTypes: ExpressionContainer;
            name: string;
            n_params: number;
            nParams: number;
            closed: boolean;
        }
    }

    export interface FunctionNamespace {
        $gtype: GObject.GType<Function>;
        prototype: Function;
    }
    /**
     * @gir-type Interface
     */
    interface Function extends GObject.Object, Function.Interface {

        // Properties
        /**
         * @read-only
         */
        get param_types(): ExpressionContainer;

        /**
         * @read-only
         */
        get paramTypes(): ExpressionContainer;

        get name(): string;
        set name(val: string);

        get n_params(): number;
        set n_params(val: number);

        get nParams(): number;
        set nParams(val: number);

        get closed(): boolean;
        set closed(val: boolean);

        // Methods
        evaluate(): Expression;

        verify_params(): boolean;

        get_param_types(): ExpressionContainer;

        get_name(): string;

        /**
         * @param value 
         */
        set_name(value: string): void;

        get_n_params(): number;

        /**
         * @param value 
         */
        set_n_params(value: number): void;

        get_closed(): boolean;

        /**
         * @param value 
         */
        set_closed(value: boolean): void;
    }


    export const Function: FunctionNamespace & {
        new (): Function; // This allows `obj instanceof Function`
    };

    namespace ErrorResult {
        /**
         * Interface for implementing ErrorResult.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_message(): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            message: string;
        }
    }

    export interface ErrorResultNamespace {
        $gtype: GObject.GType<ErrorResult>;
        prototype: ErrorResult;
    }
    /**
     * @gir-type Interface
     */
    interface ErrorResult extends GObject.Object, ErrorResult.Interface {

        // Properties
        /**
         * @read-only
         */
        get message(): string;

        // Methods
        get_message(): string;
    }


    export const ErrorResult: ErrorResultNamespace & {
        new (): ErrorResult; // This allows `obj instanceof ErrorResult`
    };

    namespace Group {
        /**
         * Interface for implementing Group.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_evaluate(): Expression;

            /**
             * @virtual
             */
            vfunc_get_level(): GroupLevel;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_level(value: GroupLevel): void;

            /**
             * @virtual
             */
            vfunc_get_closed(): boolean;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_closed(value: boolean): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            level: GroupLevel;
            closed: boolean;
        }
    }

    export interface GroupNamespace {
        $gtype: GObject.GType<Group>;
        prototype: Group;
    }
    /**
     * @gir-type Interface
     */
    interface Group extends GObject.Object, Group.Interface {

        // Properties
        get level(): GroupLevel;
        set level(val: GroupLevel);

        get closed(): boolean;
        set closed(val: boolean);

        // Methods
        evaluate(): Expression;

        get_level(): GroupLevel;

        /**
         * @param value 
         */
        set_level(value: GroupLevel): void;

        get_closed(): boolean;

        /**
         * @param value 
         */
        set_closed(value: boolean): void;
    }


    export const Group: GroupNamespace & {
        new (): Group; // This allows `obj instanceof Group`
    };

    namespace Hashable {
        /**
         * Interface for implementing Hashable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_hash(): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface HashableNamespace {
        $gtype: GObject.GType<Hashable>;
        prototype: Hashable;
    }
    /**
     * @gir-type Interface
     */
    interface Hashable extends GObject.Object, Hashable.Interface {

        // Methods
        hash(): number;
    }


    export const Hashable: HashableNamespace & {
        new (): Hashable; // This allows `obj instanceof Hashable`
    };

    namespace MathEquation {
        /**
         * Interface for implementing MathEquation.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_variables(): ExpressionHashMap;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            variables: ExpressionHashMap;
        }
    }

    export interface MathEquationNamespace {
        $gtype: GObject.GType<MathEquation>;
        prototype: MathEquation;
    }
    /**
     * @gir-type Interface
     */
    interface MathEquation extends GObject.Object, MathEquation.Interface {

        // Properties
        /**
         * @read-only
         */
        get variables(): ExpressionHashMap;

        // Methods
        get_variables(): ExpressionHashMap;
    }


    export const MathEquation: MathEquationNamespace & {
        new (): MathEquation; // This allows `obj instanceof MathEquation`
    };

    namespace MathEquationManager {
        /**
         * Interface for implementing MathEquationManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param name 
             * @virtual
             */
            vfunc_find_variable(name: string): Variable;

            /**
             * @virtual
             */
            vfunc_get_equations(): ExpressionContainer;

            /**
             * @virtual
             */
            vfunc_get_functions(): ExpressionContainer;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            equations: ExpressionContainer;
            functions: ExpressionContainer;
        }
    }

    export interface MathEquationManagerNamespace {
        $gtype: GObject.GType<MathEquationManager>;
        prototype: MathEquationManager;
    }
    /**
     * @gir-type Interface
     */
    interface MathEquationManager extends GObject.Object, MathEquationManager.Interface {

        // Properties
        /**
         * @read-only
         */
        get equations(): ExpressionContainer;

        /**
         * @read-only
         */
        get functions(): ExpressionContainer;

        // Methods
        /**
         * @param name 
         */
        find_variable(name: string): Variable;

        get_equations(): ExpressionContainer;

        get_functions(): ExpressionContainer;
    }


    export const MathEquationManager: MathEquationManagerNamespace & {
        new (): MathEquationManager; // This allows `obj instanceof MathEquationManager`
    };

    namespace Minus {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MinusNamespace {
        $gtype: GObject.GType<Minus>;
        prototype: Minus;
    }
    /**
     * @gir-type Interface
     */
    interface Minus extends GObject.Object {
    }


    export const Minus: MinusNamespace & {
        new (): Minus; // This allows `obj instanceof Minus`
    };

    namespace Multiply {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MultiplyNamespace {
        $gtype: GObject.GType<Multiply>;
        prototype: Multiply;
    }
    /**
     * @gir-type Interface
     */
    interface Multiply extends GObject.Object {
    }


    export const Multiply: MultiplyNamespace & {
        new (): Multiply; // This allows `obj instanceof Multiply`
    };

    namespace Operator {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface OperatorNamespace {
        $gtype: GObject.GType<Operator>;
        prototype: Operator;
    }
    /**
     * @gir-type Interface
     */
    interface Operator extends GObject.Object {
    }


    export const Operator: OperatorNamespace & {
        new (): Operator; // This allows `obj instanceof Operator`
    };

    namespace Plus {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PlusNamespace {
        $gtype: GObject.GType<Plus>;
        prototype: Plus;
    }
    /**
     * @gir-type Interface
     */
    interface Plus extends GObject.Object {
    }


    export const Plus: PlusNamespace & {
        new (): Plus; // This allows `obj instanceof Plus`
    };

    namespace Polynomial {
        /**
         * Interface for implementing Polynomial.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_evaluate(): Expression;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PolynomialNamespace {
        $gtype: GObject.GType<Polynomial>;
        prototype: Polynomial;
    }
    /**
     * @gir-type Interface
     */
    interface Polynomial extends GObject.Object, Polynomial.Interface {

        // Methods
        evaluate(): Expression;
    }


    export const Polynomial: PolynomialNamespace & {
        new (): Polynomial; // This allows `obj instanceof Polynomial`
    };

    namespace Pow {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PowNamespace {
        $gtype: GObject.GType<Pow>;
        prototype: Pow;
    }
    /**
     * @gir-type Interface
     */
    interface Pow extends GObject.Object {
    }


    export const Pow: PowNamespace & {
        new (): Pow; // This allows `obj instanceof Pow`
    };

    namespace Result {
        /**
         * Interface for implementing Result.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_to_string(): string;

            /**
             * @virtual
             */
            vfunc_get_expression(): Expression;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expression: Expression;
        }
    }

    export interface ResultNamespace {
        $gtype: GObject.GType<Result>;
        prototype: Result;
    }
    /**
     * @gir-type Interface
     */
    interface Result extends GObject.Object, Result.Interface {

        // Properties
        /**
         * @read-only
         */
        get expression(): Expression;

        // Methods
        to_string(): string;

        get_expression(): Expression;
    }


    export const Result: ResultNamespace & {
        new (): Result; // This allows `obj instanceof Result`
    };

    namespace Solver {
        /**
         * Interface for implementing Solver.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param str 
             * @virtual
             */
            vfunc_solve(str: string): Result;

            /**
             * @virtual
             */
            vfunc_get_equation_manager(): MathEquationManager;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_equation_manager(value: MathEquationManager): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            equation_manager: MathEquationManager;
            equationManager: MathEquationManager;
        }
    }

    export interface SolverNamespace {
        $gtype: GObject.GType<Solver>;
        prototype: Solver;
    }
    /**
     * @gir-type Interface
     */
    interface Solver extends GObject.Object, Solver.Interface {

        // Properties
        get equation_manager(): MathEquationManager;
        set equation_manager(val: MathEquationManager);

        get equationManager(): MathEquationManager;
        set equationManager(val: MathEquationManager);

        // Methods
        /**
         * @param str 
         */
        solve(str: string): Result;

        get_equation_manager(): MathEquationManager;

        /**
         * @param value 
         */
        set_equation_manager(value: MathEquationManager): void;
    }


    export const Solver: SolverNamespace & {
        new (): Solver; // This allows `obj instanceof Solver`
    };

    namespace Term {
        /**
         * Interface for implementing Term.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param t 
             * @virtual
             */
            vfunc_add(t: Term): Expression;

            /**
             * @virtual
             */
            vfunc_evaluate(): Expression;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface TermNamespace {
        $gtype: GObject.GType<Term>;
        prototype: Term;
        /**
        * @param c1 
        * @param c2 
        * @param op 
        */
        evaluate_constants(c1: Constant, c2: Constant, op: Operator): Expression;
    }
    /**
     * @gir-type Interface
     */
    interface Term extends GObject.Object, Term.Interface {

        // Methods
        /**
         * @param t 
         */
        add(t: Term): Expression;

        evaluate(): Expression;
    }


    export const Term: TermNamespace & {
        new (): Term; // This allows `obj instanceof Term`
    };

    namespace Variable {
        /**
         * Interface for implementing Variable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_evaluate(): Expression;

            /**
             * @virtual
             */
            vfunc_get_name(): string;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_name(value: string): void;

            /**
             * @virtual
             */
            vfunc_get_value(): Constant;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_value(value: Constant): void;

            /**
             * @virtual
             */
            vfunc_get_bind(): Variable;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_bind(value: Variable): void;

            /**
             * @virtual
             */
            vfunc_get_binded(): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            value: Constant;
            bind: Variable;
        }
    }

    export interface VariableNamespace {
        $gtype: GObject.GType<Variable>;
        prototype: Variable;
    }
    /**
     * @gir-type Interface
     */
    interface Variable extends GObject.Object, Variable.Interface {

        // Properties
        get name(): string;
        set name(val: string);

        get value(): Constant;
        set value(val: Constant);

        get bind(): Variable;
        set bind(val: Variable);

        // Methods
        evaluate(): Expression;

        get_name(): string;

        /**
         * @param value 
         */
        set_name(value: string): void;

        get_value(): Constant;

        /**
         * @param value 
         */
        set_value(value: Constant): void;

        get_bind(): Variable;

        /**
         * @param value 
         */
        set_bind(value: Variable): void;

        get_binded(): boolean;
    }


    export const Variable: VariableNamespace & {
        new (): Variable; // This allows `obj instanceof Variable`
    };

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

export default GCalc;

// END
