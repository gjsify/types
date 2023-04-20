
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Libmsi-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
function dbErrorQuark(): GLib.Quark
function resultErrorQuark(): GLib.Quark
module Database {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Libmsi-1.0.Libmsi.Database

        flags?: DbFlags | null
        outpath?: string | null
        path?: string | null
    }

}

interface Database {

    // Own properties of Libmsi-1.0.Libmsi.Database

    readonly flags: DbFlags
    readonly outpath: string | null
    readonly path: string | null
    __gtype__: number

    // Owm methods of Libmsi-1.0.Libmsi.Database

    /**
     * FIXME
     * @param file an MST transform file path
     * @returns %TRUE on success
     */
    applyTransform(file: string | null): boolean
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
     * @returns %TRUE on success
     */
    export(table: string | null, fd: number): boolean
    getPrimaryKeys(table: string | null): Record
    /**
     * Import a table to the database from file `path`.
     * @param path path to a table file
     * @returns %TRUE on success
     */
    import(path: string | null): boolean
    isReadonly(): boolean
    isTablePersistent(table: string | null): boolean
    merge(merge: Database, table: string | null): boolean

    // Class property signals of Libmsi-1.0.Libmsi.Database

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::outpath", callback: (...args: any[]) => void): number
    on(sigName: "notify::outpath", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::outpath", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::outpath", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::outpath", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Database extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.Database

    static name: string

    // Constructors of Libmsi-1.0.Libmsi.Database

    constructor(config?: Database.ConstructorProperties) 
    /**
     * Create a MSI database or open from `path`.
     * @constructor 
     * @param path path to a MSI file
     * @param flags #LibmsiDbFlags opening flags
     * @param persist path to output MSI file
     * @returns a new #LibmsiDatabase on success, %NULL if fail.
     */
    constructor(path: string | null, flags: number, persist: string | null) 
    /**
     * Create a MSI database or open from `path`.
     * @constructor 
     * @param path path to a MSI file
     * @param flags #LibmsiDbFlags opening flags
     * @param persist path to output MSI file
     * @returns a new #LibmsiDatabase on success, %NULL if fail.
     */
    static new(path: string | null, flags: number, persist: string | null): Database
    _init(config?: Database.ConstructorProperties): void
}

module Query {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Libmsi-1.0.Libmsi.Query

        database?: Database | null
        query?: string | null
    }

}

interface Query {

    // Own properties of Libmsi-1.0.Libmsi.Query

    readonly database: Database
    readonly query: string | null
    __gtype__: number

    // Owm methods of Libmsi-1.0.Libmsi.Query

    /**
     * Release the current result set.
     * @returns %TRUE on success
     */
    close(): boolean
    /**
     * Execute the `query` with the arguments from `rec`.
     * @param rec a #LibmsiRecord containing query arguments, or     %NULL if no arguments needed
     * @returns %TRUE on success
     */
    execute(rec: Record | null): boolean
    /**
     * Return the next query result. %NULL is returned when there
     * is no more results.
     * @returns a newly allocated     #LibmsiRecord or %NULL when no results or failure.
     */
    fetch(): Record | null
    /**
     * Get column informations, returned as record string fields.
     * @param info a #LibmsiColInfo specifying the type of information to return
     * @returns a newly allocated #LibmsiRecord containing informations or %NULL on error.
     */
    getColumnInfo(info: ColInfo): Record
    /**
     * Call this to get more information on the last query error.
     */
    getError(): /* column */ string | null

    // Class property signals of Libmsi-1.0.Libmsi.Query

    connect(sigName: "notify::database", callback: (...args: any[]) => void): number
    on(sigName: "notify::database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::database", ...args: any[]): void
    connect(sigName: "notify::query", callback: (...args: any[]) => void): number
    on(sigName: "notify::query", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::query", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::query", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Query extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.Query

    static name: string

    // Constructors of Libmsi-1.0.Libmsi.Query

    constructor(config?: Query.ConstructorProperties) 
    /**
     * Create a SQL query for `database`.
     * @constructor 
     * @param database a #LibmsiDatabase
     * @param query a SQL query
     * @returns a new %LibmsiQuery on success, %NULL on failure
     */
    constructor(database: Database, query: string | null) 
    /**
     * Create a SQL query for `database`.
     * @constructor 
     * @param database a #LibmsiDatabase
     * @param query a SQL query
     * @returns a new %LibmsiQuery on success, %NULL on failure
     */
    static new(database: Database, query: string | null): Query
    _init(config?: Query.ConstructorProperties): void
}

module Record {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Libmsi-1.0.Libmsi.Record

        count?: number | null
    }

}

interface Record {

    // Own properties of Libmsi-1.0.Libmsi.Record

    readonly count: number
    __gtype__: number

    // Owm methods of Libmsi-1.0.Libmsi.Record

    /**
     * Clear record fields.
     * @returns %TRUE on success.
     */
    clear(): boolean
    getFieldCount(): number
    /**
     * Get the integer value of %field. If the field is a string
     * representing an integer, it will be converted to an integer value.
     * Other values and types will return %LIBMSI_NULL_INT.
     * @param field a field identifier
     * @returns The integer value, or %LIBMSI_NULL_INT if the field is not an integer.
     */
    getInt(field: number): number
    /**
     * Get the stream associated with the given record `field`.
     * @param field a field identifier
     * @returns a new #GInputStream
     */
    getStream(field: number): Gio.InputStream
    /**
     * Get a string representation of %field.
     * @param field a field identifier
     * @returns a string, or %NULL on error.
     */
    getString(field: number): string | null
    isNull(field: number): boolean
    /**
     * Load the file content as a stream in `field`.
     * @param field a field identifier
     * @param filename a filename or %NULL
     * @returns %TRUE on success.
     */
    loadStream(field: number, filename: string | null): boolean
    /**
     * Set the %field to the integer value %val.
     * @param field a field identifier
     * @param val value to set field to
     * @returns %TRUE on success.
     */
    setInt(field: number, val: number): boolean
    /**
     * Set the stream content from `input` stream.
     * @param field a field identifier
     * @param input a #GInputStream
     * @param count the number of bytes to read from `input`
     * @param cancellable optional GCancellable object, %NULL to ignore
     * @returns %TRUE on success
     */
    setStream(field: number, input: Gio.InputStream, count: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set the %field value to %val string.
     * @param field a field identifier
     * @param val a string or %NULL
     * @returns %TRUE on success.
     */
    setString(field: number, val: string | null): boolean

    // Class property signals of Libmsi-1.0.Libmsi.Record

    connect(sigName: "notify::count", callback: (...args: any[]) => void): number
    on(sigName: "notify::count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::count", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Record extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.Record

    static name: string

    // Constructors of Libmsi-1.0.Libmsi.Record

    constructor(config?: Record.ConstructorProperties) 
    constructor(count: number) 
    static new(count: number): Record
    _init(config?: Record.ConstructorProperties): void
}

module SummaryInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Libmsi-1.0.Libmsi.SummaryInfo

        database?: Database | null
        updateCount?: number | null
    }

}

interface SummaryInfo {

    // Own properties of Libmsi-1.0.Libmsi.SummaryInfo

    readonly database: Database
    readonly updateCount: number
    __gtype__: number

    // Owm methods of Libmsi-1.0.Libmsi.SummaryInfo

    getFiletime(prop: Property): number
    getInt(prop: Property): number
    getProperties(): Property[]
    getPropertyType(prop: Property): PropertyType
    getString(prop: Property): string | null
    /**
     * Save summary informations to the associated database.
     * @returns %TRUE on success
     */
    persist(): boolean
    /**
     * Save summary informations to the associated database.
     * @param db a #LibmsiDatabase to save to
     * @returns %TRUE on success
     */
    save(db: Database): boolean
    /**
     * Set file time property `prop`.
     * @param prop a #LibmsiProperty to set
     * @param value a value
     * @returns %TRUE on success
     */
    setFiletime(prop: Property, value: number): boolean
    /**
     * Set integer property `prop`.
     * @param prop a #LibmsiProperty to set
     * @param value a value
     * @returns %TRUE on success
     */
    setInt(prop: Property, value: number): boolean
    /**
     * Set string property `prop`.
     * @param prop a #LibmsiProperty to set
     * @param value a string value
     * @returns %TRUE on success
     */
    setString(prop: Property, value: string | null): boolean

    // Class property signals of Libmsi-1.0.Libmsi.SummaryInfo

    connect(sigName: "notify::database", callback: (...args: any[]) => void): number
    on(sigName: "notify::database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::database", ...args: any[]): void
    connect(sigName: "notify::update-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-count", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SummaryInfo extends GObject.Object {

    // Own properties of Libmsi-1.0.Libmsi.SummaryInfo

    static name: string

    // Constructors of Libmsi-1.0.Libmsi.SummaryInfo

    constructor(config?: SummaryInfo.ConstructorProperties) 
    /**
     * If `database` is provided, the summary informations will be
     * populated during creation, and the libmsi_summary_info_persist()
     * function will save the properties to it. If `database` is %NULL, you
     * may still populate properties and then save them to a particular
     * database with the libmsi_summary_info_save() function.
     * @constructor 
     * @param database an optionnal associated #LibmsiDatabase
     * @param updateCount number of changes allowed
     * @returns a #LibmsiSummaryInfo or %NULL on failure
     */
    constructor(database: Database | null, updateCount: number) 
    /**
     * If `database` is provided, the summary informations will be
     * populated during creation, and the libmsi_summary_info_persist()
     * function will save the properties to it. If `database` is %NULL, you
     * may still populate properties and then save them to a particular
     * database with the libmsi_summary_info_save() function.
     * @constructor 
     * @param database an optionnal associated #LibmsiDatabase
     * @param updateCount number of changes allowed
     * @returns a #LibmsiSummaryInfo or %NULL on failure
     */
    static new(database: Database | null, updateCount: number): SummaryInfo
    _init(config?: SummaryInfo.ConstructorProperties): void
}

interface DatabaseClass {

    // Own fields of Libmsi-1.0.Libmsi.DatabaseClass

    parentClass: GObject.ObjectClass
}

abstract class DatabaseClass {

    // Own properties of Libmsi-1.0.Libmsi.DatabaseClass

    static name: string
}

interface QueryClass {

    // Own fields of Libmsi-1.0.Libmsi.QueryClass

    parentClass: GObject.ObjectClass
}

abstract class QueryClass {

    // Own properties of Libmsi-1.0.Libmsi.QueryClass

    static name: string
}

interface RecordClass {

    // Own fields of Libmsi-1.0.Libmsi.RecordClass

    parentClass: GObject.ObjectClass
}

abstract class RecordClass {

    // Own properties of Libmsi-1.0.Libmsi.RecordClass

    static name: string
}

interface SummaryInfoClass {

    // Own fields of Libmsi-1.0.Libmsi.SummaryInfoClass

    parentClass: GObject.ObjectClass
}

abstract class SummaryInfoClass {

    // Own properties of Libmsi-1.0.Libmsi.SummaryInfoClass

    static name: string
}

}

export default Libmsi;