
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
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Tracker {

    /**
     * Tracker-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace SparqlValueType {
        export const $gtype: GObject.GType<SparqlValueType>;
    }

    /**
     * @gir-type Enum
     */
    enum SparqlValueType {
        UNBOUND = 0,
        URI = 1,
        STRING = 2,
        INTEGER = 3,
        DOUBLE = 4,
        DATETIME = 5,
        BLANK_NODE = 6,
        BOOLEAN = 7,
    }


    /**
     * @gir-type Enum
     */
    export namespace SparqlBuilderState {
        export const $gtype: GObject.GType<SparqlBuilderState>;
    }

    /**
     * @gir-type Enum
     */
    enum SparqlBuilderState {
        UPDATE = 0,
        INSERT = 1,
        DELETE = 2,
        SUBJECT = 3,
        PREDICATE = 4,
        OBJECT = 5,
        BLANK = 6,
        WHERE = 7,
        EMBEDDED_INSERT = 8,
        GRAPH = 9,
    }


    /**
     * @default org.freedesktop.Tracker1
     */
    const DBUS_SERVICE: string;

    /**
     * @default (null)
     */
    const DBUS_INTERFACE_RESOURCES: string;

    /**
     * @default /org/freedesktop/Tracker1/Resources
     */
    const DBUS_OBJECT_RESOURCES: string;

    /**
     * @default (null)
     */
    const DBUS_INTERFACE_STATISTICS: string;

    /**
     * @default /org/freedesktop/Tracker1/Statistics
     */
    const DBUS_OBJECT_STATISTICS: string;

    /**
     * @default (null)
     */
    const DBUS_INTERFACE_STATUS: string;

    /**
     * @default /org/freedesktop/Tracker1/Status
     */
    const DBUS_OBJECT_STATUS: string;

    /**
     * @default (null)
     */
    const DBUS_INTERFACE_STEROIDS: string;

    /**
     * @default /org/freedesktop/Tracker1/Steroids
     */
    const DBUS_OBJECT_STEROIDS: string;

    /**
     * @param uri 
     */
    function sparql_escape_uri(uri: string): string;

    /**
     * @param literal 
     */
    function sparql_escape_string(literal: string): string;

    function sparql_get_uuid_urn(): string;

    namespace SparqlBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::result": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            result: string;
            length: number;
            state: SparqlBuilderState;
        }
    }

    /**
     * @gir-type Class
     */
    class SparqlBuilder extends GObject.Object {
        static $gtype: GObject.GType<SparqlBuilder>;

        // Properties
        /**
         * @read-only
         */
        get result(): string;

        get length(): number;
        set length(val: number);

        /**
         * @read-only
         */
        get state(): SparqlBuilderState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SparqlBuilder.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SparqlBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static update(): SparqlBuilder;

        static embedded_insert(): SparqlBuilder;

        static ["new"](): SparqlBuilder;

        // Signals
        /** @signal */
        connect<K extends keyof SparqlBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SparqlBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SparqlBuilder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param graph 
         */
        insert_open(graph: string): void;

        /**
         * @param graph 
         */
        insert_silent_open(graph: string): void;

        insert_close(): void;

        /**
         * @param graph 
         */
        delete_open(graph: string): void;

        delete_close(): void;

        /**
         * @param graph 
         */
        graph_open(graph: string): void;

        graph_close(): void;

        where_open(): void;

        where_close(): void;

        /**
         * @param var_name 
         */
        subject_variable(var_name: string): void;

        /**
         * @param var_name 
         */
        object_variable(var_name: string): void;

        /**
         * @param iri 
         */
        subject_iri(iri: string): void;

        /**
         * @param s 
         */
        subject(s: string): void;

        /**
         * @param iri 
         */
        predicate_iri(iri: string): void;

        /**
         * @param s 
         */
        predicate(s: string): void;

        /**
         * @param iri 
         */
        object_iri(iri: string): void;

        /**
         * @param s 
         */
        object(s: string): void;

        /**
         * @param literal 
         */
        object_string(literal: string): void;

        /**
         * @param value 
         */
        object_unvalidated(value: string): void;

        /**
         * @param literal 
         */
        object_boolean(literal: boolean): void;

        /**
         * @param literal 
         */
        object_int64(literal: bigint | number): void;

        /**
         * @param literal 
         */
        object_date(literal: bigint | number): number;

        /**
         * @param literal 
         */
        object_double(literal: number): void;

        object_blank_open(): void;

        object_blank_close(): void;

        /**
         * @param raw 
         */
        prepend(raw: string): void;

        /**
         * @param raw 
         */
        append(raw: string): void;

        get_result(): string;

        get_length(): number;

        get_state(): SparqlBuilderState;
    }


    namespace SparqlConnection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class SparqlConnection extends GObject.Object {
        static $gtype: GObject.GType<SparqlConnection>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SparqlConnection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SparqlConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SparqlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SparqlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SparqlConnection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param cancellable 
         * @param _callback_ 
         */
        static get_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<SparqlConnection>): void;

        /**
         * @param _res_ 
         */
        static get_finish(_res_: Gio.AsyncResult): SparqlConnection;

        /**
         * @param cancellable 
         */
        static get(cancellable: Gio.Cancellable): SparqlConnection;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        static get_direct_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<SparqlConnection>): void;

        /**
         * @param _res_ 
         */
        static get_direct_finish(_res_: Gio.AsyncResult): SparqlConnection;

        /**
         * @param cancellable 
         */
        static get_direct(cancellable: Gio.Cancellable): SparqlConnection;

        /**
         * @param uri_base 
         */
        static remote_new(uri_base: string): SparqlConnection;

        // Virtual methods
        /**
         * @param sparql 
         * @param cancellable 
         * @virtual
         */
        vfunc_query(sparql: string, cancellable: Gio.Cancellable): SparqlCursor;

        /**
         * @param sparql 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_query_async(sparql: string, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_query_finish(_res_: Gio.AsyncResult): SparqlCursor;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_update(sparql: string, priority: number, cancellable: Gio.Cancellable): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_update_async(sparql: string, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_update_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_update_array_finish(_res_: Gio.AsyncResult): SparqlError[];

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_update_blank(sparql: string, priority: number, cancellable: Gio.Cancellable): GLib.Variant;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_update_blank_async(sparql: string, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant;

        /**
         * @param file 
         * @param cancellable 
         * @virtual
         */
        vfunc_load(file: Gio.File, cancellable: Gio.Cancellable): void;

        /**
         * @param file 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_load_async(file: Gio.File, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_load_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param cancellable 
         * @virtual
         */
        vfunc_statistics(cancellable: Gio.Cancellable): SparqlCursor;

        /**
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_statistics_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_statistics_finish(_res_: Gio.AsyncResult): SparqlCursor;

        // Methods
        /**
         * @param sparql 
         * @param cancellable 
         * @throws GLib.Error
         */
        query(sparql: string, cancellable: Gio.Cancellable): SparqlCursor;

        /**
         * @param sparql 
         * @param cancellable 
         */
        query_async(sparql: string, cancellable: Gio.Cancellable): globalThis.Promise<SparqlCursor>;

        /**
         * @param sparql 
         * @param cancellable 
         * @param _callback_ 
         */
        query_async(sparql: string, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param sparql 
         * @param cancellable 
         * @param _callback_ 
         */
        query_async(sparql: string, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<SparqlCursor> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        query_finish(_res_: Gio.AsyncResult): SparqlCursor;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @throws GLib.Error
         */
        update(sparql: string, priority: number, cancellable: Gio.Cancellable): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update_async(sparql: string, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<void>;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_async(sparql: string, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_async(sparql: string, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        update_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable): globalThis.Promise<SparqlError[]>;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<SparqlError[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        update_array_finish(_res_: Gio.AsyncResult): SparqlError[];

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @throws GLib.Error
         */
        update_blank(sparql: string, priority: number, cancellable: Gio.Cancellable): GLib.Variant;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update_blank_async(sparql: string, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<GLib.Variant>;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_blank_async(sparql: string, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_blank_async(sparql: string, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<GLib.Variant> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant;

        /**
         * @param file 
         * @param cancellable 
         * @throws GLib.Error
         */
        load(file: Gio.File, cancellable: Gio.Cancellable): void;

        /**
         * @param file 
         * @param cancellable 
         */
        load_async(file: Gio.File, cancellable: Gio.Cancellable): globalThis.Promise<void>;

        /**
         * @param file 
         * @param cancellable 
         * @param _callback_ 
         */
        load_async(file: Gio.File, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param file 
         * @param cancellable 
         * @param _callback_ 
         */
        load_async(file: Gio.File, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        load_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param cancellable 
         * @throws GLib.Error
         */
        statistics(cancellable: Gio.Cancellable): SparqlCursor;

        /**
         * @param cancellable 
         */
        statistics_async(cancellable: Gio.Cancellable): globalThis.Promise<SparqlCursor>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        statistics_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        statistics_async(cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<SparqlCursor> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        statistics_finish(_res_: Gio.AsyncResult): SparqlCursor;
    }


    namespace SparqlCursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::n-columns": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: SparqlConnection;
            n_columns: number;
            nColumns: number;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class SparqlCursor extends GObject.Object {
        static $gtype: GObject.GType<SparqlCursor>;

        // Properties
        get connection(): SparqlConnection;
        set connection(val: SparqlConnection);

        /**
         * @read-only
         */
        get n_columns(): number;

        /**
         * @read-only
         */
        get nColumns(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SparqlCursor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SparqlCursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SparqlCursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SparqlCursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SparqlCursor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlCursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param column 
         * @virtual
         */
        vfunc_get_value_type(column: number): SparqlValueType;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_variable_name(column: number): string;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_string(column: number): [string, bigint | number];

        /**
         * @param cancellable 
         * @virtual
         */
        vfunc_next(cancellable: Gio.Cancellable): boolean;

        /**
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_next_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_next_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @virtual
         */
        vfunc_rewind(): void;

        /**
         * @virtual
         */
        vfunc_close(): void;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_integer(column: number): bigint | number;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_double(column: number): number;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_boolean(column: number): boolean;

        /**
         * @param column 
         * @virtual
         */
        vfunc_is_bound(column: number): boolean;

        /**
         * @virtual
         */
        vfunc_get_n_columns(): number;

        // Methods
        /**
         * @param column 
         */
        get_value_type(column: number): SparqlValueType;

        /**
         * @param column 
         */
        get_variable_name(column: number): string;

        /**
         * @param column 
         */
        get_string(column: number): [string, number];

        /**
         * @param cancellable 
         * @throws GLib.Error
         */
        next(cancellable: Gio.Cancellable): boolean;

        /**
         * @param cancellable 
         */
        next_async(cancellable: Gio.Cancellable): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        next_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        next_async(cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<boolean> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        next_finish(_res_: Gio.AsyncResult): boolean;

        rewind(): void;

        close(): void;

        /**
         * @param column 
         */
        get_integer(column: number): number;

        /**
         * @param column 
         */
        get_double(column: number): number;

        /**
         * @param column 
         */
        get_boolean(column: number): boolean;

        /**
         * @param column 
         */
        is_bound(column: number): boolean;

        get_connection(): SparqlConnection;

        /**
         * @param value 
         */
        set_connection(value: SparqlConnection): void;

        get_n_columns(): number;
    }


    /**
     * @gir-type Alias
     */
    type SparqlBuilderClass = typeof SparqlBuilder;

    /**
     * @gir-type Struct
     */
    abstract class SparqlBuilderPrivate {
        static $gtype: GObject.GType<SparqlBuilderPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SparqlConnectionClass = typeof SparqlConnection;

    /**
     * @gir-type Struct
     */
    abstract class SparqlConnectionPrivate {
        static $gtype: GObject.GType<SparqlConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SparqlCursorClass = typeof SparqlCursor;

    /**
     * @gir-type Struct
     */
    abstract class SparqlCursorPrivate {
        static $gtype: GObject.GType<SparqlCursorPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class SparqlError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static PARSE: number;

        static UNKNOWN_CLASS: number;

        static UNKNOWN_PROPERTY: number;

        static TYPE: number;

        static CONSTRAINT: number;

        static NO_SPACE: number;

        static INTERNAL: number;

        static UNSUPPORTED: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


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

export default Tracker;

// END
