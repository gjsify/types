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

    export namespace SparqlValueType {
        export const $gtype: GObject.GType<SparqlValueType>;
    }

    enum SparqlValueType {
        UNBOUND,
        URI,
        STRING,
        INTEGER,
        DOUBLE,
        DATETIME,
        BLANK_NODE,
        BOOLEAN,
    }

    export namespace SparqlBuilderState {
        export const $gtype: GObject.GType<SparqlBuilderState>;
    }

    enum SparqlBuilderState {
        UPDATE,
        INSERT,
        DELETE,
        SUBJECT,
        PREDICATE,
        OBJECT,
        BLANK,
        WHERE,
        EMBEDDED_INSERT,
        GRAPH,
    }
    const DBUS_SERVICE: string;
    const DBUS_INTERFACE_RESOURCES: string;
    const DBUS_OBJECT_RESOURCES: string;
    const DBUS_INTERFACE_STATISTICS: string;
    const DBUS_OBJECT_STATISTICS: string;
    const DBUS_INTERFACE_STATUS: string;
    const DBUS_OBJECT_STATUS: string;
    const DBUS_INTERFACE_STEROIDS: string;
    const DBUS_OBJECT_STEROIDS: string;
    function sparql_escape_uri(uri: string): string;
    function sparql_escape_string(literal: string): string;
    function sparql_get_uuid_urn(): string;
    namespace SparqlBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::result': (pspec: GObject.ParamSpec) => void;
            'notify::length': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            result: string;
            length: number;
            state: SparqlBuilderState;
        }
    }

    class SparqlBuilder extends GObject.Object {
        static $gtype: GObject.GType<SparqlBuilder>;

        // Properties

        get result(): string;
        get length(): number;
        set length(val: number);
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

        static ['new'](): SparqlBuilder;

        // Signals

        connect<K extends keyof SparqlBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SparqlBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SparqlBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SparqlBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        insert_open(graph: string): void;
        insert_silent_open(graph: string): void;
        insert_close(): void;
        delete_open(graph: string): void;
        delete_close(): void;
        graph_open(graph: string): void;
        graph_close(): void;
        where_open(): void;
        where_close(): void;
        subject_variable(var_name: string): void;
        object_variable(var_name: string): void;
        subject_iri(iri: string): void;
        subject(s: string): void;
        predicate_iri(iri: string): void;
        predicate(s: string): void;
        object_iri(iri: string): void;
        object(s: string): void;
        object_string(literal: string): void;
        object_unvalidated(value: string): void;
        object_boolean(literal: boolean): void;
        object_int64(literal: number): void;
        object_date(literal: number): number;
        object_double(literal: number): void;
        object_blank_open(): void;
        object_blank_close(): void;
        prepend(raw: string): void;
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

        connect<K extends keyof SparqlConnection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SparqlConnection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SparqlConnection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SparqlConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<SparqlConnection>): void;
        static get_finish(_res_: Gio.AsyncResult): SparqlConnection;
        static get(cancellable: Gio.Cancellable): SparqlConnection;
        static get_direct_async(
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<SparqlConnection>,
        ): void;
        static get_direct_finish(_res_: Gio.AsyncResult): SparqlConnection;
        static get_direct(cancellable: Gio.Cancellable): SparqlConnection;
        static remote_new(uri_base: string): SparqlConnection;

        // Virtual methods

        vfunc_query(sparql: string, cancellable: Gio.Cancellable): SparqlCursor;
        vfunc_query_async(sparql: string, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_query_finish(_res_: Gio.AsyncResult): SparqlCursor;
        vfunc_update(sparql: string, priority: number, cancellable: Gio.Cancellable): void;
        vfunc_update_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_update_finish(_res_: Gio.AsyncResult): void;
        vfunc_update_array_async(
            sparql: string[],
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_update_array_finish(_res_: Gio.AsyncResult): SparqlError[];
        vfunc_update_blank(sparql: string, priority: number, cancellable: Gio.Cancellable): GLib.Variant;
        vfunc_update_blank_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant;
        vfunc_load(file: Gio.File, cancellable: Gio.Cancellable): void;
        vfunc_load_async(file: Gio.File, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_load_finish(_res_: Gio.AsyncResult): void;
        vfunc_statistics(cancellable: Gio.Cancellable): SparqlCursor;
        vfunc_statistics_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_statistics_finish(_res_: Gio.AsyncResult): SparqlCursor;

        // Methods

        query(sparql: string, cancellable: Gio.Cancellable): SparqlCursor;
        query_async(sparql: string, cancellable: Gio.Cancellable): Promise<SparqlCursor>;
        query_async(sparql: string, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        query_async(
            sparql: string,
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<SparqlCursor> | void;
        query_finish(_res_: Gio.AsyncResult): SparqlCursor;
        update(sparql: string, priority: number, cancellable: Gio.Cancellable): void;
        update_async(sparql: string, priority: number, cancellable: Gio.Cancellable): Promise<void>;
        update_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        update_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<void> | void;
        update_finish(_res_: Gio.AsyncResult): void;
        update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable): Promise<SparqlError[]>;
        update_array_async(
            sparql: string[],
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        update_array_async(
            sparql: string[],
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<SparqlError[]> | void;
        update_array_finish(_res_: Gio.AsyncResult): SparqlError[];
        update_blank(sparql: string, priority: number, cancellable: Gio.Cancellable): GLib.Variant;
        update_blank_async(sparql: string, priority: number, cancellable: Gio.Cancellable): Promise<GLib.Variant>;
        update_blank_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        update_blank_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<GLib.Variant> | void;
        update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant;
        load(file: Gio.File, cancellable: Gio.Cancellable): void;
        load_async(file: Gio.File, cancellable: Gio.Cancellable): Promise<void>;
        load_async(file: Gio.File, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        load_async(
            file: Gio.File,
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<void> | void;
        load_finish(_res_: Gio.AsyncResult): void;
        statistics(cancellable: Gio.Cancellable): SparqlCursor;
        statistics_async(cancellable: Gio.Cancellable): Promise<SparqlCursor>;
        statistics_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        statistics_async(
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<SparqlCursor> | void;
        statistics_finish(_res_: Gio.AsyncResult): SparqlCursor;
    }

    namespace SparqlCursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::n-columns': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: SparqlConnection;
            n_columns: number;
            nColumns: number;
        }
    }

    abstract class SparqlCursor extends GObject.Object {
        static $gtype: GObject.GType<SparqlCursor>;

        // Properties

        get connection(): SparqlConnection;
        set connection(val: SparqlConnection);
        get n_columns(): number;
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

        connect<K extends keyof SparqlCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SparqlCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SparqlCursor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SparqlCursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_value_type(column: number): SparqlValueType;
        vfunc_get_variable_name(column: number): string;
        vfunc_get_string(column: number): [string, number];
        vfunc_next(cancellable: Gio.Cancellable): boolean;
        vfunc_next_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_next_finish(_res_: Gio.AsyncResult): boolean;
        vfunc_rewind(): void;
        vfunc_close(): void;
        vfunc_get_integer(column: number): number;
        vfunc_get_double(column: number): number;
        vfunc_get_boolean(column: number): boolean;
        vfunc_is_bound(column: number): boolean;
        vfunc_get_n_columns(): number;

        // Methods

        get_value_type(column: number): SparqlValueType;
        get_variable_name(column: number): string;
        get_string(column: number): [string, number];
        next(cancellable: Gio.Cancellable): boolean;
        next_async(cancellable: Gio.Cancellable): Promise<boolean>;
        next_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        next_async(cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): Promise<boolean> | void;
        next_finish(_res_: Gio.AsyncResult): boolean;
        rewind(): void;
        close(): void;
        get_integer(column: number): number;
        get_double(column: number): number;
        get_boolean(column: number): boolean;
        is_bound(column: number): boolean;
        get_connection(): SparqlConnection;
        set_connection(value: SparqlConnection): void;
        get_n_columns(): number;
    }

    type SparqlBuilderClass = typeof SparqlBuilder;
    abstract class SparqlBuilderPrivate {
        static $gtype: GObject.GType<SparqlBuilderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SparqlConnectionClass = typeof SparqlConnection;
    abstract class SparqlConnectionPrivate {
        static $gtype: GObject.GType<SparqlConnectionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SparqlCursorClass = typeof SparqlCursor;
    abstract class SparqlCursorPrivate {
        static $gtype: GObject.GType<SparqlCursorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class SparqlError extends GLib.Error {
        static $gtype: GObject.GType<SparqlError>;

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
        _init(...args: any[]): void;
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
