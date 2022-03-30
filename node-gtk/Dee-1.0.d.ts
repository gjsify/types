/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Dee-1.0
 */

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
function filterNew(mapFunc: FilterMapFunc, mapNotify: FilterMapNotify): /* outFilter */ Filter
function filterNewCollator(column: number): /* outFilter */ Filter
function filterNewCollatorDesc(column: number): /* outFilter */ Filter
function filterNewForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
function filterNewForKeyColumn(column: number, key: string): /* outFilter */ Filter
function filterNewRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
function filterNewSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
function icuErrorQuark(): GLib.Quark
function modelReaderNew(readerFunc: ModelReaderFunc): /* outReader */ ModelReader
function modelReaderNewForInt32Column(column: number): /* outReader */ ModelReader
function modelReaderNewForStringColumn(column: number): /* outReader */ ModelReader
function modelReaderNewForUint32Column(column: number): /* outReader */ ModelReader
function resourceManagerGetDefault(): ResourceManager
function serializableParse(data: GLib.Variant, type: GObject.Type): GObject.Object
function serializableParseExternal(data: GLib.Variant): GObject.Object
/**
 * A collator takes an input string, most often a term produced from a
 * #DeeAnalyzer, and outputs a collation key.
 */
interface CollatorFunc {
    (input: string): string
}
/**
 * Compares `row1` and `row2`. Mainly used with dee_model_insert_sorted() and
 * dee_model_find_sorted().
 */
interface CompareRowFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
/**
 * Compares `row1` and `row2`. Mainly used with
 * dee_model_insert_row_sorted_with_sizes() and
 * dee_model_find_row_sorted_with_sizes().
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
 */
interface FilterMapFunc {
    (origModel: Model, filterModel: FilterModel): void
}
/**
 * Callback invoked when a row is added to `orig_model`. To add rows to
 * `filter_model` use the methods dee_filter_model_append_iter(),
 * dee_filter_model_prepend_iter(), dee_filter_model_insert_iter(),
 * and dee_filter_model_insert_iter_before().
 */
interface FilterMapNotify {
    (origModel: Model, origIter: ModelIter, filterModel: FilterModel): boolean
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
 */
interface IndexIterFunc {
    (key: string, rows: ResultSet): boolean
}
/**
 * Extracts a string from a row in a model.
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
 */
interface TermFilterFunc {
    (termsIn: TermList, termsOut: TermList): void
}
class Model {
    /* Methods of Dee-1.0.Dee.Model */
    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
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
    beginChangeset(): void
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
    clearTag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
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
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    getVardictSchema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
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
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
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
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
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
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
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
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
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
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Signals of Dee-1.0.Dee.Model */
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals has been committed
     * to the model.
     */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals is about to be committed
     * to the model.
     * Note that not all model implementations use the changeset approach and
     * you might still get a row change signal outside of changeset-started and
     * changeset-finished signals. It also isn't guaranteed that a changeset
     * would always be non-empty.
     */
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    /**
     * Connect to this signal to be notified when a row is added to `self`.
     * @param iter a #DeeModelIter pointing to the newly added row
     */
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is changed.
     * @param iter a #DeeModelIter pointing to the changed row
     */
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is removed from `self`.
     *   The row is still valid while the signal is being emitted.
     * @param iter a #DeeModelIter pointing to the removed row
     */
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    static name: string
}
class ResourceManager {
    /* Methods of Dee-1.0.Dee.ResourceManager */
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
     * @param resourceName The name of the resource to retrieve
     */
    load(resourceName: string): GObject.Object
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
     * @param resourceName The name to store the resource under. Will overwrite any                 existing resource with the same name
     */
    store(resource: Serializable, resourceName: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get a pointer to the platform default #DeeResourceManager.
     */
    static getDefault(): ResourceManager
}
class ResultSet {
    /* Methods of Dee-1.0.Dee.ResultSet */
    /**
     * Get the model associated with a result set
     */
    getModel(): Model
    /**
     * Get the number of #DeeModelIter<!-- -->s held in a #DeeResultSet.
     */
    getNRows(): number
    /**
     * Check if a call to dee_result_set_next() will succeed.
     */
    hasNext(): boolean
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
    static name: string
}
class Serializable {
    /* Methods of Dee-1.0.Dee.Serializable */
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
    static name: string
    /* Static methods and pseudo-constructors */
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
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
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
    static parseExternal(data: GLib.Variant): GObject.Object
}
interface Analyzer_ConstructProps extends GObject.Object_ConstructProps {
}
class Analyzer {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Analyzer */
    /**
     * Register a #DeeTermFilterFunc to be called whenever dee_analyzer_analyze()
     * is called.
     * 
     * Term filters can be used to normalize, add, or remove terms from an input
     * data stream.
     * @param filterFunc Function to call
     */
    addTermFilter(filterFunc: TermFilterFunc): void
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
     * @param termsOut A #DeeTermList to place the generated terms in.                           If %NULL to terms are generated
     * @param colkeysOut A #DeeTermList to place generated collation keys in.                             If %NULL no collation keys are generated
     */
    analyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    /**
     * Compare collation keys generated by dee_analyzer_collate_key() with similar
     * semantics as strcmp(). See also dee_analyzer_collate_cmp_func() if you
     * need a version of this function that works as a #GCompareDataFunc.
     * 
     * The default implementation in #DeeAnalyzer just uses strcmp().
     * @param key1 The first collation key to compare
     * @param key2 The second collation key to compare
     */
    collateCmp(key1: string, key2: string): number
    /**
     * Generate a collation key for a set of input data (usually a UTF-8 string
     * passed through tokenization and term filters of the analyzer).
     * 
     * The default implementation just calls g_strdup().
     * @param data The input data to generate a collation key for
     */
    collateKey(data: string): string
    /**
     * Tokenize some input data (which is normally, but not necessarily,
     * a UTF-8 string).
     * 
     * Tokenization splits the input data into constituents (in most cases words),
     * but does not run it through any of the term filters set for the analyzer.
     * It is undefined if the tokenization process itself does any normalization.
     * @param data The input data to analyze
     * @param termsOut A #DeeTermList to place the generated tokens in.
     */
    tokenize(data: string, termsOut: TermList): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Analyzer_ConstructProps)
    _init (config?: Analyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Analyzer
    /**
     * A #GCompareDataFunc using a #DeeAnalyzer to compare the keys. This is just
     * a convenience wrapper around dee_analyzer_collate_cmp().
     * @param key1 The first key to compare
     * @param key2 The second key to compare
     * @param analyzer The #DeeAnalyzer to use for the comparison
     */
    static collateCmpFunc(key1: string, key2: string, analyzer?: object | null): number
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends Peer_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Client */
    busAddress?: string
}
class Client {
    /* Properties of Dee-1.0.Dee.Client */
    readonly busAddress: string
    /* Properties of Dee-1.0.Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    readonly swarmOwner: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Peer */
    /**
     * Gets list of #GDBusConnection instances used by this #DeePeer instance.
     */
    getConnections(): Gio.DBusConnection[]
    /**
     * In case this peer is connected to a message bus, gets the unique DBus
     * address of the current swarm leader, otherwise returns id of the leader.
     */
    getSwarmLeader(): string
    /**
     * Gets the unique name for this swarm. The swarm leader is the Peer owning
     * this name on the session bus.
     */
    getSwarmName(): string
    isSwarmLeader(): boolean
    /**
     * Gets the value of the :swarm-owner property.
     * 
     * Note that this does NOT mean that the peer is leader of the swarm! Check also
     * dee_peer_is_swarm_leader().
     */
    isSwarmOwner(): boolean
    /**
     * Gets list of all peers currently in this swarm.
     */
    listPeers(): string[]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Dee-1.0.Dee.Peer */
    connect(sigName: "connection-acquired", callback: ((object: Gio.DBusConnection) => void)): number
    on(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    /**
     * Connect to this signal to be notified when peers close
     * their #GDBusConnection.
     * @param connection the closed #GDBusConnection
     */
    connect(sigName: "connection-closed", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    /**
     * Connect to this signal to be notified of existing and new peers that are
     *   in your swarm.
     * @param name the DBus name of the object found
     */
    connect(sigName: "peer-found", callback: ((name: string) => void)): number
    on(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-found", name: string): void
    /**
     * Connect to this signal to be notified when peers disconnect from the swarm
     * @param name the DBus name of the object that disconnected
     */
    connect(sigName: "peer-lost", callback: ((name: string) => void)): number
    on(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bus-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bus-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bus-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bus-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Client
    /* Function overloads */
    static new(swarmName: string): Client
    static newForAddress(swarmName: string, busAddress: string): Client
    static $gtype: GObject.Type
}
interface FileResourceManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.FileResourceManager */
    /**
     * Property holding the primary path used to store and load resources
     */
    primaryPath?: string
}
class FileResourceManager {
    /* Properties of Dee-1.0.Dee.FileResourceManager */
    /**
     * Property holding the primary path used to store and load resources
     */
    readonly primaryPath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.FileResourceManager */
    /**
     * Add a path to the set of paths searched for resources. The manager will
     * first search the primary path as specified in the constructor and then
     * search paths in the order they where added.
     * @param path The path to add to the set of searched paths
     */
    addSearchPath(path: string): void
    /**
     * Helper method to access the :primary-path property.
     */
    getPrimaryPath(): string
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.ResourceManager */
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
     * @param resourceName The name of the resource to retrieve
     */
    load(resourceName: string): GObject.Object
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
     * @param resourceName The name to store the resource under. Will overwrite any                 existing resource with the same name
     */
    store(resource: Serializable, resourceName: string): boolean
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::primary-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileResourceManager_ConstructProps)
    _init (config?: FileResourceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(primaryPath: string): FileResourceManager
    /**
     * Get a pointer to the platform default #DeeResourceManager.
     */
    static getDefault(): ResourceManager
    static $gtype: GObject.Type
}
interface FilterModel_ConstructProps extends ProxyModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.FilterModel */
    /**
     * Property holding the #DeeFilter used to filter the model
     * defined in the #DeeFilterModel:back-end property.
     */
    filter?: Filter
}
class FilterModel {
    /* Properties of Dee-1.0.Dee.FilterModel */
    /**
     * Property holding the #DeeFilter used to filter the model
     * defined in the #DeeFilterModel:back-end property.
     */
    readonly filter: Filter
    /* Properties of Dee-1.0.Dee.ProxyModel */
    /**
     * The backend model used by this proxy model.
     */
    readonly backEnd: Model
    /**
     * Boolean property defining whether sequence numbers will be inherited
     * from the back end model.
     * You will most likely want to set this property to false
     * if the implementation manipulates with the rows in the model and keep
     * track of seqnums yourself.
     */
    readonly inheritSeqnums: boolean
    /**
     * Boolean property defining whether or not to automatically forward signals
     * from the back end model. This is especially useful for sub classes wishing
     * to do their own more advanced signal forwarding.
     */
    readonly proxySignals: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.FilterModel */
    /**
     * Includes `iter` from the back end model in the filtered model, appending
     * it to the end of the filtered rows.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     */
    appendIter(iter: ModelIter): ModelIter
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
    insertIter(iter: ModelIter, pos: number): ModelIter
    /**
     * Includes `iter` from the back end model in the filtered model, inserting it at
     * the position before `pos` pushing other rows down.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     * @param pos 
     */
    insertIterBefore(iter: ModelIter, pos: ModelIter): ModelIter
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
    insertIterWithOriginalOrder(iter: ModelIter): ModelIter
    /**
     * Includes `iter` from the back end model in the filtered model, prepending
     * it to the beginning of the filtered rows.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     */
    prependIter(iter: ModelIter): ModelIter
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    incSeqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    setSeqnum(seqnum: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.Model */
    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
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
    beginChangeset(): void
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
    clearTag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
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
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    getVardictSchema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
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
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
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
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
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
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
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
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
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
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
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
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals has been committed
     * to the model.
     */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals is about to be committed
     * to the model.
     * Note that not all model implementations use the changeset approach and
     * you might still get a row change signal outside of changeset-started and
     * changeset-finished signals. It also isn't guaranteed that a changeset
     * would always be non-empty.
     */
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    /**
     * Connect to this signal to be notified when a row is added to `self`.
     * @param iter a #DeeModelIter pointing to the newly added row
     */
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is changed.
     * @param iter a #DeeModelIter pointing to the changed row
     */
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is removed from `self`.
     *   The row is still valid while the signal is being emitted.
     * @param iter a #DeeModelIter pointing to the removed row
     */
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::back-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::back-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inherit-seqnums", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inherit-seqnums", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterModel_ConstructProps)
    _init (config?: FilterModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(origModel: Model, filter: Filter): FilterModel
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
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
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
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface GListResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
class GListResultSet {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.ResultSet */
    /**
     * Get the model associated with a result set
     */
    getModel(): Model
    /**
     * Get the number of #DeeModelIter<!-- -->s held in a #DeeResultSet.
     */
    getNRows(): number
    /**
     * Check if a call to dee_result_set_next() will succeed.
     */
    hasNext(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GListResultSet_ConstructProps)
    _init (config?: GListResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
interface HashIndex_ConstructProps extends Index_ConstructProps {
}
class HashIndex {
    /* Properties of Dee-1.0.Dee.Index */
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Index */
    /**
     * Iterate over an index optionally starting from some given term. Note that
     * unordered indexes (like #DeeHashIndex) has undefined behaviour with
     * this method.
     * @param startTerm The term to start from or %NULL to iterate over all terms
     * @param func Called for each term in the index
     */
    foreach(startTerm: string, func: IndexIterFunc): void
    /**
     * Get the analyzer being used to analyze terms extracted with the
     * #DeeModelReader used by this index.
     */
    getAnalyzer(): Analyzer
    /**
     * Get the model being indexed by this index
     */
    getModel(): Model
    /**
     * Get the number of indexed rows. A row is only indexed if it has at least one
     * term associated with it. If the analyzer has returned 0 terms then the row
     * is omitted from the index.
     */
    getNRows(): number
    /**
     * Get the number of rows that matches a given term
     * @param term The term to look for
     */
    getNRowsForTerm(term: string): number
    /**
     * Get the number of terms in the index
     */
    getNTerms(): number
    /**
     * Get the reader being used to extract terms from rows in the model
     */
    getReader(): ModelReader
    /**
     * Get the #DeeTermMatchFlag<!-- --> supported by this #DeeIndex instance
     */
    getSupportedTermMatchFlags(): number
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
    lookupOne(term: string): ModelIter
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::analyzer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::analyzer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HashIndex_ConstructProps)
    _init (config?: HashIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex
    static $gtype: GObject.Type
}
interface Index_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Index */
    /**
     * The #DeeAnalyzer used to analyze terms extracted by the model reader
     */
    analyzer?: Analyzer
    /**
     * The #DeeModel being indexed
     */
    model?: Model
    /**
     * The #DeeModelReader used to extract terms from rows in the model
     */
    reader?: ModelReader
}
class Index {
    /* Properties of Dee-1.0.Dee.Index */
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Index */
    /**
     * Iterate over an index optionally starting from some given term. Note that
     * unordered indexes (like #DeeHashIndex) has undefined behaviour with
     * this method.
     * @param startTerm The term to start from or %NULL to iterate over all terms
     * @param func Called for each term in the index
     */
    foreach(startTerm: string, func: IndexIterFunc): void
    /**
     * Get the analyzer being used to analyze terms extracted with the
     * #DeeModelReader used by this index.
     */
    getAnalyzer(): Analyzer
    /**
     * Get the model being indexed by this index
     */
    getModel(): Model
    /**
     * Get the number of indexed rows. A row is only indexed if it has at least one
     * term associated with it. If the analyzer has returned 0 terms then the row
     * is omitted from the index.
     */
    getNRows(): number
    /**
     * Get the number of rows that matches a given term
     * @param term The term to look for
     */
    getNRowsForTerm(term: string): number
    /**
     * Get the number of terms in the index
     */
    getNTerms(): number
    /**
     * Get the reader being used to extract terms from rows in the model
     */
    getReader(): ModelReader
    /**
     * Get the #DeeTermMatchFlag<!-- --> supported by this #DeeIndex instance
     */
    getSupportedTermMatchFlags(): number
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
    lookupOne(term: string): ModelIter
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::analyzer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::analyzer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static $gtype: GObject.Type
}
interface Peer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Peer */
    swarmName?: string
    swarmOwner?: boolean
}
class Peer {
    /* Properties of Dee-1.0.Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    readonly swarmOwner: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Peer */
    /**
     * Gets list of #GDBusConnection instances used by this #DeePeer instance.
     */
    getConnections(): Gio.DBusConnection[]
    /**
     * In case this peer is connected to a message bus, gets the unique DBus
     * address of the current swarm leader, otherwise returns id of the leader.
     */
    getSwarmLeader(): string
    /**
     * Gets the unique name for this swarm. The swarm leader is the Peer owning
     * this name on the session bus.
     */
    getSwarmName(): string
    isSwarmLeader(): boolean
    /**
     * Gets the value of the :swarm-owner property.
     * 
     * Note that this does NOT mean that the peer is leader of the swarm! Check also
     * dee_peer_is_swarm_leader().
     */
    isSwarmOwner(): boolean
    /**
     * Gets list of all peers currently in this swarm.
     */
    listPeers(): string[]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Dee-1.0.Dee.Peer */
    connect(sigName: "connection-acquired", callback: ((object: Gio.DBusConnection) => void)): number
    on(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    /**
     * Connect to this signal to be notified when peers close
     * their #GDBusConnection.
     * @param connection the closed #GDBusConnection
     */
    connect(sigName: "connection-closed", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    /**
     * Connect to this signal to be notified of existing and new peers that are
     *   in your swarm.
     * @param name the DBus name of the object found
     */
    connect(sigName: "peer-found", callback: ((name: string) => void)): number
    on(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-found", name: string): void
    /**
     * Connect to this signal to be notified when peers disconnect from the swarm
     * @param name the DBus name of the object that disconnected
     */
    connect(sigName: "peer-lost", callback: ((name: string) => void)): number
    on(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Peer_ConstructProps)
    _init (config?: Peer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Peer
    static $gtype: GObject.Type
}
interface ProxyModel_ConstructProps extends SerializableModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.ProxyModel */
    /**
     * The backend model used by this proxy model.
     */
    backEnd?: Model
    /**
     * Boolean property defining whether sequence numbers will be inherited
     * from the back end model.
     * You will most likely want to set this property to false
     * if the implementation manipulates with the rows in the model and keep
     * track of seqnums yourself.
     */
    inheritSeqnums?: boolean
    /**
     * Boolean property defining whether or not to automatically forward signals
     * from the back end model. This is especially useful for sub classes wishing
     * to do their own more advanced signal forwarding.
     */
    proxySignals?: boolean
}
class ProxyModel {
    /* Properties of Dee-1.0.Dee.ProxyModel */
    /**
     * The backend model used by this proxy model.
     */
    readonly backEnd: Model
    /**
     * Boolean property defining whether sequence numbers will be inherited
     * from the back end model.
     * You will most likely want to set this property to false
     * if the implementation manipulates with the rows in the model and keep
     * track of seqnums yourself.
     */
    readonly inheritSeqnums: boolean
    /**
     * Boolean property defining whether or not to automatically forward signals
     * from the back end model. This is especially useful for sub classes wishing
     * to do their own more advanced signal forwarding.
     */
    readonly proxySignals: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    incSeqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    setSeqnum(seqnum: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.Model */
    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
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
    beginChangeset(): void
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
    clearTag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
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
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    getVardictSchema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
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
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
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
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
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
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
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
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
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
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
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
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals has been committed
     * to the model.
     */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals is about to be committed
     * to the model.
     * Note that not all model implementations use the changeset approach and
     * you might still get a row change signal outside of changeset-started and
     * changeset-finished signals. It also isn't guaranteed that a changeset
     * would always be non-empty.
     */
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    /**
     * Connect to this signal to be notified when a row is added to `self`.
     * @param iter a #DeeModelIter pointing to the newly added row
     */
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is changed.
     * @param iter a #DeeModelIter pointing to the changed row
     */
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is removed from `self`.
     *   The row is still valid while the signal is being emitted.
     * @param iter a #DeeModelIter pointing to the removed row
     */
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: "notify::back-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::back-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inherit-seqnums", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inherit-seqnums", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyModel_ConstructProps)
    _init (config?: ProxyModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
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
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
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
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface SequenceModel_ConstructProps extends SerializableModel_ConstructProps {
}
class SequenceModel {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    incSeqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    setSeqnum(seqnum: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.Model */
    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
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
    beginChangeset(): void
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
    clearTag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
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
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    getVardictSchema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
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
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
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
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
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
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
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
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
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
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
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
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals has been committed
     * to the model.
     */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals is about to be committed
     * to the model.
     * Note that not all model implementations use the changeset approach and
     * you might still get a row change signal outside of changeset-started and
     * changeset-finished signals. It also isn't guaranteed that a changeset
     * would always be non-empty.
     */
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    /**
     * Connect to this signal to be notified when a row is added to `self`.
     * @param iter a #DeeModelIter pointing to the newly added row
     */
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is changed.
     * @param iter a #DeeModelIter pointing to the changed row
     */
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is removed from `self`.
     *   The row is still valid while the signal is being emitted.
     * @param iter a #DeeModelIter pointing to the removed row
     */
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SequenceModel_ConstructProps)
    _init (config?: SequenceModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SequenceModel
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
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
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
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface SerializableModel_ConstructProps extends GObject.Object_ConstructProps {
}
class SerializableModel {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    incSeqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    setSeqnum(seqnum: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.Model */
    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
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
    beginChangeset(): void
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
    clearTag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
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
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    getVardictSchema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
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
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
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
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
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
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
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
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
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
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
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
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals has been committed
     * to the model.
     */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals is about to be committed
     * to the model.
     * Note that not all model implementations use the changeset approach and
     * you might still get a row change signal outside of changeset-started and
     * changeset-finished signals. It also isn't guaranteed that a changeset
     * would always be non-empty.
     */
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    /**
     * Connect to this signal to be notified when a row is added to `self`.
     * @param iter a #DeeModelIter pointing to the newly added row
     */
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is changed.
     * @param iter a #DeeModelIter pointing to the changed row
     */
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is removed from `self`.
     *   The row is still valid while the signal is being emitted.
     * @param iter a #DeeModelIter pointing to the removed row
     */
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableModel_ConstructProps)
    _init (config?: SerializableModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
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
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
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
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends Peer_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Server */
    busAddress?: string
    sameUserOnly?: boolean
}
class Server {
    /* Properties of Dee-1.0.Dee.Server */
    readonly busAddress: string
    readonly sameUserOnly: boolean
    /* Properties of Dee-1.0.Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    readonly swarmOwner: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Server */
    /**
     * Gets a D-Bus address string that can be used by clients to connect to server.
     */
    getClientAddress(): string
    /* Methods of Dee-1.0.Dee.Peer */
    /**
     * Gets list of #GDBusConnection instances used by this #DeePeer instance.
     */
    getConnections(): Gio.DBusConnection[]
    /**
     * In case this peer is connected to a message bus, gets the unique DBus
     * address of the current swarm leader, otherwise returns id of the leader.
     */
    getSwarmLeader(): string
    /**
     * Gets the unique name for this swarm. The swarm leader is the Peer owning
     * this name on the session bus.
     */
    getSwarmName(): string
    isSwarmLeader(): boolean
    /**
     * Gets the value of the :swarm-owner property.
     * 
     * Note that this does NOT mean that the peer is leader of the swarm! Check also
     * dee_peer_is_swarm_leader().
     */
    isSwarmOwner(): boolean
    /**
     * Gets list of all peers currently in this swarm.
     */
    listPeers(): string[]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Dee-1.0.Dee.Peer */
    connect(sigName: "connection-acquired", callback: ((object: Gio.DBusConnection) => void)): number
    on(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    /**
     * Connect to this signal to be notified when peers close
     * their #GDBusConnection.
     * @param connection the closed #GDBusConnection
     */
    connect(sigName: "connection-closed", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    /**
     * Connect to this signal to be notified of existing and new peers that are
     *   in your swarm.
     * @param name the DBus name of the object found
     */
    connect(sigName: "peer-found", callback: ((name: string) => void)): number
    on(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-found", name: string): void
    /**
     * Connect to this signal to be notified when peers disconnect from the swarm
     * @param name the DBus name of the object that disconnected
     */
    connect(sigName: "peer-lost", callback: ((name: string) => void)): number
    on(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bus-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bus-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bus-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bus-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::same-user-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::same-user-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::same-user-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::same-user-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::same-user-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Server
    /* Function overloads */
    static new(swarmName: string): Server
    static newForAddress(swarmName: string, busAddress: string): Server
    /**
     * Helper method which creates bus address string for the given name, which
     * should have the same format as a DBus unique name.
     * @param name A name to create bus address for.
     * @param includeUsername Include current user name as part of the bus address.
     */
    static busAddressForName(name: string, includeUsername: boolean): string
    static $gtype: GObject.Type
}
interface SharedModel_ConstructProps extends ProxyModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.SharedModel */
    /**
     * Enumeration defining behavior of this model when trying to write to it.
     * 
     * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
     * when one process is considered an "owner" of a model and all the other
     * peers are supposed to only synchronize it for reading.
     * 
     * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
     */
    accessMode?: SharedModelAccessMode
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
    flushMode?: SharedModelFlushMode
    /**
     * The #DeePeer that this model uses to connect to the swarm
     */
    peer?: Peer
}
class SharedModel {
    /* Properties of Dee-1.0.Dee.SharedModel */
    /**
     * Enumeration defining behavior of this model when trying to write to it.
     * 
     * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
     * when one process is considered an "owner" of a model and all the other
     * peers are supposed to only synchronize it for reading.
     * 
     * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
     */
    readonly accessMode: SharedModelAccessMode
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
    flushMode: SharedModelFlushMode
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
    /* Properties of Dee-1.0.Dee.ProxyModel */
    /**
     * The backend model used by this proxy model.
     */
    readonly backEnd: Model
    /**
     * Boolean property defining whether sequence numbers will be inherited
     * from the back end model.
     * You will most likely want to set this property to false
     * if the implementation manipulates with the rows in the model and keep
     * track of seqnums yourself.
     */
    readonly inheritSeqnums: boolean
    /**
     * Boolean property defining whether or not to automatically forward signals
     * from the back end model. This is especially useful for sub classes wishing
     * to do their own more advanced signal forwarding.
     */
    readonly proxySignals: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SharedModel */
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
    flushRevisionQueue(): number
    /**
     * Similar to dee_shared_model_flush_revision_queue(), but also blocks
     * the mainloop until all the underlying transport streams have been flushed.
     * 
     * <emphasis>Important</emphasis>: This method <emphasis>may</emphasis> flush
     * your internal queue of DBus messages forcing them to be send before this call
     * returns.
     */
    flushRevisionQueueSync(): number
    /**
     * Convenience function for accessing the #DeeSharedModel:flush-mode property.
     */
    getFlushMode(): SharedModelFlushMode
    /**
     * Convenience function for accessing the #DeeSharedModel:peer property
     */
    getPeer(): Peer
    /**
     * Convenience function for accessing the #DeePeer:swarm-name property of the
     * #DeePeer defined in the #DeeSharedModel:peer property.
     */
    getSwarmName(): string
    /**
     * Check if the model is the swarm leader. This is a convenience function for
     * accessing the #DeeSharedModel:peer property and checking if it's the swarm
     * leader.
     */
    isLeader(): boolean
    /**
     * Check if the model is synchronized with its peers. Before modifying a
     * shared model in any way (except dee_model_set_schema()) you should wait for
     * it to become synchronized. This is normally done by waiting for the
     * &quot;notify::synchronized&quot; signal.
     * 
     * This method is purely a convenience function for accessing the
     * #DeeSharedModel:synchronized property.
     */
    isSynchronized(): boolean
    /**
     * Convenience function for setting the #DeeSharedModel:flush-mode property.
     * @param mode Flush mode to use
     */
    setFlushMode(mode: SharedModelFlushMode): void
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    incSeqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    setSeqnum(seqnum: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.Model */
    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
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
    beginChangeset(): void
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
    clearTag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
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
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    getVardictSchema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
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
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
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
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
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
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
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
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
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
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
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
    /* Signals of Dee-1.0.Dee.SharedModel */
    /**
     * Emitted right before a remote transaction will be committed to the model.
     * @param beginSeqnum The seqnum the model has now
     * @param endSeqnum The seqnum the model will have after the transaction is applied
     */
    connect(sigName: "begin-transaction", callback: ((beginSeqnum: number, endSeqnum: number) => void)): number
    on(sigName: "begin-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void): NodeJS.EventEmitter
    emit(sigName: "begin-transaction", beginSeqnum: number, endSeqnum: number): void
    /**
     * Emitted right after a remote transaction has been committed to the model.
     * @param beginSeqnum The seqnum the model had before the transaction was applied
     * @param endSeqnum The seqnum the model has now
     */
    connect(sigName: "end-transaction", callback: ((beginSeqnum: number, endSeqnum: number) => void)): number
    on(sigName: "end-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void): NodeJS.EventEmitter
    emit(sigName: "end-transaction", beginSeqnum: number, endSeqnum: number): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals has been committed
     * to the model.
     */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals is about to be committed
     * to the model.
     * Note that not all model implementations use the changeset approach and
     * you might still get a row change signal outside of changeset-started and
     * changeset-finished signals. It also isn't guaranteed that a changeset
     * would always be non-empty.
     */
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    /**
     * Connect to this signal to be notified when a row is added to `self`.
     * @param iter a #DeeModelIter pointing to the newly added row
     */
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is changed.
     * @param iter a #DeeModelIter pointing to the changed row
     */
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is removed from `self`.
     *   The row is still valid while the signal is being emitted.
     * @param iter a #DeeModelIter pointing to the removed row
     */
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: "notify::access-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flush-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::back-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::back-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::back-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inherit-seqnums", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inherit-seqnums", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inherit-seqnums", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SharedModel_ConstructProps)
    _init (config?: SharedModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): SharedModel
    static newForPeer(peer: Peer): SharedModel
    static newWithBackEnd(name: string, backEnd: Model): SharedModel
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
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
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
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface TermList_ConstructProps extends GObject.Object_ConstructProps {
}
class TermList {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.TermList */
    /**
     * Add a term to the termlist. Note that it is possible to add a term multiple
     * times. The effect of this is determined by the #DeeModelIndex consuming the
     * #DeeTermList.
     * @param term The term to add
     */
    addTerm(term: string): TermList
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
    getTerm(n: number): string
    numTerms(): number
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TermList_ConstructProps)
    _init (config?: TermList_ConstructProps): void
    static $gtype: GObject.Type
}
interface TextAnalyzer_ConstructProps extends Analyzer_ConstructProps {
}
class TextAnalyzer {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Analyzer */
    /**
     * Register a #DeeTermFilterFunc to be called whenever dee_analyzer_analyze()
     * is called.
     * 
     * Term filters can be used to normalize, add, or remove terms from an input
     * data stream.
     * @param filterFunc Function to call
     */
    addTermFilter(filterFunc: TermFilterFunc): void
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
     * @param termsOut A #DeeTermList to place the generated terms in.                           If %NULL to terms are generated
     * @param colkeysOut A #DeeTermList to place generated collation keys in.                             If %NULL no collation keys are generated
     */
    analyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    /**
     * Compare collation keys generated by dee_analyzer_collate_key() with similar
     * semantics as strcmp(). See also dee_analyzer_collate_cmp_func() if you
     * need a version of this function that works as a #GCompareDataFunc.
     * 
     * The default implementation in #DeeAnalyzer just uses strcmp().
     * @param key1 The first collation key to compare
     * @param key2 The second collation key to compare
     */
    collateCmp(key1: string, key2: string): number
    /**
     * Generate a collation key for a set of input data (usually a UTF-8 string
     * passed through tokenization and term filters of the analyzer).
     * 
     * The default implementation just calls g_strdup().
     * @param data The input data to generate a collation key for
     */
    collateKey(data: string): string
    /**
     * Tokenize some input data (which is normally, but not necessarily,
     * a UTF-8 string).
     * 
     * Tokenization splits the input data into constituents (in most cases words),
     * but does not run it through any of the term filters set for the analyzer.
     * It is undefined if the tokenization process itself does any normalization.
     * @param data The input data to analyze
     * @param termsOut A #DeeTermList to place the generated tokens in.
     */
    tokenize(data: string, termsOut: TermList): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TextAnalyzer_ConstructProps)
    _init (config?: TextAnalyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextAnalyzer
    /* Function overloads */
    static new(): TextAnalyzer
    static $gtype: GObject.Type
}
interface Transaction_ConstructProps extends SerializableModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Transaction */
    target?: Model
}
class Transaction {
    /* Properties of Dee-1.0.Dee.Transaction */
    readonly target: Model
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Transaction */
    /**
     * Apply a transaction to its target model. After this call the transaction
     * is invalidated and must be freed with g_object_unref().
     */
    commit(): boolean
    /**
     * Get the target model of a transaction. This is just a convenience method
     * for accessing the :target property.
     */
    getTarget(): Model
    /**
     * Check if a #DeeTransaction has been committed. This method is mainly for
     * debugging and testing purposes.
     */
    isCommitted(): boolean
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    incSeqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    setSeqnum(seqnum: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.Model */
    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
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
    beginChangeset(): void
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
    clearTag(iter: ModelIter, tag: ModelTag): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
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
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @param column the column index to get the schemas for
     */
    getVardictSchema(column: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
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
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
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
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
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
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
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
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
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
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
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
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals has been committed
     * to the model.
     */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    /**
     * Connect to this signal to be notified when a changeset that can contain
     * multiple row additions / changes / removals is about to be committed
     * to the model.
     * Note that not all model implementations use the changeset approach and
     * you might still get a row change signal outside of changeset-started and
     * changeset-finished signals. It also isn't guaranteed that a changeset
     * would always be non-empty.
     */
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    /**
     * Connect to this signal to be notified when a row is added to `self`.
     * @param iter a #DeeModelIter pointing to the newly added row
     */
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is changed.
     * @param iter a #DeeModelIter pointing to the changed row
     */
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    /**
     * Connect to this signal to be notified when a row is removed from `self`.
     *   The row is still valid while the signal is being emitted.
     * @param iter a #DeeModelIter pointing to the removed row
     */
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target: Model): Transaction
    static errorQuark(): GLib.Quark
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
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
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
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface TreeIndex_ConstructProps extends Index_ConstructProps {
}
class TreeIndex {
    /* Properties of Dee-1.0.Dee.Index */
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Index */
    /**
     * Iterate over an index optionally starting from some given term. Note that
     * unordered indexes (like #DeeHashIndex) has undefined behaviour with
     * this method.
     * @param startTerm The term to start from or %NULL to iterate over all terms
     * @param func Called for each term in the index
     */
    foreach(startTerm: string, func: IndexIterFunc): void
    /**
     * Get the analyzer being used to analyze terms extracted with the
     * #DeeModelReader used by this index.
     */
    getAnalyzer(): Analyzer
    /**
     * Get the model being indexed by this index
     */
    getModel(): Model
    /**
     * Get the number of indexed rows. A row is only indexed if it has at least one
     * term associated with it. If the analyzer has returned 0 terms then the row
     * is omitted from the index.
     */
    getNRows(): number
    /**
     * Get the number of rows that matches a given term
     * @param term The term to look for
     */
    getNRowsForTerm(term: string): number
    /**
     * Get the number of terms in the index
     */
    getNTerms(): number
    /**
     * Get the reader being used to extract terms from rows in the model
     */
    getReader(): ModelReader
    /**
     * Get the #DeeTermMatchFlag<!-- --> supported by this #DeeIndex instance
     */
    getSupportedTermMatchFlags(): number
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
    lookupOne(term: string): ModelIter
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::analyzer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::analyzer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::analyzer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeIndex_ConstructProps)
    _init (config?: TreeIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex
    static $gtype: GObject.Type
}
abstract class AnalyzerClass {
    /* Fields of Dee-1.0.Dee.AnalyzerClass */
    analyze: (self: Analyzer, data: string, termsOut?: TermList | null, colkeysOut?: TermList | null) => void
    tokenize: (self: Analyzer, data: string, termsOut: TermList) => void
    addTermFilter: (self: Analyzer, filterFunc: TermFilterFunc) => void
    collateKey: (self: Analyzer, data: string) => string
    collateCmp: (self: Analyzer, key1: string, key2: string) => number
    static name: string
}
class AnalyzerPrivate {
    static name: string
}
abstract class ClientClass {
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class FileResourceManagerClass {
    /* Fields of Dee-1.0.Dee.FileResourceManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class Filter {
    /* Fields of Dee-1.0.Dee.Filter */
    /**
     * The #DeeModelMapFunc used to construct
     *                              the initial contents of a #DeeFilterModel
     */
    mapFunc: FilterMapFunc
    /**
     * Callback invoked when the original model changes
     */
    mapNotify: FilterMapNotify
    /**
     * Callback for freeing the `user_data`
     * `userdata` (closure): Free form user data associated with the filter.
     *                       This pointer will be passed to `map_func` and `map_notify`
     */
    destroy: GLib.DestroyNotify
    userdata: object
    /* Methods of Dee-1.0.Dee.Filter */
    /**
     * Call the #DeeFilterMapFunc function of a #DeeFilter.
     * When using a #DeeFilterModel you should not call this method yourself.
     * @param origModel The model that is being filtered
     * @param filterModel The #DeeFilterModel that holds the                filtered subset of `orig_model`
     */
    map(origModel: Model, filterModel: FilterModel): void
    /**
     * Call the #DeeFilterMapNotify function of a #DeeFilter.
     * When using a #DeeFilterModel you should not call this method yourself.
     * @param origIter The #DeeModelIter added to `orig_model`
     * @param origModel The model that is being filtered
     * @param filterModel The #DeeFilterModel that holds the                filtered subset of `orig_model`
     */
    notify(origIter: ModelIter, origModel: Model, filterModel: FilterModel): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    static newCollator(column: number): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted descending according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    static newCollatorDesc(column: number): /* outFilter */ Filter
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
    static newForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which has an exact match on some string column. A #DeeFilterModel created
     * with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string key to match
     * @param key 
     */
    static newForKeyColumn(column: number, key: string): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which match a regular expression on some string column. A #DeeFilterModel
     * created with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string to match
     * @param regex The regular expression `column` must match
     */
    static newRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
    /**
     * Create a new #DeeFilter sorting a model according to a #DeeCompareRowFunc.
     * @param cmpRow A #DeeCompareRowFunc to use for sorting
     */
    static newSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
}
abstract class FilterModelClass {
    static name: string
}
class FilterModelPrivate {
    static name: string
}
abstract class GListResultSetClass {
    /* Fields of Dee-1.0.Dee.GListResultSetClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HashIndexClass {
    /* Fields of Dee-1.0.Dee.HashIndexClass */
    parentClass: IndexClass
    static name: string
}
class HashIndexPrivate {
    static name: string
}
class ICUTermFilter {
    /* Methods of Dee-1.0.Dee.ICUTermFilter */
    /**
     * Apply a #DeeICUTermFilter on a piece of UTF-8 text.
     * @param text The text to apply the filter on
     */
    apply(text: string): string
    /**
     * Free all resources allocated by a #DeeICUTermFilter.
     */
    destroy(): void
    static name: string
}
abstract class IndexClass {
    /* Fields of Dee-1.0.Dee.IndexClass */
    parentClass: GObject.ObjectClass
    lookup: (self: Index, term: string, flags: TermMatchFlag) => ResultSet
    foreach: (self: Index, startTerm: string, func: IndexIterFunc) => void
    getNTerms: (self: Index) => number
    getNRows: (self: Index) => number
    getNRowsForTerm: (self: Index, term: string) => number
    getSupportedTermMatchFlags: (self: Index) => number
    static name: string
}
class IndexPrivate {
    static name: string
}
abstract class ModelIface {
    /* Fields of Dee-1.0.Dee.ModelIface */
    gIface: GObject.TypeInterface
    rowAdded: (self: Model, iter: ModelIter) => void
    rowRemoved: (self: Model, iter: ModelIter) => void
    rowChanged: (self: Model, iter: ModelIter) => void
    setSchemaFull: (self: Model, columnSchemas: string[]) => void
    getSchema: (self: Model) => string[]
    getColumnSchema: (self: Model, column: number) => string
    getFieldSchema: (self: Model, fieldName: string) => [ /* returnType */ string, /* outColumn */ number ]
    getColumnIndex: (self: Model, columnName: string) => number
    setColumnNamesFull: (self: Model, columnNames: string[]) => void
    getColumnNames: (self: Model) => string[]
    registerVardictSchema: (self: Model, numColumn: number, schemas: GLib.HashTable) => void
    getVardictSchema: (self: Model, numColumn: number) => GLib.HashTable
    getNColumns: (self: Model) => number
    getNRows: (self: Model) => number
    appendRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    prependRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    insertRow: (self: Model, pos: number, rowMembers: GLib.Variant[]) => ModelIter
    insertRowBefore: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => ModelIter
    insertRowSorted: (self: Model, rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc) => ModelIter
    findRowSorted: (self: Model, rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc) => [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    remove: (self: Model, iter: ModelIter) => void
    clear: (self: Model) => void
    setValue: (self: Model, iter: ModelIter, column: number, value: GLib.Variant) => void
    setRow: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => void
    getValue: (self: Model, iter: ModelIter, column: number) => GLib.Variant
    getValueByName: (self: Model, iter: ModelIter, columnName: string) => GLib.Variant
    getFirstIter: (self: Model) => ModelIter
    getLastIter: (self: Model) => ModelIter
    getIterAtRow: (self: Model, row: number) => ModelIter
    getBool: (self: Model, iter: ModelIter, column: number) => boolean
    getUchar: (self: Model, iter: ModelIter, column: number) => number
    getInt32: (self: Model, iter: ModelIter, column: number) => number
    getUint32: (self: Model, iter: ModelIter, column: number) => number
    getInt64: (self: Model, iter: ModelIter, column: number) => number
    getUint64: (self: Model, iter: ModelIter, column: number) => number
    getDouble: (self: Model, iter: ModelIter, column: number) => number
    getString: (self: Model, iter: ModelIter, column: number) => string
    next: (self: Model, iter: ModelIter) => ModelIter
    prev: (self: Model, iter: ModelIter) => ModelIter
    isFirst: (self: Model, iter: ModelIter) => boolean
    isLast: (self: Model, iter: ModelIter) => boolean
    getPosition: (self: Model, iter: ModelIter) => number
    registerTag: (self: Model, tagDestroy: GLib.DestroyNotify) => ModelTag
    getTag: (self: Model, iter: ModelIter, tag: ModelTag) => object | null
    setTag: (self: Model, iter: ModelIter, tag: ModelTag, value?: object | null) => void
    getRow: (self: Model, iter: ModelIter, outRowMembers: GLib.Variant) => GLib.Variant
    beginChangeset: (self: Model) => void
    endChangeset: (self: Model) => void
    changesetStarted: (self: Model) => void
    changesetFinished: (self: Model) => void
    static name: string
}
class ModelIter {
    static name: string
}
class ModelReader {
    /* Fields of Dee-1.0.Dee.ModelReader */
    /**
     * The #DeeModelReaderFunc used to extract
     *                                 string from a model
     */
    readerFunc: ModelReaderFunc
    /**
     * user data to pass to `reader_func`
     */
    userdata: object
    /**
     * Called when the reader is destroyed
     */
    destroy: GLib.DestroyNotify
    /* Methods of Dee-1.0.Dee.ModelReader */
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
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * A #DeeModelReader reading a %gint32 from a #DeeModel at a given column
     * @param column The column index to read a %gint32 from
     */
    static newForInt32Column(column: number): /* outReader */ ModelReader
    /**
     * A #DeeModelReader reading a string from a #DeeModel at a given column
     * @param column The column index to read a string from
     */
    static newForStringColumn(column: number): /* outReader */ ModelReader
    /**
     * A #DeeModelReader reading a %guint32 from a #DeeModel at a given column
     * @param column The column index to read a %guint32 from
     */
    static newForUint32Column(column: number): /* outReader */ ModelReader
}
class ModelTag {
    static name: string
}
abstract class PeerClass {
    /* Fields of Dee-1.0.Dee.PeerClass */
    peerFound: (self: Peer, name: string) => void
    peerLost: (self: Peer, name: string) => void
    connectionAcquired: (self: Peer, connection: Gio.DBusConnection) => void
    connectionClosed: (self: Peer, connection: Gio.DBusConnection) => void
    getSwarmLeader: (self: Peer) => string
    isSwarmLeader: (self: Peer) => boolean
    getConnections: (self: Peer) => Gio.DBusConnection[]
    listPeers: (self: Peer) => string[]
    static name: string
}
class PeerPrivate {
    static name: string
}
abstract class ProxyModelClass {
    static name: string
}
class ProxyModelPrivate {
    static name: string
}
abstract class ResourceManagerIface {
    /* Fields of Dee-1.0.Dee.ResourceManagerIface */
    gIface: GObject.TypeInterface
    store: (self: ResourceManager, resource: Serializable, resourceName: string) => boolean
    load: (self: ResourceManager, resourceName: string) => GObject.Object
    static name: string
}
abstract class ResultSetIface {
    /* Fields of Dee-1.0.Dee.ResultSetIface */
    gIface: GObject.TypeInterface
    getNRows: (self: ResultSet) => number
    next: (self: ResultSet) => ModelIter
    hasNext: (self: ResultSet) => boolean
    peek: (self: ResultSet) => ModelIter
    seek: (self: ResultSet, pos: number) => void
    tell: (self: ResultSet) => number
    getModel: (self: ResultSet) => Model
    static name: string
}
abstract class SequenceModelClass {
    static name: string
}
class SequenceModelPrivate {
    static name: string
}
abstract class SerializableIface {
    /* Fields of Dee-1.0.Dee.SerializableIface */
    gIface: GObject.TypeInterface
    serialize: (self: Serializable) => GLib.Variant
    static name: string
}
abstract class SerializableModelClass {
    /* Fields of Dee-1.0.Dee.SerializableModelClass */
    getSeqnum: (self: Model) => number
    setSeqnum: (self: Model, seqnum: number) => void
    incSeqnum: (self: Model) => number
    static name: string
}
class SerializableModelPrivate {
    static name: string
}
abstract class ServerClass {
    static name: string
}
class ServerPrivate {
    static name: string
}
abstract class SharedModelClass {
    static name: string
}
class SharedModelPrivate {
    static name: string
}
abstract class TermListClass {
    /* Fields of Dee-1.0.Dee.TermListClass */
    parentClass: GObject.ObjectClass
    getTerm: (self: TermList, n: number) => string
    addTerm: (self: TermList, term: string) => TermList
    numTerms: (self: TermList) => number
    clear: (self: TermList) => TermList
    clone: (self: TermList) => TermList
    static name: string
}
class TermListPrivate {
    static name: string
}
abstract class TextAnalyzerClass {
    static name: string
}
class TextAnalyzerPrivate {
    static name: string
}
abstract class TransactionClass {
    static name: string
}
class TransactionPrivate {
    static name: string
}
abstract class TreeIndexClass {
    /* Fields of Dee-1.0.Dee.TreeIndexClass */
    parentClass: IndexClass
    static name: string
}
class TreeIndexPrivate {
    static name: string
}
}
export default Dee;