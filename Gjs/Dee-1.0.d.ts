// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Dee-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Dee {

/**
 * Error codes for the ICU extension to Dee. These codes will be set when the
 * error domain is #DEE_ICU_ERROR.
 */
enum ICUError {
    /**
     * Error parsing a transliteration rule
     */
    BAD_RULE,
    /**
     * Error parsing a transliterator system id
     */
    BAD_ID,
    /**
     * The ICU subsystem returned an error that is not
     *                         handled in Dee
     */
    UNKNOWN,
}
/**
 * Enumeration defining behavior of the model with regards to writes from
 * other peers in the swarm.
 */
enum SharedModelAccessMode {
    WORLD_WRITABLE,
    LEADER_WRITABLE,
}
enum SharedModelError {
    SHARED_MODEL_ERROR_LEADER_INVALIDATED,
}
/**
 * Enumeration defining flushing behavior of a shared model.
 */
enum SharedModelFlushMode {
    AUTOMATIC,
    MANUAL,
}
/**
 * Error codes for the #DeeTransaction class. These codes will be set when the
 * error domain is #DEE_TRANSACTION_ERROR.
 */
enum TransactionError {
    /**
     * The target model has been
     *   modified while the transaction was open.
     */
    CONCURRENT_MODIFICATION,
    /**
     * Raised when someone tries to commit a
     *   transaction that has already been committed
     */
    COMMITTED,
}
/**
 * Flags passed to dee_index_lookup() to control how matching is done.
 * Note that it is not required that index backends support more than just
 * #DEE_TERM_MATCH_EXACT.
 * 
 * You can query for the supported flags with
 * dee_index_get_supported_term_match_flags().
 * @bitfield 
 */
enum TermMatchFlag {
    /**
     * Match terms byte for byte as specified in the
     *                        query string
     */
    EXACT,
    /**
     * Match if the indexed term begins with the byte string
     *                         being queried by. This is also sometimes known as
     *                         truncated- or wildcard queries
     */
    PREFIX,
}
const PEER_DBUS_IFACE: string
/**
 * String constant defining the name of the DBus Model interface.
 */
const SEQUENCE_MODEL_DBUS_IFACE: string
/**
 * String constant defining the name of the DBus Model interface.
 */
const SHARED_MODEL_DBUS_IFACE: string
/**
 * Create a new #DeeFilter with the given parameters. This call will zero
 * the `out_filter` struct.
 * @param map_func The #DeeFilterMapFunc to use for the filter
 * @param map_notify The #DeeFilterMapNotify to use for the filter
 */
function filter_new(map_func: FilterMapFunc, map_notify: FilterMapNotify): /* out_filter */ Filter
/**
 * Create a #DeeFilter that takes string values from a column in the model
 * and builds a #DeeFilterModel with the rows sorted according to the
 * collation rules of the current locale.
 * @param column The index of a column containing the strings to sort after
 */
function filter_new_collator(column: number): /* out_filter */ Filter
/**
 * Create a #DeeFilter that takes string values from a column in the model
 * and builds a #DeeFilterModel with the rows sorted descending according to the
 * collation rules of the current locale.
 * @param column The index of a column containing the strings to sort after
 */
function filter_new_collator_desc(column: number): /* out_filter */ Filter
/**
 * Create a #DeeFilter that only includes rows from the original model
 * which match a variant value in a given column. A #DeeFilterModel
 * created with this filter will be ordered in accordance with its parent model.
 * 
 * This method will work on any column, disregarding its schema, since the
 * value comparison is done using g_variant_equal(). This means you can use
 * this filter as a convenient fallback when there is no predefined filter
 * for your column type if raw performance is not paramount.
 * @param column The index of a column containing the string to match
 * @param value A #GVariant value columns must match exactly.         The matching semantics are those of g_variant_equal(). If `value`         is floating the ownership will be transfered to the filter
 */
function filter_new_for_any_column(column: number, value: GLib.Variant): /* out_filter */ Filter
/**
 * Create a #DeeFilter that only includes rows from the original model
 * which has an exact match on some string column. A #DeeFilterModel created
 * with this filter will be ordered in accordance with its parent model.
 * @param column The index of a column containing the string key to match
 * @param key 
 */
function filter_new_for_key_column(column: number, key: string): /* out_filter */ Filter
/**
 * Create a #DeeFilter that only includes rows from the original model
 * which match a regular expression on some string column. A #DeeFilterModel
 * created with this filter will be ordered in accordance with its parent model.
 * @param column The index of a column containing the string to match
 * @param regex The regular expression `column` must match
 */
function filter_new_regex(column: number, regex: GLib.Regex): /* out_filter */ Filter
/**
 * Create a new #DeeFilter sorting a model according to a #DeeCompareRowFunc.
 * @param cmp_row A #DeeCompareRowFunc to use for sorting
 */
function filter_new_sort(cmp_row: CompareRowFunc): /* out_filter */ Filter
function icu_error_quark(): GLib.Quark
/**
 * Create a new #DeeModelReader with the given parameters. This call will zero
 * the `out_reader` struct.
 * @param reader_func The #DeeModelReaderFunc to use for the reader
 */
function model_reader_new(reader_func: ModelReaderFunc): /* out_reader */ ModelReader
/**
 * A #DeeModelReader reading a %gint32 from a #DeeModel at a given column
 * @param column The column index to read a %gint32 from
 */
function model_reader_new_for_int32_column(column: number): /* out_reader */ ModelReader
/**
 * A #DeeModelReader reading a string from a #DeeModel at a given column
 * @param column The column index to read a string from
 */
function model_reader_new_for_string_column(column: number): /* out_reader */ ModelReader
/**
 * A #DeeModelReader reading a %guint32 from a #DeeModel at a given column
 * @param column The column index to read a %guint32 from
 */
function model_reader_new_for_uint32_column(column: number): /* out_reader */ ModelReader
/**
 * Get a pointer to the platform default #DeeResourceManager.
 */
function resource_manager_get_default(): ResourceManager
/**
 * Reconstruct a #DeeSerializable from #GVariant data. For this function
 * to work you need to register a parser with
 * dee_serializable_register_parser(). Any native Dee class will do so
 * automatically.
 * 
 * This method only works on data created with dee_serializable_serialize()
 * and <emphasis>not</emphasis> with data from dee_serializable_externalize().
 * 
 * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
 * it can be guaranteed that this function only returns %NULL in case there
 * is no known parser for `type` and #GVariant signature of `data`.
 * @param data The #GVariant data to parse. If this is a floating reference it will        be consumed
 * @param type The #GType of the class to instantiate from `data`
 */
function serializable_parse(data: GLib.Variant, type: GObject.GType): GObject.Object
/**
 * Reconstruct a #DeeSerializable from #GVariant data. For this function
 * to work you need to register a parser with
 * dee_serializable_register_parser(). Any native Dee class will do so
 * automatically.
 * 
 * This method only works on data created with dee_serializable_externalize()
 * and <emphasis>not</emphasis> with data from  dee_serializable_serialize().
 * 
 * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
 * it can be guaranteed that this function only returns %NULL in case there
 * is no known parser for the #GType or #GVariant signature of `data`.
 * @param data The #GVariant data to parse
 */
function serializable_parse_external(data: GLib.Variant): GObject.Object
/**
 * A collator takes an input string, most often a term produced from a
 * #DeeAnalyzer, and outputs a collation key.
 * @callback 
 * @param input The string to produce a collation key for
 */
interface CollatorFunc {
    (input: string): string
}
/**
 * Compares `row1` and `row2`. Mainly used with dee_model_insert_sorted() and
 * dee_model_find_sorted().
 * @callback 
 * @param row1 The model being indexed
 * @param row2 The row to extract terms for
 */
interface CompareRowFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
/**
 * Compares `row1` and `row2`. Mainly used with
 * dee_model_insert_row_sorted_with_sizes() and
 * dee_model_find_row_sorted_with_sizes().
 * @callback 
 * @param row1 Row data
 * @param row2 Row data to compare with
 */
interface CompareRowSizedFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
/**
 * Function used to collect the rows from a model that should be included in
 * a #DeeFilterModel. To add rows to `filter_model` use the methods
 * dee_filter_model_append_iter(), dee_filter_model_prepend_iter(),
 * dee_filter_model_insert_iter(), and dee_filter_model_insert_iter_before().
 * 
 * The iteration over the original model is purposely left to the map func
 * in order to allow optimized iterations if the the caller has a priori
 * knowledge of the sorting and grouping of the data in the original model.
 * @callback 
 * @param orig_model The model containing the original data to filter
 * @param filter_model The model that will contain the filtered results. The                filter func must iterate over `orig_model` and add all relevant                rows to `filter_model`. This model is guaranteed to be empty                when the filter func is invoked
 */
interface FilterMapFunc {
    (orig_model: Model, filter_model: FilterModel): void
}
/**
 * Callback invoked when a row is added to `orig_model`. To add rows to
 * `filter_model` use the methods dee_filter_model_append_iter(),
 * dee_filter_model_prepend_iter(), dee_filter_model_insert_iter(),
 * and dee_filter_model_insert_iter_before().
 * @callback 
 * @param orig_model The model containing the added row
 * @param orig_iter A #DeeModelIter pointing to the new row in `orig_model`
 * @param filter_model The model that was also passed to the #DeeModelMapFunc                of the #DeeFilter this functions is a part of
 */
interface FilterMapNotify {
    (orig_model: Model, orig_iter: ModelIter, filter_model: FilterModel): boolean
}
/**
 * The signature of the function passed to dee_index_foreach().
 * 
 * Be cautious if you plan on modifying the rows in the model via the
 * DeeModelIter<!-- -->s you find. Your code may have to be reentrant since
 * the index may change in reaction to the changes in the model. It's not
 * impossible to do this in a non-broken manner, but it may likely require
 * you calling dee_model_freeze_signals() and dee_model_thaw_signals() at
 * strategic points.
 * @callback 
 * @param key A key in the index being traversed
 * @param rows A #DeeResultSet. Do not free or modify.
 */
interface IndexIterFunc {
    (key: string, rows: ResultSet): boolean
}
/**
 * Extracts a string from a row in a model.
 * @callback 
 * @param model The model being indexed
 * @param iter The row to extract terms for
 */
interface ModelReaderFunc {
    (model: Model, iter: ModelIter): string
}
interface SerializableParseFunc {
    (data: GLib.Variant): GObject.Object
}
/**
 * A term filter takes a list of terms and runs it through a filtering and/or
 * set of transformations and stores the output in a #DeeTermList.
 * 
 * You can register term filters on a #DeeAnalyzer with
 * dee_analyzer_add_term_filter().
 * @callback 
 * @param terms_in A #DeeTermList with the terms to filter
 * @param terms_out A #DeeTermList to write the filtered terms to
 */
interface TermFilterFunc {
    (terms_in: TermList, terms_out: TermList): void
}
interface Model_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changeset-finished`
 */
interface Model_ChangesetFinishedSignalCallback {
    ($obj: Model): void
}

/**
 * Signal callback interface for `changeset-started`
 */
interface Model_ChangesetStartedSignalCallback {
    ($obj: Model): void
}

/**
 * Signal callback interface for `row-added`
 */
interface Model_RowAddedSignalCallback {
    ($obj: Model, iter: ModelIter): void
}

/**
 * Signal callback interface for `row-changed`
 */
interface Model_RowChangedSignalCallback {
    ($obj: Model, iter: ModelIter): void
}

/**
 * Signal callback interface for `row-removed`
 */
interface Model_RowRemovedSignalCallback {
    ($obj: Model, iter: ModelIter): void
}

interface Model {

    // Owm methods of Dee-1.0.Dee.Model

    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param row_members An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    append_row(row_members: GLib.Variant[]): ModelIter
    /**
     * Notify listeners that the model is about to be changed, which means that
     * multiple row additions / changes / removals will follow.
     * The default implementation of this method will emit
     * the ::changeset-started signal.
     * 
     * It is not stricly necessary to enclose every change to a model
     * in a dee_model_begin_changeset() and dee_model_end_changeset() calls, but
     * doing so is highly recommended and allows implementing various optimizations.
     * 
     * The usual way to perform multiple changes to a model is as follows:
     * 
     * <programlisting>
     * void update_model (DeeModel *model)
     * {
     *   GVariant **added_row_data1 = ...;
     *   GVariant **added_row_data2 = ...;
     * 
     *   dee_model_begin_changeset (model);
     * 
     *   dee_model_remove (model, dee_model_get_first_iter (model));
     *   dee_model_append_row (model, added_row_data1);
     *   dee_model_append_row (model, added_row_data2);
     * 
     *   dee_model_end_changeset (model);
     * }
     * </programlisting>
     */
    begin_changeset(): void
    /**
     * Removes all rows in the model. Signals are emitted for each row in the model
     */
    clear(): void
    /**
     * This method is purely syntactic sugar for calling dee_model_set_tag() with
     * a `value` of %NULL. It's included in order to help developers write more
     * readable code.
     * @param iter The row to clear the tag from
     * @param tag The tag to clear from `iter`
     */
    clear_tag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    end_changeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param row_spec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmp_func Callback used for comparison or rows
     */
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    /**
     * Like dee_model_find_row_sorted(), but uses DeeCompareRowSizedFunc and
     * therefore doesn't cause trouble when used from introspected languages.
     * 
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() (or dee_model_insert_row_sorted_with_sizes())
     * to insert rows in the model.
     * @param row_spec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmp_func Callback used for comparison or rows
     */
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param column_name the column name to retrieve the index of
     */
    get_column_index(column_name: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    get_column_names(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param field_name name of vardict field to get schema of
     */
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    get_iter_at_row(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    get_last_iter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    get_n_columns(): number
    /**
     * Gets the number of rows in `self`
     */
    get_n_rows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    get_vardict_schema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmp_func Callback used for comparison or rows
     */
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmp_func Callback used for comparison or rows
     */
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    is_first(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    is_last(iter: ModelIter): boolean
    /**
     * Returns a #DeeModelIter that points to the next position in the model.
     * @param iter a #DeeModelIter
     */
    next(iter: ModelIter): ModelIter
    /**
     * Like dee_model_prepend() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prepend_row(row_members: GLib.Variant[]): ModelIter
    /**
     * Returns a #DeeModelIter that points to the previous position in the model.
     * @param iter a #DeeModelIter
     */
    prev(iter: ModelIter): ModelIter
    /**
     * Register a new tag on a #DeeModel. A <emphasis>tag</emphasis> is an extra
     * value attached to a given row on a model. The tags are invisible to all
     * that doesn't have the tag handle returned by this method. #DeeModel
     * implementations must ensure that dee_model_get_tag() is an O(1) operation.
     * 
     * Tags can be very useful in associating some extra data to a row in a model
     * and have that automatically synced when the model changes. If you're
     * writing a tiled view for a model you might want to tag each row with the
     * tile widget for that row. That way you have very convenient access to the
     * tile widget given any row in the model.
     * 
     * The private nature of tags and the fact that you can store arbitrary pointers
     * and binary data in them also means that they are not serialized if you
     * utilize a model implementation that exposes the #DeeSerializable interface.
     * @param tag_destroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    /**
     * Register schema for fields in a model containing column with variant
     * dictionary schema ('a{sv}').
     * The keys registered with this function can be later used
     * with dee_model_build_named_row() function, as well as
     * dee_model_get_value_by_name(). Note that it is possible to register
     * the same field name for multiple columns, in which case you need to use
     * fully-qualified "column_name::field" name in the calls to
     * dee_model_build_named_row() and dee_model_get_field_schema().
     * @param column the column index to register the schemas with
     * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
     */
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param column_names A list of column names terminated by a %NULL
     */
    set_column_names_full(column_names: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param row_members And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param column_schemas A list of #GVariant type strings terminated by a %NULL
     */
    set_schema_full(column_schemas: string[]): void
    /**
     * Set a tag on a row in a model. This function is guaranteed to be O(1).
     * See also dee_model_register_tag().
     * 
     * If `tag` is already set on this row the existing tag value will be destroyed
     * with the #GDestroyNotify passed to the dee_model_register_tag().
     * @param iter The row to set the tag on
     * @param tag The tag handle for the tag as obtained from dee_model_register_tag()
     * @param value The value to set for `tag`. Note that %NULL represents an unset tag
     */
    set_tag(iter: ModelIter, tag: ModelTag, value: object | null): void
    /**
     * Sets the data in `column` for the row `iter` points to, to `value`. The type
     * of `value` must be convertible to the type of the column.
     * 
     * When this method call completes the model will emit ::row-changed. You can
     * edit the model in place without triggering the change signals by calling
     * dee_model_set_value_silently().
     * @param iter a #DeeModelIter
     * @param column column number to set the value
     * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
     */
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void

    // Own virtual methods of Dee-1.0.Dee.Model

    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param row_members An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    /**
     * Notify listeners that the model is about to be changed, which means that
     * multiple row additions / changes / removals will follow.
     * The default implementation of this method will emit
     * the ::changeset-started signal.
     * 
     * It is not stricly necessary to enclose every change to a model
     * in a dee_model_begin_changeset() and dee_model_end_changeset() calls, but
     * doing so is highly recommended and allows implementing various optimizations.
     * 
     * The usual way to perform multiple changes to a model is as follows:
     * 
     * <programlisting>
     * void update_model (DeeModel *model)
     * {
     *   GVariant **added_row_data1 = ...;
     *   GVariant **added_row_data2 = ...;
     * 
     *   dee_model_begin_changeset (model);
     * 
     *   dee_model_remove (model, dee_model_get_first_iter (model));
     *   dee_model_append_row (model, added_row_data1);
     *   dee_model_append_row (model, added_row_data2);
     * 
     *   dee_model_end_changeset (model);
     * }
     * </programlisting>
     * @virtual 
     */
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    /**
     * Removes all rows in the model. Signals are emitted for each row in the model
     * @virtual 
     */
    vfunc_clear(): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     * @virtual 
     */
    vfunc_end_changeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @virtual 
     * @param row_spec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmp_func Callback used for comparison or rows
     */
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @virtual 
     * @param column_name the column name to retrieve the index of
     */
    vfunc_get_column_index(column_name: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     * @virtual 
     */
    vfunc_get_column_names(): string[]
    /**
     * Get the #GVariant signature of a column
     * @virtual 
     * @param column the column to get retrieve the #GVariant type string of
     */
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @virtual 
     * @param field_name name of vardict field to get schema of
     */
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     * @virtual 
     */
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @virtual 
     * @param row position of the row to retrieve
     */
    vfunc_get_iter_at_row(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     * @virtual 
     */
    vfunc_get_last_iter(): ModelIter
    /**
     * Gets the number of columns in `self`
     * @virtual 
     */
    vfunc_get_n_columns(): number
    /**
     * Gets the number of rows in `self`
     * @virtual 
     */
    vfunc_get_n_rows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @virtual 
     * @param iter The iter to get the position of
     */
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     * @virtual 
     */
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @virtual 
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @virtual 
     * @param num_column 
     */
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param iter An iter pointing to the row before which to insert the new one
     * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @virtual 
     * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmp_func Callback used for comparison or rows
     */
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    vfunc_is_first(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    vfunc_is_last(iter: ModelIter): boolean
    /**
     * Returns a #DeeModelIter that points to the next position in the model.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    vfunc_next(iter: ModelIter): ModelIter
    /**
     * Like dee_model_prepend() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    /**
     * Returns a #DeeModelIter that points to the previous position in the model.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    vfunc_prev(iter: ModelIter): ModelIter
    /**
     * Register a new tag on a #DeeModel. A <emphasis>tag</emphasis> is an extra
     * value attached to a given row on a model. The tags are invisible to all
     * that doesn't have the tag handle returned by this method. #DeeModel
     * implementations must ensure that dee_model_get_tag() is an O(1) operation.
     * 
     * Tags can be very useful in associating some extra data to a row in a model
     * and have that automatically synced when the model changes. If you're
     * writing a tiled view for a model you might want to tag each row with the
     * tile widget for that row. That way you have very convenient access to the
     * tile widget given any row in the model.
     * 
     * The private nature of tags and the fact that you can store arbitrary pointers
     * and binary data in them also means that they are not serialized if you
     * utilize a model implementation that exposes the #DeeSerializable interface.
     * @virtual 
     * @param tag_destroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    /**
     * Register schema for fields in a model containing column with variant
     * dictionary schema ('a{sv}').
     * The keys registered with this function can be later used
     * with dee_model_build_named_row() function, as well as
     * dee_model_get_value_by_name(). Note that it is possible to register
     * the same field name for multiple columns, in which case you need to use
     * fully-qualified "column_name::field" name in the calls to
     * dee_model_build_named_row() and dee_model_get_field_schema().
     * @virtual 
     * @param num_column 
     * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
     */
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @virtual 
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @virtual 
     * @param column_names A list of column names terminated by a %NULL
     */
    vfunc_set_column_names_full(column_names: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @virtual 
     * @param iter a #DeeModelIter
     * @param row_members And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @virtual 
     * @param column_schemas A list of #GVariant type strings terminated by a %NULL
     */
    vfunc_set_schema_full(column_schemas: string[]): void
    /**
     * Set a tag on a row in a model. This function is guaranteed to be O(1).
     * See also dee_model_register_tag().
     * 
     * If `tag` is already set on this row the existing tag value will be destroyed
     * with the #GDestroyNotify passed to the dee_model_register_tag().
     * @virtual 
     * @param iter The row to set the tag on
     * @param tag The tag handle for the tag as obtained from dee_model_register_tag()
     * @param value The value to set for `tag`. Note that %NULL represents an unset tag
     */
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value: object | null): void
    /**
     * Sets the data in `column` for the row `iter` points to, to `value`. The type
     * of `value` must be convertible to the type of the column.
     * 
     * When this method call completes the model will emit ::row-changed. You can
     * edit the model in place without triggering the change signals by calling
     * dee_model_set_value_silently().
     * @virtual 
     * @param iter a #DeeModelIter
     * @param column column number to set the value
     * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
     */
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void

    // Own signals of Dee-1.0.Dee.Model

    connect(sigName: "changeset-finished", callback: Model_ChangesetFinishedSignalCallback): number
    connect_after(sigName: "changeset-finished", callback: Model_ChangesetFinishedSignalCallback): number
    emit(sigName: "changeset-finished", ...args: any[]): void
    connect(sigName: "changeset-started", callback: Model_ChangesetStartedSignalCallback): number
    connect_after(sigName: "changeset-started", callback: Model_ChangesetStartedSignalCallback): number
    emit(sigName: "changeset-started", ...args: any[]): void
    connect(sigName: "row-added", callback: Model_RowAddedSignalCallback): number
    connect_after(sigName: "row-added", callback: Model_RowAddedSignalCallback): number
    emit(sigName: "row-added", iter: ModelIter, ...args: any[]): void
    connect(sigName: "row-changed", callback: Model_RowChangedSignalCallback): number
    connect_after(sigName: "row-changed", callback: Model_RowChangedSignalCallback): number
    emit(sigName: "row-changed", iter: ModelIter, ...args: any[]): void
    connect(sigName: "row-removed", callback: Model_RowRemovedSignalCallback): number
    connect_after(sigName: "row-removed", callback: Model_RowRemovedSignalCallback): number
    emit(sigName: "row-removed", iter: ModelIter, ...args: any[]): void

    // Class property signals of Dee-1.0.Dee.Model

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Model extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Model

    static name: string
    static $gtype: GObject.GType<Model>

    // Constructors of Dee-1.0.Dee.Model

    constructor(config?: Model_ConstructProps) 
    _init(config?: Model_ConstructProps): void
}

interface ResourceManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface ResourceManager {

    // Owm methods of Dee-1.0.Dee.ResourceManager

    /**
     * Load a resource from persistent storage. The loaded resource will be of the
     * same GType as when it was stored (provided that the same serialization and
     * parse functions are registered).
     * 
     * In case of an error the error will be in the #GFileError domain. Specifically
     * if there is no resource with the name `resource_name` the error code will
     * be #G_FILE_ERROR_NOENT.
     * 
     * Important note: This call may do blocking IO. The resource manager must
     * guarantee that this call is reasonably fast, like writing the externalized
     * resource to a file, but not blocking IO over a network socket.
     * @param resource_name The name of the resource to retrieve
     */
    load(resource_name: string): GObject.Object
    /**
     * Store a resource under a given name. The resource manager must guarantee
     * that the stored data survives system reboots and that you can recreate a
     * copy of `resource` by calling dee_resource_manager_load() using the
     * same `resource_name`.
     * 
     * Important note: This call may do blocking IO. The resource manager must
     * guarantee that this call is reasonably fast, like writing the externalized
     * resource to a file, but not blocking IO over a network socket.
     * @param resource A #DeeSerializable to store under `resource_name`
     * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
     */
    store(resource: Serializable, resource_name: string): boolean

    // Own virtual methods of Dee-1.0.Dee.ResourceManager

    /**
     * Load a resource from persistent storage. The loaded resource will be of the
     * same GType as when it was stored (provided that the same serialization and
     * parse functions are registered).
     * 
     * In case of an error the error will be in the #GFileError domain. Specifically
     * if there is no resource with the name `resource_name` the error code will
     * be #G_FILE_ERROR_NOENT.
     * 
     * Important note: This call may do blocking IO. The resource manager must
     * guarantee that this call is reasonably fast, like writing the externalized
     * resource to a file, but not blocking IO over a network socket.
     * @virtual 
     * @param resource_name The name of the resource to retrieve
     */
    vfunc_load(resource_name: string): GObject.Object
    /**
     * Store a resource under a given name. The resource manager must guarantee
     * that the stored data survives system reboots and that you can recreate a
     * copy of `resource` by calling dee_resource_manager_load() using the
     * same `resource_name`.
     * 
     * Important note: This call may do blocking IO. The resource manager must
     * guarantee that this call is reasonably fast, like writing the externalized
     * resource to a file, but not blocking IO over a network socket.
     * @virtual 
     * @param resource A #DeeSerializable to store under `resource_name`
     * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
     */
    vfunc_store(resource: Serializable, resource_name: string): boolean

    // Class property signals of Dee-1.0.Dee.ResourceManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResourceManager extends GObject.Object {

    // Own properties of Dee-1.0.Dee.ResourceManager

    static name: string
    static $gtype: GObject.GType<ResourceManager>

    // Constructors of Dee-1.0.Dee.ResourceManager

    constructor(config?: ResourceManager_ConstructProps) 
    _init(config?: ResourceManager_ConstructProps): void
    /**
     * Get a pointer to the platform default #DeeResourceManager.
     */
    static get_default(): ResourceManager
}

interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}

interface ResultSet {

    // Owm methods of Dee-1.0.Dee.ResultSet

    /**
     * Get the model associated with a result set
     */
    get_model(): Model
    /**
     * Get the number of #DeeModelIter<!-- -->s held in a #DeeResultSet.
     */
    get_n_rows(): number
    /**
     * Check if a call to dee_result_set_next() will succeed.
     */
    has_next(): boolean
    /**
     * Get the current row from the result set and advance the cursor.
     * To ensure that calls to this method will succeed you can call
     * dee_result_set_has_next().
     * 
     * To retrieve the current row without advancing the cursor call
     * dee_result_set_peek() in stead of this method.
     */
    next(): ModelIter
    /**
     * Get the row at the current cursor position.
     * 
     * To retrieve the current row and advance the cursor position call
     * dee_result_set_next() in stead of this method.
     */
    peek(): ModelIter
    /**
     * Set the cursor position. Following calls to dee_result_set_peek()
     * or dee_result_set_next() will read the row at position `pos`.
     * @param pos The position to seek to
     */
    seek(pos: number): void
    /**
     * Get the current position of the cursor.
     */
    tell(): number

    // Own virtual methods of Dee-1.0.Dee.ResultSet

    /**
     * Get the model associated with a result set
     * @virtual 
     */
    vfunc_get_model(): Model
    /**
     * Get the number of #DeeModelIter<!-- -->s held in a #DeeResultSet.
     * @virtual 
     */
    vfunc_get_n_rows(): number
    /**
     * Check if a call to dee_result_set_next() will succeed.
     * @virtual 
     */
    vfunc_has_next(): boolean
    /**
     * Get the current row from the result set and advance the cursor.
     * To ensure that calls to this method will succeed you can call
     * dee_result_set_has_next().
     * 
     * To retrieve the current row without advancing the cursor call
     * dee_result_set_peek() in stead of this method.
     * @virtual 
     */
    vfunc_next(): ModelIter
    /**
     * Get the row at the current cursor position.
     * 
     * To retrieve the current row and advance the cursor position call
     * dee_result_set_next() in stead of this method.
     * @virtual 
     */
    vfunc_peek(): ModelIter
    /**
     * Set the cursor position. Following calls to dee_result_set_peek()
     * or dee_result_set_next() will read the row at position `pos`.
     * @virtual 
     * @param pos The position to seek to
     */
    vfunc_seek(pos: number): void
    /**
     * Get the current position of the cursor.
     * @virtual 
     */
    vfunc_tell(): number

    // Class property signals of Dee-1.0.Dee.ResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResultSet extends GObject.Object {

    // Own properties of Dee-1.0.Dee.ResultSet

    static name: string
    static $gtype: GObject.GType<ResultSet>

    // Constructors of Dee-1.0.Dee.ResultSet

    constructor(config?: ResultSet_ConstructProps) 
    _init(config?: ResultSet_ConstructProps): void
}

interface Serializable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Serializable {

    // Owm methods of Dee-1.0.Dee.Serializable

    /**
     * Build an externalized form of `self` which can be used together with
     * dee_serializable_parse_external() to rebuild a copy of `self`.
     * 
     * It is important to note that the variant returned from this method does
     * not have the same type signature as returned from a call to
     * dee_serializable_serialize(). Externalization will wrap the serialized data
     * in a container format with versioning information and headers with type
     * information.
     */
    externalize(): GLib.Variant
    /**
     * Build a clean serialized representation of `self`. The signature of the
     * returned variant is entirely determined by the underlying implementation.
     * You can recreate a serialized instance by calling dee_serializable_parse()
     * provided that you know the correct #GType for the serialized instance.
     */
    serialize(): GLib.Variant

    // Own virtual methods of Dee-1.0.Dee.Serializable

    /**
     * Build a clean serialized representation of `self`. The signature of the
     * returned variant is entirely determined by the underlying implementation.
     * You can recreate a serialized instance by calling dee_serializable_parse()
     * provided that you know the correct #GType for the serialized instance.
     * @virtual 
     */
    vfunc_serialize(): GLib.Variant

    // Class property signals of Dee-1.0.Dee.Serializable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Serializable extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Serializable

    static name: string
    static $gtype: GObject.GType<Serializable>

    // Constructors of Dee-1.0.Dee.Serializable

    constructor(config?: Serializable_ConstructProps) 
    _init(config?: Serializable_ConstructProps): void
    /**
     * Reconstruct a #DeeSerializable from #GVariant data. For this function
     * to work you need to register a parser with
     * dee_serializable_register_parser(). Any native Dee class will do so
     * automatically.
     * 
     * This method only works on data created with dee_serializable_serialize()
     * and <emphasis>not</emphasis> with data from dee_serializable_externalize().
     * 
     * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
     * it can be guaranteed that this function only returns %NULL in case there
     * is no known parser for `type` and #GVariant signature of `data`.
     * @param data The #GVariant data to parse. If this is a floating reference it will        be consumed
     * @param type The #GType of the class to instantiate from `data`
     */
    static parse(data: GLib.Variant, type: GObject.GType): GObject.Object
    /**
     * Reconstruct a #DeeSerializable from #GVariant data. For this function
     * to work you need to register a parser with
     * dee_serializable_register_parser(). Any native Dee class will do so
     * automatically.
     * 
     * This method only works on data created with dee_serializable_externalize()
     * and <emphasis>not</emphasis> with data from  dee_serializable_serialize().
     * 
     * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
     * it can be guaranteed that this function only returns %NULL in case there
     * is no known parser for the #GType or #GVariant signature of `data`.
     * @param data The #GVariant data to parse
     */
    static parse_external(data: GLib.Variant): GObject.Object
}

interface Analyzer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Analyzer {

    // Owm methods of Dee-1.0.Dee.Analyzer

    /**
     * Register a #DeeTermFilterFunc to be called whenever dee_analyzer_analyze()
     * is called.
     * 
     * Term filters can be used to normalize, add, or remove terms from an input
     * data stream.
     * @param filter_func Function to call
     */
    add_term_filter(filter_func: TermFilterFunc): void
    /**
     * Extract terms and or collation keys from some input data (which is normally,
     * but not necessarily, a UTF-8 string).
     * 
     * The terms and corresponding collation keys will be written in order to the
     * provided #DeeTermList<!-- -->s.
     * 
     * Implementation notes for subclasses:
     * The analysis process must call dee_analyzer_tokenize() and run the tokens
     * through all term filters added with dee_analyzer_add_term_filter().
     * Collation keys must be generated with dee_analyzer_collate_key().
     * @param data The input data to analyze
     * @param terms_out A #DeeTermList to place the generated terms in.                           If %NULL to terms are generated
     * @param colkeys_out A #DeeTermList to place generated collation keys in.                             If %NULL no collation keys are generated
     */
    analyze(data: string, terms_out: TermList | null, colkeys_out: TermList | null): void
    /**
     * Compare collation keys generated by dee_analyzer_collate_key() with similar
     * semantics as strcmp(). See also dee_analyzer_collate_cmp_func() if you
     * need a version of this function that works as a #GCompareDataFunc.
     * 
     * The default implementation in #DeeAnalyzer just uses strcmp().
     * @param key1 The first collation key to compare
     * @param key2 The second collation key to compare
     */
    collate_cmp(key1: string, key2: string): number
    /**
     * Generate a collation key for a set of input data (usually a UTF-8 string
     * passed through tokenization and term filters of the analyzer).
     * 
     * The default implementation just calls g_strdup().
     * @param data The input data to generate a collation key for
     */
    collate_key(data: string): string
    /**
     * Tokenize some input data (which is normally, but not necessarily,
     * a UTF-8 string).
     * 
     * Tokenization splits the input data into constituents (in most cases words),
     * but does not run it through any of the term filters set for the analyzer.
     * It is undefined if the tokenization process itself does any normalization.
     * @param data The input data to analyze
     * @param terms_out A #DeeTermList to place the generated tokens in.
     */
    tokenize(data: string, terms_out: TermList): void

    // Own virtual methods of Dee-1.0.Dee.Analyzer

    /**
     * Register a #DeeTermFilterFunc to be called whenever dee_analyzer_analyze()
     * is called.
     * 
     * Term filters can be used to normalize, add, or remove terms from an input
     * data stream.
     * @virtual 
     * @param filter_func Function to call
     */
    vfunc_add_term_filter(filter_func: TermFilterFunc): void
    /**
     * Extract terms and or collation keys from some input data (which is normally,
     * but not necessarily, a UTF-8 string).
     * 
     * The terms and corresponding collation keys will be written in order to the
     * provided #DeeTermList<!-- -->s.
     * 
     * Implementation notes for subclasses:
     * The analysis process must call dee_analyzer_tokenize() and run the tokens
     * through all term filters added with dee_analyzer_add_term_filter().
     * Collation keys must be generated with dee_analyzer_collate_key().
     * @virtual 
     * @param data The input data to analyze
     * @param terms_out A #DeeTermList to place the generated terms in.                           If %NULL to terms are generated
     * @param colkeys_out A #DeeTermList to place generated collation keys in.                             If %NULL no collation keys are generated
     */
    vfunc_analyze(data: string, terms_out: TermList | null, colkeys_out: TermList | null): void
    /**
     * Compare collation keys generated by dee_analyzer_collate_key() with similar
     * semantics as strcmp(). See also dee_analyzer_collate_cmp_func() if you
     * need a version of this function that works as a #GCompareDataFunc.
     * 
     * The default implementation in #DeeAnalyzer just uses strcmp().
     * @virtual 
     * @param key1 The first collation key to compare
     * @param key2 The second collation key to compare
     */
    vfunc_collate_cmp(key1: string, key2: string): number
    /**
     * Generate a collation key for a set of input data (usually a UTF-8 string
     * passed through tokenization and term filters of the analyzer).
     * 
     * The default implementation just calls g_strdup().
     * @virtual 
     * @param data The input data to generate a collation key for
     */
    vfunc_collate_key(data: string): string
    /**
     * Tokenize some input data (which is normally, but not necessarily,
     * a UTF-8 string).
     * 
     * Tokenization splits the input data into constituents (in most cases words),
     * but does not run it through any of the term filters set for the analyzer.
     * It is undefined if the tokenization process itself does any normalization.
     * @virtual 
     * @param data The input data to analyze
     * @param terms_out A #DeeTermList to place the generated tokens in.
     */
    vfunc_tokenize(data: string, terms_out: TermList): void

    // Class property signals of Dee-1.0.Dee.Analyzer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeAnalyzer structure are private and should never be
 * accessed directly
 * @class 
 */
class Analyzer extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Analyzer

    static name: string
    static $gtype: GObject.GType<Analyzer>

    // Constructors of Dee-1.0.Dee.Analyzer

    constructor(config?: Analyzer_ConstructProps) 
    constructor() 
    static new(): Analyzer
    _init(config?: Analyzer_ConstructProps): void
    /**
     * A #GCompareDataFunc using a #DeeAnalyzer to compare the keys. This is just
     * a convenience wrapper around dee_analyzer_collate_cmp().
     * @param key1 The first key to compare
     * @param key2 The second key to compare
     * @param analyzer The #DeeAnalyzer to use for the comparison
     */
    static collate_cmp_func(key1: string, key2: string, analyzer: object | null): number
}

interface Client_ConstructProps extends Peer_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.Client

    bus_address?: string | null
}

interface Client {

    // Own properties of Dee-1.0.Dee.Client

    readonly bus_address: string

    // Class property signals of Dee-1.0.Dee.Client

    connect(sigName: "notify::bus-address", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-address", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-address", ...args: any[]): void
    connect(sigName: "notify::swarm-leader", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-leader", ...args: any[]): void
    connect(sigName: "notify::swarm-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-name", ...args: any[]): void
    connect(sigName: "notify::swarm-owner", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-owner", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends Peer {

    // Own properties of Dee-1.0.Dee.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Dee-1.0.Dee.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * Creates a new instance of #DeeClient and tries to connect to #DeeServer
     * created using dee_server_new(). The #DeePeer:swarm-leader property will
     * be set once the client connects.
     * @constructor 
     * @param swarm_name Name of swarm to join.
     */
    constructor(swarm_name: string) 
    /**
     * Creates a new instance of #DeeClient and tries to connect to #DeeServer
     * created using dee_server_new(). The #DeePeer:swarm-leader property will
     * be set once the client connects.
     * @constructor 
     * @param swarm_name Name of swarm to join.
     */
    static new(swarm_name: string): Client

    // Overloads of new

    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarm_name The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    static new(swarm_name: string): Peer
    /**
     * Creates a new instance of #DeeClient and tries to connect to `bus_address`.
     * The #DeePeer:swarm-leader property will be set once the client connects.
     * @constructor 
     * @param swarm_name Name of swarm to join.
     * @param bus_address D-Bus address to use when connecting to the server.
     */
    static new_for_address(swarm_name: string, bus_address: string): Client
    _init(config?: Client_ConstructProps): void
}

interface FileResourceManager_ConstructProps extends ResourceManager_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.FileResourceManager

    /**
     * Property holding the primary path used to store and load resources
     */
    primary_path?: string | null
}

interface FileResourceManager extends ResourceManager {

    // Own properties of Dee-1.0.Dee.FileResourceManager

    /**
     * Property holding the primary path used to store and load resources
     */
    readonly primary_path: string

    // Own fields of Dee-1.0.Dee.FileResourceManager

    parent_instance: GObject.Object

    // Owm methods of Dee-1.0.Dee.FileResourceManager

    /**
     * Add a path to the set of paths searched for resources. The manager will
     * first search the primary path as specified in the constructor and then
     * search paths in the order they where added.
     * @param path The path to add to the set of searched paths
     */
    add_search_path(path: string): void
    /**
     * Helper method to access the :primary-path property.
     */
    get_primary_path(): string

    // Class property signals of Dee-1.0.Dee.FileResourceManager

    connect(sigName: "notify::primary-path", callback: (($obj: FileResourceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-path", callback: (($obj: FileResourceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileResourceManager extends GObject.Object {

    // Own properties of Dee-1.0.Dee.FileResourceManager

    static name: string
    static $gtype: GObject.GType<FileResourceManager>

    // Constructors of Dee-1.0.Dee.FileResourceManager

    constructor(config?: FileResourceManager_ConstructProps) 
    /**
     * Create a new #DeeFileResourceManager with its primary store- and load
     * path set to `primary_path`.
     * 
     * You can manually add fallback search paths by calling
     * dee_file_resource_manager_add_search_path().
     * 
     * You normally don't need to create you own resource managers. Instead
     * you should call dee_resource_manager_get_default().
     * @constructor 
     * @param primary_path The primary path used to store and load resources.                If you pass %NULL the manager will use a default path.
     */
    constructor(primary_path: string) 
    /**
     * Create a new #DeeFileResourceManager with its primary store- and load
     * path set to `primary_path`.
     * 
     * You can manually add fallback search paths by calling
     * dee_file_resource_manager_add_search_path().
     * 
     * You normally don't need to create you own resource managers. Instead
     * you should call dee_resource_manager_get_default().
     * @constructor 
     * @param primary_path The primary path used to store and load resources.                If you pass %NULL the manager will use a default path.
     */
    static new(primary_path: string): FileResourceManager
    _init(config?: FileResourceManager_ConstructProps): void
}

interface FilterModel_ConstructProps extends Model_ConstructProps, Serializable_ConstructProps, ProxyModel_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.FilterModel

    /**
     * Property holding the #DeeFilter used to filter the model
     * defined in the #DeeFilterModel:back-end property.
     */
    filter?: Filter | null
}

interface FilterModel extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.FilterModel

    /**
     * Property holding the #DeeFilter used to filter the model
     * defined in the #DeeFilterModel:back-end property.
     */
    readonly filter: Filter

    // Owm methods of Dee-1.0.Dee.FilterModel

    /**
     * Includes `iter` from the back end model in the filtered model, appending
     * it to the end of the filtered rows.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     */
    append_iter(iter: ModelIter): ModelIter
    /**
     * Check if `iter` from the back end model is mapped in `self`.
     * @param iter The #DeeModelIter to check
     */
    contains(iter: ModelIter): boolean
    /**
     * Includes `iter` from the back end model in the filtered model, inserting it at
     * `pos` pushing other rows down.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     * @param pos 
     */
    insert_iter(iter: ModelIter, pos: number): ModelIter
    /**
     * Includes `iter` from the back end model in the filtered model, inserting it at
     * the position before `pos` pushing other rows down.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     * @param pos 
     */
    insert_iter_before(iter: ModelIter, pos: ModelIter): ModelIter
    /**
     * Inserts `iter` in `self` in a way that is consistent with the ordering of the
     * rows in the original #DeeModel behind `self`. THis method assumes that `self`
     * is already ordered this way. If that's not the case then this method has
     * undefined behaviour.
     * 
     * This method is mainly intended as a helper for #DeeFilterMapNotify functions
     * of #DeeFilter implementations that creates filter models sorted in
     * accordance with the original models.
     * @param iter Iterator
     */
    insert_iter_with_original_order(iter: ModelIter): ModelIter
    /**
     * Includes `iter` from the back end model in the filtered model, prepending
     * it to the beginning of the filtered rows.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     */
    prepend_iter(iter: ModelIter): ModelIter

    // Class property signals of Dee-1.0.Dee.FilterModel

    connect(sigName: "notify::filter", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::back-end", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::back-end", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::back-end", ...args: any[]): void
    connect(sigName: "notify::inherit-seqnums", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inherit-seqnums", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inherit-seqnums", ...args: any[]): void
    connect(sigName: "notify::proxy-signals", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-signals", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-signals", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeFilterModel structure are private and should never be
 * accessed directly
 * @class 
 */
class FilterModel extends ProxyModel {

    // Own properties of Dee-1.0.Dee.FilterModel

    static name: string
    static $gtype: GObject.GType<FilterModel>

    // Constructors of Dee-1.0.Dee.FilterModel

    constructor(config?: FilterModel_ConstructProps) 
    constructor(orig_model: Model, filter: Filter) 
    static new(orig_model: Model, filter: Filter): FilterModel
    _init(config?: FilterModel_ConstructProps): void
}

interface GListResultSet_ConstructProps extends ResultSet_ConstructProps, GObject.Object_ConstructProps {
}

interface GListResultSet extends ResultSet {

    // Own fields of Dee-1.0.Dee.GListResultSet

    parent_instance: GObject.Object

    // Class property signals of Dee-1.0.Dee.GListResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GListResultSet extends GObject.Object {

    // Own properties of Dee-1.0.Dee.GListResultSet

    static name: string
    static $gtype: GObject.GType<GListResultSet>

    // Constructors of Dee-1.0.Dee.GListResultSet

    constructor(config?: GListResultSet_ConstructProps) 
    _init(config?: GListResultSet_ConstructProps): void
}

interface HashIndex_ConstructProps extends Index_ConstructProps {
}

interface HashIndex {

    // Class property signals of Dee-1.0.Dee.HashIndex

    connect(sigName: "notify::analyzer", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::analyzer", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::analyzer", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reader", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeHashIndex structure are private and should never be
 * accessed directly
 * @class 
 */
class HashIndex extends Index {

    // Own properties of Dee-1.0.Dee.HashIndex

    static name: string
    static $gtype: GObject.GType<HashIndex>

    // Constructors of Dee-1.0.Dee.HashIndex

    constructor(config?: HashIndex_ConstructProps) 
    /**
     * Create a new hash index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    constructor(model: Model, analyzer: Analyzer, reader: ModelReader) 
    /**
     * Create a new hash index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex
    _init(config?: HashIndex_ConstructProps): void
}

interface Index_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.Index

    /**
     * The #DeeAnalyzer used to analyze terms extracted by the model reader
     */
    analyzer?: Analyzer | null
    /**
     * The #DeeModel being indexed
     */
    model?: Model | null
    /**
     * The #DeeModelReader used to extract terms from rows in the model
     */
    reader?: ModelReader | null
}

interface Index {

    // Own properties of Dee-1.0.Dee.Index

    /**
     * The #DeeAnalyzer used to analyze terms extracted by the model reader
     */
    readonly analyzer: Analyzer
    /**
     * The #DeeModel being indexed
     */
    readonly model: Model
    /**
     * The #DeeModelReader used to extract terms from rows in the model
     */
    readonly reader: ModelReader

    // Owm methods of Dee-1.0.Dee.Index

    /**
     * Iterate over an index optionally starting from some given term. Note that
     * unordered indexes (like #DeeHashIndex) has undefined behaviour with
     * this method.
     * @param start_term The term to start from or %NULL to iterate over all terms
     * @param func Called for each term in the index
     */
    foreach(start_term: string, func: IndexIterFunc): void
    /**
     * Get the analyzer being used to analyze terms extracted with the
     * #DeeModelReader used by this index.
     */
    get_analyzer(): Analyzer
    /**
     * Get the model being indexed by this index
     */
    get_model(): Model
    /**
     * Get the number of indexed rows. A row is only indexed if it has at least one
     * term associated with it. If the analyzer has returned 0 terms then the row
     * is omitted from the index.
     */
    get_n_rows(): number
    /**
     * Get the number of rows that matches a given term
     * @param term The term to look for
     */
    get_n_rows_for_term(term: string): number
    /**
     * Get the number of terms in the index
     */
    get_n_terms(): number
    /**
     * Get the reader being used to extract terms from rows in the model
     */
    get_reader(): ModelReader
    /**
     * Get the #DeeTermMatchFlag<!-- --> supported by this #DeeIndex instance
     */
    get_supported_term_match_flags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    /**
     * Convenience function in for cases where you have a priori guarantee that
     * a dee_index_lookup() call will return exactly 0 or 1 row. If the lookup
     * returns more than 1 row a warning will be printed on standard error and
     * %NULL will be returned.
     * 
     * The typical use case for this function is if you need something akin to
     * a primary key in a relational database.
     * @param term The exact term to match
     */
    lookup_one(term: string): ModelIter

    // Own virtual methods of Dee-1.0.Dee.Index

    /**
     * Iterate over an index optionally starting from some given term. Note that
     * unordered indexes (like #DeeHashIndex) has undefined behaviour with
     * this method.
     * @virtual 
     * @param start_term The term to start from or %NULL to iterate over all terms
     * @param func Called for each term in the index
     */
    vfunc_foreach(start_term: string, func: IndexIterFunc): void
    /**
     * Get the number of indexed rows. A row is only indexed if it has at least one
     * term associated with it. If the analyzer has returned 0 terms then the row
     * is omitted from the index.
     * @virtual 
     */
    vfunc_get_n_rows(): number
    /**
     * Get the number of rows that matches a given term
     * @virtual 
     * @param term The term to look for
     */
    vfunc_get_n_rows_for_term(term: string): number
    /**
     * Get the number of terms in the index
     * @virtual 
     */
    vfunc_get_n_terms(): number
    /**
     * Get the #DeeTermMatchFlag<!-- --> supported by this #DeeIndex instance
     * @virtual 
     */
    vfunc_get_supported_term_match_flags(): number
    vfunc_lookup(term: string, flags: TermMatchFlag): ResultSet

    // Class property signals of Dee-1.0.Dee.Index

    connect(sigName: "notify::analyzer", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::analyzer", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::analyzer", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reader", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeIndex structure are private and should never be
 * accessed directly
 * @class 
 */
class Index extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Index

    static name: string
    static $gtype: GObject.GType<Index>

    // Constructors of Dee-1.0.Dee.Index

    constructor(config?: Index_ConstructProps) 
    _init(config?: Index_ConstructProps): void
}

interface Peer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.Peer

    swarm_name?: string | null
    swarm_owner?: boolean | null
}

/**
 * Signal callback interface for `connection-acquired`
 */
interface Peer_ConnectionAcquiredSignalCallback {
    ($obj: Peer, object: Gio.DBusConnection): void
}

/**
 * Signal callback interface for `connection-closed`
 */
interface Peer_ConnectionClosedSignalCallback {
    ($obj: Peer, connection: Gio.DBusConnection): void
}

/**
 * Signal callback interface for `peer-found`
 */
interface Peer_PeerFoundSignalCallback {
    ($obj: Peer, name: string): void
}

/**
 * Signal callback interface for `peer-lost`
 */
interface Peer_PeerLostSignalCallback {
    ($obj: Peer, name: string): void
}

interface Peer {

    // Own properties of Dee-1.0.Dee.Peer

    readonly swarm_leader: string
    swarm_name: string
    readonly swarm_owner: boolean

    // Owm methods of Dee-1.0.Dee.Peer

    /**
     * Gets list of #GDBusConnection instances used by this #DeePeer instance.
     */
    get_connections(): Gio.DBusConnection[]
    /**
     * In case this peer is connected to a message bus, gets the unique DBus
     * address of the current swarm leader, otherwise returns id of the leader.
     */
    get_swarm_leader(): string
    /**
     * Gets the unique name for this swarm. The swarm leader is the Peer owning
     * this name on the session bus.
     */
    get_swarm_name(): string
    is_swarm_leader(): boolean
    /**
     * Gets the value of the :swarm-owner property.
     * 
     * Note that this does NOT mean that the peer is leader of the swarm! Check also
     * dee_peer_is_swarm_leader().
     */
    is_swarm_owner(): boolean
    /**
     * Gets list of all peers currently in this swarm.
     */
    list_peers(): string[]

    // Own virtual methods of Dee-1.0.Dee.Peer

    vfunc_connection_acquired(connection: Gio.DBusConnection): void
    vfunc_connection_closed(connection: Gio.DBusConnection): void
    /**
     * Gets list of #GDBusConnection instances used by this #DeePeer instance.
     * @virtual 
     */
    vfunc_get_connections(): Gio.DBusConnection[]
    /**
     * In case this peer is connected to a message bus, gets the unique DBus
     * address of the current swarm leader, otherwise returns id of the leader.
     * @virtual 
     */
    vfunc_get_swarm_leader(): string
    vfunc_is_swarm_leader(): boolean
    /**
     * Gets list of all peers currently in this swarm.
     * @virtual 
     */
    vfunc_list_peers(): string[]
    vfunc_peer_found(name: string): void
    vfunc_peer_lost(name: string): void

    // Own signals of Dee-1.0.Dee.Peer

    connect(sigName: "connection-acquired", callback: Peer_ConnectionAcquiredSignalCallback): number
    connect_after(sigName: "connection-acquired", callback: Peer_ConnectionAcquiredSignalCallback): number
    emit(sigName: "connection-acquired", object: Gio.DBusConnection, ...args: any[]): void
    connect(sigName: "connection-closed", callback: Peer_ConnectionClosedSignalCallback): number
    connect_after(sigName: "connection-closed", callback: Peer_ConnectionClosedSignalCallback): number
    emit(sigName: "connection-closed", connection: Gio.DBusConnection, ...args: any[]): void
    connect(sigName: "peer-found", callback: Peer_PeerFoundSignalCallback): number
    connect_after(sigName: "peer-found", callback: Peer_PeerFoundSignalCallback): number
    emit(sigName: "peer-found", name: string, ...args: any[]): void
    connect(sigName: "peer-lost", callback: Peer_PeerLostSignalCallback): number
    connect_after(sigName: "peer-lost", callback: Peer_PeerLostSignalCallback): number
    emit(sigName: "peer-lost", name: string, ...args: any[]): void

    // Class property signals of Dee-1.0.Dee.Peer

    connect(sigName: "notify::swarm-leader", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-leader", ...args: any[]): void
    connect(sigName: "notify::swarm-name", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-name", ...args: any[]): void
    connect(sigName: "notify::swarm-owner", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-owner", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeePeer structure are private and should never be
 * accessed directly
 * @class 
 */
class Peer extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Peer

    static name: string
    static $gtype: GObject.GType<Peer>

    // Constructors of Dee-1.0.Dee.Peer

    constructor(config?: Peer_ConstructProps) 
    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarm_name The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    constructor(swarm_name: string) 
    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarm_name The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    static new(swarm_name: string): Peer
    _init(config?: Peer_ConstructProps): void
}

interface ProxyModel_ConstructProps extends Model_ConstructProps, Serializable_ConstructProps, SerializableModel_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.ProxyModel

    /**
     * The backend model used by this proxy model.
     */
    back_end?: Model | null
    /**
     * Boolean property defining whether sequence numbers will be inherited
     * from the back end model.
     * You will most likely want to set this property to false
     * if the implementation manipulates with the rows in the model and keep
     * track of seqnums yourself.
     */
    inherit_seqnums?: boolean | null
    /**
     * Boolean property defining whether or not to automatically forward signals
     * from the back end model. This is especially useful for sub classes wishing
     * to do their own more advanced signal forwarding.
     */
    proxy_signals?: boolean | null
}

interface ProxyModel extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.ProxyModel

    /**
     * The backend model used by this proxy model.
     */
    readonly back_end: Model
    /**
     * Boolean property defining whether sequence numbers will be inherited
     * from the back end model.
     * You will most likely want to set this property to false
     * if the implementation manipulates with the rows in the model and keep
     * track of seqnums yourself.
     */
    readonly inherit_seqnums: boolean
    /**
     * Boolean property defining whether or not to automatically forward signals
     * from the back end model. This is especially useful for sub classes wishing
     * to do their own more advanced signal forwarding.
     */
    readonly proxy_signals: boolean

    // Class property signals of Dee-1.0.Dee.ProxyModel

    connect(sigName: "notify::back-end", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::back-end", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::back-end", ...args: any[]): void
    connect(sigName: "notify::inherit-seqnums", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inherit-seqnums", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inherit-seqnums", ...args: any[]): void
    connect(sigName: "notify::proxy-signals", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-signals", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-signals", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeProxyModel structure are private and should never be
 * accessed directly
 * @class 
 */
class ProxyModel extends SerializableModel {

    // Own properties of Dee-1.0.Dee.ProxyModel

    static name: string
    static $gtype: GObject.GType<ProxyModel>

    // Constructors of Dee-1.0.Dee.ProxyModel

    constructor(config?: ProxyModel_ConstructProps) 
    _init(config?: ProxyModel_ConstructProps): void
}

interface SequenceModel_ConstructProps extends Model_ConstructProps, Serializable_ConstructProps, SerializableModel_ConstructProps {
}

interface SequenceModel extends Model, Serializable {

    // Class property signals of Dee-1.0.Dee.SequenceModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeSequenceModel structure are private and should never be
 * accessed directly
 * @class 
 */
class SequenceModel extends SerializableModel {

    // Own properties of Dee-1.0.Dee.SequenceModel

    static name: string
    static $gtype: GObject.GType<SequenceModel>

    // Constructors of Dee-1.0.Dee.SequenceModel

    constructor(config?: SequenceModel_ConstructProps) 
    /**
     * Create a new #DeeSequenceModel. Before using it you must normally set a
     * schema on it by calling dee_model_set_schema().
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #DeeSequenceModel. Before using it you must normally set a
     * schema on it by calling dee_model_set_schema().
     * @constructor 
     */
    static new(): SequenceModel
    _init(config?: SequenceModel_ConstructProps): void
}

interface SerializableModel_ConstructProps extends Model_ConstructProps, Serializable_ConstructProps, GObject.Object_ConstructProps {
}

interface SerializableModel extends Model, Serializable {

    // Owm methods of Dee-1.0.Dee.SerializableModel

    get_seqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    inc_seqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    set_seqnum(seqnum: number): void

    // Class property signals of Dee-1.0.Dee.SerializableModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeSerializableModel structure are private and should never be
 * accessed directly
 * @class 
 */
class SerializableModel extends GObject.Object {

    // Own properties of Dee-1.0.Dee.SerializableModel

    static name: string
    static $gtype: GObject.GType<SerializableModel>

    // Constructors of Dee-1.0.Dee.SerializableModel

    constructor(config?: SerializableModel_ConstructProps) 
    _init(config?: SerializableModel_ConstructProps): void
}

interface Server_ConstructProps extends Peer_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.Server

    bus_address?: string | null
    same_user_only?: boolean | null
}

interface Server {

    // Own properties of Dee-1.0.Dee.Server

    readonly bus_address: string
    readonly same_user_only: boolean

    // Owm methods of Dee-1.0.Dee.Server

    /**
     * Gets a D-Bus address string that can be used by clients to connect to server.
     */
    get_client_address(): string

    // Class property signals of Dee-1.0.Dee.Server

    connect(sigName: "notify::bus-address", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-address", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-address", ...args: any[]): void
    connect(sigName: "notify::same-user-only", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::same-user-only", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::same-user-only", ...args: any[]): void
    connect(sigName: "notify::swarm-leader", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-leader", ...args: any[]): void
    connect(sigName: "notify::swarm-name", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-name", ...args: any[]): void
    connect(sigName: "notify::swarm-owner", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-owner", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swarm-owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Server extends Peer {

    // Own properties of Dee-1.0.Dee.Server

    static name: string
    static $gtype: GObject.GType<Server>

    // Constructors of Dee-1.0.Dee.Server

    constructor(config?: Server_ConstructProps) 
    /**
     * Creates a new instance of #DeeServer and tries to bind
     * to #DeeServer:bus-address. The #DeePeer:swarm-leader property will be set
     * when the binding succeeds.
     * 
     * <note>
     *   <para>
     *     Note that this function will automatically determine the value
     *     of #DeeServer:bus-address property and will generally cause your
     *     application to use new socket for every #DeeServer with different swarm
     *     name. See dee_server_new_for_address() if you'd like to share one
     *     connection between multiple #DeeServer instances.
     *   </para>
     * </note>
     * @constructor 
     * @param swarm_name Name of swarm to join.
     */
    constructor(swarm_name: string) 
    /**
     * Creates a new instance of #DeeServer and tries to bind
     * to #DeeServer:bus-address. The #DeePeer:swarm-leader property will be set
     * when the binding succeeds.
     * 
     * <note>
     *   <para>
     *     Note that this function will automatically determine the value
     *     of #DeeServer:bus-address property and will generally cause your
     *     application to use new socket for every #DeeServer with different swarm
     *     name. See dee_server_new_for_address() if you'd like to share one
     *     connection between multiple #DeeServer instances.
     *   </para>
     * </note>
     * @constructor 
     * @param swarm_name Name of swarm to join.
     */
    static new(swarm_name: string): Server

    // Overloads of new

    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarm_name The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    static new(swarm_name: string): Peer
    /**
     * Creates a new instance of #DeeServer and tries to bind to `bus_address`.
     * The #DeePeer:swarm-leader property will be set when the binding succeeds.
     * 
     * If there is already a #DeeServer instance bound to `bus_address,`
     * the connection will be shared with the newly constructed instance.
     * 
     * <note>
     *   <para>
     *     This function is primarily meant for sharing of one connection (socket)
     *     between multiple DeeServers, so that you can create #DeeServer instances
     *     with varying swarm names, but the same bus address, which will cause
     *     them to share the connection (the sharing is possible only within
     *     the same process though).
     *   </para>
     * </note>
     * @constructor 
     * @param swarm_name Name of swarm to join.
     * @param bus_address D-Bus address to use for the connection.
     */
    static new_for_address(swarm_name: string, bus_address: string): Server
    _init(config?: Server_ConstructProps): void
    /**
     * Helper method which creates bus address string for the given name, which
     * should have the same format as a DBus unique name.
     * @param name A name to create bus address for.
     * @param include_username Include current user name as part of the bus address.
     */
    static bus_address_for_name(name: string, include_username: boolean): string
}

interface SharedModel_ConstructProps extends Model_ConstructProps, Serializable_ConstructProps, ProxyModel_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.SharedModel

    /**
     * Enumeration defining behavior of this model when trying to write to it.
     * 
     * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
     * when one process is considered an "owner" of a model and all the other
     * peers are supposed to only synchronize it for reading.
     * 
     * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
     */
    access_mode?: SharedModelAccessMode | null
    /**
     * Enumeration defining the flushing behavior.
     * 
     * Setting this to #DEE_SHARED_MODEL_FLUSH_MODE_MANUAL will disable
     * automatic flushing that usually happens when the application's main event
     * loop is idle. Automatic flushing should be primarily disabled when
     * a shared model is used from multiple threads, or when not using #GMainLoop.
     * When disabled, dee_shared_model_flush_revision_queue() needs to be called
     * explicitely.
     */
    flush_mode?: SharedModelFlushMode | null
    /**
     * The #DeePeer that this model uses to connect to the swarm
     */
    peer?: Peer | null
}

/**
 * Signal callback interface for `begin-transaction`
 */
interface SharedModel_BeginTransactionSignalCallback {
    ($obj: SharedModel, begin_seqnum: number, end_seqnum: number): void
}

/**
 * Signal callback interface for `end-transaction`
 */
interface SharedModel_EndTransactionSignalCallback {
    ($obj: SharedModel, begin_seqnum: number, end_seqnum: number): void
}

interface SharedModel extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.SharedModel

    /**
     * Enumeration defining behavior of this model when trying to write to it.
     * 
     * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
     * when one process is considered an "owner" of a model and all the other
     * peers are supposed to only synchronize it for reading.
     * 
     * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
     */
    readonly access_mode: SharedModelAccessMode
    /**
     * Enumeration defining the flushing behavior.
     * 
     * Setting this to #DEE_SHARED_MODEL_FLUSH_MODE_MANUAL will disable
     * automatic flushing that usually happens when the application's main event
     * loop is idle. Automatic flushing should be primarily disabled when
     * a shared model is used from multiple threads, or when not using #GMainLoop.
     * When disabled, dee_shared_model_flush_revision_queue() needs to be called
     * explicitely.
     */
    flush_mode: SharedModelFlushMode
    /**
     * The #DeePeer that this model uses to connect to the swarm
     */
    readonly peer: Peer
    /**
     * Boolean property defining whether or not the model has synchronized with
     * its peers (if any) yet.
     * 
     * You should not modify a #DeeSharedModel that is not synchronized. Before
     * modifying the model in any way (except calling dee_model_set_schema())
     * you should wait for it to become synchronized.
     */
    readonly synchronized: boolean

    // Owm methods of Dee-1.0.Dee.SharedModel

    /**
     * Expert: All changes to `self` that has not yet been propagated to the peer
     * models are send. If you also want to block the mainloop until
     * all the underlying transport streams have been flushed use
     * dee_shared_model_flush_revision_queue_sync().
     * 
     * Normally #DeeSharedModel collects changes to `self` into batches and sends
     * them automatically to all peers. You can use this call to provide fine
     * grained control of exactly when changes to `self` are synchronized to its
     * peers. This may for example be useful to improve the interactivity of your
     * application if you have a model-process which intermix small and light
     * changes with big and expensive changes. Using this call you can make sure
     * the model-process dispatches small changes more aggresively to the
     * view-process, while holding on to the expensive changes a bit longer.
     */
    flush_revision_queue(): number
    /**
     * Similar to dee_shared_model_flush_revision_queue(), but also blocks
     * the mainloop until all the underlying transport streams have been flushed.
     * 
     * <emphasis>Important</emphasis>: This method <emphasis>may</emphasis> flush
     * your internal queue of DBus messages forcing them to be send before this call
     * returns.
     */
    flush_revision_queue_sync(): number
    /**
     * Convenience function for accessing the #DeeSharedModel:flush-mode property.
     */
    get_flush_mode(): SharedModelFlushMode
    /**
     * Convenience function for accessing the #DeeSharedModel:peer property
     */
    get_peer(): Peer
    /**
     * Convenience function for accessing the #DeePeer:swarm-name property of the
     * #DeePeer defined in the #DeeSharedModel:peer property.
     */
    get_swarm_name(): string
    /**
     * Check if the model is the swarm leader. This is a convenience function for
     * accessing the #DeeSharedModel:peer property and checking if it's the swarm
     * leader.
     */
    is_leader(): boolean
    /**
     * Check if the model is synchronized with its peers. Before modifying a
     * shared model in any way (except dee_model_set_schema()) you should wait for
     * it to become synchronized. This is normally done by waiting for the
     * &quot;notify::synchronized&quot; signal.
     * 
     * This method is purely a convenience function for accessing the
     * #DeeSharedModel:synchronized property.
     */
    is_synchronized(): boolean
    /**
     * Convenience function for setting the #DeeSharedModel:flush-mode property.
     * @param mode Flush mode to use
     */
    set_flush_mode(mode: SharedModelFlushMode): void

    // Own signals of Dee-1.0.Dee.SharedModel

    connect(sigName: "begin-transaction", callback: SharedModel_BeginTransactionSignalCallback): number
    connect_after(sigName: "begin-transaction", callback: SharedModel_BeginTransactionSignalCallback): number
    emit(sigName: "begin-transaction", begin_seqnum: number, end_seqnum: number, ...args: any[]): void
    connect(sigName: "end-transaction", callback: SharedModel_EndTransactionSignalCallback): number
    connect_after(sigName: "end-transaction", callback: SharedModel_EndTransactionSignalCallback): number
    emit(sigName: "end-transaction", begin_seqnum: number, end_seqnum: number, ...args: any[]): void

    // Class property signals of Dee-1.0.Dee.SharedModel

    connect(sigName: "notify::access-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::access-mode", ...args: any[]): void
    connect(sigName: "notify::flush-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flush-mode", ...args: any[]): void
    connect(sigName: "notify::peer", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::peer", ...args: any[]): void
    connect(sigName: "notify::synchronized", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::synchronized", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::synchronized", ...args: any[]): void
    connect(sigName: "notify::back-end", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::back-end", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::back-end", ...args: any[]): void
    connect(sigName: "notify::inherit-seqnums", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inherit-seqnums", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inherit-seqnums", ...args: any[]): void
    connect(sigName: "notify::proxy-signals", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-signals", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-signals", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeSharedModel structure are private and should never be
 * accessed directly
 * @class 
 */
class SharedModel extends ProxyModel {

    // Own properties of Dee-1.0.Dee.SharedModel

    static name: string
    static $gtype: GObject.GType<SharedModel>

    // Constructors of Dee-1.0.Dee.SharedModel

    constructor(config?: SharedModel_ConstructProps) 
    /**
     * Create a new empty shared model without any column schema associated.
     * The column schema will be set in one of two ways: firstly you may set it
     * manually with dee_model_set_schema() or secondly it will be set once
     * the first rows are exchanged with a peer model.
     * 
     * A #DeeSharedModel with a schema manually set has to be created before
     * creating more #DeeSharedModel with the same `name`.
     * 
     * A shared model created with this constructor will store row data in a
     * suitably picked memory backed model.
     * @constructor 
     * @param name A well known name to publish this model under. Models sharing this name        will synchronize with each other
     */
    constructor(name: string) 
    /**
     * Create a new empty shared model without any column schema associated.
     * The column schema will be set in one of two ways: firstly you may set it
     * manually with dee_model_set_schema() or secondly it will be set once
     * the first rows are exchanged with a peer model.
     * 
     * A #DeeSharedModel with a schema manually set has to be created before
     * creating more #DeeSharedModel with the same `name`.
     * 
     * A shared model created with this constructor will store row data in a
     * suitably picked memory backed model.
     * @constructor 
     * @param name A well known name to publish this model under. Models sharing this name        will synchronize with each other
     */
    static new(name: string): SharedModel
    /**
     * Create a new empty shared model without any column schema associated.
     * The column schema will be set in one of two ways: firstly you may set it
     * manually with dee_model_set_schema() or secondly it will be set once
     * the first rows are exchanged with a peer model.
     * 
     * A #DeeSharedModel with a schema manually set has to be created before
     * creating more #DeeSharedModel with the same `name`.
     * 
     * A shared model created with this constructor will store row data in a
     * suitably picked memory backed model.
     * @constructor 
     * @param peer A #DeePeer instance.
     */
    static new_for_peer(peer: Peer): SharedModel
    /**
     * Create a new shared model storing all data in `back_end`.
     * 
     * The model will start synchronizing with peer models as soon as possible and
     * the #DeeSharedModel:synchronized property will be set once finished.
     * @constructor 
     * @param name A well known name to publish this model under.        Models sharing this name will synchronize with each other
     * @param back_end The #DeeModel that will actually store            the model data. Ownership of the ref to `back_end` is transfered to            the shared model.
     */
    static new_with_back_end(name: string, back_end: Model): SharedModel
    _init(config?: SharedModel_ConstructProps): void
}

interface TermList_ConstructProps extends GObject.Object_ConstructProps {
}

interface TermList {

    // Owm methods of Dee-1.0.Dee.TermList

    /**
     * Add a term to the termlist. Note that it is possible to add a term multiple
     * times. The effect of this is determined by the #DeeModelIndex consuming the
     * #DeeTermList.
     * @param term The term to add
     */
    add_term(term: string): TermList
    /**
     * Remove all terms from a term list making it ready for reuse. Note that
     * term list implementations will often have optimized memory allocation
     * schemes so reuse is often more efficient than allocating a new term list
     * each time you need it.
     */
    clear(): TermList
    /**
     * Create a copy of `self` that shares the underlying string pool and containing
     * a list of terms as currently set in `self`.
     * 
     * Subsequently freeing the original and keeping the clone around is not a
     * problem. The clone works as a standalone term list. The only gotcha may be
     * threading issues because of concurrent access to the shared string pool.
     * 
     * Creating a clone very efficient since only very little memory allocation
     * is required. It's advised that you use a clone instead a new instance
     * whenever you work over a common corpus of strings.
     * 
     * It is also worth noting that terms obtained from the original term list
     * and a clone can be compared directly as pointers (fx. with g_direct_equal()).
     * This is because they share the underlying string pool.
     */
    clone(): TermList
    /**
     * Get the n'th term in the list.
     * 
     * Note that in the default implementation it is guaranteed that the returned
     * string is valid for the entire lifetime of the #DeeTermList.
     * @param n The (zero based) offset into the term list
     */
    get_term(n: number): string
    num_terms(): number

    // Own virtual methods of Dee-1.0.Dee.TermList

    /**
     * Add a term to the termlist. Note that it is possible to add a term multiple
     * times. The effect of this is determined by the #DeeModelIndex consuming the
     * #DeeTermList.
     * @virtual 
     * @param term The term to add
     */
    vfunc_add_term(term: string): TermList
    /**
     * Remove all terms from a term list making it ready for reuse. Note that
     * term list implementations will often have optimized memory allocation
     * schemes so reuse is often more efficient than allocating a new term list
     * each time you need it.
     * @virtual 
     */
    vfunc_clear(): TermList
    /**
     * Create a copy of `self` that shares the underlying string pool and containing
     * a list of terms as currently set in `self`.
     * 
     * Subsequently freeing the original and keeping the clone around is not a
     * problem. The clone works as a standalone term list. The only gotcha may be
     * threading issues because of concurrent access to the shared string pool.
     * 
     * Creating a clone very efficient since only very little memory allocation
     * is required. It's advised that you use a clone instead a new instance
     * whenever you work over a common corpus of strings.
     * 
     * It is also worth noting that terms obtained from the original term list
     * and a clone can be compared directly as pointers (fx. with g_direct_equal()).
     * This is because they share the underlying string pool.
     * @virtual 
     */
    vfunc_clone(): TermList
    /**
     * Get the n'th term in the list.
     * 
     * Note that in the default implementation it is guaranteed that the returned
     * string is valid for the entire lifetime of the #DeeTermList.
     * @virtual 
     * @param n The (zero based) offset into the term list
     */
    vfunc_get_term(n: number): string
    vfunc_num_terms(): number

    // Class property signals of Dee-1.0.Dee.TermList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeTermList structure are private and should never be
 * accessed directly
 * @class 
 */
class TermList extends GObject.Object {

    // Own properties of Dee-1.0.Dee.TermList

    static name: string
    static $gtype: GObject.GType<TermList>

    // Constructors of Dee-1.0.Dee.TermList

    constructor(config?: TermList_ConstructProps) 
    _init(config?: TermList_ConstructProps): void
}

interface TextAnalyzer_ConstructProps extends Analyzer_ConstructProps {
}

interface TextAnalyzer {

    // Class property signals of Dee-1.0.Dee.TextAnalyzer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeTextAnalyzer structure are private and should never be
 * accessed directly
 * @class 
 */
class TextAnalyzer extends Analyzer {

    // Own properties of Dee-1.0.Dee.TextAnalyzer

    static name: string
    static $gtype: GObject.GType<TextAnalyzer>

    // Constructors of Dee-1.0.Dee.TextAnalyzer

    constructor(config?: TextAnalyzer_ConstructProps) 
    constructor() 
    static new(): TextAnalyzer

    // Overloads of new

    static new(): Analyzer
    _init(config?: TextAnalyzer_ConstructProps): void
}

interface Transaction_ConstructProps extends Model_ConstructProps, Serializable_ConstructProps, SerializableModel_ConstructProps {

    // Own constructor properties of Dee-1.0.Dee.Transaction

    target?: Model | null
}

interface Transaction extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.Transaction

    readonly target: Model

    // Owm methods of Dee-1.0.Dee.Transaction

    /**
     * Apply a transaction to its target model. After this call the transaction
     * is invalidated and must be freed with g_object_unref().
     */
    commit(): boolean
    /**
     * Get the target model of a transaction. This is just a convenience method
     * for accessing the :target property.
     */
    get_target(): Model
    /**
     * Check if a #DeeTransaction has been committed. This method is mainly for
     * debugging and testing purposes.
     */
    is_committed(): boolean

    // Class property signals of Dee-1.0.Dee.Transaction

    connect(sigName: "notify::target", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeTransaction structure are private and should never be
 * accessed directly
 * @class 
 */
class Transaction extends SerializableModel {

    // Own properties of Dee-1.0.Dee.Transaction

    static name: string
    static $gtype: GObject.GType<Transaction>

    // Constructors of Dee-1.0.Dee.Transaction

    constructor(config?: Transaction_ConstructProps) 
    constructor(target: Model) 
    static new(target: Model): Transaction
    _init(config?: Transaction_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface TreeIndex_ConstructProps extends Index_ConstructProps {
}

interface TreeIndex {

    // Class property signals of Dee-1.0.Dee.TreeIndex

    connect(sigName: "notify::analyzer", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::analyzer", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::analyzer", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reader", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All fields in the DeeTreeIndex structure are private and should never be
 * accessed directly
 * @class 
 */
class TreeIndex extends Index {

    // Own properties of Dee-1.0.Dee.TreeIndex

    static name: string
    static $gtype: GObject.GType<TreeIndex>

    // Constructors of Dee-1.0.Dee.TreeIndex

    constructor(config?: TreeIndex_ConstructProps) 
    /**
     * Create a new tree index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    constructor(model: Model, analyzer: Analyzer, reader: ModelReader) 
    /**
     * Create a new tree index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex
    _init(config?: TreeIndex_ConstructProps): void
}

interface AnalyzerClass {

    // Own fields of Dee-1.0.Dee.AnalyzerClass

    analyze: (self: Analyzer, data: string, terms_out: TermList | null, colkeys_out: TermList | null) => void
    tokenize: (self: Analyzer, data: string, terms_out: TermList) => void
    add_term_filter: (self: Analyzer, filter_func: TermFilterFunc) => void
    collate_key: (self: Analyzer, data: string) => string
    collate_cmp: (self: Analyzer, key1: string, key2: string) => number
}

abstract class AnalyzerClass {

    // Own properties of Dee-1.0.Dee.AnalyzerClass

    static name: string
}

interface AnalyzerPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class AnalyzerPrivate {

    // Own properties of Dee-1.0.Dee.AnalyzerPrivate

    static name: string
}

interface ClientClass {
}

abstract class ClientClass {

    // Own properties of Dee-1.0.Dee.ClientClass

    static name: string
}

interface ClientPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class ClientPrivate {

    // Own properties of Dee-1.0.Dee.ClientPrivate

    static name: string
}

interface FileResourceManagerClass {

    // Own fields of Dee-1.0.Dee.FileResourceManagerClass

    parent_class: GObject.ObjectClass
}

abstract class FileResourceManagerClass {

    // Own properties of Dee-1.0.Dee.FileResourceManagerClass

    static name: string
}

interface Filter {

    // Own fields of Dee-1.0.Dee.Filter

    /**
     * The #DeeModelMapFunc used to construct
     *                              the initial contents of a #DeeFilterModel
     * @field 
     */
    map_func: FilterMapFunc
    /**
     * Callback invoked when the original model changes
     * @field 
     */
    map_notify: FilterMapNotify
    /**
     * Callback for freeing the `user_data`
     * `userdata` (closure): Free form user data associated with the filter.
     *                       This pointer will be passed to `map_func` and `map_notify`
     * @field 
     */
    destroy: GLib.DestroyNotify
    userdata: object

    // Owm methods of Dee-1.0.Dee.Filter

    /**
     * Call the #DeeFilterMapFunc function of a #DeeFilter.
     * When using a #DeeFilterModel you should not call this method yourself.
     * @param orig_model The model that is being filtered
     * @param filter_model The #DeeFilterModel that holds the                filtered subset of `orig_model`
     */
    map(orig_model: Model, filter_model: FilterModel): void
    /**
     * Call the #DeeFilterMapNotify function of a #DeeFilter.
     * When using a #DeeFilterModel you should not call this method yourself.
     * @param orig_iter The #DeeModelIter added to `orig_model`
     * @param orig_model The model that is being filtered
     * @param filter_model The #DeeFilterModel that holds the                filtered subset of `orig_model`
     */
    notify(orig_iter: ModelIter, orig_model: Model, filter_model: FilterModel): boolean
}

/**
 * Structure encapsulating the mapping logic used to construct a #DeeFilterModel
 * @record 
 */
class Filter {

    // Own properties of Dee-1.0.Dee.Filter

    static name: string

    // Constructors of Dee-1.0.Dee.Filter

    /**
     * Create a new #DeeFilter with the given parameters. This call will zero
     * the `out_filter` struct.
     * @param map_func The #DeeFilterMapFunc to use for the filter
     * @param map_notify The #DeeFilterMapNotify to use for the filter
     */
    static new(map_func: FilterMapFunc, map_notify: FilterMapNotify): /* out_filter */ Filter
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    static new_collator(column: number): /* out_filter */ Filter
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted descending according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    static new_collator_desc(column: number): /* out_filter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which match a variant value in a given column. A #DeeFilterModel
     * created with this filter will be ordered in accordance with its parent model.
     * 
     * This method will work on any column, disregarding its schema, since the
     * value comparison is done using g_variant_equal(). This means you can use
     * this filter as a convenient fallback when there is no predefined filter
     * for your column type if raw performance is not paramount.
     * @param column The index of a column containing the string to match
     * @param value A #GVariant value columns must match exactly.         The matching semantics are those of g_variant_equal(). If `value`         is floating the ownership will be transfered to the filter
     */
    static new_for_any_column(column: number, value: GLib.Variant): /* out_filter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which has an exact match on some string column. A #DeeFilterModel created
     * with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string key to match
     * @param key 
     */
    static new_for_key_column(column: number, key: string): /* out_filter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which match a regular expression on some string column. A #DeeFilterModel
     * created with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string to match
     * @param regex The regular expression `column` must match
     */
    static new_regex(column: number, regex: GLib.Regex): /* out_filter */ Filter
    /**
     * Create a new #DeeFilter sorting a model according to a #DeeCompareRowFunc.
     * @param cmp_row A #DeeCompareRowFunc to use for sorting
     */
    static new_sort(cmp_row: CompareRowFunc): /* out_filter */ Filter
}

interface FilterModelClass {
}

abstract class FilterModelClass {

    // Own properties of Dee-1.0.Dee.FilterModelClass

    static name: string
}

interface FilterModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class FilterModelPrivate {

    // Own properties of Dee-1.0.Dee.FilterModelPrivate

    static name: string
}

interface GListResultSetClass {

    // Own fields of Dee-1.0.Dee.GListResultSetClass

    parent_class: GObject.ObjectClass
}

abstract class GListResultSetClass {

    // Own properties of Dee-1.0.Dee.GListResultSetClass

    static name: string
}

interface HashIndexClass {

    // Own fields of Dee-1.0.Dee.HashIndexClass

    parent_class: IndexClass
}

abstract class HashIndexClass {

    // Own properties of Dee-1.0.Dee.HashIndexClass

    static name: string
}

interface HashIndexPrivate {
}

class HashIndexPrivate {

    // Own properties of Dee-1.0.Dee.HashIndexPrivate

    static name: string
}

interface ICUTermFilter {

    // Owm methods of Dee-1.0.Dee.ICUTermFilter

    /**
     * Apply a #DeeICUTermFilter on a piece of UTF-8 text.
     * @param text The text to apply the filter on
     */
    apply(text: string): string
    /**
     * Free all resources allocated by a #DeeICUTermFilter.
     */
    destroy(): void
}

class ICUTermFilter {

    // Own properties of Dee-1.0.Dee.ICUTermFilter

    static name: string
}

interface IndexClass {

    // Own fields of Dee-1.0.Dee.IndexClass

    parent_class: GObject.ObjectClass
    lookup: (self: Index, term: string, flags: TermMatchFlag) => ResultSet
    foreach: (self: Index, start_term: string, func: IndexIterFunc) => void
    get_n_terms: (self: Index) => number
    get_n_rows: (self: Index) => number
    get_n_rows_for_term: (self: Index, term: string) => number
    get_supported_term_match_flags: (self: Index) => number
}

abstract class IndexClass {

    // Own properties of Dee-1.0.Dee.IndexClass

    static name: string
}

interface IndexPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class IndexPrivate {

    // Own properties of Dee-1.0.Dee.IndexPrivate

    static name: string
}

interface ModelIface {

    // Own fields of Dee-1.0.Dee.ModelIface

    g_iface: GObject.TypeInterface
    row_added: (self: Model, iter: ModelIter) => void
    row_removed: (self: Model, iter: ModelIter) => void
    row_changed: (self: Model, iter: ModelIter) => void
    set_schema_full: (self: Model, column_schemas: string[]) => void
    get_schema: (self: Model) => string[]
    get_column_schema: (self: Model, column: number) => string
    get_field_schema: (self: Model, field_name: string) => [ /* returnType */ string, /* out_column */ number ]
    get_column_index: (self: Model, column_name: string) => number
    set_column_names_full: (self: Model, column_names: string[]) => void
    get_column_names: (self: Model) => string[]
    register_vardict_schema: (self: Model, num_column: number, schemas: GLib.HashTable) => void
    get_vardict_schema: (self: Model, num_column: number) => GLib.HashTable
    get_n_columns: (self: Model) => number
    get_n_rows: (self: Model) => number
    append_row: (self: Model, row_members: GLib.Variant[]) => ModelIter
    prepend_row: (self: Model, row_members: GLib.Variant[]) => ModelIter
    insert_row: (self: Model, pos: number, row_members: GLib.Variant[]) => ModelIter
    insert_row_before: (self: Model, iter: ModelIter, row_members: GLib.Variant[]) => ModelIter
    insert_row_sorted: (self: Model, row_members: GLib.Variant[], cmp_func: CompareRowFunc) => ModelIter
    find_row_sorted: (self: Model, row_spec: GLib.Variant[], cmp_func: CompareRowFunc) => [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    remove: (self: Model, iter: ModelIter) => void
    clear: (self: Model) => void
    set_value: (self: Model, iter: ModelIter, column: number, value: GLib.Variant) => void
    set_row: (self: Model, iter: ModelIter, row_members: GLib.Variant[]) => void
    get_value: (self: Model, iter: ModelIter, column: number) => GLib.Variant
    get_value_by_name: (self: Model, iter: ModelIter, column_name: string) => GLib.Variant
    get_first_iter: (self: Model) => ModelIter
    get_last_iter: (self: Model) => ModelIter
    get_iter_at_row: (self: Model, row: number) => ModelIter
    get_bool: (self: Model, iter: ModelIter, column: number) => boolean
    get_uchar: (self: Model, iter: ModelIter, column: number) => number
    get_int32: (self: Model, iter: ModelIter, column: number) => number
    get_uint32: (self: Model, iter: ModelIter, column: number) => number
    get_int64: (self: Model, iter: ModelIter, column: number) => number
    get_uint64: (self: Model, iter: ModelIter, column: number) => number
    get_double: (self: Model, iter: ModelIter, column: number) => number
    get_string: (self: Model, iter: ModelIter, column: number) => string
    next: (self: Model, iter: ModelIter) => ModelIter
    prev: (self: Model, iter: ModelIter) => ModelIter
    is_first: (self: Model, iter: ModelIter) => boolean
    is_last: (self: Model, iter: ModelIter) => boolean
    get_position: (self: Model, iter: ModelIter) => number
    register_tag: (self: Model, tag_destroy: GLib.DestroyNotify) => ModelTag
    get_tag: (self: Model, iter: ModelIter, tag: ModelTag) => object | null
    set_tag: (self: Model, iter: ModelIter, tag: ModelTag, value: object | null) => void
    get_row: (self: Model, iter: ModelIter, out_row_members: GLib.Variant) => GLib.Variant
    begin_changeset: (self: Model) => void
    end_changeset: (self: Model) => void
    changeset_started: (self: Model) => void
    changeset_finished: (self: Model) => void
}

abstract class ModelIface {

    // Own properties of Dee-1.0.Dee.ModelIface

    static name: string
}

interface ModelIter {
}

/**
 * The DeeModelIter structure is private and should only be used with the
 * provided #DeeModel API. It is owned by DeeModel and should not be freed.
 * @record 
 */
class ModelIter {

    // Own properties of Dee-1.0.Dee.ModelIter

    static name: string
}

interface ModelReader {

    // Own fields of Dee-1.0.Dee.ModelReader

    /**
     * The #DeeModelReaderFunc used to extract
     *                                 string from a model
     * @field 
     */
    reader_func: ModelReaderFunc
    /**
     * user data to pass to `reader_func`
     * @field 
     */
    userdata: object
    /**
     * Called when the reader is destroyed
     * @field 
     */
    destroy: GLib.DestroyNotify

    // Owm methods of Dee-1.0.Dee.ModelReader

    /**
     * Read data from a row in a #DeeModel and extract a string representation from
     * it.
     * 
     * Note that generally a #DeeModelReader need not be confined to reading from
     * one specific column, although in practice most are.
     * @param model The #DeeModel to read a string from
     * @param iter The row to read a string from
     */
    read(model: Model, iter: ModelIter): string
}

/**
 * Structure encapsulating the information needed to read strings from a
 * model. Used for example by #DeeIndex.
 * @record 
 */
class ModelReader {

    // Own properties of Dee-1.0.Dee.ModelReader

    static name: string

    // Constructors of Dee-1.0.Dee.ModelReader

    /**
     * Create a new #DeeModelReader with the given parameters. This call will zero
     * the `out_reader` struct.
     * @param reader_func The #DeeModelReaderFunc to use for the reader
     */
    static new(reader_func: ModelReaderFunc): /* out_reader */ ModelReader
    /**
     * A #DeeModelReader reading a %gint32 from a #DeeModel at a given column
     * @param column The column index to read a %gint32 from
     */
    static new_for_int32_column(column: number): /* out_reader */ ModelReader
    /**
     * A #DeeModelReader reading a string from a #DeeModel at a given column
     * @param column The column index to read a string from
     */
    static new_for_string_column(column: number): /* out_reader */ ModelReader
    /**
     * A #DeeModelReader reading a %guint32 from a #DeeModel at a given column
     * @param column The column index to read a %guint32 from
     */
    static new_for_uint32_column(column: number): /* out_reader */ ModelReader
}

interface ModelTag {
}

/**
 * The DeeModelTag structure is private and should only be used with the
 * provided #DeeModel API. It is owned by DeeModel and should not be freed.
 * @record 
 */
class ModelTag {

    // Own properties of Dee-1.0.Dee.ModelTag

    static name: string
}

interface PeerClass {

    // Own fields of Dee-1.0.Dee.PeerClass

    peer_found: (self: Peer, name: string) => void
    peer_lost: (self: Peer, name: string) => void
    connection_acquired: (self: Peer, connection: Gio.DBusConnection) => void
    connection_closed: (self: Peer, connection: Gio.DBusConnection) => void
    get_swarm_leader: (self: Peer) => string
    is_swarm_leader: (self: Peer) => boolean
    get_connections: (self: Peer) => Gio.DBusConnection[]
    list_peers: (self: Peer) => string[]
}

abstract class PeerClass {

    // Own properties of Dee-1.0.Dee.PeerClass

    static name: string
}

interface PeerPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class PeerPrivate {

    // Own properties of Dee-1.0.Dee.PeerPrivate

    static name: string
}

interface ProxyModelClass {
}

abstract class ProxyModelClass {

    // Own properties of Dee-1.0.Dee.ProxyModelClass

    static name: string
}

interface ProxyModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class ProxyModelPrivate {

    // Own properties of Dee-1.0.Dee.ProxyModelPrivate

    static name: string
}

interface ResourceManagerIface {

    // Own fields of Dee-1.0.Dee.ResourceManagerIface

    g_iface: GObject.TypeInterface
    store: (self: ResourceManager, resource: Serializable, resource_name: string) => boolean
    load: (self: ResourceManager, resource_name: string) => GObject.Object
}

abstract class ResourceManagerIface {

    // Own properties of Dee-1.0.Dee.ResourceManagerIface

    static name: string
}

interface ResultSetIface {

    // Own fields of Dee-1.0.Dee.ResultSetIface

    g_iface: GObject.TypeInterface
    get_n_rows: (self: ResultSet) => number
    next: (self: ResultSet) => ModelIter
    has_next: (self: ResultSet) => boolean
    peek: (self: ResultSet) => ModelIter
    seek: (self: ResultSet, pos: number) => void
    tell: (self: ResultSet) => number
    get_model: (self: ResultSet) => Model
}

abstract class ResultSetIface {

    // Own properties of Dee-1.0.Dee.ResultSetIface

    static name: string
}

interface SequenceModelClass {
}

abstract class SequenceModelClass {

    // Own properties of Dee-1.0.Dee.SequenceModelClass

    static name: string
}

interface SequenceModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class SequenceModelPrivate {

    // Own properties of Dee-1.0.Dee.SequenceModelPrivate

    static name: string
}

interface SerializableIface {

    // Own fields of Dee-1.0.Dee.SerializableIface

    g_iface: GObject.TypeInterface
    serialize: (self: Serializable) => GLib.Variant
}

abstract class SerializableIface {

    // Own properties of Dee-1.0.Dee.SerializableIface

    static name: string
}

interface SerializableModelClass {

    // Own fields of Dee-1.0.Dee.SerializableModelClass

    get_seqnum: (self: Model) => number
    set_seqnum: (self: Model, seqnum: number) => void
    inc_seqnum: (self: Model) => number
}

abstract class SerializableModelClass {

    // Own properties of Dee-1.0.Dee.SerializableModelClass

    static name: string
}

interface SerializableModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class SerializableModelPrivate {

    // Own properties of Dee-1.0.Dee.SerializableModelPrivate

    static name: string
}

interface ServerClass {
}

abstract class ServerClass {

    // Own properties of Dee-1.0.Dee.ServerClass

    static name: string
}

interface ServerPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class ServerPrivate {

    // Own properties of Dee-1.0.Dee.ServerPrivate

    static name: string
}

interface SharedModelClass {
}

abstract class SharedModelClass {

    // Own properties of Dee-1.0.Dee.SharedModelClass

    static name: string
}

interface SharedModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class SharedModelPrivate {

    // Own properties of Dee-1.0.Dee.SharedModelPrivate

    static name: string
}

interface TermListClass {

    // Own fields of Dee-1.0.Dee.TermListClass

    parent_class: GObject.ObjectClass
    get_term: (self: TermList, n: number) => string
    add_term: (self: TermList, term: string) => TermList
    num_terms: (self: TermList) => number
    clear: (self: TermList) => TermList
    clone: (self: TermList) => TermList
}

abstract class TermListClass {

    // Own properties of Dee-1.0.Dee.TermListClass

    static name: string
}

interface TermListPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class TermListPrivate {

    // Own properties of Dee-1.0.Dee.TermListPrivate

    static name: string
}

interface TextAnalyzerClass {
}

abstract class TextAnalyzerClass {

    // Own properties of Dee-1.0.Dee.TextAnalyzerClass

    static name: string
}

interface TextAnalyzerPrivate {
}

class TextAnalyzerPrivate {

    // Own properties of Dee-1.0.Dee.TextAnalyzerPrivate

    static name: string
}

interface TransactionClass {
}

abstract class TransactionClass {

    // Own properties of Dee-1.0.Dee.TransactionClass

    static name: string
}

interface TransactionPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
class TransactionPrivate {

    // Own properties of Dee-1.0.Dee.TransactionPrivate

    static name: string
}

interface TreeIndexClass {

    // Own fields of Dee-1.0.Dee.TreeIndexClass

    parent_class: IndexClass
}

abstract class TreeIndexClass {

    // Own properties of Dee-1.0.Dee.TreeIndexClass

    static name: string
}

interface TreeIndexPrivate {
}

class TreeIndexPrivate {

    // Own properties of Dee-1.0.Dee.TreeIndexPrivate

    static name: string
}

}
export default Dee;