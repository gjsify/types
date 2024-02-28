/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './tracker-1.0-ambient.d.ts';
import './tracker-1.0-import.d.ts';
/**
 * Tracker-1.0
 */

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';

export namespace Tracker {
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
    class Error extends GLib.Error {
        // Own fields of Tracker-1.0.Error

        PARSE: number;
        UNKNOWN_CLASS: number;
        UNKNOWN_PROPERTY: number;
        TYPE: number;
        CONSTRAINT: number;
        NO_SPACE: number;
        INTERNAL: number;
        UNSUPPORTED: number;

        // Constructors of Tracker-1.0.Error

        constructor(options: { message: string; code: number });
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
    module SparqlBuilder {
        // Constructor properties interface
    }

    class SparqlBuilder extends GObject.Object {
        // Own properties of Tracker-1.0.SparqlBuilder

        readonly result: string;
        length: number;
        readonly state: SparqlBuilderState;

        // Constructors of Tracker-1.0.SparqlBuilder

        static update(): SparqlBuilder;

        static embedded_insert(): SparqlBuilder;

        static ['new'](): SparqlBuilder;

        // Owm methods of Tracker-1.0.SparqlBuilder

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
        object_date(literal: number): void;
        object_double(literal: number): void;
        object_blank_open(): void;
        object_blank_close(): void;
        prepend(raw: string): void;
        append(raw: string): void;
        get_result(): string;
        get_length(): number;
        get_state(): SparqlBuilderState;
    }

    module SparqlConnection {
        // Constructor properties interface
    }

    abstract class SparqlConnection extends GObject.Object {
        // Owm methods of Tracker-1.0.SparqlConnection

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

        // Owm methods of Tracker-1.0.SparqlConnection

        query(sparql: string, cancellable: Gio.Cancellable): SparqlCursor;
        query_async(sparql: string, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        query_finish(_res_: Gio.AsyncResult): SparqlCursor;
        update(sparql: string, priority: number, cancellable: Gio.Cancellable): void;
        update_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        update_finish(_res_: Gio.AsyncResult): void;
        update_array_async(
            sparql: string[],
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        update_array_finish(_res_: Gio.AsyncResult): SparqlError[];
        update_blank(sparql: string, priority: number, cancellable: Gio.Cancellable): GLib.Variant;
        update_blank_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant;
        load(file: Gio.File, cancellable: Gio.Cancellable): void;
        load_async(file: Gio.File, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        load_finish(_res_: Gio.AsyncResult): void;
        statistics(cancellable: Gio.Cancellable): SparqlCursor;
        statistics_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        statistics_finish(_res_: Gio.AsyncResult): SparqlCursor;
    }

    module SparqlCursor {
        // Constructor properties interface
    }

    abstract class SparqlCursor extends GObject.Object {
        // Own properties of Tracker-1.0.SparqlCursor

        connection: SparqlConnection;
        readonly n_columns: number;
        readonly nColumns: number;

        // Owm methods of Tracker-1.0.SparqlCursor

        get_value_type(column: number): SparqlValueType;
        get_variable_name(column: number): string;
        get_string(column: number): string;
        next(cancellable: Gio.Cancellable): boolean;
        next_async(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
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

    class SparqlBuilderClass {}

    class SparqlBuilderPrivate {}

    class SparqlConnectionClass {}

    class SparqlConnectionPrivate {}

    class SparqlCursorClass {}

    class SparqlCursorPrivate {}

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
