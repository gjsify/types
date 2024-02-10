/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gom-1.0-ambient.d.ts';
import './gom-1.0-import.d.ts';
/**
 * Gom-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gom {
    class Error extends GLib.Error {
        // Own fields of Gom-1.0.Error

        ADAPTER_OPEN: number;
        COMMAND_NO_SQL: number;
        COMMAND_SQLITE: number;
        REPOSITORY_EMPTY_RESULT: number;
        RESOURCE_CURSOR: number;

        // Constructors of Gom-1.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of Gom-1.0.Error

        static quark(): GLib.Quark;
    }

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
    enum SortingMode {
        ASCENDING,
        DESCENDING,
    }
    function error_quark(): GLib.Quark;
    interface AdapterCallback {
        (adapter: Adapter): void;
    }
    interface RepositoryMigrator {
        (repository: Repository, adapter: Adapter, version: number): boolean;
    }
    interface ResourceFromBytesFunc {
        (bytes: GLib.Bytes, value: GObject.Value): void;
    }
    interface ResourceToBytesFunc {
        (value: GObject.Value): GLib.Bytes;
    }
    module Adapter {
        // Constructor properties interface
    }

    class Adapter extends GObject.Object {
        // Constructors of Gom-1.0.Adapter

        static ['new'](): Adapter;

        // Owm methods of Gom-1.0.Adapter

        close_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        close_finish(result: Gio.AsyncResult): boolean;
        close_sync(): boolean;
        /**
         * This is a helper function to make simple execution of SQL easier.
         * It is primarily meant for things like "BEGIN;" and "COMMIT;".
         *
         * This MUST be called from within a write transaction using
         * gom_adapter_queue_write().
         * @param sql SQL to execute.
         * @returns %TRUE if successful;
         */
        execute_sql(sql: string): boolean;
        /**
         * Fetches the sqlite3 structure used by the adapter.
         * @returns A handle to the #sqlite3 structure. Side effects: None.
         */
        get_handle(): any | null;
        /**
         * Opens the database pointed to by `uri`. `uri` can be in any format understood
         * by SQLite. See &lt;ulink type="http" url="http://www.sqlite.org/c3ref/open.html"&gt;http://www.sqlite.org/c3ref/open.html&lt;/ulink&gt;
         * for details.
         * @param uri a URI understood by SQLite
         * @param callback the function to call when the operation finished, or %NULL
         */
        open_async(uri: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        open_finish(result: Gio.AsyncResult): boolean;
        open_sync(uri: string): boolean;
        /**
         * Queues a callback to be executed within the SQLite thread. The callback is
         * expected to perform reads only.
         * @param callback A callback to execute read queries on SQLite.
         */
        queue_read(callback: AdapterCallback): void;
        /**
         * Queues a callback to be executed within the SQLite thwrite. The callback can
         * perform reads and writes.
         * @param callback A callback to execute write queries on SQLite.
         */
        queue_write(callback: AdapterCallback): void;
    }

    module Command {
        // Constructor properties interface
    }

    class Command extends GObject.Object {
        // Own properties of Gom-1.0.Command

        adapter: Adapter;
        sql: string;

        // Owm methods of Gom-1.0.Command

        execute(cursor: Cursor): boolean;
        get_param_index(param_name: string): number;
        reset(): void;
        set_param(param: number, value: GObject.Value): void;
        set_param_double(param: number, value: number): void;
        set_param_float(param: number, value: number): void;
        set_param_int(param: number, value: number): void;
        set_param_int64(param: number, value: number): void;
        set_param_string(param: number, value: string): void;
        set_param_uint(param: number, value: number): void;
        set_param_uint64(param: number, value: number): void;
        set_sql(sql: string): void;
    }

    module CommandBuilder {
        // Constructor properties interface
    }

    class CommandBuilder extends GObject.Object {
        // Own properties of Gom-1.0.CommandBuilder

        adapter: Adapter;
        filter: Filter;
        limit: number;
        m2m_table: string;
        m2mTable: string;
        m2m_type: GObject.GType;
        m2mType: GObject.GType;
        offset: number;
        resource_type: GObject.GType;
        resourceType: GObject.GType;
        sorting: Sorting;

        // Owm methods of Gom-1.0.CommandBuilder

        /**
         * Builds a new command that will count the number of rows matching the
         * current query parameters.
         * @returns A #GomCommand.
         */
        build_count(): Command;
        /**
         * Builds a list of #GomCommand to update the table for the
         * resource_type associated with `builder` up to `version`.
         * @param version the version of the database.
         * @returns A #GList of #GomCommand.
         */
        build_create(version: number): Command[];
        /**
         * Builds a new #GomCommand to delete the rows matching the current query
         * params.
         * @returns A #GomCommand.
         */
        build_delete(): Command;
        /**
         * Builds a new #GomCommand that will insert the parameters of the resource
         * into the underlying database.
         * @param resource a #GomResource
         * @returns A #GomCommand.
         */
        build_insert(resource: Resource): Command;
        /**
         * Builds a #GomCommand that will select all the rows matching the current
         * query params.
         * @returns A #GomCommand.
         */
        build_select(): Command;
        /**
         * Builds a new #GomCommand that will update the contents stored for `resource`
         * in the underlying database.
         * @param resource a #GomResource
         * @returns A #GomCommand.
         */
        build_update(resource: Resource): Command;
    }

    module Cursor {
        // Constructor properties interface
    }

    class Cursor extends GObject.Object {
        // Own properties of Gom-1.0.Cursor

        statement: any;

        // Owm methods of Gom-1.0.Cursor

        get_column(column: number, value: GObject.Value): void;
        get_column_boolean(column: number): boolean;
        get_column_double(column: number): number;
        get_column_float(column: number): number;
        get_column_int(column: number): number;
        get_column_int64(column: number): number;
        get_column_name(column: number): string;
        get_column_string(column: number): string;
        get_column_uint(column: number): number;
        get_column_uint64(column: number): number;
        get_n_columns(): number;
        next(): boolean;
    }

    module Filter {
        // Constructor properties interface
    }

    class Filter extends GObject.InitiallyUnowned {
        // Own properties of Gom-1.0.Filter

        mode: FilterMode;
        sql: string;

        // Constructors of Gom-1.0.Filter

        static new_and(left: Filter, right: Filter): Filter;

        static new_and_fullv(filter_array: Filter): Filter;

        static new_eq(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_glob(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_gt(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_gte(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_is_not_null(resource_type: GObject.GType, property_name: string): Filter;

        static new_is_null(resource_type: GObject.GType, property_name: string): Filter;

        static new_like(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_lt(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_lte(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_neq(resource_type: GObject.GType, property_name: string, value: GObject.Value): Filter;

        static new_or(left: Filter, right: Filter): Filter;

        static new_or_fullv(filter_array: Filter): Filter;

        static new_sql(sql: string, values: GObject.Value[]): Filter;

        // Owm methods of Gom-1.0.Filter

        get_sql(table_map: GLib.HashTable<any, any>): string;
        /**
         * Fetches the list of values that should be applied in order when building
         * the #GomCommand.
         * @returns An array of values for the SQL.
         */
        get_values(): GObject.Value[];
    }

    module Repository {
        // Constructor properties interface
    }

    class Repository extends GObject.Object {
        // Own properties of Gom-1.0.Repository

        adapter: Adapter;

        // Constructors of Gom-1.0.Repository

        static ['new'](adapter: Adapter): Repository;

        // Owm methods of Gom-1.0.Repository

        /**
         * Performs an automatic migration on the underlying database. See
         * gom_repository_automatic_migrate_sync() for details.
         *
         * Upon completion, `callback` will be executed and it must call
         * gom_repository_automatic_migrate_finish().
         * @param version The version to migrate to.
         * @param object_types a #GList of #GType
         * @param callback A callback to execute upon completion.
         */
        automatic_migrate_async(
            version: number,
            object_types: GObject.GType[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        automatic_migrate_finish(result: Gio.AsyncResult): boolean;
        /**
         * Performs an automatic migration on the underlying database. For
         * each of the #GType passed in `object_types,` the table will be
         * created if necessary, and each of the columns corresponding to
         * properties will be added if needed.
         * @param version The version to migrate to.
         * @param object_types a #GList of #GType
         * @returns #TRUE in case of success.
         */
        automatic_migrate_sync(version: number, object_types: GObject.GType[]): boolean;
        find_async(resource_type: GObject.GType, filter: Filter, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes an asynchronous request to fetch a group of resources.
         * @param result A #GAsyncResult.
         * @returns A #GomResourceGroup.
         */
        find_finish(result: Gio.AsyncResult): ResourceGroup;
        find_one_async(
            resource_type: GObject.GType,
            filter: Filter,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to find a single resource in the
         * repository. See gom_repository_find_one_async() for more info.
         * @param result A #GAsyncResult.
         * @returns A #GomResource if successful, otherwise %NULL.
         */
        find_one_finish(result: Gio.AsyncResult): Resource;
        /**
         * Synchronous version of gom_repository_find_async().
         * @param resource_type A #GType of the resource to lookup.
         * @param filter A #GomFilter to apply to your search.
         * @returns A #GomResource or %NULL.
         */
        find_one_sync(resource_type: GObject.GType, filter?: Filter | null): Resource;
        find_sorted_async(
            resource_type: GObject.GType,
            filter: Filter,
            sorting: Sorting,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Synchronously queries the #GomRepository for objects matching the
         * requested query. This must only be run from a callback provided to
         * gom_adapter_queue_read().
         * @param resource_type The #GType of the resources to query.
         * @param filter An optional filter for the query.
         * @param sorting An optional #GomSorting to order the query                              results.
         * @returns A #GomResourceGroup or %NULL.
         */
        find_sorted_sync(resource_type: GObject.GType, filter?: Filter | null, sorting?: Sorting | null): ResourceGroup;
        /**
         * Synchronously queries the #GomRepository for objects matching the
         * requested query. This must only be run from a callback provided to
         * gom_adapter_queue_read().
         * @param resource_type The #GType of the resources to query.
         * @param filter An optional filter for the query.
         * @returns A #GomResourceGroup or %NULL.
         */
        find_sync(resource_type: GObject.GType, filter?: Filter | null): ResourceGroup;
        /**
         * Fetches the underlying adapter.
         * @returns A #GomAdapter.
         */
        get_adapter(): Adapter;
        /**
         * Asynchronously performs a migration on the underlying database. This will
         * call `migrator` from the SQLite thread for each migration to perform.
         *
         * Upon completion, `callback` will be executed and it must call
         * gom_repository_migrate_finish().
         * @param version The version to migrate to.
         * @param migrator A function to perform the migrations.
         * @param callback A callback to execute upon completion.
         */
        migrate_async(
            version: number,
            migrator: RepositoryMigrator,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        migrate_finish(result: Gio.AsyncResult): boolean;
        /**
         * Performs a migration on the underlying database. This will
         * call `migrator` from the SQLite thread for each migration to perform.
         * @param version The version to migrate to.
         * @param migrator A function to perform the migrations.
         * @returns #TRUE in case of success.
         */
        migrate_sync(version: number, migrator: RepositoryMigrator): boolean;
    }

    module Resource {
        // Constructor properties interface
    }

    abstract class Resource extends GObject.Object {
        // Own properties of Gom-1.0.Resource

        repository: Repository;

        // Owm methods of Gom-1.0.Resource

        static from_bytes_func_quark(): GLib.Quark;
        static new_in_version_quark(): GLib.Quark;
        static not_mapped_quark(): GLib.Quark;
        static notnull(): GLib.Quark;
        static ref_property_name(): GLib.Quark;
        static ref_table_class(): GLib.Quark;
        static to_bytes_func_quark(): GLib.Quark;
        static unique(): GLib.Quark;
        static set_notnull(property_name: string): void;
        static set_primary_key(primary_key: string): void;
        static set_property_from_bytes(property_name: string, from_bytes_func: ResourceFromBytesFunc): void;
        static set_property_new_in_version(property_name: string, version: number): void;
        static set_property_set_mapped(property_name: string, is_mapped: boolean): void;
        static set_property_to_bytes(property_name: string, to_bytes_func: ResourceToBytesFunc): void;
        static set_reference(property_name: string, ref_table_name: string, ref_property_name: string): void;
        static set_table(table: string): void;
        static set_unique(property_name: string): void;

        // Owm methods of Gom-1.0.Resource

        delete_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        delete_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously deletes a resource. This may only be called from inside a
         * callback to gom_adapter_queue_write().
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        delete_sync(): boolean;
        fetch_m2m_async(
            resource_type: GObject.GType,
            m2m_table: string,
            filter: Filter,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes the asynchronous request to fetch a group of resources that
         * are related to the resource through a many-to-many table.
         * @param result A #GAsyncResult.
         * @returns A #GomResourceGroup.
         */
        fetch_m2m_finish(result: Gio.AsyncResult): ResourceGroup;
        save_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        save_finish(result: Gio.AsyncResult): boolean;
        save_sync(): boolean;
    }

    module ResourceGroup {
        // Constructor properties interface
    }

    class ResourceGroup extends GObject.Object {
        // Own properties of Gom-1.0.ResourceGroup

        count: number;
        filter: Filter;
        is_writable: boolean;
        isWritable: boolean;
        m2m_table: string;
        m2mTable: string;
        m2m_type: GObject.GType;
        m2mType: GObject.GType;
        repository: Repository;
        resource_type: GObject.GType;
        resourceType: GObject.GType;
        sorting: Sorting;

        // Constructors of Gom-1.0.ResourceGroup

        static ['new'](repository: Repository): ResourceGroup;

        // Owm methods of Gom-1.0.ResourceGroup

        append(resource: Resource): boolean;
        delete_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        delete_finish(result: Gio.AsyncResult): boolean;
        delete_sync(): boolean;
        fetch_async(index_: number, count: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        fetch_finish(result: Gio.AsyncResult): boolean;
        /**
         * Fetches a sequence of resources from the group synchronously. This must
         * be called from an adapter read callback using gom_adapter_queue_read().
         * @param index_ The first index to fetch.
         * @param count The number of indexes to fetch.
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        fetch_sync(index_: number, count: number): boolean;
        get_count(): number;
        /**
         * Fetches the resource at `index_`. You must have loaded that resource by
         * calling gom_resource_group_fetch_async() with a range inclusive of the
         * index.
         * @param index_ The index of the resource.
         * @returns A #GomResource.
         */
        get_index(index_: number): Resource;
        get_m2m_table(): string;
        write_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        write_finish(result: Gio.AsyncResult): boolean;
        write_sync(): boolean;
    }

    module Sorting {
        // Constructor properties interface
    }

    class Sorting extends GObject.InitiallyUnowned {
        // Owm methods of Gom-1.0.Sorting

        /**
         * Add a new ORDER BY clause to the sorting object.
         *
         * This allows chaining ORDER BY clauses, adding them one at a time, rather
         * than passing them all to the constructor.
         *
         * Example:
         *
         * ```&lt;!-- language="C" --&gt;
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
         * ```&lt;!-- language="SQL" --&gt;
         *     ORDER BY 'episodes'.'season-number' DESC, 'episodes'.'episode-number'
         * ```
         *
         * @param resource_type A subclass of #GomResource.
         * @param property_name A string.
         * @param sorting_mode A #GomSortingMode.
         */
        add(resource_type: GObject.GType, property_name: string, sorting_mode: SortingMode): void;
        get_sql(table_map: GLib.HashTable<any, any>): string;
    }

    class AdapterClass {}

    class AdapterPrivate {}

    class CommandBuilderClass {}

    class CommandBuilderPrivate {}

    class CommandClass {}

    class CommandPrivate {}

    class CursorClass {}

    class CursorPrivate {}

    class FilterClass {}

    class FilterPrivate {}

    class RepositoryClass {}

    class RepositoryPrivate {}

    class ResourceClass {
        // Own fields of Gom-1.0.ResourceClass

        primary_key: number[];
        table: number[];

        // Owm methods of Gom-1.0.ResourceClass

        set_notnull(property_name: string): void;
        set_primary_key(primary_key: string): void;
        set_property_from_bytes(property_name: string, from_bytes_func: ResourceFromBytesFunc): void;
        set_property_new_in_version(property_name: string, version: number): void;
        set_property_set_mapped(property_name: string, is_mapped: boolean): void;
        set_property_to_bytes(property_name: string, to_bytes_func: ResourceToBytesFunc): void;
        set_reference(property_name: string, ref_table_name: string, ref_property_name: string): void;
        set_table(table: string): void;
        set_unique(property_name: string): void;
    }

    class ResourceGroupClass {}

    class ResourceGroupPrivate {}

    class ResourcePrivate {}

    class SortingClass {}

    class SortingPrivate {}

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
