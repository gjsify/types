
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
enum Error {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
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
const DBUS_SERVICE: string
const DBUS_INTERFACE_RESOURCES: string
const DBUS_OBJECT_RESOURCES: string
const DBUS_INTERFACE_STATISTICS: string
const DBUS_OBJECT_STATISTICS: string
const DBUS_INTERFACE_STATUS: string
const DBUS_OBJECT_STATUS: string
const DBUS_INTERFACE_STEROIDS: string
const DBUS_OBJECT_STEROIDS: string
function sparql_escape_uri(uri: string): string | null
function sparql_escape_string(literal: string): string | null
function sparql_get_uuid_urn(): string | null
module SparqlBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-1.0.Tracker.SparqlBuilder

        length?: number | null
    }

}

interface SparqlBuilder {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilder

    readonly result: string | null
    length: number
    readonly state: SparqlBuilderState

    // Own fields of Tracker-1.0.Tracker.SparqlBuilder

    parent_instance: GObject.Object
    priv: SparqlBuilderPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlBuilder

    insert_open(graph?: string | null): void
    insert_silent_open(graph?: string | null): void
    insert_close(): void
    delete_open(graph?: string | null): void
    delete_close(): void
    graph_open(graph: string): void
    graph_close(): void
    where_open(): void
    where_close(): void
    subject_variable(var_name: string): void
    object_variable(var_name: string): void
    subject_iri(iri: string): void
    subject(s: string): void
    predicate_iri(iri: string): void
    predicate(s: string): void
    object_iri(iri: string): void
    object(s: string): void
    object_string(literal: string): void
    object_unvalidated(value: string): void
    object_boolean(literal: boolean): void
    object_int64(literal: number): void
    object_date(literal: number): /* literal */ number
    object_double(literal: number): void
    object_blank_open(): void
    object_blank_close(): void
    prepend(raw: string): void
    append(raw: string): void
    get_result(): string
    get_length(): number
    get_state(): SparqlBuilderState

    // Class property signals of Tracker-1.0.Tracker.SparqlBuilder

    connect(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::result", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparqlBuilder extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilder

    static name: string
    static $gtype: GObject.GType<SparqlBuilder>

    // Constructors of Tracker-1.0.Tracker.SparqlBuilder

    constructor(config?: SparqlBuilder.ConstructorProperties) 
    static update(): SparqlBuilder
    static embedded_insert(): SparqlBuilder
    constructor() 
    static new(): SparqlBuilder
    _init(config?: SparqlBuilder.ConstructorProperties): void
}

module SparqlConnection {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SparqlConnection {

    // Own fields of Tracker-1.0.Tracker.SparqlConnection

    parent_instance: GObject.Object
    priv: SparqlConnectionPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlConnection

    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    query_async(sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of query_async

    /**
     * Promisified version of {@link query_async}
     * 
     * 
     * @param sparql 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link query_async}
     */
    query_async(sparql: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<SparqlCursor>
    query_finish(_res_: Gio.AsyncResult): SparqlCursor
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_async

    /**
     * Promisified version of {@link update_async}
     * 
     * 
     * @param sparql 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link update_async}
     */
    update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>
    update_finish(_res_: Gio.AsyncResult): void
    update_array_async(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_array_async

    /**
     * Promisified version of {@link update_array_async}
     * 
     * 
     * @param sparql 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link update_array_async}
     */
    update_array_async(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<any[] | null>
    update_array_finish(_res_: Gio.AsyncResult): any[] | null
    update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    update_blank_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_blank_async

    /**
     * Promisified version of {@link update_blank_async}
     * 
     * 
     * @param sparql 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link update_blank_async}
     */
    update_blank_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>
    update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    load_async(file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of load_async

    /**
     * Promisified version of {@link load_async}
     * 
     * 
     * @param file 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link load_async}
     */
    load_async(file: Gio.File, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>
    load_finish(_res_: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    statistics_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of statistics_async

    /**
     * Promisified version of {@link statistics_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link statistics_async}
     */
    statistics_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<SparqlCursor | null>
    statistics_finish(_res_: Gio.AsyncResult): SparqlCursor | null

    // Own virtual methods of Tracker-1.0.Tracker.SparqlConnection

    vfunc_query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    vfunc_query_async(sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_query_finish(_res_: Gio.AsyncResult): SparqlCursor
    vfunc_update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    vfunc_update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_finish(_res_: Gio.AsyncResult): void
    vfunc_update_array_async(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_array_finish(_res_: Gio.AsyncResult): any[] | null
    vfunc_update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    vfunc_update_blank_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    vfunc_load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    vfunc_load_async(file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_load_finish(_res_: Gio.AsyncResult): void
    vfunc_statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    vfunc_statistics_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_statistics_finish(_res_: Gio.AsyncResult): SparqlCursor | null

    // Class property signals of Tracker-1.0.Tracker.SparqlConnection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlConnection

    static name: string
    static $gtype: GObject.GType<SparqlConnection>

    // Constructors of Tracker-1.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection.ConstructorProperties) 
    _init(config?: SparqlConnection.ConstructorProperties): void
    static get_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<SparqlConnection> | null): void
    static get_finish(_res_: Gio.AsyncResult): SparqlConnection
    static get(cancellable?: Gio.Cancellable | null): SparqlConnection
    static get_direct_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<SparqlConnection> | null): void
    static get_direct_finish(_res_: Gio.AsyncResult): SparqlConnection
    static get_direct(cancellable?: Gio.Cancellable | null): SparqlConnection
    static remote_new(uri_base: string): SparqlConnection
}

module SparqlCursor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-1.0.Tracker.SparqlCursor

        connection?: SparqlConnection | null
    }

}

interface SparqlCursor {

    // Own properties of Tracker-1.0.Tracker.SparqlCursor

    connection: SparqlConnection
    readonly nColumns: number

    // Own fields of Tracker-1.0.Tracker.SparqlCursor

    parent_instance: GObject.Object
    priv: SparqlCursorPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlCursor

    get_value_type(column: number): SparqlValueType
    get_variable_name(column: number): string | null
    get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable?: Gio.Cancellable | null): boolean
    next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of next_async

    /**
     * Promisified version of {@link next_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link next_async}
     */
    next_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>
    next_finish(_res_: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    get_integer(column: number): number
    get_double(column: number): number
    get_boolean(column: number): boolean
    is_bound(column: number): boolean
    get_connection(): SparqlConnection
    set_connection(value: SparqlConnection): void
    get_n_columns(): number

    // Own virtual methods of Tracker-1.0.Tracker.SparqlCursor

    vfunc_get_value_type(column: number): SparqlValueType
    vfunc_get_variable_name(column: number): string | null
    vfunc_get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    vfunc_next(cancellable?: Gio.Cancellable | null): boolean
    vfunc_next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_next_finish(_res_: Gio.AsyncResult): boolean
    vfunc_rewind(): void
    vfunc_close(): void
    vfunc_get_integer(column: number): number
    vfunc_get_double(column: number): number
    vfunc_get_boolean(column: number): boolean
    vfunc_is_bound(column: number): boolean
    vfunc_get_n_columns(): number

    // Class property signals of Tracker-1.0.Tracker.SparqlCursor

    connect(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlCursor

    static name: string
    static $gtype: GObject.GType<SparqlCursor>

    // Constructors of Tracker-1.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor.ConstructorProperties) 
    _init(config?: SparqlCursor.ConstructorProperties): void
}

interface SparqlBuilderClass {

    // Own fields of Tracker-1.0.Tracker.SparqlBuilderClass

    parent_class: GObject.ObjectClass
}

abstract class SparqlBuilderClass {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilderClass

    static name: string
}

interface SparqlBuilderPrivate {
}

class SparqlBuilderPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilderPrivate

    static name: string
}

interface SparqlConnectionClass {

    // Own fields of Tracker-1.0.Tracker.SparqlConnectionClass

    parent_class: GObject.ObjectClass
    query: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null) => SparqlCursor
    query_async: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    query_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => SparqlCursor
    update: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => void
    update_async: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => void
    update_array_async: (self: SparqlConnection, sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_array_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => any[] | null
    update_blank: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => GLib.Variant | null
    update_blank_async: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_blank_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => GLib.Variant | null
    load: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null) => void
    load_async: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    load_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => void
    statistics: (self: SparqlConnection, cancellable?: Gio.Cancellable | null) => SparqlCursor | null
    statistics_async: (self: SparqlConnection, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    statistics_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => SparqlCursor | null
}

abstract class SparqlConnectionClass {

    // Own properties of Tracker-1.0.Tracker.SparqlConnectionClass

    static name: string
}

interface SparqlConnectionPrivate {
}

class SparqlConnectionPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlConnectionPrivate

    static name: string
}

interface SparqlCursorClass {

    // Own fields of Tracker-1.0.Tracker.SparqlCursorClass

    parent_class: GObject.ObjectClass
    get_value_type: (self: SparqlCursor, column: number) => SparqlValueType
    get_variable_name: (self: SparqlCursor, column: number) => string | null
    get_string: (self: SparqlCursor, column: number) => [ /* returnType */ string | null, /* length */ number ]
    next: (self: SparqlCursor, cancellable?: Gio.Cancellable | null) => boolean
    next_async: (self: SparqlCursor, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    next_finish: (self: SparqlCursor, _res_: Gio.AsyncResult) => boolean
    rewind: (self: SparqlCursor) => void
    close: (self: SparqlCursor) => void
    get_integer: (self: SparqlCursor, column: number) => number
    get_double: (self: SparqlCursor, column: number) => number
    get_boolean: (self: SparqlCursor, column: number) => boolean
    is_bound: (self: SparqlCursor, column: number) => boolean
}

abstract class SparqlCursorClass {

    // Own properties of Tracker-1.0.Tracker.SparqlCursorClass

    static name: string
}

interface SparqlCursorPrivate {
}

class SparqlCursorPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlCursorPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Tracker;
// END