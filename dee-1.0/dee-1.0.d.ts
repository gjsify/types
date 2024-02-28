/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dee-1.0-ambient.d.ts';
import './dee-1.0-import.d.ts';
/**
 * Dee-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Dee {
    /**
     * Error codes for the ICU extension to Dee. These codes will be set when the
     * error domain is #DEE_ICU_ERROR.
     */
    class ICUError extends GLib.Error {
        // Own fields of Dee-1.0.ICUError

        /**
         * Error parsing a transliteration rule
         */
        BAD_RULE: number;
        /**
         * Error parsing a transliterator system id
         */
        BAD_ID: number;
        /**
         * The ICU subsystem returned an error that is not
         *                         handled in Dee
         */
        UNKNOWN: number;

        // Constructors of Dee-1.0.ICUError

        constructor(options: { message: string; code: number });
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
     * Create a new #DeeFilter with the given parameters. This call will zero
     * the `out_filter` struct.
     * @param map_func The #DeeFilterMapFunc to use for the filter
     * @param map_notify The #DeeFilterMapNotify to use for the filter
     * @param destroy The #GDestroyNotify to call on                         @userdata when disposing of the filter
     */
    function filter_new(map_func: FilterMapFunc, map_notify: FilterMapNotify, destroy: GLib.DestroyNotify | null): void;
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    function filter_new_collator(column: number): void;
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted descending according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    function filter_new_collator_desc(column: number): void;
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
     * @param value A #GVariant value columns must match exactly.         The matching semantics are those of g_variant_equal(). If @value         is floating the ownership will be transfered to the filter
     */
    function filter_new_for_any_column(column: number, value: GLib.Variant): void;
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which has an exact match on some string column. A #DeeFilterModel created
     * with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string key to match
     * @param key
     */
    function filter_new_for_key_column(column: number, key: string): void;
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which match a regular expression on some string column. A #DeeFilterModel
     * created with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string to match
     * @param regex The regular expression @column must match
     */
    function filter_new_regex(column: number, regex: GLib.Regex): void;
    /**
     * Create a new #DeeFilter sorting a model according to a #DeeCompareRowFunc.
     * @param cmp_row A #DeeCompareRowFunc to use for sorting
     * @param cmp_destroy The #GDestroyNotify to call on                         @cmp_user_data when disposing of the filter
     */
    function filter_new_sort(cmp_row: CompareRowFunc, cmp_destroy: GLib.DestroyNotify | null): void;
    function icu_error_quark(): GLib.Quark;
    /**
     * Create a new #DeeModelReader with the given parameters. This call will zero
     * the `out_reader` struct.
     * @param reader_func The #DeeModelReaderFunc to use for the reader
     * @param destroy The #GDestroyNotify to call on                                        @userdata when disposing of the reader
     */
    function model_reader_new(reader_func: ModelReaderFunc, destroy: GLib.DestroyNotify | null): void;
    /**
     * A #DeeModelReader reading a %gint32 from a #DeeModel at a given column
     * @param column The column index to read a %gint32 from
     */
    function model_reader_new_for_int32_column(column: number): void;
    /**
     * A #DeeModelReader reading a string from a #DeeModel at a given column
     * @param column The column index to read a string from
     */
    function model_reader_new_for_string_column(column: number): void;
    /**
     * A #DeeModelReader reading a %guint32 from a #DeeModel at a given column
     * @param column The column index to read a %guint32 from
     */
    function model_reader_new_for_uint32_column(column: number): void;
    /**
     * Get a pointer to the platform default #DeeResourceManager.
     * @returns The default resource manager for the platform.               Do not unreference. If you need to keep the instance around               you must manually reference it.
     */
    function resource_manager_get_default(): ResourceManager;
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
     * @param type The #GType of the class to instantiate from @data
     * @returns A newly constructed #GObject build from @data               or %NULL in case no parser has been registered for the given               #GType or variant signature. Free with g_object_unref().
     */
    function serializable_parse<T = GObject.Object>(data: GLib.Variant, type: GObject.GType): T;
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
     * @returns A newly constructed #GObject build from @data               or %NULL in case no parser has been registered for the given               #GType or variant signature. Free with g_object_unref().
     */
    function serializable_parse_external<T = GObject.Object>(data: GLib.Variant): T;
    interface CollatorFunc {
        (input: string): string;
    }
    interface CompareRowFunc {
        (row1: GLib.Variant[], row2: GLib.Variant[]): number;
    }
    interface CompareRowSizedFunc {
        (row1: GLib.Variant[], row2: GLib.Variant[]): number;
    }
    interface FilterMapFunc {
        (orig_model: Model, filter_model: FilterModel): void;
    }
    interface FilterMapNotify {
        (orig_model: Model, orig_iter: ModelIter, filter_model: FilterModel): boolean;
    }
    interface IndexIterFunc {
        (key: string, rows: ResultSet): boolean;
    }
    interface ModelReaderFunc {
        (model: Model, iter: ModelIter): string;
    }
    interface SerializableParseFunc {
        (data: GLib.Variant): GObject.Object;
    }
    interface TermFilterFunc {
        (terms_in: TermList, terms_out: TermList): void;
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
    module Analyzer {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeAnalyzer structure are private and should never be
     * accessed directly
     */
    class Analyzer extends GObject.Object {
        // Constructors of Dee-1.0.Analyzer

        static ['new'](): Analyzer;

        // Owm methods of Dee-1.0.Analyzer

        /**
         * A #GCompareDataFunc using a #DeeAnalyzer to compare the keys. This is just
         * a convenience wrapper around dee_analyzer_collate_cmp().
         * @param key1 The first key to compare
         * @param key2 The second key to compare
         * @param analyzer The #DeeAnalyzer to use for the comparison
         */
        static collate_cmp_func(key1: string, key2: string, analyzer?: any | null): number;

        // Owm methods of Dee-1.0.Analyzer

        /**
         * Register a #DeeTermFilterFunc to be called whenever dee_analyzer_analyze()
         * is called.
         *
         * Term filters can be used to normalize, add, or remove terms from an input
         * data stream.
         * @param filter_func Function to call
         * @param filter_destroy Called on @filter_data when the #DeeAnalyzer                                owning the filter is destroyed
         */
        add_term_filter(filter_func: TermFilterFunc, filter_destroy?: GLib.DestroyNotify | null): void;
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
        analyze(data: string, terms_out?: TermList | null, colkeys_out?: TermList | null): void;
        /**
         * Compare collation keys generated by dee_analyzer_collate_key() with similar
         * semantics as strcmp(). See also dee_analyzer_collate_cmp_func() if you
         * need a version of this function that works as a #GCompareDataFunc.
         *
         * The default implementation in #DeeAnalyzer just uses strcmp().
         * @param key1 The first collation key to compare
         * @param key2 The second collation key to compare
         * @returns -1, 0 or 1, if @key1 is &lt;, == or &gt; than @key2.
         */
        collate_cmp(key1: string, key2: string): number;
        /**
         * Generate a collation key for a set of input data (usually a UTF-8 string
         * passed through tokenization and term filters of the analyzer).
         *
         * The default implementation just calls g_strdup().
         * @param data The input data to generate a collation key for
         * @returns A newly allocated collation key. Use dee_analyzer_collate_cmp() or          dee_analyzer_collate_cmp_func() to compare collation keys. Free          with g_free().
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
         * @param terms_out A #DeeTermList to place the generated tokens in.
         */
        tokenize(data: string, terms_out: TermList): void;
    }

    module Client {
        // Constructor properties interface
    }

    class Client extends Peer {
        // Own properties of Dee-1.0.Client

        bus_address: string;
        busAddress: string;

        // Constructors of Dee-1.0.Client

        static ['new'](swarm_name: string): Client;

        static new_for_address(swarm_name: string, bus_address: string): Client;
    }

    module FileResourceManager {
        // Constructor properties interface
    }

    class FileResourceManager extends GObject.Object {
        // Own properties of Dee-1.0.FileResourceManager

        /**
         * Property holding the primary path used to store and load resources
         */
        primary_path: string;
        /**
         * Property holding the primary path used to store and load resources
         */
        primaryPath: string;

        // Constructors of Dee-1.0.FileResourceManager

        static ['new'](primary_path: string): FileResourceManager;

        // Owm methods of Dee-1.0.FileResourceManager

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
    }

    module FilterModel {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeFilterModel structure are private and should never be
     * accessed directly
     */
    class FilterModel extends ProxyModel {
        // Own properties of Dee-1.0.FilterModel

        /**
         * Property holding the #DeeFilter used to filter the model
         * defined in the #DeeFilterModel:back-end property.
         */
        filter: Filter;

        // Constructors of Dee-1.0.FilterModel

        static ['new'](orig_model: Model, filter: Filter): FilterModel;

        // Owm methods of Dee-1.0.FilterModel

        /**
         * Includes `iter` from the back end model in the filtered model, appending
         * it to the end of the filtered rows.
         *
         * This method is usually called when implementing #DeeFilterMapFunc or
         * #DeeFilterMapNotify methods.
         * @param iter
         * @returns Always returns @iter
         */
        append_iter(iter: ModelIter): ModelIter;
        /**
         * Check if `iter` from the back end model is mapped in `self`.
         * @param iter The #DeeModelIter to check
         * @returns %TRUE if and only if @iter is contained in @self.
         */
        contains(iter: ModelIter): boolean;
        /**
         * Includes `iter` from the back end model in the filtered model, inserting it at
         * `pos` pushing other rows down.
         *
         * This method is usually called when implementing #DeeFilterMapFunc or
         * #DeeFilterMapNotify methods.
         * @param iter
         * @param pos
         * @returns Always returns @iter
         */
        insert_iter(iter: ModelIter, pos: number): ModelIter;
        /**
         * Includes `iter` from the back end model in the filtered model, inserting it at
         * the position before `pos` pushing other rows down.
         *
         * This method is usually called when implementing #DeeFilterMapFunc or
         * #DeeFilterMapNotify methods.
         * @param iter
         * @param pos
         * @returns Always returns @iter
         */
        insert_iter_before(iter: ModelIter, pos: ModelIter): ModelIter;
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
         * @returns Always returns @iter
         */
        insert_iter_with_original_order(iter: ModelIter): ModelIter;
        /**
         * Includes `iter` from the back end model in the filtered model, prepending
         * it to the beginning of the filtered rows.
         *
         * This method is usually called when implementing #DeeFilterMapFunc or
         * #DeeFilterMapNotify methods.
         * @param iter
         * @returns Always returns @iter
         */
        prepend_iter(iter: ModelIter): ModelIter;
    }

    module GListResultSet {
        // Constructor properties interface
    }

    class GListResultSet extends GObject.Object {}

    module HashIndex {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeHashIndex structure are private and should never be
     * accessed directly
     */
    class HashIndex extends Index {
        // Constructors of Dee-1.0.HashIndex

        static ['new'](model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex;
    }

    module Index {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeIndex structure are private and should never be
     * accessed directly
     */
    abstract class Index extends GObject.Object {
        // Own properties of Dee-1.0.Index

        /**
         * The #DeeAnalyzer used to analyze terms extracted by the model reader
         */
        analyzer: Analyzer;
        /**
         * The #DeeModel being indexed
         */
        model: Model;
        /**
         * The #DeeModelReader used to extract terms from rows in the model
         */
        reader: ModelReader;

        // Owm methods of Dee-1.0.Index

        /**
         * Iterate over an index optionally starting from some given term. Note that
         * unordered indexes (like #DeeHashIndex) has undefined behaviour with
         * this method.
         * @param start_term The term to start from or %NULL to iterate over all terms
         * @param func Called for each term in the index
         */
        foreach(start_term: string, func: IndexIterFunc): void;
        /**
         * Get the analyzer being used to analyze terms extracted with the
         * #DeeModelReader used by this index.
         * @returns The #DeeAnalyzer used to analyze terms with
         */
        get_analyzer(): Analyzer;
        /**
         * Get the model being indexed by this index
         * @returns The #DeeModel being indexed by this index
         */
        get_model(): Model;
        /**
         * Get the number of indexed rows. A row is only indexed if it has at least one
         * term associated with it. If the analyzer has returned 0 terms then the row
         * is omitted from the index.
         * @returns The number of rows in the index. Note that this may less than or          equal to dee_model_get_n_rows().
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
         * @returns The #DeeModelReader used to extract terms with
         */
        get_reader(): ModelReader;
        /**
         * Get the #DeeTermMatchFlag<!-- --> supported by this #DeeIndex instance
         * @returns A bit mask of the acceptedd #DeeTermMatchFlag<!-- -->s
         */
        get_supported_term_match_flags(): number;
        lookup(term: string, flags: TermMatchFlag): ResultSet;
        /**
         * Convenience function in for cases where you have a priori guarantee that
         * a dee_index_lookup() call will return exactly 0 or 1 row. If the lookup
         * returns more than 1 row a warning will be printed on standard error and
         * %NULL will be returned.
         *
         * The typical use case for this function is if you need something akin to
         * a primary key in a relational database.
         * @param term The exact term to match
         * @returns A #DeeModelIter pointing to the matching               row or %NULL in case no rows matches @term
         */
        lookup_one(term: string): ModelIter;
    }

    module Peer {
        // Signal callback interfaces

        interface ConnectionAcquired {
            (object: Gio.DBusConnection): void;
        }

        interface ConnectionClosed {
            (connection: Gio.DBusConnection): void;
        }

        interface PeerFound {
            (name: string): void;
        }

        interface PeerLost {
            (name: string): void;
        }

        // Constructor properties interface
    }

    /**
     * All fields in the DeePeer structure are private and should never be
     * accessed directly
     */
    class Peer extends GObject.Object {
        // Own properties of Dee-1.0.Peer

        readonly swarm_leader: string;
        readonly swarmLeader: string;
        swarm_name: string;
        swarmName: string;
        swarm_owner: boolean;
        swarmOwner: boolean;

        // Constructors of Dee-1.0.Peer

        static ['new'](swarm_name: string): Peer;

        // Owm methods of Dee-1.0.Peer

        /**
         * Gets list of #GDBusConnection instances used by this #DeePeer instance.
         * @returns List of connections.
         */
        get_connections(): Gio.DBusConnection[];
        /**
         * In case this peer is connected to a message bus, gets the unique DBus
         * address of the current swarm leader, otherwise returns id of the leader.
         * @returns Unique DBus address of the current swarm leader,    possibly %NULL if the leader has not been detected yet
         */
        get_swarm_leader(): string;
        /**
         * Gets the unique name for this swarm. The swarm leader is the Peer owning
         * this name on the session bus.
         * @returns The swarm name
         */
        get_swarm_name(): string;
        is_swarm_leader(): boolean;
        /**
         * Gets the value of the :swarm-owner property.
         *
         * Note that this does NOT mean that the peer is leader of the swarm! Check also
         * dee_peer_is_swarm_leader().
         * @returns TRUE if the :swarm-owner property was set during construction.
         */
        is_swarm_owner(): boolean;
        /**
         * Gets list of all peers currently in this swarm.
         * @returns List of peers (free using g_strfreev()).
         */
        list_peers(): string[];
    }

    module ProxyModel {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeProxyModel structure are private and should never be
     * accessed directly
     */
    class ProxyModel extends SerializableModel {
        // Own properties of Dee-1.0.ProxyModel

        /**
         * The backend model used by this proxy model.
         */
        back_end: Model;
        /**
         * The backend model used by this proxy model.
         */
        backEnd: Model;
        /**
         * Boolean property defining whether sequence numbers will be inherited
         * from the back end model.
         * You will most likely want to set this property to false
         * if the implementation manipulates with the rows in the model and keep
         * track of seqnums yourself.
         */
        inherit_seqnums: boolean;
        /**
         * Boolean property defining whether sequence numbers will be inherited
         * from the back end model.
         * You will most likely want to set this property to false
         * if the implementation manipulates with the rows in the model and keep
         * track of seqnums yourself.
         */
        inheritSeqnums: boolean;
        /**
         * Boolean property defining whether or not to automatically forward signals
         * from the back end model. This is especially useful for sub classes wishing
         * to do their own more advanced signal forwarding.
         */
        proxy_signals: boolean;
        /**
         * Boolean property defining whether or not to automatically forward signals
         * from the back end model. This is especially useful for sub classes wishing
         * to do their own more advanced signal forwarding.
         */
        proxySignals: boolean;
    }

    module SequenceModel {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeSequenceModel structure are private and should never be
     * accessed directly
     */
    class SequenceModel extends SerializableModel {
        // Constructors of Dee-1.0.SequenceModel

        static ['new'](): SequenceModel;
    }

    module SerializableModel {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeSerializableModel structure are private and should never be
     * accessed directly
     */
    abstract class SerializableModel extends GObject.Object {
        // Owm methods of Dee-1.0.SerializableModel

        get_seqnum(): number;
        /**
         * Increments sequence number of this #DeeSerializableModel.
         */
        inc_seqnum(): number;
        /**
         * Sets sequence number of this #DeeSerializableModel.
         * @param seqnum Sequence number
         */
        set_seqnum(seqnum: number): void;
    }

    module Server {
        // Constructor properties interface
    }

    class Server extends Peer {
        // Own properties of Dee-1.0.Server

        bus_address: string;
        busAddress: string;
        same_user_only: boolean;
        sameUserOnly: boolean;

        // Constructors of Dee-1.0.Server

        static ['new'](swarm_name: string): Server;

        static new_for_address(swarm_name: string, bus_address: string): Server;

        // Owm methods of Dee-1.0.Server

        /**
         * Helper method which creates bus address string for the given name, which
         * should have the same format as a DBus unique name.
         * @param name A name to create bus address for.
         * @param include_username Include current user name as part of the bus address.
         */
        static bus_address_for_name(name: string, include_username: boolean): string;

        // Owm methods of Dee-1.0.Server

        /**
         * Gets a D-Bus address string that can be used by clients to connect to server.
         * @returns A D-Bus address string. Do not free.
         */
        get_client_address(): string;
    }

    module SharedModel {
        // Signal callback interfaces

        interface BeginTransaction {
            (begin_seqnum: number, end_seqnum: number): void;
        }

        interface EndTransaction {
            (begin_seqnum: number, end_seqnum: number): void;
        }

        // Constructor properties interface
    }

    /**
     * All fields in the DeeSharedModel structure are private and should never be
     * accessed directly
     */
    class SharedModel extends ProxyModel {
        // Own properties of Dee-1.0.SharedModel

        /**
         * Enumeration defining behavior of this model when trying to write to it.
         *
         * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
         * when one process is considered an "owner" of a model and all the other
         * peers are supposed to only synchronize it for reading.
         *
         * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
         */
        access_mode: SharedModelAccessMode;
        /**
         * Enumeration defining behavior of this model when trying to write to it.
         *
         * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
         * when one process is considered an "owner" of a model and all the other
         * peers are supposed to only synchronize it for reading.
         *
         * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
         */
        accessMode: SharedModelAccessMode;
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
        flush_mode: SharedModelFlushMode;
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
        flushMode: SharedModelFlushMode;
        /**
         * The #DeePeer that this model uses to connect to the swarm
         */
        peer: Peer;
        /**
         * Boolean property defining whether or not the model has synchronized with
         * its peers (if any) yet.
         *
         * You should not modify a #DeeSharedModel that is not synchronized. Before
         * modifying the model in any way (except calling dee_model_set_schema())
         * you should wait for it to become synchronized.
         */
        readonly 'synchronized': boolean;

        // Constructors of Dee-1.0.SharedModel

        static ['new'](name: string): SharedModel;

        static new_for_peer(peer: Peer): SharedModel;

        static new_with_back_end(name: string, back_end: Model): SharedModel;

        // Owm methods of Dee-1.0.SharedModel

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
         * @returns The number of revisions flushed.
         */
        flush_revision_queue(): number;
        /**
         * Similar to dee_shared_model_flush_revision_queue(), but also blocks
         * the mainloop until all the underlying transport streams have been flushed.
         *
         * <emphasis>Important</emphasis>: This method <emphasis>may</emphasis> flush
         * your internal queue of DBus messages forcing them to be send before this call
         * returns.
         * @returns The number of revisions flushed.
         */
        flush_revision_queue_sync(): number;
        /**
         * Convenience function for accessing the #DeeSharedModel:flush-mode property.
         * @returns The #DeeSharedModelFlushMode used by the model
         */
        get_flush_mode(): SharedModelFlushMode;
        /**
         * Convenience function for accessing the #DeeSharedModel:peer property
         * @returns The #DeePeer used to interact with the peer models
         */
        get_peer(): Peer;
        /**
         * Convenience function for accessing the #DeePeer:swarm-name property of the
         * #DeePeer defined in the #DeeSharedModel:peer property.
         * @returns The name of the swarm this model synchrnonizes with
         */
        get_swarm_name(): string;
        /**
         * Check if the model is the swarm leader. This is a convenience function for
         * accessing the #DeeSharedModel:peer property and checking if it's the swarm
         * leader.
         * @returns The value of dee_peer_is_swarm_leader() for the #DeePeer used by          this shared model
         */
        is_leader(): boolean;
        /**
         * Check if the model is synchronized with its peers. Before modifying a
         * shared model in any way (except dee_model_set_schema()) you should wait for
         * it to become synchronized. This is normally done by waiting for the
         * &quot;notify::synchronized&quot; signal.
         *
         * This method is purely a convenience function for accessing the
         * #DeeSharedModel:synchronized property.
         * @returns The value of the :synchronized property
         */
        is_synchronized(): boolean;
        /**
         * Convenience function for setting the #DeeSharedModel:flush-mode property.
         * @param mode Flush mode to use
         */
        set_flush_mode(mode: SharedModelFlushMode): void;
    }

    module TermList {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeTermList structure are private and should never be
     * accessed directly
     */
    class TermList extends GObject.Object {
        // Owm methods of Dee-1.0.TermList

        /**
         * Add a term to the termlist. Note that it is possible to add a term multiple
         * times. The effect of this is determined by the #DeeModelIndex consuming the
         * #DeeTermList.
         * @param term The term to add
         * @returns Always returns @self
         */
        add_term(term: string): TermList;
        /**
         * Remove all terms from a term list making it ready for reuse. Note that
         * term list implementations will often have optimized memory allocation
         * schemes so reuse is often more efficient than allocating a new term list
         * each time you need it.
         * @returns Always returns @self
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
         * and a clone can be compared directly as pointers (fx. with g_direct_equal()).
         * This is because they share the underlying string pool.
         * @returns A newly allocated term list.                           Free with g_object_unref().
         */
        clone(): TermList;
        /**
         * Get the n'th term in the list.
         *
         * Note that in the default implementation it is guaranteed that the returned
         * string is valid for the entire lifetime of the #DeeTermList.
         * @param n The (zero based) offset into the term list
         * @returns The @n<!-- -->th string held in the term list
         */
        get_term(n: number): string;
        num_terms(): number;
    }

    module TextAnalyzer {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeTextAnalyzer structure are private and should never be
     * accessed directly
     */
    class TextAnalyzer extends Analyzer {
        // Constructors of Dee-1.0.TextAnalyzer

        static ['new'](): TextAnalyzer;
    }

    module Transaction {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeTransaction structure are private and should never be
     * accessed directly
     */
    class Transaction extends SerializableModel {
        // Own properties of Dee-1.0.Transaction

        target: Model;

        // Constructors of Dee-1.0.Transaction

        static ['new'](target: Model): Transaction;

        // Owm methods of Dee-1.0.Transaction

        static error_quark(): GLib.Quark;

        // Owm methods of Dee-1.0.Transaction

        /**
         * Apply a transaction to its target model. After this call the transaction
         * is invalidated and must be freed with g_object_unref().
         * @returns %TRUE if and only if the transaction successfully applies to :target.
         */
        commit(): boolean;
        /**
         * Get the target model of a transaction. This is just a convenience method
         * for accessing the :target property.
         * @returns The target model
         */
        get_target(): Model;
        /**
         * Check if a #DeeTransaction has been committed. This method is mainly for
         * debugging and testing purposes.
         * @returns %TRUE if and only if dee_transaction_commit() has completed          successfully on the transaction.
         */
        is_committed(): boolean;
    }

    module TreeIndex {
        // Constructor properties interface
    }

    /**
     * All fields in the DeeTreeIndex structure are private and should never be
     * accessed directly
     */
    class TreeIndex extends Index {
        // Constructors of Dee-1.0.TreeIndex

        static ['new'](model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex;
    }

    class AnalyzerClass {}

    /**
     * Ignore this structure.
     */
    class AnalyzerPrivate {}

    class ClientClass {}

    /**
     * Ignore this structure.
     */
    class ClientPrivate {}

    class FileResourceManagerClass {}

    /**
     * Structure encapsulating the mapping logic used to construct a #DeeFilterModel
     */
    class Filter {
        // Own fields of Dee-1.0.Filter

        map_func: FilterMapFunc;
        map_notify: FilterMapNotify;
        userdata: any;

        // Owm methods of Dee-1.0.Filter

        /**
         * Create a new #DeeFilter with the given parameters. This call will zero
         * the `out_filter` struct.
         * @param map_func The #DeeFilterMapFunc to use for the filter
         * @param map_notify The #DeeFilterMapNotify to use for the filter
         * @param destroy The #GDestroyNotify to call on                         @userdata when disposing of the filter
         */
        static ['new'](map_func: FilterMapFunc, map_notify: FilterMapNotify, destroy: GLib.DestroyNotify | null): void;
        /**
         * Create a #DeeFilter that takes string values from a column in the model
         * and builds a #DeeFilterModel with the rows sorted according to the
         * collation rules of the current locale.
         * @param column The index of a column containing the strings to sort after
         */
        static new_collator(column: number): void;
        /**
         * Create a #DeeFilter that takes string values from a column in the model
         * and builds a #DeeFilterModel with the rows sorted descending according to the
         * collation rules of the current locale.
         * @param column The index of a column containing the strings to sort after
         */
        static new_collator_desc(column: number): void;
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
         * @param value A #GVariant value columns must match exactly.         The matching semantics are those of g_variant_equal(). If @value         is floating the ownership will be transfered to the filter
         */
        static new_for_any_column(column: number, value: GLib.Variant): void;
        /**
         * Create a #DeeFilter that only includes rows from the original model
         * which has an exact match on some string column. A #DeeFilterModel created
         * with this filter will be ordered in accordance with its parent model.
         * @param column The index of a column containing the string key to match
         * @param key
         */
        static new_for_key_column(column: number, key: string): void;
        /**
         * Create a #DeeFilter that only includes rows from the original model
         * which match a regular expression on some string column. A #DeeFilterModel
         * created with this filter will be ordered in accordance with its parent model.
         * @param column The index of a column containing the string to match
         * @param regex The regular expression @column must match
         */
        static new_regex(column: number, regex: GLib.Regex): void;
        /**
         * Create a new #DeeFilter sorting a model according to a #DeeCompareRowFunc.
         * @param cmp_row A #DeeCompareRowFunc to use for sorting
         * @param cmp_destroy The #GDestroyNotify to call on                         @cmp_user_data when disposing of the filter
         */
        static new_sort(cmp_row: CompareRowFunc, cmp_destroy: GLib.DestroyNotify | null): void;

        // Owm methods of Dee-1.0.Filter

        /**
         * Call the #GDestroyNotify function on the userdata pointer of a #DeeFilter
         * (if the destroy member is set, that is).
         *
         * When using a #DeeFilterModel you should not call this method yourself.
         *
         * This method will not free the memory allocated for `filter`.
         */
        destroy(): void;
        /**
         * Call the #DeeFilterMapFunc function of a #DeeFilter.
         * When using a #DeeFilterModel you should not call this method yourself.
         * @param orig_model The model that is being filtered
         * @param filter_model The #DeeFilterModel that holds the                filtered subset of @orig_model
         */
        map(orig_model: Model, filter_model: FilterModel): void;
        /**
         * Call the #DeeFilterMapNotify function of a #DeeFilter.
         * When using a #DeeFilterModel you should not call this method yourself.
         * @param orig_iter The #DeeModelIter added to @orig_model
         * @param orig_model The model that is being filtered
         * @param filter_model The #DeeFilterModel that holds the                filtered subset of @orig_model
         * @returns The return value from the #DeeFilterMapNotify. That is; %TRUE          if @orig_iter was added to @filter_model
         */
        notify(orig_iter: ModelIter, orig_model: Model, filter_model: FilterModel): boolean;
    }

    class FilterModelClass {}

    /**
     * Ignore this structure.
     */
    class FilterModelPrivate {}

    class GListResultSetClass {}

    class HashIndexClass {}

    class HashIndexPrivate {}

    class ICUTermFilter {
        // Owm methods of Dee-1.0.ICUTermFilter

        /**
         * Apply a #DeeICUTermFilter on a piece of UTF-8 text.
         * @param text The text to apply the filter on
         * @returns A newly allocated string. Free with g_free().
         */
        apply(text: string): string;
        /**
         * Free all resources allocated by a #DeeICUTermFilter.
         */
        destroy(): void;
    }

    class IndexClass {}

    /**
     * Ignore this structure.
     */
    class IndexPrivate {}

    class ModelIface {}

    /**
     * The DeeModelIter structure is private and should only be used with the
     * provided #DeeModel API. It is owned by DeeModel and should not be freed.
     */
    class ModelIter {}

    /**
     * Structure encapsulating the information needed to read strings from a
     * model. Used for example by #DeeIndex.
     */
    class ModelReader {
        // Own fields of Dee-1.0.ModelReader

        reader_func: ModelReaderFunc;
        userdata: any;

        // Owm methods of Dee-1.0.ModelReader

        /**
         * Create a new #DeeModelReader with the given parameters. This call will zero
         * the `out_reader` struct.
         * @param reader_func The #DeeModelReaderFunc to use for the reader
         * @param destroy The #GDestroyNotify to call on                                        @userdata when disposing of the reader
         */
        static ['new'](reader_func: ModelReaderFunc, destroy: GLib.DestroyNotify | null): void;
        /**
         * A #DeeModelReader reading a %gint32 from a #DeeModel at a given column
         * @param column The column index to read a %gint32 from
         */
        static new_for_int32_column(column: number): void;
        /**
         * A #DeeModelReader reading a string from a #DeeModel at a given column
         * @param column The column index to read a string from
         */
        static new_for_string_column(column: number): void;
        /**
         * A #DeeModelReader reading a %guint32 from a #DeeModel at a given column
         * @param column The column index to read a %guint32 from
         */
        static new_for_uint32_column(column: number): void;

        // Owm methods of Dee-1.0.ModelReader

        /**
         * Release resources associated with `reader,` but does not free the
         * #DeeModelReader structure itself.
         *
         * This will call the destroy() function registered with the reader
         * if it is set.
         */
        destroy(): void;
        /**
         * Read data from a row in a #DeeModel and extract a string representation from
         * it.
         *
         * Note that generally a #DeeModelReader need not be confined to reading from
         * one specific column, although in practice most are.
         * @param model The #DeeModel to read a string from
         * @param iter The row to read a string from
         * @returns A newly allocated string. Free with g_free().
         */
        read(model: Model, iter: ModelIter): string;
    }

    /**
     * The DeeModelTag structure is private and should only be used with the
     * provided #DeeModel API. It is owned by DeeModel and should not be freed.
     */
    class ModelTag {}

    class PeerClass {}

    /**
     * Ignore this structure.
     */
    class PeerPrivate {}

    class ProxyModelClass {}

    /**
     * Ignore this structure.
     */
    class ProxyModelPrivate {}

    class ResourceManagerIface {}

    class ResultSetIface {}

    class SequenceModelClass {}

    /**
     * Ignore this structure.
     */
    class SequenceModelPrivate {}

    class SerializableIface {}

    class SerializableModelClass {}

    /**
     * Ignore this structure.
     */
    class SerializableModelPrivate {}

    class ServerClass {}

    /**
     * Ignore this structure.
     */
    class ServerPrivate {}

    class SharedModelClass {}

    /**
     * Ignore this structure.
     */
    class SharedModelPrivate {}

    class TermListClass {}

    /**
     * Ignore this structure.
     */
    class TermListPrivate {}

    class TextAnalyzerClass {}

    class TextAnalyzerPrivate {}

    class TransactionClass {}

    /**
     * Ignore this structure.
     */
    class TransactionPrivate {}

    class TreeIndexClass {}

    class TreeIndexPrivate {}

    interface Model {
        // Owm methods of Dee-1.0.Model

        /**
         * Like dee_model_append() but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param row_members An array of  #GVariants with type               signature matching those of the column schemas of @self.               If any of the variants have floating references they will be               consumed
         * @returns A #DeeModelIter pointing to the new row
         */
        append_row(row_members: GLib.Variant[]): ModelIter;
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
        begin_changeset(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         */
        clear(): void;
        /**
         * This method is purely syntactic sugar for calling dee_model_set_tag() with
         * a `value` of %NULL. It's included in order to help developers write more
         * readable code.
         * @param iter The row to clear the tag from
         * @param tag The tag to clear from @iter
         */
        clear_tag(iter: ModelIter, tag: ModelTag): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also dee_model_begin_changeset().
         */
        end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * dee_model_insert_row_sorted() to insert rows in the model.
         * @param row_spec An array of       #GVariants with type signature matching those of the       column schemas of @self. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If @out_was_found is set to           %TRUE then a #DeeModelIter pointing to the last matching row.           If it is %FALSE then the iter pointing to the row just after where           @row_spec_would have been inserted.
         */
        find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
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
         * @param row_spec An array of       #GVariants with type signature matching those of the       column schemas of @self. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         * @returns If @out_was_found is set to           %TRUE then a #DeeModelIter pointing to the last matching row.           If it is %FALSE then the iter pointing to the row just after where           @row_spec_would have been inserted.
         */
        find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter;
        get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         * @returns 0-based index of the column or -1 if column with this name               wasn't found
         */
        get_column_index(column_name: string): number;
        /**
         * Get a %NULL-terminated array of column names for the columns of `self`.
         * These names can be used in calls to dee_model_build_named_row().
         * @returns A %NULL-terminated array of #GVariant type strings. The length of          the returned array is written to @num_columns. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_column_names(): string[];
        /**
         * Get the #GVariant signature of a column
         * @param column the column to get retrieve the #GVariant type string of
         * @returns the #GVariant signature of the column at index @column
         */
        get_column_schema(column: number): string;
        get_double(iter: ModelIter, column: number): number;
        /**
         * Get the #GVariant signature of field previously registered with
         * dee_model_register_vardict_schema().
         * @param field_name name of vardict field to get schema of
         * @returns the #GVariant signature for the field, or %NULL if given field               wasn't registered with dee_model_register_vardict_schema().
         */
        get_field_schema(field_name: string): string;
        /**
         * Retrieves a #DeeModelIter representing the first row in `self`.
         * @returns A #DeeModelIter (owned by @self, do not  free it)
         */
        get_first_iter(): ModelIter;
        get_int32(iter: ModelIter, column: number): number;
        get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a #DeeModelIter representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         * @returns A new #DeeModelIter, or %NULL if @row   was out of bounds. The returned iter is owned by @self, so do not free it.
         */
        get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         * @returns A #DeeModelIter (owned by @self, do not  free it)
         */
        get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         * @returns the number of columns per row in @self
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         * @returns the number of rows in @self
         */
        get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         * @returns The integer offset of @iter in @self
         */
        get_position(iter: ModelIter): number;
        get_row(iter: ModelIter): GLib.Variant[];
        /**
         * Get a %NULL-terminated array of #GVariant type strings that defines the
         * required formats for the columns of `self`.
         * @returns A %NULL-terminated array of #GVariant type strings. The length of          the returned array is written to @num_columns. The returned array          should not be freed or modified. It is owned by the model.
         */
        get_schema(): string[];
        get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A #DeeModelIter pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         * @returns Returns %NULL if @tag is unset otherwise the               value of the tag as it was set with dee_model_set_tag().
         */
        get_tag(iter: ModelIter, tag: ModelTag): any | null;
        get_uchar(iter: ModelIter, column: number): number;
        get_uint32(iter: ModelIter, column: number): number;
        get_uint64(iter: ModelIter, column: number): number;
        get_value(iter: ModelIter, column: number): GLib.Variant;
        get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * dee_model_register_vardict_schema().
         * @param column the column index to get the schemas for
         * @returns Hashtable               containing a mapping from field names to schemas or NULL.               Note that keys and values in the hashtable may be owned               by the model, so you need to create a deep copy if you               intend to keep the hashtable around.
         */
        get_vardict_schema(column: number): GLib.HashTable<string, string>;
        /**
         * As dee_model_insert(), but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of @self. If any of the variants have               floating references they will be consumed.
         * @returns A #DeeModelIter pointing to the new row
         */
        insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As dee_model_insert_before(), but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of @self. If any of the variants have floating       references they will be consumed.
         * @returns A #DeeModelIter pointing to the new row
         */
        insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of @self. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A #DeeModelIter pointing to the new row
         */
        insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of @self. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         * @returns A #DeeModelIter pointing to the new row
         */
        insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a #DeeModelIter
         * @returns #TRUE if @iter is the first iter in the model
         */
        is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a #DeeModelIter
         * @returns #TRUE if @iter is the last iter in the model
         */
        is_last(iter: ModelIter): boolean;
        /**
         * Returns a #DeeModelIter that points to the next position in the model.
         * @param iter a #DeeModelIter
         * @returns A #DeeModelIter, pointing to the next row in   the model. The iter is owned by @self, do not free it.
         */
        next(iter: ModelIter): ModelIter;
        /**
         * Like dee_model_prepend() but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of @self. If any of the variants have               floating references they will be consumed.
         * @returns A #DeeModelIter pointing to the new row
         */
        prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a #DeeModelIter that points to the previous position in the model.
         * @param iter a #DeeModelIter
         * @returns A #DeeModelIter, pointing to the previous   row in the model. The iter is owned by @self, do not free it.
         */
        prev(iter: ModelIter): ModelIter;
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
         * @returns A #DeeModelTag handle               that you can use to set and get tags with
         */
        register_tag(): ModelTag;
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
        register_vardict_schema(column: number, schemas: GLib.HashTable<string, string>): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a #DeeModelIter pointing to the row to remove
         */
        remove(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a %NULL
         */
        set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a #DeeModelIter
         * @param row_members And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         */
        set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the #GVariant types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of #GVariant type strings terminated by a %NULL
         */
        set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also dee_model_register_tag().
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the #GDestroyNotify passed to the dee_model_register_tag().
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from dee_model_register_tag()
         * @param value The value to set for @tag. Note that %NULL represents an unset tag
         */
        set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * dee_model_set_value_silently().
         * @param iter a #DeeModelIter
         * @param column column number to set the value
         * @param value New value for cell. If @value is a floating reference the model         will assume ownership of the variant
         */
        set_value(iter: ModelIter, column: number, value: GLib.Variant): void;

        // Own virtual methods of Dee-1.0.Model

        /**
         * Like dee_model_append() but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a prior knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param row_members An array of  #GVariants with type               signature matching those of the column schemas of @self.               If any of the variants have floating references they will be               consumed
         */
        vfunc_append_row(row_members: GLib.Variant[]): ModelIter;
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
        vfunc_begin_changeset(): void;
        vfunc_changeset_finished(): void;
        vfunc_changeset_started(): void;
        /**
         * Removes all rows in the model. Signals are emitted for each row in the model
         */
        vfunc_clear(): void;
        /**
         * Notify listeners that all changes have been committed to the model.
         * The default implementation of this method will emit
         * the ::changeset-finished signal.
         *
         * See also dee_model_begin_changeset().
         */
        vfunc_end_changeset(): void;
        /**
         * Finds a row in `self` according to the sorting specified by `cmp_func`.
         * This method will assume that `self` is already sorted by `cmp_func`.
         *
         * If you use this method for searching you should only use
         * dee_model_insert_row_sorted() to insert rows in the model.
         * @param row_spec An array of       #GVariants with type signature matching those of the       column schemas of @self. No references will be taken on the variants.
         * @param cmp_func Callback used for comparison or rows
         */
        vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        vfunc_get_bool(iter: ModelIter, column: number): boolean;
        /**
         * Get the column index of a column.
         * @param column_name the column name to retrieve the index of
         */
        vfunc_get_column_index(column_name: string): number;
        /**
         * Get a %NULL-terminated array of column names for the columns of `self`.
         * These names can be used in calls to dee_model_build_named_row().
         */
        vfunc_get_column_names(): string[];
        /**
         * Get the #GVariant signature of a column
         * @param column the column to get retrieve the #GVariant type string of
         */
        vfunc_get_column_schema(column: number): string;
        vfunc_get_double(iter: ModelIter, column: number): number;
        /**
         * Get the #GVariant signature of field previously registered with
         * dee_model_register_vardict_schema().
         * @param field_name name of vardict field to get schema of
         */
        vfunc_get_field_schema(field_name: string): string;
        /**
         * Retrieves a #DeeModelIter representing the first row in `self`.
         */
        vfunc_get_first_iter(): ModelIter;
        vfunc_get_int32(iter: ModelIter, column: number): number;
        vfunc_get_int64(iter: ModelIter, column: number): number;
        /**
         * Retrieves a #DeeModelIter representing the row at the given index.
         *
         * Note that this method does not have any performance guarantees. In particular
         * it is not guaranteed to be <emphasis>O(1)</emphasis>.
         * @param row position of the row to retrieve
         */
        vfunc_get_iter_at_row(row: number): ModelIter;
        /**
         * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
         * last row in `self`. This is refered to also the the
         * <emphasis>end iter</emphasis>.
         *
         * As with other iters the end iter, in particular, is stable over inserts,
         * changes, or removals.
         */
        vfunc_get_last_iter(): ModelIter;
        /**
         * Gets the number of columns in `self`
         */
        vfunc_get_n_columns(): number;
        /**
         * Gets the number of rows in `self`
         */
        vfunc_get_n_rows(): number;
        /**
         * Get the numeric offset of `iter` into `self`. Note that this method is
         * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
         * @param iter The iter to get the position of
         */
        vfunc_get_position(iter: ModelIter): number;
        vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant;
        /**
         * Get a %NULL-terminated array of #GVariant type strings that defines the
         * required formats for the columns of `self`.
         */
        vfunc_get_schema(): string[];
        vfunc_get_string(iter: ModelIter, column: number): string;
        /**
         * Look up a tag value for a given row in a model. This method is guaranteed
         * to be O(1).
         * @param iter A #DeeModelIter pointing to the row to get the tag from
         * @param tag The tag handle to retrieve the tag value for
         */
        vfunc_get_tag(iter: ModelIter, tag: ModelTag): any | null;
        vfunc_get_uchar(iter: ModelIter, column: number): number;
        vfunc_get_uint32(iter: ModelIter, column: number): number;
        vfunc_get_uint64(iter: ModelIter, column: number): number;
        vfunc_get_value(iter: ModelIter, column: number): GLib.Variant;
        vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant;
        /**
         * Get a schema for variant dictionary column previously registered using
         * dee_model_register_vardict_schema().
         * @param num_column
         */
        vfunc_get_vardict_schema(num_column: number): GLib.HashTable<string, string>;
        /**
         * As dee_model_insert(), but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param pos The index to insert the row on. The existing row will be pushed down.
         * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of @self. If any of the variants have               floating references they will be consumed.
         */
        vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter;
        /**
         * As dee_model_insert_before(), but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param iter An iter pointing to the row before which to insert the new one
         * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of @self. If any of the variants have floating       references they will be consumed.
         */
        vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter;
        /**
         * Inserts a row in `self` according to the sorting specified by `cmp_func`.
         * If you use this method for insertion you should not use other methods as this
         * method assumes the model to be already sorted by `cmp_func`.
         * @param row_members An array of       #GVariants with type signature matching those of the       column schemas of @self. If any of the variants have floating       references they will be consumed.
         * @param cmp_func Callback used for comparison or rows
         */
        vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter;
        /**
         * Checks if `iter` is the very first iter `self`.
         * @param iter a #DeeModelIter
         */
        vfunc_is_first(iter: ModelIter): boolean;
        /**
         * Whether `iter` is the end iter of `self`. Note that the end iter points
         * right <emphasis>after</emphasis> the last valid row in `self`.
         * @param iter a #DeeModelIter
         */
        vfunc_is_last(iter: ModelIter): boolean;
        /**
         * Returns a #DeeModelIter that points to the next position in the model.
         * @param iter a #DeeModelIter
         */
        vfunc_next(iter: ModelIter): ModelIter;
        /**
         * Like dee_model_prepend() but intended for language bindings or
         * situations where you work with models on a meta level and may not have
         * a priori knowledge of the column schemas of the models. See also
         * dee_model_build_row().
         * @param row_members An array of               #GVariants with type signature matching those of               the column schemas of @self. If any of the variants have               floating references they will be consumed.
         */
        vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter;
        /**
         * Returns a #DeeModelIter that points to the previous position in the model.
         * @param iter a #DeeModelIter
         */
        vfunc_prev(iter: ModelIter): ModelIter;
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
         */
        vfunc_register_tag(): ModelTag;
        /**
         * Register schema for fields in a model containing column with variant
         * dictionary schema ('a{sv}').
         * The keys registered with this function can be later used
         * with dee_model_build_named_row() function, as well as
         * dee_model_get_value_by_name(). Note that it is possible to register
         * the same field name for multiple columns, in which case you need to use
         * fully-qualified "column_name::field" name in the calls to
         * dee_model_build_named_row() and dee_model_get_field_schema().
         * @param num_column
         * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
         */
        vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable<string, string>): void;
        /**
         * Removes the row at the given position from the model.
         * @param iter a #DeeModelIter pointing to the row to remove
         */
        vfunc_remove(iter: ModelIter): void;
        vfunc_row_added(iter: ModelIter): void;
        vfunc_row_changed(iter: ModelIter): void;
        vfunc_row_removed(iter: ModelIter): void;
        /**
         * Set column names used by `self`.
         * This method must be called exactly once, but only after setting
         * a schema of the model. Note that some constructors will do this for you.
         * @param column_names A list of column names terminated by a %NULL
         */
        vfunc_set_column_names_full(column_names: string[]): void;
        /**
         * Sets all columns in the row `iter` points to, to those found in
         * `row_members`. The variants in `row_members` must match the types defined in
         * the model's schema.
         * @param iter a #DeeModelIter
         * @param row_members And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
         */
        vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void;
        /**
         * Set the #GVariant types and the number of columns used by `self`.
         * This method must be called exactly once before using `self`. Note that
         * some constructors will do this for you.
         * @param column_schemas A list of #GVariant type strings terminated by a %NULL
         */
        vfunc_set_schema_full(column_schemas: string[]): void;
        /**
         * Set a tag on a row in a model. This function is guaranteed to be O(1).
         * See also dee_model_register_tag().
         *
         * If `tag` is already set on this row the existing tag value will be destroyed
         * with the #GDestroyNotify passed to the dee_model_register_tag().
         * @param iter The row to set the tag on
         * @param tag The tag handle for the tag as obtained from dee_model_register_tag()
         * @param value The value to set for @tag. Note that %NULL represents an unset tag
         */
        vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: any | null): void;
        /**
         * Sets the data in `column` for the row `iter` points to, to `value`. The type
         * of `value` must be convertible to the type of the column.
         *
         * When this method call completes the model will emit ::row-changed. You can
         * edit the model in place without triggering the change signals by calling
         * dee_model_set_value_silently().
         * @param iter a #DeeModelIter
         * @param column column number to set the value
         * @param value New value for cell. If @value is a floating reference the model         will assume ownership of the variant
         */
        vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void;
    }

    interface ResourceManager {
        // Owm methods of Dee-1.0.ResourceManager

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
         * @returns A newly allocated #GObject in case of success               and %NULL otherwise. In case of a runtime error the @error               pointer will be set.
         */
        load<T = GObject.Object>(resource_name: string): T;
        /**
         * Store a resource under a given name. The resource manager must guarantee
         * that the stored data survives system reboots and that you can recreate a
         * copy of `resource` by calling dee_resource_manager_load() using the
         * same `resource_name`.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource A #DeeSerializable to store under @resource_name
         * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
         * @returns %TRUE on success and %FALSE otherwise. In case of a runtime               error the @error pointer will point to a #GError in the               #DeeResourceError domain.
         */
        store(resource: Serializable, resource_name: string): boolean;

        // Own virtual methods of Dee-1.0.ResourceManager

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
        vfunc_load<T = GObject.Object>(resource_name: string): T;
        /**
         * Store a resource under a given name. The resource manager must guarantee
         * that the stored data survives system reboots and that you can recreate a
         * copy of `resource` by calling dee_resource_manager_load() using the
         * same `resource_name`.
         *
         * Important note: This call may do blocking IO. The resource manager must
         * guarantee that this call is reasonably fast, like writing the externalized
         * resource to a file, but not blocking IO over a network socket.
         * @param resource A #DeeSerializable to store under @resource_name
         * @param resource_name The name to store the resource under. Will overwrite any                 existing resource with the same name
         */
        vfunc_store(resource: Serializable, resource_name: string): boolean;
    }

    interface ResultSet {
        // Owm methods of Dee-1.0.ResultSet

        /**
         * Get the model associated with a result set
         * @returns The model that the rows point into
         */
        get_model(): Model;
        /**
         * Get the number of #DeeModelIter<!-- -->s held in a #DeeResultSet.
         * @returns The number of rows held in the result set
         */
        get_n_rows(): number;
        /**
         * Check if a call to dee_result_set_next() will succeed.
         * @returns %TRUE if and only if more rows can be retrieved by calling          dee_result_set_next()
         */
        has_next(): boolean;
        /**
         * Get the current row from the result set and advance the cursor.
         * To ensure that calls to this method will succeed you can call
         * dee_result_set_has_next().
         *
         * To retrieve the current row without advancing the cursor call
         * dee_result_set_peek() in stead of this method.
         * @returns The #DeeModelIter at the current cursor position
         */
        next(): ModelIter;
        /**
         * Get the row at the current cursor position.
         *
         * To retrieve the current row and advance the cursor position call
         * dee_result_set_next() in stead of this method.
         * @returns The #DeeModelIter at the current cursor position
         */
        peek(): ModelIter;
        /**
         * Set the cursor position. Following calls to dee_result_set_peek()
         * or dee_result_set_next() will read the row at position `pos`.
         * @param pos The position to seek to
         */
        seek(pos: number): void;
        /**
         * Get the current position of the cursor.
         * @returns The current position of the cursor
         */
        tell(): number;

        // Own virtual methods of Dee-1.0.ResultSet

        /**
         * Get the model associated with a result set
         */
        vfunc_get_model(): Model;
        /**
         * Get the number of #DeeModelIter<!-- -->s held in a #DeeResultSet.
         */
        vfunc_get_n_rows(): number;
        /**
         * Check if a call to dee_result_set_next() will succeed.
         */
        vfunc_has_next(): boolean;
        /**
         * Get the current row from the result set and advance the cursor.
         * To ensure that calls to this method will succeed you can call
         * dee_result_set_has_next().
         *
         * To retrieve the current row without advancing the cursor call
         * dee_result_set_peek() in stead of this method.
         */
        vfunc_next(): ModelIter;
        /**
         * Get the row at the current cursor position.
         *
         * To retrieve the current row and advance the cursor position call
         * dee_result_set_next() in stead of this method.
         */
        vfunc_peek(): ModelIter;
        /**
         * Set the cursor position. Following calls to dee_result_set_peek()
         * or dee_result_set_next() will read the row at position `pos`.
         * @param pos The position to seek to
         */
        vfunc_seek(pos: number): void;
        /**
         * Get the current position of the cursor.
         */
        vfunc_tell(): number;
    }

    interface Serializable {
        // Owm methods of Dee-1.0.Serializable

        /**
         * Build an externalized form of `self` which can be used together with
         * dee_serializable_parse_external() to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * dee_serializable_serialize(). Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a #GVariant with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         * @returns A reference to a #GVariant with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               g_variant_unref().
         */
        serialize(): GLib.Variant;

        // Own virtual methods of Dee-1.0.Serializable

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         */
        vfunc_serialize(): GLib.Variant;
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

export default Dee;
// END
