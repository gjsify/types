/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Grl-0.1
 */

export namespace Grl {
    /**
     * These constants identify all the available core errors
     */
    enum CoreError {
        BROWSE_FAILED,
        SEARCH_FAILED,
        SEARCH_NULL_UNSUPPORTED,
        QUERY_FAILED,
        METADATA_FAILED,
        RESOLVE_FAILED,
        MEDIA_NOT_FOUND,
        STORE_FAILED,
        REMOVE_FAILED,
        SET_METADATA_FAILED,
        MEDIA_FROM_URI_FAILED,
        CONFIG_LOAD_FAILED,
        CONFIG_FAILED,
        UNREGISTER_SOURCE_FAILED,
        LOAD_PLUGIN_FAILED,
        UNLOAD_PLUGIN_FAILED,
        REGISTER_METADATA_KEY_FAILED,
        NOTIFY_CHANGED_FAILED,
        OPERATION_CANCELLED,
    }
    /**
     * Grilo log levels. Defines the level of verbosity selected in Grilo.
     */
    enum LogLevel {
        NONE,
        ERROR,
        WARNING,
        MESSAGE,
        INFO,
        DEBUG,
        LAST,
    }
    /**
     * GrlMedia serialize type
     */
    enum MediaSerializeType {
        BASIC,
        PARTIAL,
        FULL,
    }
    /**
     * Specifies which kind of change has happened in the plugin
     */
    enum MediaSourceChangeType {
        CHANGED,
        ADDED,
        REMOVED,
    }
    /**
     * Module priority ranks. Defines the order in which the resolver
     * (or similar rank-picking mechanisms) will choose this plugin
     * over an alternative one with the same function.
     *
     * These constants serve as a rough guidance for defining the rank
     * of a GrlPluginInfo. Any value is valid, including values bigger
     * than GRL_PLUGIN_RANK_HIGHEST.
     */
    enum PluginRank {
        LOWEST,
        LOW,
        DEFAULT,
        HIGH,
        HIGHEST,
    }
    const CONFIG_KEY_APIKEY: string;
    const CONFIG_KEY_APIKEY_BLOB: string;
    const CONFIG_KEY_APISECRET: string;
    const CONFIG_KEY_APITOKEN: string;
    const CONFIG_KEY_PASSWORD: string;
    const CONFIG_KEY_PLUGIN: string;
    const CONFIG_KEY_SOURCE: string;
    const CONFIG_KEY_USERNAME: string;
    const KEYID_FORMAT: string;
    const MEDIA_PLUGIN_AUTHOR: string;
    const MEDIA_PLUGIN_DESCRIPTION: string;
    const MEDIA_PLUGIN_LICENSE: string;
    const MEDIA_PLUGIN_NAME: string;
    const MEDIA_PLUGIN_SITE: string;
    const MEDIA_PLUGIN_VERSION: string;
    const METADATA_KEY_CHILDCOUNT_UNKNOWN: number;
    const PADDING: number;
    const PADDING_SMALL: number;
    const PLUGIN_LIST_VAR: string;
    const PLUGIN_PATH_VAR: string;
    const PLUGIN_RANKS_VAR: string;
    const SOURCE_REMAINING_UNKNOWN: number;
    /**
     * Initializes the Grilo library
     * @param argv list of arguments
     */
    function init(argv?: string[] | null): string[] | null;
    /**
     * Configure a set of log domains. The default configuration is to display
     * warning and error messages only for all the log domains.
     *
     * The configuration string follows the following grammar:
     *
     *
     * ```
     * config-list: config | config ',' config-list
     * config: domain ':' level
     * domain: '*' | [a-zA-Z0-9]+
     * level: '*' | '-' | named-level | num-level
     * named-level: "none" | "error" | "warning" | "message" | "info" | "debug"
     * num-level: [0-5]
     * ```
     *
     *
     * examples:
     * <itemizedlist>
     * <listitem><para>"*:*": maximum verbosity for all the log domains</para>
     * </listitem>
     * <listitem><para>"*:-": don't print any message</para></listitem>
     * <listitem><para>"media-source:debug,metadata-source:debug": prints debug,
     * info, message warning and error messages for the media-source and
     * metadata-source log domains</para></listitem>
     * </itemizedlist>
     *
     * <note>It's possible to override the log configuration at runtime by
     * defining the GRL_DEBUG environment variable to a configuration string
     * as described above</note>
     * @param config A string describing the wanted log configuration
     */
    function log_configure(config: string): void;
    function marshal_VOID__BOXED_ENUM_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any,
        marshal_data: any,
    ): void;
    /**
     * Retrieves the description associated with the key
     * @param key key to look up
     * @returns the description of the key
     */
    function metadata_key_get_desc(key: GObject.ParamSpec): string;
    /**
     * Retrieves the name associated with the key
     * @param key key to look up
     * @returns The name of the key
     */
    function metadata_key_get_name(key: GObject.ParamSpec): string;
    function metadata_key_setup_system_keys(registry: PluginRegistry): void;
    /**
     * Cancel a running multiple search by issuing a cancel operation on each
     * source involved involved in the operation.
     * @param search_id the identifier of the multiple operation to cancel
     */
    function multiple_cancel(search_id: number): void;
    /**
     * Goes though all available media sources until it finds one capable of
     * constructing a GrlMedia object representing the media resource exposed
     * by `uri`.
     *
     * This method is asynchronous.
     * @param uri A URI that can be used to identify a media resource
     * @param keys List of metadata keys we want to obtain.
     * @param flags the operation flags
     * @param callback the user defined callback
     */
    function multiple_get_media_from_uri(
        uri: string,
        keys: KeyID[],
        flags: MetadataResolutionFlags,
        callback: MediaSourceMetadataCb,
    ): void;
    /**
     * Search for `text` in all the sources specified in `sources`.
     *
     * If `text` is `NULL` then NULL-text searchs will be used for each searchable
     * plugin (see #grl_media_source_search for more details).
     *
     * This method is asynchronous.
     * @param sources a #GList of #GrlMediaSource<!-- -->s to search from (%NULL for all searchable sources)
     * @param text the text to search for
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param count the maximum number of elements to retrieve
     * @param flags the operation flags
     * @param callback the user defined callback
     * @returns the operation identifier
     */
    function multiple_search(
        sources: MediaSource[],
        text: string,
        keys: GObject.ParamSpec[],
        count: number,
        flags: MetadataResolutionFlags,
        callback: MediaSourceResultCb,
    ): number;
    /**
     * Search for `text` in all the sources specified in `sources`.
     *
     * This method is synchronous.
     * @param sources a #GList of #GrlMediaSource<!-- -->s where to search from (%NULL for all available sources with search capability)
     * @param text the text to search for
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param count the maximum number of elements to retrieve
     * @param flags the operation flags
     * @returns a list with #GrlMedia elements
     */
    function multiple_search_sync(
        sources: MediaSource[],
        text: string,
        keys: GObject.ParamSpec[],
        count: number,
        flags: MetadataResolutionFlags,
    ): Media[];
    /**
     * Cancel an operation.
     * @param operation_id the identifier of a running operation
     */
    function operation_cancel(operation_id: number): void;
    /**
     * Obtains the previously attached data
     * @param operation_id the identifier of a running operation
     * @returns The previously attached data.
     */
    function operation_get_data(operation_id: number): any;
    /**
     * Attach a pointer to the specific operation.
     * @param operation_id the identifier of a running operation
     * @param user_data the data to attach
     */
    function operation_set_data(operation_id: number, user_data: any): void;
    /**
     * Grilo browsing implements a paging mechanism through `skip` and `count` values.
     *
     * But there are some services (like Jamendo or Flickr) where paging is done
     * through a page number and page size: user request all elements in a page,
     * specifying in most cases what is the page size.
     *
     * This function is a helper for this task, computing from `skip` and `count` what
     * is the optimal value of page size (limited by `max_page_size)`, which page
     * should the user request, and where requested data start inside the page.
     *
     * By optimal we mean that it computes those values so only one page is required
     * to satisfy the data, using the smallest page size. If user is limiting page
     * size, then more requests to services might be needed. But still page size
     * will be an optimal value.
     * @param skip number of elements to skip
     * @param count number of elements to retrieve
     * @param max_page_size maximum value for page size
     * @param page_size optimal page size
     * @param page_number page which contain the first element to retrieve (starting at 1)
     * @param internal_offset in the @page_number, offset where first element can be found (starting at 0)
     */
    function paging_translate(
        skip: number,
        count: number,
        max_page_size: number,
        page_size: number,
        page_number: number,
        internal_offset: number,
    ): void;
    interface MediaSourceMetadataCb {
        (source: MediaSource, operation_id: number, media: Media, error: number): void;
    }
    interface MediaSourceRemoveCb {
        (source: MediaSource, media: Media, error: number): void;
    }
    interface MediaSourceResultCb {
        (source: MediaSource, operation_id: number, media: Media, remaining: number, error: number): void;
    }
    interface MediaSourceStoreCb {
        (source: MediaSource, parent: MediaBox, media: Media, error: number): void;
    }
    interface MetadataSourceResolveCb {
        (source: MetadataSource, operation_id: number, media: Media, error: number): void;
    }
    interface MetadataSourceSetMetadataCb {
        (source: MetadataSource, media: Media, failed_keys: GObject.ParamSpec[], error: number): void;
    }
    /**
     * GrlMetadata resolution flags
     */
    enum MetadataResolutionFlags {
        NORMAL,
        FULL,
        IDLE_RELAY,
        FAST_ONLY,
    }
    /**
     * Flags for metadata writing operations.
     */
    enum MetadataWritingFlags {
        NORMAL,
        FULL,
    }
    /**
     * Bitwise flags which reflect the kind of operations that a
     * #GrlMediaPlugin supports.
     */
    enum SupportedOps {
        NONE,
        METADATA,
        RESOLVE,
        BROWSE,
        SEARCH,
        QUERY,
        STORE,
        STORE_PARENT,
        REMOVE,
        SET_METADATA,
        MEDIA_FROM_URI,
        NOTIFY_CHANGE,
    }
    module Config {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Config extends GObject.Object {
        static $gtype: GObject.GType<Config>;

        // Constructors of Grl.Config

        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](plugin: string, source: string): Config;

        // Own methods of Grl.Config

        get_api_key(): string;
        get_api_key_blob(size: number): number;
        get_api_secret(): string;
        get_api_token(): string;
        get_binary(param: string, size: number): number;
        get_boolean(param: string): boolean;
        get_float(param: string): number;
        get_int(param: string): number;
        get_password(): string;
        get_plugin(): string;
        get_string(param: string): string;
        get_username(): string;
        /**
         * otherwise.
         * @param param the param
         * @returns TRUE if @params has a defined value within @config, FALSE
         */
        has_param(param: string): boolean;
        set(param: string, value: GObject.Value | any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Set the webservice API key in the configuration
         * @param key the API key
         */
        set_api_key(key: string): void;
        /**
         * Set the binary API key in the configuration
         * @param blob the binary API key blob
         * @param size the size of the blob
         */
        set_api_key_blob(blob: number, size: number): void;
        /**
         * Set the webservice passphrase in the configuration
         * @param secret the webservice passphrase
         */
        set_api_secret(secret: string): void;
        /**
         * Set the webservice API token in the configuration
         * @param token the API token
         */
        set_api_token(token: string): void;
        set_binary(param: string, blob: number, size: number): void;
        set_boolean(param: string, value: boolean): void;
        set_float(param: string, value: number): void;
        set_int(param: string, value: number): void;
        /**
         * Set the password in the configuration
         * @param password the password
         */
        set_password(password: string): void;
        /**
         * Set the plugin key in the configuration
         * @param plugin the plugin id
         */
        set_plugin(plugin: string): void;
        /**
         * Set the plugin key in the configuration
         * @param source the source id
         */
        set_source(source: string): void;
        set_string(param: string, value: string): void;
        /**
         * Set the username in the configuration
         * @param username the username
         */
        set_username(username: string): void;
    }

    module Data {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            overwrite: boolean;
        }
    }

    class Data extends GObject.Object {
        static $gtype: GObject.GType<Data>;

        // Own properties of Grl.Data

        get overwrite(): boolean;
        set overwrite(val: boolean);

        // Constructors of Grl.Data

        constructor(properties?: Partial<Data.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Data;

        // Own methods of Grl.Data

        /**
         * Adds a new `key` to `data,` with no value. If key already exists, it does
         * nothing.
         * @param key key to add
         */
        add(key: GObject.ParamSpec): void;
        /**
         * Appends a new binary value for `key` in `data`.
         * @param key key to append
         * @param buf the buffer containing the new value
         * @param size size of buffer
         */
        add_binary(key: GObject.ParamSpec, buf: number, size: number): void;
        /**
         * Appends a new float value for `key` in `data`.
         * @param key key to append
         * @param floatvalue the new value
         */
        add_float(key: GObject.ParamSpec, floatvalue: number): void;
        /**
         * Appends a new int value for `key` in `data`.
         * @param key key to append
         * @param intvalue the new value
         */
        add_int(key: GObject.ParamSpec, intvalue: number): void;
        /**
         * Adds a new set of values into `data`.
         *
         * All keys in `prop` must be related among them.
         *
         * `data` will take the ownership of `relkeys,` so do not modify it.
         * @param relkeys a set of related properties with their values
         */
        add_related_keys(relkeys: RelatedKeys): void;
        /**
         * Appends a new string value for `key` in `data`.
         * @param key key to append
         * @param strvalue the new value
         */
        add_string(key: GObject.ParamSpec, strvalue: string): void;
        /**
         * Makes a deep copy of `data` and all its contents.
         * @returns a new #GrlData. Free it with #g_object_unref.
         */
        dup(): Data;
        /**
         * Get the first value from `data` associated with `key`.
         *
         * freed by user.
         * @param key key to look up.
         * @returns a #GValue. This value should not be modified nor
         */
        get(key: GObject.ParamSpec): unknown;
        /**
         * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
         *
         * values. Do not change or free the values. Free the list with #g_list_free.
         * @param key a metadata key
         * @returns a #GList with
         */
        get_all_single_related_keys(key: KeyID): unknown[];
        /**
         * Returns all non-%NULL values for `key` from `data`. `key` must have been
         * registered as a string-type key. This ignores related keys.
         *
         * not change or free the strings. Free the list with #g_list_free.
         * @param key a metadata key
         * @returns a #GList with values. Do
         */
        get_all_single_related_keys_string(key: KeyID): string[];
        /**
         * Returns the first binary value associated with `key` from `data`. If `key` has
         * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
         * is returned.
         *
         * successful `size` will be set the to the buffer size.
         * @param key key to use
         * @returns buffer location associated with the @key, or %NULL in other case. If
         */
        get_binary(key: GObject.ParamSpec): [number, number];
        /**
         * Returns the first float value associated with `key` from `data`. If `key` has no
         * first value, or value is not a gfloat, or `key` is not in data, then 0 is
         * returned.
         * @param key key to use
         * @returns float value associated with @key, or 0 in other case.
         */
        get_float(key: GObject.ParamSpec): number;
        /**
         * Returns the first int value associated with `key` from `data`. If `key` has no
         * first value, or value is not a gint, or `key` is not in data, then 0 is
         * returned.
         * @param key key to use
         * @returns int value associated with @key, or 0 in other case.
         */
        get_int(key: GObject.ParamSpec): number;
        /**
         * Returns a list with keys contained in `data`.
         *
         * keys. The content of the list should not be modified or freed. Use
         * g_list_free() when done using the list.
         * @returns an array with the
         */
        get_keys(): GObject.ParamSpec[];
        /**
         * Checks if old values are replaced when calling #grl_data_set.
         * @returns %TRUE if values will be overwritten.
         */
        get_overwrite(): boolean;
        /**
         * Returns a set containing the values for `key` and related keys at position
         * `index` from `data`.
         *
         * If user changes any of the values in the related keys, the changes will
         * become permanent.
         * @param key a metadata key
         * @param index element to retrieve, starting at 0
         * @returns a #GrlRelatedKeys. Do not free it.
         */
        get_related_keys(key: KeyID, index: number): RelatedKeys;
        /**
         * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
         *
         * values. Do not change or free the values. Free the list with #g_list_free.
         * @param key a metadata key
         * @returns a #GList with
         */
        get_single_values_for_key(key: KeyID): unknown[];
        /**
         * Returns all non-%NULL values for `key` from `data`. `key` must have been
         * registered as a string-type key. This ignores related keys.
         *
         * not change or free the strings. Free the list with #g_list_free.
         * @param key a metadata key
         * @returns a #GList with values. Do
         */
        get_single_values_for_key_string(key: KeyID): string[];
        /**
         * Returns the first string value associated with `key` from `data`. If `key` has
         * no first value, or value is not string, or `key` is not in `data,` then %NULL
         * is returned.
         *
         * not change nor free the value.
         * @param key key to use
         * @returns string associated with @key, or %NULL in other case. Caller should
         */
        get_string(key: GObject.ParamSpec): string;
        /**
         * Checks if `key` is in `data`.
         * @param key key to search
         * @returns %TRUE if @key is in @data, %FALSE in other case.
         */
        has_key(key: GObject.ParamSpec): boolean;
        /**
         * Checks if the `key` has a first value in `data`.
         * @param key key to search
         * @returns %TRUE if key has a value.
         */
        key_is_known(key: GObject.ParamSpec): boolean;
        /**
         * Returns how many values `key` or related keys have in `data:` if `key` has no
         * value, but a related key has, then it is counted as positive.
         *
         * As example, let's think in three related keys, K1, K2 and K3, and then thinks
         * we have added several values for those keys, as:
         *
         * (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
         *
         * Therefore, when invoking grl_data_length (data, K2) it will return 3:
         * considering K2 and the related keys (K1 and K3), there are 3 values.
         * @param key a metadata key
         * @returns number of values
         */
        length(key: KeyID): number;
        /**
         * Removes the first value for `key` from `data`. If there are other keys related
         * to `key` their values will also be removed from `data`.
         * @param key key to remove
         */
        remove(key: GObject.ParamSpec): void;
        /**
         * Removes the value at position `index` for `key` from `data`. If there are other
         * keys related to `key,` their values at position `index` will also be removed
         * from `data`.
         * @param key a metadata key
         * @param index index of key to be removed, starting at 0
         */
        remove_nth(key: KeyID, index: number): void;
        /**
         * Sets the first value associated with `key` in `data`. If key already has a
         * value old value is freed and the new one is set.
         *
         * Also, checks that `value` is compliant with `key` specification, modifying it
         * accordingly. For instance, if `key` requires a number between 0 and 10, but
         * `value` is outside this range, it will be adapted accordingly.
         * @param key key to change or add
         * @param value the new value
         */
        set(key: GObject.ParamSpec, value: GObject.Value | any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Sets the first binary value associated with `key` in `data`. If `key` already
         * has a first value old value is replaced by the new one.
         * @param key key to change or add
         * @param buf buffer holding the data
         * @param size size of the buffer
         */
        set_binary(key: GObject.ParamSpec, buf: number, size: number): void;
        /**
         * Sets the first float value associated with `key` in `data`. If `key` already has
         * a first value old value is replaced by the new one.
         * @param key key to change or add
         * @param floatvalue the new value
         */
        set_float(key: GObject.ParamSpec, floatvalue: number): void;
        /**
         * Sets the first int value associated with `key` in `data`. If `key` already has a
         * first value old value is replaced by the new one.
         * @param key key to change or add
         * @param intvalue the new value
         */
        set_int(key: GObject.ParamSpec, intvalue: number): void;
        /**
         * This controls if #grl_data_set will overwrite the current value of a property
         * with the new one.
         *
         * Set it to %TRUE so old values are overwritten, or %FALSE in other case
         * (default is %FALSE).
         * @param overwrite if data can be overwritten
         */
        set_overwrite(overwrite: boolean): void;
        /**
         * Updates the values at position `index` in `data` with values in `relkeys`.
         *
         * `data` will take ownership of `relkeys,` so do not free it after invoking this
         * function.
         * @param relkeys a set of related keys
         * @param index position to be updated, starting at 0
         */
        set_related_keys(relkeys: RelatedKeys, index: number): void;
        /**
         * Sets the first string value associated with `key` in `data`. If `key` already
         * has a value old value is freed and the new one is set.
         * @param key key to change or add
         * @param strvalue the new value
         */
        set_string(key: GObject.ParamSpec, strvalue: string): void;
    }

    module Media {
        // Constructor properties interface

        interface ConstructorProps extends Data.ConstructorProps {}
    }

    class Media extends Data {
        static $gtype: GObject.GType<Media>;

        // Constructors of Grl.Media

        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Media;

        // Own static methods of Grl.Media

        /**
         * Unserializes a GrlMedia.
         * @param serial a serialized media
         */
        static unserialize(serial: string): Media;

        // Own methods of Grl.Media

        /**
         * Adds a new author to `media`.
         * @param author an author for @media
         */
        add_author(author: string): void;
        /**
         * Adds a new external player to `media`.
         * @param player an external player for @media
         */
        add_external_player(player: string): void;
        /**
         * Adds a new external url to `media`.
         * @param url an external url for @media
         */
        add_external_url(url: string): void;
        /**
         * Adds a new thumbnail to `media`.
         * @param thumbnail a thumbnail for @media
         */
        add_thumbnail(thumbnail: string): void;
        /**
         * Adds a new thumbnail to `media`.
         * @param thumbnail a buffer containing the thumbnail for @media
         * @param size size of buffer
         */
        add_thumbnail_binary(thumbnail: number, size: number): void;
        /**
         * Adds a new media's URL with its mime-type.
         * @param url a media's URL
         * @param mime th @url mime type
         */
        add_url_data(url: string, mime: string): void;
        get_author(): string;
        get_author_nth(index: number): string;
        get_certificate(): string;
        get_creation_date(): string;
        get_date(): string;
        get_description(): string;
        get_duration(): number;
        /**
         * where the user play the media.
         * @returns URL of an external location
         */
        get_external_url(): string;
        get_external_url_nth(index: number): string;
        get_id(): string;
        get_last_played(): string;
        get_last_position(): number;
        get_license(): string;
        get_mime(): string;
        get_play_count(): number;
        /**
         * object for this media
         * @returns URL of an external player
         */
        get_player(): string;
        get_player_nth(index: number): string;
        get_rating(): number;
        get_site(): string;
        get_source(): string;
        get_studio(): string;
        get_thumbnail(): string;
        get_thumbnail_binary(size: number): number;
        /**
         * buffer size.
         * @param size pointer to store the thumbnail buffer size
         * @param index element to retrieve
         * @returns the n-th media's thumbnail binary and sets size to the thumbnail
         */
        get_thumbnail_binary_nth(size: number, index: number): number;
        get_thumbnail_nth(index: number): string;
        get_title(): string;
        get_url(): string;
        get_url_data(): [string, string];
        get_url_data_nth(index: number): [string, string];
        /**
         * Serializes a GrlMedia into a string. It does a basic serialization.
         *
         * See grl_media_serialize_extended() to get more serialization approaches.
         * @returns serialized media
         */
        serialize(): string;
        /**
         * Set the media's author
         * @param author the media's author
         */
        set_author(author: string): void;
        /**
         * Set the media certificate
         * @param certificate The rating certificate of the media
         */
        set_certificate(certificate: string): void;
        /**
         * Set the creation_date of the media
         * @param creation_date date when media was created
         */
        set_creation_date(creation_date: string): void;
        /**
         * Set the media's date (TBD)
         * @param date the date
         */
        set_date(date: string): void;
        /**
         * Set the media's description
         * @param description the description
         */
        set_description(description: string): void;
        /**
         * Set the media's duration
         * @param duration the duration
         */
        set_duration(duration: number): void;
        /**
         * Set the location of a player for the media (usually a flash player)
         * @param player location of an external player for this media
         */
        set_external_player(player: string): void;
        /**
         * Set an external location where users can play the media
         * @param url external location where this media can be played.
         */
        set_external_url(url: string): void;
        /**
         * Set the media identifier
         * @param id the identifier of the media
         */
        set_id(id: string): void;
        /**
         * Set the media last played date
         * @param last_played date when the media was last played
         */
        set_last_played(last_played: string): void;
        /**
         * Set the media last played position
         * @param last_position second at which the media playback was interrupted
         */
        set_last_position(last_position: number): void;
        /**
         * Set the media license
         * @param license The license of the media
         */
        set_license(license: string): void;
        /**
         * Set the media's mime-type
         * @param mime the mime type
         */
        set_mime(mime: string): void;
        /**
         * Set the media play count
         * @param play_count the play count
         */
        set_play_count(play_count: number): void;
        /**
         * This method receives a rating and its scale and normalizes it
         * @param rating a rating value
         * @param max maximum rating value
         */
        set_rating(rating: number, max: number): void;
        /**
         * Set the media's site
         * @param site the site
         */
        set_site(site: string): void;
        /**
         * Set the media's source
         * @param source the source
         */
        set_source(source: string): void;
        /**
         * Set the media studio
         * @param studio The studio the media is from
         */
        set_studio(studio: string): void;
        /**
         * Set the media's thumbnail URL
         * @param thumbnail the thumbnail URL
         */
        set_thumbnail(thumbnail: string): void;
        /**
         * Set the media's binary thumbnail
         * @param thumbnail thumbnail buffer
         * @param size thumbnail buffer size
         */
        set_thumbnail_binary(thumbnail: number, size: number): void;
        /**
         * Set the media's title
         * @param title the title
         */
        set_title(title: string): void;
        /**
         * Set the media's URL
         * @param url the media's URL
         */
        set_url(url: string): void;
        /**
         * Set the media's URL and its mime-type.
         * @param url the media's URL
         * @param mime the @url mime type
         */
        set_url_data(url: string, mime: string): void;
    }

    module MediaAudio {
        // Constructor properties interface

        interface ConstructorProps extends Media.ConstructorProps {}
    }

    class MediaAudio extends Media {
        static $gtype: GObject.GType<MediaAudio>;

        // Constructors of Grl.MediaAudio

        constructor(properties?: Partial<MediaAudio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaAudio;

        // Own methods of Grl.MediaAudio

        /**
         * Adds a new artist to `audio`.
         * @param artist an audio's artist
         */
        add_artist(artist: string): void;
        /**
         * Adds a new genre to `audio`.
         * @param genre an audio's genre
         */
        add_genre(genre: string): void;
        /**
         * Adds a new lyrics to `audio`.
         * @param lyrics an audio's lyrics
         */
        add_lyrics(lyrics: string): void;
        /**
         * Sets all the keys related with the URL of a media resource and adds it to
         * `audio` (useful for resources with more than one URL).
         * @param url an audio's url
         * @param mime the @url mime-type
         * @param bitrate the @url bitrate, or -1 to ignore
         */
        add_url_data(url: string, mime: string, bitrate: number): void;
        // Conflicted with Grl.Media.add_url_data
        add_url_data(...args: never[]): any;
        get_album(): string;
        get_artist(): string;
        get_artist_nth(index: number): string;
        get_bitrate(): number;
        get_genre(): string;
        get_genre_nth(index: number): string;
        get_lyrics(): string;
        get_lyrics_nth(index: number): string;
        get_track_number(): number;
        get_url_data(): [string, string, number];
        // Conflicted with Grl.Media.get_url_data
        get_url_data(...args: never[]): any;
        /**
         * in one go.
         * @param index element to retrieve, starting at 0
         * @returns all the keys related with the URL number @index of an audio resource
         */
        get_url_data_nth(index: number): [string, string, number];
        // Conflicted with Grl.Media.get_url_data_nth
        get_url_data_nth(...args: never[]): any;
        /**
         * Set the album of the audio
         * @param album the audio's album
         */
        set_album(album: string): void;
        /**
         * Set the artist of the audio
         * @param artist the audio's artist
         */
        set_artist(artist: string): void;
        /**
         * Set the bitrate of the audio
         * @param bitrate the audio's bitrate
         */
        set_bitrate(bitrate: number): void;
        /**
         * Set the genre of the audio
         * @param genre the audio's genre
         */
        set_genre(genre: string): void;
        /**
         * Set the lyrics of the audio
         * @param lyrics the audio's lyrics
         */
        set_lyrics(lyrics: string): void;
        /**
         * Set the track number of the audio
         * @param track_number the audio's track number
         */
        set_track_number(track_number: number): void;
        /**
         * Sets all the keys related with the URL of an audio resource in one go.
         * @param url the audio's url
         * @param mime the @url mime-type
         * @param bitrate the @url bitrate, or -1 to ignore
         */
        set_url_data(url: string, mime: string, bitrate: number): void;
        // Conflicted with Grl.Media.set_url_data
        set_url_data(...args: never[]): any;
    }

    module MediaBox {
        // Constructor properties interface

        interface ConstructorProps extends Media.ConstructorProps {}
    }

    class MediaBox extends Media {
        static $gtype: GObject.GType<MediaBox>;

        // Constructors of Grl.MediaBox

        constructor(properties?: Partial<MediaBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaBox;

        // Own methods of Grl.MediaBox

        /**
         * Number of children of this box.
         *
         * unknown.
         * @returns number of children, or #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if
         */
        get_childcount(): number;
        /**
         * Sets the number of children of this box. Use
         * #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if it is unknown.
         * @param childcount number of children
         */
        set_childcount(childcount: number): void;
    }

    module MediaImage {
        // Constructor properties interface

        interface ConstructorProps extends Media.ConstructorProps {}
    }

    class MediaImage extends Media {
        static $gtype: GObject.GType<MediaImage>;

        // Constructors of Grl.MediaImage

        constructor(properties?: Partial<MediaImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaImage;

        // Own methods of Grl.MediaImage

        /**
         * Sets all the keys related with the URL of a media resource and adds it to
         * `image` (useful for resources with more than one URL).
         * @param url a image's url
         * @param mime image mime-type
         * @param width image width, or -1 to ignore
         * @param height image height, or -1 to ignore
         */
        add_url_data(url: string, mime: string, width: number, height: number): void;
        // Conflicted with Grl.Media.add_url_data
        add_url_data(...args: never[]): any;
        get_camera_model(): string;
        get_exposure_time(): number;
        /**
         * See
         * http://library.gnome.org/devel/ontology/unstable/nmm-classes.html#nmm-Flash
         * @returns whether the flash was used
         */
        get_flash_used(): string;
        get_height(): number;
        get_iso_speed(): number;
        get_orientation(): number;
        get_url_data(width: number, height: number): [string, string];
        // Conflicted with Grl.Media.get_url_data
        get_url_data(...args: never[]): any;
        /**
         * in one go.
         * @param index element to retrieve
         * @param width the width, or %NULL to ignore
         * @param height the height, or %NULL to ignore
         * @returns all the keys related with the URL number @index of an image resource
         */
        get_url_data_nth(index: number, width: number, height: number): [string, string];
        // Conflicted with Grl.Media.get_url_data_nth
        get_url_data_nth(...args: never[]): any;
        get_width(): number;
        set_camera_model(camera_model: string): void;
        set_exposure_time(exposure_time: number): void;
        set_flash_used(flash_used: string): void;
        /**
         * Set the height of the image
         * @param height the image's height
         */
        set_height(height: number): void;
        set_iso_speed(iso_speed: number): void;
        set_orientation(orientation: number): void;
        /**
         * Set the size of the image
         * @param width the image's width
         * @param height the image's height
         */
        set_size(width: number, height: number): void;
        /**
         * Sets all the keys related with the URL of an image resource in one go.
         * @param url the image's url
         * @param mime image mime-type
         * @param width image width, or -1 to ignore
         * @param height image height, or -1 to ignore
         */
        set_url_data(url: string, mime: string, width: number, height: number): void;
        // Conflicted with Grl.Media.set_url_data
        set_url_data(...args: never[]): any;
        /**
         * Set the width of the image
         * @param width the image's width
         */
        set_width(width: number): void;
    }

    module MediaPlugin {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class MediaPlugin extends GObject.Object {
        static $gtype: GObject.GType<MediaPlugin>;

        // Constructors of Grl.MediaPlugin

        constructor(properties?: Partial<MediaPlugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Grl.MediaPlugin

        /**
         * Get the author of the plugin
         * @returns the author of the @plugin
         */
        get_author(): string;
        /**
         * Get the description of the plugin
         * @returns the description of the @plugin
         */
        get_description(): string;
        /**
         * Get the filename containing the plugin
         * @returns the filename containing @plugin
         */
        get_filename(): string;
        /**
         * Get the id of the plugin
         * @returns the id of the @plugin
         */
        get_id(): string;
        /**
         * Get the information of the `plugin` that is associated with the given key
         * @param key a key representing information about this plugin
         * @returns the information assigned to the given @key or NULL if there is no such information
         */
        get_info(key: string): string;
        /**
         * Returns a list of keys that can be queried to retrieve information about the
         * plugin.
         *
         * a #GList of strings containing the keys. The content of the list is
         * owned by the plugin and should not be modified or freed. Use g_list_free()
         * when done using the list.
         */
        get_info_keys(): string[];
        /**
         * Get the license of the plugin
         * @returns the license of the @plugin
         */
        get_license(): string;
        /**
         * Get the name of the plugin
         * @returns the name of the @plugin
         */
        get_name(): string;
        /**
         * Get the #GrlPluginRank of the plugin
         * @returns the rank of the plugin
         */
        get_rank(): number;
        /**
         * Get the site of the plugin
         * @returns the site of the @plugin
         */
        get_site(): string;
        /**
         * Get the version of the plugin
         * @returns the version of the @plugin
         */
        get_version(): string;
        set_plugin_info(info: PluginInfo): void;
    }

    module MediaSource {
        // Signal callback interfaces

        interface ContentChanged {
            (changed_medias: any[], change_type: MediaSourceChangeType, location_unknown: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MetadataSource.ConstructorProps {
            auto_split_threshold: number;
            autoSplitThreshold: number;
        }
    }

    abstract class MediaSource extends MetadataSource {
        static $gtype: GObject.GType<MediaSource>;

        // Own properties of Grl.MediaSource

        /**
         * Transparently split queries with count requests
         * bigger than a certain threshold into smaller queries.
         */
        get auto_split_threshold(): number;
        set auto_split_threshold(val: number);
        /**
         * Transparently split queries with count requests
         * bigger than a certain threshold into smaller queries.
         */
        get autoSplitThreshold(): number;
        set autoSplitThreshold(val: number);

        // Constructors of Grl.MediaSource

        constructor(properties?: Partial<MediaSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Grl.MediaSource

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'content-changed',
            callback: (
                _source: this,
                changed_medias: any[],
                change_type: MediaSourceChangeType,
                location_unknown: boolean,
            ) => void,
        ): number;
        connect_after(
            signal: 'content-changed',
            callback: (
                _source: this,
                changed_medias: any[],
                change_type: MediaSourceChangeType,
                location_unknown: boolean,
            ) => void,
        ): number;
        emit(
            signal: 'content-changed',
            changed_medias: any[],
            change_type: MediaSourceChangeType,
            location_unknown: boolean,
        ): void;

        // Own virtual methods of Grl.MediaSource

        vfunc_browse(bs: MediaSourceBrowseSpec): void;
        /**
         * Cancel a running method.
         *
         * The derived class must implement the cancel vmethod in order to honour the
         * request correctly. Otherwise, the operation will not be interrupted.
         *
         * In all cases, if this function is called on an ongoing operation, the
         * corresponding callback will be called with the
         * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
         * taken for that operation after the said callback with error has been called.
         * @param operation_id the identifier of the running operation, as returned by the function that started it
         */
        vfunc_cancel(operation_id: number): void;
        vfunc_media_from_uri(mfss: MediaSourceMediaFromUriSpec): void;
        vfunc_metadata(ms: MediaSourceMetadataSpec): void;
        /**
         * Starts emitting ::content-changed signals when `source` discovers changes in
         * the content. This instructs `source` to setup the machinery needed to be aware
         * of changes in the content.
         */
        vfunc_notify_change_start(): boolean;
        /**
         * This will drop emission of ::content-changed signals from `source`. When this
         * is done `source` should stop the machinery required for it to track changes in
         * the content.
         */
        vfunc_notify_change_stop(): boolean;
        vfunc_query(qs: MediaSourceQuerySpec): void;
        vfunc_remove(ss: MediaSourceRemoveSpec): void;
        vfunc_search(ss: MediaSourceSearchSpec): void;
        vfunc_store(ss: MediaSourceStoreSpec): void;
        /**
         * Tests whether `source` can instantiate a #GrlMedia object representing
         * the media resource exposed at `uri`.
         *
         *
         * This method is synchronous.
         * @param uri A URI that can be used to identify a media resource
         */
        vfunc_test_media_from_uri(uri: string): boolean;

        // Own methods of Grl.MediaSource

        /**
         * Browse from `skip,` a `count` number of media elements through an available list.
         *
         * This method is asynchronous.
         * @param container a container of data transfer objects
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param skip the number if elements to skip in the browse operation
         * @param count the number of elements to retrieve in the browse operation
         * @param flags the resolution mode
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        browse(
            container: Media,
            keys: GObject.ParamSpec[],
            skip: number,
            count: number,
            flags: MetadataResolutionFlags,
            callback: MediaSourceResultCb,
        ): number;
        /**
         * Browse from `skip,` a `count` number of media elements through an available
         * list.
         *
         * This method is synchronous.
         *
         * elements. After use g_object_unref() every element and g_list_free() the
         * list.
         * @param container a container of data transfer objects
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param skip the number if elements to skip in the browse operation
         * @param count the number of elements to retrieve in the browse operation
         * @param flags the resolution mode
         * @returns a #GList with #GrlMedia
         */
        browse_sync(
            container: Media,
            keys: GObject.ParamSpec[],
            skip: number,
            count: number,
            flags: MetadataResolutionFlags,
        ): Media[];
        /**
         * Cancel a running method.
         *
         * The derived class must implement the cancel vmethod in order to honour the
         * request correctly. Otherwise, the operation will not be interrupted.
         *
         * In all cases, if this function is called on an ongoing operation, the
         * corresponding callback will be called with the
         * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
         * taken for that operation after the said callback with error has been called.
         * @param operation_id the identifier of the running operation, as returned by the function that started it
         */
        cancel(operation_id: number): void;
        /**
         * TBD
         * @returns the assigned threshold
         */
        get_auto_split_threshold(): number;
        /**
         * Creates an instance of #GrlMedia representing the media resource
         * exposed at `uri`.
         *
         * It is recommended to call grl_media_source_test_media_from_uri() before
         * invoking this to check whether the target source can theoretically do the
         * resolution.
         *
         * This method is asynchronous.
         * @param uri A URI that can be used to identify a media resource
         * @param keys A list of keys to resolve
         * @param flags the resolution mode
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        get_media_from_uri(
            uri: string,
            keys: KeyID[],
            flags: MetadataResolutionFlags,
            callback: MediaSourceMetadataCb,
        ): number;
        /**
         * Creates an instance of #GrlMedia representing the media resource
         * exposed at `uri`.
         *
         * It is recommended to call grl_media_source_test_media_from_uri() before
         * invoking this to check whether the target source can theoretically do the
         * resolution.
         *
         * This method is synchronous.
         * @param uri A URI that can be used to identify a media resource
         * @param keys A list of keys to resolve
         * @param flags the resolution mode
         * @returns a filled #GrlMedia
         */
        get_media_from_uri_sync(uri: string, keys: KeyID[], flags: MetadataResolutionFlags): Media;
        /**
         * Obtains the previously attached data
         * @param operation_id the identifier of a running operation
         * @returns The previously attached data.
         */
        get_operation_data(operation_id: number): any;
        /**
         * This method is intended to fetch the requested keys of metadata of
         * a given `media` to the media source.
         *
         * This method is asynchronous.
         * @param media a data transfer object
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param flags the resolution mode
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        metadata(
            media: Media,
            keys: GObject.ParamSpec[],
            flags: MetadataResolutionFlags,
            callback: MediaSourceMetadataCb,
        ): number;
        /**
         * This method is intended to fetch the requested keys of metadata of
         * a given `media` to the media source.
         *
         * This method is synchronous.
         * @param media a data transfer object
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param flags the resolution mode
         * @returns a filled #GrlMedia
         */
        metadata_sync(media: Media, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags): Media;
        /**
         * Emits "content-changed" signal to notify subscribers that a change ocurred
         * in `source`.
         *
         * See #grl_media_source_notify_change_list() function.
         *
         * <note>
         * <para>
         * This function is intended to be used only by plugins.
         * </para>
         * </note>
         * @param media the media which has changed, or @NULL to use the root box.
         * @param change_type the type of change
         * @param location_unknown if change has happened in @media or any descendant
         */
        notify_change(media: Media, change_type: MediaSourceChangeType, location_unknown: boolean): void;
        /**
         * Emits "content-changed" signal to notify subscribers that a change ocurred
         * in `source`.
         *
         * The function will take ownership of `changed` medias and it should not be
         * manipulated in any way by the caller after invoking this function. If that is
         * needed, the caller must ref the array in advance.
         *
         * See GrlMediaSource::content-changed signal.
         *
         * <note>
         * <para>
         * This function is intended to be used only by plugins.
         * </para>
         * </note>
         * @param changed_medias : the list of medias that have changed
         * @param change_type the type of change
         * @param location_unknown if change has happpened in @media or any descendant
         */
        notify_change_list(
            changed_medias: Media[],
            change_type: MediaSourceChangeType,
            location_unknown: boolean,
        ): void;
        /**
         * Starts emitting ::content-changed signals when `source` discovers changes in
         * the content. This instructs `source` to setup the machinery needed to be aware
         * of changes in the content.
         * @returns @TRUE if initialization has succeed.
         */
        notify_change_start(): boolean;
        /**
         * This will drop emission of ::content-changed signals from `source`. When this
         * is done `source` should stop the machinery required for it to track changes in
         * the content.
         * @returns @TRUE if stop has succeed.
         */
        notify_change_stop(): boolean;
        /**
         * Execute a specialized query (specific for each provider) on a media
         * repository.
         *
         * It is different from grl_media_source_search() semantically, because
         * the query implies a carefully crafted string, rather than a simple
         * string to search.
         *
         * This method is asynchronous.
         * @param query the query to process
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param skip the number if elements to skip in the query operation
         * @param count the number of elements to retrieve in the query operation
         * @param flags the resolution mode
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        query(
            query: string,
            keys: GObject.ParamSpec[],
            skip: number,
            count: number,
            flags: MetadataResolutionFlags,
            callback: MediaSourceResultCb,
        ): number;
        /**
         * Execute a specialized query (specific for each provider) on a media
         * repository.
         *
         * This method is synchronous.
         *
         * elements. After use g_object_unref() every element and g_list_free() the
         * list.
         * @param query the query to process
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param skip the number if elements to skip in the query operation
         * @param count the number of elements to retrieve in the query operation
         * @param flags the resolution mode
         * @returns a #GList with #GrlMedia
         */
        query_sync(
            query: string,
            keys: GObject.ParamSpec[],
            skip: number,
            count: number,
            flags: MetadataResolutionFlags,
        ): Media[];
        /**
         * Remove a `media` from the `source` repository.
         *
         * This method is asynchronous.
         * @param media a data transfer object
         * @param callback the user defined callback
         */
        remove(media: Media, callback: MediaSourceRemoveCb): void;
        /**
         * Remove a `media` from the `source` repository.
         *
         * This method is synchronous.
         * @param media a data transfer object
         */
        remove_sync(media: Media): void;
        /**
         * Search for the `text` string in a media source for data identified with
         * that string.
         *
         * If `text` is `NULL` then no text filter will be applied, and thus, no media
         * items from `source` will be filtered. If `source` does not support NULL-text
         * search operations it should notiy the client by setting
         * `GRL_CORE_ERROR_SEARCH_NULL_UNSUPPORTED` in `callback'`s error parameter.
         *
         * This method is asynchronous.
         * @param text the text to search
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param skip the number if elements to skip in the search operation
         * @param count the number of elements to retrieve in the search operation
         * @param flags the resolution mode
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        search(
            text: string,
            keys: GObject.ParamSpec[],
            skip: number,
            count: number,
            flags: MetadataResolutionFlags,
            callback: MediaSourceResultCb,
        ): number;
        /**
         * Search for the `text` string in a media source for data identified with
         * that string.
         *
         * If `text` is `NULL` then no text filter will be applied, and thus, no media
         * items from `source` will be filtered. If `source` does not support NULL-text
         * search operations it should notiy the client by setting
         * `GRL_CORE_ERROR_SEARCH_NULL_UNSUPPORTED` in the error parameter.
         *
         * This method is synchronous.
         *
         * elements. After use g_object_unref() every element and g_list_free() the
         * list.
         * @param text the text to search
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param skip the number if elements to skip in the search operation
         * @param count the number of elements to retrieve in the search operation
         * @param flags the resolution mode
         * @returns a #GList with #GrlMedia
         */
        search_sync(
            text: string,
            keys: GObject.ParamSpec[],
            skip: number,
            count: number,
            flags: MetadataResolutionFlags,
        ): Media[];
        /**
         * TBD
         * @param threshold the threshold to request
         */
        set_auto_split_threshold(threshold: number): void;
        /**
         * Attach a pointer to the specific operation.
         * @param operation_id the identifier of a running operation
         * @param data the data to attach
         */
        set_operation_data(operation_id: number, data: any): void;
        /**
         * Store the `media` into the `parent` container
         *
         * This method is asynchronous.
         * @param parent a parent to store the data transfer objects
         * @param media a data transfer object
         * @param callback the user defined callback
         */
        store(parent: MediaBox, media: Media, callback: MediaSourceStoreCb): void;
        /**
         * Store the `media` into the `parent` container.
         *
         * This method is synchronous.
         * @param parent a #GrlMediaBox to store the data transfer objects
         * @param media a #GrlMedia data transfer object
         */
        store_sync(parent: MediaBox, media: Media): void;
        /**
         * Tests whether `source` can instantiate a #GrlMedia object representing
         * the media resource exposed at `uri`.
         *
         *
         * This method is synchronous.
         * @param uri A URI that can be used to identify a media resource
         * @returns %TRUE if it can, %FALSE otherwise.
         */
        test_media_from_uri(uri: string): boolean;
    }

    module MediaVideo {
        // Constructor properties interface

        interface ConstructorProps extends Media.ConstructorProps {}
    }

    class MediaVideo extends Media {
        static $gtype: GObject.GType<MediaVideo>;

        // Constructors of Grl.MediaVideo

        constructor(properties?: Partial<MediaVideo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaVideo;

        // Own methods of Grl.MediaVideo

        /**
         * Sets all the keys related with the URL of a media resource and adds it to
         * `video` (useful for resources with more than one URL).
         * @param url a video's url
         * @param mime video mime-type
         * @param framerate video framerate, or -1 to ignore
         * @param width video width, or -1 to ignore
         * @param height video height, or -1 to ignore
         */
        add_url_data(url: string, mime: string, framerate: number, width: number, height: number): void;
        // Conflicted with Grl.Media.add_url_data
        add_url_data(...args: never[]): any;
        get_episode(): number;
        get_framerate(): number;
        get_height(): number;
        get_season(): number;
        get_show(): string;
        get_url_data(framerate: number, width: number, height: number): [string, string];
        // Conflicted with Grl.Media.get_url_data
        get_url_data(...args: never[]): any;
        /**
         * in one go.
         * @param index element to retrieve
         * @param framerate the url framerate, or %NULL to ignore
         * @param width the url width, or %NULL to ignore
         * @param height the url height, or %NULL to ignore
         * @returns all the keys related with the URL number @index of a video resource
         */
        get_url_data_nth(index: number, framerate: number, width: number, height: number): [string, string];
        // Conflicted with Grl.Media.get_url_data_nth
        get_url_data_nth(...args: never[]): any;
        get_width(): number;
        /**
         * Sets the episode number of the video
         * @param episode the video's episode
         */
        set_episode(episode: number): void;
        /**
         * Set the framerate of the video
         * @param framerate the video's framerate
         */
        set_framerate(framerate: number): void;
        /**
         * Set the height of the video
         * @param height the video's height
         */
        set_height(height: number): void;
        /**
         * Sets the season number of the video
         * @param season the video's season
         */
        set_season(season: number): void;
        /**
         * Sets the show title of the video
         * @param show the video's show name
         */
        set_show(show: string): void;
        /**
         * Set the width and the height of the video
         * @param width the video's width
         * @param height the video's height
         */
        set_size(width: number, height: number): void;
        /**
         * Sets all the keys related with the URL of a video resource in one go.
         * @param url the video's url
         * @param mime video mime-type
         * @param framerate video framerate, or -1 to ignore
         * @param width video width, or -1 to ignore
         * @param height video height, or -1 to ignore
         */
        set_url_data(url: string, mime: string, framerate: number, width: number, height: number): void;
        // Conflicted with Grl.Media.set_url_data
        set_url_data(...args: never[]): any;
        /**
         * Set the width of the video
         * @param width the video's width
         */
        set_width(width: number): void;
    }

    module MetadataSource {
        // Constructor properties interface

        interface ConstructorProps extends MediaPlugin.ConstructorProps {
            source_desc: string;
            sourceDesc: string;
            source_id: string;
            sourceId: string;
            source_name: string;
            sourceName: string;
        }
    }

    abstract class MetadataSource extends MediaPlugin {
        static $gtype: GObject.GType<MetadataSource>;

        // Own properties of Grl.MetadataSource

        /**
         * A description of the source
         */
        get source_desc(): string;
        set source_desc(val: string);
        /**
         * A description of the source
         */
        get sourceDesc(): string;
        set sourceDesc(val: string);
        /**
         * The identifier of the source.
         */
        get source_id(): string;
        set source_id(val: string);
        /**
         * The identifier of the source.
         */
        get sourceId(): string;
        set sourceId(val: string);
        /**
         * The name of the source.
         */
        get source_name(): string;
        set source_name(val: string);
        /**
         * The name of the source.
         */
        get sourceName(): string;
        set sourceName(val: string);

        // Constructors of Grl.MetadataSource

        constructor(properties?: Partial<MetadataSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Grl.MetadataSource

        /**
         * Cancel a running method.
         *
         * The derived class must implement the cancel vmethod in order to honour the
         * request correctly. Otherwise, the operation will not be interrupted.
         *
         * In all cases, if this function is called on an ongoing operation, the
         * corresponding callback will be called with the
         * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
         * taken for that operation after the said callback with error has been called.
         * @param operation_id the identifier of the running operation, as returned by the function that started it
         */
        vfunc_cancel(operation_id: number): void;
        /**
         * Get the list of #GrlKeyID which are needed a priori, in order to fetch
         * and store the requested `key_id`
         *
         * a #GList with the keys, or `NULL` if it can not resolve `key_id`
         * @param key_id the requested metadata key
         */
        vfunc_key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[];
        /**
         * Checks whether `key_id` may be resolved with `source` for `media,` so that the
         * caller can avoid calling grl_metadata_source_resolve() if it can be known in
         * advance it will fail.
         *
         * If the resolution is known to be impossible because more keys are needed in
         * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
         * GrlKeyID that would be needed.
         *
         * This function is synchronous and should not block.
         *
         * `media,` `FALSE` otherwise.
         * @param media a media on which we want more metadata
         * @param key_id the key corresponding to a metadata we might want
         */
        vfunc_may_resolve(media: Media, key_id: KeyID): [boolean, KeyID[]];
        vfunc_resolve(rs: MetadataSourceResolveSpec): void;
        vfunc_set_metadata(sms: MetadataSourceSetMetadataSpec): void;
        /**
         * Similar to grl_metadata_source_supported_keys(), but this keys
         * are marked as slow because of the amount of traffic/processing needed
         * to fetch them.
         */
        vfunc_slow_keys(): GObject.ParamSpec[];
        /**
         * Get a list of #GrlKeyID, which describe a metadata types that this
         * source can fetch and store.
         */
        vfunc_supported_keys(): GObject.ParamSpec[];
        vfunc_supported_operations(): SupportedOps;
        /**
         * Similar to grl_metadata_source_supported_keys(), but these keys
         * are marked as writable, meaning the source allows the client
         * to provide new values for these keys that will be stored permanently.
         *
         * a #GList with the keys
         */
        vfunc_writable_keys(): GObject.ParamSpec[];

        // Own methods of Grl.MetadataSource

        /**
         * Cancel a running method.
         *
         * The derived class must implement the cancel vmethod in order to honour the
         * request correctly. Otherwise, the operation will not be interrupted.
         *
         * In all cases, if this function is called on an ongoing operation, the
         * corresponding callback will be called with the
         * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
         * taken for that operation after the said callback with error has been called.
         * @param operation_id the identifier of the running operation, as returned by the function that started it
         */
        cancel(operation_id: number): void;
        /**
         * This function does the opposite of other filter functions: removes the slow
         * keys from `keys`. If `return_filtered` is %TRUE the removed slow keys are
         * returned in a new list.
         *
         * `return_filtered` is %TRUE will return the list of slow keys; otherwise
         * %NULL
         * @param keys the list of keys to filter out
         * @param return_filtered if %TRUE the return value shall be a new list with the slow keys
         * @returns if
         */
        filter_slow(
            keys: GObject.ParamSpec[] | null,
            return_filtered: boolean,
        ): [GObject.ParamSpec[], GObject.ParamSpec[] | null];
        /**
         * Compares the received `keys` list with the supported key list by the
         * metadata `source,` and deletes those keys which are not supported.
         *
         * if `return_filtered` is %TRUE will return the list of removed keys;
         * otherwise %NULL
         * @param keys the list of keys to filter out
         * @param return_filtered if %TRUE the return value shall be a new list with the unsupported keys
         */
        filter_supported(
            keys: GObject.ParamSpec[] | null,
            return_filtered: boolean,
        ): [GObject.ParamSpec[], GObject.ParamSpec[] | null];
        /**
         * Similar to grl_metadata_source_filter_supported() but applied to
         * the writable keys in grl_metadata_source_writable_keys().
         *
         * Filter the `keys` list keeping only those keys that are writtable in
         * `source`. If `return_filtered` is %TRUE then the removed keys are returned in a
         * new list.
         *
         * if `return_filtered` is %TRUE will return the list of non-writtable keys;
         * otherwise %NULL
         * @param keys the list of keys to filter out
         * @param return_filtered if %TRUE the return value shall be a new list with the non-writable keys
         */
        filter_writable(
            keys: GObject.ParamSpec[] | null,
            return_filtered: boolean,
        ): [GObject.ParamSpec[], GObject.ParamSpec[] | null];
        gen_operation_id(): number;
        get_description(): string;
        get_id(): string;
        get_name(): string;
        /**
         * Obtains the previously attached data
         * @param operation_id the identifier of a running operation
         * @returns The previously attached data.
         */
        get_operation_data(operation_id: number): any;
        /**
         * Get the list of #GrlKeyID which are needed a priori, in order to fetch
         * and store the requested `key_id`
         *
         * a #GList with the keys, or `NULL` if it can not resolve `key_id`
         * @param key_id the requested metadata key
         */
        key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[];
        /**
         * Checks whether `key_id` may be resolved with `source` for `media,` so that the
         * caller can avoid calling grl_metadata_source_resolve() if it can be known in
         * advance it will fail.
         *
         * If the resolution is known to be impossible because more keys are needed in
         * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
         * GrlKeyID that would be needed.
         *
         * This function is synchronous and should not block.
         *
         * `media,` `FALSE` otherwise.
         * @param media a media on which we want more metadata
         * @param key_id the key corresponding to a metadata we might want
         * @returns @TRUE if there's a possibility that @source resolves @key_id for
         */
        may_resolve(media: Media, key_id: KeyID): [boolean, KeyID[]];
        operation_is_cancelled(operation_id: number): boolean;
        operation_is_completed(operation_id: number): boolean;
        operation_is_finished(operation_id: number): boolean;
        operation_is_ongoing(operation_id: number): boolean;
        /**
         * This is the main method of the #GrlMetadataSource class. It will fetch the
         * metadata of the requested keys.
         *
         * This function is asynchronous.
         * @param keys the #GList of #GrlKeyID to retrieve
         * @param media Transfer object where all the metadata is stored.
         * @param flags bitwise mask of #GrlMetadataResolutionFlags with the resolution strategy
         * @param callback the callback to execute when the @media metadata is filled up
         * @returns the operation identifier
         */
        resolve(
            keys: GObject.ParamSpec[],
            media: Media,
            flags: MetadataResolutionFlags,
            callback: MetadataSourceResolveCb,
        ): number;
        /**
         * This is the main method of the #GrlMetadataSource class. It will fetch the
         * metadata of the requested keys.
         *
         * This function is synchronous.
         * @param keys the #GList of #GrlKeyID to retrieve
         * @param media Transfer object where all the metadata is stored
         * @param flags bitwise mask of #GrlMetadataResolutionFlags with the resolution strategy
         * @returns the updated #GrlMedia
         */
        resolve_sync(keys: GObject.ParamSpec[], media: Media, flags: MetadataResolutionFlags): Media;
        /**
         * This is the main method of the #GrlMetadataSource class. It will
         * get the values for `keys` from `media` and store it permanently. After
         * calling this method, future queries that return this media object
         * shall return this new values for the selected keys.
         *
         * This function is asynchronous and uses the Glib's main loop.
         * @param media the #GrlMedia object that we want to operate on.
         * @param keys a list of #GrlKeyID whose values we want to change.
         * @param flags Flags to configure specific behaviors of the operation.
         * @param callback the callback to execute when the operation is finished.
         */
        set_metadata(
            media: Media,
            keys: GObject.ParamSpec[],
            flags: MetadataWritingFlags,
            callback: MetadataSourceSetMetadataCb,
        ): void;
        /**
         * This is the main method of the #GrlMetadataSource class. It will
         * get the value for `key` from `media` and store it permanently. After
         * calling this method, future queries that return this media object
         * shall return this new value for the selected key.
         *
         * This function is synchronous.
         *
         * a #GList of keys that could not be updated, or `NULL`
         * @param media the #GrlMedia object that we want to operate on
         * @param keys a list of #GrlKeyID whose values we want to change
         * @param flags Flags to configure specific behaviors of the operation.
         */
        set_metadata_sync(media: Media, keys: GObject.ParamSpec[], flags: MetadataWritingFlags): GObject.ParamSpec[];
        set_operation_cancelled(operation_id: number): void;
        set_operation_completed(operation_id: number): void;
        /**
         * Attach a pointer to the specific operation.
         * @param operation_id the identifier of a running operation
         * @param data the data to attach
         */
        set_operation_data(operation_id: number, data: any): void;
        set_operation_finished(operation_id: number): void;
        set_operation_ongoing(operation_id: number): void;
        /**
         * Similar to grl_metadata_source_supported_keys(), but this keys
         * are marked as slow because of the amount of traffic/processing needed
         * to fetch them.
         * @returns a #GList with the keys
         */
        slow_keys(): GObject.ParamSpec[];
        /**
         * Get a list of #GrlKeyID, which describe a metadata types that this
         * source can fetch and store.
         * @returns a #GList with the keys
         */
        supported_keys(): GObject.ParamSpec[];
        /**
         * By default the derived objects of #GrlMetadataSource can only resolve.
         *
         * the source
         * @returns a bitwise mangle with the supported operations by
         */
        supported_operations(): number;
        /**
         * Similar to grl_metadata_source_supported_keys(), but these keys
         * are marked as writable, meaning the source allows the client
         * to provide new values for these keys that will be stored permanently.
         *
         * a #GList with the keys
         */
        writable_keys(): GObject.ParamSpec[];
    }

    module PluginRegistry {
        // Signal callback interfaces

        interface SourceAdded {
            (plugin: MediaPlugin): void;
        }

        interface SourceRemoved {
            (plugin: MediaPlugin): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PluginRegistry extends GObject.Object {
        static $gtype: GObject.GType<PluginRegistry>;

        // Constructors of Grl.PluginRegistry

        constructor(properties?: Partial<PluginRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Grl.PluginRegistry

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'source-added', callback: (_source: this, plugin: MediaPlugin) => void): number;
        connect_after(signal: 'source-added', callback: (_source: this, plugin: MediaPlugin) => void): number;
        emit(signal: 'source-added', plugin: MediaPlugin): void;
        connect(signal: 'source-removed', callback: (_source: this, plugin: MediaPlugin) => void): number;
        connect_after(signal: 'source-removed', callback: (_source: this, plugin: MediaPlugin) => void): number;
        emit(signal: 'source-removed', plugin: MediaPlugin): void;

        // Own static methods of Grl.PluginRegistry

        /**
         * As the registry is designed to work as a singleton, this
         * method is in charge of creating the only instance or
         * returned it if it is already in memory.
         *
         *
         * It is NOT MT-safe
         */
        static get_default(): PluginRegistry;

        // Own methods of Grl.PluginRegistry

        /**
         * Add a configuration for a plugin/source.
         * @param config a configuration set
         */
        add_config(config: Config): boolean;
        /**
         * Load plugin configurations from a .ini-like config file.
         * @param config_file a key-value file containing the configuration
         * @returns %TRUE on success
         */
        add_config_from_file(config_file: string): boolean;
        /**
         * Set this path as part of default paths to load plugins.
         * @param path a path with plugins
         */
        add_directory(path: string): void;
        /**
         * Returns a list with all registered keys in system.
         *
         * with all the available #GrlKeyID<!-- -->s. The content of the list should
         * not be modified or freed. Use g_list_free() when done using the list.
         * @returns a #GList
         */
        get_metadata_keys(): GObject.ParamSpec[];
        /**
         * This function will return all the available sources in the `registry`.
         *
         * If `ranked` is %TRUE, the source list will be ordered by rank.
         *
         * available #GrlMediaPlugins<!-- -->s. The content of the list should not be
         * modified or freed. Use g_list_free() when done using the list.
         * @param ranked whether the returned list shall be returned ordered by rank
         * @returns a #GList of
         */
        get_sources(ranked: boolean): MediaPlugin[];
        /**
         * Give an array of all the available sources in the `registry` capable of
         * perform the operations requested in `ops`.
         *
         * If `ranked` is %TRUE, the source list will be ordered by rank.
         *
         * available #GrlMediaPlugins<!-- -->s. The content of the list should not be
         * modified or freed. Use g_list_free() when done using the list.
         * @param ops a bitwise mangle of the requested operations.
         * @param ranked whether the returned list shall be returned ordered by rank
         * @returns a #GList of
         */
        get_sources_by_operations(ops: SupportedOps, ranked: boolean): MediaPlugin[];
        /**
         * Loads a module from shared object file stored in `path`
         * @param library_filename the path to the so file
         * @returns %TRUE if the module is loaded correctly
         */
        load(library_filename: string): boolean;
        /**
         * Load all the modules available in the default directory path.
         *
         * The default directory path can be changed through the environment
         * variable %GRL_PLUGIN_PATH and it can contain several paths separated
         * by ":"
         *
         * %TRUE% otherwise.
         * @returns %FALSE% is all the configured plugin paths are invalid,
         */
        load_all(): boolean;
        /**
         * Loads plugin identified by `plugin_id`.
         *
         * This requires the XML plugin information file to define a "module" key with
         * the name of the module that provides the plugin or the absolute path of the
         * actual module file.
         * @param plugin_id plugin identifier
         * @returns %TRUE if the plugin is loaded correctly
         */
        load_by_id(plugin_id: string): boolean;
        /**
         * Loads a set of modules from directory in `path` which contains
         * a group shared object files.
         * @param path the path to the directory
         * @returns %TRUE if the directory is valid.
         */
        load_directory(path: string): boolean;
        /**
         * Look up for the metadata key with name `key_name`.
         * @param key_name the key name
         * @returns The metadata key, or @NULL if not found
         */
        lookup_metadata_key(key_name: string): GObject.ParamSpec;
        /**
         * Look up the list of keys that have a relation with `key`.
         *
         * `key` is included in that list.
         *
         * related keys, or `NULL` if key is invalid.
         * @param key a metadata key
         * @returns a #GList of
         */
        lookup_metadata_key_relation(key: KeyID): GObject.ParamSpec[];
        /**
         * This function will search and retrieve a source given its identifier.
         * @param source_id the id of a source
         * @returns The source found.
         */
        lookup_source(source_id: string): MediaPlugin;
        /**
         * Registers a metadata key
         *
         * or `NULL` on error.
         * @param key The key to register
         * @returns The #GrlKeyID registered
         */
        register_metadata_key(key: GObject.ParamSpec): GObject.ParamSpec;
        /**
         * Creates a relation between `key1` and `key2`, meaning that the values of both
         * keys are somehow related.
         *
         * One example of a relation would be the one between the URI of a media
         * resource and its mime-type: they are both tied together and one does not make
         * sense without the other.
         *
         * Relations between keys allow the framework to provide all the data that is
         * somehow related when any of the related keys are requested.
         * @param key1 key involved in relationship
         * @param key2 key involved in relationship
         */
        register_metadata_key_relation(key1: KeyID, key2: KeyID): void;
        /**
         * Register a `source` in the `registry` with the given `plugin` information
         * @param plugin the descriptor of the plugin which owns the source
         * @param source the source to register
         * @returns %TRUE if success, %FALSE% otherwise.
         */
        register_source(plugin: PluginInfo, source: MediaPlugin): boolean;
        /**
         * Restrict the plugins that application sees to this list.
         *
         * Other plugins will not be available for the application, unless it uses
         * directly #grl_plugin_registry_load() function.
         * @param plugins a @NULL-terminated array of plugins identifiers
         */
        restrict_plugins(plugins: string): void;
        /**
         * Unload from memory a module identified by `plugin_id`. This means call the
         * module's deinit function.
         * @param plugin_id the identifier of the plugin
         * @returns %TRUE% on success.
         */
        unload(plugin_id: string): boolean;
        /**
         * Removes the `source` from the `registry` hash table
         * @param source the source to unregister
         * @returns %TRUE if success, %FALSE% otherwise.
         */
        unregister_source(source: MediaPlugin): boolean;
    }

    module RelatedKeys {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class RelatedKeys extends GObject.Object {
        static $gtype: GObject.GType<RelatedKeys>;

        // Constructors of Grl.RelatedKeys

        constructor(properties?: Partial<RelatedKeys.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RelatedKeys;

        // Own methods of Grl.RelatedKeys

        /**
         * Adds a new `key` to `relkeys,` with no value. If `key` already exists, it does
         * nothing.
         * @param key key to add
         */
        add(key: GObject.ParamSpec): void;
        /**
         * Makes a deep copy of `relkeys` and its contents.
         *
         * Free it with #g_object_unref.
         * @returns a new #GrlRelatedKeys.
         */
        dup(): RelatedKeys;
        /**
         * Get the value associated with `key` from `relkeys`. If it does not contain any
         * value, %NULL will be returned.
         *
         * freed by user.
         * @param key key to look up.
         * @returns a #GValue. This value should not be modified nor
         */
        get(key: GObject.ParamSpec): unknown;
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a binary, or `key` is not in `relkeys,` then 0 is returned.
         *
         * successful `size` will be set to the buffer size.
         * @param key key to use
         * @returns buffer location associated with @key, or %NULL in other case. If
         */
        get_binary(key: GObject.ParamSpec): [number, number];
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a gfloat, or `key` is not in `relkeys,` then 0 is returned.
         * @param key key to use
         * @returns float value associated with @key, or 0 in other case.
         */
        get_float(key: GObject.ParamSpec): number;
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a gint, or `key` is not in `relkeys,` then 0 is returned.
         * @param key key to use
         * @returns int value associated with @key, or 0 in other case.
         */
        get_int(key: GObject.ParamSpec): number;
        /**
         * Returns a list with keys contained in `relkeys`.
         *
         * the keys. The content of the list should not be modified or freed. Use
         * g_list_free() when done using the list.
         * @returns a list with
         */
        get_keys(): GObject.ParamSpec[];
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not string, or `key` is not in `relkeys,` then %NULL is returned.
         *
         * not change nor free the value.
         * @param key key to use
         * @returns string associated with @key, or %NULL in other case. Caller should
         */
        get_string(key: GObject.ParamSpec): string;
        /**
         * Checks if `key` is in `relkeys`.
         * @param key key to search
         * @returns %TRUE if @key is in @relkeys, %FALSE in other case.
         */
        has_key(key: GObject.ParamSpec): boolean;
        /**
         * Checks if `key` has a value in `relkeys`.
         * @param key key to search
         * @returns %TRUE if @key has a value.
         */
        key_is_known(key: GObject.ParamSpec): boolean;
        /**
         * Sets the value associated with `key` into `relkeys`. Old value is freed and
         * the new one is set.
         *
         * Also, checks that `value` is compliant with `key` specification, modifying it
         * accordingly. For instance, if `key` requires a number between 0 and 10, but
         * value is outside this range, it will be adapted accordingly.
         * @param key key to change or add
         * @param value the new value
         */
        set(key: GObject.ParamSpec, value: GObject.Value | any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a binary-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param buf buffer holding the relkeys
         * @param size size of the buffer
         */
        set_binary(key: GObject.ParamSpec, buf: number, size: number): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a float-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param floatvalue the new value
         */
        set_float(key: GObject.ParamSpec, floatvalue: number): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as an int-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param intvalue the new value
         */
        set_int(key: GObject.ParamSpec, intvalue: number): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a strying-type key. Old value is freed and the new one is set.
         * @param key key to change or add
         * @param strvalue the new value
         */
        set_string(key: GObject.ParamSpec, strvalue: string): void;
    }

    type ConfigClass = typeof Config;
    abstract class ConfigPrivate {
        static $gtype: GObject.GType<ConfigPrivate>;

        // Constructors of Grl.ConfigPrivate

        _init(...args: any[]): void;
    }

    type DataClass = typeof Data;
    abstract class DataPrivate {
        static $gtype: GObject.GType<DataPrivate>;

        // Constructors of Grl.DataPrivate

        _init(...args: any[]): void;
    }

    abstract class LogDomain {
        static $gtype: GObject.GType<LogDomain>;

        // Constructors of Grl.LogDomain

        _init(...args: any[]): void;

        // Own methods of Grl.LogDomain

        free(): void;
    }

    type MediaAudioClass = typeof MediaAudio;
    type MediaBoxClass = typeof MediaBox;
    type MediaClass = typeof Media;
    type MediaImageClass = typeof MediaImage;
    type MediaPluginClass = typeof MediaPlugin;
    abstract class MediaPluginPrivate {
        static $gtype: GObject.GType<MediaPluginPrivate>;

        // Constructors of Grl.MediaPluginPrivate

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * browse vmethod.
     */
    class MediaSourceBrowseSpec {
        static $gtype: GObject.GType<MediaSourceBrowseSpec>;

        // Own fields of Grl.MediaSourceBrowseSpec

        source: MediaSource;
        browse_id: number;
        container: Media;
        keys: any[];
        skip: number;
        count: number;
        flags: MetadataResolutionFlags;
        callback: MediaSourceResultCb;
        user_data: any;

        // Constructors of Grl.MediaSourceBrowseSpec

        _init(...args: any[]): void;
    }

    type MediaSourceClass = typeof MediaSource;
    /**
     * Data transport structure used internally by the plugins which support
     * media_from_uri vmethod.
     */
    class MediaSourceMediaFromUriSpec {
        static $gtype: GObject.GType<MediaSourceMediaFromUriSpec>;

        // Own fields of Grl.MediaSourceMediaFromUriSpec

        source: MediaSource;
        media_from_uri_id: number;
        uri: string;
        keys: any[];
        flags: MetadataResolutionFlags;
        callback: MediaSourceMetadataCb;
        user_data: any;

        // Constructors of Grl.MediaSourceMediaFromUriSpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * metadata vmethod.
     */
    class MediaSourceMetadataSpec {
        static $gtype: GObject.GType<MediaSourceMetadataSpec>;

        // Own fields of Grl.MediaSourceMetadataSpec

        source: MediaSource;
        metadata_id: number;
        media: Media;
        keys: any[];
        flags: MetadataResolutionFlags;
        callback: MediaSourceMetadataCb;
        user_data: any;

        // Constructors of Grl.MediaSourceMetadataSpec

        _init(...args: any[]): void;
    }

    abstract class MediaSourcePrivate {
        static $gtype: GObject.GType<MediaSourcePrivate>;

        // Constructors of Grl.MediaSourcePrivate

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * query vmethod.
     */
    class MediaSourceQuerySpec {
        static $gtype: GObject.GType<MediaSourceQuerySpec>;

        // Own fields of Grl.MediaSourceQuerySpec

        source: MediaSource;
        query_id: number;
        query: string;
        keys: any[];
        skip: number;
        count: number;
        flags: MetadataResolutionFlags;
        callback: MediaSourceResultCb;
        user_data: any;

        // Constructors of Grl.MediaSourceQuerySpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * store vmethod.
     */
    class MediaSourceRemoveSpec {
        static $gtype: GObject.GType<MediaSourceRemoveSpec>;

        // Own fields of Grl.MediaSourceRemoveSpec

        source: MediaSource;
        media_id: string;
        media: Media;
        callback: MediaSourceRemoveCb;
        user_data: any;

        // Constructors of Grl.MediaSourceRemoveSpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * search vmethod.
     */
    class MediaSourceSearchSpec {
        static $gtype: GObject.GType<MediaSourceSearchSpec>;

        // Own fields of Grl.MediaSourceSearchSpec

        source: MediaSource;
        search_id: number;
        text: string;
        keys: any[];
        skip: number;
        count: number;
        flags: MetadataResolutionFlags;
        callback: MediaSourceResultCb;
        user_data: any;

        // Constructors of Grl.MediaSourceSearchSpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * store vmethod.
     */
    class MediaSourceStoreSpec {
        static $gtype: GObject.GType<MediaSourceStoreSpec>;

        // Own fields of Grl.MediaSourceStoreSpec

        source: MediaSource;
        media: Media;
        callback: MediaSourceStoreCb;
        user_data: any;

        // Constructors of Grl.MediaSourceStoreSpec

        _init(...args: any[]): void;
    }

    type MediaVideoClass = typeof MediaVideo;
    type MetadataSourceClass = typeof MetadataSource;
    abstract class MetadataSourcePrivate {
        static $gtype: GObject.GType<MetadataSourcePrivate>;

        // Constructors of Grl.MetadataSourcePrivate

        _init(...args: any[]): void;
    }

    /**
     * Represents the closure used by the derived objects to fetch, store and
     * return the transfer object to the client's code.
     */
    class MetadataSourceResolveSpec {
        static $gtype: GObject.GType<MetadataSourceResolveSpec>;

        // Own fields of Grl.MetadataSourceResolveSpec

        source: MetadataSource;
        resolve_id: number;
        keys: any[];
        media: Media;
        flags: MetadataResolutionFlags;
        callback: MetadataSourceResolveCb;
        user_data: any;

        // Constructors of Grl.MetadataSourceResolveSpec

        _init(...args: any[]): void;
    }

    /**
     * Represents the closure used by the derived objects to operate.
     */
    class MetadataSourceSetMetadataSpec {
        static $gtype: GObject.GType<MetadataSourceSetMetadataSpec>;

        // Own fields of Grl.MetadataSourceSetMetadataSpec

        source: MetadataSource;
        media: Media;
        keys: any[];
        flags: MetadataWritingFlags;
        callback: MetadataSourceSetMetadataCb;
        user_data: any;
        failed_keys: any[];

        // Constructors of Grl.MetadataSourceSetMetadataSpec

        _init(...args: any[]): void;
    }

    class PluginDescriptor {
        static $gtype: GObject.GType<PluginDescriptor>;

        // Own fields of Grl.PluginDescriptor

        plugin_id: string;

        // Constructors of Grl.PluginDescriptor

        _init(...args: any[]): void;
    }

    /**
     * This structure stores the information related to a module
     */
    class PluginInfo {
        static $gtype: GObject.GType<PluginInfo>;

        // Own fields of Grl.PluginInfo

        id: string;
        filename: string;
        rank: number;

        // Constructors of Grl.PluginInfo

        _init(...args: any[]): void;
    }

    type PluginRegistryClass = typeof PluginRegistry;
    abstract class PluginRegistryPrivate {
        static $gtype: GObject.GType<PluginRegistryPrivate>;

        // Constructors of Grl.PluginRegistryPrivate

        _init(...args: any[]): void;
    }

    type RelatedKeysClass = typeof RelatedKeys;
    abstract class RelatedKeysPrivate {
        static $gtype: GObject.GType<RelatedKeysPrivate>;

        // Constructors of Grl.RelatedKeysPrivate

        _init(...args: any[]): void;
    }

    type KeyID = any;
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

export default Grl;
// END
