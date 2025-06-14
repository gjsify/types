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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Libmsi {
    /**
     * Libmsi-1.0
     */

    export namespace ColInfo {
        export const $gtype: GObject.GType<ColInfo>;
    }

    enum ColInfo {
        NAMES,
        TYPES,
    }
    class DBError extends GLib.Error {
        static $gtype: GObject.GType<DBError>;

        // Static fields

        static SUCCESS: number;
        static INVALIDARG: number;
        static MOREDATA: number;
        static FUNCTIONERROR: number;
        static DUPLICATEKEY: number;
        static REQUIRED: number;
        static BADLINK: number;
        static OVERFLOW: number;
        static UNDERFLOW: number;
        static NOTINSET: number;
        static BADVERSION: number;
        static BADCASE: number;
        static BADGUID: number;
        static BADWILDCARD: number;
        static BADIDENTIFIER: number;
        static BADLANGUAGE: number;
        static BADFILENAME: number;
        static BADPATH: number;
        static BADCONDITION: number;
        static BADFORMATTED: number;
        static BADTEMPLATE: number;
        static BADDEFAULTDIR: number;
        static BADREGPATH: number;
        static BADCUSTOMSOURCE: number;
        static BADPROPERTY: number;
        static MISSINGDATA: number;
        static BADCATEGORY: number;
        static BADKEYTABLE: number;
        static BADMAXMINVALUES: number;
        static BADCABINET: number;
        static BADSHORTCUT: number;
        static STRINGOVERFLOW: number;
        static BADLOCALIZEATTRIB: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace Property {
        export const $gtype: GObject.GType<Property>;
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

    export namespace PropertyType {
        export const $gtype: GObject.GType<PropertyType>;
    }

    enum PropertyType {
        EMPTY,
        INT,
        STRING,
        FILETIME,
    }
    class ResultError extends GLib.Error {
        static $gtype: GObject.GType<ResultError>;

        // Static fields

        static SUCCESS: number;
        static ACCESS_DENIED: number;
        static INVALID_HANDLE: number;
        static NOT_ENOUGH_MEMORY: number;
        static INVALID_DATA: number;
        static OUTOFMEMORY: number;
        static INVALID_PARAMETER: number;
        static OPEN_FAILED: number;
        static CALL_NOT_IMPLEMENTED: number;
        static MORE_DATA: number;
        static NOT_FOUND: number;
        static CONTINUE: number;
        static UNKNOWN_PROPERTY: number;
        static BAD_QUERY_SYNTAX: number;
        static INVALID_FIELD: number;
        static FUNCTION_FAILED: number;
        static INVALID_TABLE: number;
        static DATATYPE_MISMATCH: number;
        static INVALID_DATATYPE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    const NULL_INT: number;
    function db_error_quark(): GLib.Quark;
    function result_error_quark(): GLib.Quark;

    export namespace DbFlags {
        export const $gtype: GObject.GType<DbFlags>;
    }

    enum DbFlags {
        READONLY,
        CREATE,
        TRANSACT,
        PATCH,
    }
    namespace Database {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: DbFlags;
            outpath: string;
            path: string;
        }
    }

    class Database extends GObject.Object {
        static $gtype: GObject.GType<Database>;
        declare static readonly __signalSignatures: Database.SignalSignatures;

        // Properties

        get flags(): DbFlags;
        get outpath(): string;
        get path(): string;

        // Constructors

        constructor(properties?: Partial<Database.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, flags: number, persist?: string | null): Database;

        // Methods

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

    namespace Query {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            database: Database;
            query: string;
        }
    }

    class Query extends GObject.Object {
        static $gtype: GObject.GType<Query>;
        declare static readonly __signalSignatures: Query.SignalSignatures;

        // Properties

        get database(): Database;
        get query(): string;

        // Constructors

        constructor(properties?: Partial<Query.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](database: Database, query: string): Query;

        // Methods

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
        get_column_info(info: ColInfo | null): Record;
        /**
         * Call this to get more information on the last query error.
         */
        get_error(): string;
    }

    namespace Record {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            count: number;
        }
    }

    class Record extends GObject.Object {
        static $gtype: GObject.GType<Record>;
        declare static readonly __signalSignatures: Record.SignalSignatures;

        // Properties

        get count(): number;

        // Constructors

        constructor(properties?: Partial<Record.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](count: number): Record;

        // Methods

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

    namespace SummaryInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            database: Database;
            update_count: number;
            updateCount: number;
        }
    }

    class SummaryInfo extends GObject.Object {
        static $gtype: GObject.GType<SummaryInfo>;
        declare static readonly __signalSignatures: SummaryInfo.SignalSignatures;

        // Properties

        get database(): Database;
        get update_count(): number;
        get updateCount(): number;

        // Constructors

        constructor(properties?: Partial<SummaryInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](database: Database | null, update_count: number): SummaryInfo;

        // Methods

        get_filetime(prop: Property | null): number;
        get_int(prop: Property | null): number;
        get_properties(): Property[];
        get_property_type(prop: Property | null): PropertyType;
        get_string(prop: Property | null): string;
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
        set_filetime(prop: Property | null, value: number): boolean;
        /**
         * Set integer property `prop`.
         * @param prop a #LibmsiProperty to set
         * @param value a value
         * @returns %TRUE on success
         */
        set_int(prop: Property | null, value: number): boolean;
        /**
         * Set string property `prop`.
         * @param prop a #LibmsiProperty to set
         * @param value a string value
         * @returns %TRUE on success
         */
        set_string(prop: Property | null, value: string): boolean;
    }

    type DatabaseClass = typeof Database;
    type QueryClass = typeof Query;
    type RecordClass = typeof Record;
    type SummaryInfoClass = typeof SummaryInfo;
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
