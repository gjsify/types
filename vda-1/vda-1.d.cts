
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Vda-1
 */

import type GCalc from '@girs/gcalc-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Json from '@girs/json-1.0';
import type GXml from '@girs/gxml-0.20';
import type libxml2 from '@girs/libxml2-2.0';

export enum MoveDirection {
    FORWARD,
    BACKWARD,
    RELATIVE,
}
export enum MetaObjectError {
    APPEND,
    UPDATE,
    SAVE,
    DROP,
}
export enum ConnectionError {
    NO_DATABASE_NAME_ERROR,
    SERVER_ERROR,
    QUERY_CREATION_ERROR,
}
export enum DataObjectError {
    SELECT_ERROR,
    INSERT_ERROR,
    DELETE_ERROR,
    UPDATE_ERROR,
    PARAMETERS_ERROR,
    NO_CONNECTION_ERROR,
}
export enum DataCollectionError {
    INVALID_PROPERTY_ERROR,
}
export enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
export enum QueryError {
    INVALID_QUERY_ERROR,
    INVALID_CONNECTION_ERROR,
    GENERAL_ERROR,
}
export enum RoleError {
    PROVILAGE_ERROR,
}
export enum RowModelError {
    INVALID_COLUMN_NAME_ERROR,
    INVALID_COLUMN_NUMBER_ERROR,
}
export enum SqlCommandError {
    INVALID_STRUCTURE_ERROR,
}
export enum SqlCommandSelectError {
    INVALID_FIELDS_ERROR,
}
export enum SqlExpressionError {
    INVALID_EXPRESSION_ERROR,
}
export enum ConnectionStatus {
    INVALID,
    IN_PROGRESS,
    CANCELED,
    MADE,
    DISCONNECTED,
    TIMEOUT,
    CONNECTED,
}
export enum SqlExpressionOperatorType {
    NONE,
    AND,
    OR,
    EQ,
    IS,
    LIKE,
    BETWEEN,
    NOT_BETWEEN,
    BETWEEN_SYMMETRIC,
    NOT_BETWEEN_SYMMETRIC,
    IS_DISTINCT_FROM,
    IS_NOT_DISTINCT_FROM,
    GT,
    LT,
    GEQ,
    LEQ,
    DIFF,
    REGEXP,
    REGEXP_CI,
    NOT_REGEXP,
    NOT_REGEXP_CI,
    SIMILAR_TO,
    IS_NULL,
    IS_NOT_NULL,
    IS_TRUE,
    IS_NOT_TRUE,
    IS_FALSE,
    IS_NOT_FALSE,
    IS_UNKNOWN,
    IS_NOT_UNKNOWN,
    NOT,
    IN,
    NOT_IN,
    CONCATENATE,
    PLUS,
    MINUS,
    STAR,
    DIV,
    REM,
    BITAND,
    BITOR,
    BITNOT,
    ILIKE,
}
export enum RoleGrant {
    NONE,
    SELECT,
    INSERT,
    UPDATE,
    DELETE,
    TRUNCATE,
    REFERENCES,
    TRIGGER,
    CREATE,
    USAGE,
    PRIVILEGES,
}
export module MetaObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.MetaObject

        connection?: Connection | null
    }

}

export interface MetaObject extends GObject.Object {

    // Own properties of Vda-1.Vda.MetaObject

    connection: Connection

    // Owm methods of Vda-1.Vda.MetaObject

    get_connection(): Connection
    set_connection(value: Connection): void

    // Own virtual methods of Vda-1.Vda.MetaObject

    vfunc_get_connection(): Connection
    vfunc_set_connection(value: Connection): void

    // Class property signals of Vda-1.Vda.MetaObject

    connect(sigName: "notify::connection", callback: (($obj: MetaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: MetaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MetaObject {

    // Own properties of Vda-1.Vda.MetaObject

    static name: string
    static $gtype: GObject.GType<MetaObject>

    // Constructors of Vda-1.Vda.MetaObject

    constructor(config?: MetaObject.ConstructorProperties) 
    _init(config?: MetaObject.ConstructorProperties): void
}

export module MetaNamedObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MetaObject.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.MetaNamedObject

        name?: string | null
    }

}

export interface MetaNamedObject extends GObject.Object, MetaObject {

    // Own properties of Vda-1.Vda.MetaNamedObject

    name: string | null

    // Owm methods of Vda-1.Vda.MetaNamedObject

    get_name(): string | null
    set_name(value: string | null): void

    // Own virtual methods of Vda-1.Vda.MetaNamedObject

    vfunc_get_name(): string | null
    vfunc_set_name(value: string | null): void

    // Class property signals of Vda-1.Vda.MetaNamedObject

    connect(sigName: "notify::name", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: MetaNamedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MetaNamedObject {

    // Own properties of Vda-1.Vda.MetaNamedObject

    static name: string
    static $gtype: GObject.GType<MetaNamedObject>

    // Constructors of Vda-1.Vda.MetaNamedObject

    constructor(config?: MetaNamedObject.ConstructorProperties) 
    _init(config?: MetaNamedObject.ConstructorProperties): void
}

export module ColumnModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ColumnModel extends GObject.Object {

    // Own properties of Vda-1.Vda.ColumnModel

    readonly name: string | null
    readonly data_type: GObject.GType

    // Owm methods of Vda-1.Vda.ColumnModel

    get_name(): string | null
    get_data_type(): GObject.GType

    // Own virtual methods of Vda-1.Vda.ColumnModel

    vfunc_get_name(): string | null
    vfunc_get_data_type(): GObject.GType

    // Class property signals of Vda-1.Vda.ColumnModel

    connect(sigName: "notify::name", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ColumnModel {

    // Own properties of Vda-1.Vda.ColumnModel

    static name: string
    static $gtype: GObject.GType<ColumnModel>

    // Constructors of Vda-1.Vda.ColumnModel

    constructor(config?: ColumnModel.ConstructorProperties) 
    _init(config?: ColumnModel.ConstructorProperties): void
}

export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `opened`
     */
    export interface OpenedSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `closing`
     */
    export interface ClosingSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `canceled`
     */
    export interface CanceledSignalCallback {
        ($obj: Connection, message: string | null): void
    }

    /**
     * Signal callback interface for `timeout`
     */
    export interface TimeoutSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    export interface DisconnectedSignalCallback {
        ($obj: Connection): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.Connection

        parameters?: ConnectionParameters | null
    }

}

export interface Connection extends GObject.Object {

    // Own properties of Vda-1.Vda.Connection

    readonly status: ConnectionStatus
    parameters: ConnectionParameters
    readonly is_opened: boolean
    readonly connection_string: string | null

    // Owm methods of Vda-1.Vda.Connection

    close(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    close_finish(_res_: Gio.AsyncResult): void
    open(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    open_finish(_res_: Gio.AsyncResult): ConnectionStatus
    open_from_string(cnc_string: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    open_from_string_finish(_res_: Gio.AsyncResult): ConnectionStatus
    parse_string(sql: string | null): Query
    parse_string_prepared(name: string | null, sql: string | null): PreparedQuery | null
    get_prepared_query(name: string | null): PreparedQuery | null
    query_from_command(cmd: SqlCommand, name?: string | null): PreparedQuery | null
    value_to_quoted_string(v: SqlValue): string | null
    locale(category: string | null): string | null
    get_status(): ConnectionStatus
    get_parameters(): ConnectionParameters
    set_parameters(value: ConnectionParameters): void
    get_is_opened(): boolean
    get_connection_string(): string | null

    // Own virtual methods of Vda-1.Vda.Connection

    vfunc_close(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_close_finish(_res_: Gio.AsyncResult): void
    vfunc_open(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_open_finish(_res_: Gio.AsyncResult): ConnectionStatus
    vfunc_open_from_string(cnc_string: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_open_from_string_finish(_res_: Gio.AsyncResult): ConnectionStatus
    vfunc_parse_string(sql: string | null): Query
    vfunc_parse_string_prepared(name: string | null, sql: string | null): PreparedQuery | null
    vfunc_get_prepared_query(name: string | null): PreparedQuery | null
    vfunc_query_from_command(cmd: SqlCommand, name?: string | null): PreparedQuery | null
    vfunc_value_to_quoted_string(v: SqlValue): string | null
    vfunc_locale(category: string | null): string | null
    vfunc_get_status(): ConnectionStatus
    vfunc_get_parameters(): ConnectionParameters
    vfunc_set_parameters(value: ConnectionParameters): void
    vfunc_get_is_opened(): boolean
    vfunc_get_connection_string(): string | null

    // Own signals of Vda-1.Vda.Connection

    connect(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    connect_after(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    emit(sigName: "opened", ...args: any[]): void
    connect(sigName: "closing", callback: Connection.ClosingSignalCallback): number
    connect_after(sigName: "closing", callback: Connection.ClosingSignalCallback): number
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "canceled", callback: Connection.CanceledSignalCallback): number
    connect_after(sigName: "canceled", callback: Connection.CanceledSignalCallback): number
    emit(sigName: "canceled", message: string | null, ...args: any[]): void
    connect(sigName: "timeout", callback: Connection.TimeoutSignalCallback): number
    connect_after(sigName: "timeout", callback: Connection.TimeoutSignalCallback): number
    emit(sigName: "timeout", ...args: any[]): void
    connect(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void

    // Class property signals of Vda-1.Vda.Connection

    connect(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-opened", ...args: any[]): void
    connect(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Connection {

    // Own properties of Vda-1.Vda.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of Vda-1.Vda.Connection

    constructor(config?: Connection.ConstructorProperties) 
    _init(config?: Connection.ConstructorProperties): void
}

export module ConnectionBlob {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConnectionBlob extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionBlob

    create(stream: Gio.InputStream): SqlValueBlob
    delete(val: SqlValueBlob): void

    // Own virtual methods of Vda-1.Vda.ConnectionBlob

    vfunc_create(stream: Gio.InputStream): SqlValueBlob
    vfunc_delete(val: SqlValueBlob): void

    // Class property signals of Vda-1.Vda.ConnectionBlob

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionBlob {

    // Own properties of Vda-1.Vda.ConnectionBlob

    static name: string
    static $gtype: GObject.GType<ConnectionBlob>

    // Constructors of Vda-1.Vda.ConnectionBlob

    constructor(config?: ConnectionBlob.ConstructorProperties) 
    _init(config?: ConnectionBlob.ConstructorProperties): void
}

export module ConnectionRolebased {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConnectionRolebased extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionRolebased

    current_role(): Role | null
    create_role(name: string | null, params: Parameters): Role | null

    // Own virtual methods of Vda-1.Vda.ConnectionRolebased

    vfunc_current_role(): Role | null
    vfunc_create_role(name: string | null, params: Parameters): Role | null

    // Class property signals of Vda-1.Vda.ConnectionRolebased

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionRolebased {

    // Own properties of Vda-1.Vda.ConnectionRolebased

    static name: string
    static $gtype: GObject.GType<ConnectionRolebased>

    // Constructors of Vda-1.Vda.ConnectionRolebased

    constructor(config?: ConnectionRolebased.ConstructorProperties) 
    _init(config?: ConnectionRolebased.ConstructorProperties): void
}

export module ConnectionTransactional {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConnectionTransactional extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionTransactional

    add_savepoint(name?: string | null): boolean
    delete_savepoint(name?: string | null): boolean
    rollback_savepoint(name?: string | null): boolean
    begin_transaction(name?: string | null): boolean
    commit_transaction(name?: string | null): boolean
    rollback_transaction(name?: string | null): boolean

    // Own virtual methods of Vda-1.Vda.ConnectionTransactional

    vfunc_add_savepoint(name?: string | null): boolean
    vfunc_delete_savepoint(name?: string | null): boolean
    vfunc_rollback_savepoint(name?: string | null): boolean
    vfunc_begin_transaction(name?: string | null): boolean
    vfunc_commit_transaction(name?: string | null): boolean
    vfunc_rollback_transaction(name?: string | null): boolean

    // Class property signals of Vda-1.Vda.ConnectionTransactional

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionTransactional {

    // Own properties of Vda-1.Vda.ConnectionTransactional

    static name: string
    static $gtype: GObject.GType<ConnectionTransactional>

    // Constructors of Vda-1.Vda.ConnectionTransactional

    constructor(config?: ConnectionTransactional.ConstructorProperties) 
    _init(config?: ConnectionTransactional.ConstructorProperties): void
}

export module DataObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.DataObject

        database_connection?: Connection | null
        database_table_name?: string | null
        cancellable?: Gio.Cancellable | null
    }

}

export interface DataObject extends GObject.Object {

    // Own properties of Vda-1.Vda.DataObject

    database_connection: Connection
    database_table_name: string | null
    cancellable: Gio.Cancellable

    // Owm methods of Vda-1.Vda.DataObject

    update_data_from_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    update_data_from_db_finish(_res_: Gio.AsyncResult): void
    update_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    update_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    update_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    update_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    insert_data_into_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    insert_data_into_db_finish(_res_: Gio.AsyncResult): void
    delete_data_from_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    delete_data_from_db_finish(_res_: Gio.AsyncResult): void
    delete_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    delete_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    delete_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    delete_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    update_data_into_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    update_data_into_db_finish(_res_: Gio.AsyncResult): void
    update_data_into_db_pkey(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    update_data_into_db_pkey_finish(_res_: Gio.AsyncResult): void
    update_data_into_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    update_data_into_db_full_finish(_res_: Gio.AsyncResult): void
    update_from_row(table: TableModel, nrow: number): void
    get_database_connection(): Connection
    set_database_connection(value: Connection): void
    get_database_table_name(): string | null
    set_database_table_name(value: string | null): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void

    // Own virtual methods of Vda-1.Vda.DataObject

    vfunc_update_data_from_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_data_from_db_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    vfunc_insert_data_into_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_insert_data_into_db_finish(_res_: Gio.AsyncResult): void
    vfunc_delete_data_from_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_delete_data_from_db_finish(_res_: Gio.AsyncResult): void
    vfunc_delete_data_from_db_pkey(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_delete_data_from_db_pkey_finish(_res_: Gio.AsyncResult): void
    vfunc_delete_data_from_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_delete_data_from_db_full_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_into_db(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_data_into_db_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_into_db_pkey(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_data_into_db_pkey_finish(_res_: Gio.AsyncResult): void
    vfunc_update_data_into_db_full(use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_data_into_db_full_finish(_res_: Gio.AsyncResult): void
    vfunc_update_from_row(table: TableModel, nrow: number): void
    vfunc_get_database_connection(): Connection
    vfunc_set_database_connection(value: Connection): void
    vfunc_get_database_table_name(): string | null
    vfunc_set_database_table_name(value: string | null): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void

    // Class property signals of Vda-1.Vda.DataObject

    connect(sigName: "notify::database-connection", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-connection", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database-connection", ...args: any[]): void
    connect(sigName: "notify::database-table-name", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-table-name", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database-table-name", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: DataObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataObject {

    // Own properties of Vda-1.Vda.DataObject

    static name: string
    static $gtype: GObject.GType<DataObject>

    // Constructors of Vda-1.Vda.DataObject

    constructor(config?: DataObject.ConstructorProperties) 
    _init(config?: DataObject.ConstructorProperties): void
    static create_select_query(obj: DataObject, use_pkey: boolean): SqlCommandSelect
    static create_select_all(obj: DataObject): SqlCommandSelect
    static create_insert_query(obj: DataObject): SqlCommandInsert
    static create_delete_query(obj: DataObject, use_pkey: boolean): SqlCommandDelete
    static create_update_query(obj: DataObject, use_pkey: boolean): SqlCommandUpdate
}

export module DataCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.DataCollection

        database_connection?: Connection | null
        cancellable?: Gio.Cancellable | null
    }

}

export interface DataCollection extends GObject.Object {

    // Own properties of Vda-1.Vda.DataCollection

    database_connection: Connection
    readonly parent_property: string | null
    readonly parent: DataObject
    readonly object_type: GObject.GType
    readonly ref_field: string | null
    cancellable: Gio.Cancellable

    // Owm methods of Vda-1.Vda.DataCollection

    get_objects(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    get_objects_finish(_res_: Gio.AsyncResult): TableModel
    get_database_connection(): Connection
    set_database_connection(value: Connection): void
    get_parent_property(): string | null
    get_parent(): DataObject
    get_object_type(): GObject.GType
    get_ref_field(): string | null
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void

    // Own virtual methods of Vda-1.Vda.DataCollection

    vfunc_get_objects(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_objects_finish(_res_: Gio.AsyncResult): TableModel
    vfunc_get_database_connection(): Connection
    vfunc_set_database_connection(value: Connection): void
    vfunc_get_parent_property(): string | null
    vfunc_get_parent(): DataObject
    vfunc_get_object_type(): GObject.GType
    vfunc_get_ref_field(): string | null
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void

    // Class property signals of Vda-1.Vda.DataCollection

    connect(sigName: "notify::database-connection", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-connection", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database-connection", ...args: any[]): void
    connect(sigName: "notify::parent-property", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-property", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-property", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::ref-field", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-field", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-field", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: DataCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataCollection {

    // Own properties of Vda-1.Vda.DataCollection

    static name: string
    static $gtype: GObject.GType<DataCollection>

    // Constructors of Vda-1.Vda.DataCollection

    constructor(config?: DataCollection.ConstructorProperties) 
    _init(config?: DataCollection.ConstructorProperties): void
}

export module HashModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties {
    }

}

export interface HashModel extends GObject.Object, Gio.ListModel {

    // Owm methods of Vda-1.Vda.HashModel

    add(object: GObject.Object): void
    find(key: GObject.Object): GObject.Object | null
    remove(object: GObject.Object): void

    // Own virtual methods of Vda-1.Vda.HashModel

    vfunc_add(object: GObject.Object): void
    vfunc_find(key: GObject.Object): GObject.Object | null
    vfunc_remove(object: GObject.Object): void

    // Class property signals of Vda-1.Vda.HashModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HashModel {

    // Own properties of Vda-1.Vda.HashModel

    static name: string
    static $gtype: GObject.GType<HashModel>

    // Constructors of Vda-1.Vda.HashModel

    constructor(config?: HashModel.ConstructorProperties) 
    _init(config?: HashModel.ConstructorProperties): void
}

export module Inserted {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface Inserted extends GObject.Object, Result {

    // Own properties of Vda-1.Vda.Inserted

    readonly number: number
    readonly last_inserted: RowModel

    // Owm methods of Vda-1.Vda.Inserted

    get_number(): number
    get_last_inserted(): RowModel

    // Own virtual methods of Vda-1.Vda.Inserted

    vfunc_get_number(): number
    vfunc_get_last_inserted(): RowModel

    // Class property signals of Vda-1.Vda.Inserted

    connect(sigName: "notify::number", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::last-inserted", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-inserted", callback: (($obj: Inserted, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-inserted", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Inserted {

    // Own properties of Vda-1.Vda.Inserted

    static name: string
    static $gtype: GObject.GType<Inserted>

    // Constructors of Vda-1.Vda.Inserted

    constructor(config?: Inserted.ConstructorProperties) 
    _init(config?: Inserted.ConstructorProperties): void
}

export module ParsedQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, PreparedQuery.ConstructorProperties {
    }

}

export interface ParsedQuery extends GObject.Object, PreparedQuery {

    // Own properties of Vda-1.Vda.ParsedQuery

    readonly command: SqlCommand

    // Owm methods of Vda-1.Vda.ParsedQuery

    get_command(): SqlCommand

    // Own virtual methods of Vda-1.Vda.ParsedQuery

    vfunc_get_command(): SqlCommand

    // Class property signals of Vda-1.Vda.ParsedQuery

    connect(sigName: "notify::command", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::command", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ParsedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ParsedQuery {

    // Own properties of Vda-1.Vda.ParsedQuery

    static name: string
    static $gtype: GObject.GType<ParsedQuery>

    // Constructors of Vda-1.Vda.ParsedQuery

    constructor(config?: ParsedQuery.ConstructorProperties) 
    _init(config?: ParsedQuery.ConstructorProperties): void
}

export module PreparedQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Query.ConstructorProperties {
    }

}

export interface PreparedQuery extends GObject.Object, Query {

    // Own properties of Vda-1.Vda.PreparedQuery

    readonly name: string | null
    readonly parameters: SqlParameters

    // Owm methods of Vda-1.Vda.PreparedQuery

    get_name(): string | null
    get_parameters(): SqlParameters

    // Own virtual methods of Vda-1.Vda.PreparedQuery

    vfunc_get_name(): string | null
    vfunc_get_parameters(): SqlParameters

    // Class property signals of Vda-1.Vda.PreparedQuery

    connect(sigName: "notify::name", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: PreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PreparedQuery {

    // Own properties of Vda-1.Vda.PreparedQuery

    static name: string
    static $gtype: GObject.GType<PreparedQuery>

    // Constructors of Vda-1.Vda.PreparedQuery

    constructor(config?: PreparedQuery.ConstructorProperties) 
    _init(config?: PreparedQuery.ConstructorProperties): void
}

export module Query {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Query extends GObject.Object {

    // Own properties of Vda-1.Vda.Query

    readonly sql: string | null
    readonly connection: Connection

    // Owm methods of Vda-1.Vda.Query

    execute(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    execute_finish(_res_: Gio.AsyncResult): Result | null
    cancel(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    cancel_finish(_res_: Gio.AsyncResult): void
    render_sql(): string | null
    get_sql(): string | null
    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.Query

    vfunc_execute(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_execute_finish(_res_: Gio.AsyncResult): Result | null
    vfunc_cancel(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_cancel_finish(_res_: Gio.AsyncResult): void
    vfunc_render_sql(): string | null
    vfunc_get_sql(): string | null
    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.Query

    connect(sigName: "notify::sql", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Query {

    // Own properties of Vda-1.Vda.Query

    static name: string
    static $gtype: GObject.GType<Query>

    // Constructors of Vda-1.Vda.Query

    constructor(config?: Query.ConstructorProperties) 
    _init(config?: Query.ConstructorProperties): void
}

export module Result {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Result extends GObject.Object {

    // Class property signals of Vda-1.Vda.Result

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Result {

    // Own properties of Vda-1.Vda.Result

    static name: string
    static $gtype: GObject.GType<Result>

    // Constructors of Vda-1.Vda.Result

    constructor(config?: Result.ConstructorProperties) 
    _init(config?: Result.ConstructorProperties): void
}

export module Role {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Role extends GObject.Object {

    // Own properties of Vda-1.Vda.Role

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.Role

    name(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    name_finish(_res_: Gio.AsyncResult): string | null
    membership(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    membership_finish(_res_: Gio.AsyncResult): HashModel
    privilages(object: MetaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    privilages_finish(_res_: Gio.AsyncResult): RoleGrant
    change_privilages(object: MetaObject, grant: RoleGrant, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_privilages_finish(_res_: Gio.AsyncResult): void
    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.Role

    vfunc_name(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_name_finish(_res_: Gio.AsyncResult): string | null
    vfunc_membership(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_membership_finish(_res_: Gio.AsyncResult): HashModel
    vfunc_privilages(object: MetaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_privilages_finish(_res_: Gio.AsyncResult): RoleGrant
    vfunc_change_privilages(object: MetaObject, grant: RoleGrant, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_privilages_finish(_res_: Gio.AsyncResult): void
    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.Role

    connect(sigName: "notify::connection", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Role {

    // Own properties of Vda-1.Vda.Role

    static name: string
    static $gtype: GObject.GType<Role>

    // Constructors of Vda-1.Vda.Role

    constructor(config?: Role.ConstructorProperties) 
    _init(config?: Role.ConstructorProperties): void
}

export module RowModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties {
    }

}

export interface RowModel extends GObject.Object, Gio.ListModel {

    // Own properties of Vda-1.Vda.RowModel

    readonly n_columns: number

    // Owm methods of Vda-1.Vda.RowModel

    get_column(name: string | null): ColumnModel | null
    get_column_at(col: number): ColumnModel | null
    get_value(name: string | null): SqlValue | null
    get_value_at(col: number): SqlValue | null
    get_string(name: string | null): string | null
    get_string_at(col: number): string | null
    get_n_columns(): number

    // Own virtual methods of Vda-1.Vda.RowModel

    vfunc_get_column(name: string | null): ColumnModel | null
    vfunc_get_column_at(col: number): ColumnModel | null
    vfunc_get_value(name: string | null): SqlValue | null
    vfunc_get_value_at(col: number): SqlValue | null
    vfunc_get_string(name: string | null): string | null
    vfunc_get_string_at(col: number): string | null
    vfunc_get_n_columns(): number

    // Class property signals of Vda-1.Vda.RowModel

    connect(sigName: "notify::n-columns", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RowModel {

    // Own properties of Vda-1.Vda.RowModel

    static name: string
    static $gtype: GObject.GType<RowModel>

    // Constructors of Vda-1.Vda.RowModel

    constructor(config?: RowModel.ConstructorProperties) 
    _init(config?: RowModel.ConstructorProperties): void
}

export module SqlAffectedRows {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface SqlAffectedRows extends GObject.Object, Result {

    // Own properties of Vda-1.Vda.SqlAffectedRows

    readonly number: number

    // Owm methods of Vda-1.Vda.SqlAffectedRows

    get_number(): number

    // Own virtual methods of Vda-1.Vda.SqlAffectedRows

    vfunc_get_number(): number

    // Class property signals of Vda-1.Vda.SqlAffectedRows

    connect(sigName: "notify::number", callback: (($obj: SqlAffectedRows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SqlAffectedRows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlAffectedRows {

    // Own properties of Vda-1.Vda.SqlAffectedRows

    static name: string
    static $gtype: GObject.GType<SqlAffectedRows>

    // Constructors of Vda-1.Vda.SqlAffectedRows

    constructor(config?: SqlAffectedRows.ConstructorProperties) 
    _init(config?: SqlAffectedRows.ConstructorProperties): void
}

export module SqlCommand {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlCommand extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommand

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.SqlCommand

    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.SqlCommand

    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.SqlCommand

    connect(sigName: "notify::connection", callback: (($obj: SqlCommand, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommand, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommand {

    // Own properties of Vda-1.Vda.SqlCommand

    static name: string
    static $gtype: GObject.GType<SqlCommand>

    // Constructors of Vda-1.Vda.SqlCommand

    constructor(config?: SqlCommand.ConstructorProperties) 
    _init(config?: SqlCommand.ConstructorProperties): void
}

export module SqlCommandConditional {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlCommandConditional extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandConditional

    readonly condition: SqlExpression

    // Owm methods of Vda-1.Vda.SqlCommandConditional

    get_condition(): SqlExpression

    // Own virtual methods of Vda-1.Vda.SqlCommandConditional

    vfunc_get_condition(): SqlExpression

    // Class property signals of Vda-1.Vda.SqlCommandConditional

    connect(sigName: "notify::condition", callback: (($obj: SqlCommandConditional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandConditional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandConditional {

    // Own properties of Vda-1.Vda.SqlCommandConditional

    static name: string
    static $gtype: GObject.GType<SqlCommandConditional>

    // Constructors of Vda-1.Vda.SqlCommandConditional

    constructor(config?: SqlCommandConditional.ConstructorProperties) 
    _init(config?: SqlCommandConditional.ConstructorProperties): void
}

export module SqlCommandDelete {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandConditional.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandDelete extends GObject.Object, SqlCommandTableRelated, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandDelete

    stringify(): string | null
    to_query(name?: string | null): Query
    parse(sql: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlCommandDelete

    vfunc_stringify(): string | null
    vfunc_to_query(name?: string | null): Query
    vfunc_parse(sql: string | null): void

    // Class property signals of Vda-1.Vda.SqlCommandDelete

    connect(sigName: "notify::table", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandDelete {

    // Own properties of Vda-1.Vda.SqlCommandDelete

    static name: string
    static $gtype: GObject.GType<SqlCommandDelete>

    // Constructors of Vda-1.Vda.SqlCommandDelete

    constructor(config?: SqlCommandDelete.ConstructorProperties) 
    _init(config?: SqlCommandDelete.ConstructorProperties): void
}

export module SqlCommandInsert {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandModification.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandInsert extends GObject.Object, SqlCommandTableRelated, SqlCommandModification, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandInsert

    stringify(): string | null
    to_query(name?: string | null): Query
    parse(sql: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlCommandInsert

    vfunc_stringify(): string | null
    vfunc_to_query(name?: string | null): Query
    vfunc_parse(sql: string | null): void

    // Class property signals of Vda-1.Vda.SqlCommandInsert

    connect(sigName: "notify::table", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandInsert {

    // Own properties of Vda-1.Vda.SqlCommandInsert

    static name: string
    static $gtype: GObject.GType<SqlCommandInsert>

    // Constructors of Vda-1.Vda.SqlCommandInsert

    constructor(config?: SqlCommandInsert.ConstructorProperties) 
    _init(config?: SqlCommandInsert.ConstructorProperties): void
}

export module SqlCommandModification {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlCommandModification extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandModification

    readonly fields: HashModel
    readonly values: HashModel

    // Owm methods of Vda-1.Vda.SqlCommandModification

    add_field_value(name: string | null, val?: any | null): void
    add_field(name: string | null): void
    add_value(val?: any | null): void
    add_field_parameter_value(field: string | null, par: string | null, gtype: GObject.GType): void
    add_parameter(par: string | null, gtype: GObject.GType): void
    get_fields(): HashModel
    get_values(): HashModel

    // Own virtual methods of Vda-1.Vda.SqlCommandModification

    vfunc_add_field_value(name: string | null, val?: any | null): void
    vfunc_add_field(name: string | null): void
    vfunc_add_value(val?: any | null): void
    vfunc_add_field_parameter_value(field: string | null, par: string | null, gtype: GObject.GType): void
    vfunc_add_parameter(par: string | null, gtype: GObject.GType): void
    vfunc_get_fields(): HashModel
    vfunc_get_values(): HashModel

    // Class property signals of Vda-1.Vda.SqlCommandModification

    connect(sigName: "notify::fields", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SqlCommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandModification {

    // Own properties of Vda-1.Vda.SqlCommandModification

    static name: string
    static $gtype: GObject.GType<SqlCommandModification>

    // Constructors of Vda-1.Vda.SqlCommandModification

    constructor(config?: SqlCommandModification.ConstructorProperties) 
    _init(config?: SqlCommandModification.ConstructorProperties): void
}

export module SqlCommandParametrized {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommand.ConstructorProperties {
    }

}

export interface SqlCommandParametrized extends GObject.Object, SqlCommand {

    // Own properties of Vda-1.Vda.SqlCommandParametrized

    readonly parameters: SqlParameters

    // Owm methods of Vda-1.Vda.SqlCommandParametrized

    get_parameters(): SqlParameters

    // Own virtual methods of Vda-1.Vda.SqlCommandParametrized

    vfunc_get_parameters(): SqlParameters

    // Class property signals of Vda-1.Vda.SqlCommandParametrized

    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandParametrized, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandParametrized {

    // Own properties of Vda-1.Vda.SqlCommandParametrized

    static name: string
    static $gtype: GObject.GType<SqlCommandParametrized>

    // Constructors of Vda-1.Vda.SqlCommandParametrized

    constructor(config?: SqlCommandParametrized.ConstructorProperties) 
    _init(config?: SqlCommandParametrized.ConstructorProperties): void
}

export module SqlCommandSelect {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandConditional.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandSelect extends GObject.Object, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Own properties of Vda-1.Vda.SqlCommandSelect

    readonly fields: HashModel
    readonly tables: HashModel

    // Owm methods of Vda-1.Vda.SqlCommandSelect

    add_field(field: string | null, table_ref?: string | null, alias?: string | null): void
    add_table(name: string | null, allias?: string | null): void
    add_value_field(val: any, allias?: string | null): void
    add_math_exp_field(exp: string | null, allias?: string | null): void
    stringify(): string | null
    to_query(name?: string | null): PreparedQuery
    parse(sql: string | null): void
    get_fields(): HashModel
    get_tables(): HashModel

    // Own virtual methods of Vda-1.Vda.SqlCommandSelect

    vfunc_add_field(field: string | null, table_ref?: string | null, alias?: string | null): void
    vfunc_add_table(name: string | null, allias?: string | null): void
    vfunc_add_value_field(val: any, allias?: string | null): void
    vfunc_add_math_exp_field(exp: string | null, allias?: string | null): void
    vfunc_stringify(): string | null
    vfunc_to_query(name?: string | null): PreparedQuery
    vfunc_parse(sql: string | null): void
    vfunc_get_fields(): HashModel
    vfunc_get_tables(): HashModel

    // Class property signals of Vda-1.Vda.SqlCommandSelect

    connect(sigName: "notify::fields", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::tables", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tables", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tables", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandSelect {

    // Own properties of Vda-1.Vda.SqlCommandSelect

    static name: string
    static $gtype: GObject.GType<SqlCommandSelect>

    // Constructors of Vda-1.Vda.SqlCommandSelect

    constructor(config?: SqlCommandSelect.ConstructorProperties) 
    _init(config?: SqlCommandSelect.ConstructorProperties): void
}

export module SqlCommandTableRelated {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlCommandTableRelated

        table?: string | null
        allias?: string | null
    }

}

export interface SqlCommandTableRelated extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandTableRelated

    table: string | null
    allias: string | null

    // Owm methods of Vda-1.Vda.SqlCommandTableRelated

    get_table(): string | null
    set_table(value: string | null): void
    get_allias(): string | null
    set_allias(value: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlCommandTableRelated

    vfunc_get_table(): string | null
    vfunc_set_table(value: string | null): void
    vfunc_get_allias(): string | null
    vfunc_set_allias(value: string | null): void

    // Class property signals of Vda-1.Vda.SqlCommandTableRelated

    connect(sigName: "notify::table", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandTableRelated, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandTableRelated {

    // Own properties of Vda-1.Vda.SqlCommandTableRelated

    static name: string
    static $gtype: GObject.GType<SqlCommandTableRelated>

    // Constructors of Vda-1.Vda.SqlCommandTableRelated

    constructor(config?: SqlCommandTableRelated.ConstructorProperties) 
    _init(config?: SqlCommandTableRelated.ConstructorProperties): void
}

export module SqlCommandUpdate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandModification.ConstructorProperties, SqlCommandConditional.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandUpdate extends GObject.Object, SqlCommandTableRelated, SqlCommandModification, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandUpdate

    stringify(): string | null
    to_query(name?: string | null): Query
    parse(sql: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlCommandUpdate

    vfunc_stringify(): string | null
    vfunc_to_query(name?: string | null): Query
    vfunc_parse(sql: string | null): void

    // Class property signals of Vda-1.Vda.SqlCommandUpdate

    connect(sigName: "notify::table", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlCommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlCommandUpdate {

    // Own properties of Vda-1.Vda.SqlCommandUpdate

    static name: string
    static $gtype: GObject.GType<SqlCommandUpdate>

    // Constructors of Vda-1.Vda.SqlCommandUpdate

    constructor(config?: SqlCommandUpdate.ConstructorProperties) 
    _init(config?: SqlCommandUpdate.ConstructorProperties): void
}

export module SqlExpression {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties {
    }

}

export interface SqlExpression extends GObject.Object, Gio.ListModel {

    // Owm methods of Vda-1.Vda.SqlExpression

    add_expression(exp: SqlExpression): void
    remove_expression(exp: SqlExpression): void
    to_string(): string | null
    add_math_expression(str: string | null, cnc: Connection, params?: SqlParameters | null): void

    // Own virtual methods of Vda-1.Vda.SqlExpression

    vfunc_add_expression(exp: SqlExpression): void
    vfunc_remove_expression(exp: SqlExpression): void
    vfunc_to_string(): string | null
    vfunc_add_math_expression(str: string | null, cnc: Connection, params?: SqlParameters | null): void

    // Class property signals of Vda-1.Vda.SqlExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpression

    static name: string
    static $gtype: GObject.GType<SqlExpression>

    // Constructors of Vda-1.Vda.SqlExpression

    constructor(config?: SqlExpression.ConstructorProperties) 
    _init(config?: SqlExpression.ConstructorProperties): void
    static parse(str: string | null, cnc: Connection, params?: SqlParameters | null): SqlExpression
}

export module SqlExpressionField {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlExpressionField

        table_ref?: string | null
        name?: string | null
        allias?: string | null
    }

}

export interface SqlExpressionField extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionField

    table_ref: string | null
    name: string | null
    allias: string | null

    // Owm methods of Vda-1.Vda.SqlExpressionField

    get_table_ref(): string | null
    set_table_ref(value: string | null): void
    get_name(): string | null
    set_name(value: string | null): void
    get_allias(): string | null
    set_allias(value?: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionField

    vfunc_get_table_ref(): string | null
    vfunc_set_table_ref(value: string | null): void
    vfunc_get_name(): string | null
    vfunc_set_name(value: string | null): void
    vfunc_get_allias(): string | null
    vfunc_set_allias(value?: string | null): void

    // Class property signals of Vda-1.Vda.SqlExpressionField

    connect(sigName: "notify::table-ref", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table-ref", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table-ref", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionField {

    // Own properties of Vda-1.Vda.SqlExpressionField

    static name: string
    static $gtype: GObject.GType<SqlExpressionField>

    // Constructors of Vda-1.Vda.SqlExpressionField

    constructor(config?: SqlExpressionField.ConstructorProperties) 
    _init(config?: SqlExpressionField.ConstructorProperties): void
}

export module SqlExpressionOperator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties {
    }

}

export interface SqlExpressionOperator extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionOperator

    readonly operator_type: SqlExpressionOperatorType

    // Owm methods of Vda-1.Vda.SqlExpressionOperator

    create_field_expression(name: string | null): SqlExpressionField
    create_value_expression(val: any | null, cnc: Connection): SqlExpressionValue
    create_parameter_expression(name: string | null, gtype: GObject.GType): SqlExpressionValueParameter
    add_and_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_or_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_eq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_diff_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_like_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_gt_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_geq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_leq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_similar_to_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_is_null_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_null_operator(exp1: SqlExpression): SqlExpressionOperator
    add_not_operator(exp: SqlExpression): SqlExpressionOperator
    add_is_true_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_true_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_false_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_false_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    add_is_not_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    add_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_not_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_concatenate_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_plus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    add_minus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    add_star_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_div_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_regexp_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_not_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_not_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    add_is_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    add_is_not_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    get_operator_type(): SqlExpressionOperatorType

    // Own virtual methods of Vda-1.Vda.SqlExpressionOperator

    vfunc_create_field_expression(name: string | null): SqlExpressionField
    vfunc_create_value_expression(val: any | null, cnc: Connection): SqlExpressionValue
    vfunc_create_parameter_expression(name: string | null, gtype: GObject.GType): SqlExpressionValueParameter
    vfunc_add_and_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_or_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_eq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_diff_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_like_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_gt_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_geq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_leq_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_similar_to_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_is_null_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_null_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_not_operator(exp: SqlExpression): SqlExpressionOperator
    vfunc_add_is_true_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_true_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_false_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_false_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_unknown_operator(exp1: SqlExpression): SqlExpressionOperator
    vfunc_add_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_not_in_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_concatenate_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_plus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    vfunc_add_minus_operator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    vfunc_add_star_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_div_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_regexp_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_not_between_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_not_between_symmetric_operator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    vfunc_add_is_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_add_is_not_distinct_from_operator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    vfunc_get_operator_type(): SqlExpressionOperatorType

    // Class property signals of Vda-1.Vda.SqlExpressionOperator

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperator {

    // Own properties of Vda-1.Vda.SqlExpressionOperator

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperator>

    // Constructors of Vda-1.Vda.SqlExpressionOperator

    constructor(config?: SqlExpressionOperator.ConstructorProperties) 
    _init(config?: SqlExpressionOperator.ConstructorProperties): void
}

export module SqlExpressionOperatorGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorGroup extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGroup

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorGroup {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGroup

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorGroup>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGroup

    constructor(config?: SqlExpressionOperatorGroup.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorGroup.ConstructorProperties): void
}

export module SqlExpressionOperatorMultiterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorMultiterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorMultiterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMultiterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorMultiterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorMultiterm

    constructor(config?: SqlExpressionOperatorMultiterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorMultiterm.ConstructorProperties): void
}

export module SqlExpressionOperatorAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorAnd extends GObject.Object, SqlExpressionOperatorMultiterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorAnd

    constructor(config?: SqlExpressionOperatorAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorOr {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorOr extends GObject.Object, SqlExpressionOperatorMultiterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorOr

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorOr {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorOr

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorOr>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorOr

    constructor(config?: SqlExpressionOperatorOr.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorOr.ConstructorProperties): void
}

export module SqlExpressionOperatorBinaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBinaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBinaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    constructor(config?: SqlExpressionOperatorBinaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBinaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorEq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorEq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorEq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorEq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorEq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorEq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorEq

    constructor(config?: SqlExpressionOperatorEq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorEq.ConstructorProperties): void
}

export module SqlExpressionOperatorNotEq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotEq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotEq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotEq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotEq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotEq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotEq

    constructor(config?: SqlExpressionOperatorNotEq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotEq.ConstructorProperties): void
}

export module SqlExpressionOperatorDiff {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorDiff extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorDiff

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorDiff {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiff

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorDiff>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorDiff

    constructor(config?: SqlExpressionOperatorDiff.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorDiff.ConstructorProperties): void
}

export module SqlExpressionOperatorGt {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorGt extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGt

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorGt {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGt

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorGt>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGt

    constructor(config?: SqlExpressionOperatorGt.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorGt.ConstructorProperties): void
}

export module SqlExpressionOperatorLt {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorLt extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLt

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorLt {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLt

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorLt>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLt

    constructor(config?: SqlExpressionOperatorLt.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorLt.ConstructorProperties): void
}

export module SqlExpressionOperatorGeq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorGeq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGeq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorGeq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGeq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorGeq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGeq

    constructor(config?: SqlExpressionOperatorGeq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorGeq.ConstructorProperties): void
}

export module SqlExpressionOperatorLeq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorLeq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLeq

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorLeq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLeq

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorLeq>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLeq

    constructor(config?: SqlExpressionOperatorLeq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorLeq.ConstructorProperties): void
}

export module SqlExpressionOperatorRegexp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorRegexp extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorRegexp

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorRegexp {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorRegexp

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorRegexp>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorRegexp

    constructor(config?: SqlExpressionOperatorRegexp.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorRegexp.ConstructorProperties): void
}

export module SqlExpressionOperatorStar {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorStar extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorStar

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorStar {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorStar

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorStar>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorStar

    constructor(config?: SqlExpressionOperatorStar.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorStar.ConstructorProperties): void
}

export module SqlExpressionOperatorDiv {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorDiv extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorDiv

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorDiv {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiv

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorDiv>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorDiv

    constructor(config?: SqlExpressionOperatorDiv.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorDiv.ConstructorProperties): void
}

export module SqlExpressionOperatorIn {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIn extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIn

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIn {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIn

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIn>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIn

    constructor(config?: SqlExpressionOperatorIn.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIn.ConstructorProperties): void
}

export module SqlExpressionOperatorNotIn {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotIn extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotIn

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotIn {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIn

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotIn>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotIn

    constructor(config?: SqlExpressionOperatorNotIn.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotIn.ConstructorProperties): void
}

export module SqlExpressionOperatorConcatenate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorConcatenate extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorConcatenate

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorConcatenate {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorConcatenate

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorConcatenate>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorConcatenate

    constructor(config?: SqlExpressionOperatorConcatenate.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorConcatenate.ConstructorProperties): void
}

export module SqlExpressionOperatorSimilarTo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorSimilarTo extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorSimilarTo {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorSimilarTo>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    constructor(config?: SqlExpressionOperatorSimilarTo.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorSimilarTo.ConstructorProperties): void
}

export module SqlExpressionOperatorLike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorLike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorLike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorLike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLike

    constructor(config?: SqlExpressionOperatorLike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorLike.ConstructorProperties): void
}

export module SqlExpressionOperatorNotLike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotLike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotLike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotLike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotLike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotLike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotLike

    constructor(config?: SqlExpressionOperatorNotLike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotLike.ConstructorProperties): void
}

export module SqlExpressionOperatorIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIlike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIlike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIlike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIlike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIlike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIlike

    constructor(config?: SqlExpressionOperatorIlike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIlike.ConstructorProperties): void
}

export module SqlExpressionOperatorNotIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotIlike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotIlike

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotIlike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIlike

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotIlike>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotIlike

    constructor(config?: SqlExpressionOperatorNotIlike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotIlike.ConstructorProperties): void
}

export module SqlExpressionOperatorBinaryUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBinaryUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBinaryUnaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    constructor(config?: SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorMinus {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorMinus extends GObject.Object, SqlExpressionOperatorBinaryUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorMinus

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorMinus {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMinus

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorMinus>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorMinus

    constructor(config?: SqlExpressionOperatorMinus.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorMinus.ConstructorProperties): void
}

export module SqlExpressionOperatorPlus {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorPlus extends GObject.Object, SqlExpressionOperatorBinaryUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorPlus

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorPlus {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorPlus

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorPlus>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorPlus

    constructor(config?: SqlExpressionOperatorPlus.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorPlus.ConstructorProperties): void
}

export module SqlExpressionOperatorInitialUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorInitialUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorInitialUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorInitialUnaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    constructor(config?: SqlExpressionOperatorInitialUnaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorInitialUnaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorNot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorInitialUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNot extends GObject.Object, SqlExpressionOperatorInitialUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNot

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNot {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNot

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNot>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNot

    constructor(config?: SqlExpressionOperatorNot.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNot.ConstructorProperties): void
}

export module SqlExpressionOperatorFinalUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorFinalUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorFinalUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorFinalUnaryterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    constructor(config?: SqlExpressionOperatorFinalUnaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorFinalUnaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorIs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorFinalUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIs extends GObject.Object, SqlExpressionOperatorFinalUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIs

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIs {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIs

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIs>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIs

    constructor(config?: SqlExpressionOperatorIs.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIs.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNot extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNot

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNot

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNot>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNot

    constructor(config?: SqlExpressionOperatorIsNot.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNot.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNull {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNull extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNull

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNull {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNull

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNull>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNull

    constructor(config?: SqlExpressionOperatorIsNull.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNull.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotNull {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotNull extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNotNull {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotNull>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    constructor(config?: SqlExpressionOperatorIsNotNull.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotNull.ConstructorProperties): void
}

export module SqlExpressionOperatorIsTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsTrue extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsTrue

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsTrue {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsTrue

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsTrue>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsTrue

    constructor(config?: SqlExpressionOperatorIsTrue.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsTrue.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotTrue extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNotTrue {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotTrue>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    constructor(config?: SqlExpressionOperatorIsNotTrue.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotTrue.ConstructorProperties): void
}

export module SqlExpressionOperatorIsFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsFalse extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsFalse

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsFalse {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsFalse

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsFalse>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsFalse

    constructor(config?: SqlExpressionOperatorIsFalse.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsFalse.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotFalse extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNotFalse {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotFalse>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    constructor(config?: SqlExpressionOperatorIsNotFalse.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotFalse.ConstructorProperties): void
}

export module SqlExpressionOperatorIsUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsUnknown extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsUnknown {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsUnknown>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    constructor(config?: SqlExpressionOperatorIsUnknown.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsUnknown.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotUnknown extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNotUnknown {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotUnknown>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    constructor(config?: SqlExpressionOperatorIsNotUnknown.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotUnknown.ConstructorProperties): void
}

export module SqlExpressionOperatorIsDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsDistinct extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsDistinct>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    constructor(config?: SqlExpressionOperatorIsDistinct.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsDistinct.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotDistinct extends GObject.Object, SqlExpressionOperatorIsDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNotDistinct {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotDistinct>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    constructor(config?: SqlExpressionOperatorIsNotDistinct.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotDistinct.ConstructorProperties): void
}

export module SqlExpressionOperatorIsDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsDistinctFrom extends GObject.Object, SqlExpressionOperatorIsDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsDistinctFrom {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsDistinctFrom>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    constructor(config?: SqlExpressionOperatorIsDistinctFrom.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsDistinctFrom.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNotDistinct.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotDistinctFrom extends GObject.Object, SqlExpressionOperatorIsNotDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorIsNotDistinctFrom {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorIsNotDistinctFrom>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    constructor(config?: SqlExpressionOperatorIsNotDistinctFrom.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotDistinctFrom.ConstructorProperties): void
}

export module SqlExpressionOperatorThreeterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorThreeterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorThreeterm

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorThreeterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorThreeterm

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorThreeterm>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorThreeterm

    constructor(config?: SqlExpressionOperatorThreeterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorThreeterm.ConstructorProperties): void
}

export module SqlExpressionOperatorBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorThreeterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetween extends GObject.Object, SqlExpressionOperatorThreeterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetween

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetween

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetween>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetween

    constructor(config?: SqlExpressionOperatorBetween.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetween.ConstructorProperties): void
}

export module SqlExpressionOperatorBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetweenAnd extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorBetweenAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetweenAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    constructor(config?: SqlExpressionOperatorBetweenAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetweenAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetween extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetween

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotBetween {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetween

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetween>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetween

    constructor(config?: SqlExpressionOperatorNotBetween.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetween.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorNotBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetweenAnd extends GObject.Object, SqlExpressionOperatorNotBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotBetweenAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetweenAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    constructor(config?: SqlExpressionOperatorNotBetweenAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetweenAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetweenSymmetric extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetweenSymmetric>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    constructor(config?: SqlExpressionOperatorBetweenSymmetric.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetweenSymmetric.ConstructorProperties): void
}

export module SqlExpressionOperatorBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetweenSymmetricAnd extends GObject.Object, SqlExpressionOperatorBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorBetweenSymmetricAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    constructor(config?: SqlExpressionOperatorBetweenSymmetricAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetweenSymmetricAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetweenSymmetric extends GObject.Object, SqlExpressionOperatorBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotBetweenSymmetric {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetweenSymmetric>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    constructor(config?: SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetweenSymmetricAnd extends GObject.Object, SqlExpressionOperatorNotBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    connect(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: SqlExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<SqlExpressionOperatorNotBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    constructor(config?: SqlExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties): void
}

export module SqlExpressionValue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlExpressionValue

        connection?: Connection | null
        value?: SqlValue | null
    }

}

export interface SqlExpressionValue extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionValue

    connection: Connection
    value: SqlValue

    // Owm methods of Vda-1.Vda.SqlExpressionValue

    set_math_expression_value(str: string | null, params?: SqlParameters | null): void
    get_connection(): Connection | null
    set_connection(value?: Connection | null): void
    get_value(): SqlValue
    set_value(value: SqlValue): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionValue

    vfunc_set_math_expression_value(str: string | null, params?: SqlParameters | null): void
    vfunc_get_connection(): Connection | null
    vfunc_set_connection(value?: Connection | null): void
    vfunc_get_value(): SqlValue
    vfunc_set_value(value: SqlValue): void

    // Class property signals of Vda-1.Vda.SqlExpressionValue

    connect(sigName: "notify::connection", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SqlExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionValue {

    // Own properties of Vda-1.Vda.SqlExpressionValue

    static name: string
    static $gtype: GObject.GType<SqlExpressionValue>

    // Constructors of Vda-1.Vda.SqlExpressionValue

    constructor(config?: SqlExpressionValue.ConstructorProperties) 
    _init(config?: SqlExpressionValue.ConstructorProperties): void
}

export module SqlExpressionValueParameter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties, SqlExpressionValue.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlExpressionValueParameter

        parameters?: SqlParameters | null
        name?: string | null
        gtype?: GObject.GType | null
    }

}

export interface SqlExpressionValueParameter extends GObject.Object, SqlExpression, SqlExpressionValue {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameter

    parameters: SqlParameters
    name: string | null
    gtype: GObject.GType

    // Owm methods of Vda-1.Vda.SqlExpressionValueParameter

    parse(str: string | null): void
    get_parameters(): SqlParameters
    set_parameters(value: SqlParameters): void
    get_name(): string | null
    set_name(value: string | null): void
    get_gtype(): GObject.GType
    set_gtype(value: GObject.GType): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionValueParameter

    vfunc_parse(str: string | null): void
    vfunc_get_parameters(): SqlParameters
    vfunc_set_parameters(value: SqlParameters): void
    vfunc_get_name(): string | null
    vfunc_set_name(value: string | null): void
    vfunc_get_gtype(): GObject.GType
    vfunc_set_gtype(value: GObject.GType): void

    // Class property signals of Vda-1.Vda.SqlExpressionValueParameter

    connect(sigName: "notify::parameters", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::gtype", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtype", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtype", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SqlExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlExpressionValueParameter {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameter

    static name: string
    static $gtype: GObject.GType<SqlExpressionValueParameter>

    // Constructors of Vda-1.Vda.SqlExpressionValueParameter

    constructor(config?: SqlExpressionValueParameter.ConstructorProperties) 
    _init(config?: SqlExpressionValueParameter.ConstructorProperties): void
    static gtype_from_string(str: string | null): GObject.GType
}

export module SqlParameters {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlParameters extends GObject.Object {

    // Owm methods of Vda-1.Vda.SqlParameters

    set_value(name: string | null, val: any): void
    get_value(name: string | null): any | null
    set_sql_value(name: string | null, val: SqlValue): void
    get_sql_value(name: string | null): SqlValue
    has_param(name: string | null): boolean

    // Own virtual methods of Vda-1.Vda.SqlParameters

    vfunc_set_value(name: string | null, val: any): void
    vfunc_get_value(name: string | null): any | null
    vfunc_set_sql_value(name: string | null, val: SqlValue): void
    vfunc_get_sql_value(name: string | null): SqlValue
    vfunc_has_param(name: string | null): boolean

    // Class property signals of Vda-1.Vda.SqlParameters

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlParameters {

    // Own properties of Vda-1.Vda.SqlParameters

    static name: string
    static $gtype: GObject.GType<SqlParameters>

    // Constructors of Vda-1.Vda.SqlParameters

    constructor(config?: SqlParameters.ConstructorProperties) 
    _init(config?: SqlParameters.ConstructorProperties): void
}

export module SqlParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlParser extends GObject.Object {

    // Owm methods of Vda-1.Vda.SqlParser

    parse(str: string | null, cnc: Connection): SqlCommandParametrized

    // Own virtual methods of Vda-1.Vda.SqlParser

    vfunc_parse(str: string | null, cnc: Connection): SqlCommandParametrized

    // Class property signals of Vda-1.Vda.SqlParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlParser {

    // Own properties of Vda-1.Vda.SqlParser

    static name: string
    static $gtype: GObject.GType<SqlParser>

    // Constructors of Vda-1.Vda.SqlParser

    constructor(config?: SqlParser.ConstructorProperties) 
    _init(config?: SqlParser.ConstructorProperties): void
}

export module SqlTableReference {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlTableReference

        name?: string | null
        allias?: string | null
    }

}

export interface SqlTableReference extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlTableReference

    name: string | null
    allias: string | null

    // Owm methods of Vda-1.Vda.SqlTableReference

    get_name(): string | null
    set_name(value: string | null): void
    get_allias(): string | null
    set_allias(value?: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlTableReference

    vfunc_get_name(): string | null
    vfunc_set_name(value: string | null): void
    vfunc_get_allias(): string | null
    vfunc_set_allias(value?: string | null): void

    // Class property signals of Vda-1.Vda.SqlTableReference

    connect(sigName: "notify::name", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: SqlTableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlTableReference {

    // Own properties of Vda-1.Vda.SqlTableReference

    static name: string
    static $gtype: GObject.GType<SqlTableReference>

    // Constructors of Vda-1.Vda.SqlTableReference

    constructor(config?: SqlTableReference.ConstructorProperties) 
    _init(config?: SqlTableReference.ConstructorProperties): void
}

export module Stringifiable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Stringifiable extends GObject.Object {

    // Owm methods of Vda-1.Vda.Stringifiable

    to_string(): string | null

    // Own virtual methods of Vda-1.Vda.Stringifiable

    vfunc_to_string(): string | null

    // Class property signals of Vda-1.Vda.Stringifiable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Stringifiable {

    // Own properties of Vda-1.Vda.Stringifiable

    static name: string
    static $gtype: GObject.GType<Stringifiable>

    // Constructors of Vda-1.Vda.Stringifiable

    constructor(config?: Stringifiable.ConstructorProperties) 
    _init(config?: Stringifiable.ConstructorProperties): void
}

export module SqlValue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Stringifiable.ConstructorProperties {
    }

}

export interface SqlValue extends GObject.Object, Stringifiable {

    // Own properties of Vda-1.Vda.SqlValue

    readonly name: string | null

    // Owm methods of Vda-1.Vda.SqlValue

    parse(str: string | null): boolean
    from_value(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    is_compatible(type: GObject.GType): boolean
    to_gvalue(): /* result */ any
    to_string_quoted(): string | null
    to_sql_expression(): string | null
    get_name(): string | null

    // Own virtual methods of Vda-1.Vda.SqlValue

    vfunc_parse(str: string | null): boolean
    vfunc_from_value(val: any): boolean
    vfunc_cast(type: GObject.GType): SqlValue | null
    vfunc_is_compatible(type: GObject.GType): boolean
    vfunc_to_gvalue(): /* result */ any
    vfunc_to_string_quoted(): string | null
    vfunc_to_sql_expression(): string | null
    vfunc_get_name(): string | null

    // Class property signals of Vda-1.Vda.SqlValue

    connect(sigName: "notify::name", callback: (($obj: SqlValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValue {

    // Own properties of Vda-1.Vda.SqlValue

    static name: string
    static $gtype: GObject.GType<SqlValue>

    // Constructors of Vda-1.Vda.SqlValue

    constructor(config?: SqlValue.ConstructorProperties) 
    _init(config?: SqlValue.ConstructorProperties): void
    static new_from_gvalue(val?: any | null): SqlValue
    static new_from_gtype(type: GObject.GType): SqlValue | null
}

export module SqlValueNull {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueNull extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueNull

    connect(sigName: "notify::name", callback: (($obj: SqlValueNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueNull {

    // Own properties of Vda-1.Vda.SqlValueNull

    static name: string
    static $gtype: GObject.GType<SqlValueNull>

    // Constructors of Vda-1.Vda.SqlValueNull

    constructor(config?: SqlValueNull.ConstructorProperties) 
    _init(config?: SqlValueNull.ConstructorProperties): void
}

export module SqlValueBool {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueBool extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueBool

    connect(sigName: "notify::name", callback: (($obj: SqlValueBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueBool {

    // Own properties of Vda-1.Vda.SqlValueBool

    static name: string
    static $gtype: GObject.GType<SqlValueBool>

    // Constructors of Vda-1.Vda.SqlValueBool

    constructor(config?: SqlValueBool.ConstructorProperties) 
    _init(config?: SqlValueBool.ConstructorProperties): void
}

export module SqlValueBit {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueBit extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueBit

    connect(sigName: "notify::name", callback: (($obj: SqlValueBit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueBit {

    // Own properties of Vda-1.Vda.SqlValueBit

    static name: string
    static $gtype: GObject.GType<SqlValueBit>

    // Constructors of Vda-1.Vda.SqlValueBit

    constructor(config?: SqlValueBit.ConstructorProperties) 
    _init(config?: SqlValueBit.ConstructorProperties): void
}

export module SqlValueString {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueString extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueString

    connect(sigName: "notify::name", callback: (($obj: SqlValueString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueString

    static name: string
    static $gtype: GObject.GType<SqlValueString>

    // Constructors of Vda-1.Vda.SqlValueString

    constructor(config?: SqlValueString.ConstructorProperties) 
    _init(config?: SqlValueString.ConstructorProperties): void
}

export module SqlValueXml {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueXml extends GObject.Object, SqlValue, SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueXml

    readonly document: GXml.DomDocument

    // Owm methods of Vda-1.Vda.SqlValueXml

    get_document(): GXml.DomDocument

    // Own virtual methods of Vda-1.Vda.SqlValueXml

    vfunc_get_document(): GXml.DomDocument

    // Class property signals of Vda-1.Vda.SqlValueXml

    connect(sigName: "notify::document", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueXml {

    // Own properties of Vda-1.Vda.SqlValueXml

    static name: string
    static $gtype: GObject.GType<SqlValueXml>

    // Constructors of Vda-1.Vda.SqlValueXml

    constructor(config?: SqlValueXml.ConstructorProperties) 
    _init(config?: SqlValueXml.ConstructorProperties): void
}

export module SqlValueJson {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueJson extends GObject.Object, SqlValue, SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueJson

    readonly document: Json.Node

    // Owm methods of Vda-1.Vda.SqlValueJson

    get_document(): Json.Node

    // Own virtual methods of Vda-1.Vda.SqlValueJson

    vfunc_get_document(): Json.Node

    // Class property signals of Vda-1.Vda.SqlValueJson

    connect(sigName: "notify::document", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueJson {

    // Own properties of Vda-1.Vda.SqlValueJson

    static name: string
    static $gtype: GObject.GType<SqlValueJson>

    // Constructors of Vda-1.Vda.SqlValueJson

    constructor(config?: SqlValueJson.ConstructorProperties) 
    _init(config?: SqlValueJson.ConstructorProperties): void
}

export module SqlValueText {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueText extends GObject.Object, SqlValue, SqlValueString {

    // Class property signals of Vda-1.Vda.SqlValueText

    connect(sigName: "notify::name", callback: (($obj: SqlValueText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueText {

    // Own properties of Vda-1.Vda.SqlValueText

    static name: string
    static $gtype: GObject.GType<SqlValueText>

    // Constructors of Vda-1.Vda.SqlValueText

    constructor(config?: SqlValueText.ConstructorProperties) 
    _init(config?: SqlValueText.ConstructorProperties): void
}

export module SqlValueName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueName extends GObject.Object, SqlValue, SqlValueString {

    // Class property signals of Vda-1.Vda.SqlValueName

    connect(sigName: "notify::name", callback: (($obj: SqlValueName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueName {

    // Own properties of Vda-1.Vda.SqlValueName

    static name: string
    static $gtype: GObject.GType<SqlValueName>

    // Constructors of Vda-1.Vda.SqlValueName

    constructor(config?: SqlValueName.ConstructorProperties) 
    _init(config?: SqlValueName.ConstructorProperties): void
}

export module SqlValueInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueInteger extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueInteger

    connect(sigName: "notify::name", callback: (($obj: SqlValueInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueInteger {

    // Own properties of Vda-1.Vda.SqlValueInteger

    static name: string
    static $gtype: GObject.GType<SqlValueInteger>

    // Constructors of Vda-1.Vda.SqlValueInteger

    constructor(config?: SqlValueInteger.ConstructorProperties) 
    _init(config?: SqlValueInteger.ConstructorProperties): void
}

export module SqlValueByte {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueByte extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueByte

    connect(sigName: "notify::name", callback: (($obj: SqlValueByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueByte {

    // Own properties of Vda-1.Vda.SqlValueByte

    static name: string
    static $gtype: GObject.GType<SqlValueByte>

    // Constructors of Vda-1.Vda.SqlValueByte

    constructor(config?: SqlValueByte.ConstructorProperties) 
    _init(config?: SqlValueByte.ConstructorProperties): void
}

export module SqlValueInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueInt2 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt2

    connect(sigName: "notify::name", callback: (($obj: SqlValueInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueInt2 {

    // Own properties of Vda-1.Vda.SqlValueInt2

    static name: string
    static $gtype: GObject.GType<SqlValueInt2>

    // Constructors of Vda-1.Vda.SqlValueInt2

    constructor(config?: SqlValueInt2.ConstructorProperties) 
    _init(config?: SqlValueInt2.ConstructorProperties): void
}

export module SqlValueInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueInt4 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt4

    connect(sigName: "notify::name", callback: (($obj: SqlValueInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueInt4 {

    // Own properties of Vda-1.Vda.SqlValueInt4

    static name: string
    static $gtype: GObject.GType<SqlValueInt4>

    // Constructors of Vda-1.Vda.SqlValueInt4

    constructor(config?: SqlValueInt4.ConstructorProperties) 
    _init(config?: SqlValueInt4.ConstructorProperties): void
}

export module SqlValueInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueInt8 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt8

    connect(sigName: "notify::name", callback: (($obj: SqlValueInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueInt8 {

    // Own properties of Vda-1.Vda.SqlValueInt8

    static name: string
    static $gtype: GObject.GType<SqlValueInt8>

    // Constructors of Vda-1.Vda.SqlValueInt8

    constructor(config?: SqlValueInt8.ConstructorProperties) 
    _init(config?: SqlValueInt8.ConstructorProperties): void
}

export module SqlValueUnsignedInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInteger extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInteger

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueUnsignedInteger {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInteger

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInteger>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInteger

    constructor(config?: SqlValueUnsignedInteger.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInteger.ConstructorProperties): void
}

export module SqlValueUnsignedByte {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedByte extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedByte

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueUnsignedByte {

    // Own properties of Vda-1.Vda.SqlValueUnsignedByte

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedByte>

    // Constructors of Vda-1.Vda.SqlValueUnsignedByte

    constructor(config?: SqlValueUnsignedByte.ConstructorProperties) 
    _init(config?: SqlValueUnsignedByte.ConstructorProperties): void
}

export module SqlValueUnsignedInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInt2 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt2

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueUnsignedInt2 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt2

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInt2>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt2

    constructor(config?: SqlValueUnsignedInt2.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInt2.ConstructorProperties): void
}

export module SqlValueUnsignedInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInt4 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt4

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueUnsignedInt4 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt4

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInt4>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt4

    constructor(config?: SqlValueUnsignedInt4.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInt4.ConstructorProperties): void
}

export module SqlValueUnsignedInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInt8 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt8

    connect(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueUnsignedInt8 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt8

    static name: string
    static $gtype: GObject.GType<SqlValueUnsignedInt8>

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt8

    constructor(config?: SqlValueUnsignedInt8.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInt8.ConstructorProperties): void
}

export module SqlValueOid {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueOid extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueOid

    connect(sigName: "notify::name", callback: (($obj: SqlValueOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueOid {

    // Own properties of Vda-1.Vda.SqlValueOid

    static name: string
    static $gtype: GObject.GType<SqlValueOid>

    // Constructors of Vda-1.Vda.SqlValueOid

    constructor(config?: SqlValueOid.ConstructorProperties) 
    _init(config?: SqlValueOid.ConstructorProperties): void
}

export module SqlValueNumeric {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueNumeric extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueNumeric

    set_precision(p: number): void
    get_precision(): number
    format(str: string | null): string | null
    get_double(): number
    set_double(v: number): void
    get_real(): number
    set_real(r: number): void
    get_imaginary(): number
    set_imaginary(img: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueNumeric

    vfunc_set_precision(p: number): void
    vfunc_get_precision(): number
    vfunc_format(str: string | null): string | null
    vfunc_get_double(): number
    vfunc_set_double(v: number): void
    vfunc_get_real(): number
    vfunc_set_real(r: number): void
    vfunc_get_imaginary(): number
    vfunc_set_imaginary(img: number): void

    // Class property signals of Vda-1.Vda.SqlValueNumeric

    connect(sigName: "notify::name", callback: (($obj: SqlValueNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueNumeric {

    // Own properties of Vda-1.Vda.SqlValueNumeric

    static name: string
    static $gtype: GObject.GType<SqlValueNumeric>

    // Constructors of Vda-1.Vda.SqlValueNumeric

    constructor(config?: SqlValueNumeric.ConstructorProperties) 
    _init(config?: SqlValueNumeric.ConstructorProperties): void
}

export module SqlValueFloat {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueNumeric.ConstructorProperties {
    }

}

export interface SqlValueFloat extends GObject.Object, SqlValue, SqlValueNumeric {

    // Owm methods of Vda-1.Vda.SqlValueFloat

    get_float(): number

    // Own virtual methods of Vda-1.Vda.SqlValueFloat

    vfunc_get_float(): number

    // Class property signals of Vda-1.Vda.SqlValueFloat

    connect(sigName: "notify::name", callback: (($obj: SqlValueFloat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueFloat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueFloat {

    // Own properties of Vda-1.Vda.SqlValueFloat

    static name: string
    static $gtype: GObject.GType<SqlValueFloat>

    // Constructors of Vda-1.Vda.SqlValueFloat

    constructor(config?: SqlValueFloat.ConstructorProperties) 
    _init(config?: SqlValueFloat.ConstructorProperties): void
}

export module SqlValueDouble {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueNumeric.ConstructorProperties {
    }

}

export interface SqlValueDouble extends GObject.Object, SqlValue, SqlValueNumeric {

    // Class property signals of Vda-1.Vda.SqlValueDouble

    connect(sigName: "notify::name", callback: (($obj: SqlValueDouble, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueDouble, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueDouble {

    // Own properties of Vda-1.Vda.SqlValueDouble

    static name: string
    static $gtype: GObject.GType<SqlValueDouble>

    // Constructors of Vda-1.Vda.SqlValueDouble

    constructor(config?: SqlValueDouble.ConstructorProperties) 
    _init(config?: SqlValueDouble.ConstructorProperties): void
}

export module SqlValueMoney {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueNumeric.ConstructorProperties {
    }

}

export interface SqlValueMoney extends GObject.Object, SqlValue, SqlValueNumeric {

    // Owm methods of Vda-1.Vda.SqlValueMoney

    locale(): string | null
    int_locale(): string | null
    get_int_precision(): number
    set_int_precision(p: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueMoney

    vfunc_locale(): string | null
    vfunc_int_locale(): string | null
    vfunc_get_int_precision(): number
    vfunc_set_int_precision(p: number): void

    // Class property signals of Vda-1.Vda.SqlValueMoney

    connect(sigName: "notify::name", callback: (($obj: SqlValueMoney, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueMoney, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueMoney {

    // Own properties of Vda-1.Vda.SqlValueMoney

    static name: string
    static $gtype: GObject.GType<SqlValueMoney>

    // Constructors of Vda-1.Vda.SqlValueMoney

    constructor(config?: SqlValueMoney.ConstructorProperties) 
    _init(config?: SqlValueMoney.ConstructorProperties): void
}

export module SqlValueDate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueDate extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueDate

    get_date(): /* result */ GLib.Date
    set_date(ts: GLib.Date): void

    // Own virtual methods of Vda-1.Vda.SqlValueDate

    vfunc_get_date(): /* result */ GLib.Date
    vfunc_set_date(ts: GLib.Date): void

    // Class property signals of Vda-1.Vda.SqlValueDate

    connect(sigName: "notify::name", callback: (($obj: SqlValueDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueDate {

    // Own properties of Vda-1.Vda.SqlValueDate

    static name: string
    static $gtype: GObject.GType<SqlValueDate>

    // Constructors of Vda-1.Vda.SqlValueDate

    constructor(config?: SqlValueDate.ConstructorProperties) 
    _init(config?: SqlValueDate.ConstructorProperties): void
}

export module SqlValueTimestamp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueTimestamp extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueTimestamp

    format_local(): string | null
    format_utc(): string | null
    format_locale(): string | null
    format_date(): string | null
    format_date_locale(): string | null
    format_time(): string | null
    format_time_local(): string | null
    format_time_local_ntz(): string | null
    get_timestamp(): GLib.DateTime
    set_timestamp(ts: GLib.DateTime): void

    // Own virtual methods of Vda-1.Vda.SqlValueTimestamp

    vfunc_format_local(): string | null
    vfunc_format_utc(): string | null
    vfunc_format_locale(): string | null
    vfunc_format_date(): string | null
    vfunc_format_date_locale(): string | null
    vfunc_format_time(): string | null
    vfunc_format_time_local(): string | null
    vfunc_format_time_local_ntz(): string | null
    vfunc_get_timestamp(): GLib.DateTime
    vfunc_set_timestamp(ts: GLib.DateTime): void

    // Class property signals of Vda-1.Vda.SqlValueTimestamp

    connect(sigName: "notify::name", callback: (($obj: SqlValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueTimestamp {

    // Own properties of Vda-1.Vda.SqlValueTimestamp

    static name: string
    static $gtype: GObject.GType<SqlValueTimestamp>

    // Constructors of Vda-1.Vda.SqlValueTimestamp

    constructor(config?: SqlValueTimestamp.ConstructorProperties) 
    _init(config?: SqlValueTimestamp.ConstructorProperties): void
}

export module SqlValueTimestampNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueTimestamp.ConstructorProperties {
    }

}

export interface SqlValueTimestampNtz extends GObject.Object, SqlValue, SqlValueTimestamp {

    // Class property signals of Vda-1.Vda.SqlValueTimestampNtz

    connect(sigName: "notify::name", callback: (($obj: SqlValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueTimestampNtz {

    // Own properties of Vda-1.Vda.SqlValueTimestampNtz

    static name: string
    static $gtype: GObject.GType<SqlValueTimestampNtz>

    // Constructors of Vda-1.Vda.SqlValueTimestampNtz

    constructor(config?: SqlValueTimestampNtz.ConstructorProperties) 
    _init(config?: SqlValueTimestampNtz.ConstructorProperties): void
}

export module SqlValueTime {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueTimestamp.ConstructorProperties {
    }

}

export interface SqlValueTime extends GObject.Object, SqlValue, SqlValueTimestamp {

    // Class property signals of Vda-1.Vda.SqlValueTime

    connect(sigName: "notify::name", callback: (($obj: SqlValueTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueTime {

    // Own properties of Vda-1.Vda.SqlValueTime

    static name: string
    static $gtype: GObject.GType<SqlValueTime>

    // Constructors of Vda-1.Vda.SqlValueTime

    constructor(config?: SqlValueTime.ConstructorProperties) 
    _init(config?: SqlValueTime.ConstructorProperties): void
}

export module SqlValueTimeNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueTimestampNtz.ConstructorProperties {
    }

}

export interface SqlValueTimeNtz extends GObject.Object, SqlValue, SqlValueTimestampNtz {

    // Class property signals of Vda-1.Vda.SqlValueTimeNtz

    connect(sigName: "notify::name", callback: (($obj: SqlValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueTimeNtz {

    // Own properties of Vda-1.Vda.SqlValueTimeNtz

    static name: string
    static $gtype: GObject.GType<SqlValueTimeNtz>

    // Constructors of Vda-1.Vda.SqlValueTimeNtz

    constructor(config?: SqlValueTimeNtz.ConstructorProperties) 
    _init(config?: SqlValueTimeNtz.ConstructorProperties): void
}

export module SqlValueBinary {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueBinary extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueBinary

    readonly size: number

    // Owm methods of Vda-1.Vda.SqlValueBinary

    get_bytes(): GLib.Bytes
    get_out_stream(): Gio.OutputStream | null
    get_input_stream(): Gio.InputStream | null
    get_size(): number

    // Own virtual methods of Vda-1.Vda.SqlValueBinary

    vfunc_get_bytes(): GLib.Bytes
    vfunc_get_out_stream(): Gio.OutputStream | null
    vfunc_get_input_stream(): Gio.InputStream | null
    vfunc_get_size(): number

    // Class property signals of Vda-1.Vda.SqlValueBinary

    connect(sigName: "notify::size", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueBinary {

    // Own properties of Vda-1.Vda.SqlValueBinary

    static name: string
    static $gtype: GObject.GType<SqlValueBinary>

    // Constructors of Vda-1.Vda.SqlValueBinary

    constructor(config?: SqlValueBinary.ConstructorProperties) 
    _init(config?: SqlValueBinary.ConstructorProperties): void
}

export module SqlValueBlob {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValueBinary.ConstructorProperties {
    }

}

export interface SqlValueBlob extends GObject.Object, SqlValueBinary {

    // Own properties of Vda-1.Vda.SqlValueBlob

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.SqlValueBlob

    create(stream: Gio.InputStream): void
    delete(): void
    write(file: Gio.File): void
    read(file: Gio.File): void
    get_connection(): Connection

    // Own virtual methods of Vda-1.Vda.SqlValueBlob

    vfunc_create(stream: Gio.InputStream): void
    vfunc_delete(): void
    vfunc_write(file: Gio.File): void
    vfunc_read(file: Gio.File): void
    vfunc_get_connection(): Connection

    // Class property signals of Vda-1.Vda.SqlValueBlob

    connect(sigName: "notify::connection", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueBlob {

    // Own properties of Vda-1.Vda.SqlValueBlob

    static name: string
    static $gtype: GObject.GType<SqlValueBlob>

    // Constructors of Vda-1.Vda.SqlValueBlob

    constructor(config?: SqlValueBlob.ConstructorProperties) 
    _init(config?: SqlValueBlob.ConstructorProperties): void
}

export module SqlValueBlobOid {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValueBlob.ConstructorProperties {
    }

}

export interface SqlValueBlobOid extends GObject.Object, SqlValueBlob {

    // Own properties of Vda-1.Vda.SqlValueBlobOid

    readonly identification: number

    // Owm methods of Vda-1.Vda.SqlValueBlobOid

    get_identification(): number

    // Own virtual methods of Vda-1.Vda.SqlValueBlobOid

    vfunc_get_identification(): number

    // Class property signals of Vda-1.Vda.SqlValueBlobOid

    connect(sigName: "notify::identification", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identification", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identification", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueBlobOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueBlobOid {

    // Own properties of Vda-1.Vda.SqlValueBlobOid

    static name: string
    static $gtype: GObject.GType<SqlValueBlobOid>

    // Constructors of Vda-1.Vda.SqlValueBlobOid

    constructor(config?: SqlValueBlobOid.ConstructorProperties) 
    _init(config?: SqlValueBlobOid.ConstructorProperties): void
}

export module SqlValueGeometricPoint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlValueGeometricPoint

        x?: number | null
        y?: number | null
    }

}

export interface SqlValueGeometricPoint extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueGeometricPoint

    x: number
    y: number

    // Owm methods of Vda-1.Vda.SqlValueGeometricPoint

    get_x(): number
    set_x(value: number): void
    get_y(): number
    set_y(value: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueGeometricPoint

    vfunc_get_x(): number
    vfunc_set_x(value: number): void
    vfunc_get_y(): number
    vfunc_set_y(value: number): void

    // Class property signals of Vda-1.Vda.SqlValueGeometricPoint

    connect(sigName: "notify::x", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueGeometricPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueGeometricPoint {

    // Own properties of Vda-1.Vda.SqlValueGeometricPoint

    static name: string
    static $gtype: GObject.GType<SqlValueGeometricPoint>

    // Constructors of Vda-1.Vda.SqlValueGeometricPoint

    constructor(config?: SqlValueGeometricPoint.ConstructorProperties) 
    _init(config?: SqlValueGeometricPoint.ConstructorProperties): void
}

export module SqlValueMathExp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlValueMathExp

        math?: GCalc.MathEquationManager | null
    }

}

export interface SqlValueMathExp extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueMathExp

    math: GCalc.MathEquationManager

    // Owm methods of Vda-1.Vda.SqlValueMathExp

    get_math(): GCalc.MathEquationManager
    set_math(value: GCalc.MathEquationManager): void

    // Own virtual methods of Vda-1.Vda.SqlValueMathExp

    vfunc_get_math(): GCalc.MathEquationManager
    vfunc_set_math(value: GCalc.MathEquationManager): void

    // Class property signals of Vda-1.Vda.SqlValueMathExp

    connect(sigName: "notify::math", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::math", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::math", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SqlValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SqlValueMathExp {

    // Own properties of Vda-1.Vda.SqlValueMathExp

    static name: string
    static $gtype: GObject.GType<SqlValueMathExp>

    // Constructors of Vda-1.Vda.SqlValueMathExp

    constructor(config?: SqlValueMathExp.ConstructorProperties) 
    _init(config?: SqlValueMathExp.ConstructorProperties): void
}

export module TableModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface TableModel extends GObject.Object, Gio.ListModel, Result {

    // Class property signals of Vda-1.Vda.TableModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TableModel {

    // Own properties of Vda-1.Vda.TableModel

    static name: string
    static $gtype: GObject.GType<TableModel>

    // Constructors of Vda-1.Vda.TableModel

    constructor(config?: TableModel.ConstructorProperties) 
    _init(config?: TableModel.ConstructorProperties): void
}

export module TableModelSequential {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface TableModelSequential extends GObject.Object, Result {

    // Owm methods of Vda-1.Vda.TableModelSequential

    current(): RowModel | null
    next(): boolean
    back(): boolean
    move(direction: MoveDirection, relative: number): boolean
    copy_current(): RowModel | null

    // Own virtual methods of Vda-1.Vda.TableModelSequential

    vfunc_current(): RowModel | null
    vfunc_next(): boolean
    vfunc_back(): boolean
    vfunc_move(direction: MoveDirection, relative: number): boolean
    vfunc_copy_current(): RowModel | null

    // Class property signals of Vda-1.Vda.TableModelSequential

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TableModelSequential {

    // Own properties of Vda-1.Vda.TableModelSequential

    static name: string
    static $gtype: GObject.GType<TableModelSequential>

    // Constructors of Vda-1.Vda.TableModelSequential

    constructor(config?: TableModelSequential.ConstructorProperties) 
    _init(config?: TableModelSequential.ConstructorProperties): void
}

export module AffectedRows {

    // Constructor properties interface

    export interface ConstructorProperties extends Result.ConstructorProperties, SqlAffectedRows.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AffectedRows extends Result, SqlAffectedRows {

    // Class property signals of Vda-1.Vda.AffectedRows

    connect(sigName: "notify::number", callback: (($obj: AffectedRows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: AffectedRows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AffectedRows extends GObject.Object {

    // Own properties of Vda-1.Vda.AffectedRows

    static name: string
    static $gtype: GObject.GType<AffectedRows>

    // Constructors of Vda-1.Vda.AffectedRows

    constructor(config?: AffectedRows.ConstructorProperties) 
    constructor(rows: number) 
    static new(rows: number): AffectedRows
    _init(config?: AffectedRows.ConstructorProperties): void
}

export module CommandDelete {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommand.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandConditional.ConstructorProperties, Stringifiable.ConstructorProperties, SqlCommandParametrized.ConstructorProperties, SqlCommandDelete.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CommandDelete extends SqlCommand, SqlCommandTableRelated, SqlCommandConditional, Stringifiable, SqlCommandParametrized, SqlCommandDelete {

    // Class property signals of Vda-1.Vda.CommandDelete

    connect(sigName: "notify::connection", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandDelete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandDelete extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandDelete

    static name: string
    static $gtype: GObject.GType<CommandDelete>

    // Constructors of Vda-1.Vda.CommandDelete

    constructor(config?: CommandDelete.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandDelete
    _init(config?: CommandDelete.ConstructorProperties): void
}

export module CommandInsert {

    // Constructor properties interface

    export interface ConstructorProperties extends Stringifiable.ConstructorProperties, SqlCommandInsert.ConstructorProperties, CommandModification.ConstructorProperties {
    }

}

export interface CommandInsert extends Stringifiable, SqlCommandInsert {

    // Class property signals of Vda-1.Vda.CommandInsert

    connect(sigName: "notify::table", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandInsert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandInsert extends CommandModification {

    // Own properties of Vda-1.Vda.CommandInsert

    static name: string
    static $gtype: GObject.GType<CommandInsert>

    // Constructors of Vda-1.Vda.CommandInsert

    constructor(config?: CommandInsert.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandInsert

    // Overloads of new

    static new(cnc: Connection): CommandModification
    _init(config?: CommandInsert.ConstructorProperties): void
}

export module CommandModification {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommand.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandModification.ConstructorProperties, SqlCommandParametrized.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CommandModification extends SqlCommand, SqlCommandTableRelated, SqlCommandModification, SqlCommandParametrized {

    // Class property signals of Vda-1.Vda.CommandModification

    connect(sigName: "notify::connection", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandModification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandModification extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandModification

    static name: string
    static $gtype: GObject.GType<CommandModification>

    // Constructors of Vda-1.Vda.CommandModification

    constructor(config?: CommandModification.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandModification
    _init(config?: CommandModification.ConstructorProperties): void
}

export module CommandSelect {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommand.ConstructorProperties, SqlCommandConditional.ConstructorProperties, Stringifiable.ConstructorProperties, SqlCommandParametrized.ConstructorProperties, SqlCommandSelect.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CommandSelect extends SqlCommand, SqlCommandConditional, Stringifiable, SqlCommandParametrized, SqlCommandSelect {

    // Class property signals of Vda-1.Vda.CommandSelect

    connect(sigName: "notify::connection", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::condition", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::tables", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tables", callback: (($obj: CommandSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tables", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandSelect extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandSelect

    static name: string
    static $gtype: GObject.GType<CommandSelect>

    // Constructors of Vda-1.Vda.CommandSelect

    constructor(config?: CommandSelect.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandSelect
    _init(config?: CommandSelect.ConstructorProperties): void
}

export module CommandUpdate {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommandConditional.ConstructorProperties, Stringifiable.ConstructorProperties, SqlCommandUpdate.ConstructorProperties, CommandModification.ConstructorProperties {
    }

}

export interface CommandUpdate extends SqlCommandConditional, Stringifiable, SqlCommandUpdate {

    // Class property signals of Vda-1.Vda.CommandUpdate

    connect(sigName: "notify::condition", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::condition", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fields", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: CommandUpdate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandUpdate extends CommandModification {

    // Own properties of Vda-1.Vda.CommandUpdate

    static name: string
    static $gtype: GObject.GType<CommandUpdate>

    // Constructors of Vda-1.Vda.CommandUpdate

    constructor(config?: CommandUpdate.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandUpdate

    // Overloads of new

    static new(cnc: Connection): CommandModification
    _init(config?: CommandUpdate.ConstructorProperties): void
}

export module ConnectionParameter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.ConnectionParameter

        name?: string | null
        value?: string | null
    }

}

export interface ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameter

    name: string | null
    value: string | null

    // Owm methods of Vda-1.Vda.ConnectionParameter

    get_name(): string | null
    set_name(value: string | null): void
    get_value(): string | null
    set_value(value: string | null): void

    // Class property signals of Vda-1.Vda.ConnectionParameter

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionParameter extends GObject.Object {

    // Own properties of Vda-1.Vda.ConnectionParameter

    static name: string
    static $gtype: GObject.GType<ConnectionParameter>

    // Constructors of Vda-1.Vda.ConnectionParameter

    constructor(config?: ConnectionParameter.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameter
    _init(config?: ConnectionParameter.ConstructorProperties): void
}

export module ConnectionParameterDbName {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterDbName {

    // Class property signals of Vda-1.Vda.ConnectionParameterDbName

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterDbName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionParameterDbName extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterDbName

    static name: string
    static $gtype: GObject.GType<ConnectionParameterDbName>

    // Constructors of Vda-1.Vda.ConnectionParameterDbName

    constructor(config?: ConnectionParameterDbName.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterDbName

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterDbName.ConstructorProperties): void
}

export module ConnectionParameterHost {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterHost {

    // Class property signals of Vda-1.Vda.ConnectionParameterHost

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionParameterHost extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterHost

    static name: string
    static $gtype: GObject.GType<ConnectionParameterHost>

    // Constructors of Vda-1.Vda.ConnectionParameterHost

    constructor(config?: ConnectionParameterHost.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterHost

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterHost.ConstructorProperties): void
}

export module ConnectionParameterPort {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterPort {

    // Class property signals of Vda-1.Vda.ConnectionParameterPort

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionParameterPort extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterPort

    static name: string
    static $gtype: GObject.GType<ConnectionParameterPort>

    // Constructors of Vda-1.Vda.ConnectionParameterPort

    constructor(config?: ConnectionParameterPort.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterPort

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterPort.ConstructorProperties): void
}

export module ConnectionParameterUserName {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterUserName {

    // Class property signals of Vda-1.Vda.ConnectionParameterUserName

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterUserName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionParameterUserName extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterUserName

    static name: string
    static $gtype: GObject.GType<ConnectionParameterUserName>

    // Constructors of Vda-1.Vda.ConnectionParameterUserName

    constructor(config?: ConnectionParameterUserName.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterUserName

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterUserName.ConstructorProperties): void
}

export module ConnectionParameterPassword {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterPassword {

    // Class property signals of Vda-1.Vda.ConnectionParameterPassword

    connect(sigName: "notify::name", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ConnectionParameterPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionParameterPassword extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterPassword

    static name: string
    static $gtype: GObject.GType<ConnectionParameterPassword>

    // Constructors of Vda-1.Vda.ConnectionParameterPassword

    constructor(config?: ConnectionParameterPassword.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterPassword

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterPassword.ConstructorProperties): void
}

export module ConnectionParameters {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.HashMap.ConstructorProperties {
    }

}

export interface ConnectionParameters {

    // Owm methods of Vda-1.Vda.ConnectionParameters

    parse(cnstring: string | null): void
    to_string(): string | null
    has_param(name: string | null): boolean

    // Own virtual methods of Vda-1.Vda.ConnectionParameters

    vfunc_parse(cnstring: string | null): void

    // Class property signals of Vda-1.Vda.ConnectionParameters

    connect(sigName: "notify::k-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConnectionParameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionParameters extends Gee.HashMap {

    // Own properties of Vda-1.Vda.ConnectionParameters

    static name: string
    static $gtype: GObject.GType<ConnectionParameters>

    // Constructors of Vda-1.Vda.ConnectionParameters

    constructor(config?: ConnectionParameters.ConstructorProperties) 
    constructor(cnc_str: string | null) 
    static new(cnc_str: string | null): ConnectionParameters

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ConnectionParameters.ConstructorProperties): void
}

export module Expression {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, SqlExpression.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface Expression extends Gio.ListModel, SqlExpression {

    // Conflicting properties

    read_only_view: any

    // Owm methods of Vda-1.Vda.Expression

    to_string(): string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Own virtual methods of Vda-1.Vda.Expression

    vfunc_to_string(): string | null

    // Class property signals of Vda-1.Vda.Expression

    connect(sigName: "notify::g-type", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Expression extends Gee.ArrayList {

    // Own properties of Vda-1.Vda.Expression

    static name: string
    static $gtype: GObject.GType<Expression>

    // Constructors of Vda-1.Vda.Expression

    constructor(config?: Expression.ConstructorProperties) 
    constructor() 
    static new(): Expression

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: Expression.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionField {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionField.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface ExpressionField extends SqlExpressionField {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionField

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::table-ref", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table-ref", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table-ref", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: ExpressionField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionField extends Expression {

    // Own properties of Vda-1.Vda.ExpressionField

    static name: string
    static $gtype: GObject.GType<ExpressionField>

    // Constructors of Vda-1.Vda.ExpressionField

    constructor(config?: ExpressionField.ConstructorProperties) 
    constructor() 
    static new(): ExpressionField

    // Overloads of new

    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionField.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperator {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperator.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface ExpressionOperator extends SqlExpressionOperator {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperator

    _operator_type: SqlExpressionOperatorType

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperator

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperator extends Expression {

    // Own properties of Vda-1.Vda.ExpressionOperator

    static name: string
    static $gtype: GObject.GType<ExpressionOperator>

    // Constructors of Vda-1.Vda.ExpressionOperator

    constructor(config?: ExpressionOperator.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperator

    // Overloads of new

    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperator.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorGroup.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorGroup extends SqlExpressionOperatorGroup {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorGroup

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorGroup extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroup

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorGroup>

    // Constructors of Vda-1.Vda.ExpressionOperatorGroup

    constructor(config?: ExpressionOperatorGroup.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorGroup

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGroup.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorMultiterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorMultiterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorMultiterm extends SqlExpressionOperatorMultiterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorMultiterm

    _operator_name: string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorMultiterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMultiterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorMultiterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultiterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorMultiterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorMultiterm

    constructor(config?: ExpressionOperatorMultiterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorMultiterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorMultiterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorAnd.ConstructorProperties, ExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorAnd extends SqlExpressionOperatorAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorAnd extends ExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorAnd

    constructor(config?: ExpressionOperatorAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorAnd

    // Overloads of new

    static new(): ExpressionOperatorMultiterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorOr {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorOr.ConstructorProperties, ExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorOr extends SqlExpressionOperatorOr {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorOr

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorOr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorOr extends ExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorOr

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorOr>

    // Constructors of Vda-1.Vda.ExpressionOperatorOr

    constructor(config?: ExpressionOperatorOr.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorOr

    // Overloads of new

    static new(): ExpressionOperatorMultiterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorOr.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBinaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBinaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorBinaryterm extends SqlExpressionOperatorBinaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorBinaryterm

    _operator_name: string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorBinaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorBinaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBinaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorBinaryterm

    constructor(config?: ExpressionOperatorBinaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBinaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBinaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorEq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorEq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorEq extends SqlExpressionOperatorEq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorEq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorEq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorEq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorEq>

    // Constructors of Vda-1.Vda.ExpressionOperatorEq

    constructor(config?: ExpressionOperatorEq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorEq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorEq.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotEq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotEq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotEq extends SqlExpressionOperatorNotEq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotEq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotEq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotEq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotEq>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotEq

    constructor(config?: ExpressionOperatorNotEq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotEq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotEq.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorDiff {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorDiff.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorDiff extends SqlExpressionOperatorDiff {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorDiff

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorDiff extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiff

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorDiff>

    // Constructors of Vda-1.Vda.ExpressionOperatorDiff

    constructor(config?: ExpressionOperatorDiff.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorDiff

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorDiff.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorGt {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorGt.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorGt extends SqlExpressionOperatorGt {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorGt

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorGt extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorGt

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorGt>

    // Constructors of Vda-1.Vda.ExpressionOperatorGt

    constructor(config?: ExpressionOperatorGt.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorGt

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGt.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorLt {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorLt.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorLt extends SqlExpressionOperatorLt {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorLt

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorLt extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLt

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorLt>

    // Constructors of Vda-1.Vda.ExpressionOperatorLt

    constructor(config?: ExpressionOperatorLt.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorLt

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLt.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorGeq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorGeq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorGeq extends SqlExpressionOperatorGeq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorGeq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorGeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorGeq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorGeq>

    // Constructors of Vda-1.Vda.ExpressionOperatorGeq

    constructor(config?: ExpressionOperatorGeq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorGeq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGeq.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorLeq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorLeq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorLeq extends SqlExpressionOperatorLeq {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorLeq

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLeq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorLeq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeq

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorLeq>

    // Constructors of Vda-1.Vda.ExpressionOperatorLeq

    constructor(config?: ExpressionOperatorLeq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorLeq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLeq.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorRegexp {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorRegexp.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorRegexp extends SqlExpressionOperatorRegexp {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorRegexp

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorRegexp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorRegexp extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexp

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorRegexp>

    // Constructors of Vda-1.Vda.ExpressionOperatorRegexp

    constructor(config?: ExpressionOperatorRegexp.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorRegexp

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorRegexp.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorStar {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorStar.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorStar extends SqlExpressionOperatorStar {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorStar

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorStar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorStar extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorStar

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorStar>

    // Constructors of Vda-1.Vda.ExpressionOperatorStar

    constructor(config?: ExpressionOperatorStar.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorStar

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorStar.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorDiv {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorDiv.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorDiv extends SqlExpressionOperatorDiv {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorDiv

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorDiv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorDiv extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiv

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorDiv>

    // Constructors of Vda-1.Vda.ExpressionOperatorDiv

    constructor(config?: ExpressionOperatorDiv.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorDiv

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorDiv.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIn {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIn.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIn extends SqlExpressionOperatorIn {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIn

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIn extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIn

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIn>

    // Constructors of Vda-1.Vda.ExpressionOperatorIn

    constructor(config?: ExpressionOperatorIn.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIn

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIn.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotIn {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotIn.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotIn extends SqlExpressionOperatorNotIn {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotIn

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotIn extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIn

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotIn>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotIn

    constructor(config?: ExpressionOperatorNotIn.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotIn

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotIn.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorConcatenate {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorConcatenate.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorConcatenate extends SqlExpressionOperatorConcatenate {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorConcatenate

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorConcatenate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorConcatenate extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenate

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorConcatenate>

    // Constructors of Vda-1.Vda.ExpressionOperatorConcatenate

    constructor(config?: ExpressionOperatorConcatenate.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorConcatenate

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorConcatenate.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorSimilarTo {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorSimilarTo.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorSimilarTo extends SqlExpressionOperatorSimilarTo {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorSimilarTo

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorSimilarTo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorSimilarTo extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarTo

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorSimilarTo>

    // Constructors of Vda-1.Vda.ExpressionOperatorSimilarTo

    constructor(config?: ExpressionOperatorSimilarTo.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorSimilarTo

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorSimilarTo.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorLike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorLike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorLike extends SqlExpressionOperatorLike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorLike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorLike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorLike>

    // Constructors of Vda-1.Vda.ExpressionOperatorLike

    constructor(config?: ExpressionOperatorLike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorLike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLike.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotLike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotLike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotLike extends SqlExpressionOperatorNotLike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotLike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotLike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotLike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotLike>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotLike

    constructor(config?: ExpressionOperatorNotLike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotLike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotLike.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIlike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIlike extends SqlExpressionOperatorIlike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIlike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIlike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIlike>

    // Constructors of Vda-1.Vda.ExpressionOperatorIlike

    constructor(config?: ExpressionOperatorIlike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIlike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIlike.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotIlike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotIlike extends SqlExpressionOperatorNotIlike {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotIlike

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotIlike, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotIlike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlike

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotIlike>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotIlike

    constructor(config?: ExpressionOperatorNotIlike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotIlike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotIlike.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBinaryUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorBinaryUnaryterm extends SqlExpressionOperatorBinaryUnaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    _operator_name: string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBinaryUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorBinaryUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBinaryUnaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    constructor(config?: ExpressionOperatorBinaryUnaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBinaryUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBinaryUnaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorMinus {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorMinus.ConstructorProperties, ExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorMinus extends SqlExpressionOperatorMinus {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorMinus

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorMinus extends ExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinus

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorMinus>

    // Constructors of Vda-1.Vda.ExpressionOperatorMinus

    constructor(config?: ExpressionOperatorMinus.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorMinus

    // Overloads of new

    static new(): ExpressionOperatorBinaryUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorMinus.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorPlus {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorPlus.ConstructorProperties, ExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorPlus extends SqlExpressionOperatorPlus {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorPlus

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorPlus extends ExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlus

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorPlus>

    // Constructors of Vda-1.Vda.ExpressionOperatorPlus

    constructor(config?: ExpressionOperatorPlus.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorPlus

    // Overloads of new

    static new(): ExpressionOperatorBinaryUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorPlus.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorInitialUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorInitialUnaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorInitialUnaryterm extends SqlExpressionOperatorInitialUnaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    _operator_name: string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorInitialUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorInitialUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorInitialUnaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    constructor(config?: ExpressionOperatorInitialUnaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorInitialUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorInitialUnaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNot {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNot.ConstructorProperties, ExpressionOperatorInitialUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNot extends SqlExpressionOperatorNot {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNot

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNot extends ExpressionOperatorInitialUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNot

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNot>

    // Constructors of Vda-1.Vda.ExpressionOperatorNot

    constructor(config?: ExpressionOperatorNot.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNot

    // Overloads of new

    static new(): ExpressionOperatorInitialUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNot.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorFinalUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorFinalUnaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorFinalUnaryterm extends SqlExpressionOperatorFinalUnaryterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    _operator_name: string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorFinalUnaryterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorFinalUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorFinalUnaryterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    constructor(config?: ExpressionOperatorFinalUnaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorFinalUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorFinalUnaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIs {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIs.ConstructorProperties, ExpressionOperatorFinalUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIs extends SqlExpressionOperatorIs {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIs

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIs extends ExpressionOperatorFinalUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIs

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIs>

    // Constructors of Vda-1.Vda.ExpressionOperatorIs

    constructor(config?: ExpressionOperatorIs.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIs

    // Overloads of new

    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIs.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNot {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNot.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNot extends SqlExpressionOperatorIsNot {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNot

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNot extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNot

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNot>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNot

    constructor(config?: ExpressionOperatorIsNot.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNot

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNot.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNull {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNull.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNull extends SqlExpressionOperatorIsNull {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNull

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNull extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNull

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNull>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNull

    constructor(config?: ExpressionOperatorIsNull.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNull

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNull.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotNull {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotNull.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotNull extends SqlExpressionOperatorIsNotNull {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotNull

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNotNull extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNull

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotNull>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotNull

    constructor(config?: ExpressionOperatorIsNotNull.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotNull

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotNull.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsTrue.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsTrue extends SqlExpressionOperatorIsTrue {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsTrue

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsTrue extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTrue

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsTrue>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsTrue

    constructor(config?: ExpressionOperatorIsTrue.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsTrue

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsTrue.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotTrue.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotTrue extends SqlExpressionOperatorIsNotTrue {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotTrue

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotTrue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNotTrue extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTrue

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotTrue>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotTrue

    constructor(config?: ExpressionOperatorIsNotTrue.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotTrue

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotTrue.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsFalse.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsFalse extends SqlExpressionOperatorIsFalse {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsFalse

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsFalse extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalse

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsFalse>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsFalse

    constructor(config?: ExpressionOperatorIsFalse.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsFalse

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsFalse.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotFalse.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotFalse extends SqlExpressionOperatorIsNotFalse {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotFalse

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotFalse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNotFalse extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalse

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotFalse>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotFalse

    constructor(config?: ExpressionOperatorIsNotFalse.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotFalse

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotFalse.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotUnknown.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotUnknown extends SqlExpressionOperatorIsNotUnknown {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNotUnknown extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotUnknown>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    constructor(config?: ExpressionOperatorIsNotUnknown.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotUnknown

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotUnknown.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsUnknown.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsUnknown extends SqlExpressionOperatorIsUnknown {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsUnknown

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsUnknown, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsUnknown extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknown

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsUnknown>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsUnknown

    constructor(config?: ExpressionOperatorIsUnknown.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsUnknown

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsUnknown.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsDistinct.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsDistinct extends SqlExpressionOperatorIsDistinct {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsDistinct

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsDistinct extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinct

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsDistinct>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsDistinct

    constructor(config?: ExpressionOperatorIsDistinct.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsDistinct

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsDistinct.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotDistinct.ConstructorProperties, ExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotDistinct extends SqlExpressionOperatorIsNotDistinct {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNotDistinct extends ExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotDistinct>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    constructor(config?: ExpressionOperatorIsNotDistinct.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotDistinct

    // Overloads of new

    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotDistinct.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsDistinctFrom.ConstructorProperties, ExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsDistinctFrom extends SqlExpressionOperatorIsDistinctFrom {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsDistinctFrom extends ExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsDistinctFrom>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    constructor(config?: ExpressionOperatorIsDistinctFrom.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsDistinctFrom

    // Overloads of new

    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsDistinctFrom.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotDistinctFrom.ConstructorProperties, ExpressionOperatorIsNotDistinct.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotDistinctFrom extends SqlExpressionOperatorIsNotDistinctFrom {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorIsNotDistinctFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorIsNotDistinctFrom extends ExpressionOperatorIsNotDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorIsNotDistinctFrom>

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    constructor(config?: ExpressionOperatorIsNotDistinctFrom.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotDistinctFrom

    // Overloads of new

    static new(): ExpressionOperatorIsNotDistinct
    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotDistinctFrom.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorThreeterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorThreeterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorThreeterm extends SqlExpressionOperatorThreeterm {

    // Conflicting properties

    read_only_view: any

    // Own fields of Vda-1.Vda.ExpressionOperatorThreeterm

    _operator_name: string | null
    _operator2_name: string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorThreeterm

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorThreeterm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorThreeterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreeterm

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorThreeterm>

    // Constructors of Vda-1.Vda.ExpressionOperatorThreeterm

    constructor(config?: ExpressionOperatorThreeterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorThreeterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorThreeterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetween.ConstructorProperties, ExpressionOperatorThreeterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetween extends SqlExpressionOperatorBetween {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetween

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorBetween extends ExpressionOperatorThreeterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetween

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetween>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetween

    constructor(config?: ExpressionOperatorBetween.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetween

    // Overloads of new

    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetween.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetweenAnd.ConstructorProperties, ExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetweenAnd extends SqlExpressionOperatorBetweenAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorBetweenAnd extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetweenAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenAnd

    constructor(config?: ExpressionOperatorBetweenAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetweenAnd

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetween.ConstructorProperties, ExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetween extends SqlExpressionOperatorNotBetween {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetween

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetween, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotBetween extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetween

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetween>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetween

    constructor(config?: ExpressionOperatorNotBetween.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetween

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetween.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetweenAnd.ConstructorProperties, ExpressionOperatorNotBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetweenAnd extends SqlExpressionOperatorNotBetweenAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotBetweenAnd extends ExpressionOperatorNotBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetweenAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    constructor(config?: ExpressionOperatorNotBetweenAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenAnd

    // Overloads of new

    static new(): ExpressionOperatorNotBetween
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetweenSymmetric.ConstructorProperties, ExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetweenSymmetric extends SqlExpressionOperatorBetweenSymmetric {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorBetweenSymmetric extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetweenSymmetric>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    constructor(config?: ExpressionOperatorBetweenSymmetric.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetweenSymmetric

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenSymmetric.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetweenSymmetricAnd.ConstructorProperties, ExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetweenSymmetricAnd extends SqlExpressionOperatorBetweenSymmetricAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorBetweenSymmetricAnd extends ExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    constructor(config?: ExpressionOperatorBetweenSymmetricAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetweenSymmetricAnd

    // Overloads of new

    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenSymmetricAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties, ExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetweenSymmetric extends SqlExpressionOperatorNotBetweenSymmetric {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotBetweenSymmetric extends ExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetweenSymmetric>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    constructor(config?: ExpressionOperatorNotBetweenSymmetric.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenSymmetric

    // Overloads of new

    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenSymmetric.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties, ExpressionOperatorNotBetweenSymmetric.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetweenSymmetricAnd extends SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-type", callback: (($obj: ExpressionOperatorNotBetweenSymmetricAnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionOperatorNotBetweenSymmetricAnd extends ExpressionOperatorNotBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    static name: string
    static $gtype: GObject.GType<ExpressionOperatorNotBetweenSymmetricAnd>

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    constructor(config?: ExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenSymmetricAnd

    // Overloads of new

    static new(): ExpressionOperatorNotBetweenSymmetric
    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionValue {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionValue.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface ExpressionValue extends SqlExpressionValue {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionValue

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ExpressionValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionValue extends Expression {

    // Own properties of Vda-1.Vda.ExpressionValue

    static name: string
    static $gtype: GObject.GType<ExpressionValue>

    // Constructors of Vda-1.Vda.ExpressionValue

    constructor(config?: ExpressionValue.ConstructorProperties) 
    constructor() 
    static new(): ExpressionValue

    // Overloads of new

    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionValue.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionValueParameter {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionValueParameter.ConstructorProperties, ExpressionValue.ConstructorProperties {
    }

}

export interface ExpressionValueParameter extends SqlExpressionValueParameter {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.ExpressionValueParameter

    connect(sigName: "notify::g-type", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::gtype", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtype", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtype", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ExpressionValueParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExpressionValueParameter extends ExpressionValue {

    // Own properties of Vda-1.Vda.ExpressionValueParameter

    static name: string
    static $gtype: GObject.GType<ExpressionValueParameter>

    // Constructors of Vda-1.Vda.ExpressionValueParameter

    constructor(config?: ExpressionValueParameter.ConstructorProperties) 
    constructor() 
    static new(): ExpressionValueParameter

    // Overloads of new

    static new(): ExpressionValue
    static new(): Expression
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionValueParameter.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module HashList {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, HashModel.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface HashList extends Gio.ListModel, HashModel {

    // Conflicting properties

    read_only_view: any

    // Conflicting methods

    add(object: GObject.Object): void
    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(object: GObject.Object): void
    remove(item: any | null): boolean
    remove(item: any | null): boolean
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_add(object: GObject.Object): void
    vfunc_add(item: any | null): boolean
    vfunc_add(item: any | null): boolean
    vfunc_remove(object: GObject.Object): void
    vfunc_remove(item: any | null): boolean
    vfunc_remove(item: any | null): boolean
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of Vda-1.Vda.HashList

    connect(sigName: "notify::g-type", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HashList extends Gee.ArrayList {

    // Own properties of Vda-1.Vda.HashList

    static name: string
    static $gtype: GObject.GType<HashList>

    // Constructors of Vda-1.Vda.HashList

    constructor(config?: HashList.ConstructorProperties) 
    constructor() 
    static new(): HashList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: HashList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module InvalidQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.InvalidQuery

        message?: string | null
    }

}

export interface InvalidQuery extends Query {

    // Own properties of Vda-1.Vda.InvalidQuery

    message: string | null

    // Owm methods of Vda-1.Vda.InvalidQuery

    get_message(): string | null
    set_message(value: string | null): void

    // Class property signals of Vda-1.Vda.InvalidQuery

    connect(sigName: "notify::message", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: InvalidQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InvalidQuery extends GObject.Object {

    // Own properties of Vda-1.Vda.InvalidQuery

    static name: string
    static $gtype: GObject.GType<InvalidQuery>

    // Constructors of Vda-1.Vda.InvalidQuery

    constructor(config?: InvalidQuery.ConstructorProperties) 
    constructor(msg: string | null) 
    static new(msg: string | null): InvalidQuery
    _init(config?: InvalidQuery.ConstructorProperties): void
}

export module InvalidPreparedQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends PreparedQuery.ConstructorProperties, InvalidQuery.ConstructorProperties {
    }

}

export interface InvalidPreparedQuery extends PreparedQuery {

    // Class property signals of Vda-1.Vda.InvalidPreparedQuery

    connect(sigName: "notify::message", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sql", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: InvalidPreparedQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InvalidPreparedQuery extends InvalidQuery {

    // Own properties of Vda-1.Vda.InvalidPreparedQuery

    static name: string
    static $gtype: GObject.GType<InvalidPreparedQuery>

    // Constructors of Vda-1.Vda.InvalidPreparedQuery

    constructor(config?: InvalidPreparedQuery.ConstructorProperties) 
    constructor(msg: string | null) 
    static new(msg: string | null): InvalidPreparedQuery

    // Overloads of new

    static new(msg: string | null): InvalidQuery
    _init(config?: InvalidPreparedQuery.ConstructorProperties): void
}

export module InvalidResult {

    // Constructor properties interface

    export interface ConstructorProperties extends Result.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.InvalidResult

        message?: string | null
    }

}

export interface InvalidResult extends Result {

    // Own properties of Vda-1.Vda.InvalidResult

    message: string | null

    // Owm methods of Vda-1.Vda.InvalidResult

    get_message(): string | null
    set_message(value: string | null): void

    // Class property signals of Vda-1.Vda.InvalidResult

    connect(sigName: "notify::message", callback: (($obj: InvalidResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: InvalidResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InvalidResult extends GObject.Object {

    // Own properties of Vda-1.Vda.InvalidResult

    static name: string
    static $gtype: GObject.GType<InvalidResult>

    // Constructors of Vda-1.Vda.InvalidResult

    constructor(config?: InvalidResult.ConstructorProperties) 
    constructor(msg: string | null) 
    static new(msg: string | null): InvalidResult
    _init(config?: InvalidResult.ConstructorProperties): void
}

export module Parameters {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlParameters.ConstructorProperties, Gee.HashMap.ConstructorProperties {
    }

}

export interface Parameters extends SqlParameters {

    // Class property signals of Vda-1.Vda.Parameters

    connect(sigName: "notify::k-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Parameters, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Parameters extends Gee.HashMap {

    // Own properties of Vda-1.Vda.Parameters

    static name: string
    static $gtype: GObject.GType<Parameters>

    // Constructors of Vda-1.Vda.Parameters

    constructor(config?: Parameters.ConstructorProperties) 
    constructor() 
    static new(): Parameters

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: Parameters.ConstructorProperties): void
}

export module Parser {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlParser.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Parser extends SqlParser {

    // Class property signals of Vda-1.Vda.Parser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Parser extends GObject.Object {

    // Own properties of Vda-1.Vda.Parser

    static name: string
    static $gtype: GObject.GType<Parser>

    // Constructors of Vda-1.Vda.Parser

    constructor(config?: Parser.ConstructorProperties) 
    constructor() 
    static new(): Parser
    _init(config?: Parser.ConstructorProperties): void
}

export module TableReference {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlTableReference.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TableReference extends SqlTableReference {

    // Class property signals of Vda-1.Vda.TableReference

    connect(sigName: "notify::name", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allias", callback: (($obj: TableReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TableReference extends GObject.Object {

    // Own properties of Vda-1.Vda.TableReference

    static name: string
    static $gtype: GObject.GType<TableReference>

    // Constructors of Vda-1.Vda.TableReference

    constructor(config?: TableReference.ConstructorProperties) 
    constructor() 
    static new(): TableReference
    _init(config?: TableReference.ConstructorProperties): void
}

export module Value {

    // Constructor properties interface

    export interface ConstructorProperties extends Stringifiable.ConstructorProperties, SqlValue.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Value extends Stringifiable, SqlValue {

    // Own fields of Vda-1.Vda.Value

    _name: string | null
    _val: any

    // Owm methods of Vda-1.Vda.Value

    force_value(val: any): boolean
    from_value(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    is_compatible(type: GObject.GType): boolean
    parse(str: string | null): boolean
    to_gvalue(): /* result */ any
    to_string(): string | null
    to_string_quoted(): string | null
    to_sql_expression(): string | null

    // Own virtual methods of Vda-1.Vda.Value

    vfunc_force_value(val: any): boolean
    vfunc_from_value(val: any): boolean
    vfunc_cast(type: GObject.GType): SqlValue | null
    vfunc_is_compatible(type: GObject.GType): boolean
    vfunc_parse(str: string | null): boolean
    vfunc_to_gvalue(): /* result */ any
    vfunc_to_string(): string | null
    vfunc_to_string_quoted(): string | null
    vfunc_to_sql_expression(): string | null

    // Class property signals of Vda-1.Vda.Value

    connect(sigName: "notify::name", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Value extends GObject.Object {

    // Own properties of Vda-1.Vda.Value

    static name: string
    static $gtype: GObject.GType<Value>

    // Constructors of Vda-1.Vda.Value

    constructor(config?: Value.ConstructorProperties) 
    constructor() 
    static new(): Value
    _init(config?: Value.ConstructorProperties): void
}

export module ValueNull {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueNull.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueNull extends SqlValueNull {

    // Class property signals of Vda-1.Vda.ValueNull

    connect(sigName: "notify::name", callback: (($obj: ValueNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueNull extends Value {

    // Own properties of Vda-1.Vda.ValueNull

    static name: string
    static $gtype: GObject.GType<ValueNull>

    // Constructors of Vda-1.Vda.ValueNull

    constructor(config?: ValueNull.ConstructorProperties) 
    constructor() 
    static new(): ValueNull

    // Overloads of new

    static new(): Value
    _init(config?: ValueNull.ConstructorProperties): void
}

export module ValueString {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueString.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueString extends SqlValueString {

    // Class property signals of Vda-1.Vda.ValueString

    connect(sigName: "notify::name", callback: (($obj: ValueString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueString extends Value {

    // Own properties of Vda-1.Vda.ValueString

    static name: string
    static $gtype: GObject.GType<ValueString>

    // Constructors of Vda-1.Vda.ValueString

    constructor(config?: ValueString.ConstructorProperties) 
    constructor() 
    static new(): ValueString

    // Overloads of new

    static new(): Value
    _init(config?: ValueString.ConstructorProperties): void
}

export module ValueXml {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueXml.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueXml extends SqlValueXml {

    // Class property signals of Vda-1.Vda.ValueXml

    connect(sigName: "notify::document", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueXml, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueXml extends ValueString {

    // Own properties of Vda-1.Vda.ValueXml

    static name: string
    static $gtype: GObject.GType<ValueXml>

    // Constructors of Vda-1.Vda.ValueXml

    constructor(config?: ValueXml.ConstructorProperties) 
    constructor() 
    static new(): ValueXml

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueXml.ConstructorProperties): void
}

export module ValueJson {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueJson.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueJson extends SqlValueJson {

    // Class property signals of Vda-1.Vda.ValueJson

    connect(sigName: "notify::document", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueJson extends ValueString {

    // Own properties of Vda-1.Vda.ValueJson

    static name: string
    static $gtype: GObject.GType<ValueJson>

    // Constructors of Vda-1.Vda.ValueJson

    constructor(config?: ValueJson.ConstructorProperties) 
    constructor() 
    static new(): ValueJson

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueJson.ConstructorProperties): void
}

export module ValueText {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueText.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueText extends SqlValueText {

    // Class property signals of Vda-1.Vda.ValueText

    connect(sigName: "notify::name", callback: (($obj: ValueText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueText extends ValueString {

    // Own properties of Vda-1.Vda.ValueText

    static name: string
    static $gtype: GObject.GType<ValueText>

    // Constructors of Vda-1.Vda.ValueText

    constructor(config?: ValueText.ConstructorProperties) 
    constructor() 
    static new(): ValueText

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueText.ConstructorProperties): void
}

export module ValueName {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueName.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueName extends SqlValueName {

    // Class property signals of Vda-1.Vda.ValueName

    connect(sigName: "notify::name", callback: (($obj: ValueName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueName extends ValueString {

    // Own properties of Vda-1.Vda.ValueName

    static name: string
    static $gtype: GObject.GType<ValueName>

    // Constructors of Vda-1.Vda.ValueName

    constructor(config?: ValueName.ConstructorProperties) 
    constructor() 
    static new(): ValueName

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueName.ConstructorProperties): void
}

export module ValueBool {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueBool.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueBool extends SqlValueBool {

    // Class property signals of Vda-1.Vda.ValueBool

    connect(sigName: "notify::name", callback: (($obj: ValueBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueBool extends Value {

    // Own properties of Vda-1.Vda.ValueBool

    static name: string
    static $gtype: GObject.GType<ValueBool>

    // Constructors of Vda-1.Vda.ValueBool

    constructor(config?: ValueBool.ConstructorProperties) 
    constructor() 
    static new(): ValueBool

    // Overloads of new

    static new(): Value
    _init(config?: ValueBool.ConstructorProperties): void
}

export module ValueBit {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueBit.ConstructorProperties, ValueBool.ConstructorProperties {
    }

}

export interface ValueBit extends SqlValueBit {

    // Class property signals of Vda-1.Vda.ValueBit

    connect(sigName: "notify::name", callback: (($obj: ValueBit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueBit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueBit extends ValueBool {

    // Own properties of Vda-1.Vda.ValueBit

    static name: string
    static $gtype: GObject.GType<ValueBit>

    // Constructors of Vda-1.Vda.ValueBit

    constructor(config?: ValueBit.ConstructorProperties) 
    constructor() 
    static new(): ValueBit

    // Overloads of new

    static new(): ValueBool
    static new(): Value
    _init(config?: ValueBit.ConstructorProperties): void
}

export module ValueInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueInteger extends SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.ValueInteger

    connect(sigName: "notify::name", callback: (($obj: ValueInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueInteger extends Value {

    // Own properties of Vda-1.Vda.ValueInteger

    static name: string
    static $gtype: GObject.GType<ValueInteger>

    // Constructors of Vda-1.Vda.ValueInteger

    constructor(config?: ValueInteger.ConstructorProperties) 
    constructor() 
    static new(): ValueInteger

    // Overloads of new

    static new(): Value
    _init(config?: ValueInteger.ConstructorProperties): void
}

export module ValueByte {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueByte.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueByte extends SqlValueByte {

    // Class property signals of Vda-1.Vda.ValueByte

    connect(sigName: "notify::name", callback: (($obj: ValueByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueByte extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueByte

    static name: string
    static $gtype: GObject.GType<ValueByte>

    // Constructors of Vda-1.Vda.ValueByte

    constructor(config?: ValueByte.ConstructorProperties) 
    constructor() 
    static new(): ValueByte

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueByte.ConstructorProperties): void
}

export module ValueInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueInt2.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueInt2 extends SqlValueInt2 {

    // Class property signals of Vda-1.Vda.ValueInt2

    connect(sigName: "notify::name", callback: (($obj: ValueInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueInt2 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt2

    static name: string
    static $gtype: GObject.GType<ValueInt2>

    // Constructors of Vda-1.Vda.ValueInt2

    constructor(config?: ValueInt2.ConstructorProperties) 
    constructor() 
    static new(): ValueInt2

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt2.ConstructorProperties): void
}

export module ValueInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueInt4.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueInt4 extends SqlValueInt4 {

    // Class property signals of Vda-1.Vda.ValueInt4

    connect(sigName: "notify::name", callback: (($obj: ValueInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueInt4 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt4

    static name: string
    static $gtype: GObject.GType<ValueInt4>

    // Constructors of Vda-1.Vda.ValueInt4

    constructor(config?: ValueInt4.ConstructorProperties) 
    constructor() 
    static new(): ValueInt4

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt4.ConstructorProperties): void
}

export module ValueInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueInt8.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueInt8 extends SqlValueInt8 {

    // Class property signals of Vda-1.Vda.ValueInt8

    connect(sigName: "notify::name", callback: (($obj: ValueInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueInt8 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt8

    static name: string
    static $gtype: GObject.GType<ValueInt8>

    // Constructors of Vda-1.Vda.ValueInt8

    constructor(config?: ValueInt8.ConstructorProperties) 
    constructor() 
    static new(): ValueInt8

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt8.ConstructorProperties): void
}

export module ValueUnsignedInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueUnsignedInteger extends SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.ValueUnsignedInteger

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInteger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueUnsignedInteger extends Value {

    // Own properties of Vda-1.Vda.ValueUnsignedInteger

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInteger>

    // Constructors of Vda-1.Vda.ValueUnsignedInteger

    constructor(config?: ValueUnsignedInteger.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInteger

    // Overloads of new

    static new(): Value
    _init(config?: ValueUnsignedInteger.ConstructorProperties): void
}

export module ValueUnsignedByte {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedByte.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedByte extends SqlValueUnsignedByte {

    // Class property signals of Vda-1.Vda.ValueUnsignedByte

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedByte, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueUnsignedByte extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedByte

    static name: string
    static $gtype: GObject.GType<ValueUnsignedByte>

    // Constructors of Vda-1.Vda.ValueUnsignedByte

    constructor(config?: ValueUnsignedByte.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedByte

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedByte.ConstructorProperties): void
}

export module ValueUnsignedInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedInt2.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedInt2 extends SqlValueUnsignedInt2 {

    // Class property signals of Vda-1.Vda.ValueUnsignedInt2

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInt2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueUnsignedInt2 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInt2>

    // Constructors of Vda-1.Vda.ValueUnsignedInt2

    constructor(config?: ValueUnsignedInt2.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInt2

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt2.ConstructorProperties): void
}

export module ValueUnsignedInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedInt4.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedInt4 extends SqlValueUnsignedInt4 {

    // Class property signals of Vda-1.Vda.ValueUnsignedInt4

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInt4, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueUnsignedInt4 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInt4>

    // Constructors of Vda-1.Vda.ValueUnsignedInt4

    constructor(config?: ValueUnsignedInt4.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInt4

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt4.ConstructorProperties): void
}

export module ValueUnsignedInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedInt8.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedInt8 extends SqlValueUnsignedInt8 {

    // Class property signals of Vda-1.Vda.ValueUnsignedInt8

    connect(sigName: "notify::name", callback: (($obj: ValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueUnsignedInt8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueUnsignedInt8 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8

    static name: string
    static $gtype: GObject.GType<ValueUnsignedInt8>

    // Constructors of Vda-1.Vda.ValueUnsignedInt8

    constructor(config?: ValueUnsignedInt8.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInt8

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt8.ConstructorProperties): void
}

export module ValueOid {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueOid.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueOid extends SqlValueOid {

    // Class property signals of Vda-1.Vda.ValueOid

    connect(sigName: "notify::name", callback: (($obj: ValueOid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueOid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueOid extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueOid

    static name: string
    static $gtype: GObject.GType<ValueOid>

    // Constructors of Vda-1.Vda.ValueOid

    constructor(config?: ValueOid.ConstructorProperties) 
    constructor() 
    static new(): ValueOid

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueOid.ConstructorProperties): void
}

export module ValueNumeric {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueNumeric.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueNumeric extends SqlValueNumeric {

    // Owm methods of Vda-1.Vda.ValueNumeric

    format(str: string | null): string | null

    // Own virtual methods of Vda-1.Vda.ValueNumeric

    vfunc_format(str: string | null): string | null

    // Class property signals of Vda-1.Vda.ValueNumeric

    connect(sigName: "notify::name", callback: (($obj: ValueNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueNumeric extends Value {

    // Own properties of Vda-1.Vda.ValueNumeric

    static name: string
    static $gtype: GObject.GType<ValueNumeric>

    // Constructors of Vda-1.Vda.ValueNumeric

    constructor(config?: ValueNumeric.ConstructorProperties) 
    constructor() 
    static new(): ValueNumeric

    // Overloads of new

    static new(): Value
    _init(config?: ValueNumeric.ConstructorProperties): void
}

export module ValueFloat {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueFloat.ConstructorProperties, ValueNumeric.ConstructorProperties {
    }

}

export interface ValueFloat extends SqlValueFloat {

    // Class property signals of Vda-1.Vda.ValueFloat

    connect(sigName: "notify::name", callback: (($obj: ValueFloat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueFloat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueFloat extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueFloat

    static name: string
    static $gtype: GObject.GType<ValueFloat>

    // Constructors of Vda-1.Vda.ValueFloat

    constructor(config?: ValueFloat.ConstructorProperties) 
    constructor() 
    static new(): ValueFloat

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueFloat.ConstructorProperties): void
}

export module ValueDouble {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueDouble.ConstructorProperties, ValueNumeric.ConstructorProperties {
    }

}

export interface ValueDouble extends SqlValueDouble {

    // Class property signals of Vda-1.Vda.ValueDouble

    connect(sigName: "notify::name", callback: (($obj: ValueDouble, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueDouble, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueDouble extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueDouble

    static name: string
    static $gtype: GObject.GType<ValueDouble>

    // Constructors of Vda-1.Vda.ValueDouble

    constructor(config?: ValueDouble.ConstructorProperties) 
    constructor() 
    static new(): ValueDouble

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueDouble.ConstructorProperties): void
}

export module ValueMoney {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueMoney.ConstructorProperties, ValueNumeric.ConstructorProperties {
    }

}

export interface ValueMoney extends SqlValueMoney {

    // Class property signals of Vda-1.Vda.ValueMoney

    connect(sigName: "notify::name", callback: (($obj: ValueMoney, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueMoney, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueMoney extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueMoney

    static name: string
    static $gtype: GObject.GType<ValueMoney>

    // Constructors of Vda-1.Vda.ValueMoney

    constructor(config?: ValueMoney.ConstructorProperties) 
    constructor() 
    static new(): ValueMoney

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueMoney.ConstructorProperties): void
}

export module ValueTimestamp {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTimestamp.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueTimestamp extends SqlValueTimestamp {

    // Own fields of Vda-1.Vda.ValueTimestamp

    dt: GLib.DateTime

    // Owm methods of Vda-1.Vda.ValueTimestamp

    format_local(): string | null
    format_utc(): string | null
    format_locale(): string | null

    // Own virtual methods of Vda-1.Vda.ValueTimestamp

    vfunc_format_local(): string | null
    vfunc_format_utc(): string | null
    vfunc_format_locale(): string | null

    // Class property signals of Vda-1.Vda.ValueTimestamp

    connect(sigName: "notify::name", callback: (($obj: ValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueTimestamp extends Value {

    // Own properties of Vda-1.Vda.ValueTimestamp

    static name: string
    static $gtype: GObject.GType<ValueTimestamp>

    // Constructors of Vda-1.Vda.ValueTimestamp

    constructor(config?: ValueTimestamp.ConstructorProperties) 
    constructor() 
    static new(): ValueTimestamp

    // Overloads of new

    static new(): Value
    _init(config?: ValueTimestamp.ConstructorProperties): void
}

export module ValueTimestampNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTimestampNtz.ConstructorProperties, ValueTimestamp.ConstructorProperties {
    }

}

export interface ValueTimestampNtz extends SqlValueTimestampNtz {

    // Class property signals of Vda-1.Vda.ValueTimestampNtz

    connect(sigName: "notify::name", callback: (($obj: ValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTimestampNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueTimestampNtz extends ValueTimestamp {

    // Own properties of Vda-1.Vda.ValueTimestampNtz

    static name: string
    static $gtype: GObject.GType<ValueTimestampNtz>

    // Constructors of Vda-1.Vda.ValueTimestampNtz

    constructor(config?: ValueTimestampNtz.ConstructorProperties) 
    constructor() 
    static new(): ValueTimestampNtz

    // Overloads of new

    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTimestampNtz.ConstructorProperties): void
}

export module ValueTime {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTime.ConstructorProperties, ValueTimestamp.ConstructorProperties {
    }

}

export interface ValueTime extends SqlValueTime {

    // Class property signals of Vda-1.Vda.ValueTime

    connect(sigName: "notify::name", callback: (($obj: ValueTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueTime extends ValueTimestamp {

    // Own properties of Vda-1.Vda.ValueTime

    static name: string
    static $gtype: GObject.GType<ValueTime>

    // Constructors of Vda-1.Vda.ValueTime

    constructor(config?: ValueTime.ConstructorProperties) 
    constructor() 
    static new(): ValueTime

    // Overloads of new

    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTime.ConstructorProperties): void
}

export module ValueTimeNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTimeNtz.ConstructorProperties, ValueTimestampNtz.ConstructorProperties {
    }

}

export interface ValueTimeNtz extends SqlValueTimeNtz {

    // Class property signals of Vda-1.Vda.ValueTimeNtz

    connect(sigName: "notify::name", callback: (($obj: ValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueTimeNtz, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueTimeNtz extends ValueTimestampNtz {

    // Own properties of Vda-1.Vda.ValueTimeNtz

    static name: string
    static $gtype: GObject.GType<ValueTimeNtz>

    // Constructors of Vda-1.Vda.ValueTimeNtz

    constructor(config?: ValueTimeNtz.ConstructorProperties) 
    constructor() 
    static new(): ValueTimeNtz

    // Overloads of new

    static new(): ValueTimestampNtz
    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTimeNtz.ConstructorProperties): void
}

export module ValueDate {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueDate.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueDate extends SqlValueDate {

    // Own fields of Vda-1.Vda.ValueDate

    d: GLib.Date

    // Class property signals of Vda-1.Vda.ValueDate

    connect(sigName: "notify::name", callback: (($obj: ValueDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueDate extends Value {

    // Own properties of Vda-1.Vda.ValueDate

    static name: string
    static $gtype: GObject.GType<ValueDate>

    // Constructors of Vda-1.Vda.ValueDate

    constructor(config?: ValueDate.ConstructorProperties) 
    constructor() 
    static new(): ValueDate

    // Overloads of new

    static new(): Value
    _init(config?: ValueDate.ConstructorProperties): void
}

export module ValueBinary {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueBinary.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueBinary extends SqlValueBinary {

    // Class property signals of Vda-1.Vda.ValueBinary

    connect(sigName: "notify::size", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueBinary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueBinary extends Value {

    // Own properties of Vda-1.Vda.ValueBinary

    static name: string
    static $gtype: GObject.GType<ValueBinary>

    // Constructors of Vda-1.Vda.ValueBinary

    constructor(config?: ValueBinary.ConstructorProperties) 
    static with_data(d: Uint8Array): ValueBinary
    static take(d: Uint8Array): ValueBinary
    constructor() 
    static new(): ValueBinary

    // Overloads of new

    static new(): Value
    _init(config?: ValueBinary.ConstructorProperties): void
}

export module ValueMathExp {

    // Constructor properties interface

    export interface ConstructorProperties extends Stringifiable.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueMathExp.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.ValueMathExp

        parameters?: SqlParameters | null
    }

}

export interface ValueMathExp extends Stringifiable, SqlValue, SqlValueMathExp {

    // Own properties of Vda-1.Vda.ValueMathExp

    parameters: SqlParameters

    // Owm methods of Vda-1.Vda.ValueMathExp

    get_parameters(): SqlParameters
    set_parameters(value: SqlParameters): void

    // Class property signals of Vda-1.Vda.ValueMathExp

    connect(sigName: "notify::parameters", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::math", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::math", callback: (($obj: ValueMathExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::math", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ValueMathExp extends GObject.Object {

    // Own properties of Vda-1.Vda.ValueMathExp

    static name: string
    static $gtype: GObject.GType<ValueMathExp>

    // Constructors of Vda-1.Vda.ValueMathExp

    constructor(config?: ValueMathExp.ConstructorProperties) 
    constructor() 
    static new(): ValueMathExp
    _init(config?: ValueMathExp.ConstructorProperties): void
}

export interface AffectedRowsClass {
}

export abstract class AffectedRowsClass {

    // Own properties of Vda-1.Vda.AffectedRowsClass

    static name: string
}

export interface AffectedRowsPrivate {
}

export class AffectedRowsPrivate {

    // Own properties of Vda-1.Vda.AffectedRowsPrivate

    static name: string
}

export interface CommandDeleteClass {
}

export abstract class CommandDeleteClass {

    // Own properties of Vda-1.Vda.CommandDeleteClass

    static name: string
}

export interface CommandDeletePrivate {
}

export class CommandDeletePrivate {

    // Own properties of Vda-1.Vda.CommandDeletePrivate

    static name: string
}

export interface CommandInsertClass {
}

export abstract class CommandInsertClass {

    // Own properties of Vda-1.Vda.CommandInsertClass

    static name: string
}

export interface CommandInsertPrivate {
}

export class CommandInsertPrivate {

    // Own properties of Vda-1.Vda.CommandInsertPrivate

    static name: string
}

export interface CommandModificationClass {
}

export abstract class CommandModificationClass {

    // Own properties of Vda-1.Vda.CommandModificationClass

    static name: string
}

export interface CommandModificationPrivate {
}

export class CommandModificationPrivate {

    // Own properties of Vda-1.Vda.CommandModificationPrivate

    static name: string
}

export interface CommandSelectClass {
}

export abstract class CommandSelectClass {

    // Own properties of Vda-1.Vda.CommandSelectClass

    static name: string
}

export interface CommandSelectPrivate {
}

export class CommandSelectPrivate {

    // Own properties of Vda-1.Vda.CommandSelectPrivate

    static name: string
}

export interface CommandUpdateClass {
}

export abstract class CommandUpdateClass {

    // Own properties of Vda-1.Vda.CommandUpdateClass

    static name: string
}

export interface CommandUpdatePrivate {
}

export class CommandUpdatePrivate {

    // Own properties of Vda-1.Vda.CommandUpdatePrivate

    static name: string
}

export interface ConnectionParameterClass {
}

export abstract class ConnectionParameterClass {

    // Own properties of Vda-1.Vda.ConnectionParameterClass

    static name: string
}

export interface ConnectionParameterPrivate {
}

export class ConnectionParameterPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPrivate

    static name: string
}

export interface ConnectionParameterDbNameClass {
}

export abstract class ConnectionParameterDbNameClass {

    // Own properties of Vda-1.Vda.ConnectionParameterDbNameClass

    static name: string
}

export interface ConnectionParameterDbNamePrivate {
}

export class ConnectionParameterDbNamePrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterDbNamePrivate

    static name: string
}

export interface ConnectionParameterHostClass {
}

export abstract class ConnectionParameterHostClass {

    // Own properties of Vda-1.Vda.ConnectionParameterHostClass

    static name: string
}

export interface ConnectionParameterHostPrivate {
}

export class ConnectionParameterHostPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterHostPrivate

    static name: string
}

export interface ConnectionParameterPortClass {
}

export abstract class ConnectionParameterPortClass {

    // Own properties of Vda-1.Vda.ConnectionParameterPortClass

    static name: string
}

export interface ConnectionParameterPortPrivate {
}

export class ConnectionParameterPortPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPortPrivate

    static name: string
}

export interface ConnectionParameterUserNameClass {
}

export abstract class ConnectionParameterUserNameClass {

    // Own properties of Vda-1.Vda.ConnectionParameterUserNameClass

    static name: string
}

export interface ConnectionParameterUserNamePrivate {
}

export class ConnectionParameterUserNamePrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterUserNamePrivate

    static name: string
}

export interface ConnectionParameterPasswordClass {
}

export abstract class ConnectionParameterPasswordClass {

    // Own properties of Vda-1.Vda.ConnectionParameterPasswordClass

    static name: string
}

export interface ConnectionParameterPasswordPrivate {
}

export class ConnectionParameterPasswordPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPasswordPrivate

    static name: string
}

export interface ConnectionParametersClass {

    // Own fields of Vda-1.Vda.ConnectionParametersClass

    parse: (cnstring: string | null) => void
}

export abstract class ConnectionParametersClass {

    // Own properties of Vda-1.Vda.ConnectionParametersClass

    static name: string
}

export interface ConnectionParametersPrivate {
}

export class ConnectionParametersPrivate {

    // Own properties of Vda-1.Vda.ConnectionParametersPrivate

    static name: string
}

export interface ExpressionClass {

    // Own fields of Vda-1.Vda.ExpressionClass

    to_string: () => string | null
}

export abstract class ExpressionClass {

    // Own properties of Vda-1.Vda.ExpressionClass

    static name: string
}

export interface ExpressionPrivate {
}

export class ExpressionPrivate {

    // Own properties of Vda-1.Vda.ExpressionPrivate

    static name: string
}

export interface ExpressionFieldClass {
}

export abstract class ExpressionFieldClass {

    // Own properties of Vda-1.Vda.ExpressionFieldClass

    static name: string
}

export interface ExpressionFieldPrivate {
}

export class ExpressionFieldPrivate {

    // Own properties of Vda-1.Vda.ExpressionFieldPrivate

    static name: string
}

export interface ExpressionOperatorClass {
}

export abstract class ExpressionOperatorClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorClass

    static name: string
}

export interface ExpressionOperatorPrivate {
}

export class ExpressionOperatorPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorPrivate

    static name: string
}

export interface ExpressionOperatorGroupClass {
}

export abstract class ExpressionOperatorGroupClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroupClass

    static name: string
}

export interface ExpressionOperatorGroupPrivate {
}

export class ExpressionOperatorGroupPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroupPrivate

    static name: string
}

export interface ExpressionOperatorMultitermClass {
}

export abstract class ExpressionOperatorMultitermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultitermClass

    static name: string
}

export interface ExpressionOperatorMultitermPrivate {
}

export class ExpressionOperatorMultitermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultitermPrivate

    static name: string
}

export interface ExpressionOperatorAndClass {
}

export abstract class ExpressionOperatorAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorAndClass

    static name: string
}

export interface ExpressionOperatorAndPrivate {
}

export class ExpressionOperatorAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorAndPrivate

    static name: string
}

export interface ExpressionOperatorOrClass {
}

export abstract class ExpressionOperatorOrClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorOrClass

    static name: string
}

export interface ExpressionOperatorOrPrivate {
}

export class ExpressionOperatorOrPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorOrPrivate

    static name: string
}

export interface ExpressionOperatorBinarytermClass {
}

export abstract class ExpressionOperatorBinarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinarytermClass

    static name: string
}

export interface ExpressionOperatorBinarytermPrivate {
}

export class ExpressionOperatorBinarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinarytermPrivate

    static name: string
}

export interface ExpressionOperatorEqClass {
}

export abstract class ExpressionOperatorEqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorEqClass

    static name: string
}

export interface ExpressionOperatorEqPrivate {
}

export class ExpressionOperatorEqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorEqPrivate

    static name: string
}

export interface ExpressionOperatorNotEqClass {
}

export abstract class ExpressionOperatorNotEqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEqClass

    static name: string
}

export interface ExpressionOperatorNotEqPrivate {
}

export class ExpressionOperatorNotEqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEqPrivate

    static name: string
}

export interface ExpressionOperatorDiffClass {
}

export abstract class ExpressionOperatorDiffClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiffClass

    static name: string
}

export interface ExpressionOperatorDiffPrivate {
}

export class ExpressionOperatorDiffPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiffPrivate

    static name: string
}

export interface ExpressionOperatorGtClass {
}

export abstract class ExpressionOperatorGtClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGtClass

    static name: string
}

export interface ExpressionOperatorGtPrivate {
}

export class ExpressionOperatorGtPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGtPrivate

    static name: string
}

export interface ExpressionOperatorLtClass {
}

export abstract class ExpressionOperatorLtClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLtClass

    static name: string
}

export interface ExpressionOperatorLtPrivate {
}

export class ExpressionOperatorLtPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLtPrivate

    static name: string
}

export interface ExpressionOperatorGeqClass {
}

export abstract class ExpressionOperatorGeqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeqClass

    static name: string
}

export interface ExpressionOperatorGeqPrivate {
}

export class ExpressionOperatorGeqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeqPrivate

    static name: string
}

export interface ExpressionOperatorLeqClass {
}

export abstract class ExpressionOperatorLeqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeqClass

    static name: string
}

export interface ExpressionOperatorLeqPrivate {
}

export class ExpressionOperatorLeqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeqPrivate

    static name: string
}

export interface ExpressionOperatorRegexpClass {
}

export abstract class ExpressionOperatorRegexpClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexpClass

    static name: string
}

export interface ExpressionOperatorRegexpPrivate {
}

export class ExpressionOperatorRegexpPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexpPrivate

    static name: string
}

export interface ExpressionOperatorStarClass {
}

export abstract class ExpressionOperatorStarClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorStarClass

    static name: string
}

export interface ExpressionOperatorStarPrivate {
}

export class ExpressionOperatorStarPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorStarPrivate

    static name: string
}

export interface ExpressionOperatorDivClass {
}

export abstract class ExpressionOperatorDivClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorDivClass

    static name: string
}

export interface ExpressionOperatorDivPrivate {
}

export class ExpressionOperatorDivPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorDivPrivate

    static name: string
}

export interface ExpressionOperatorInClass {
}

export abstract class ExpressionOperatorInClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorInClass

    static name: string
}

export interface ExpressionOperatorInPrivate {
}

export class ExpressionOperatorInPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorInPrivate

    static name: string
}

export interface ExpressionOperatorNotInClass {
}

export abstract class ExpressionOperatorNotInClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotInClass

    static name: string
}

export interface ExpressionOperatorNotInPrivate {
}

export class ExpressionOperatorNotInPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotInPrivate

    static name: string
}

export interface ExpressionOperatorConcatenateClass {
}

export abstract class ExpressionOperatorConcatenateClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenateClass

    static name: string
}

export interface ExpressionOperatorConcatenatePrivate {
}

export class ExpressionOperatorConcatenatePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenatePrivate

    static name: string
}

export interface ExpressionOperatorSimilarToClass {
}

export abstract class ExpressionOperatorSimilarToClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarToClass

    static name: string
}

export interface ExpressionOperatorSimilarToPrivate {
}

export class ExpressionOperatorSimilarToPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarToPrivate

    static name: string
}

export interface ExpressionOperatorLikeClass {
}

export abstract class ExpressionOperatorLikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLikeClass

    static name: string
}

export interface ExpressionOperatorLikePrivate {
}

export class ExpressionOperatorLikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLikePrivate

    static name: string
}

export interface ExpressionOperatorNotLikeClass {
}

export abstract class ExpressionOperatorNotLikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLikeClass

    static name: string
}

export interface ExpressionOperatorNotLikePrivate {
}

export class ExpressionOperatorNotLikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLikePrivate

    static name: string
}

export interface ExpressionOperatorIlikeClass {
}

export abstract class ExpressionOperatorIlikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlikeClass

    static name: string
}

export interface ExpressionOperatorIlikePrivate {
}

export class ExpressionOperatorIlikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlikePrivate

    static name: string
}

export interface ExpressionOperatorNotIlikeClass {
}

export abstract class ExpressionOperatorNotIlikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlikeClass

    static name: string
}

export interface ExpressionOperatorNotIlikePrivate {
}

export class ExpressionOperatorNotIlikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlikePrivate

    static name: string
}

export interface ExpressionOperatorBinaryUnarytermClass {
}

export abstract class ExpressionOperatorBinaryUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnarytermClass

    static name: string
}

export interface ExpressionOperatorBinaryUnarytermPrivate {
}

export class ExpressionOperatorBinaryUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnarytermPrivate

    static name: string
}

export interface ExpressionOperatorMinusClass {
}

export abstract class ExpressionOperatorMinusClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinusClass

    static name: string
}

export interface ExpressionOperatorMinusPrivate {
}

export class ExpressionOperatorMinusPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinusPrivate

    static name: string
}

export interface ExpressionOperatorPlusClass {
}

export abstract class ExpressionOperatorPlusClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlusClass

    static name: string
}

export interface ExpressionOperatorPlusPrivate {
}

export class ExpressionOperatorPlusPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlusPrivate

    static name: string
}

export interface ExpressionOperatorInitialUnarytermClass {
}

export abstract class ExpressionOperatorInitialUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnarytermClass

    static name: string
}

export interface ExpressionOperatorInitialUnarytermPrivate {
}

export class ExpressionOperatorInitialUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnarytermPrivate

    static name: string
}

export interface ExpressionOperatorNotClass {
}

export abstract class ExpressionOperatorNotClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotClass

    static name: string
}

export interface ExpressionOperatorNotPrivate {
}

export class ExpressionOperatorNotPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotPrivate

    static name: string
}

export interface ExpressionOperatorFinalUnarytermClass {
}

export abstract class ExpressionOperatorFinalUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnarytermClass

    static name: string
}

export interface ExpressionOperatorFinalUnarytermPrivate {
}

export class ExpressionOperatorFinalUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnarytermPrivate

    static name: string
}

export interface ExpressionOperatorIsClass {
}

export abstract class ExpressionOperatorIsClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsClass

    static name: string
}

export interface ExpressionOperatorIsPrivate {
}

export class ExpressionOperatorIsPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsPrivate

    static name: string
}

export interface ExpressionOperatorIsNotClass {
}

export abstract class ExpressionOperatorIsNotClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotClass

    static name: string
}

export interface ExpressionOperatorIsNotPrivate {
}

export class ExpressionOperatorIsNotPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotPrivate

    static name: string
}

export interface ExpressionOperatorIsNullClass {
}

export abstract class ExpressionOperatorIsNullClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNullClass

    static name: string
}

export interface ExpressionOperatorIsNullPrivate {
}

export class ExpressionOperatorIsNullPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNullPrivate

    static name: string
}

export interface ExpressionOperatorIsNotNullClass {
}

export abstract class ExpressionOperatorIsNotNullClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNullClass

    static name: string
}

export interface ExpressionOperatorIsNotNullPrivate {
}

export class ExpressionOperatorIsNotNullPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNullPrivate

    static name: string
}

export interface ExpressionOperatorIsTrueClass {
}

export abstract class ExpressionOperatorIsTrueClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTrueClass

    static name: string
}

export interface ExpressionOperatorIsTruePrivate {
}

export class ExpressionOperatorIsTruePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTruePrivate

    static name: string
}

export interface ExpressionOperatorIsNotTrueClass {
}

export abstract class ExpressionOperatorIsNotTrueClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTrueClass

    static name: string
}

export interface ExpressionOperatorIsNotTruePrivate {
}

export class ExpressionOperatorIsNotTruePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTruePrivate

    static name: string
}

export interface ExpressionOperatorIsFalseClass {
}

export abstract class ExpressionOperatorIsFalseClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalseClass

    static name: string
}

export interface ExpressionOperatorIsFalsePrivate {
}

export class ExpressionOperatorIsFalsePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalsePrivate

    static name: string
}

export interface ExpressionOperatorIsNotFalseClass {
}

export abstract class ExpressionOperatorIsNotFalseClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalseClass

    static name: string
}

export interface ExpressionOperatorIsNotFalsePrivate {
}

export class ExpressionOperatorIsNotFalsePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalsePrivate

    static name: string
}

export interface ExpressionOperatorIsNotUnknownClass {
}

export abstract class ExpressionOperatorIsNotUnknownClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknownClass

    static name: string
}

export interface ExpressionOperatorIsNotUnknownPrivate {
}

export class ExpressionOperatorIsNotUnknownPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknownPrivate

    static name: string
}

export interface ExpressionOperatorIsUnknownClass {
}

export abstract class ExpressionOperatorIsUnknownClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknownClass

    static name: string
}

export interface ExpressionOperatorIsUnknownPrivate {
}

export class ExpressionOperatorIsUnknownPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknownPrivate

    static name: string
}

export interface ExpressionOperatorIsDistinctClass {
}

export abstract class ExpressionOperatorIsDistinctClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctClass

    static name: string
}

export interface ExpressionOperatorIsDistinctPrivate {
}

export class ExpressionOperatorIsDistinctPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctPrivate

    static name: string
}

export interface ExpressionOperatorIsNotDistinctClass {
}

export abstract class ExpressionOperatorIsNotDistinctClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctClass

    static name: string
}

export interface ExpressionOperatorIsNotDistinctPrivate {
}

export class ExpressionOperatorIsNotDistinctPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctPrivate

    static name: string
}

export interface ExpressionOperatorIsDistinctFromClass {
}

export abstract class ExpressionOperatorIsDistinctFromClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFromClass

    static name: string
}

export interface ExpressionOperatorIsDistinctFromPrivate {
}

export class ExpressionOperatorIsDistinctFromPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFromPrivate

    static name: string
}

export interface ExpressionOperatorIsNotDistinctFromClass {
}

export abstract class ExpressionOperatorIsNotDistinctFromClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFromClass

    static name: string
}

export interface ExpressionOperatorIsNotDistinctFromPrivate {
}

export class ExpressionOperatorIsNotDistinctFromPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFromPrivate

    static name: string
}

export interface ExpressionOperatorThreetermClass {
}

export abstract class ExpressionOperatorThreetermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreetermClass

    static name: string
}

export interface ExpressionOperatorThreetermPrivate {
}

export class ExpressionOperatorThreetermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreetermPrivate

    static name: string
}

export interface ExpressionOperatorBetweenClass {
}

export abstract class ExpressionOperatorBetweenClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenClass

    static name: string
}

export interface ExpressionOperatorBetweenPrivate {
}

export class ExpressionOperatorBetweenPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenPrivate

    static name: string
}

export interface ExpressionOperatorBetweenAndClass {
}

export abstract class ExpressionOperatorBetweenAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAndClass

    static name: string
}

export interface ExpressionOperatorBetweenAndPrivate {
}

export class ExpressionOperatorBetweenAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAndPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenClass {
}

export abstract class ExpressionOperatorNotBetweenClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenClass

    static name: string
}

export interface ExpressionOperatorNotBetweenPrivate {
}

export class ExpressionOperatorNotBetweenPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenAndClass {
}

export abstract class ExpressionOperatorNotBetweenAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAndClass

    static name: string
}

export interface ExpressionOperatorNotBetweenAndPrivate {
}

export class ExpressionOperatorNotBetweenAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAndPrivate

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricClass {
}

export abstract class ExpressionOperatorBetweenSymmetricClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricClass

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricPrivate {
}

export class ExpressionOperatorBetweenSymmetricPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricPrivate

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricAndClass {
}

export abstract class ExpressionOperatorBetweenSymmetricAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAndClass

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricAndPrivate {
}

export class ExpressionOperatorBetweenSymmetricAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAndPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricClass {
}

export abstract class ExpressionOperatorNotBetweenSymmetricClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricClass

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricPrivate {
}

export class ExpressionOperatorNotBetweenSymmetricPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricAndClass {
}

export abstract class ExpressionOperatorNotBetweenSymmetricAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAndClass

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricAndPrivate {
}

export class ExpressionOperatorNotBetweenSymmetricAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAndPrivate

    static name: string
}

export interface ExpressionValueClass {
}

export abstract class ExpressionValueClass {

    // Own properties of Vda-1.Vda.ExpressionValueClass

    static name: string
}

export interface ExpressionValuePrivate {
}

export class ExpressionValuePrivate {

    // Own properties of Vda-1.Vda.ExpressionValuePrivate

    static name: string
}

export interface ExpressionValueParameterClass {
}

export abstract class ExpressionValueParameterClass {

    // Own properties of Vda-1.Vda.ExpressionValueParameterClass

    static name: string
}

export interface ExpressionValueParameterPrivate {
}

export class ExpressionValueParameterPrivate {

    // Own properties of Vda-1.Vda.ExpressionValueParameterPrivate

    static name: string
}

export interface HashListClass {
}

export abstract class HashListClass {

    // Own properties of Vda-1.Vda.HashListClass

    static name: string
}

export interface HashListPrivate {
}

export class HashListPrivate {

    // Own properties of Vda-1.Vda.HashListPrivate

    static name: string
}

export interface InvalidQueryClass {
}

export abstract class InvalidQueryClass {

    // Own properties of Vda-1.Vda.InvalidQueryClass

    static name: string
}

export interface InvalidQueryPrivate {
}

export class InvalidQueryPrivate {

    // Own properties of Vda-1.Vda.InvalidQueryPrivate

    static name: string
}

export interface InvalidPreparedQueryClass {
}

export abstract class InvalidPreparedQueryClass {

    // Own properties of Vda-1.Vda.InvalidPreparedQueryClass

    static name: string
}

export interface InvalidPreparedQueryPrivate {
}

export class InvalidPreparedQueryPrivate {

    // Own properties of Vda-1.Vda.InvalidPreparedQueryPrivate

    static name: string
}

export interface InvalidResultClass {
}

export abstract class InvalidResultClass {

    // Own properties of Vda-1.Vda.InvalidResultClass

    static name: string
}

export interface InvalidResultPrivate {
}

export class InvalidResultPrivate {

    // Own properties of Vda-1.Vda.InvalidResultPrivate

    static name: string
}

export interface ParametersClass {
}

export abstract class ParametersClass {

    // Own properties of Vda-1.Vda.ParametersClass

    static name: string
}

export interface ParametersPrivate {
}

export class ParametersPrivate {

    // Own properties of Vda-1.Vda.ParametersPrivate

    static name: string
}

export interface ParserClass {
}

export abstract class ParserClass {

    // Own properties of Vda-1.Vda.ParserClass

    static name: string
}

export interface ParserPrivate {
}

export class ParserPrivate {

    // Own properties of Vda-1.Vda.ParserPrivate

    static name: string
}

export interface TableReferenceClass {
}

export abstract class TableReferenceClass {

    // Own properties of Vda-1.Vda.TableReferenceClass

    static name: string
}

export interface TableReferencePrivate {
}

export class TableReferencePrivate {

    // Own properties of Vda-1.Vda.TableReferencePrivate

    static name: string
}

export interface ValueClass {

    // Own fields of Vda-1.Vda.ValueClass

    force_value: (val: any) => boolean
    from_value: (val: any) => boolean
    cast: (type: GObject.GType) => SqlValue | null
    is_compatible: (type: GObject.GType) => boolean
    parse: (str: string | null) => boolean
    to_gvalue: () => /* result */ any
    to_string: () => string | null
    to_string_quoted: () => string | null
    to_sql_expression: () => string | null
}

export abstract class ValueClass {

    // Own properties of Vda-1.Vda.ValueClass

    static name: string
}

export interface ValuePrivate {
}

export class ValuePrivate {

    // Own properties of Vda-1.Vda.ValuePrivate

    static name: string
}

export interface ValueNullClass {
}

export abstract class ValueNullClass {

    // Own properties of Vda-1.Vda.ValueNullClass

    static name: string
}

export interface ValueNullPrivate {
}

export class ValueNullPrivate {

    // Own properties of Vda-1.Vda.ValueNullPrivate

    static name: string
}

export interface ValueStringClass {
}

export abstract class ValueStringClass {

    // Own properties of Vda-1.Vda.ValueStringClass

    static name: string
}

export interface ValueStringPrivate {
}

export class ValueStringPrivate {

    // Own properties of Vda-1.Vda.ValueStringPrivate

    static name: string
}

export interface ValueXmlClass {
}

export abstract class ValueXmlClass {

    // Own properties of Vda-1.Vda.ValueXmlClass

    static name: string
}

export interface ValueXmlPrivate {
}

export class ValueXmlPrivate {

    // Own properties of Vda-1.Vda.ValueXmlPrivate

    static name: string
}

export interface ValueJsonClass {
}

export abstract class ValueJsonClass {

    // Own properties of Vda-1.Vda.ValueJsonClass

    static name: string
}

export interface ValueJsonPrivate {
}

export class ValueJsonPrivate {

    // Own properties of Vda-1.Vda.ValueJsonPrivate

    static name: string
}

export interface ValueTextClass {
}

export abstract class ValueTextClass {

    // Own properties of Vda-1.Vda.ValueTextClass

    static name: string
}

export interface ValueTextPrivate {
}

export class ValueTextPrivate {

    // Own properties of Vda-1.Vda.ValueTextPrivate

    static name: string
}

export interface ValueNameClass {
}

export abstract class ValueNameClass {

    // Own properties of Vda-1.Vda.ValueNameClass

    static name: string
}

export interface ValueNamePrivate {
}

export class ValueNamePrivate {

    // Own properties of Vda-1.Vda.ValueNamePrivate

    static name: string
}

export interface ValueBoolClass {
}

export abstract class ValueBoolClass {

    // Own properties of Vda-1.Vda.ValueBoolClass

    static name: string
}

export interface ValueBoolPrivate {
}

export class ValueBoolPrivate {

    // Own properties of Vda-1.Vda.ValueBoolPrivate

    static name: string
}

export interface ValueBitClass {
}

export abstract class ValueBitClass {

    // Own properties of Vda-1.Vda.ValueBitClass

    static name: string
}

export interface ValueBitPrivate {
}

export class ValueBitPrivate {

    // Own properties of Vda-1.Vda.ValueBitPrivate

    static name: string
}

export interface ValueIntegerClass {
}

export abstract class ValueIntegerClass {

    // Own properties of Vda-1.Vda.ValueIntegerClass

    static name: string
}

export interface ValueIntegerPrivate {
}

export class ValueIntegerPrivate {

    // Own properties of Vda-1.Vda.ValueIntegerPrivate

    static name: string
}

export interface ValueByteClass {
}

export abstract class ValueByteClass {

    // Own properties of Vda-1.Vda.ValueByteClass

    static name: string
}

export interface ValueBytePrivate {
}

export class ValueBytePrivate {

    // Own properties of Vda-1.Vda.ValueBytePrivate

    static name: string
}

export interface ValueInt2Class {
}

export abstract class ValueInt2Class {

    // Own properties of Vda-1.Vda.ValueInt2Class

    static name: string
}

export interface ValueInt2Private {
}

export class ValueInt2Private {

    // Own properties of Vda-1.Vda.ValueInt2Private

    static name: string
}

export interface ValueInt4Class {
}

export abstract class ValueInt4Class {

    // Own properties of Vda-1.Vda.ValueInt4Class

    static name: string
}

export interface ValueInt4Private {
}

export class ValueInt4Private {

    // Own properties of Vda-1.Vda.ValueInt4Private

    static name: string
}

export interface ValueInt8Class {
}

export abstract class ValueInt8Class {

    // Own properties of Vda-1.Vda.ValueInt8Class

    static name: string
}

export interface ValueInt8Private {
}

export class ValueInt8Private {

    // Own properties of Vda-1.Vda.ValueInt8Private

    static name: string
}

export interface ValueUnsignedIntegerClass {
}

export abstract class ValueUnsignedIntegerClass {

    // Own properties of Vda-1.Vda.ValueUnsignedIntegerClass

    static name: string
}

export interface ValueUnsignedIntegerPrivate {
}

export class ValueUnsignedIntegerPrivate {

    // Own properties of Vda-1.Vda.ValueUnsignedIntegerPrivate

    static name: string
}

export interface ValueUnsignedByteClass {
}

export abstract class ValueUnsignedByteClass {

    // Own properties of Vda-1.Vda.ValueUnsignedByteClass

    static name: string
}

export interface ValueUnsignedBytePrivate {
}

export class ValueUnsignedBytePrivate {

    // Own properties of Vda-1.Vda.ValueUnsignedBytePrivate

    static name: string
}

export interface ValueUnsignedInt2Class {
}

export abstract class ValueUnsignedInt2Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2Class

    static name: string
}

export interface ValueUnsignedInt2Private {
}

export class ValueUnsignedInt2Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2Private

    static name: string
}

export interface ValueUnsignedInt4Class {
}

export abstract class ValueUnsignedInt4Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4Class

    static name: string
}

export interface ValueUnsignedInt4Private {
}

export class ValueUnsignedInt4Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4Private

    static name: string
}

export interface ValueUnsignedInt8Class {
}

export abstract class ValueUnsignedInt8Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8Class

    static name: string
}

export interface ValueUnsignedInt8Private {
}

export class ValueUnsignedInt8Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8Private

    static name: string
}

export interface ValueOidClass {
}

export abstract class ValueOidClass {

    // Own properties of Vda-1.Vda.ValueOidClass

    static name: string
}

export interface ValueOidPrivate {
}

export class ValueOidPrivate {

    // Own properties of Vda-1.Vda.ValueOidPrivate

    static name: string
}

export interface ValueNumericClass {

    // Own fields of Vda-1.Vda.ValueNumericClass

    format: (str: string | null) => string | null
}

export abstract class ValueNumericClass {

    // Own properties of Vda-1.Vda.ValueNumericClass

    static name: string
}

export interface ValueNumericPrivate {
}

export class ValueNumericPrivate {

    // Own properties of Vda-1.Vda.ValueNumericPrivate

    static name: string
}

export interface ValueFloatClass {
}

export abstract class ValueFloatClass {

    // Own properties of Vda-1.Vda.ValueFloatClass

    static name: string
}

export interface ValueFloatPrivate {
}

export class ValueFloatPrivate {

    // Own properties of Vda-1.Vda.ValueFloatPrivate

    static name: string
}

export interface ValueDoubleClass {
}

export abstract class ValueDoubleClass {

    // Own properties of Vda-1.Vda.ValueDoubleClass

    static name: string
}

export interface ValueDoublePrivate {
}

export class ValueDoublePrivate {

    // Own properties of Vda-1.Vda.ValueDoublePrivate

    static name: string
}

export interface ValueMoneyClass {
}

export abstract class ValueMoneyClass {

    // Own properties of Vda-1.Vda.ValueMoneyClass

    static name: string
}

export interface ValueMoneyPrivate {
}

export class ValueMoneyPrivate {

    // Own properties of Vda-1.Vda.ValueMoneyPrivate

    static name: string
}

export interface ValueTimestampClass {

    // Own fields of Vda-1.Vda.ValueTimestampClass

    format_local: () => string | null
    format_utc: () => string | null
    format_locale: () => string | null
}

export abstract class ValueTimestampClass {

    // Own properties of Vda-1.Vda.ValueTimestampClass

    static name: string
}

export interface ValueTimestampPrivate {
}

export class ValueTimestampPrivate {

    // Own properties of Vda-1.Vda.ValueTimestampPrivate

    static name: string
}

export interface ValueTimestampNtzClass {
}

export abstract class ValueTimestampNtzClass {

    // Own properties of Vda-1.Vda.ValueTimestampNtzClass

    static name: string
}

export interface ValueTimestampNtzPrivate {
}

export class ValueTimestampNtzPrivate {

    // Own properties of Vda-1.Vda.ValueTimestampNtzPrivate

    static name: string
}

export interface ValueTimeClass {
}

export abstract class ValueTimeClass {

    // Own properties of Vda-1.Vda.ValueTimeClass

    static name: string
}

export interface ValueTimePrivate {
}

export class ValueTimePrivate {

    // Own properties of Vda-1.Vda.ValueTimePrivate

    static name: string
}

export interface ValueTimeNtzClass {
}

export abstract class ValueTimeNtzClass {

    // Own properties of Vda-1.Vda.ValueTimeNtzClass

    static name: string
}

export interface ValueTimeNtzPrivate {
}

export class ValueTimeNtzPrivate {

    // Own properties of Vda-1.Vda.ValueTimeNtzPrivate

    static name: string
}

export interface ValueDateClass {
}

export abstract class ValueDateClass {

    // Own properties of Vda-1.Vda.ValueDateClass

    static name: string
}

export interface ValueDatePrivate {
}

export class ValueDatePrivate {

    // Own properties of Vda-1.Vda.ValueDatePrivate

    static name: string
}

export interface ValueBinaryClass {
}

export abstract class ValueBinaryClass {

    // Own properties of Vda-1.Vda.ValueBinaryClass

    static name: string
}

export interface ValueBinaryPrivate {
}

export class ValueBinaryPrivate {

    // Own properties of Vda-1.Vda.ValueBinaryPrivate

    static name: string
}

export interface ValueMathExpClass {
}

export abstract class ValueMathExpClass {

    // Own properties of Vda-1.Vda.ValueMathExpClass

    static name: string
}

export interface ValueMathExpPrivate {
}

export class ValueMathExpPrivate {

    // Own properties of Vda-1.Vda.ValueMathExpPrivate

    static name: string
}

export interface MetaObjectIface {

    // Own fields of Vda-1.Vda.MetaObjectIface

    get_connection: () => Connection
    set_connection: (value: Connection) => void
}

export abstract class MetaObjectIface {

    // Own properties of Vda-1.Vda.MetaObjectIface

    static name: string
}

export interface MetaNamedObjectIface {

    // Own fields of Vda-1.Vda.MetaNamedObjectIface

    get_name: () => string | null
    set_name: (value: string | null) => void
}

export abstract class MetaNamedObjectIface {

    // Own properties of Vda-1.Vda.MetaNamedObjectIface

    static name: string
}

export interface ColumnModelIface {

    // Own fields of Vda-1.Vda.ColumnModelIface

    get_name: () => string | null
    get_data_type: () => GObject.GType
}

export abstract class ColumnModelIface {

    // Own properties of Vda-1.Vda.ColumnModelIface

    static name: string
}

export interface ConnectionIface {

    // Own fields of Vda-1.Vda.ConnectionIface

    close: (_callback_?: Gio.AsyncReadyCallback | null) => void
    close_finish: (_res_: Gio.AsyncResult) => void
    open: (_callback_?: Gio.AsyncReadyCallback | null) => void
    open_finish: (_res_: Gio.AsyncResult) => ConnectionStatus
    open_from_string: (cnc_string: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    open_from_string_finish: (_res_: Gio.AsyncResult) => ConnectionStatus
    parse_string: (sql: string | null) => Query
    parse_string_prepared: (name: string | null, sql: string | null) => PreparedQuery | null
    get_prepared_query: (name: string | null) => PreparedQuery | null
    query_from_command: (cmd: SqlCommand, name?: string | null) => PreparedQuery | null
    value_to_quoted_string: (v: SqlValue) => string | null
    locale: (category: string | null) => string | null
    get_status: () => ConnectionStatus
    get_parameters: () => ConnectionParameters
    set_parameters: (value: ConnectionParameters) => void
    get_is_opened: () => boolean
    get_connection_string: () => string | null
}

export abstract class ConnectionIface {

    // Own properties of Vda-1.Vda.ConnectionIface

    static name: string
}

export interface ConnectionBlobIface {

    // Own fields of Vda-1.Vda.ConnectionBlobIface

    create: (stream: Gio.InputStream) => SqlValueBlob
    delete_: (val: SqlValueBlob) => void
}

export abstract class ConnectionBlobIface {

    // Own properties of Vda-1.Vda.ConnectionBlobIface

    static name: string
}

export interface ConnectionRolebasedIface {

    // Own fields of Vda-1.Vda.ConnectionRolebasedIface

    current_role: () => Role | null
    create_role: (name: string | null, params: Parameters) => Role | null
}

export abstract class ConnectionRolebasedIface {

    // Own properties of Vda-1.Vda.ConnectionRolebasedIface

    static name: string
}

export interface ConnectionTransactionalIface {

    // Own fields of Vda-1.Vda.ConnectionTransactionalIface

    add_savepoint: (name?: string | null) => boolean
    delete_savepoint: (name?: string | null) => boolean
    rollback_savepoint: (name?: string | null) => boolean
    begin_transaction: (name?: string | null) => boolean
    commit_transaction: (name?: string | null) => boolean
    rollback_transaction: (name?: string | null) => boolean
}

export abstract class ConnectionTransactionalIface {

    // Own properties of Vda-1.Vda.ConnectionTransactionalIface

    static name: string
}

export interface DataObjectIface {

    // Own fields of Vda-1.Vda.DataObjectIface

    update_data_from_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_from_db_finish: (_res_: Gio.AsyncResult) => void
    update_data_from_db_pkey: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_from_db_pkey_finish: (_res_: Gio.AsyncResult) => void
    update_data_from_db_full: (use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_from_db_full_finish: (_res_: Gio.AsyncResult) => void
    insert_data_into_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    insert_data_into_db_finish: (_res_: Gio.AsyncResult) => void
    delete_data_from_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    delete_data_from_db_finish: (_res_: Gio.AsyncResult) => void
    delete_data_from_db_pkey: (_callback_?: Gio.AsyncReadyCallback | null) => void
    delete_data_from_db_pkey_finish: (_res_: Gio.AsyncResult) => void
    delete_data_from_db_full: (use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    delete_data_from_db_full_finish: (_res_: Gio.AsyncResult) => void
    update_data_into_db: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_into_db_finish: (_res_: Gio.AsyncResult) => void
    update_data_into_db_pkey: (_callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_into_db_pkey_finish: (_res_: Gio.AsyncResult) => void
    update_data_into_db_full: (use_pkey: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_data_into_db_full_finish: (_res_: Gio.AsyncResult) => void
    update_from_row: (table: TableModel, nrow: number) => void
    get_database_connection: () => Connection
    set_database_connection: (value: Connection) => void
    get_database_table_name: () => string | null
    set_database_table_name: (value: string | null) => void
    get_cancellable: () => Gio.Cancellable
    set_cancellable: (value: Gio.Cancellable) => void
}

export abstract class DataObjectIface {

    // Own properties of Vda-1.Vda.DataObjectIface

    static name: string
}

export interface DataCollectionIface {

    // Own fields of Vda-1.Vda.DataCollectionIface

    get_objects: (_callback_?: Gio.AsyncReadyCallback | null) => void
    get_objects_finish: (_res_: Gio.AsyncResult) => TableModel
    get_database_connection: () => Connection
    set_database_connection: (value: Connection) => void
    get_parent_property: () => string | null
    get_parent: () => DataObject
    get_object_type: () => GObject.GType
    get_ref_field: () => string | null
    get_cancellable: () => Gio.Cancellable
    set_cancellable: (value: Gio.Cancellable) => void
}

export abstract class DataCollectionIface {

    // Own properties of Vda-1.Vda.DataCollectionIface

    static name: string
}

export interface HashModelIface {

    // Own fields of Vda-1.Vda.HashModelIface

    add: (object: GObject.Object) => void
    find: (key: GObject.Object) => GObject.Object | null
    remove: (object: GObject.Object) => void
}

export abstract class HashModelIface {

    // Own properties of Vda-1.Vda.HashModelIface

    static name: string
}

export interface InsertedIface {

    // Own fields of Vda-1.Vda.InsertedIface

    get_number: () => number
    get_last_inserted: () => RowModel
}

export abstract class InsertedIface {

    // Own properties of Vda-1.Vda.InsertedIface

    static name: string
}

export interface ParsedQueryIface {

    // Own fields of Vda-1.Vda.ParsedQueryIface

    get_command: () => SqlCommand
}

export abstract class ParsedQueryIface {

    // Own properties of Vda-1.Vda.ParsedQueryIface

    static name: string
}

export interface PreparedQueryIface {

    // Own fields of Vda-1.Vda.PreparedQueryIface

    get_name: () => string | null
    get_parameters: () => SqlParameters
}

export abstract class PreparedQueryIface {

    // Own properties of Vda-1.Vda.PreparedQueryIface

    static name: string
}

export interface QueryIface {

    // Own fields of Vda-1.Vda.QueryIface

    execute: (cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    execute_finish: (_res_: Gio.AsyncResult) => Result | null
    cancel: (_callback_?: Gio.AsyncReadyCallback | null) => void
    cancel_finish: (_res_: Gio.AsyncResult) => void
    render_sql: () => string | null
    get_sql: () => string | null
    get_connection: () => Connection
}

export abstract class QueryIface {

    // Own properties of Vda-1.Vda.QueryIface

    static name: string
}

export interface ResultIface {
}

export abstract class ResultIface {

    // Own properties of Vda-1.Vda.ResultIface

    static name: string
}

export interface RoleIface {

    // Own fields of Vda-1.Vda.RoleIface

    name: (_callback_?: Gio.AsyncReadyCallback | null) => void
    name_finish: (_res_: Gio.AsyncResult) => string | null
    membership: (_callback_?: Gio.AsyncReadyCallback | null) => void
    membership_finish: (_res_: Gio.AsyncResult) => HashModel
    privilages: (object: MetaObject, _callback_?: Gio.AsyncReadyCallback | null) => void
    privilages_finish: (_res_: Gio.AsyncResult) => RoleGrant
    change_privilages: (object: MetaObject, grant: RoleGrant, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_privilages_finish: (_res_: Gio.AsyncResult) => void
    get_connection: () => Connection
}

export abstract class RoleIface {

    // Own properties of Vda-1.Vda.RoleIface

    static name: string
}

export interface RowModelIface {

    // Own fields of Vda-1.Vda.RowModelIface

    get_column: (name: string | null) => ColumnModel | null
    get_column_at: (col: number) => ColumnModel | null
    get_value: (name: string | null) => SqlValue | null
    get_value_at: (col: number) => SqlValue | null
    get_string: (name: string | null) => string | null
    get_string_at: (col: number) => string | null
    get_n_columns: () => number
}

export abstract class RowModelIface {

    // Own properties of Vda-1.Vda.RowModelIface

    static name: string
}

export interface SqlAffectedRowsIface {

    // Own fields of Vda-1.Vda.SqlAffectedRowsIface

    get_number: () => number
}

export abstract class SqlAffectedRowsIface {

    // Own properties of Vda-1.Vda.SqlAffectedRowsIface

    static name: string
}

export interface SqlCommandIface {

    // Own fields of Vda-1.Vda.SqlCommandIface

    get_connection: () => Connection
}

export abstract class SqlCommandIface {

    // Own properties of Vda-1.Vda.SqlCommandIface

    static name: string
}

export interface SqlCommandConditionalIface {

    // Own fields of Vda-1.Vda.SqlCommandConditionalIface

    get_condition: () => SqlExpression
}

export abstract class SqlCommandConditionalIface {

    // Own properties of Vda-1.Vda.SqlCommandConditionalIface

    static name: string
}

export interface SqlCommandDeleteIface {

    // Own fields of Vda-1.Vda.SqlCommandDeleteIface

    stringify: () => string | null
    to_query: (name?: string | null) => Query
    parse: (sql: string | null) => void
}

export abstract class SqlCommandDeleteIface {

    // Own properties of Vda-1.Vda.SqlCommandDeleteIface

    static name: string
}

export interface SqlCommandInsertIface {

    // Own fields of Vda-1.Vda.SqlCommandInsertIface

    stringify: () => string | null
    to_query: (name?: string | null) => Query
    parse: (sql: string | null) => void
}

export abstract class SqlCommandInsertIface {

    // Own properties of Vda-1.Vda.SqlCommandInsertIface

    static name: string
}

export interface SqlCommandModificationIface {

    // Own fields of Vda-1.Vda.SqlCommandModificationIface

    add_field_value: (name: string | null, val?: any | null) => void
    add_field: (name: string | null) => void
    add_value: (val?: any | null) => void
    add_field_parameter_value: (field: string | null, par: string | null, gtype: GObject.GType) => void
    add_parameter: (par: string | null, gtype: GObject.GType) => void
    get_fields: () => HashModel
    get_values: () => HashModel
}

export abstract class SqlCommandModificationIface {

    // Own properties of Vda-1.Vda.SqlCommandModificationIface

    static name: string
}

export interface SqlCommandParametrizedIface {

    // Own fields of Vda-1.Vda.SqlCommandParametrizedIface

    get_parameters: () => SqlParameters
}

export abstract class SqlCommandParametrizedIface {

    // Own properties of Vda-1.Vda.SqlCommandParametrizedIface

    static name: string
}

export interface SqlCommandSelectIface {

    // Own fields of Vda-1.Vda.SqlCommandSelectIface

    add_field: (field: string | null, table_ref?: string | null, alias?: string | null) => void
    add_table: (name: string | null, allias?: string | null) => void
    add_value_field: (val: any, allias?: string | null) => void
    add_math_exp_field: (exp: string | null, allias?: string | null) => void
    stringify: () => string | null
    to_query: (name?: string | null) => PreparedQuery
    parse: (sql: string | null) => void
    get_fields: () => HashModel
    get_tables: () => HashModel
}

export abstract class SqlCommandSelectIface {

    // Own properties of Vda-1.Vda.SqlCommandSelectIface

    static name: string
}

export interface SqlCommandTableRelatedIface {

    // Own fields of Vda-1.Vda.SqlCommandTableRelatedIface

    get_table: () => string | null
    set_table: (value: string | null) => void
    get_allias: () => string | null
    set_allias: (value: string | null) => void
}

export abstract class SqlCommandTableRelatedIface {

    // Own properties of Vda-1.Vda.SqlCommandTableRelatedIface

    static name: string
}

export interface SqlCommandUpdateIface {

    // Own fields of Vda-1.Vda.SqlCommandUpdateIface

    stringify: () => string | null
    to_query: (name?: string | null) => Query
    parse: (sql: string | null) => void
}

export abstract class SqlCommandUpdateIface {

    // Own properties of Vda-1.Vda.SqlCommandUpdateIface

    static name: string
}

export interface SqlExpressionIface {

    // Own fields of Vda-1.Vda.SqlExpressionIface

    add_expression: (exp: SqlExpression) => void
    remove_expression: (exp: SqlExpression) => void
    to_string: () => string | null
    add_math_expression: (str: string | null, cnc: Connection, params?: SqlParameters | null) => void
}

export abstract class SqlExpressionIface {

    // Own properties of Vda-1.Vda.SqlExpressionIface

    static name: string
}

export interface SqlExpressionFieldIface {

    // Own fields of Vda-1.Vda.SqlExpressionFieldIface

    get_table_ref: () => string | null
    set_table_ref: (value: string | null) => void
    get_name: () => string | null
    set_name: (value: string | null) => void
    get_allias: () => string | null
    set_allias: (value?: string | null) => void
}

export abstract class SqlExpressionFieldIface {

    // Own properties of Vda-1.Vda.SqlExpressionFieldIface

    static name: string
}

export interface SqlExpressionOperatorIface {

    // Own fields of Vda-1.Vda.SqlExpressionOperatorIface

    create_field_expression: (name: string | null) => SqlExpressionField
    create_value_expression: (val: any | null, cnc: Connection) => SqlExpressionValue
    create_parameter_expression: (name: string | null, gtype: GObject.GType) => SqlExpressionValueParameter
    add_and_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_or_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_eq_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_diff_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_like_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_gt_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_geq_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_leq_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_similar_to_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_is_null_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_null_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_not_operator: (exp: SqlExpression) => SqlExpressionOperator
    add_is_true_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_true_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_false_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_false_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_unknown_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_is_not_unknown_operator: (exp1: SqlExpression) => SqlExpressionOperator
    add_in_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_not_in_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_concatenate_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_plus_operator: (exp1: SqlExpression, exp2?: SqlExpression | null) => SqlExpressionOperator
    add_minus_operator: (exp1: SqlExpression, exp2?: SqlExpression | null) => SqlExpressionOperator
    add_star_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_div_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_regexp_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_between_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_not_between_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_between_symmetric_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_not_between_symmetric_operator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    add_is_distinct_from_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    add_is_not_distinct_from_operator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    get_operator_type: () => SqlExpressionOperatorType
}

export abstract class SqlExpressionOperatorIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIface

    static name: string
}

export interface SqlExpressionOperatorGroupIface {
}

export abstract class SqlExpressionOperatorGroupIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGroupIface

    static name: string
}

export interface SqlExpressionOperatorMultitermIface {
}

export abstract class SqlExpressionOperatorMultitermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMultitermIface

    static name: string
}

export interface SqlExpressionOperatorAndIface {
}

export abstract class SqlExpressionOperatorAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorAndIface

    static name: string
}

export interface SqlExpressionOperatorOrIface {
}

export abstract class SqlExpressionOperatorOrIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorOrIface

    static name: string
}

export interface SqlExpressionOperatorBinarytermIface {
}

export abstract class SqlExpressionOperatorBinarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinarytermIface

    static name: string
}

export interface SqlExpressionOperatorEqIface {
}

export abstract class SqlExpressionOperatorEqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorEqIface

    static name: string
}

export interface SqlExpressionOperatorNotEqIface {
}

export abstract class SqlExpressionOperatorNotEqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotEqIface

    static name: string
}

export interface SqlExpressionOperatorDiffIface {
}

export abstract class SqlExpressionOperatorDiffIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiffIface

    static name: string
}

export interface SqlExpressionOperatorGtIface {
}

export abstract class SqlExpressionOperatorGtIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGtIface

    static name: string
}

export interface SqlExpressionOperatorLtIface {
}

export abstract class SqlExpressionOperatorLtIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLtIface

    static name: string
}

export interface SqlExpressionOperatorGeqIface {
}

export abstract class SqlExpressionOperatorGeqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGeqIface

    static name: string
}

export interface SqlExpressionOperatorLeqIface {
}

export abstract class SqlExpressionOperatorLeqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLeqIface

    static name: string
}

export interface SqlExpressionOperatorRegexpIface {
}

export abstract class SqlExpressionOperatorRegexpIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorRegexpIface

    static name: string
}

export interface SqlExpressionOperatorStarIface {
}

export abstract class SqlExpressionOperatorStarIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorStarIface

    static name: string
}

export interface SqlExpressionOperatorDivIface {
}

export abstract class SqlExpressionOperatorDivIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDivIface

    static name: string
}

export interface SqlExpressionOperatorInIface {
}

export abstract class SqlExpressionOperatorInIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInIface

    static name: string
}

export interface SqlExpressionOperatorNotInIface {
}

export abstract class SqlExpressionOperatorNotInIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotInIface

    static name: string
}

export interface SqlExpressionOperatorConcatenateIface {
}

export abstract class SqlExpressionOperatorConcatenateIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorConcatenateIface

    static name: string
}

export interface SqlExpressionOperatorSimilarToIface {
}

export abstract class SqlExpressionOperatorSimilarToIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorSimilarToIface

    static name: string
}

export interface SqlExpressionOperatorLikeIface {
}

export abstract class SqlExpressionOperatorLikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLikeIface

    static name: string
}

export interface SqlExpressionOperatorNotLikeIface {
}

export abstract class SqlExpressionOperatorNotLikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotLikeIface

    static name: string
}

export interface SqlExpressionOperatorIlikeIface {
}

export abstract class SqlExpressionOperatorIlikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIlikeIface

    static name: string
}

export interface SqlExpressionOperatorNotIlikeIface {
}

export abstract class SqlExpressionOperatorNotIlikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIlikeIface

    static name: string
}

export interface SqlExpressionOperatorBinaryUnarytermIface {
}

export abstract class SqlExpressionOperatorBinaryUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryUnarytermIface

    static name: string
}

export interface SqlExpressionOperatorMinusIface {
}

export abstract class SqlExpressionOperatorMinusIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMinusIface

    static name: string
}

export interface SqlExpressionOperatorPlusIface {
}

export abstract class SqlExpressionOperatorPlusIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorPlusIface

    static name: string
}

export interface SqlExpressionOperatorInitialUnarytermIface {
}

export abstract class SqlExpressionOperatorInitialUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInitialUnarytermIface

    static name: string
}

export interface SqlExpressionOperatorNotIface {
}

export abstract class SqlExpressionOperatorNotIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIface

    static name: string
}

export interface SqlExpressionOperatorFinalUnarytermIface {
}

export abstract class SqlExpressionOperatorFinalUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorFinalUnarytermIface

    static name: string
}

export interface SqlExpressionOperatorIsIface {
}

export abstract class SqlExpressionOperatorIsIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsIface

    static name: string
}

export interface SqlExpressionOperatorIsNotIface {
}

export abstract class SqlExpressionOperatorIsNotIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotIface

    static name: string
}

export interface SqlExpressionOperatorIsNullIface {
}

export abstract class SqlExpressionOperatorIsNullIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNullIface

    static name: string
}

export interface SqlExpressionOperatorIsNotNullIface {
}

export abstract class SqlExpressionOperatorIsNotNullIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotNullIface

    static name: string
}

export interface SqlExpressionOperatorIsTrueIface {
}

export abstract class SqlExpressionOperatorIsTrueIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsTrueIface

    static name: string
}

export interface SqlExpressionOperatorIsNotTrueIface {
}

export abstract class SqlExpressionOperatorIsNotTrueIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotTrueIface

    static name: string
}

export interface SqlExpressionOperatorIsFalseIface {
}

export abstract class SqlExpressionOperatorIsFalseIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsFalseIface

    static name: string
}

export interface SqlExpressionOperatorIsNotFalseIface {
}

export abstract class SqlExpressionOperatorIsNotFalseIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotFalseIface

    static name: string
}

export interface SqlExpressionOperatorIsUnknownIface {
}

export abstract class SqlExpressionOperatorIsUnknownIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsUnknownIface

    static name: string
}

export interface SqlExpressionOperatorIsNotUnknownIface {
}

export abstract class SqlExpressionOperatorIsNotUnknownIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotUnknownIface

    static name: string
}

export interface SqlExpressionOperatorIsDistinctIface {
}

export abstract class SqlExpressionOperatorIsDistinctIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctIface

    static name: string
}

export interface SqlExpressionOperatorIsNotDistinctIface {
}

export abstract class SqlExpressionOperatorIsNotDistinctIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctIface

    static name: string
}

export interface SqlExpressionOperatorIsDistinctFromIface {
}

export abstract class SqlExpressionOperatorIsDistinctFromIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctFromIface

    static name: string
}

export interface SqlExpressionOperatorIsNotDistinctFromIface {
}

export abstract class SqlExpressionOperatorIsNotDistinctFromIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFromIface

    static name: string
}

export interface SqlExpressionOperatorThreetermIface {
}

export abstract class SqlExpressionOperatorThreetermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorThreetermIface

    static name: string
}

export interface SqlExpressionOperatorBetweenIface {
}

export abstract class SqlExpressionOperatorBetweenIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenIface

    static name: string
}

export interface SqlExpressionOperatorBetweenAndIface {
}

export abstract class SqlExpressionOperatorBetweenAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenAndIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenIface {
}

export abstract class SqlExpressionOperatorNotBetweenIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenAndIface {
}

export abstract class SqlExpressionOperatorNotBetweenAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenAndIface

    static name: string
}

export interface SqlExpressionOperatorBetweenSymmetricIface {
}

export abstract class SqlExpressionOperatorBetweenSymmetricIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricIface

    static name: string
}

export interface SqlExpressionOperatorBetweenSymmetricAndIface {
}

export abstract class SqlExpressionOperatorBetweenSymmetricAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAndIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenSymmetricIface {
}

export abstract class SqlExpressionOperatorNotBetweenSymmetricIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenSymmetricAndIface {
}

export abstract class SqlExpressionOperatorNotBetweenSymmetricAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAndIface

    static name: string
}

export interface SqlExpressionValueIface {

    // Own fields of Vda-1.Vda.SqlExpressionValueIface

    set_math_expression_value: (str: string | null, params?: SqlParameters | null) => void
    get_connection: () => Connection | null
    set_connection: (value?: Connection | null) => void
    get_value: () => SqlValue
    set_value: (value: SqlValue) => void
}

export abstract class SqlExpressionValueIface {

    // Own properties of Vda-1.Vda.SqlExpressionValueIface

    static name: string
}

export interface SqlExpressionValueParameterIface {

    // Own fields of Vda-1.Vda.SqlExpressionValueParameterIface

    parse: (str: string | null) => void
    get_parameters: () => SqlParameters
    set_parameters: (value: SqlParameters) => void
    get_name: () => string | null
    set_name: (value: string | null) => void
    get_gtype: () => GObject.GType
    set_gtype: (value: GObject.GType) => void
}

export abstract class SqlExpressionValueParameterIface {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameterIface

    static name: string
}

export interface SqlParametersIface {

    // Own fields of Vda-1.Vda.SqlParametersIface

    set_value: (name: string | null, val: any) => void
    get_value: (name: string | null) => any | null
    set_sql_value: (name: string | null, val: SqlValue) => void
    get_sql_value: (name: string | null) => SqlValue
    has_param: (name: string | null) => boolean
}

export abstract class SqlParametersIface {

    // Own properties of Vda-1.Vda.SqlParametersIface

    static name: string
}

export interface SqlParserIface {

    // Own fields of Vda-1.Vda.SqlParserIface

    parse: (str: string | null, cnc: Connection) => SqlCommandParametrized
}

export abstract class SqlParserIface {

    // Own properties of Vda-1.Vda.SqlParserIface

    static name: string
}

export interface SqlTableReferenceIface {

    // Own fields of Vda-1.Vda.SqlTableReferenceIface

    get_name: () => string | null
    set_name: (value: string | null) => void
    get_allias: () => string | null
    set_allias: (value?: string | null) => void
}

export abstract class SqlTableReferenceIface {

    // Own properties of Vda-1.Vda.SqlTableReferenceIface

    static name: string
}

export interface StringifiableIface {

    // Own fields of Vda-1.Vda.StringifiableIface

    to_string: () => string | null
}

export abstract class StringifiableIface {

    // Own properties of Vda-1.Vda.StringifiableIface

    static name: string
}

export interface SqlValueIface {

    // Own fields of Vda-1.Vda.SqlValueIface

    parse: (str: string | null) => boolean
    from_value: (val: any) => boolean
    cast: (type: GObject.GType) => SqlValue | null
    is_compatible: (type: GObject.GType) => boolean
    to_gvalue: () => /* result */ any
    to_string_quoted: () => string | null
    to_sql_expression: () => string | null
    get_name: () => string | null
}

export abstract class SqlValueIface {

    // Own properties of Vda-1.Vda.SqlValueIface

    static name: string
}

export interface SqlValueNullIface {
}

export abstract class SqlValueNullIface {

    // Own properties of Vda-1.Vda.SqlValueNullIface

    static name: string
}

export interface SqlValueBoolIface {
}

export abstract class SqlValueBoolIface {

    // Own properties of Vda-1.Vda.SqlValueBoolIface

    static name: string
}

export interface SqlValueBitIface {
}

export abstract class SqlValueBitIface {

    // Own properties of Vda-1.Vda.SqlValueBitIface

    static name: string
}

export interface SqlValueStringIface {
}

export abstract class SqlValueStringIface {

    // Own properties of Vda-1.Vda.SqlValueStringIface

    static name: string
}

export interface SqlValueXmlIface {

    // Own fields of Vda-1.Vda.SqlValueXmlIface

    get_document: () => GXml.DomDocument
}

export abstract class SqlValueXmlIface {

    // Own properties of Vda-1.Vda.SqlValueXmlIface

    static name: string
}

export interface SqlValueJsonIface {

    // Own fields of Vda-1.Vda.SqlValueJsonIface

    get_document: () => Json.Node
}

export abstract class SqlValueJsonIface {

    // Own properties of Vda-1.Vda.SqlValueJsonIface

    static name: string
}

export interface SqlValueTextIface {
}

export abstract class SqlValueTextIface {

    // Own properties of Vda-1.Vda.SqlValueTextIface

    static name: string
}

export interface SqlValueNameIface {
}

export abstract class SqlValueNameIface {

    // Own properties of Vda-1.Vda.SqlValueNameIface

    static name: string
}

export interface SqlValueIntegerIface {
}

export abstract class SqlValueIntegerIface {

    // Own properties of Vda-1.Vda.SqlValueIntegerIface

    static name: string
}

export interface SqlValueByteIface {
}

export abstract class SqlValueByteIface {

    // Own properties of Vda-1.Vda.SqlValueByteIface

    static name: string
}

export interface SqlValueInt2Iface {
}

export abstract class SqlValueInt2Iface {

    // Own properties of Vda-1.Vda.SqlValueInt2Iface

    static name: string
}

export interface SqlValueInt4Iface {
}

export abstract class SqlValueInt4Iface {

    // Own properties of Vda-1.Vda.SqlValueInt4Iface

    static name: string
}

export interface SqlValueInt8Iface {
}

export abstract class SqlValueInt8Iface {

    // Own properties of Vda-1.Vda.SqlValueInt8Iface

    static name: string
}

export interface SqlValueUnsignedIntegerIface {
}

export abstract class SqlValueUnsignedIntegerIface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedIntegerIface

    static name: string
}

export interface SqlValueUnsignedByteIface {
}

export abstract class SqlValueUnsignedByteIface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedByteIface

    static name: string
}

export interface SqlValueUnsignedInt2Iface {
}

export abstract class SqlValueUnsignedInt2Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt2Iface

    static name: string
}

export interface SqlValueUnsignedInt4Iface {
}

export abstract class SqlValueUnsignedInt4Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt4Iface

    static name: string
}

export interface SqlValueUnsignedInt8Iface {
}

export abstract class SqlValueUnsignedInt8Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt8Iface

    static name: string
}

export interface SqlValueOidIface {
}

export abstract class SqlValueOidIface {

    // Own properties of Vda-1.Vda.SqlValueOidIface

    static name: string
}

export interface SqlValueNumericIface {

    // Own fields of Vda-1.Vda.SqlValueNumericIface

    set_precision: (p: number) => void
    get_precision: () => number
    format: (str: string | null) => string | null
    get_double: () => number
    set_double: (v: number) => void
    get_real: () => number
    set_real: (r: number) => void
    get_imaginary: () => number
    set_imaginary: (img: number) => void
}

export abstract class SqlValueNumericIface {

    // Own properties of Vda-1.Vda.SqlValueNumericIface

    static name: string
}

export interface SqlValueFloatIface {

    // Own fields of Vda-1.Vda.SqlValueFloatIface

    get_float: () => number
}

export abstract class SqlValueFloatIface {

    // Own properties of Vda-1.Vda.SqlValueFloatIface

    static name: string
}

export interface SqlValueDoubleIface {
}

export abstract class SqlValueDoubleIface {

    // Own properties of Vda-1.Vda.SqlValueDoubleIface

    static name: string
}

export interface SqlValueMoneyIface {

    // Own fields of Vda-1.Vda.SqlValueMoneyIface

    locale: () => string | null
    int_locale: () => string | null
    get_int_precision: () => number
    set_int_precision: (p: number) => void
}

export abstract class SqlValueMoneyIface {

    // Own properties of Vda-1.Vda.SqlValueMoneyIface

    static name: string
}

export interface SqlValueDateIface {

    // Own fields of Vda-1.Vda.SqlValueDateIface

    get_date: () => /* result */ GLib.Date
    set_date: (ts: GLib.Date) => void
}

export abstract class SqlValueDateIface {

    // Own properties of Vda-1.Vda.SqlValueDateIface

    static name: string
}

export interface SqlValueTimestampIface {

    // Own fields of Vda-1.Vda.SqlValueTimestampIface

    format_local: () => string | null
    format_utc: () => string | null
    format_locale: () => string | null
    format_date: () => string | null
    format_date_locale: () => string | null
    format_time: () => string | null
    format_time_local: () => string | null
    format_time_local_ntz: () => string | null
    get_timestamp: () => GLib.DateTime
    set_timestamp: (ts: GLib.DateTime) => void
}

export abstract class SqlValueTimestampIface {

    // Own properties of Vda-1.Vda.SqlValueTimestampIface

    static name: string
}

export interface SqlValueTimestampNtzIface {
}

export abstract class SqlValueTimestampNtzIface {

    // Own properties of Vda-1.Vda.SqlValueTimestampNtzIface

    static name: string
}

export interface SqlValueTimeIface {
}

export abstract class SqlValueTimeIface {

    // Own properties of Vda-1.Vda.SqlValueTimeIface

    static name: string
}

export interface SqlValueTimeNtzIface {
}

export abstract class SqlValueTimeNtzIface {

    // Own properties of Vda-1.Vda.SqlValueTimeNtzIface

    static name: string
}

export interface SqlValueBinaryIface {

    // Own fields of Vda-1.Vda.SqlValueBinaryIface

    get_bytes: () => GLib.Bytes
    get_out_stream: () => Gio.OutputStream | null
    get_input_stream: () => Gio.InputStream | null
    get_size: () => number
}

export abstract class SqlValueBinaryIface {

    // Own properties of Vda-1.Vda.SqlValueBinaryIface

    static name: string
}

export interface SqlValueBlobIface {

    // Own fields of Vda-1.Vda.SqlValueBlobIface

    create: (stream: Gio.InputStream) => void
    delete_: () => void
    write: (file: Gio.File) => void
    read: (file: Gio.File) => void
    get_connection: () => Connection
}

export abstract class SqlValueBlobIface {

    // Own properties of Vda-1.Vda.SqlValueBlobIface

    static name: string
}

export interface SqlValueBlobOidIface {

    // Own fields of Vda-1.Vda.SqlValueBlobOidIface

    get_identification: () => number
}

export abstract class SqlValueBlobOidIface {

    // Own properties of Vda-1.Vda.SqlValueBlobOidIface

    static name: string
}

export interface SqlValueGeometricPointIface {

    // Own fields of Vda-1.Vda.SqlValueGeometricPointIface

    get_x: () => number
    set_x: (value: number) => void
    get_y: () => number
    set_y: (value: number) => void
}

export abstract class SqlValueGeometricPointIface {

    // Own properties of Vda-1.Vda.SqlValueGeometricPointIface

    static name: string
}

export interface SqlValueMathExpIface {

    // Own fields of Vda-1.Vda.SqlValueMathExpIface

    get_math: () => GCalc.MathEquationManager
    set_math: (value: GCalc.MathEquationManager) => void
}

export abstract class SqlValueMathExpIface {

    // Own properties of Vda-1.Vda.SqlValueMathExpIface

    static name: string
}

export interface TableModelIface {
}

export abstract class TableModelIface {

    // Own properties of Vda-1.Vda.TableModelIface

    static name: string
}

export interface TableModelSequentialIface {

    // Own fields of Vda-1.Vda.TableModelSequentialIface

    current: () => RowModel | null
    next: () => boolean
    back: () => boolean
    move: (direction: MoveDirection, relative: number) => boolean
    copy_current: () => RowModel | null
}

export abstract class TableModelSequentialIface {

    // Own properties of Vda-1.Vda.TableModelSequentialIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END