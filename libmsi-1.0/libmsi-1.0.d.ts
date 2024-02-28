/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './libmsi-1.0-ambient.d.ts';
import './libmsi-1.0-import.d.ts';
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
    class DBError extends GLib.Error {
        // Own fields of Libmsi-1.0.DBError

        SUCCESS: number;
        INVALIDARG: number;
        MOREDATA: number;
        FUNCTIONERROR: number;
        DUPLICATEKEY: number;
        REQUIRED: number;
        BADLINK: number;
        OVERFLOW: number;
        UNDERFLOW: number;
        NOTINSET: number;
        BADVERSION: number;
        BADCASE: number;
        BADGUID: number;
        BADWILDCARD: number;
        BADIDENTIFIER: number;
        BADLANGUAGE: number;
        BADFILENAME: number;
        BADPATH: number;
        BADCONDITION: number;
        BADFORMATTED: number;
        BADTEMPLATE: number;
        BADDEFAULTDIR: number;
        BADREGPATH: number;
        BADCUSTOMSOURCE: number;
        BADPROPERTY: number;
        MISSINGDATA: number;
        BADCATEGORY: number;
        BADKEYTABLE: number;
        BADMAXMINVALUES: number;
        BADCABINET: number;
        BADSHORTCUT: number;
        STRINGOVERFLOW: number;
        BADLOCALIZEATTRIB: number;

        // Constructors of Libmsi-1.0.DBError

        constructor(options: { message: string; code: number });

        // Owm methods of Libmsi-1.0.DBError

        static quark(): GLib.Quark;
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
    class ResultError extends GLib.Error {
        // Own fields of Libmsi-1.0.ResultError

        SUCCESS: number;
        ACCESS_DENIED: number;
        INVALID_HANDLE: number;
        NOT_ENOUGH_MEMORY: number;
        INVALID_DATA: number;
        OUTOFMEMORY: number;
        INVALID_PARAMETER: number;
        OPEN_FAILED: number;
        CALL_NOT_IMPLEMENTED: number;
        MORE_DATA: number;
        NOT_FOUND: number;
        CONTINUE: number;
        UNKNOWN_PROPERTY: number;
        BAD_QUERY_SYNTAX: number;
        INVALID_FIELD: number;
        FUNCTION_FAILED: number;
        INVALID_TABLE: number;
        DATATYPE_MISMATCH: number;
        INVALID_DATATYPE: number;

        // Constructors of Libmsi-1.0.ResultError

        constructor(options: { message: string; code: number });

        // Owm methods of Libmsi-1.0.ResultError

        static quark(): GLib.Quark;
    }

    const NULL_INT: number;
    function db_error_quark(): GLib.Quark;
    function result_error_quark(): GLib.Quark;
    enum DbFlags {
        READONLY,
        CREATE,
        TRANSACT,
        PATCH,
    }
    module Database {
        // Constructor properties interface
    }

    class Database extends GObject.Object {
        // Own properties of Libmsi-1.0.Database

        flags: DbFlags;
        outpath: string;
        path: string;

        // Constructors of Libmsi-1.0.Database

        static ['new'](path: string, flags: number, persist?: string | null): Database;

        // Owm methods of Libmsi-1.0.Database

        /**
         * FIXME
         * @param file an MST transform file path
         * @returns %TRUE on success
         */
        apply_transform(file: string): boolean;
        commit(): boolean;
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
        ['export'](table: string, fd: number): boolean;
        get_primary_keys(table: string): Record;
        /**
         * Import a table to the database from file `path`.
         * @param path path to a table file
         * @returns %TRUE on success
         */
        ['import'](path: string): boolean;
        is_readonly(): boolean;
        is_table_persistent(table: string): boolean;
        merge(merge: Database, table?: string | null): boolean;
    }

    module Query {
        // Constructor properties interface
    }

    class Query extends GObject.Object {
        // Own properties of Libmsi-1.0.Query

        database: Database;
        query: string;

        // Constructors of Libmsi-1.0.Query

        static ['new'](database: Database, query: string): Query;

        // Owm methods of Libmsi-1.0.Query

        /**
         * Release the current result set.
         * @returns %TRUE on success
         */
        close(): boolean;
        /**
         * Execute the `query` with the arguments from `rec`.
         * @param rec a #LibmsiRecord containing query arguments, or     %NULL if no arguments needed
         * @returns %TRUE on success
         */
        execute(rec?: Record | null): boolean;
        /**
         * Return the next query result. %NULL is returned when there
         * is no more results.
         * @returns a newly allocated     #LibmsiRecord or %NULL when no results or failure.
         */
        fetch(): Record | null;
        /**
         * Get column informations, returned as record string fields.
         * @param info a #LibmsiColInfo specifying the type of information to return
         * @returns a newly allocated #LibmsiRecord containing informations or %NULL on error.
         */
        get_column_info(info: ColInfo): Record;
        /**
         * Call this to get more information on the last query error.
         */
        get_error(): void;
    }

    module Record {
        // Constructor properties interface
    }

    class Record extends GObject.Object {
        // Own properties of Libmsi-1.0.Record

        count: number;

        // Constructors of Libmsi-1.0.Record

        static ['new'](count: number): Record;

        // Owm methods of Libmsi-1.0.Record

        /**
         * Clear record fields.
         * @returns %TRUE on success.
         */
        clear(): boolean;
        get_field_count(): number;
        /**
         * Get the integer value of %field. If the field is a string
         * representing an integer, it will be converted to an integer value.
         * Other values and types will return %LIBMSI_NULL_INT.
         * @param field a field identifier
         * @returns The integer value, or %LIBMSI_NULL_INT if the field is not an integer.
         */
        get_int(field: number): number;
        /**
         * Get the stream associated with the given record `field`.
         * @param field a field identifier
         * @returns a new #GInputStream
         */
        get_stream(field: number): Gio.InputStream;
        /**
         * Get a string representation of %field.
         * @param field a field identifier
         * @returns a string, or %NULL on error.
         */
        get_string(field: number): string;
        is_null(field: number): boolean;
        /**
         * Load the file content as a stream in `field`.
         * @param field a field identifier
         * @param filename a filename or %NULL
         * @returns %TRUE on success.
         */
        load_stream(field: number, filename: string): boolean;
        /**
         * Set the %field to the integer value %val.
         * @param field a field identifier
         * @param val value to set field to
         * @returns %TRUE on success.
         */
        set_int(field: number, val: number): boolean;
        /**
         * Set the stream content from `input` stream.
         * @param field a field identifier
         * @param input a #GInputStream
         * @param count the number of bytes to read from @input
         * @param cancellable optional GCancellable object, %NULL to ignore
         * @returns %TRUE on success
         */
        set_stream(field: number, input: Gio.InputStream, count: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Set the %field value to %val string.
         * @param field a field identifier
         * @param val a string or %NULL
         * @returns %TRUE on success.
         */
        set_string(field: number, val: string): boolean;
    }

    module SummaryInfo {
        // Constructor properties interface
    }

    class SummaryInfo extends GObject.Object {
        // Own properties of Libmsi-1.0.SummaryInfo

        database: Database;
        update_count: number;
        updateCount: number;

        // Constructors of Libmsi-1.0.SummaryInfo

        static ['new'](database: Database | null, update_count: number): SummaryInfo;

        // Owm methods of Libmsi-1.0.SummaryInfo

        get_filetime(prop: Property): number;
        get_int(prop: Property): number;
        get_properties(): Property[];
        get_property_type(prop: Property): PropertyType;
        get_string(prop: Property): string;
        /**
         * Save summary informations to the associated database.
         * @returns %TRUE on success
         */
        persist(): boolean;
        /**
         * Save summary informations to the associated database.
         * @param db a #LibmsiDatabase to save to
         * @returns %TRUE on success
         */
        save(db: Database): boolean;
        /**
         * Set file time property `prop`.
         * @param prop a #LibmsiProperty to set
         * @param value a value
         * @returns %TRUE on success
         */
        set_filetime(prop: Property, value: number): boolean;
        /**
         * Set integer property `prop`.
         * @param prop a #LibmsiProperty to set
         * @param value a value
         * @returns %TRUE on success
         */
        set_int(prop: Property, value: number): boolean;
        /**
         * Set string property `prop`.
         * @param prop a #LibmsiProperty to set
         * @param value a string value
         * @returns %TRUE on success
         */
        set_string(prop: Property, value: string): boolean;
    }

    class DatabaseClass {}

    class QueryClass {}

    class RecordClass {}

    class SummaryInfoClass {}

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

export default Libmsi;
// END
