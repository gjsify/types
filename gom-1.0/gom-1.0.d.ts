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

export namespace Gom {
    /**
     * Gom-1.0
     */

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static ADAPTER_OPEN: number;
        static COMMAND_NO_SQL: number;
        static COMMAND_SQLITE: number;
        static REPOSITORY_EMPTY_RESULT: number;
        static RESOURCE_CURSOR: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace FilterMode {
        export const $gtype: GObject.GType<FilterMode>;
    }

    /**
     * @gir-type Enum
     */
    enum FilterMode {
        SQL,
        OR,
        AND,
        EQ,
        NEQ,
        GT,
        GTE,
        LT,
        LTE,
        LIKE,
        GLOB,
        IS_NULL,
        IS_NOT_NULL,
    }

    /**
     * @gir-type Enum
     */
    export namespace SortingMode {
        export const $gtype: GObject.GType<SortingMode>;
    }

    /**
     * @gir-type Enum
     */
    enum SortingMode {
        ASCENDING,
        DESCENDING,
    }

    function error_quark(): GLib.Quark;
    /**
     * @gir-type Callback
     */
    interface AdapterCallback {
        (adapter: Adapter): void;
    }
    /**
     * @gir-type Callback
     */
    interface RepositoryMigrator {
        (repository: Repository, adapter: Adapter, version: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface ResourceFromBytesFunc {
        (bytes: GLib.Bytes | Uint8Array, value: GObject.Value | any): void;
    }
    /**
     * @gir-type Callback
     */
    interface ResourceToBytesFunc {
        (value: GObject.Value | any): GLib.Bytes;
    }
    namespace Adapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Adapter extends GObject.Object {
        static $gtype: GObject.GType<Adapter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Adapter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Adapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Adapter;

        // Signals

        /** @signal */
        connect<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Adapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        close_async(): globalThis.Promise<boolean>;
        /**
         * @param callback
         */
        close_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param callback
         */
        close_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        close_finish(result: Gio.AsyncResult): boolean;
        close_sync(): boolean;
        /**
         * This is a helper function to make simple execution of SQL easier.
         * It is primarily meant for things like "BEGIN;" and "COMMIT;".
         *
         * This MUST be called from within a write transaction using
         * `gom_adapter_queue_write()`.
         * @param sql SQL to execute.
         * @returns `true` if successful;
         */
        execute_sql(sql: string): boolean;
        /**
         * Fetches the sqlite3 structure used by the adapter.
         * @returns A handle to the #sqlite3 structure. Side effects: None.
         */
        get_handle(): any | null;
        /**
         * Opens the database pointed to by `uri`. `uri` can be in any format understood
         * by SQLite. See <ulink type="http" url="http://www.sqlite.org/c3ref/open.html">http://www.sqlite.org/c3ref/open.html</ulink>
         * for details.
         * @param uri a URI understood by SQLite
         */
        open_async(uri: string): globalThis.Promise<boolean>;
        /**
         * Opens the database pointed to by `uri`. `uri` can be in any format understood
         * by SQLite. See <ulink type="http" url="http://www.sqlite.org/c3ref/open.html">http://www.sqlite.org/c3ref/open.html</ulink>
         * for details.
         * @param uri a URI understood by SQLite
         * @param callback the function to call when the operation finished, or `null`
         */
        open_async(uri: string, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Opens the database pointed to by `uri`. `uri` can be in any format understood
         * by SQLite. See <ulink type="http" url="http://www.sqlite.org/c3ref/open.html">http://www.sqlite.org/c3ref/open.html</ulink>
         * for details.
         * @param uri a URI understood by SQLite
         * @param callback the function to call when the operation finished, or `null`
         */
        open_async(uri: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        open_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param uri
         */
        open_sync(uri: string): boolean;
        /**
         * Queues a callback to be executed within the SQLite thread. The callback is
         * expected to perform reads only.
         * @param callback A callback to execute read queries on SQLite.
         */
        queue_read(callback: AdapterCallback): void;
        /**
         * Queues a callback to be executed within the SQLite thread. The callback can
         * perform reads and writes.
         * @param callback A callback to execute write queries on SQLite.
         */
        queue_write(callback: AdapterCallback): void;
    }

    namespace Command {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::adapter': (pspec: GObject.ParamSpec) => void;
            'notify::sql': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            adapter: Adapter;
            sql: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Command extends GObject.Object {
        static $gtype: GObject.GType<Command>;

        // Properties

        /**
         * @construct-only
         */
        get adapter(): Adapter;
        /**
         * @write-only
         */
        set sql(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Command.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Command.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Command.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Command.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Command.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Command.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        execute(): [boolean, Cursor | null];
        /**
         * @param param_name
         */
        get_param_index(param_name: string): number;
        reset(): void;
        /**
         * @param param
         * @param value
         */
        set_param(param: number, value: GObject.Value | any): void;
        /**
         * @param param
         * @param bytes
         */
        set_param_bytes(param: number, bytes: GLib.Bytes | Uint8Array): void;
        /**
         * @param param
         * @param value
         */
        set_param_double(param: number, value: number): void;
        /**
         * @param param
         * @param value
         */
        set_param_float(param: number, value: number): void;
        /**
         * @param param
         * @param value
         */
        set_param_int(param: number, value: number): void;
        /**
         * @param param
         * @param value
         */
        set_param_int64(param: number, value: number): void;
        /**
         * @param param
         * @param value
         */
        set_param_string(param: number, value: string): void;
        /**
         * @param param
         * @param value
         */
        set_param_uint(param: number, value: number): void;
        /**
         * @param param
         * @param value
         */
        set_param_uint64(param: number, value: number): void;
        /**
         * @param sql
         */
        set_sql(sql: string): void;
    }

    namespace CommandBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::adapter': (pspec: GObject.ParamSpec) => void;
            'notify::filter': (pspec: GObject.ParamSpec) => void;
            'notify::limit': (pspec: GObject.ParamSpec) => void;
            'notify::m2m-table': (pspec: GObject.ParamSpec) => void;
            'notify::m2m-type': (pspec: GObject.ParamSpec) => void;
            'notify::offset': (pspec: GObject.ParamSpec) => void;
            'notify::resource-type': (pspec: GObject.ParamSpec) => void;
            'notify::sorting': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            adapter: Adapter;
            filter: Filter;
            limit: number;
            m2m_table: string;
            m2mTable: string;
            m2m_type: GObject.GTypeInput;
            m2mType: GObject.GTypeInput;
            offset: number;
            resource_type: GObject.GTypeInput;
            resourceType: GObject.GTypeInput;
            sorting: Sorting;
        }
    }

    /**
     * @gir-type Class
     */
    class CommandBuilder extends GObject.Object {
        static $gtype: GObject.GType<CommandBuilder>;

        // Properties

        /**
         * @construct-only
         */
        get adapter(): Adapter;
        get filter(): Filter;
        set filter(val: Filter);
        get limit(): number;
        set limit(val: number);
        /**
         * @construct-only
         */
        get m2m_table(): string;
        /**
         * @construct-only
         */
        get m2mTable(): string;
        /**
         * @construct-only
         */
        get m2m_type(): GObject.GType;
        /**
         * @construct-only
         */
        get m2mType(): GObject.GType;
        get offset(): number;
        set offset(val: number);
        get resource_type(): GObject.GType;
        set resource_type(val: GObject.GType);
        get resourceType(): GObject.GType;
        set resourceType(val: GObject.GType);
        get sorting(): Sorting;
        set sorting(val: Sorting);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CommandBuilder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CommandBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CommandBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommandBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CommandBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommandBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CommandBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CommandBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Builds a new command that will count the number of rows matching the
         * current query parameters.
         * @returns A {@link Gom.Command}.
         */
        build_count(): Command;
        /**
         * Builds a list of {@link Gom.Command} to update the table for the
         * resource_type associated with `builder` up to `version`.
         * @param version the version of the database.
         * @returns A {@link GLib.List} of {@link Gom.Command}.
         */
        build_create(version: number): Command[];
        /**
         * Builds a new {@link Gom.Command} to delete the rows matching the current query
         * params.
         * @returns A {@link Gom.Command}.
         */
        build_delete(): Command;
        /**
         * Builds a new {@link Gom.Command} that will insert the parameters of the resource
         * into the underlying database.
         * @param resource a {@link Gom.Resource}
         * @returns A {@link Gom.Command}.
         */
        build_insert(resource: Resource): Command;
        /**
         * Builds a {@link Gom.Command} that will select all the rows matching the current
         * query params.
         * @returns A {@link Gom.Command}.
         */
        build_select(): Command;
        /**
         * Builds a new {@link Gom.Command} that will update the contents stored for `resource`
         * in the underlying database.
         * @param resource a {@link Gom.Resource}
         * @returns A {@link Gom.Command}.
         */
        build_update(resource: Resource): Command;
    }

    namespace Cursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::statement': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            statement: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Cursor extends GObject.Object {
        static $gtype: GObject.GType<Cursor>;

        // Properties

        /**
         * @construct-only
         */
        get statement(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cursor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Cursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Cursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Cursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Cursor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param column
         * @param value
         */
        get_column(column: number, value: GObject.Value | any): void;
        /**
         * @param column
         */
        get_column_boolean(column: number): boolean;
        /**
         * @param column
         */
        get_column_double(column: number): number;
        /**
         * @param column
         */
        get_column_float(column: number): number;
        /**
         * @param column
         */
        get_column_int(column: number): number;
        /**
         * @param column
         */
        get_column_int64(column: number): number;
        /**
         * @param column
         */
        get_column_name(column: number): string;
        /**
         * @param column
         */
        get_column_string(column: number): string;
        /**
         * @param column
         */
        get_column_uint(column: number): number;
        /**
         * @param column
         */
        get_column_uint64(column: number): number;
        get_n_columns(): number;
        next(): boolean;
    }

    namespace Filter {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::sql': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            mode: FilterMode;
            sql: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Filter extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Filter>;

        // Properties

        /**
         * @construct-only
         */
        get mode(): FilterMode;
        /**
         * @construct-only
         */
        set sql(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Filter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_and(left: Filter, right: Filter): Filter;

        static new_and_fullv(filter_array: Filter): Filter;

        static new_eq(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_glob(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_gt(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_gte(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_is_not_null(resource_type: GObject.GType, property_name: string): Filter;

        static new_is_null(resource_type: GObject.GType, property_name: string): Filter;

        static new_like(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_lt(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_lte(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_neq(resource_type: GObject.GType, property_name: string, value: GObject.Value | any): Filter;

        static new_or(left: Filter, right: Filter): Filter;

        static new_or_fullv(filter_array: Filter): Filter;

        static new_sql(sql: string, values: (GObject.Value | any)[]): Filter;

        // Signals

        /** @signal */
        connect<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Filter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Filter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param table_map
         */
        get_sql(table_map: { [key: string]: any } | GLib.HashTable<any, any>): string;
        /**
         * Fetches the list of values that should be applied in order when building
         * the {@link Gom.Command}.
         * @returns An array of values for the SQL.
         */
        get_values(): unknown[];
    }

    namespace Repository {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::adapter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            adapter: Adapter;
        }
    }

    /**
     * @gir-type Class
     */
    class Repository extends GObject.Object {
        static $gtype: GObject.GType<Repository>;

        // Properties

        /**
         * @construct-only
         */
        get adapter(): Adapter;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Repository.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Repository.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](adapter: Adapter): Repository;

        // Signals

        /** @signal */
        connect<K extends keyof Repository.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Repository.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Repository.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Repository.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Performs an automatic migration on the underlying database. See
         * `gom_repository_automatic_migrate_sync()` for details.
         *
         * Upon completion, `callback` will be executed and it must call
         * `gom_repository_automatic_migrate_finish()`.
         * @param version The version to migrate to.
         * @param object_types a {@link GLib.List} of {@link GObject.GType}
         */
        automatic_migrate_async(version: number, object_types: GObject.GType[]): globalThis.Promise<boolean>;
        /**
         * Performs an automatic migration on the underlying database. See
         * `gom_repository_automatic_migrate_sync()` for details.
         *
         * Upon completion, `callback` will be executed and it must call
         * `gom_repository_automatic_migrate_finish()`.
         * @param version The version to migrate to.
         * @param object_types a {@link GLib.List} of {@link GObject.GType}
         * @param callback A callback to execute upon completion.
         */
        automatic_migrate_async(
            version: number,
            object_types: GObject.GType[],
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Performs an automatic migration on the underlying database. See
         * `gom_repository_automatic_migrate_sync()` for details.
         *
         * Upon completion, `callback` will be executed and it must call
         * `gom_repository_automatic_migrate_finish()`.
         * @param version The version to migrate to.
         * @param object_types a {@link GLib.List} of {@link GObject.GType}
         * @param callback A callback to execute upon completion.
         */
        automatic_migrate_async(
            version: number,
            object_types: GObject.GType[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        automatic_migrate_finish(result: Gio.AsyncResult): boolean;
        /**
         * Performs an automatic migration on the underlying database. For
         * each of the {@link GObject.GType} passed in `object_types`, the table will be
         * created if necessary, and each of the columns corresponding to
         * properties will be added if needed.
         * @param version The version to migrate to.
         * @param object_types a {@link GLib.List} of {@link GObject.GType}
         * @returns `TRUE` in case of success.
         */
        automatic_migrate_sync(version: number, object_types: GObject.GType[]): boolean;
        /**
         * @param resource_type
         * @param filter
         */
        find_async(resource_type: GObject.GType, filter: Filter): globalThis.Promise<ResourceGroup>;
        /**
         * @param resource_type
         * @param filter
         * @param callback
         */
        find_async(resource_type: GObject.GType, filter: Filter, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param resource_type
         * @param filter
         * @param callback
         */
        find_async(
            resource_type: GObject.GType,
            filter: Filter,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<ResourceGroup> | void;
        /**
         * Completes an asynchronous request to fetch a group of resources.
         * @param result A {@link Gio.AsyncResult}.
         * @returns A {@link Gom.ResourceGroup}.
         */
        find_finish(result: Gio.AsyncResult): ResourceGroup;
        /**
         * @param resource_type
         * @param filter
         */
        find_one_async(resource_type: GObject.GType, filter: Filter): globalThis.Promise<Resource>;
        /**
         * @param resource_type
         * @param filter
         * @param callback
         */
        find_one_async(
            resource_type: GObject.GType,
            filter: Filter,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param resource_type
         * @param filter
         * @param callback
         */
        find_one_async(
            resource_type: GObject.GType,
            filter: Filter,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Resource> | void;
        /**
         * Completes an asynchronous request to find a single resource in the
         * repository. See `gom_repository_find_one_async()` for more info.
         * @param result A {@link Gio.AsyncResult}.
         * @returns A {@link Gom.Resource} if successful, otherwise `null`.
         */
        find_one_finish(result: Gio.AsyncResult): Resource;
        /**
         * Synchronous version of `gom_repository_find_async()`.
         * @param resource_type A {@link GObject.GType} of the resource to lookup.
         * @param filter A {@link Gom.Filter} to apply to your search.
         * @returns A {@link Gom.Resource} or `null`.
         */
        find_one_sync(resource_type: GObject.GType, filter?: Filter | null): Resource;
        /**
         * @param resource_type
         * @param filter
         * @param sorting
         * @param callback
         */
        find_sorted_async(
            resource_type: GObject.GType,
            filter: Filter,
            sorting: Sorting,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Synchronously queries the {@link Gom.Repository} for objects matching the
         * requested query. This must only be run from a callback provided to
         * `gom_adapter_queue_read()`.
         * @param resource_type The {@link GObject.GType} of the resources to query.
         * @param filter An optional filter for the query.
         * @param sorting An optional {@link Gom.Sorting} to order the query                              results.
         * @returns A {@link Gom.ResourceGroup} or `null`.
         */
        find_sorted_sync(resource_type: GObject.GType, filter?: Filter | null, sorting?: Sorting | null): ResourceGroup;
        /**
         * Synchronously queries the {@link Gom.Repository} for objects matching the
         * requested query. This must only be run from a callback provided to
         * `gom_adapter_queue_read()`.
         * @param resource_type The {@link GObject.GType} of the resources to query.
         * @param filter An optional filter for the query.
         * @returns A {@link Gom.ResourceGroup} or `null`.
         */
        find_sync(resource_type: GObject.GType, filter?: Filter | null): ResourceGroup;
        /**
         * Fetches the underlying adapter.
         * @returns A {@link Gom.Adapter}.
         */
        get_adapter(): Adapter;
        /**
         * Asynchronously performs a migration on the underlying database. This will
         * call `migrator` from the SQLite thread for each migration to perform.
         *
         * Upon completion, `callback` will be executed and it must call
         * `gom_repository_migrate_finish()`.
         * @param version The version to migrate to.
         * @param migrator A function to perform the migrations.
         */
        migrate_async(version: number, migrator: RepositoryMigrator): globalThis.Promise<boolean>;
        /**
         * Asynchronously performs a migration on the underlying database. This will
         * call `migrator` from the SQLite thread for each migration to perform.
         *
         * Upon completion, `callback` will be executed and it must call
         * `gom_repository_migrate_finish()`.
         * @param version The version to migrate to.
         * @param migrator A function to perform the migrations.
         * @param callback A callback to execute upon completion.
         */
        migrate_async(
            version: number,
            migrator: RepositoryMigrator,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously performs a migration on the underlying database. This will
         * call `migrator` from the SQLite thread for each migration to perform.
         *
         * Upon completion, `callback` will be executed and it must call
         * `gom_repository_migrate_finish()`.
         * @param version The version to migrate to.
         * @param migrator A function to perform the migrations.
         * @param callback A callback to execute upon completion.
         */
        migrate_async(
            version: number,
            migrator: RepositoryMigrator,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        migrate_finish(result: Gio.AsyncResult): boolean;
        /**
         * Performs a migration on the underlying database. This will
         * call `migrator` from the SQLite thread for each migration to perform.
         * @param version The version to migrate to.
         * @param migrator A function to perform the migrations.
         * @returns `TRUE` in case of success.
         */
        migrate_sync(version: number, migrator: RepositoryMigrator): boolean;
    }

    namespace Resource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::repository': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            repository: Repository;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Resource extends GObject.Object {
        static $gtype: GObject.GType<Resource>;

        // Properties

        get repository(): Repository;
        set repository(val: Repository);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Resource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Resource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Resource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Resource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Resource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Resource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static from_bytes_func_quark(): GLib.Quark;
        static new_in_version_quark(): GLib.Quark;
        static not_mapped_quark(): GLib.Quark;
        static notnull(): GLib.Quark;
        static ref_property_name(): GLib.Quark;
        static ref_table_class(): GLib.Quark;
        static to_bytes_func_quark(): GLib.Quark;
        static unique(): GLib.Quark;
        /**
         * @param property_name
         */
        static set_notnull(property_name: string): void;
        /**
         * @param primary_key
         */
        static set_primary_key(primary_key: string): void;
        /**
         * @param property_name
         * @param from_bytes_func
         */
        static set_property_from_bytes(property_name: string, from_bytes_func: ResourceFromBytesFunc): void;
        /**
         * @param property_name
         * @param version
         */
        static set_property_new_in_version(property_name: string, version: number): void;
        /**
         * @param property_name
         * @param is_mapped
         */
        static set_property_set_mapped(property_name: string, is_mapped: boolean): void;
        /**
         * @param property_name
         * @param to_bytes_func
         */
        static set_property_to_bytes(property_name: string, to_bytes_func: ResourceToBytesFunc): void;
        /**
         * @param property_name
         * @param ref_table_name
         * @param ref_property_name
         */
        static set_reference(property_name: string, ref_table_name: string, ref_property_name: string): void;
        /**
         * @param table
         */
        static set_table(table: string): void;
        /**
         * @param property_name
         */
        static set_unique(property_name: string): void;

        // Methods

        delete_async(): globalThis.Promise<boolean>;
        /**
         * @param callback
         */
        delete_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param callback
         */
        delete_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        delete_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously deletes a resource. This may only be called from inside a
         * callback to `gom_adapter_queue_write()`.
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        delete_sync(): boolean;
        /**
         * @param resource_type
         * @param m2m_table
         * @param filter
         */
        fetch_m2m_async(
            resource_type: GObject.GType,
            m2m_table: string,
            filter: Filter,
        ): globalThis.Promise<ResourceGroup>;
        /**
         * @param resource_type
         * @param m2m_table
         * @param filter
         * @param callback
         */
        fetch_m2m_async(
            resource_type: GObject.GType,
            m2m_table: string,
            filter: Filter,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param resource_type
         * @param m2m_table
         * @param filter
         * @param callback
         */
        fetch_m2m_async(
            resource_type: GObject.GType,
            m2m_table: string,
            filter: Filter,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<ResourceGroup> | void;
        /**
         * Completes the asynchronous request to fetch a group of resources that
         * are related to the resource through a many-to-many table.
         * @param result A {@link Gio.AsyncResult}.
         * @returns A {@link Gom.ResourceGroup}.
         */
        fetch_m2m_finish(result: Gio.AsyncResult): ResourceGroup;
        save_async(): globalThis.Promise<boolean>;
        /**
         * @param callback
         */
        save_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param callback
         */
        save_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * @returns `true` if successful; otherwise `false`.
         */
        save_sync(): boolean;
    }

    namespace ResourceGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::count': (pspec: GObject.ParamSpec) => void;
            'notify::filter': (pspec: GObject.ParamSpec) => void;
            'notify::is-writable': (pspec: GObject.ParamSpec) => void;
            'notify::m2m-table': (pspec: GObject.ParamSpec) => void;
            'notify::m2m-type': (pspec: GObject.ParamSpec) => void;
            'notify::repository': (pspec: GObject.ParamSpec) => void;
            'notify::resource-type': (pspec: GObject.ParamSpec) => void;
            'notify::sorting': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            count: number;
            filter: Filter;
            is_writable: boolean;
            isWritable: boolean;
            m2m_table: string;
            m2mTable: string;
            m2m_type: GObject.GTypeInput;
            m2mType: GObject.GTypeInput;
            repository: Repository;
            resource_type: GObject.GTypeInput;
            resourceType: GObject.GTypeInput;
            sorting: Sorting;
        }
    }

    /**
     * @gir-type Class
     */
    class ResourceGroup extends GObject.Object {
        static $gtype: GObject.GType<ResourceGroup>;

        // Properties

        /**
         * @construct-only
         */
        get count(): number;
        /**
         * @construct-only
         */
        get filter(): Filter;
        /**
         * @construct-only
         */
        get is_writable(): boolean;
        /**
         * @construct-only
         */
        get isWritable(): boolean;
        /**
         * @construct-only
         */
        get m2m_table(): string;
        /**
         * @construct-only
         */
        get m2mTable(): string;
        /**
         * @construct-only
         */
        get m2m_type(): GObject.GType;
        /**
         * @construct-only
         */
        get m2mType(): GObject.GType;
        /**
         * @construct-only
         */
        get repository(): Repository;
        /**
         * @construct-only
         */
        get resource_type(): GObject.GType;
        /**
         * @construct-only
         */
        get resourceType(): GObject.GType;
        /**
         * @construct-only
         */
        get sorting(): Sorting;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResourceGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ResourceGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](repository: Repository): ResourceGroup;

        // Signals

        /** @signal */
        connect<K extends keyof ResourceGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ResourceGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ResourceGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ResourceGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param resource
         */
        append(resource: Resource): boolean;
        delete_async(): globalThis.Promise<boolean>;
        /**
         * @param callback
         */
        delete_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param callback
         */
        delete_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        delete_finish(result: Gio.AsyncResult): boolean;
        delete_sync(): boolean;
        /**
         * @param index_
         * @param count
         */
        fetch_async(index_: number, count: number): globalThis.Promise<boolean>;
        /**
         * @param index_
         * @param count
         * @param callback
         */
        fetch_async(index_: number, count: number, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param index_
         * @param count
         * @param callback
         */
        fetch_async(
            index_: number,
            count: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        fetch_finish(result: Gio.AsyncResult): boolean;
        /**
         * Fetches a sequence of resources from the group synchronously. This must
         * be called from an adapter read callback using `gom_adapter_queue_read()`.
         * @param index_ The first index to fetch.
         * @param count The number of indexes to fetch.
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        fetch_sync(index_: number, count: number): boolean;
        get_count(): number;
        /**
         * Fetches the resource at `index_`. You must have loaded that resource by
         * calling `gom_resource_group_fetch_async()` with a range inclusive of the
         * index.
         * @param index_ The index of the resource.
         * @returns A {@link Gom.Resource}.
         */
        get_index(index_: number): Resource;
        get_m2m_table(): string;
        write_async(): globalThis.Promise<boolean>;
        /**
         * @param callback
         */
        write_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param callback
         */
        write_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        write_finish(result: Gio.AsyncResult): boolean;
        write_sync(): boolean;
    }

    namespace Sorting {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Sorting extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Sorting>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Sorting.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Sorting.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Sorting.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sorting.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Sorting.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sorting.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Sorting.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Sorting.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new ORDER BY clause to the sorting object.
         *
         * This allows chaining ORDER BY clauses, adding them one at a time, rather
         * than passing them all to the constructor.
         *
         * Example:
         *
         * ```c
         *     GomSorting *sorting = g_object_new (GOM_TYPE_SORTING, NULL);
         *     gom_sorting_add (sorting, EPISODE_TYPE_RESOURCE, "season-number",
         *                      GOM_SORTING_DESCENDING);
         *     gom_sorting_add (sorting, EPISODE_TYPE_RESOURCE, "episode-number",
         *                      GOM_SORTING_ASCENDING);
         * ```
         *
         *
         * The above example maps to the following SQL statement:
         *
         * ```sql
         *     ORDER BY 'episodes'.'season-number' DESC, 'episodes'.'episode-number'
         * ```
         *
         * @param resource_type A subclass of {@link Gom.Resource}.
         * @param property_name A string.
         * @param sorting_mode A {@link Gom.SortingMode}.
         */
        add(resource_type: GObject.GType, property_name: string, sorting_mode: SortingMode | null): void;
        /**
         * @param table_map A {@link GLib.HashTable}.
         * @returns A string containing the SQL query corresponding                           to this `sorting`.
         */
        get_sql(table_map: { [key: string]: any } | GLib.HashTable<any, any>): string;
    }

    /**
     * @gir-type Alias
     */
    type AdapterClass = typeof Adapter;
    /**
     * @gir-type Struct
     */
    abstract class AdapterPrivate {
        static $gtype: GObject.GType<AdapterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CommandBuilderClass = typeof CommandBuilder;
    /**
     * @gir-type Struct
     */
    abstract class CommandBuilderPrivate {
        static $gtype: GObject.GType<CommandBuilderPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CommandClass = typeof Command;
    /**
     * @gir-type Struct
     */
    abstract class CommandPrivate {
        static $gtype: GObject.GType<CommandPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CursorClass = typeof Cursor;
    /**
     * @gir-type Struct
     */
    abstract class CursorPrivate {
        static $gtype: GObject.GType<CursorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FilterClass = typeof Filter;
    /**
     * @gir-type Struct
     */
    abstract class FilterPrivate {
        static $gtype: GObject.GType<FilterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RepositoryClass = typeof Repository;
    /**
     * @gir-type Struct
     */
    abstract class RepositoryPrivate {
        static $gtype: GObject.GType<RepositoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ResourceClass = typeof Resource;
    /**
     * @gir-type Alias
     */
    type ResourceGroupClass = typeof ResourceGroup;
    /**
     * @gir-type Struct
     */
    abstract class ResourceGroupPrivate {
        static $gtype: GObject.GType<ResourceGroupPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class ResourcePrivate {
        static $gtype: GObject.GType<ResourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SortingClass = typeof Sorting;
    /**
     * @gir-type Struct
     */
    abstract class SortingPrivate {
        static $gtype: GObject.GType<SortingPrivate>;
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

export default Gom;

// END
