// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Libmsi-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Libmsi {

enum ColInfo {
    NAMES,
    TYPES,
}
enum DBError {
    SUCCESS,
    INVALIDARG,
    MOREDATA,
    FUNCTIONERROR,
    DUPLICATEKEY,
    REQUIRED,
    BADLINK,
    OVERFLOW,
    UNDERFLOW,
    NOTINSET,
    BADVERSION,
    BADCASE,
    BADGUID,
    BADWILDCARD,
    BADIDENTIFIER,
    BADLANGUAGE,
    BADFILENAME,
    BADPATH,
    BADCONDITION,
    BADFORMATTED,
    BADTEMPLATE,
    BADDEFAULTDIR,
    BADREGPATH,
    BADCUSTOMSOURCE,
    BADPROPERTY,
    MISSINGDATA,
    BADCATEGORY,
    BADKEYTABLE,
    BADMAXMINVALUES,
    BADCABINET,
    BADSHORTCUT,
    STRINGOVERFLOW,
    BADLOCALIZEATTRIB,
}
enum Property {
    DICTIONARY,
    CODEPAGE,
    TITLE,
    SUBJECT,
    AUTHOR,
    KEYWORDS,
    COMMENTS,
    TEMPLATE,
    LASTAUTHOR,
    UUID,
    EDITTIME,
    LASTPRINTED,
    CREATED_TM,
    LASTSAVED_TM,
    VERSION,
    SOURCE,
    RESTRICT,
    THUMBNAIL,
    APPNAME,
    SECURITY,
}
enum PropertyType {
    EMPTY,
    INT,
    STRING,
    FILETIME,
}
enum ResultError {
    SUCCESS,
    ACCESS_DENIED,
    INVALID_HANDLE,
    NOT_ENOUGH_MEMORY,
    INVALID_DATA,
    OUTOFMEMORY,
    INVALID_PARAMETER,
    OPEN_FAILED,
    CALL_NOT_IMPLEMENTED,
    MORE_DATA,
    NOT_FOUND,
    CONTINUE,
    UNKNOWN_PROPERTY,
    BAD_QUERY_SYNTAX,
    INVALID_FIELD,
    FUNCTION_FAILED,
    INVALID_TABLE,
    DATATYPE_MISMATCH,
    INVALID_DATATYPE,
}
enum DbFlags {
    READONLY,
    CREATE,
    TRANSACT,
    PATCH,
}
const NULL_INT: number
function db_error_quark(): GLib.Quark
function result_error_quark(): GLib.Quark
interface Database_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Libmsi-1.0.Libmsi.Database

    flags?: DbFlags | null
    outpath?: string | null
    path?: string | null
}

interface Database {

    // Own properties of Libmsi-1.0.Libmsi.Database

    readonly flags: DbFlags
    readonly outpath: string
    readonly path: string

    // Owm methods of Libmsi-1.0.Libmsi.Database

    /**
     * FIXME
     * @param file an MST transform file path
     */
    apply_transform(file: string): boolean
    commit(): boolean
    /**
     * Writes a file containing the table data as tab separated ASCII.
     * The format is as follows:
     * 
     * row1 : colname1 <tab> colname2 <tab> .... colnameN <cr> <lf>
     * row2 : coltype1 <tab> coltype2 <tab> .... coltypeN <cr> <lf>
     * row3 : tablename <tab> key1 <tab> key2 <tab> ... keyM <cr> <lf>
     * 
     * Followed by the data, starting at row 1 with one row per line
     * 
     * row4 : data <tab> data <tab> data <tab> ... data <cr> <lf>
     * @param table a table name
     * @param fd a file descriptor
     */
    export(table: string, fd: number): boolean
    get_primary_keys(table: string): Record
    /**
     * Import a table to the database from file `path`.
     * @param path path to a table file
     */
    import(path: string): boolean
    is_readonly(): boolean
    is_table_persistent(table: string): boolean
    merge(merge: Database, table: string | null): boolean

    // Class property signals of Libmsi-1.0.Libmsi.Database

    connect(sigName: "notify::flags", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::outpath", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::outpath", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::outpath", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Database extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.Database

    static name: string
    static $gtype: GObject.GType<Database>

    // Constructors of Libmsi-1.0.Libmsi.Database

    constructor(config?: Database_ConstructProps) 
    /**
     * Create a MSI database or open from `path`.
     * @constructor 
     * @param path path to a MSI file
     * @param flags #LibmsiDbFlags opening flags
     * @param persist path to output MSI file
     */
    constructor(path: string, flags: number, persist: string | null) 
    /**
     * Create a MSI database or open from `path`.
     * @constructor 
     * @param path path to a MSI file
     * @param flags #LibmsiDbFlags opening flags
     * @param persist path to output MSI file
     */
    static new(path: string, flags: number, persist: string | null): Database
    _init(config?: Database_ConstructProps): void
}

interface Query_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Libmsi-1.0.Libmsi.Query

    database?: Database | null
    query?: string | null
}

interface Query {

    // Own properties of Libmsi-1.0.Libmsi.Query

    readonly database: Database
    readonly query: string

    // Owm methods of Libmsi-1.0.Libmsi.Query

    /**
     * Release the current result set.
     */
    close(): boolean
    /**
     * Execute the `query` with the arguments from `rec`.
     * @param rec a #LibmsiRecord containing query arguments, or     %NULL if no arguments needed
     */
    execute(rec: Record | null): boolean
    /**
     * Return the next query result. %NULL is returned when there
     * is no more results.
     */
    fetch(): Record | null
    /**
     * Get column informations, returned as record string fields.
     * @param info a #LibmsiColInfo specifying the type of information to return
     */
    get_column_info(info: ColInfo): Record
    /**
     * Call this to get more information on the last query error.
     */
    get_error(): /* column */ string

    // Class property signals of Libmsi-1.0.Libmsi.Query

    connect(sigName: "notify::database", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database", ...args: any[]): void
    connect(sigName: "notify::query", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::query", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Query extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.Query

    static name: string
    static $gtype: GObject.GType<Query>

    // Constructors of Libmsi-1.0.Libmsi.Query

    constructor(config?: Query_ConstructProps) 
    /**
     * Create a SQL query for `database`.
     * @constructor 
     * @param database a #LibmsiDatabase
     * @param query a SQL query
     */
    constructor(database: Database, query: string) 
    /**
     * Create a SQL query for `database`.
     * @constructor 
     * @param database a #LibmsiDatabase
     * @param query a SQL query
     */
    static new(database: Database, query: string): Query
    _init(config?: Query_ConstructProps): void
}

interface Record_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Libmsi-1.0.Libmsi.Record

    count?: number | null
}

interface Record {

    // Own properties of Libmsi-1.0.Libmsi.Record

    readonly count: number

    // Owm methods of Libmsi-1.0.Libmsi.Record

    /**
     * Clear record fields.
     */
    clear(): boolean
    get_field_count(): number
    /**
     * Get the integer value of %field. If the field is a string
     * representing an integer, it will be converted to an integer value.
     * Other values and types will return %LIBMSI_NULL_INT.
     * @param field a field identifier
     */
    get_int(field: number): number
    /**
     * Get the stream associated with the given record `field`.
     * @param field a field identifier
     */
    get_stream(field: number): Gio.InputStream
    /**
     * Get a string representation of %field.
     * @param field a field identifier
     */
    get_string(field: number): string
    is_null(field: number): boolean
    /**
     * Load the file content as a stream in `field`.
     * @param field a field identifier
     * @param filename a filename or %NULL
     */
    load_stream(field: number, filename: string): boolean
    /**
     * Set the %field to the integer value %val.
     * @param field a field identifier
     * @param val value to set field to
     */
    set_int(field: number, val: number): boolean
    /**
     * Set the stream content from `input` stream.
     * @param field a field identifier
     * @param input a #GInputStream
     * @param count the number of bytes to read from `input`
     * @param cancellable optional GCancellable object, %NULL to ignore
     */
    set_stream(field: number, input: Gio.InputStream, count: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set the %field value to %val string.
     * @param field a field identifier
     * @param val a string or %NULL
     */
    set_string(field: number, val: string): boolean

    // Class property signals of Libmsi-1.0.Libmsi.Record

    connect(sigName: "notify::count", callback: (($obj: Record, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: Record, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Record extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.Record

    static name: string
    static $gtype: GObject.GType<Record>

    // Constructors of Libmsi-1.0.Libmsi.Record

    constructor(config?: Record_ConstructProps) 
    constructor(count: number) 
    static new(count: number): Record
    _init(config?: Record_ConstructProps): void
}

interface SummaryInfo_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Libmsi-1.0.Libmsi.SummaryInfo

    database?: Database | null
    update_count?: number | null
}

interface SummaryInfo {

    // Own properties of Libmsi-1.0.Libmsi.SummaryInfo

    readonly database: Database
    readonly update_count: number

    // Owm methods of Libmsi-1.0.Libmsi.SummaryInfo

    get_filetime(prop: Property): number
    get_int(prop: Property): number
    get_properties(): Property[]
    get_property_type(prop: Property): PropertyType
    get_string(prop: Property): string
    /**
     * Save summary informations to the associated database.
     */
    persist(): boolean
    /**
     * Save summary informations to the associated database.
     * @param db a #LibmsiDatabase to save to
     */
    save(db: Database): boolean
    /**
     * Set file time property `prop`.
     * @param prop a #LibmsiProperty to set
     * @param value a value
     */
    set_filetime(prop: Property, value: number): boolean
    /**
     * Set integer property `prop`.
     * @param prop a #LibmsiProperty to set
     * @param value a value
     */
    set_int(prop: Property, value: number): boolean
    /**
     * Set string property `prop`.
     * @param prop a #LibmsiProperty to set
     * @param value a string value
     */
    set_string(prop: Property, value: string): boolean

    // Class property signals of Libmsi-1.0.Libmsi.SummaryInfo

    connect(sigName: "notify::database", callback: (($obj: SummaryInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: SummaryInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database", ...args: any[]): void
    connect(sigName: "notify::update-count", callback: (($obj: SummaryInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-count", callback: (($obj: SummaryInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SummaryInfo extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.SummaryInfo

    static name: string
    static $gtype: GObject.GType<SummaryInfo>

    // Constructors of Libmsi-1.0.Libmsi.SummaryInfo

    constructor(config?: SummaryInfo_ConstructProps) 
    /**
     * If `database` is provided, the summary informations will be
     * populated during creation, and the libmsi_summary_info_persist()
     * function will save the properties to it. If `database` is %NULL, you
     * may still populate properties and then save them to a particular
     * database with the libmsi_summary_info_save() function.
     * @constructor 
     * @param database an optionnal associated #LibmsiDatabase
     * @param update_count number of changes allowed
     */
    constructor(database: Database | null, update_count: number) 
    /**
     * If `database` is provided, the summary informations will be
     * populated during creation, and the libmsi_summary_info_persist()
     * function will save the properties to it. If `database` is %NULL, you
     * may still populate properties and then save them to a particular
     * database with the libmsi_summary_info_save() function.
     * @constructor 
     * @param database an optionnal associated #LibmsiDatabase
     * @param update_count number of changes allowed
     */
    static new(database: Database | null, update_count: number): SummaryInfo
    _init(config?: SummaryInfo_ConstructProps): void
}

interface DatabaseClass {

    // Own fields of Libmsi-1.0.Libmsi.DatabaseClass

    parent_class: GObject.ObjectClass
}

abstract class DatabaseClass {

    // Own properties of Libmsi-1.0.Libmsi.DatabaseClass

    static name: string
}

interface QueryClass {

    // Own fields of Libmsi-1.0.Libmsi.QueryClass

    parent_class: GObject.ObjectClass
}

abstract class QueryClass {

    // Own properties of Libmsi-1.0.Libmsi.QueryClass

    static name: string
}

interface RecordClass {

    // Own fields of Libmsi-1.0.Libmsi.RecordClass

    parent_class: GObject.ObjectClass
}

abstract class RecordClass {

    // Own properties of Libmsi-1.0.Libmsi.RecordClass

    static name: string
}

interface SummaryInfoClass {

    // Own fields of Libmsi-1.0.Libmsi.SummaryInfoClass

    parent_class: GObject.ObjectClass
}

abstract class SummaryInfoClass {

    // Own properties of Libmsi-1.0.Libmsi.SummaryInfoClass

    static name: string
}

}
export default Libmsi;