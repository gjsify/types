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

export namespace Dee {
    /**
     * Dee-1.0
     */

    /**
     * Error codes for the ICU extension to Dee. These codes will be set when the
     * error domain is #DEE_ICU_ERROR.
     * @gir-type Struct
     */
    class ICUError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Error parsing a transliteration rule
         */
        static BAD_RULE: number;
        /**
         * Error parsing a transliterator system id
         */
        static BAD_ID: number;
        /**
         * The ICU subsystem returned an error that is not
         *                         handled in Dee
         */
        static UNKNOWN: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    export namespace SharedModelAccessMode {
        export const $gtype: GObject.GType<SharedModelAccessMode>;
    }

    /**
     * Enumeration defining behavior of the model with regards to writes from
     * other peers in the swarm.
     * @gir-type Enum
     */
    enum SharedModelAccessMode {
        WORLD_WRITABLE,
        LEADER_WRITABLE,
    }

    /**
     * @gir-type Enum
     */
    enum SharedModelError {
        SHARED_MODEL_ERROR_LEADER_INVALIDATED,
    }

    /**
     * @gir-type Enum
     */
    export namespace SharedModelFlushMode {
        export const $gtype: GObject.GType<SharedModelFlushMode>;
    }

    /**
     * Enumeration defining flushing behavior of a shared model.
     * @gir-type Enum
     */
    enum SharedModelFlushMode {
        AUTOMATIC,
        MANUAL,
    }

    /**
     * Error codes for the {@link Dee.Transaction} class. These codes will be set when the
     * error domain is #DEE_TRANSACTION_ERROR.
     * @gir-type Enum
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

    const PEER_DBUS_IFACE: string;
    /**
     * String constant defining the name of the DBus Model interface.
     */
    const SEQUENCE_MODEL_DBUS_IFACE: string;
    /**
     * String constant defining the name of the DBus Model interface.
     */
    const SHARED_MODEL_DBUS_IFACE: string;
    /**
     * Create a new {@link Dee.Filter} with the given parameters. This call will zero
     * the `out_filter` struct.
     * @param map_func The {@link Dee.FilterMapFunc} to use for the filter
     * @param map_notify The {@link Dee.FilterMapNotify} to use for the filter
     * @param destroy The {@link GLib.DestroyNotify} to call on                         `userdata` when disposing of the filter
     */
    function filter_new(
        map_func: FilterMapFunc,
        map_notify: FilterMapNotify,
        destroy: GLib.DestroyNotify | null,
    ): Filter;
    /**
     * Create a {@link Dee.Filter} that takes string values from a column in the model
     * and builds a {@link Dee.FilterModel} with the rows sorted according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    function filter_new_collator(column: number): Filter;
    /**
     * Create a {@link Dee.Filter} that takes string values from a column in the model
     * and builds a {@link Dee.FilterModel} with the rows sorted descending according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    function filter_new_collator_desc(column: number): Filter;
    /**
     * Create a {@link Dee.Filter} that only includes rows from the original model
     * which match a variant value in a given column. A {@link Dee.FilterModel}
     * created with this filter will be ordered in accordance with its parent model.
     *
     * This method will work on any column, disregarding its schema, since the
     * value comparison is done using `g_variant_equal()`. This means you can use
     * this filter as a convenient fallback when there is no predefined filter
     * for your column type if raw performance is not paramount.
     * @param column The index of a column containing the string to match
     * @param value A {@link GLib.Variant} value columns must match exactly.         The matching semantics are those of `g_variant_equal()`. If `value`         is floating the ownership will be transfered to the filter
     */
    function filter_new_for_any_column(column: number, value: GLib.Variant): Filter;
    /**
     * Create a {@link Dee.Filter} that only includes rows from the original model
     * which has an exact match on some string column. A {@link Dee.FilterModel} created
     * with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string key to match
     * @param key
     */
    function filter_new_for_key_column(column: number, key: string): Filter;
    /**
     * Create a {@link Dee.Filter} that only includes rows from the original model
     * which match a regular expression on some string column. A {@link Dee.FilterModel}
     * created with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string to match
     * @param regex The regular expression `column` must match
     */
    function filter_new_regex(column: number, regex: GLib.Regex): Filter;
    /**
     * Create a new {@link Dee.Filter} sorting a model according to a {@link Dee.CompareRowFunc}.
     * @param cmp_row A {@link Dee.CompareRowFunc} to use for sorting
     * @param cmp_destroy The {@link GLib.DestroyNotify} to call on                         `cmp_user_data` when disposing of the filter
     */
    function filter_new_sort(cmp_row: CompareRowFunc, cmp_destroy: GLib.DestroyNotify | null): Filter;
    function icu_error_quark(): GLib.Quark;
    /**
     * Create a new {@link Dee.ModelReader} with the given parameters. This call will zero
     * the `out_reader` struct.
     * @param reader_func The {@link Dee.ModelReaderFunc} to use for the reader
     * @param destroy The {@link GLib.DestroyNotify} to call on                                        `userdata` when disposing of the reader
     */
    function model_reader_new(reader_func: ModelReaderFunc, destroy: GLib.DestroyNotify | null): ModelReader;
    /**
     * A {@link Dee.ModelReader} reading a %gint32 from a {@link Dee.Model} at a given column
     * @param column The column index to read a %gint32 from
     */
    function model_reader_new_for_int32_column(column: number): ModelReader;
    /**
     * A {@link Dee.ModelReader} reading a string from a {@link Dee.Model} at a given column
     * @param column The column index to read a string from
     */
    function model_reader_new_for_string_column(column: number): ModelReader;
    /**
     * A {@link Dee.ModelReader} reading a %guint32 from a {@link Dee.Model} at a given column
     * @param column The column index to read a %guint32 from
     */
    function model_reader_new_for_uint32_column(column: number): ModelReader;
    /**
     * Get a pointer to the platform default {@link Dee.ResourceManager}.
     * @returns The default resource manager for the platform.               Do not unreference. If you need to keep the instance around               you must manually reference it.
     */
    function resource_manager_get_default(): ResourceManager;
    /**
     * Reconstruct a {@link Dee.Serializable} from {@link GLib.Variant} data. For this function
     * to work you need to register a parser with
     * `dee_serializable_register_parser()`. Any native Dee class will do so
     * automatically.
     *
     * This method only works on data created with `dee_serializable_serialize()`
     * and <emphasis>not</emphasis> with data from `dee_serializable_externalize()`.
     *
     * Since a {@link Dee.SerializableParseFunc} is not allowed to fail - by contract -
     * it can be guaranteed that this function only returns `null` in case there
     * is no known parser for `type` and {@link GLib.Variant} signature of `data`.
     * @param data The {@link GLib.Variant} data to parse. If this is a floating reference it will        be consumed
     * @param type The {@link GObject.GType} of the class to instantiate from `data`
     * @returns A newly constructed {@link GObject.Object} build from `data`               or `null` in case no parser has been registered for the given               {@link GObject.GType} or variant signature. Free with `g_object_unref()`.
     */
    function serializable_parse<T = GObject.Object>(data: GLib.Variant, type: GObject.GType): T;
    /**
     * Reconstruct a {@link Dee.Serializable} from {@link GLib.Variant} data. For this function
     * to work you need to register a parser with
     * `dee_serializable_register_parser()`. Any native Dee class will do so
     * automatically.
     *
     * This method only works on data created with `dee_serializable_externalize()`
     * and <emphasis>not</emphasis> with data from  `dee_serializable_serialize()`.
     *
     * Since a {@link Dee.SerializableParseFunc} is not allowed to fail - by contract -
     * it can be guaranteed that this function only returns `null` in case there
     * is no known parser for the {@link GObject.GType} or {@link GLib.Variant} signature of `data`.
     * @param data The {@link GLib.Variant} data to parse
     * @returns A newly constructed {@link GObject.Object} build from `data`               or `null` in case no parser has been registered for the given               {@link GObject.GType} or variant signature. Free with `g_object_unref()`.
     */
    function serializable_parse_external<T = GObject.Object>(data: GLib.Variant): T;
    /**
     * @gir-type Callback
     */
    interface CollatorFunc {
        (input: string): string;
    }
    /**
     * @gir-type Callback
     */
    interface CompareRowFunc {
        (row1: GLib.Variant[], row2: GLib.Variant[]): number;
    }
    /**
     * @gir-type Callback
     */
    interface CompareRowSizedFunc {
        (row1: GLib.Variant[], row2: GLib.Variant[]): number;
    }
    /**
     * @gir-type Callback
     */
    interface FilterMapFunc {
        (orig_model: Model, filter_model: FilterModel): void;
    }
    /**
     * @gir-type Callback
     */
    interface FilterMapNotify {
        (orig_model: Model, orig_iter: ModelIter, filter_model: FilterModel): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface IndexIterFunc {
        (key: string, rows: ResultSet): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface ModelReaderFunc {
        (model: Model, iter: ModelIter): string;
    }
    /**
     * @gir-type Callback
     */
    interface SerializableParseFunc {
        (data: GLib.Variant): GObject.Object;
    }
    /**
     * @gir-type Callback
     */
    interface TermFilterFunc {
        (terms_in: TermList, terms_out: TermList): void;
    }
    /**
     * Flags passed to `dee_index_lookup()` to control how matching is done.
     * Note that it is not required that index backends support more than just
     * #DEE_TERM_MATCH_EXACT.
     *
     * You can query for the supported flags with
     * `dee_index_get_supported_term_match_flags()`.
     * @gir-type Flags
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

    namespace Analyzer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * All fields in the DeeAnalyzer structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class Analyzer extends GObject.Object {
        static $gtype: GObject.GType<Analyzer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Analyzer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Analyzer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Analyzer;

        // Signals

        /** @signal */
        connect<K extends keyof Analyzer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Analyzer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Analyzer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Analyzer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Analyzer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Analyzer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * A {@link GLib.CompareDataFunc} using a {@link Dee.Analyzer} to compare the keys. This is just
         * a convenience wrapper around `dee_analyzer_collate_cmp()`.
         * @param key1 The first key to compare
         * @param key2 The second key to compare
         * @param analyzer The {@link Dee.Analyzer} to use for the comparison
         */
        static collate_cmp_func(key1: string, key2: string, analyzer?: any | null): number;

        // Virtual methods

        /**
         * Register a {@link Dee.TermFilterFunc} to be called whenever `dee_analyzer_analyze()`
         * is called.
         *
         * Term filters can be used to normalize, add, or remove terms from an input
         * data stream.
         * @param filter_func Function to call
         * @param filter_destroy Called on `filter_data` when the {@link Dee.Analyzer}                                owning the filter is destroyed
         * @virtual
         */
        vfunc_add_term_filter(filter_func: TermFilterFunc, filter_destroy?: GLib.DestroyNotify | null): void;
        /**
         * Extract terms and or collation keys from some input data (which is normally,
         * but not necessarily, a UTF-8 string).
         *
         * The terms and corresponding collation keys will be written in order to the
         * provided {@link Dee.TermList}<!-- -->s.
         *
         * Implementation notes for subclasses:
         * The analysis process must call `dee_analyzer_tokenize()` and run the tokens
         * through all term filters added with `dee_analyzer_add_term_filter()`.
         * Collation keys must be generated with `dee_analyzer_collate_key()`.
         * @param data The input data to analyze
         * @param terms_out A {@link Dee.TermList} to place the generated terms in.                           If `null` to terms are generated
         * @param colkeys_out A {@link Dee.TermList} to place generated collation keys in.                             If `null` no collation keys are generated
         * @virtual
         */
        vfunc_analyze(data: string, terms_out?: TermList | null, colkeys_out?: TermList | null): void;
        /**
         * Compare collation keys generated by `dee_analyzer_collate_key()` with similar
         * semantics as `strcmp()`. See also `dee_analyzer_collate_cmp_func()` if you
         * need a version of this function that works as a {@link GLib.CompareDataFunc}.
         *
         * The default implementation in {@link Dee.Analyzer} just uses `strcmp()`.
         * @param key1 The first collation key to compare
         * @param key2 The second collation key to compare
         * @virtual
         */
        vfunc_collate_cmp(key1: string, key2: string): number;
        /**
         * Generate a collation key for a set of input data (usually a UTF-8 string
         * passed through tokenization and term filters of the analyzer).
         *
         * The default implementation just calls `g_strdup()`.
         * @param data The input data to generate a collation key for
         * @virtual
         */
        vfunc_collate_key(data: string): string;
        /**
         * Tokenize some input data (which is normally, but not necessarily,
         * a UTF-8 string).
         *
         * Tokenization splits the input data into constituents (in most cases words),
         * but does not run it through any of the term filters set for the analyzer.
         * It is undefined if the tokenization process itself does any normalization.
         * @param data The input data to analyze
         * @param terms_out A {@link Dee.TermList} to place the generated tokens in.
         * @virtual
         */
        vfunc_tokenize(data: string, terms_out: TermList): void;

        // Methods

        /**
         * Register a {@link Dee.TermFilterFunc} to be called whenever `dee_analyzer_analyze()`
         * is called.
         *
         * Term filters can be used to normalize, add, or remove terms from an input
         * data stream.
         * @param filter_func Function to call
         * @param filter_destroy Called on `filter_data` when the {@link Dee.Analyzer}                                owning the filter is destroyed
         */
        add_term_filter(filter_func: TermFilterFunc, filter_destroy?: GLib.DestroyNotify | null): void;
        /**
         * Extract terms and or collation keys from some input data (which is normally,
         * but not necessarily, a UTF-8 string).
         *
         * The terms and corresponding collation keys will be written in order to the
         * provided {@link Dee.TermList}<!-- -->s.
         *
         * Implementation notes for subclasses:
         * The analysis process must call `dee_analyzer_tokenize()` and run the tokens
         * through all term filters added with `dee_analyzer_add_term_filter()`.
         * Collation keys must be generated with `dee_analyzer_collate_key()`.
         * @param data The input data to analyze
         * @param terms_out A {@link Dee.TermList} to place the generated terms in.                           If `null` to terms are generated
         * @param colkeys_out A {@link Dee.TermList} to place generated collation keys in.                             If `null` no collation keys are generated
         */
        analyze(data: string, terms_out?: TermList | null, colkeys_out?: TermList | null): void;
        /**
         * Compare collation keys generated by `dee_analyzer_collate_key()` with similar
         * semantics as `strcmp()`. See also `dee_analyzer_collate_cmp_func()` if you
         * need a version of this function that works as a {@link GLib.CompareDataFunc}.
         *
         * The default implementation in {@link Dee.Analyzer} just uses `strcmp()`.
         * @param key1 The first collation key to compare
         * @param key2 The second collation key to compare
         * @returns -1, 0 or 1, if `key1` is &lt;, == or &gt; than `key2`.
         */
        collate_cmp(key1: string, key2: string): number;
        /**
         * Generate a collation key for a set of input data (usually a UTF-8 string
         * passed through tokenization and term filters of the analyzer).
         *
         * The default implementation just calls `g_strdup()`.
         * @param data The input data to generate a collation key for
         * @returns A newly allocated collation key. Use `dee_analyzer_collate_cmp()` or          `dee_analyzer_collate_cmp_func()` to compare collation keys. Free          with `g_free()`.
         */
        collate_key(data: string): string;
        /**
         * Tokenize some input data (which is normally, but not necessarily,
         * a UTF-8 string).
         *
         * Tokenization splits the input data into constituents (in most cases words),
         * but does not run it through any of the term filters set for the analyzer.
         * It is undefined if the tokenization process itself does any normalization.
         * @param data The input data to analyze
         * @param terms_out A {@link Dee.TermList} to place the generated tokens in.
         */
        tokenize(data: string, terms_out: TermList): void;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends Peer.SignalSignatures {
            'notify::bus-address': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-leader': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-name': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Peer.ConstructorProps {
            bus_address: string;
            busAddress: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Client extends Peer {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * @construct-only
         */
        get bus_address(): string;
        /**
         * @construct-only
         */
        get busAddress(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](swarm_name: string): Client;

        static new_for_address(swarm_name: string, bus_address: string): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FileResourceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::primary-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, ResourceManager.ConstructorProps {
            primary_path: string;
            primaryPath: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FileResourceManager extends GObject.Object implements ResourceManager {
        static $gtype: GObject.GType<FileResourceManager>;

        // Properties

        /**
         * Property holding the primary path used to store and load resources
         * @construct-only
         */
        get primary_path(): string;
        /**
         * Property holding the primary path used to store and load resources
         * @construct-only
         */
        get primaryPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileResourceManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileResourceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](primary_path: string): FileResourceManager;

        // Signals

        /** @signal */
        connect<K extends keyof FileResourceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileResourceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileResourceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileResourceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileResourceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileResourceManager.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a path to the set of paths searched for resources. The manager will
         * first search the primary path as specified in the constructor and then
         * search paths in the order they where added.
         * @param path The path to add to the set of searched paths
         */
        add_search_path(path: string): void;
        /**
         * Helper method to access the :primary-path property.
         * @returns The value of the :primary-path property
         */
        get_primary_path(): string;
        /**
         * Load a resource from persistent storage. The loaded resource will be of the
         * same GType as when it was stored (provided that the same serialization and
         * parse functions are registered).
         *
         * In case of an error the error will be in the {@link GLib.FileError} domain. Specifically
         * if there is no resource with the name `resource_name` the error code will
         * be #G_FILE_ERROR_NOENT.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource_name The name of the resource to retrieve
         * @returns A newly allocated {@link GObject.Object} in case of success               and `null` otherwise. In case of a runtime error the `error`               pointer will be set.
         */
        load<T = GObject.Object>(resource_name: string): T;
        /**
         * Store a resource under a given name. The resource manager must guarantee
         * that the stored data survives system reboots and that you can recreate a
         * copy of `resource` by calling `dee_resource_manager_load()` using the
         * same `resource_name`.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource A {@link Dee.Serializable} to store under `resource_name`
         * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
         * @returns `true` on success and `false` otherwise. In case of a runtime               error the `error` pointer will point to a {@link GLib.Error} in the               `DeeResourceError` domain.
         */
        store(resource: Serializable, resource_name: string): boolean;
        /**
         * Load a resource from persistent storage. The loaded resource will be of the
         * same GType as when it was stored (provided that the same serialization and
         * parse functions are registered).
         *
         * In case of an error the error will be in the {@link GLib.FileError} domain. Specifically
         * if there is no resource with the name `resource_name` the error code will
         * be #G_FILE_ERROR_NOENT.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource_name The name of the resource to retrieve
         * @virtual
         */
        vfunc_load<T = GObject.Object>(resource_name: string): T;
        /**
         * Store a resource under a given name. The resource manager must guarantee
         * that the stored data survives system reboots and that you can recreate a
         * copy of `resource` by calling `dee_resource_manager_load()` using the
         * same `resource_name`.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource A {@link Dee.Serializable} to store under `resource_name`
         * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
         * @virtual
         */
        vfunc_store(resource: Serializable, resource_name: string): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace FilterModel {
        // Signal signatures
        interface SignalSignatures extends ProxyModel.SignalSignatures {
            'notify::filter': (pspec: GObject.ParamSpec) => void;
            'notify::back-end': (pspec: GObject.ParamSpec) => void;
            'notify::inherit-seqnums': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-signals': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends ProxyModel.ConstructorProps, Model.ConstructorProps, Serializable.ConstructorProps {
            filter: Filter;
        }
    }

    /**
     * All fields in the DeeFilterModel structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class FilterModel extends ProxyModel implements Model, Serializable {
        static $gtype: GObject.GType<FilterModel>;

        // Properties

        /**
         * Property holding the {@link Dee.Filter} used to filter the model
         * defined in the {@link Dee.FilterModel.back_end} property.
         * @construct-only
         */
        get filter(): Filter;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FilterModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orig_model: Model, filter: Filter): FilterModel;

        // Signals

        /** @signal */
        connect<K extends keyof FilterModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FilterModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FilterModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Includes `iter` from the back end model in the filtered model, appending
         * it to the end of the filtered rows.
         *
         * This method is usually called when implementing {@link Dee.FilterMapFunc} or
         * {@link Dee.FilterMapNotify} methods.
         * @param iter
         * @returns Always returns `iter`
         */
        append_iter(iter: ModelIter): ModelIter;
        /**
         * Check if `iter` from the back end model is mapped in `self`.
         * @param iter The {@link Dee.ModelIter} to check
         * @returns `true` if and only if `iter` is contained in `self`.
         */
        contains(iter: ModelIter): boolean;
        /**
         * Includes `iter` from the back end model in the filtered model, inserting it at
         * `pos` pushing other rows down.
         *
         * This method is usually called when implementing {@link Dee.FilterMapFunc} or
         * {@link Dee.FilterMapNotify} methods.
         * @param iter
         * @param pos
         * @returns Always returns `iter`
         */
        insert_iter(iter: ModelIter, pos: number): ModelIter;
        /**
         * Includes `iter` from the back end model in the filtered model, inserting it at
         * the position before `pos` pushing other rows down.
         *
         * This method is usually called when implementing {@link Dee.FilterMapFunc} or
         * {@link Dee.FilterMapNotify} methods.
         * @param iter
         * @param pos
         * @returns Always returns `iter`
         */
        insert_iter_before(iter: ModelIter, pos: ModelIter): ModelIter;
        /**
         * Inserts `iter` in `self` in a way that is consistent with the ordering of the
         * rows in the original {@link Dee.Model} behind `self`. THis method assumes that `self`
         * is already ordered this way. If that's not the case then this method has
         * undefined behaviour.
         *
         * This method is mainly intended as a helper for {@link Dee.FilterMapNotify} functions
         * of {@link Dee.Filter} implementations that creates filter models sorted in
         * accordance with the original models.
         * @param iter Iterator
         * @returns Always returns `iter`
         */
        insert_iter_with_original_order(iter: ModelIter): ModelIter;
        /**
         * Includes `iter` from the back end model in the filtered model, prepending
         * it to the beginning of the filtered rows.
         *
         * This method is usually called when implementing {@link Dee.FilterMapFunc} or
         * {@link Dee.FilterMapNotify} methods.
         * @param iter
         * @returns Always returns `iter`
         */
        prepend_iter(iter: ModelIter): ModelIter;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace GListResultSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, ResultSet.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GListResultSet extends GObject.Object implements ResultSet {
        static $gtype: GObject.GType<GListResultSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GListResultSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GListResultSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GListResultSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GListResultSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GListResultSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GListResultSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GListResultSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GListResultSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Get the model associated with a result set
         * @returns The model that the rows point into
         */
        get_model(): Model;
        /**
         * Get the number of {@link Dee.ModelIter}<!-- -->s held in a {@link Dee.ResultSet}.
         * @returns The number of rows held in the result set
         */
        get_n_rows(): number;
        /**
         * Check if a call to `dee_result_set_next()` will succeed.
         * @returns `true` if and only if more rows can be retrieved by calling          `dee_result_set_next()`
         */
        has_next(): boolean;
        /**
         * Get the current row from the result set and advance the cursor.
         * To ensure that calls to this method will succeed you can call
         * `dee_result_set_has_next()`.
         *
         * To retrieve the current row without advancing the cursor call
         * `dee_result_set_peek()` in stead of this method.
         * @returns The {@link Dee.ModelIter} at the current cursor position
         */
        next(): ModelIter;
        /**
         * Get the row at the current cursor position.
         *
         * To retrieve the current row and advance the cursor position call
         * `dee_result_set_next()` in stead of this method.
         * @returns The {@link Dee.ModelIter} at the current cursor position
         */
        peek(): ModelIter;
        /**
         * Set the cursor position. Following calls to `dee_result_set_peek()`
         * or `dee_result_set_next()` will read the row at position `pos`.
         * @param pos The position to seek to
         */
        seek(pos: number): void;
        /**
         * Get the current position of the cursor.
         * @returns The current position of the cursor
         */
        tell(): number;
        /**
         * Get the model associated with a result set
         * @virtual
         */
        vfunc_get_model(): Model;
        /**
         * Get the number of {@link Dee.ModelIter}<!-- -->s held in a {@link Dee.ResultSet}.
         * @virtual
         */
        vfunc_get_n_rows(): number;
        /**
         * Check if a call to `dee_result_set_next()` will succeed.
         * @virtual
         */
        vfunc_has_next(): boolean;
        /**
         * Get the current row from the result set and advance the cursor.
         * To ensure that calls to this method will succeed you can call
         * `dee_result_set_has_next()`.
         *
         * To retrieve the current row without advancing the cursor call
         * `dee_result_set_peek()` in stead of this method.
         * @virtual
         */
        vfunc_next(): ModelIter;
        /**
         * Get the row at the current cursor position.
         *
         * To retrieve the current row and advance the cursor position call
         * `dee_result_set_next()` in stead of this method.
         * @virtual
         */
        vfunc_peek(): ModelIter;
        /**
         * Set the cursor position. Following calls to `dee_result_set_peek()`
         * or `dee_result_set_next()` will read the row at position `pos`.
         * @param pos The position to seek to
         * @virtual
         */
        vfunc_seek(pos: number): void;
        /**
         * Get the current position of the cursor.
         * @virtual
         */
        vfunc_tell(): number;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace HashIndex {
        // Signal signatures
        interface SignalSignatures extends Index.SignalSignatures {
            'notify::analyzer': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Index.ConstructorProps {}
    }

    /**
     * All fields in the DeeHashIndex structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class HashIndex extends Index {
        static $gtype: GObject.GType<HashIndex>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HashIndex.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HashIndex.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex;

        // Signals

        /** @signal */
        connect<K extends keyof HashIndex.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashIndex.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HashIndex.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashIndex.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HashIndex.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HashIndex.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Index {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::analyzer': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            analyzer: Analyzer;
            model: Model;
            reader: ModelReader;
        }
    }

    /**
     * All fields in the DeeIndex structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    abstract class Index extends GObject.Object {
        static $gtype: GObject.GType<Index>;

        // Properties

        /**
         * The {@link Dee.Analyzer} used to analyze terms extracted by the model reader
         * @construct-only
         */
        get analyzer(): Analyzer;
        /**
         * The {@link Dee.Model} being indexed
         * @construct-only
         */
        get model(): Model;
        /**
         * The {@link Dee.ModelReader} used to extract terms from rows in the model
         * @construct-only
         */
        set reader(val: ModelReader);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Index.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Index.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Index.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Index.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Iterate over an index optionally starting from some given term. Note that
         * unordered indexes (like {@link Dee.HashIndex}) has undefined behaviour with
         * this method.
         * @param start_term The term to start from or `null` to iterate over all terms
         * @param func Called for each term in the index
         * @virtual
         */
        vfunc_foreach(start_term: string, func: IndexIterFunc): void;
        /**
         * Get the number of indexed rows. A row is only indexed if it has at least one
         * term associated with it. If the analyzer has returned 0 terms then the row
         * is omitted from the index.
         * @virtual
         */
        vfunc_get_n_rows(): number;
        /**
         * Get the number of rows that matches a given term
         * @param term The term to look for
         * @virtual
         */
        vfunc_get_n_rows_for_term(term: string): number;
        /**
         * Get the number of terms in the index
         * @virtual
         */
        vfunc_get_n_terms(): number;
        /**
         * Get the {@link Dee.TermMatchFlag}<!-- --> supported by this {@link Dee.Index} instance
         * @virtual
         */
        vfunc_get_supported_term_match_flags(): number;
        /**
         * @param term The term to look up on
         * @param flags A bitmask of {@link Dee.TermMatchFlag}<!-- --> to control how matching is         done
         * @virtual
         */
        vfunc_lookup(term: string, flags: TermMatchFlag): ResultSet;

        // Methods

        /**
         * Iterate over an index optionally starting from some given term. Note that
         * unordered indexes (like {@link Dee.HashIndex}) has undefined behaviour with
         * this method.
         * @param start_term The term to start from or `null` to iterate over all terms
         * @param func Called for each term in the index
         */
        foreach(start_term: string, func: IndexIterFunc): void;
        /**
         * Get the analyzer being used to analyze terms extracted with the
         * {@link Dee.ModelReader} used by this index.
         * @returns The {@link Dee.Analyzer} used to analyze terms with
         */
        get_analyzer(): Analyzer;
        /**
         * Get the model being indexed by this index
         * @returns The {@link Dee.Model} being indexed by this index
         */
        get_model(): Model;
        /**
         * Get the number of indexed rows. A row is only indexed if it has at least one
         * term associated with it. If the analyzer has returned 0 terms then the row
         * is omitted from the index.
         * @returns The number of rows in the index. Note that this may less than or          equal to `dee_model_get_n_rows()`.
         */
        get_n_rows(): number;
        /**
         * Get the number of rows that matches a given term
         * @param term The term to look for
         * @returns The number of rows in the index registered for the given term
         */
        get_n_rows_for_term(term: string): number;
        /**
         * Get the number of terms in the index
         * @returns The number of unique terms in the index
         */
        get_n_terms(): number;
        /**
         * Get the reader being used to extract terms from rows in the model
         * @returns The {@link Dee.ModelReader} used to extract terms with
         */
        get_reader(): ModelReader;
        /**
         * Get the {@link Dee.TermMatchFlag}<!-- --> supported by this {@link Dee.Index} instance
         * @returns A bit mask of the acceptedd {@link Dee.TermMatchFlag}<!-- -->s
         */
        get_supported_term_match_flags(): number;
        /**
         * @param term The term to look up on
         * @param flags A bitmask of {@link Dee.TermMatchFlag}<!-- --> to control how matching is         done
         * @returns A {@link Dee.ResultSet}. Free with `g_object_unref()`.
         */
        lookup(term: string, flags: TermMatchFlag | null): ResultSet;
        /**
         * Convenience function in for cases where you have a priori guarantee that
         * a `dee_index_lookup()` call will return exactly 0 or 1 row. If the lookup
         * returns more than 1 row a warning will be printed on standard error and
         * `null` will be returned.
         *
         * The typical use case for this function is if you need something akin to
         * a primary key in a relational database.
         * @param term The exact term to match
         * @returns A {@link Dee.ModelIter} pointing to the matching               row or `null` in case no rows matches `term`
         */
        lookup_one(term: string): ModelIter;
    }

    namespace Peer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'connection-acquired': (arg0: Gio.DBusConnection) => void;
            /**
             * Connect to this signal to be notified when peers close
             * their {@link Gio.DBusConnection}.
             * @signal
             * @run-last
             */
            'connection-closed': (arg0: Gio.DBusConnection) => void;
            /**
             * Connect to this signal to be notified of existing and new peers that are
             *   in your swarm.
             * @signal
             * @run-last
             */
            'peer-found': (arg0: string) => void;
            /**
             * Connect to this signal to be notified when peers disconnect from the swarm
             * @signal
             * @run-last
             */
            'peer-lost': (arg0: string) => void;
            'notify::swarm-leader': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-name': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            swarm_leader: string;
            swarmLeader: string;
            swarm_name: string;
            swarmName: string;
            swarm_owner: boolean;
            swarmOwner: boolean;
        }
    }

    /**
     * All fields in the DeePeer structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class Peer extends GObject.Object {
        static $gtype: GObject.GType<Peer>;

        // Properties

        /**
         * @read-only
         */
        get swarm_leader(): string;
        /**
         * @read-only
         */
        get swarmLeader(): string;
        get swarm_name(): string;
        set swarm_name(val: string);
        get swarmName(): string;
        set swarmName(val: string);
        /**
         * @construct-only
         */
        get swarm_owner(): boolean;
        /**
         * @construct-only
         */
        get swarmOwner(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Peer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Peer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](swarm_name: string): Peer;

        // Signals

        /** @signal */
        connect<K extends keyof Peer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Peer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Peer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Peer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Peer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Peer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param connection
         * @virtual
         */
        vfunc_connection_acquired(connection: Gio.DBusConnection): void;
        /**
         * @param connection
         * @virtual
         */
        vfunc_connection_closed(connection: Gio.DBusConnection): void;
        /**
         * Gets list of {@link Gio.DBusConnection} instances used by this {@link Dee.Peer} instance.
         * @virtual
         */
        vfunc_get_connections(): Gio.DBusConnection[];
        /**
         * In case this peer is connected to a message bus, gets the unique DBus
         * address of the current swarm leader, otherwise returns id of the leader.
         * @virtual
         */
        vfunc_get_swarm_leader(): string;
        /**
         * @virtual
         */
        vfunc_is_swarm_leader(): boolean;
        /**
         * Gets list of all peers currently in this swarm.
         * @virtual
         */
        vfunc_list_peers(): string[];
        /**
         * @param name
         * @virtual
         */
        vfunc_peer_found(name: string): void;
        /**
         * @param name
         * @virtual
         */
        vfunc_peer_lost(name: string): void;

        // Methods

        /**
         * Gets list of {@link Gio.DBusConnection} instances used by this {@link Dee.Peer} instance.
         * @returns List of connections.
         */
        get_connections(): Gio.DBusConnection[];
        /**
         * In case this peer is connected to a message bus, gets the unique DBus
         * address of the current swarm leader, otherwise returns id of the leader.
         * @returns Unique DBus address of the current swarm leader,    possibly `null` if the leader has not been detected yet
         */
        get_swarm_leader(): string;
        /**
         * Gets the unique name for this swarm. The swarm leader is the Peer owning
         * this name on the session bus.
         * @returns The swarm name
         */
        get_swarm_name(): string;
        /**
         * @returns `true` if and only if this peer owns the swarm name on               the session bus
         */
        is_swarm_leader(): boolean;
        /**
         * Gets the value of the :swarm-owner property.
         *
         * Note that this does NOT mean that the peer is leader of the swarm! Check also
         * `dee_peer_is_swarm_leader()`.
         * @returns TRUE if the :swarm-owner property was set during construction.
         */
        is_swarm_owner(): boolean;
        /**
         * Gets list of all peers currently in this swarm.
         * @returns List of peers (free using `g_strfreev()`).
         */
        list_peers(): string[];
    }

    namespace ProxyModel {
        // Signal signatures
        interface SignalSignatures extends SerializableModel.SignalSignatures {
            'notify::back-end': (pspec: GObject.ParamSpec) => void;
            'notify::inherit-seqnums': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-signals': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends SerializableModel.ConstructorProps, Model.ConstructorProps, Serializable.ConstructorProps {
            back_end: Model;
            backEnd: Model;
            inherit_seqnums: boolean;
            inheritSeqnums: boolean;
            proxy_signals: boolean;
            proxySignals: boolean;
        }
    }

    /**
     * All fields in the DeeProxyModel structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class ProxyModel extends SerializableModel implements Model, Serializable {
        static $gtype: GObject.GType<ProxyModel>;

        // Properties

        /**
         * The backend model used by this proxy model.
         * @construct-only
         */
        get back_end(): Model;
        /**
         * The backend model used by this proxy model.
         * @construct-only
         */
        get backEnd(): Model;
        /**
         * Boolean property defining whether sequence numbers will be inherited
         * from the back end model.
         * You will most likely want to set this property to false
         * if the implementation manipulates with the rows in the model and keep
         * track of seqnums yourself.
         * @construct-only
         */
        get inherit_seqnums(): boolean;
        /**
         * Boolean property defining whether sequence numbers will be inherited
         * from the back end model.
         * You will most likely want to set this property to false
         * if the implementation manipulates with the rows in the model and keep
         * track of seqnums yourself.
         * @construct-only
         */
        get inheritSeqnums(): boolean;
        /**
         * Boolean property defining whether or not to automatically forward signals
         * from the back end model. This is especially useful for sub classes wishing
         * to do their own more advanced signal forwarding.
         * @construct-only
         */
        get proxy_signals(): boolean;
        /**
         * Boolean property defining whether or not to automatically forward signals
         * from the back end model. This is especially useful for sub classes wishing
         * to do their own more advanced signal forwarding.
         * @construct-only
         */
        get proxySignals(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProxyModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProxyModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ProxyModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProxyModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProxyModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProxyModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProxyModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProxyModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        begin_changeset(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         */
        clear(): void;
        /**
         * This method is purely syntactic sugar for calling `dee_model_set_tag()` with
         * a `value` of `null`. It's included in order to help developers write more
         * readable code.
         * @param iter The row to clear the tag from
         * @param tag The tag to clear from `iter`
         */
        clear_tag(iter: ModelIter, tag: ModelTag): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         */
        end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * Like `dee_model_find_row_sorted()`, but uses DeeCompareRowSizedFunc and
         * therefore doesn't cause trouble when used from introspected languages.
         *
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` (or `dee_model_insert_row_sorted_with_sizes()`)
         * to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @returns if `iter` and `column` are valid, the boolean stored at `column`.               Otherwise `false`
         */
        get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @returns 0-based index of the column or -1 if column with this name               wasn't found
         */
        get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @returns the {@link GLib.Variant} signature of the column at index `column`
         */
        get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @returns if `iter` and `column` are valid, the double stored at `column`.  Otherwise 0.
         */
        get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @returns the {@link GLib.Variant} signature for the field, or `null` if given field               wasn't registered with `dee_model_register_vardict_schema()`.
         */
        get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @returns if `iter` and `column` are valid, the int stored at `column`.  Otherwise 0.
         */
        get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @returns if `iter` and `column` are valid, the int64 stored at `column`.  Otherwise 0.
         */
        get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @returns A new {@link Dee.ModelIter}, or `null` if `row`   was out of bounds. The returned iter is owned by `self`, so do not free it.
         */
        get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @returns the number of columns per row in `self`
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @returns the number of rows in `self`
         */
        get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @returns The integer offset of `iter` in `self`
         */
        get_position(iter: ModelIter): number;
        /**
         * @param iter A {@link Dee.ModelIter} pointing to the row to get
         * @returns `out_row_members` if it was not `null`          or a newly allocated array otherwise which you must free          with `g_free()`. The variants in the array will have a strong          reference and needs to be freed with `g_variant_unref()`.
         */
        get_row(iter: ModelIter): [GLib.Variant[], GLib.Variant[] | null];
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @returns if `iter` and `column` are valid, the string stored at `column`.               Otherwise `null`.
         */
        get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @returns Returns `null` if `tag` is unset otherwise the               value of the tag as it was set with `dee_model_set_tag()`.
         */
        get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @returns if `iter` and `column` are valid, the uchar stored at `column`.  Otherwise 0.
         */
        get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @returns if `iter` and `column` are valid, the uint stored at `column`.  Otherwise 0.
         */
        get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @returns if `iter` and `column` are valid, the uint64 stored at `column`.  Otherwise 0.
         */
        get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param column the column index to get the schemas for
         * @returns Hashtable               containing a mapping from field names to schemas or NULL.               Note that keys and values in the hashtable may be owned               by the model, so you need to create a deep copy if you               intend to keep the hashtable around.
         */
        get_vardict_schema(column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the first iter in the model
         */
        is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the last iter in the model
         */
        is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the next row in   the model. The iter is owned by `self`, do not free it.
         */
        next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the previous   row in the model. The iter is owned by `self`, do not free it.
         */
        prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @returns A {@link Dee.ModelTag} handle               that you can use to set and get tags with
         */
        register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param column the column index to register the schemas with
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         */
        register_vardict_schema(column: number, schemas: { [key: string]: any } | GLib.HashTable<string, string>): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         */
        remove(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         */
        set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         */
        set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         */
        set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         */
        set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         */
        set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @virtual
         */
        vfunc_append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        vfunc_begin_changeset(): void;
        /**
         * @virtual
         */
        vfunc_changeset_finished(): void;
        /**
         * @virtual
         */
        vfunc_changeset_started(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         * @virtual
         */
        vfunc_end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @virtual
         */
        vfunc_get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @virtual
         */
        vfunc_get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @virtual
         */
        vfunc_get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @virtual
         */
        vfunc_get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @virtual
         */
        vfunc_get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @virtual
         */
        vfunc_get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @virtual
         */
        vfunc_get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @virtual
         */
        vfunc_get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @virtual
         */
        vfunc_get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @virtual
         */
        vfunc_get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @virtual
         */
        vfunc_get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @virtual
         */
        vfunc_get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @virtual
         */
        vfunc_get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @virtual
         */
        vfunc_get_position(iter: ModelIter): number;
        /**
         * @param iter
         * @param out_row_members
         * @virtual
         */
        vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant;
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @virtual
         */
        vfunc_get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @virtual
         */
        vfunc_get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @virtual
         */
        vfunc_get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @virtual
         */
        vfunc_get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @virtual
         */
        vfunc_get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @virtual
         */
        vfunc_get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @virtual
         */
        vfunc_get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @virtual
         */
        vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param num_column
         * @virtual
         */
        vfunc_get_vardict_schema(num_column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @virtual
         */
        vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @virtual
         */
        vfunc_register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param num_column
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         * @virtual
         */
        vfunc_register_vardict_schema(
            num_column: number,
            schemas: { [key: string]: any } | GLib.HashTable<string, string>,
        ): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         * @virtual
         */
        vfunc_remove(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_added(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_changed(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_removed(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         * @virtual
         */
        vfunc_set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         * @virtual
         */
        vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         * @virtual
         */
        vfunc_set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         * @virtual
         */
        vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         * @virtual
         */
        vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace SequenceModel {
        // Signal signatures
        interface SignalSignatures extends SerializableModel.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends SerializableModel.ConstructorProps, Model.ConstructorProps, Serializable.ConstructorProps {}
    }

    /**
     * All fields in the DeeSequenceModel structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class SequenceModel extends SerializableModel implements Model, Serializable {
        static $gtype: GObject.GType<SequenceModel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SequenceModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SequenceModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SequenceModel;

        // Signals

        /** @signal */
        connect<K extends keyof SequenceModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SequenceModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SequenceModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SequenceModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SequenceModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SequenceModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        begin_changeset(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         */
        clear(): void;
        /**
         * This method is purely syntactic sugar for calling `dee_model_set_tag()` with
         * a `value` of `null`. It's included in order to help developers write more
         * readable code.
         * @param iter The row to clear the tag from
         * @param tag The tag to clear from `iter`
         */
        clear_tag(iter: ModelIter, tag: ModelTag): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         */
        end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * Like `dee_model_find_row_sorted()`, but uses DeeCompareRowSizedFunc and
         * therefore doesn't cause trouble when used from introspected languages.
         *
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` (or `dee_model_insert_row_sorted_with_sizes()`)
         * to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @returns if `iter` and `column` are valid, the boolean stored at `column`.               Otherwise `false`
         */
        get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @returns 0-based index of the column or -1 if column with this name               wasn't found
         */
        get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @returns the {@link GLib.Variant} signature of the column at index `column`
         */
        get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @returns if `iter` and `column` are valid, the double stored at `column`.  Otherwise 0.
         */
        get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @returns the {@link GLib.Variant} signature for the field, or `null` if given field               wasn't registered with `dee_model_register_vardict_schema()`.
         */
        get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @returns if `iter` and `column` are valid, the int stored at `column`.  Otherwise 0.
         */
        get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @returns if `iter` and `column` are valid, the int64 stored at `column`.  Otherwise 0.
         */
        get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @returns A new {@link Dee.ModelIter}, or `null` if `row`   was out of bounds. The returned iter is owned by `self`, so do not free it.
         */
        get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @returns the number of columns per row in `self`
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @returns the number of rows in `self`
         */
        get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @returns The integer offset of `iter` in `self`
         */
        get_position(iter: ModelIter): number;
        /**
         * @param iter A {@link Dee.ModelIter} pointing to the row to get
         * @returns `out_row_members` if it was not `null`          or a newly allocated array otherwise which you must free          with `g_free()`. The variants in the array will have a strong          reference and needs to be freed with `g_variant_unref()`.
         */
        get_row(iter: ModelIter): [GLib.Variant[], GLib.Variant[] | null];
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @returns if `iter` and `column` are valid, the string stored at `column`.               Otherwise `null`.
         */
        get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @returns Returns `null` if `tag` is unset otherwise the               value of the tag as it was set with `dee_model_set_tag()`.
         */
        get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @returns if `iter` and `column` are valid, the uchar stored at `column`.  Otherwise 0.
         */
        get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @returns if `iter` and `column` are valid, the uint stored at `column`.  Otherwise 0.
         */
        get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @returns if `iter` and `column` are valid, the uint64 stored at `column`.  Otherwise 0.
         */
        get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param column the column index to get the schemas for
         * @returns Hashtable               containing a mapping from field names to schemas or NULL.               Note that keys and values in the hashtable may be owned               by the model, so you need to create a deep copy if you               intend to keep the hashtable around.
         */
        get_vardict_schema(column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the first iter in the model
         */
        is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the last iter in the model
         */
        is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the next row in   the model. The iter is owned by `self`, do not free it.
         */
        next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the previous   row in the model. The iter is owned by `self`, do not free it.
         */
        prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @returns A {@link Dee.ModelTag} handle               that you can use to set and get tags with
         */
        register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param column the column index to register the schemas with
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         */
        register_vardict_schema(column: number, schemas: { [key: string]: any } | GLib.HashTable<string, string>): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         */
        remove(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         */
        set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         */
        set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         */
        set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         */
        set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         */
        set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @virtual
         */
        vfunc_append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        vfunc_begin_changeset(): void;
        /**
         * @virtual
         */
        vfunc_changeset_finished(): void;
        /**
         * @virtual
         */
        vfunc_changeset_started(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         * @virtual
         */
        vfunc_end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @virtual
         */
        vfunc_get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @virtual
         */
        vfunc_get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @virtual
         */
        vfunc_get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @virtual
         */
        vfunc_get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @virtual
         */
        vfunc_get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @virtual
         */
        vfunc_get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @virtual
         */
        vfunc_get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @virtual
         */
        vfunc_get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @virtual
         */
        vfunc_get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @virtual
         */
        vfunc_get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @virtual
         */
        vfunc_get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @virtual
         */
        vfunc_get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @virtual
         */
        vfunc_get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @virtual
         */
        vfunc_get_position(iter: ModelIter): number;
        /**
         * @param iter
         * @param out_row_members
         * @virtual
         */
        vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant;
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @virtual
         */
        vfunc_get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @virtual
         */
        vfunc_get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @virtual
         */
        vfunc_get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @virtual
         */
        vfunc_get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @virtual
         */
        vfunc_get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @virtual
         */
        vfunc_get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @virtual
         */
        vfunc_get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @virtual
         */
        vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param num_column
         * @virtual
         */
        vfunc_get_vardict_schema(num_column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @virtual
         */
        vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @virtual
         */
        vfunc_register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param num_column
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         * @virtual
         */
        vfunc_register_vardict_schema(
            num_column: number,
            schemas: { [key: string]: any } | GLib.HashTable<string, string>,
        ): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         * @virtual
         */
        vfunc_remove(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_added(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_changed(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_removed(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         * @virtual
         */
        vfunc_set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         * @virtual
         */
        vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         * @virtual
         */
        vfunc_set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         * @virtual
         */
        vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         * @virtual
         */
        vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace SerializableModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps, Model.ConstructorProps, Serializable.ConstructorProps {}
    }

    /**
     * All fields in the DeeSerializableModel structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    abstract class SerializableModel extends GObject.Object implements Model, Serializable {
        static $gtype: GObject.GType<SerializableModel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SerializableModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SerializableModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SerializableModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SerializableModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SerializableModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SerializableModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SerializableModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SerializableModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns Sequence number of this {@link Dee.SerializableModel}.
         */
        get_seqnum(): number;
        /**
         * Increments sequence number of this {@link Dee.SerializableModel}.
         */
        inc_seqnum(): number;
        /**
         * Sets sequence number of this {@link Dee.SerializableModel}.
         * @param seqnum Sequence number
         */
        set_seqnum(seqnum: number): void;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        begin_changeset(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         */
        clear(): void;
        /**
         * This method is purely syntactic sugar for calling `dee_model_set_tag()` with
         * a `value` of `null`. It's included in order to help developers write more
         * readable code.
         * @param iter The row to clear the tag from
         * @param tag The tag to clear from `iter`
         */
        clear_tag(iter: ModelIter, tag: ModelTag): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         */
        end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * Like `dee_model_find_row_sorted()`, but uses DeeCompareRowSizedFunc and
         * therefore doesn't cause trouble when used from introspected languages.
         *
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` (or `dee_model_insert_row_sorted_with_sizes()`)
         * to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @returns if `iter` and `column` are valid, the boolean stored at `column`.               Otherwise `false`
         */
        get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @returns 0-based index of the column or -1 if column with this name               wasn't found
         */
        get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @returns the {@link GLib.Variant} signature of the column at index `column`
         */
        get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @returns if `iter` and `column` are valid, the double stored at `column`.  Otherwise 0.
         */
        get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @returns the {@link GLib.Variant} signature for the field, or `null` if given field               wasn't registered with `dee_model_register_vardict_schema()`.
         */
        get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @returns if `iter` and `column` are valid, the int stored at `column`.  Otherwise 0.
         */
        get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @returns if `iter` and `column` are valid, the int64 stored at `column`.  Otherwise 0.
         */
        get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @returns A new {@link Dee.ModelIter}, or `null` if `row`   was out of bounds. The returned iter is owned by `self`, so do not free it.
         */
        get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @returns the number of columns per row in `self`
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @returns the number of rows in `self`
         */
        get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @returns The integer offset of `iter` in `self`
         */
        get_position(iter: ModelIter): number;
        /**
         * @param iter A {@link Dee.ModelIter} pointing to the row to get
         * @returns `out_row_members` if it was not `null`          or a newly allocated array otherwise which you must free          with `g_free()`. The variants in the array will have a strong          reference and needs to be freed with `g_variant_unref()`.
         */
        get_row(iter: ModelIter): [GLib.Variant[], GLib.Variant[] | null];
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @returns if `iter` and `column` are valid, the string stored at `column`.               Otherwise `null`.
         */
        get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @returns Returns `null` if `tag` is unset otherwise the               value of the tag as it was set with `dee_model_set_tag()`.
         */
        get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @returns if `iter` and `column` are valid, the uchar stored at `column`.  Otherwise 0.
         */
        get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @returns if `iter` and `column` are valid, the uint stored at `column`.  Otherwise 0.
         */
        get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @returns if `iter` and `column` are valid, the uint64 stored at `column`.  Otherwise 0.
         */
        get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param column the column index to get the schemas for
         * @returns Hashtable               containing a mapping from field names to schemas or NULL.               Note that keys and values in the hashtable may be owned               by the model, so you need to create a deep copy if you               intend to keep the hashtable around.
         */
        get_vardict_schema(column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the first iter in the model
         */
        is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the last iter in the model
         */
        is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the next row in   the model. The iter is owned by `self`, do not free it.
         */
        next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the previous   row in the model. The iter is owned by `self`, do not free it.
         */
        prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @returns A {@link Dee.ModelTag} handle               that you can use to set and get tags with
         */
        register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param column the column index to register the schemas with
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         */
        register_vardict_schema(column: number, schemas: { [key: string]: any } | GLib.HashTable<string, string>): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         */
        remove(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         */
        set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         */
        set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         */
        set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         */
        set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         */
        set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @virtual
         */
        vfunc_append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        vfunc_begin_changeset(): void;
        /**
         * @virtual
         */
        vfunc_changeset_finished(): void;
        /**
         * @virtual
         */
        vfunc_changeset_started(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         * @virtual
         */
        vfunc_end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @virtual
         */
        vfunc_get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @virtual
         */
        vfunc_get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @virtual
         */
        vfunc_get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @virtual
         */
        vfunc_get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @virtual
         */
        vfunc_get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @virtual
         */
        vfunc_get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @virtual
         */
        vfunc_get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @virtual
         */
        vfunc_get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @virtual
         */
        vfunc_get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @virtual
         */
        vfunc_get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @virtual
         */
        vfunc_get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @virtual
         */
        vfunc_get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @virtual
         */
        vfunc_get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @virtual
         */
        vfunc_get_position(iter: ModelIter): number;
        /**
         * @param iter
         * @param out_row_members
         * @virtual
         */
        vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant;
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @virtual
         */
        vfunc_get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @virtual
         */
        vfunc_get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @virtual
         */
        vfunc_get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @virtual
         */
        vfunc_get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @virtual
         */
        vfunc_get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @virtual
         */
        vfunc_get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @virtual
         */
        vfunc_get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @virtual
         */
        vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param num_column
         * @virtual
         */
        vfunc_get_vardict_schema(num_column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @virtual
         */
        vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @virtual
         */
        vfunc_register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param num_column
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         * @virtual
         */
        vfunc_register_vardict_schema(
            num_column: number,
            schemas: { [key: string]: any } | GLib.HashTable<string, string>,
        ): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         * @virtual
         */
        vfunc_remove(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_added(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_changed(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_removed(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         * @virtual
         */
        vfunc_set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         * @virtual
         */
        vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         * @virtual
         */
        vfunc_set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         * @virtual
         */
        vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         * @virtual
         */
        vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends Peer.SignalSignatures {
            'notify::bus-address': (pspec: GObject.ParamSpec) => void;
            'notify::same-user-only': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-leader': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-name': (pspec: GObject.ParamSpec) => void;
            'notify::swarm-owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Peer.ConstructorProps {
            bus_address: string;
            busAddress: string;
            same_user_only: boolean;
            sameUserOnly: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Server extends Peer {
        static $gtype: GObject.GType<Server>;

        // Properties

        /**
         * @construct-only
         */
        get bus_address(): string;
        /**
         * @construct-only
         */
        get busAddress(): string;
        /**
         * @construct-only
         */
        get same_user_only(): boolean;
        /**
         * @construct-only
         */
        get sameUserOnly(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Server.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](swarm_name: string): Server;

        static new_for_address(swarm_name: string, bus_address: string): Server;

        // Signals

        /** @signal */
        connect<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Server.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Server.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Helper method which creates bus address string for the given name, which
         * should have the same format as a DBus unique name.
         * @param name A name to create bus address for.
         * @param include_username Include current user name as part of the bus address.
         */
        static bus_address_for_name(name: string, include_username: boolean): string;

        // Methods

        /**
         * Gets a D-Bus address string that can be used by clients to connect to server.
         * @returns A D-Bus address string. Do not free.
         */
        get_client_address(): string;
    }

    namespace SharedModel {
        // Signal signatures
        interface SignalSignatures extends ProxyModel.SignalSignatures {
            /**
             * Emitted right before a remote transaction will be committed to the model.
             * @signal
             * @run-last
             */
            'begin-transaction': (arg0: number, arg1: number) => void;
            /**
             * Emitted right after a remote transaction has been committed to the model.
             * @signal
             * @run-last
             */
            'end-transaction': (arg0: number, arg1: number) => void;
            'notify::access-mode': (pspec: GObject.ParamSpec) => void;
            'notify::flush-mode': (pspec: GObject.ParamSpec) => void;
            'notify::peer': (pspec: GObject.ParamSpec) => void;
            'notify::synchronized': (pspec: GObject.ParamSpec) => void;
            'notify::back-end': (pspec: GObject.ParamSpec) => void;
            'notify::inherit-seqnums': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-signals': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends ProxyModel.ConstructorProps, Model.ConstructorProps, Serializable.ConstructorProps {
            access_mode: SharedModelAccessMode;
            accessMode: SharedModelAccessMode;
            flush_mode: SharedModelFlushMode;
            flushMode: SharedModelFlushMode;
            peer: Peer;
            synchronized: boolean;
        }
    }

    /**
     * All fields in the DeeSharedModel structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class SharedModel extends ProxyModel implements Model, Serializable {
        static $gtype: GObject.GType<SharedModel>;

        // Properties

        /**
         * Enumeration defining behavior of this model when trying to write to it.
         *
         * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
         * when one process is considered an "owner" of a model and all the other
         * peers are supposed to only synchronize it for reading.
         *
         * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
         * @construct-only
         */
        get access_mode(): SharedModelAccessMode;
        /**
         * Enumeration defining behavior of this model when trying to write to it.
         *
         * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
         * when one process is considered an "owner" of a model and all the other
         * peers are supposed to only synchronize it for reading.
         *
         * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
         * @construct-only
         */
        get accessMode(): SharedModelAccessMode;
        /**
         * Enumeration defining the flushing behavior.
         *
         * Setting this to #DEE_SHARED_MODEL_FLUSH_MODE_MANUAL will disable
         * automatic flushing that usually happens when the application's main event
         * loop is idle. Automatic flushing should be primarily disabled when
         * a shared model is used from multiple threads, or when not using {@link GLib.MainLoop}.
         * When disabled, `dee_shared_model_flush_revision_queue()` needs to be called
         * explicitely.
         */
        get flush_mode(): SharedModelFlushMode;
        set flush_mode(val: SharedModelFlushMode);
        /**
         * Enumeration defining the flushing behavior.
         *
         * Setting this to #DEE_SHARED_MODEL_FLUSH_MODE_MANUAL will disable
         * automatic flushing that usually happens when the application's main event
         * loop is idle. Automatic flushing should be primarily disabled when
         * a shared model is used from multiple threads, or when not using {@link GLib.MainLoop}.
         * When disabled, `dee_shared_model_flush_revision_queue()` needs to be called
         * explicitely.
         */
        get flushMode(): SharedModelFlushMode;
        set flushMode(val: SharedModelFlushMode);
        /**
         * The {@link Dee.Peer} that this model uses to connect to the swarm
         * @construct-only
         */
        get peer(): Peer;
        /**
         * Boolean property defining whether or not the model has synchronized with
         * its peers (if any) yet.
         *
         * You should not modify a {@link Dee.SharedModel} that is not synchronized. Before
         * modifying the model in any way (except calling `dee_model_set_schema()`)
         * you should wait for it to become synchronized.
         * @read-only
         */
        get synchronized(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SharedModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SharedModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): SharedModel;

        static new_for_peer(peer: Peer): SharedModel;

        static new_with_back_end(name: string, back_end: Model): SharedModel;

        // Signals

        /** @signal */
        connect<K extends keyof SharedModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SharedModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SharedModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SharedModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SharedModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SharedModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Expert: All changes to `self` that has not yet been propagated to the peer
         * models are send. If you also want to block the mainloop until
         * all the underlying transport streams have been flushed use
         * `dee_shared_model_flush_revision_queue_sync()`.
         *
         * Normally {@link Dee.SharedModel} collects changes to `self` into batches and sends
         * them automatically to all peers. You can use this call to provide fine
         * grained control of exactly when changes to `self` are synchronized to its
         * peers. This may for example be useful to improve the interactivity of your
         * application if you have a model-process which intermix small and light
         * changes with big and expensive changes. Using this call you can make sure
         * the model-process dispatches small changes more aggresively to the
         * view-process, while holding on to the expensive changes a bit longer.
         * @returns The number of revisions flushed.
         */
        flush_revision_queue(): number;
        /**
         * Similar to `dee_shared_model_flush_revision_queue()`, but also blocks
         * the mainloop until all the underlying transport streams have been flushed.
         *
         * <emphasis>Important</emphasis>: This method <emphasis>may</emphasis> flush
         * your internal queue of DBus messages forcing them to be send before this call
         * returns.
         * @returns The number of revisions flushed.
         */
        flush_revision_queue_sync(): number;
        /**
         * Convenience function for accessing the {@link Dee.SharedModel.flush_mode} property.
         * @returns The {@link Dee.SharedModelFlushMode} used by the model
         */
        get_flush_mode(): SharedModelFlushMode;
        /**
         * Convenience function for accessing the {@link Dee.SharedModel.peer} property
         * @returns The {@link Dee.Peer} used to interact with the peer models
         */
        get_peer(): Peer;
        /**
         * Convenience function for accessing the {@link Dee.Peer.swarm_name} property of the
         * {@link Dee.Peer} defined in the {@link Dee.SharedModel.peer} property.
         * @returns The name of the swarm this model synchrnonizes with
         */
        get_swarm_name(): string;
        /**
         * Check if the model is the swarm leader. This is a convenience function for
         * accessing the {@link Dee.SharedModel.peer} property and checking if it's the swarm
         * leader.
         * @returns The value of `dee_peer_is_swarm_leader()` for the {@link Dee.Peer} used by          this shared model
         */
        is_leader(): boolean;
        /**
         * Check if the model is synchronized with its peers. Before modifying a
         * shared model in any way (except `dee_model_set_schema()`) you should wait for
         * it to become synchronized. This is normally done by waiting for the
         * &quot;notify::synchronized&quot; signal.
         *
         * This method is purely a convenience function for accessing the
         * {@link Dee.SharedModel.synchronized} property.
         * @returns The value of the :synchronized property
         */
        is_synchronized(): boolean;
        /**
         * Convenience function for setting the {@link Dee.SharedModel.flush_mode} property.
         * @param mode Flush mode to use
         */
        set_flush_mode(mode: SharedModelFlushMode | null): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace TermList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * All fields in the DeeTermList structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class TermList extends GObject.Object {
        static $gtype: GObject.GType<TermList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TermList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TermList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TermList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TermList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TermList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TermList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TermList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TermList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Add a term to the termlist. Note that it is possible to add a term multiple
         * times. The effect of this is determined by the `DeeModelIndex` consuming the
         * {@link Dee.TermList}.
         * @param term The term to add
         * @virtual
         */
        vfunc_add_term(term: string): TermList;
        /**
         * Remove all terms from a term list making it ready for reuse. Note that
         * term list implementations will often have optimized memory allocation
         * schemes so reuse is often more efficient than allocating a new term list
         * each time you need it.
         * @virtual
         */
        vfunc_clear(): TermList;
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
         * and a clone can be compared directly as pointers (fx. with `g_direct_equal()`).
         * This is because they share the underlying string pool.
         * @virtual
         */
        vfunc_clone(): TermList;
        /**
         * Get the n'th term in the list.
         *
         * Note that in the default implementation it is guaranteed that the returned
         * string is valid for the entire lifetime of the {@link Dee.TermList}.
         * @param n The (zero based) offset into the term list
         * @virtual
         */
        vfunc_get_term(n: number): string;
        /**
         * @virtual
         */
        vfunc_num_terms(): number;

        // Methods

        /**
         * Add a term to the termlist. Note that it is possible to add a term multiple
         * times. The effect of this is determined by the `DeeModelIndex` consuming the
         * {@link Dee.TermList}.
         * @param term The term to add
         * @returns Always returns `self`
         */
        add_term(term: string): TermList;
        /**
         * Remove all terms from a term list making it ready for reuse. Note that
         * term list implementations will often have optimized memory allocation
         * schemes so reuse is often more efficient than allocating a new term list
         * each time you need it.
         * @returns Always returns `self`
         */
        clear(): TermList;
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
         * and a clone can be compared directly as pointers (fx. with `g_direct_equal()`).
         * This is because they share the underlying string pool.
         * @returns A newly allocated term list.                           Free with `g_object_unref()`.
         */
        clone(): TermList;
        /**
         * Get the n'th term in the list.
         *
         * Note that in the default implementation it is guaranteed that the returned
         * string is valid for the entire lifetime of the {@link Dee.TermList}.
         * @param n The (zero based) offset into the term list
         * @returns The `n`<!-- -->th string held in the term list
         */
        get_term(n: number): string;
        /**
         * @returns The number of terms in the term list
         */
        num_terms(): number;
    }

    namespace TextAnalyzer {
        // Signal signatures
        interface SignalSignatures extends Analyzer.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Analyzer.ConstructorProps {}
    }

    /**
     * All fields in the DeeTextAnalyzer structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class TextAnalyzer extends Analyzer {
        static $gtype: GObject.GType<TextAnalyzer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextAnalyzer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextAnalyzer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TextAnalyzer;

        // Signals

        /** @signal */
        connect<K extends keyof TextAnalyzer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextAnalyzer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TextAnalyzer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextAnalyzer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TextAnalyzer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextAnalyzer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Transaction {
        // Signal signatures
        interface SignalSignatures extends SerializableModel.SignalSignatures {
            'notify::target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends SerializableModel.ConstructorProps, Model.ConstructorProps, Serializable.ConstructorProps {
            target: Model;
        }
    }

    /**
     * All fields in the DeeTransaction structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class Transaction extends SerializableModel implements Model, Serializable {
        static $gtype: GObject.GType<Transaction>;

        // Properties

        /**
         * @construct-only
         */
        get target(): Model;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Transaction.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Transaction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](target: Model): Transaction;

        // Signals

        /** @signal */
        connect<K extends keyof Transaction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Transaction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Transaction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Transaction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Apply a transaction to its target model. After this call the transaction
         * is invalidated and must be freed with `g_object_unref()`.
         * @returns `true` if and only if the transaction successfully applies to :target.
         */
        commit(): boolean;
        /**
         * Get the target model of a transaction. This is just a convenience method
         * for accessing the :target property.
         * @returns The target model
         */
        get_target(): Model;
        /**
         * Check if a {@link Dee.Transaction} has been committed. This method is mainly for
         * debugging and testing purposes.
         * @returns `true` if and only if `dee_transaction_commit()` has completed          successfully on the transaction.
         */
        is_committed(): boolean;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        begin_changeset(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         */
        clear(): void;
        /**
         * This method is purely syntactic sugar for calling `dee_model_set_tag()` with
         * a `value` of `null`. It's included in order to help developers write more
         * readable code.
         * @param iter The row to clear the tag from
         * @param tag The tag to clear from `iter`
         */
        clear_tag(iter: ModelIter, tag: ModelTag): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         */
        end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * Like `dee_model_find_row_sorted()`, but uses DeeCompareRowSizedFunc and
         * therefore doesn't cause trouble when used from introspected languages.
         *
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` (or `dee_model_insert_row_sorted_with_sizes()`)
         * to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @returns if `iter` and `column` are valid, the boolean stored at `column`.               Otherwise `false`
         */
        get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @returns 0-based index of the column or -1 if column with this name               wasn't found
         */
        get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @returns the {@link GLib.Variant} signature of the column at index `column`
         */
        get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @returns if `iter` and `column` are valid, the double stored at `column`.  Otherwise 0.
         */
        get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @returns the {@link GLib.Variant} signature for the field, or `null` if given field               wasn't registered with `dee_model_register_vardict_schema()`.
         */
        get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @returns if `iter` and `column` are valid, the int stored at `column`.  Otherwise 0.
         */
        get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @returns if `iter` and `column` are valid, the int64 stored at `column`.  Otherwise 0.
         */
        get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @returns A new {@link Dee.ModelIter}, or `null` if `row`   was out of bounds. The returned iter is owned by `self`, so do not free it.
         */
        get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @returns the number of columns per row in `self`
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @returns the number of rows in `self`
         */
        get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @returns The integer offset of `iter` in `self`
         */
        get_position(iter: ModelIter): number;
        /**
         * @param iter A {@link Dee.ModelIter} pointing to the row to get
         * @returns `out_row_members` if it was not `null`          or a newly allocated array otherwise which you must free          with `g_free()`. The variants in the array will have a strong          reference and needs to be freed with `g_variant_unref()`.
         */
        get_row(iter: ModelIter): [GLib.Variant[], GLib.Variant[] | null];
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @returns if `iter` and `column` are valid, the string stored at `column`.               Otherwise `null`.
         */
        get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @returns Returns `null` if `tag` is unset otherwise the               value of the tag as it was set with `dee_model_set_tag()`.
         */
        get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @returns if `iter` and `column` are valid, the uchar stored at `column`.  Otherwise 0.
         */
        get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @returns if `iter` and `column` are valid, the uint stored at `column`.  Otherwise 0.
         */
        get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @returns if `iter` and `column` are valid, the uint64 stored at `column`.  Otherwise 0.
         */
        get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param column the column index to get the schemas for
         * @returns Hashtable               containing a mapping from field names to schemas or NULL.               Note that keys and values in the hashtable may be owned               by the model, so you need to create a deep copy if you               intend to keep the hashtable around.
         */
        get_vardict_schema(column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the first iter in the model
         */
        is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the last iter in the model
         */
        is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the next row in   the model. The iter is owned by `self`, do not free it.
         */
        next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the previous   row in the model. The iter is owned by `self`, do not free it.
         */
        prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @returns A {@link Dee.ModelTag} handle               that you can use to set and get tags with
         */
        register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param column the column index to register the schemas with
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         */
        register_vardict_schema(column: number, schemas: { [key: string]: any } | GLib.HashTable<string, string>): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         */
        remove(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         */
        set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         */
        set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         */
        set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         */
        set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         */
        set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @virtual
         */
        vfunc_append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        vfunc_begin_changeset(): void;
        /**
         * @virtual
         */
        vfunc_changeset_finished(): void;
        /**
         * @virtual
         */
        vfunc_changeset_started(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         * @virtual
         */
        vfunc_end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @virtual
         */
        vfunc_get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @virtual
         */
        vfunc_get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @virtual
         */
        vfunc_get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @virtual
         */
        vfunc_get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @virtual
         */
        vfunc_get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @virtual
         */
        vfunc_get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @virtual
         */
        vfunc_get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @virtual
         */
        vfunc_get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @virtual
         */
        vfunc_get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @virtual
         */
        vfunc_get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @virtual
         */
        vfunc_get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @virtual
         */
        vfunc_get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @virtual
         */
        vfunc_get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @virtual
         */
        vfunc_get_position(iter: ModelIter): number;
        /**
         * @param iter
         * @param out_row_members
         * @virtual
         */
        vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant;
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @virtual
         */
        vfunc_get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @virtual
         */
        vfunc_get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @virtual
         */
        vfunc_get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @virtual
         */
        vfunc_get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @virtual
         */
        vfunc_get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @virtual
         */
        vfunc_get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @virtual
         */
        vfunc_get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @virtual
         */
        vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param num_column
         * @virtual
         */
        vfunc_get_vardict_schema(num_column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @virtual
         */
        vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @virtual
         */
        vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @virtual
         */
        vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @virtual
         */
        vfunc_prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @virtual
         */
        vfunc_register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param num_column
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         * @virtual
         */
        vfunc_register_vardict_schema(
            num_column: number,
            schemas: { [key: string]: any } | GLib.HashTable<string, string>,
        ): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         * @virtual
         */
        vfunc_remove(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_added(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_changed(iter: ModelIter): void;
        /**
         * @param iter
         * @virtual
         */
        vfunc_row_removed(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         * @virtual
         */
        vfunc_set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         * @virtual
         */
        vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         * @virtual
         */
        vfunc_set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         * @virtual
         */
        vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         * @virtual
         */
        vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace TreeIndex {
        // Signal signatures
        interface SignalSignatures extends Index.SignalSignatures {
            'notify::analyzer': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Index.ConstructorProps {}
    }

    /**
     * All fields in the DeeTreeIndex structure are private and should never be
     * accessed directly
     * @gir-type Class
     */
    class TreeIndex extends Index {
        static $gtype: GObject.GType<TreeIndex>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeIndex.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TreeIndex.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex;

        // Signals

        /** @signal */
        connect<K extends keyof TreeIndex.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeIndex.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TreeIndex.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeIndex.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TreeIndex.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TreeIndex.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type AnalyzerClass = typeof Analyzer;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class AnalyzerPrivate {
        static $gtype: GObject.GType<AnalyzerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FileResourceManagerClass = typeof FileResourceManager;
    /**
     * Structure encapsulating the mapping logic used to construct a {@link Dee.FilterModel}
     * @gir-type Struct
     */
    class Filter {
        static $gtype: GObject.GType<Filter>;

        // Fields

        map_func: FilterMapFunc;
        map_notify: FilterMapNotify;
        userdata: any;

        // Static methods

        /**
         * Create a new {@link Dee.Filter} with the given parameters. This call will zero
         * the `out_filter` struct.
         * @param map_func The {@link Dee.FilterMapFunc} to use for the filter
         * @param map_notify The {@link Dee.FilterMapNotify} to use for the filter
         * @param destroy The {@link GLib.DestroyNotify} to call on                         `userdata` when disposing of the filter
         */
        static ['new'](
            map_func: FilterMapFunc,
            map_notify: FilterMapNotify,
            destroy: GLib.DestroyNotify | null,
        ): Filter;
        /**
         * Create a {@link Dee.Filter} that takes string values from a column in the model
         * and builds a {@link Dee.FilterModel} with the rows sorted according to the
         * collation rules of the current locale.
         * @param column The index of a column containing the strings to sort after
         */
        static new_collator(column: number): Filter;
        /**
         * Create a {@link Dee.Filter} that takes string values from a column in the model
         * and builds a {@link Dee.FilterModel} with the rows sorted descending according to the
         * collation rules of the current locale.
         * @param column The index of a column containing the strings to sort after
         */
        static new_collator_desc(column: number): Filter;
        /**
         * Create a {@link Dee.Filter} that only includes rows from the original model
         * which match a variant value in a given column. A {@link Dee.FilterModel}
         * created with this filter will be ordered in accordance with its parent model.
         *
         * This method will work on any column, disregarding its schema, since the
         * value comparison is done using `g_variant_equal()`. This means you can use
         * this filter as a convenient fallback when there is no predefined filter
         * for your column type if raw performance is not paramount.
         * @param column The index of a column containing the string to match
         * @param value A {@link GLib.Variant} value columns must match exactly.         The matching semantics are those of `g_variant_equal()`. If `value`         is floating the ownership will be transfered to the filter
         */
        static new_for_any_column(column: number, value: GLib.Variant): Filter;
        /**
         * Create a {@link Dee.Filter} that only includes rows from the original model
         * which has an exact match on some string column. A {@link Dee.FilterModel} created
         * with this filter will be ordered in accordance with its parent model.
         * @param column The index of a column containing the string key to match
         * @param key
         */
        static new_for_key_column(column: number, key: string): Filter;
        /**
         * Create a {@link Dee.Filter} that only includes rows from the original model
         * which match a regular expression on some string column. A {@link Dee.FilterModel}
         * created with this filter will be ordered in accordance with its parent model.
         * @param column The index of a column containing the string to match
         * @param regex The regular expression `column` must match
         */
        static new_regex(column: number, regex: GLib.Regex): Filter;
        /**
         * Create a new {@link Dee.Filter} sorting a model according to a {@link Dee.CompareRowFunc}.
         * @param cmp_row A {@link Dee.CompareRowFunc} to use for sorting
         * @param cmp_destroy The {@link GLib.DestroyNotify} to call on                         `cmp_user_data` when disposing of the filter
         */
        static new_sort(cmp_row: CompareRowFunc, cmp_destroy: GLib.DestroyNotify | null): Filter;

        // Methods

        /**
         * Call the {@link GLib.DestroyNotify} function on the userdata pointer of a {@link Dee.Filter}
         * (if the destroy member is set, that is).
         *
         * When using a {@link Dee.FilterModel} you should not call this method yourself.
         *
         * This method will not free the memory allocated for `filter`.
         */
        destroy(): void;
        /**
         * Call the {@link Dee.FilterMapFunc} function of a {@link Dee.Filter}.
         * When using a {@link Dee.FilterModel} you should not call this method yourself.
         * @param orig_model The model that is being filtered
         * @param filter_model The {@link Dee.FilterModel} that holds the                filtered subset of `orig_model`
         */
        map(orig_model: Model, filter_model: FilterModel): void;
        /**
         * Call the {@link Dee.FilterMapNotify} function of a {@link Dee.Filter}.
         * When using a {@link Dee.FilterModel} you should not call this method yourself.
         * @param orig_iter The {@link Dee.ModelIter} added to `orig_model`
         * @param orig_model The model that is being filtered
         * @param filter_model The {@link Dee.FilterModel} that holds the                filtered subset of `orig_model`
         * @returns The return value from the {@link Dee.FilterMapNotify}. That is; `true`          if `orig_iter` was added to `filter_model`
         */
        notify(orig_iter: ModelIter, orig_model: Model, filter_model: FilterModel): boolean;
    }

    /**
     * @gir-type Alias
     */
    type FilterModelClass = typeof FilterModel;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class FilterModelPrivate {
        static $gtype: GObject.GType<FilterModelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GListResultSetClass = typeof GListResultSet;
    /**
     * @gir-type Alias
     */
    type HashIndexClass = typeof HashIndex;
    /**
     * @gir-type Struct
     */
    abstract class HashIndexPrivate {
        static $gtype: GObject.GType<HashIndexPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class ICUTermFilter {
        static $gtype: GObject.GType<ICUTermFilter>;

        // Methods

        /**
         * Apply a {@link Dee.ICUTermFilter} on a piece of UTF-8 text.
         * @param text The text to apply the filter on
         * @returns A newly allocated string. Free with `g_free()`.
         */
        apply(text: string): string;
        /**
         * Free all resources allocated by a {@link Dee.ICUTermFilter}.
         */
        destroy(): void;
    }

    /**
     * @gir-type Alias
     */
    type IndexClass = typeof Index;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class IndexPrivate {
        static $gtype: GObject.GType<IndexPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ModelIface = typeof Model;
    /**
     * The DeeModelIter structure is private and should only be used with the
     * provided {@link Dee.Model} API. It is owned by DeeModel and should not be freed.
     * @gir-type Struct
     */
    abstract class ModelIter {
        static $gtype: GObject.GType<ModelIter>;
    }

    /**
     * Structure encapsulating the information needed to read strings from a
     * model. Used for example by {@link Dee.Index}.
     * @gir-type Struct
     */
    class ModelReader {
        static $gtype: GObject.GType<ModelReader>;

        // Fields

        reader_func: ModelReaderFunc;
        userdata: any;

        // Static methods

        /**
         * Create a new {@link Dee.ModelReader} with the given parameters. This call will zero
         * the `out_reader` struct.
         * @param reader_func The {@link Dee.ModelReaderFunc} to use for the reader
         * @param destroy The {@link GLib.DestroyNotify} to call on                                        `userdata` when disposing of the reader
         */
        static ['new'](reader_func: ModelReaderFunc, destroy: GLib.DestroyNotify | null): ModelReader;
        /**
         * A {@link Dee.ModelReader} reading a %gint32 from a {@link Dee.Model} at a given column
         * @param column The column index to read a %gint32 from
         */
        static new_for_int32_column(column: number): ModelReader;
        /**
         * A {@link Dee.ModelReader} reading a string from a {@link Dee.Model} at a given column
         * @param column The column index to read a string from
         */
        static new_for_string_column(column: number): ModelReader;
        /**
         * A {@link Dee.ModelReader} reading a %guint32 from a {@link Dee.Model} at a given column
         * @param column The column index to read a %guint32 from
         */
        static new_for_uint32_column(column: number): ModelReader;

        // Methods

        /**
         * Release resources associated with `reader`, but does not free the
         * {@link Dee.ModelReader} structure itself.
         *
         * This will call the `destroy()` function registered with the reader
         * if it is set.
         */
        destroy(): void;
        /**
         * Read data from a row in a {@link Dee.Model} and extract a string representation from
         * it.
         *
         * Note that generally a {@link Dee.ModelReader} need not be confined to reading from
         * one specific column, although in practice most are.
         * @param model The {@link Dee.Model} to read a string from
         * @param iter The row to read a string from
         * @returns A newly allocated string. Free with `g_free()`.
         */
        read(model: Model, iter: ModelIter): string;
    }

    /**
     * The DeeModelTag structure is private and should only be used with the
     * provided {@link Dee.Model} API. It is owned by DeeModel and should not be freed.
     * @gir-type Struct
     */
    abstract class ModelTag {
        static $gtype: GObject.GType<ModelTag>;
    }

    /**
     * @gir-type Alias
     */
    type PeerClass = typeof Peer;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class PeerPrivate {
        static $gtype: GObject.GType<PeerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ProxyModelClass = typeof ProxyModel;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class ProxyModelPrivate {
        static $gtype: GObject.GType<ProxyModelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ResourceManagerIface = typeof ResourceManager;
    /**
     * @gir-type Alias
     */
    type ResultSetIface = typeof ResultSet;
    /**
     * @gir-type Alias
     */
    type SequenceModelClass = typeof SequenceModel;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class SequenceModelPrivate {
        static $gtype: GObject.GType<SequenceModelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SerializableIface = typeof Serializable;
    /**
     * @gir-type Alias
     */
    type SerializableModelClass = typeof SerializableModel;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class SerializableModelPrivate {
        static $gtype: GObject.GType<SerializableModelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ServerClass = typeof Server;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class ServerPrivate {
        static $gtype: GObject.GType<ServerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SharedModelClass = typeof SharedModel;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class SharedModelPrivate {
        static $gtype: GObject.GType<SharedModelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TermListClass = typeof TermList;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class TermListPrivate {
        static $gtype: GObject.GType<TermListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TextAnalyzerClass = typeof TextAnalyzer;
    /**
     * @gir-type Struct
     */
    abstract class TextAnalyzerPrivate {
        static $gtype: GObject.GType<TextAnalyzerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TransactionClass = typeof Transaction;
    /**
     * Ignore this structure.
     * @gir-type Struct
     */
    abstract class TransactionPrivate {
        static $gtype: GObject.GType<TransactionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TreeIndexClass = typeof TreeIndex;
    /**
     * @gir-type Struct
     */
    abstract class TreeIndexPrivate {
        static $gtype: GObject.GType<TreeIndexPrivate>;
    }

    namespace Model {
        /**
         * Interface for implementing Model.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Like `dee_model_append()` but intended for language bindings or
             * situations where you work with models on a meta level and may not have
             * a prior knowledge of the column schemas of the models. See also
             * `dee_model_build_row()`.
             * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
             * @virtual
             */
            vfunc_append_row(row_members: GLib.Variant[]): ModelIter;
            /**
             * Notify listeners that the model is about to be changed, which means that
             * multiple row additions / changes / removals will follow.
             * The default implementation of this method will emit
             * the ::changeset-started signal.
             *
             * It is not stricly necessary to enclose every change to a model
             * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
            vfunc_begin_changeset(): void;
            /**
             * @virtual
             */
            vfunc_changeset_finished(): void;
            /**
             * @virtual
             */
            vfunc_changeset_started(): void;
            /**
             * Removes all rows in the model. Signals are emitted for each row in the model
             * @virtual
             */
            vfunc_clear(): void;
            /**
             * Notify listeners that all changes have been committed to the model.
             * The default implementation of this method will emit
             * the ::changeset-finished signal.
             *
             * See also `dee_model_begin_changeset()`.
             * @virtual
             */
            vfunc_end_changeset(): void;
            /**
             * Finds a row in `self` according to the sorting specified by `cmp_func`.
             * This method will assume that `self` is already sorted by `cmp_func`.
             *
             * If you use this method for searching you should only use
             * `dee_model_insert_row_sorted()` to insert rows in the model.
             * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
             * @param cmp_func Callback used for comparison or rows
             * @virtual
             */
            vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a boolean from
             * @virtual
             */
            vfunc_get_bool(iter: ModelIter, column: number): boolean;
            /**
             * Get the column index of a column.
             * @param column_name the column name to retrieve the index of
             * @virtual
             */
            vfunc_get_column_index(column_name: string): number;
            /**
             * Get a `null`-terminated array of column names for the columns of `self`.
             * These names can be used in calls to `dee_model_build_named_row()`.
             * @virtual
             */
            vfunc_get_column_names(): string[];
            /**
             * Get the {@link GLib.Variant} signature of a column
             * @param column the column to get retrieve the {@link GLib.Variant} type string of
             * @virtual
             */
            vfunc_get_column_schema(column: number): string;
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a double from
             * @virtual
             */
            vfunc_get_double(iter: ModelIter, column: number): number;
            /**
             * Get the {@link GLib.Variant} signature of field previously registered with
             * `dee_model_register_vardict_schema()`.
             * @param field_name name of vardict field to get schema of
             * @virtual
             */
            vfunc_get_field_schema(field_name: string): [string, number];
            /**
             * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
             * @virtual
             */
            vfunc_get_first_iter(): ModelIter;
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a int from
             * @virtual
             */
            vfunc_get_int32(iter: ModelIter, column: number): number;
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a int64 from
             * @virtual
             */
            vfunc_get_int64(iter: ModelIter, column: number): number;
            /**
             * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
             *
             * Note that this method does not have any performance guarantees. In particular
             * it is not guaranteed to be <emphasis>O(1)</emphasis>.
             * @param row position of the row to retrieve
             * @virtual
             */
            vfunc_get_iter_at_row(row: number): ModelIter;
            /**
             * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
             * last row in `self`. This is refered to also the the
             * <emphasis>end iter</emphasis>.
             *
             * As with other iters the end iter, in particular, is stable over inserts,
             * changes, or removals.
             * @virtual
             */
            vfunc_get_last_iter(): ModelIter;
            /**
             * Gets the number of columns in `self`
             * @virtual
             */
            vfunc_get_n_columns(): number;
            /**
             * Gets the number of rows in `self`
             * @virtual
             */
            vfunc_get_n_rows(): number;
            /**
             * Get the numeric offset of `iter` into `self`. Note that this method is
             * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
             * @param iter The iter to get the position of
             * @virtual
             */
            vfunc_get_position(iter: ModelIter): number;
            /**
             * @param iter
             * @param out_row_members
             * @virtual
             */
            vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant;
            /**
             * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
             * required formats for the columns of `self`.
             * @virtual
             */
            vfunc_get_schema(): string[];
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a string from
             * @virtual
             */
            vfunc_get_string(iter: ModelIter, column: number): string;
            /**
             * Look up a tag value for a given row in a model. This method is guaranteed
             * to be O(1).
             * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
             * @param tag The tag handle to retrieve the tag value for
             * @virtual
             */
            vfunc_get_tag(iter: ModelIter, tag: ModelTag): any | null;
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a uchar from
             * @virtual
             */
            vfunc_get_uchar(iter: ModelIter, column: number): number;
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a uint from
             * @virtual
             */
            vfunc_get_uint32(iter: ModelIter, column: number): number;
            /**
             * @param iter a {@link Dee.ModelIter}
             * @param column the column to retrieve a uint64 from
             * @virtual
             */
            vfunc_get_uint64(iter: ModelIter, column: number): number;
            /**
             * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
             * @param column column number to retrieve the value from
             * @virtual
             */
            vfunc_get_value(iter: ModelIter, column: number): GLib.Variant;
            /**
             * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
             * @param column_name
             * @virtual
             */
            vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
            /**
             * Get a schema for variant dictionary column previously registered using
             * `dee_model_register_vardict_schema()`.
             * @param num_column
             * @virtual
             */
            vfunc_get_vardict_schema(num_column: number): GLib.HashTable<string, string>;
            /**
             * As `dee_model_insert()`, but intended for language bindings or
             * situations where you work with models on a meta level and may not have
             * a priori knowledge of the column schemas of the models. See also
             * `dee_model_build_row()`.
             * @param pos The index to insert the row on. The existing row will be pushed down.
             * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
             * @virtual
             */
            vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
            /**
             * As `dee_model_insert_before()`, but intended for language bindings or
             * situations where you work with models on a meta level and may not have
             * a priori knowledge of the column schemas of the models. See also
             * `dee_model_build_row()`.
             * @param iter An iter pointing to the row before which to insert the new one
             * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
             * @virtual
             */
            vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
            /**
             * Inserts a row in `self` according to the sorting specified by `cmp_func`.
             * If you use this method for insertion you should not use other methods as this
             * method assumes the model to be already sorted by `cmp_func`.
             * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
             * @param cmp_func Callback used for comparison or rows
             * @virtual
             */
            vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
            /**
             * Checks if `iter` is the very first iter `self`.
             * @param iter a {@link Dee.ModelIter}
             * @virtual
             */
            vfunc_is_first(iter: ModelIter): boolean;
            /**
             * Whether `iter` is the end iter of `self`. Note that the end iter points
             * right <emphasis>after</emphasis> the last valid row in `self`.
             * @param iter a {@link Dee.ModelIter}
             * @virtual
             */
            vfunc_is_last(iter: ModelIter): boolean;
            /**
             * Returns a {@link Dee.ModelIter} that points to the next position in the model.
             * @param iter a {@link Dee.ModelIter}
             * @virtual
             */
            vfunc_next(iter: ModelIter): ModelIter;
            /**
             * Like `dee_model_prepend()` but intended for language bindings or
             * situations where you work with models on a meta level and may not have
             * a priori knowledge of the column schemas of the models. See also
             * `dee_model_build_row()`.
             * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
             * @virtual
             */
            vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter;
            /**
             * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
             * @param iter a {@link Dee.ModelIter}
             * @virtual
             */
            vfunc_prev(iter: ModelIter): ModelIter;
            /**
             * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
             * value attached to a given row on a model. The tags are invisible to all
             * that doesn't have the tag handle returned by this method. {@link Dee.Model}
             * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
             *
             * Tags can be very useful in associating some extra data to a row in a model
             * and have that automatically synced when the model changes. If you're
             * writing a tiled view for a model you might want to tag each row with the
             * tile widget for that row. That way you have very convenient access to the
             * tile widget given any row in the model.
             *
             * The private nature of tags and the fact that you can store arbitrary pointers
             * and binary data in them also means that they are not serialized if you
             * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
             * @virtual
             */
            vfunc_register_tag(): ModelTag;
            /**
             * Register schema for fields in a model containing column with variant
             * dictionary schema ('a{sv}').
             * The keys registered with this function can be later used
             * with `dee_model_build_named_row()` function, as well as
             * `dee_model_get_value_by_name()`. Note that it is possible to register
             * the same field name for multiple columns, in which case you need to use
             * fully-qualified "column_name::field" name in the calls to
             * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
             * @param num_column
             * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
             * @virtual
             */
            vfunc_register_vardict_schema(
                num_column: number,
                schemas: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Removes the row at the given position from the model.
             * @param iter a {@link Dee.ModelIter} pointing to the row to remove
             * @virtual
             */
            vfunc_remove(iter: ModelIter): void;
            /**
             * @param iter
             * @virtual
             */
            vfunc_row_added(iter: ModelIter): void;
            /**
             * @param iter
             * @virtual
             */
            vfunc_row_changed(iter: ModelIter): void;
            /**
             * @param iter
             * @virtual
             */
            vfunc_row_removed(iter: ModelIter): void;
            /**
             * Set column names used by `self`.
             * This method must be called exactly once, but only after setting
             * a schema of the model. Note that some constructors will do this for you.
             * @param column_names A list of column names terminated by a `null`
             * @virtual
             */
            vfunc_set_column_names_full(column_names: string[]): void;
            /**
             * Sets all columns in the row `iter` points to, to those found in
             * `row_members`. The variants in `row_members` must match the types defined in
             * the model's schema.
             * @param iter a {@link Dee.ModelIter}
             * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
             * @virtual
             */
            vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
            /**
             * Set the {@link GLib.Variant} types and the number of columns used by `self`.
             * This method must be called exactly once before using `self`. Note that
             * some constructors will do this for you.
             * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
             * @virtual
             */
            vfunc_set_schema_full(column_schemas: string[]): void;
            /**
             * Set a tag on a row in a model. This function is guaranteed to be O(1).
             * See also `dee_model_register_tag()`.
             *
             * If `tag` is already set on this row the existing tag value will be destroyed
             * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
             * @param iter The row to set the tag on
             * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
             * @param value The value to set for `tag`. Note that `null` represents an unset tag
             * @virtual
             */
            vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
            /**
             * Sets the data in `column` for the row `iter` points to, to `value`. The type
             * of `value` must be convertible to the type of the column.
             *
             * When this method call completes the model will emit ::row-changed. You can
             * edit the model in place without triggering the change signals by calling
             * `dee_model_set_value_silently()`.
             * @param iter a {@link Dee.ModelIter}
             * @param column column number to set the value
             * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
             * @virtual
             */
            vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ModelNamespace {
        $gtype: GObject.GType<Model>;
        prototype: Model;
    }
    /**
     * @gir-type Interface
     */
    interface Model extends GObject.Object, Model.Interface {
        // Methods

        /**
         * Like `dee_model_append()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of  `GVariants` with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        append_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Notify listeners that the model is about to be changed, which means that
         * multiple row additions / changes / removals will follow.
         * The default implementation of this method will emit
         * the ::changeset-started signal.
         *
         * It is not stricly necessary to enclose every change to a model
         * in a `dee_model_begin_changeset()` and `dee_model_end_changeset()` calls, but
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
        begin_changeset(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         */
        clear(): void;
        /**
         * This method is purely syntactic sugar for calling `dee_model_set_tag()` with
         * a `value` of `null`. It's included in order to help developers write more
         * readable code.
         * @param iter The row to clear the tag from
         * @param tag The tag to clear from `iter`
         */
        clear_tag(iter: ModelIter, tag: ModelTag): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also `dee_model_begin_changeset()`.
         */
        end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ModelIter, boolean];
        /**
         * Like `dee_model_find_row_sorted()`, but uses DeeCompareRowSizedFunc and
         * therefore doesn't cause trouble when used from introspected languages.
         *
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * `dee_model_insert_row_sorted()` (or `dee_model_insert_row_sorted_with_sizes()`)
         * to insert rows in the model.
         * @param row_spec An array of       `GVariants` with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If `out_was_found` is set to           `true` then a {@link Dee.ModelIter} pointing to the last matching row.           If it is `false` then the iter pointing to the row just after where           `row_spec_would` have been inserted.
         */
        find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ModelIter, boolean];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a boolean from
         * @returns if `iter` and `column` are valid, the boolean stored at `column`.               Otherwise `false`
         */
        get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @returns 0-based index of the column or -1 if column with this name               wasn't found
         */
        get_column_index(column_name: string): number;
        /**
         * Get a `null`-terminated array of column names for the columns of `self`.
         * These names can be used in calls to `dee_model_build_named_row()`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_column_names(): string[];
        /**
         * Get the {@link GLib.Variant} signature of a column
         * @param column the column to get retrieve the {@link GLib.Variant} type string of
         * @returns the {@link GLib.Variant} signature of the column at index `column`
         */
        get_column_schema(column: number): string;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a double from
         * @returns if `iter` and `column` are valid, the double stored at `column`.  Otherwise 0.
         */
        get_double(iter: ModelIter, column: number): number;
        /**
         * Get the {@link GLib.Variant} signature of field previously registered with
         * `dee_model_register_vardict_schema()`.
         * @param field_name name of vardict field to get schema of
         * @returns the {@link GLib.Variant} signature for the field, or `null` if given field               wasn't registered with `dee_model_register_vardict_schema()`.
         */
        get_field_schema(field_name: string): [string, number];
        /**
         * Retrieves a {@link Dee.ModelIter} representing the first row in `self`.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_first_iter(): ModelIter;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int from
         * @returns if `iter` and `column` are valid, the int stored at `column`.  Otherwise 0.
         */
        get_int32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a int64 from
         * @returns if `iter` and `column` are valid, the int64 stored at `column`.  Otherwise 0.
         */
        get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a {@link Dee.ModelIter} representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @returns A new {@link Dee.ModelIter}, or `null` if `row`   was out of bounds. The returned iter is owned by `self`, so do not free it.
         */
        get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a {@link Dee.ModelIter} pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @returns A {@link Dee.ModelIter} (owned by `self`, do not  free it)
         */
        get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @returns the number of columns per row in `self`
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @returns the number of rows in `self`
         */
        get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @returns The integer offset of `iter` in `self`
         */
        get_position(iter: ModelIter): number;
        /**
         * @param iter A {@link Dee.ModelIter} pointing to the row to get
         * @returns `out_row_members` if it was not `null`          or a newly allocated array otherwise which you must free          with `g_free()`. The variants in the array will have a strong          reference and needs to be freed with `g_variant_unref()`.
         */
        get_row(iter: ModelIter): [GLib.Variant[], GLib.Variant[] | null];
        /**
         * Get a `null`-terminated array of {@link GLib.Variant} type strings that defines the
         * required formats for the columns of `self`.
         * @returns A `null`-terminated array of {@link GLib.Variant} type strings. The length of          the returned array is written to `num_columns`. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_schema(): string[];
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a string from
         * @returns if `iter` and `column` are valid, the string stored at `column`.               Otherwise `null`.
         */
        get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A {@link Dee.ModelIter} pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @returns Returns `null` if `tag` is unset otherwise the               value of the tag as it was set with `dee_model_set_tag()`.
         */
        get_tag(iter: ModelIter, tag: ModelTag): any | null;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uchar from
         * @returns if `iter` and `column` are valid, the uchar stored at `column`.  Otherwise 0.
         */
        get_uchar(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint from
         * @returns if `iter` and `column` are valid, the uint stored at `column`.  Otherwise 0.
         */
        get_uint32(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter}
         * @param column the column to retrieve a uint64 from
         * @returns if `iter` and `column` are valid, the uint64 stored at `column`.  Otherwise 0.
         */
        get_uint64(iter: ModelIter, column: number): number;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column column number to retrieve the value from
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value(iter: ModelIter, column: number): GLib.Variant;
        /**
         * @param iter a {@link Dee.ModelIter} pointing to the row to inspect
         * @param column_name
         * @returns A, guaranteed non-floating, reference to a          {@link GLib.Variant} containing the row data. Free with `g_variant_unref()`.
         */
        get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * `dee_model_register_vardict_schema()`.
         * @param column the column index to get the schemas for
         * @returns Hashtable               containing a mapping from field names to schemas or NULL.               Note that keys and values in the hashtable may be owned               by the model, so you need to create a deep copy if you               intend to keep the hashtable around.
         */
        get_vardict_schema(column: number): GLib.HashTable<string, string>;
        /**
         * As `dee_model_insert()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As `dee_model_insert_before()`, but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       `GVariants` with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the first iter in the model
         */
        is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a {@link Dee.ModelIter}
         * @returns `TRUE` if `iter` is the last iter in the model
         */
        is_last(iter: ModelIter): boolean;
        /**
         * Returns a {@link Dee.ModelIter} that points to the next position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the next row in   the model. The iter is owned by `self`, do not free it.
         */
        next(iter: ModelIter): ModelIter;
        /**
         * Like `dee_model_prepend()` but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * `dee_model_build_row()`.
         * @param row_members An array of               `GVariants` with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
         * @returns A {@link Dee.ModelIter} pointing to the new row
         */
        prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a {@link Dee.ModelIter} that points to the previous position in the model.
         * @param iter a {@link Dee.ModelIter}
         * @returns A {@link Dee.ModelIter}, pointing to the previous   row in the model. The iter is owned by `self`, do not free it.
         */
        prev(iter: ModelIter): ModelIter;
        /**
         * Register a new tag on a {@link Dee.Model}. A <emphasis>tag</emphasis> is an extra
         * value attached to a given row on a model. The tags are invisible to all
         * that doesn't have the tag handle returned by this method. {@link Dee.Model}
         * implementations must ensure that `dee_model_get_tag()` is an O(1) operation.
         *
         * Tags can be very useful in associating some extra data to a row in a model
         * and have that automatically synced when the model changes. If you're
         * writing a tiled view for a model you might want to tag each row with the
         * tile widget for that row. That way you have very convenient access to the
         * tile widget given any row in the model.
         *
         * The private nature of tags and the fact that you can store arbitrary pointers
         * and binary data in them also means that they are not serialized if you
         * utilize a model implementation that exposes the {@link Dee.Serializable} interface.
         * @returns A {@link Dee.ModelTag} handle               that you can use to set and get tags with
         */
        register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with `dee_model_build_named_row()` function, as well as
         * `dee_model_get_value_by_name()`. Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * `dee_model_build_named_row()` and `dee_model_get_field_schema()`.
         * @param column the column index to register the schemas with
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         */
        register_vardict_schema(column: number, schemas: { [key: string]: any } | GLib.HashTable<string, string>): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a {@link Dee.ModelIter} pointing to the row to remove
         */
        remove(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a `null`
         */
        set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a {@link Dee.ModelIter}
         * @param row_members And array of               {@link GLib.Variant}<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         */
        set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the {@link GLib.Variant} types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of {@link GLib.Variant} type strings terminated by a `null`
         */
        set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also `dee_model_register_tag()`.
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the {@link GLib.DestroyNotify} passed to the `dee_model_register_tag()`.
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from `dee_model_register_tag()`
         * @param value The value to set for `tag`. Note that `null` represents an unset tag
         */
        set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * `dee_model_set_value_silently()`.
         * @param iter a {@link Dee.ModelIter}
         * @param column column number to set the value
         * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
         */
        set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
    }

    export const Model: ModelNamespace & {
        new (): Model; // This allows `obj instanceof Model`
    };

    namespace ResourceManager {
        /**
         * Interface for implementing ResourceManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Load a resource from persistent storage. The loaded resource will be of the
             * same GType as when it was stored (provided that the same serialization and
             * parse functions are registered).
             *
             * In case of an error the error will be in the {@link GLib.FileError} domain. Specifically
             * if there is no resource with the name `resource_name` the error code will
             * be #G_FILE_ERROR_NOENT.
             *
             * Important note: This call may do blocking IO. The resource manager must
             * guarantee that this call is reasonably fast, like writing the externalized
             * resource to a file, but not blocking IO over a network socket.
             * @param resource_name The name of the resource to retrieve
             * @virtual
             */
            vfunc_load<T = GObject.Object>(resource_name: string): T;
            /**
             * Store a resource under a given name. The resource manager must guarantee
             * that the stored data survives system reboots and that you can recreate a
             * copy of `resource` by calling `dee_resource_manager_load()` using the
             * same `resource_name`.
             *
             * Important note: This call may do blocking IO. The resource manager must
             * guarantee that this call is reasonably fast, like writing the externalized
             * resource to a file, but not blocking IO over a network socket.
             * @param resource A {@link Dee.Serializable} to store under `resource_name`
             * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
             * @virtual
             */
            vfunc_store(resource: Serializable, resource_name: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ResourceManagerNamespace {
        $gtype: GObject.GType<ResourceManager>;
        prototype: ResourceManager;

        /**
         * Get a pointer to the platform default {@link Dee.ResourceManager}.
         */
        get_default(): ResourceManager;
    }
    /**
     * @gir-type Interface
     */
    interface ResourceManager extends GObject.Object, ResourceManager.Interface {
        // Methods

        /**
         * Load a resource from persistent storage. The loaded resource will be of the
         * same GType as when it was stored (provided that the same serialization and
         * parse functions are registered).
         *
         * In case of an error the error will be in the {@link GLib.FileError} domain. Specifically
         * if there is no resource with the name `resource_name` the error code will
         * be #G_FILE_ERROR_NOENT.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource_name The name of the resource to retrieve
         * @returns A newly allocated {@link GObject.Object} in case of success               and `null` otherwise. In case of a runtime error the `error`               pointer will be set.
         */
        load<T = GObject.Object>(resource_name: string): T;
        /**
         * Store a resource under a given name. The resource manager must guarantee
         * that the stored data survives system reboots and that you can recreate a
         * copy of `resource` by calling `dee_resource_manager_load()` using the
         * same `resource_name`.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource A {@link Dee.Serializable} to store under `resource_name`
         * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
         * @returns `true` on success and `false` otherwise. In case of a runtime               error the `error` pointer will point to a {@link GLib.Error} in the               `DeeResourceError` domain.
         */
        store(resource: Serializable, resource_name: string): boolean;
    }

    export const ResourceManager: ResourceManagerNamespace & {
        new (): ResourceManager; // This allows `obj instanceof ResourceManager`
    };

    namespace ResultSet {
        /**
         * Interface for implementing ResultSet.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get the model associated with a result set
             * @virtual
             */
            vfunc_get_model(): Model;
            /**
             * Get the number of {@link Dee.ModelIter}<!-- -->s held in a {@link Dee.ResultSet}.
             * @virtual
             */
            vfunc_get_n_rows(): number;
            /**
             * Check if a call to `dee_result_set_next()` will succeed.
             * @virtual
             */
            vfunc_has_next(): boolean;
            /**
             * Get the current row from the result set and advance the cursor.
             * To ensure that calls to this method will succeed you can call
             * `dee_result_set_has_next()`.
             *
             * To retrieve the current row without advancing the cursor call
             * `dee_result_set_peek()` in stead of this method.
             * @virtual
             */
            vfunc_next(): ModelIter;
            /**
             * Get the row at the current cursor position.
             *
             * To retrieve the current row and advance the cursor position call
             * `dee_result_set_next()` in stead of this method.
             * @virtual
             */
            vfunc_peek(): ModelIter;
            /**
             * Set the cursor position. Following calls to `dee_result_set_peek()`
             * or `dee_result_set_next()` will read the row at position `pos`.
             * @param pos The position to seek to
             * @virtual
             */
            vfunc_seek(pos: number): void;
            /**
             * Get the current position of the cursor.
             * @virtual
             */
            vfunc_tell(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ResultSetNamespace {
        $gtype: GObject.GType<ResultSet>;
        prototype: ResultSet;
    }
    /**
     * @gir-type Interface
     */
    interface ResultSet extends GObject.Object, ResultSet.Interface {
        // Methods

        /**
         * Get the model associated with a result set
         * @returns The model that the rows point into
         */
        get_model(): Model;
        /**
         * Get the number of {@link Dee.ModelIter}<!-- -->s held in a {@link Dee.ResultSet}.
         * @returns The number of rows held in the result set
         */
        get_n_rows(): number;
        /**
         * Check if a call to `dee_result_set_next()` will succeed.
         * @returns `true` if and only if more rows can be retrieved by calling          `dee_result_set_next()`
         */
        has_next(): boolean;
        /**
         * Get the current row from the result set and advance the cursor.
         * To ensure that calls to this method will succeed you can call
         * `dee_result_set_has_next()`.
         *
         * To retrieve the current row without advancing the cursor call
         * `dee_result_set_peek()` in stead of this method.
         * @returns The {@link Dee.ModelIter} at the current cursor position
         */
        next(): ModelIter;
        /**
         * Get the row at the current cursor position.
         *
         * To retrieve the current row and advance the cursor position call
         * `dee_result_set_next()` in stead of this method.
         * @returns The {@link Dee.ModelIter} at the current cursor position
         */
        peek(): ModelIter;
        /**
         * Set the cursor position. Following calls to `dee_result_set_peek()`
         * or `dee_result_set_next()` will read the row at position `pos`.
         * @param pos The position to seek to
         */
        seek(pos: number): void;
        /**
         * Get the current position of the cursor.
         * @returns The current position of the cursor
         */
        tell(): number;
    }

    export const ResultSet: ResultSetNamespace & {
        new (): ResultSet; // This allows `obj instanceof ResultSet`
    };

    namespace Serializable {
        /**
         * Interface for implementing Serializable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Build a clean serialized representation of `self`. The signature of the
             * returned variant is entirely determined by the underlying implementation.
             * You can recreate a serialized instance by calling `dee_serializable_parse()`
             * provided that you know the correct {@link GObject.GType} for the serialized instance.
             * @virtual
             */
            vfunc_serialize(): GLib.Variant;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SerializableNamespace {
        $gtype: GObject.GType<Serializable>;
        prototype: Serializable;

        /**
         * Reconstruct a {@link Dee.Serializable} from {@link GLib.Variant} data. For this function
         * to work you need to register a parser with
         * `dee_serializable_register_parser()`. Any native Dee class will do so
         * automatically.
         *
         * This method only works on data created with `dee_serializable_serialize()`
         * and <emphasis>not</emphasis> with data from `dee_serializable_externalize()`.
         *
         * Since a {@link Dee.SerializableParseFunc} is not allowed to fail - by contract -
         * it can be guaranteed that this function only returns `null` in case there
         * is no known parser for `type` and {@link GLib.Variant} signature of `data`.
         * @param data The {@link GLib.Variant} data to parse. If this is a floating reference it will        be consumed
         * @param type The {@link GObject.GType} of the class to instantiate from `data`
         */
        parse<T = GObject.Object>(data: GLib.Variant, type: GObject.GType): T;
        /**
         * Reconstruct a {@link Dee.Serializable} from {@link GLib.Variant} data. For this function
         * to work you need to register a parser with
         * `dee_serializable_register_parser()`. Any native Dee class will do so
         * automatically.
         *
         * This method only works on data created with `dee_serializable_externalize()`
         * and <emphasis>not</emphasis> with data from  `dee_serializable_serialize()`.
         *
         * Since a {@link Dee.SerializableParseFunc} is not allowed to fail - by contract -
         * it can be guaranteed that this function only returns `null` in case there
         * is no known parser for the {@link GObject.GType} or {@link GLib.Variant} signature of `data`.
         * @param data The {@link GLib.Variant} data to parse
         */
        parse_external<T = GObject.Object>(data: GLib.Variant): T;
    }
    /**
     * @gir-type Interface
     */
    interface Serializable extends GObject.Object, Serializable.Interface {
        // Methods

        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;
    }

    export const Serializable: SerializableNamespace & {
        new (): Serializable; // This allows `obj instanceof Serializable`
    };

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

export default Dee;

// END
