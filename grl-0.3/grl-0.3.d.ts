/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './grl-0.3-ambient.d.ts';

/**
 * Grl-0.3
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Grl {
    /**
     * These constants identify all the available core errors
     */
    enum CoreError {
        /**
         * The browse operation failed
         */
        BROWSE_FAILED,
        /**
         * The search operation failed
         */
        SEARCH_FAILED,
        /**
         * Searching NULL-text is not supported
         */
        SEARCH_NULL_UNSUPPORTED,
        /**
         * The query operation failed
         */
        QUERY_FAILED,
        /**
         * The resolution operation failed
         */
        RESOLVE_FAILED,
        /**
         * The media was not found
         */
        MEDIA_NOT_FOUND,
        /**
         * The store operation failed
         */
        STORE_FAILED,
        /**
         * The store metadata operation failed
         */
        STORE_METADATA_FAILED,
        /**
         * The removal operation failed
         */
        REMOVE_FAILED,
        /**
         * The media from_uri operation failed
         */
        MEDIA_FROM_URI_FAILED,
        /**
         * Failed to load plugin configuration from a file
         */
        CONFIG_LOAD_FAILED,
        /**
         * Failed to set configuration for plugin
         */
        CONFIG_FAILED,
        /**
         * Failed to unregister source
         */
        UNREGISTER_SOURCE_FAILED,
        /**
         * Failed to load plugin
         */
        LOAD_PLUGIN_FAILED,
        /**
         * Failed to unload plugin
         */
        UNLOAD_PLUGIN_FAILED,
        /**
         * Failed to register metadata key
         */
        REGISTER_METADATA_KEY_FAILED,
        /**
         * Failed to start changed notifications
         */
        NOTIFY_CHANGED_FAILED,
        /**
         * The operation was cancelled
         */
        OPERATION_CANCELLED,
        /**
         * Invalid authentication token
         */
        AUTHENTICATION_TOKEN,
    }
    /**
     * Grilo log levels. Defines the level of verbosity selected in Grilo.
     */
    enum LogLevel {
        /**
         * Log level none
         */
        NONE,
        /**
         * Log on error
         */
        ERROR,
        /**
         * Log on warning
         */
        WARNING,
        /**
         * Log on message
         */
        MESSAGE,
        /**
         * Log on info
         */
        INFO,
        /**
         * Log on debug
         */
        DEBUG,
        /**
         * Last level of log
         */
        LAST,
    }
    /**
     * GrlMedia serialize type
     */
    enum MediaSerializeType {
        /**
         * Basic mode
         */
        BASIC,
        /**
         * Partial mode
         */
        PARTIAL,
        /**
         * Full mode
         */
        FULL,
    }
    enum MediaType {
        /**
         * unknown media
         */
        UNKNOWN,
        /**
         * audio media
         */
        AUDIO,
        /**
         * video media
         */
        VIDEO,
        /**
         * image media
         */
        IMAGE,
        /**
         * container media
         */
        CONTAINER,
    }
    /**
     * Source priority ranks. Defines the order in which the resolver
     * (or similar rank-picking mechanisms) will choose this source
     * over an alternative one with the same function.
     *
     * These constants serve as a rough guidance for defining the rank
     * of a GrlSource. Any value is valid, including values bigger
     * than GRL_RANK_HIGHEST.
     */
    enum Rank {
        /**
         * will be chosen last or not at all
         */
        LOWEST,
        /**
         * unlikely to be chosen
         */
        LOW,
        /**
         * likely to be chosen
         */
        DEFAULT,
        /**
         * will be chosen
         */
        HIGH,
        /**
         * will be chosen first
         */
        HIGHEST,
    }
    /**
     * Specifies which kind of change has happened in the plugin
     */
    enum SourceChangeType {
        /**
         * content has changed. It is used when any property of
         * #GrlMedia has changed, or in case of containers, if several children have
         * been added and removed.
         */
        CHANGED,
        /**
         * new content has been added.
         */
        ADDED,
        /**
         * content has been removed
         */
        REMOVED,
    }
    const CONFIG_KEY_APIKEY: string;
    const CONFIG_KEY_APIKEY_BLOB: string;
    const CONFIG_KEY_APISECRET: string;
    const CONFIG_KEY_APITOKEN: string;
    const CONFIG_KEY_APITOKEN_SECRET: string;
    const CONFIG_KEY_PASSWORD: string;
    const CONFIG_KEY_PLUGIN: string;
    const CONFIG_KEY_SOURCE: string;
    const CONFIG_KEY_USERNAME: string;
    const CONFIG_PATH_VAR: string;
    const COUNT_INFINITY: number;
    const KEYID_FORMAT: string;
    const METADATA_KEY_ALBUM: number;
    const METADATA_KEY_ALBUM_ARTIST: number;
    const METADATA_KEY_ALBUM_DISC_NUMBER: number;
    const METADATA_KEY_ARTIST: number;
    const METADATA_KEY_AUDIO_TRACK: number;
    const METADATA_KEY_AUTHOR: number;
    const METADATA_KEY_BITRATE: number;
    const METADATA_KEY_CAMERA_MODEL: number;
    const METADATA_KEY_CERTIFICATE: number;
    const METADATA_KEY_CHILDCOUNT: number;
    const METADATA_KEY_CHILDCOUNT_UNKNOWN: number;
    const METADATA_KEY_COMPOSER: number;
    const METADATA_KEY_CREATION_DATE: number;
    const METADATA_KEY_DESCRIPTION: number;
    const METADATA_KEY_DIRECTOR: number;
    const METADATA_KEY_DURATION: number;
    const METADATA_KEY_EPISODE: number;
    const METADATA_KEY_EPISODE_TITLE: number;
    const METADATA_KEY_EXPOSURE_TIME: number;
    const METADATA_KEY_EXTERNAL_PLAYER: number;
    const METADATA_KEY_EXTERNAL_URL: number;
    const METADATA_KEY_FAVOURITE: number;
    const METADATA_KEY_FLASH_USED: number;
    const METADATA_KEY_FRAMERATE: number;
    const METADATA_KEY_GENRE: number;
    const METADATA_KEY_HEIGHT: number;
    const METADATA_KEY_ID: number;
    const METADATA_KEY_INVALID: number;
    const METADATA_KEY_ISO_SPEED: number;
    const METADATA_KEY_KEYWORD: number;
    const METADATA_KEY_LAST_PLAYED: number;
    const METADATA_KEY_LAST_POSITION: number;
    const METADATA_KEY_LICENSE: number;
    const METADATA_KEY_LYRICS: number;
    const METADATA_KEY_MB_ALBUM_ID: number;
    const METADATA_KEY_MB_ARTIST_ID: number;
    const METADATA_KEY_MB_RECORDING_ID: number;
    const METADATA_KEY_MB_RELEASE_GROUP_ID: number;
    const METADATA_KEY_MB_RELEASE_ID: number;
    const METADATA_KEY_MB_TRACK_ID: number;
    const METADATA_KEY_MIME: number;
    const METADATA_KEY_MODIFICATION_DATE: number;
    const METADATA_KEY_ORIENTATION: number;
    const METADATA_KEY_ORIGINAL_TITLE: number;
    const METADATA_KEY_PERFORMER: number;
    const METADATA_KEY_PLAY_COUNT: number;
    const METADATA_KEY_PRODUCER: number;
    const METADATA_KEY_PUBLICATION_DATE: number;
    const METADATA_KEY_RATING: number;
    const METADATA_KEY_REGION: number;
    const METADATA_KEY_SEASON: number;
    const METADATA_KEY_SHOW: number;
    const METADATA_KEY_SITE: number;
    const METADATA_KEY_SIZE: number;
    const METADATA_KEY_SOURCE: number;
    const METADATA_KEY_START_TIME: number;
    const METADATA_KEY_STUDIO: number;
    const METADATA_KEY_THUMBNAIL: number;
    const METADATA_KEY_THUMBNAIL_BINARY: number;
    const METADATA_KEY_TITLE: number;
    const METADATA_KEY_TITLE_FROM_FILENAME: number;
    const METADATA_KEY_TRACK_NUMBER: number;
    const METADATA_KEY_URL: number;
    const METADATA_KEY_WIDTH: number;
    const PADDING: number;
    const PADDING_SMALL: number;
    const PLUGIN_AUTHOR: string;
    const PLUGIN_DESCRIPTION: string;
    const PLUGIN_LICENSE: string;
    const PLUGIN_LIST_VAR: string;
    const PLUGIN_NAME: string;
    const PLUGIN_PATH_VAR: string;
    const PLUGIN_RANKS_VAR: string;
    const PLUGIN_SITE: string;
    const PLUGIN_VERSION: string;
    const SOURCE_REMAINING_UNKNOWN: number;
    function date_time_from_iso8601(date: string): GLib.DateTime;
    /**
     * Deinitializes the Grilo library.
     *
     * Call this function after finalizing using Grilo, in order to free and clean
     * up all the resources created.
     */
    function deinit(): void;
    function g_value_dup(value: GObject.Value): GObject.Value;
    function g_value_free(value: GObject.Value): void;
    function g_value_hashtable_new(): GLib.HashTable<string, GObject.Value>;
    function g_value_hashtable_new_direct(): GLib.HashTable<any, GObject.Value>;
    function g_value_new(g_type: GObject.GType): GObject.Value;
    /**
     * Initializes the Grilo library
     * @param argv list of arguments
     */
    function init(argv?: string[] | null): string[] | null;
    /**
     * Returns a #GOptionGroup with Grilo's argument specifications.
     *
     * This function is useful if you want to integrate Grilo with other
     * libraries that use the GOption commandline parser
     * (see g_option_context_add_group() ).
     * @returns a pointer to Grilo's option group. Should be dereferenced after use.
     */
    function init_get_option_group(): GLib.OptionGroup;
    /**
     * Configure a set of log domains. The default configuration is to display
     * warning and error messages only for all the log domains.
     *
     * The configuration string follows the following grammar:
     *
     *
     * ```
     *   config-list: config | config ',' config-list
     *   config: domain ':' level
     *   domain: '*' | [a-zA-Z0-9]+
     *   level: '*' | '-' | named-level | num-level
     *   named-level: "none" | "error" | "warning" | "message" | "info" | "debug"
     *   num-level: [0-5]
     * ```
     *
     *
     * examples:
     * <itemizedlist>
     *   <listitem><para>"*:*": maximum verbosity for all the log domains</para>
     *   </listitem>
     *   <listitem><para>"*:-": don't print any message</para></listitem>
     *   <listitem><para>"media-source:debug,metadata-source:debug": prints debug,
     *   info, message warning and error messages for the media-source and
     *   metadata-source log domains</para></listitem>
     * </itemizedlist>
     *
     * <note>It's possible to override the log configuration at runtime by
     * defining the GRL_DEBUG environment variable to a configuration string
     * as described above</note>
     * @param config A string describing the wanted log configuration
     */
    function log_configure(config: string): void;
    /**
     * Retrieves the description associated with the key
     * @param key key to look up
     * @returns the description of the key
     */
    function metadata_key_get_desc(key: KeyID): string;
    /**
     * Retrieves the name associated with the key
     * @param key key to look up
     * @returns The name of the key
     */
    function metadata_key_get_name(key: KeyID): string;
    /**
     * Retrieves the expected type for values associated with this key
     * @param key key to look up
     * @returns the expected value type
     */
    function metadata_key_get_type(key: KeyID): GObject.GType;
    /**
     * Goes though all available media sources until it finds one capable of
     * constructing a GrlMedia object representing the media resource exposed
     * by `uri`.
     *
     * This method is asynchronous.
     * @param uri A URI that can be used to identify a media resource
     * @param keys List of metadata keys we want to obtain.
     * @param options options wanted for that operation
     * @param callback the user defined callback
     */
    function multiple_get_media_from_uri(
        uri: string,
        keys: KeyID[],
        options: OperationOptions,
        callback: SourceResolveCb,
    ): void;
    /**
     * Search for `text` in all the sources specified in `sources`.
     *
     * If `text` is `NULL` then NULL-text searchs will be used for each searchable
     * plugin (see #grl_source_search for more details).
     *
     * This method is asynchronous.
     * @param sources a #GList of #GrlSource<!-- -->s to search from (%NULL for all searchable sources)
     * @param text the text to search for
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param options options wanted for that operation
     * @param callback the user defined callback
     * @returns the operation identifier
     */
    function multiple_search(
        sources: Source[] | null,
        text: string,
        keys: KeyID[],
        options: OperationOptions,
        callback: SourceResultCb,
    ): number;
    /**
     * Search for `text` in all the sources specified in `sources`.
     *
     * This method is synchronous.
     * @param sources a #GList of #GrlSource<!-- -->s where to search from (%NULL for all available sources with search capability)
     * @param text the text to search for
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param options options wanted for that operation
     * @returns a list with #GrlMedia elements
     */
    function multiple_search_sync(
        sources: Source[] | null,
        text: string,
        keys: KeyID[],
        options: OperationOptions,
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
    function operation_get_data(operation_id: number): any | null;
    /**
     * Attach a pointer to the specific operation.
     * @param operation_id the identifier of a running operation
     * @param user_data the data to attach
     */
    function operation_set_data(operation_id: number, user_data?: any | null): void;
    /**
     * Attach a pointer to the specific operation.
     *
     * Note that the `destroy_func` callback is not called if `user_data` is %NULL.
     * @param operation_id the identifier of a running operation
     * @param user_data the data to attach
     * @param destroy_func function to release @user_data when the operation terminates
     */
    function operation_set_data_full(
        operation_id: number,
        user_data?: any | null,
        destroy_func?: GLib.DestroyNotify | null,
    ): void;
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
     *
     * If `page_size` is `NULL,` then page size will be `max_page_size`. If the later
     * is also 0, then page size will be #G_MAXUINT.
     * @param skip number of elements to skip
     * @param count number of elements to retrieve
     * @param max_page_size maximum value for page size (0 for unlimited size)
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
    function range_value_hashtable_insert(
        hash_table: GLib.HashTable<any, any>,
        key: any | null,
        min: GObject.Value,
        max: GObject.Value,
    ): void;
    function range_value_hashtable_new(): GLib.HashTable<any, RangeValue>;
    interface PluginDeinitFunc {
        (plugin: Plugin): void;
    }
    interface PluginRegisterKeysFunc {
        (registry: Registry, plugin: Plugin): void;
    }
    interface SourceRemoveCb {
        (source: Source, media: Media, error?: GLib.Error | null): void;
    }
    interface SourceResolveCb {
        (source: Source, operation_id: number, media: Media, error?: GLib.Error | null): void;
    }
    interface SourceResultCb {
        (source: Source, operation_id: number, media: Media | null, remaining: number, error?: GLib.Error | null): void;
    }
    interface SourceStoreCb {
        (source: Source, media: Media, failed_keys: KeyID[], error?: GLib.Error | null): void;
    }
    /**
     * Resolution flags
     */
    enum ResolutionFlags {
        /**
         * Normal mode.
         */
        NORMAL,
        /**
         * Try other plugins if necessary.
         */
        FULL,
        /**
         * Use idle loop to relay results.
         */
        IDLE_RELAY,
        /**
         * Only resolve fast metadata keys.
         */
        FAST_ONLY,
    }
    enum SupportedMedia {
        /**
         * no media
         */
        NONE,
        /**
         * audio media
         */
        AUDIO,
        /**
         * video media
         */
        VIDEO,
        /**
         * image media
         */
        IMAGE,
        /**
         * any media
         */
        ALL,
    }
    /**
     * Bitwise flags which reflect the kind of operations that a
     * #GrlSource supports.
     */
    enum SupportedOps {
        /**
         * no operation is supported
         */
        NONE,
        /**
         * Fetch specific keys of metadata based on other metadata.
         */
        RESOLVE,
        /**
         * Retrieve complete sets of #GrlMedia
         */
        BROWSE,
        /**
         * Look up for #GrlMedia given a search text
         */
        SEARCH,
        /**
         * Look up for #GrlMedia give a service specific query
         */
        QUERY,
        /**
         * Store content in a service
         */
        STORE,
        /**
         * Store content as child of a certian parent category.
         */
        STORE_PARENT,
        /**
         * Update metadata of a #GrlMedia in a service.
         */
        STORE_METADATA,
        /**
         * Remove content from a service.
         */
        REMOVE,
        /**
         * Create a #GrlMedia instance from an URI
         * representing a media resource.
         */
        MEDIA_FROM_URI,
        /**
         * Notify about changes in the #GrlSource.
         */
        NOTIFY_CHANGE,
    }
    /**
     * Type of media to allow.
     */
    enum TypeFilter {
        /**
         * allow no content (only containers)
         */
        NONE,
        /**
         * allow audio content
         */
        AUDIO,
        /**
         * allow video content
         */
        VIDEO,
        /**
         * allow image content
         */
        IMAGE,
        /**
         * allow any type of content
         */
        ALL,
    }
    /**
     * Flags for writing operations.
     */
    enum WriteFlags {
        /**
         * Normal mode.
         */
        NORMAL,
        /**
         * Try other plugins if necessary.
         */
        FULL,
    }
    module Caps {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Caps extends GObject.Object {
        static $gtype: GObject.GType<Caps>;

        // Constructors of Grl.Caps

        constructor(properties?: Partial<Caps.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Caps;

        // Own methods of Grl.Caps

        get_key_filter(): KeyID[];
        get_key_range_filter(): KeyID[];
        get_type_filter(): TypeFilter;
        /**
         * Checks if `key` is supported for filtering in `caps`.
         * @param key a #GrlKeyID
         * @returns %TRUE if @key can be used for filtering
         */
        is_key_filter(key: KeyID): boolean;
        /**
         * Checks if `key` is supported for filtering by range in `caps`.
         * @param key a #GrlKeyID
         * @returns %TRUE if @key can be used for filtering
         */
        is_key_range_filter(key: KeyID): boolean;
        set_key_filter(keys: KeyID[]): void;
        set_key_range_filter(keys: KeyID[]): void;
        /**
         * Sets the supported filter capability.
         * @param filter a #GrlTypeFilter
         */
        set_type_filter(filter: TypeFilter): void;
        /**
         * Checks whether (`key,` `value)` are authorized by `caps`.
         * @param key a key to test
         * @param value the value corresponding to @key to test against @caps
         * @returns %TRUE if (@key, @value) obey to @caps, %FALSE otherwise.
         */
        test_option(key: string, value: GObject.Value): boolean;
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

        static ['new'](plugin: string, source?: string | null): Config;

        // Own methods of Grl.Config

        get_api_key(): string;
        get_api_key_blob(size: number): number;
        get_api_secret(): string;
        get_api_token(): string;
        get_api_token_secret(): string;
        /**
         * Gets the value of `param` encoded as base64. If `size` is not %NULL, it puts
         * there the size of the value.
         * @param param a binary type parameter
         * @param size place for size of value
         * @returns @param value
         */
        get_binary(param: string, size?: number | null): number;
        get_boolean(param: string): boolean;
        get_float(param: string): number;
        get_int(param: string): number;
        get_password(): string;
        get_plugin(): string;
        get_source(): string;
        get_string(param: string): string;
        get_username(): string;
        has_param(param: string): boolean;
        /**
         * Set `param` `value`.
         * @param param a parameter
         * @param value value
         */
        set(param: string, value: GObject.Value): void;
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
        /**
         * Set the webservice API token secret in the configuration
         * (Needed by OAuth)
         * @param secret the API token
         */
        set_api_token_secret(secret: string): void;
        /**
         * Set `param` value.
         * @param param a binary type parameter
         * @param blob a base64 encoded binary value
         * @param size size of @value
         */
        set_binary(param: string, blob: number, size: number): void;
        /**
         * Set `param` `value`.
         * @param param a boolean type parameter
         * @param value a value
         */
        set_boolean(param: string, value: boolean): void;
        /**
         * Set `param` `value`.
         * @param param a float type parameter
         * @param value a value
         */
        set_float(param: string, value: number): void;
        /**
         * Set `param` `value`.
         * @param param an integer type parameter
         * @param value a value
         */
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
         * Set the source key in the configuration
         * @param source the source id
         */
        set_source(source: string): void;
        /**
         * Set `param` `value`.
         * @param param a string type parameter
         * @param value a value
         */
        set_string(param: string, value: string): void;
        /**
         * Set the username in the configuration
         * @param username the username
         */
        set_username(username: string): void;
    }

    module Data {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Data extends GObject.Object {
        static $gtype: GObject.GType<Data>;

        // Constructors of Grl.Data

        constructor(properties?: Partial<Data.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Data;

        // Own methods of Grl.Data

        /**
         * Appends a new binary value for `key` in `data`.
         * @param key key to append
         * @param buf the buffer containing the new value
         * @param size size of buffer
         */
        add_binary(key: KeyID, buf: number, size: number): void;
        /**
         * Appends a new boxed value for `key` in `data`.
         * @param key key to append
         * @param boxed the new value
         */
        add_boxed(key: KeyID, boxed?: any | null): void;
        /**
         * Appends a new float value for `key` in `data`.
         * @param key key to append
         * @param floatvalue the new value
         */
        add_float(key: KeyID, floatvalue: number): void;
        /**
         * Appends the value associated with `key_name` to `data`. This `key_name` is used to create
         * a new #GParamSpec instance, which is further used to create and register a key using
         * grl_registry_register_metadata_key().
         *
         * A property key_name consists of segments consisting of ASCII letters and
         * digits, separated by either the '-' or '_' character. The first
         * character of a property key_name must be a letter. Key_names which violate these
         * rules lead to undefined behaviour.
         * @param key_name name of the key to change or add
         * @param value the new value
         * @returns TRUE if @value was added to @key_name, FALSE otherwise.
         */
        add_for_id(key_name: string, value: GObject.Value): boolean;
        /**
         * Appends a new int value for `key` in `data`.
         * @param key key to append
         * @param intvalue the new value
         */
        add_int(key: KeyID, intvalue: number): void;
        /**
         * Appends a new int64 value for `key` in `data`.
         * @param key key to append
         * @param intvalue the new value
         */
        add_int64(key: KeyID, intvalue: number): void;
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
        add_string(key: KeyID, strvalue: string): void;
        /**
         * Makes a deep copy of `data` and all its contents.
         * @returns a new #GrlData. Free it with #g_object_unref.
         */
        dup(): Data;
        /**
         * Get the first value from `data` associated with `key`.
         * @param key key to look up.
         * @returns a #GValue. This value should not be modified nor freed by user.
         */
        get(key: KeyID): GObject.Value;
        /**
         * Returns the first binary value associated with `key` from `data`. If `key` has
         * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
         * is returned.
         * @param key key to use
         * @returns buffer location associated with the @key, or %NULL in other case. If successful @size will be set the to the buffer size.
         */
        get_binary(key: KeyID): [number, number];
        get_boolean(key: KeyID): boolean;
        /**
         * Returns the first boxed value associated with `key` from `data`. If `key` has
         * no first value, that value is not of a boxed type, or `key` is not in `data,`
         * then %NULL is returned.
         * @param key key to use
         * @returns the boxed instance associated with @key if possible, or %NULL in other cases. The caller should not change nor free the value.
         */
        get_boxed(key: KeyID): any | null;
        /**
         * Returns the first float value associated with `key` from `data`. If `key` has no
         * first value, or value is not a gfloat, or `key` is not in data, then 0 is
         * returned.
         * @param key key to use
         * @returns float value associated with @key, or 0 in other case.
         */
        get_float(key: KeyID): number;
        /**
         * Returns the first int value associated with `key` from `data`. If `key` has no
         * first value, or value is not a gint, or `key` is not in data, then 0 is
         * returned.
         * @param key key to use
         * @returns int value associated with @key, or 0 in other case.
         */
        get_int(key: KeyID): number;
        /**
         * Returns the first int64 value associated with `key` from `data`. If `key` has no
         * first value, or value is not a gint, or `key` is not in data, then 0 is
         * returned.
         * @param key key to use
         * @returns int value associated with @key, or 0 in other case.
         */
        get_int64(key: KeyID): number;
        /**
         * Returns a list with keys contained in `data`.
         * @returns an array with the keys. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
         */
        get_keys(): KeyID[];
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
         * @param key a metadata key
         * @returns a #GList with values. Do not change or free the values. Free the list with #g_list_free.
         */
        get_single_values_for_key(key: KeyID): GObject.Value[];
        /**
         * Returns all non-%NULL values for `key` from `data`. `key` must have been
         * registered as a string-type key. This ignores related keys.
         * @param key a metadata key
         * @returns a #GList with values. Do not change or free the strings. Free the list with #g_list_free.
         */
        get_single_values_for_key_string(key: KeyID): string[];
        /**
         * Returns the first string value associated with `key` from `data`. If `key` has
         * no first value, or value is not string, or `key` is not in `data,` then %NULL
         * is returned.
         * @param key key to use
         * @returns string associated with @key, or %NULL in other case. Caller should not change nor free the value.
         */
        get_string(key: KeyID): string;
        /**
         * Checks if `key` is in `data`.
         * @param key key to search
         * @returns %TRUE if @key is in @data, %FALSE in other case.
         */
        has_key(key: KeyID): boolean;
        /**
         * Returns how many values `key` or related keys have in `data:` if `key` has no
         * value, but a related key has, then it is counted as positive.
         *
         * As example, let's think in three related keys, K1, K2 and K3, and then thinks
         * we have added several values for those keys, as:
         *
         *   (V10, V20, V30), (V11, NULL, V31), (V12, NULL, V32)
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
        remove(key: KeyID): void;
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
        set(key: KeyID, value: GObject.Value): void;
        set(...args: never[]): any;
        /**
         * Sets the first binary value associated with `key` in `data`. If `key` already
         * has a first value old value is replaced by the new one.
         * @param key key to change or add
         * @param buf buffer holding the data
         * @param size size of the buffer
         */
        set_binary(key: KeyID, buf: number, size: number): void;
        /**
         * Sets the first boolean value associated with `key` in `data`. If `key` already
         * has a first value, old value is replaced by the new one.
         * @param key key to change or add
         * @param boolvalue the new value
         */
        set_boolean(key: KeyID, boolvalue: boolean): void;
        /**
         * Sets the first boxed value associated with `key` in `data`. If `key` already
         * has a value, the old value is freed and the new one is set.
         * @param key key to change or add
         * @param boxed the new value
         */
        set_boxed(key: KeyID, boxed?: any | null): void;
        /**
         * Sets the first float value associated with `key` in `data`. If `key` already has
         * a first value old value is replaced by the new one.
         * @param key key to change or add
         * @param floatvalue the new value
         */
        set_float(key: KeyID, floatvalue: number): void;
        /**
         * Sets the first value associated with `key_name` in `data`. This `key_name` is used to create
         * a new #GParamSpec instance, which is further used to create and register a key using
         * grl_registry_register_metadata_key(). If `key_name` already has a first `value,` old
         * value is replaced by the new one.
         *
         * A property key_name consists of segments consisting of ASCII letters and
         * digits, separated by either the '-' or '_' character. The first
         * character of a property key_name must be a letter. Key_names which violate these
         * rules lead to undefined behaviour.
         * @param key_name name of the key to change or add
         * @param value the new value
         * @returns TRUE if @value was set to @key_name, FALSE otherwise.
         */
        set_for_id(key_name: string, value: GObject.Value): boolean;
        /**
         * Sets the first int value associated with `key` in `data`. If `key` already has a
         * first value old value is replaced by the new one.
         * @param key key to change or add
         * @param intvalue the new value
         */
        set_int(key: KeyID, intvalue: number): void;
        /**
         * Sets the first int64 value associated with `key` in `data`. If `key` already has a
         * first value old value is replaced by the new one.
         * @param key key to change or add
         * @param intvalue the new value
         */
        set_int64(key: KeyID, intvalue: number): void;
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
        set_string(key: KeyID, strvalue: string): void;
    }

    module Media {
        // Constructor properties interface

        interface ConstructorProps extends Data.ConstructorProps {
            media_type: MediaType;
            mediaType: MediaType;
        }
    }

    class Media extends Data {
        static $gtype: GObject.GType<Media>;

        // Own properties of Grl.Media

        get media_type(): MediaType;
        set media_type(val: MediaType);
        get mediaType(): MediaType;
        set mediaType(val: MediaType);

        // Constructors of Grl.Media

        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static audio_new(): Media;

        static container_new(): Media;

        static image_new(): Media;

        static ['new'](): Media;

        static video_new(): Media;

        // Own static methods of Grl.Media

        /**
         * Unserializes a GrlMedia.
         * @param serial a serialized media
         */
        static unserialize(serial: string): Media;

        // Own methods of Grl.Media

        /**
         * Adds a new artist to `media`.
         * @param artist an audio's artist
         */
        add_artist(artist: string): void;
        /**
         * Adds a new author to `media`.
         * @param author an author for @media
         */
        add_author(author: string): void;
        /**
         * Adds the director of the media
         * @param director director of the movie
         */
        add_director(director: string): void;
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
         * Adds a new genre to `media`.
         * @param genre an audio's genre
         */
        add_genre(genre: string): void;
        /**
         * Adds the keyword describing the `media`.
         * @param keyword a keyword describing the media
         */
        add_keyword(keyword: string): void;
        /**
         * Adds a new lyrics to `media`.
         * @param lyrics an audio's lyrics
         */
        add_lyrics(lyrics: string): void;
        /**
         * Adds a new MusicBrainz artist id to `media`.
         * @param mb_artist_id a MusicBrainz artist identifier
         */
        add_mb_artist_id(mb_artist_id: string): void;
        /**
         * Adds the actor performing in the movie.
         * @param performer an actor performing in the movie
         */
        add_performer(performer: string): void;
        /**
         * Adds the producer of the media.
         * @param producer producer of the movie
         */
        add_producer(producer: string): void;
        /**
         * Adds regional publication and certification information for `region`.
         * @param region the region's ISO-3166-1 code
         * @param publication_date the publication date
         * @param certificate the age certification
         */
        add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void;
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
         * Sets all the keys related with the URL of a media resource and adds it to
         * `media` (useful for resources with more than one URL).
         * @param url a media's URL
         * @param mime th @url mime type
         * @param bitrate the @url bitrate, or -1 to ignore
         * @param framerate media framerate, or -1 to ignore
         * @param width media width, or -1 to ignore
         * @param height media height, or -1 to ignore
         */
        add_url_data(
            url: string,
            mime: string,
            bitrate: number,
            framerate: number,
            width: number,
            height: number,
        ): void;
        get_album(): string;
        get_album_artist(): string;
        get_album_disc_number(): number;
        get_artist(): string;
        get_artist_nth(index: number): string;
        get_author(): string;
        get_author_nth(index: number): string;
        get_bitrate(): number;
        get_camera_model(): string;
        /**
         * Returns the media's first age certificate.
         * This should usually be the media's most relevant
         * age certificate. Use grl_media_get_region_data_nth() to
         * get other age certificates.
         * @returns the media's age certification
         */
        get_certificate(): string;
        /**
         * Number of children of this container.
         * @returns number of children, or #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if unknown.
         */
        get_childcount(): number;
        get_composer(): string;
        get_composer_nth(index: number): string;
        get_creation_date(): GLib.DateTime;
        get_description(): string;
        get_director(): string;
        get_director_nth(index: number): string;
        get_duration(): number;
        get_episode(): number;
        get_episode_title(): string;
        get_exposure_time(): number;
        get_external_url(): string;
        get_external_url_nth(index: number): string;
        get_favourite(): boolean;
        get_flash_used(): string;
        get_framerate(): number;
        get_genre(): string;
        get_genre_nth(index: number): string;
        get_height(): number;
        get_id(): string;
        get_iso_speed(): number;
        get_keyword(): string;
        get_keyword_nth(index: number): string;
        get_last_played(): GLib.DateTime;
        get_last_position(): number;
        get_license(): string;
        get_lyrics(): string;
        get_lyrics_nth(index: number): string;
        get_mb_album_id(): string;
        get_mb_artist_id(): string;
        get_mb_artist_id_nth(index: number): string;
        get_mb_recording_id(): string;
        get_mb_release_group_id(): string;
        get_mb_release_id(): string;
        get_mb_track_id(): string;
        /**
         * Gets the "media-type" property.
         * @returns media type
         */
        get_media_type(): MediaType;
        get_mime(): string;
        get_modification_date(): GLib.DateTime;
        get_orientation(): number;
        get_original_title(): string;
        get_performer(): string;
        get_performer_nth(index: number): string;
        get_play_count(): number;
        get_player(): string;
        get_player_nth(index: number): string;
        get_producer(): string;
        get_producer_nth(index: number): string;
        get_publication_date(): GLib.DateTime;
        get_rating(): number;
        get_region(): string;
        /**
         * Returns the media's age certificate and publication date for the first region.
         * This should usually be the media's most relevant region.
         * Use grl_media_get_region_data_nth() to get the age certificate and
         * publication date for other regions.
         * @returns the ISO-3166-1 of the region where the media was published (owned by @media).
         */
        get_region_data(): [string, GLib.DateTime, string];
        /**
         * Returns the media's age certificate and publication date for one region.
         * Use grl_data_length() with GRL_METADATA_KEY_REGION to discover
         * how many regions are available. For instance:
         * <informalexample>
         * <programlisting role="C"><![CDATA[
         * guint count = grl_data_length (GRL_DATA (media), GRL_METADATA_KEY_REGION);
         * guint i;
         * for (i = 0; i < count; ++i) {
         *   const GDateTime* publication_date = NULL;
         *   const gchar* certificate = NULL;
         *   const gchar* region =
         *     grl_media_get_region_data_nth (media, i,
         *       &publication_date, &certificate);
         *   ...
         * }
         * ]]></programlisting>
         * </informalexample>
         * @param index element to retrieve
         * @returns the ISO-3166-1 of the region where the media was published (owned by @media).
         */
        get_region_data_nth(index: number): [string, GLib.DateTime, string];
        get_season(): number;
        get_show(): string;
        get_site(): string;
        get_size(): number;
        get_source(): string;
        get_start_time(): number;
        get_studio(): string;
        get_thumbnail(): string;
        get_thumbnail_binary(size: number): number;
        get_thumbnail_binary_nth(size: number, index: number): number;
        get_thumbnail_nth(index: number): string;
        get_title(): string;
        get_track_number(): number;
        get_url(): string;
        get_url_data(framerate: number, width: number, height: number): [string, string, number];
        get_url_data_nth(index: number, framerate: number, width: number, height: number): [string, string, number];
        get_width(): number;
        /**
         * Check if `media` is an audio
         * @returns %TRUE if @media is an audio
         */
        is_audio(): boolean;
        /**
         * Check if `media` is a container
         * @returns %TRUE if @media is a container
         */
        is_container(): boolean;
        /**
         * Check if `media` is an image
         * @returns %TRUE if @media is an image
         */
        is_image(): boolean;
        /**
         * Check if `media` is a video
         * @returns %TRUE if @media is a video
         */
        is_video(): boolean;
        /**
         * Serializes a GrlMedia into a string. It does a basic serialization.
         *
         * See grl_media_serialize_extended() to get more serialization approaches.
         * @returns serialized media
         */
        serialize(): string;
        /**
         * Set the album of the media
         * @param album the audio's album
         */
        set_album(album: string): void;
        /**
         * Set the main artist of the album of the media
         * @param album_artist the audio's album main artist
         */
        set_album_artist(album_artist: string): void;
        /**
         * Set the disc number of the media for multi-disc album sets.
         * @param disc_number the disc number within an album
         */
        set_album_disc_number(disc_number: number): void;
        /**
         * Set the artist of the media
         * @param artist the audio's artist
         */
        set_artist(artist: string): void;
        /**
         * Set the media's author
         * @param author the media's author
         */
        set_author(author: string): void;
        /**
         * Set the bitrate of the media
         * @param bitrate the audio's bitrate
         */
        set_bitrate(bitrate: number): void;
        /**
         * Set the camera_model of the media
         * @param camera_model model of camera used to take picture
         */
        set_camera_model(camera_model: string): void;
        /**
         * Set the media's first age certification.
         * This should usually be the media's most relevant
         * age certificate. Use grl_media_set_region_data() to
         * set other age certificates.
         * @param certificate The age certificate of the media
         */
        set_certificate(certificate: string): void;
        /**
         * Sets the number of children of this container. Use
         * #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if it is unknown.
         * @param childcount number of children
         */
        set_childcount(childcount: number): void;
        /**
         * Set the composer of the media
         * @param composer the audio's composer
         */
        set_composer(composer: string): void;
        /**
         * Set the creation_date of the media
         * @param creation_date date when media was created
         */
        set_creation_date(creation_date: GLib.DateTime): void;
        /**
         * Set the media's description
         * @param description the description
         */
        set_description(description: string): void;
        /**
         * Sets the director of the media.
         * @param director director of the movie
         */
        set_director(director: string): void;
        /**
         * Set the media's duration
         * @param duration the duration in seconds
         */
        set_duration(duration: number): void;
        /**
         * Sets the episode number of the media
         * @param episode the video's episode
         */
        set_episode(episode: number): void;
        /**
         * Sets the title of an media
         * @param episode_title the title of the episode
         */
        set_episode_title(episode_title: string): void;
        /**
         * Set the exposure_time of the media
         * @param exposure_time picture's exposure time
         */
        set_exposure_time(exposure_time: number): void;
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
         * Set if the media is favourite or not
         * @param favourite whether the item is favourite or not
         */
        set_favourite(favourite: boolean): void;
        /**
         * Set the flash_used of the media
         * See
         * http://library.gnome.org/devel/ontology/unstable/nmm-classes.html#nmm-Flash
         * @param flash_used whether the flash was used
         */
        set_flash_used(flash_used: string): void;
        /**
         * Set the framerate of the media
         * @param framerate the video's framerate
         */
        set_framerate(framerate: number): void;
        /**
         * Set the genre of the media
         * @param genre the audio's genre
         */
        set_genre(genre: string): void;
        /**
         * Set the height of the media
         * @param height the video's height
         */
        set_height(height: number): void;
        /**
         * Set the media identifier
         * @param id the identifier of the media
         */
        set_id(id: string): void;
        /**
         * Set the iso_speed of the media
         * @param iso_speed picture's iso speed
         */
        set_iso_speed(iso_speed: number): void;
        /**
         * Sets the keyword describing the `media`.
         * @param keyword a keyword describing the media
         */
        set_keyword(keyword: string): void;
        /**
         * Set the media last played date
         * @param last_played date when the media was last played
         */
        set_last_played(last_played: GLib.DateTime): void;
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
         * Set the lyrics of the media
         * @param lyrics the audio's lyrics
         */
        set_lyrics(lyrics: string): void;
        /**
         * Set the MusicBrainz album identifier of the media
         * @param mb_album_id the MusicBrainz album identifier
         */
        set_mb_album_id(mb_album_id: string): void;
        /**
         * Set the MusicBrainz artist identifier of the media
         * @param mb_artist_id the MusicBrainz artist identifier
         */
        set_mb_artist_id(mb_artist_id: string): void;
        /**
         * Set the MusicBrainz recording identifier of the media
         * @param mb_recording_id the MusicBrainz recording identifier
         */
        set_mb_recording_id(mb_recording_id: string): void;
        /**
         * Set the MusicBrainz Release Group identifier of the media
         * @param mb_release_group_id Album group release identifier in MusicBrainz
         */
        set_mb_release_group_id(mb_release_group_id: string): void;
        /**
         * Set the MusicBrainz release identifier of the media
         * @param mb_release_id Album release identifier in MusicBrainz
         */
        set_mb_release_id(mb_release_id: string): void;
        /**
         * Set the MusicBrainz track identifier of the media
         * @param mb_track_id the MusicBrainz track identifier
         */
        set_mb_track_id(mb_track_id: string): void;
        /**
         * Set the media's mime-type
         * @param mime the mime type
         */
        set_mime(mime: string): void;
        /**
         * Set the modification date of the media
         * @param modification_date date when the media was last modified
         */
        set_modification_date(modification_date: GLib.DateTime): void;
        /**
         * Set the orientation of the media
         * @param orientation degrees clockwise orientation of the picture
         */
        set_orientation(orientation: number): void;
        /**
         * Sets the original, untranslated title of the media.
         * @param original_title original, untranslated title of the movie
         */
        set_original_title(original_title: string): void;
        /**
         * Sets the actor performing in the movie.
         * @param performer an actor performing in the movie
         */
        set_performer(performer: string): void;
        /**
         * Set the media play count
         * @param play_count the play count
         */
        set_play_count(play_count: number): void;
        /**
         * Sets the producer of the media.
         * @param producer producer of the movie
         */
        set_producer(producer: string): void;
        /**
         * Set the publication date of `media`.
         * @param date the date
         */
        set_publication_date(date: GLib.DateTime): void;
        /**
         * This method receives a rating and its scale and normalizes it on a scale
         * from 0...5 to match the usual five-star rating.
         * @param rating a rating value
         * @param max maximum rating value
         */
        set_rating(rating: number, max: number): void;
        /**
         * Sets the `region` where `media` was published.
         * @param region the region's ISO-3166-1 code
         */
        set_region(region: string): void;
        /**
         * Sets regional publication and certification information for `region`.
         * @param region the region's ISO-3166-1 code
         * @param publication_date the publication date
         * @param certificate the age certification
         */
        set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void;
        /**
         * Sets the season number of the media
         * @param season the video's season
         */
        set_season(season: number): void;
        /**
         * Sets the show title of the media
         * @param show the video's show name
         */
        set_show(show: string): void;
        /**
         * Set the media's site. A site is a website about the media such as a
         * studio's promotional website for a movie.
         * @param site the site
         */
        set_site(site: string): void;
        /**
         * Set the size of the media
         * @param size the size in bytes
         */
        set_size(size: number): void;
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
         * Set the track number of the media
         * @param track_number the audio's track number
         */
        set_track_number(track_number: number): void;
        /**
         * Set the media's URL
         * @param url the media's URL
         */
        set_url(url: string): void;
        /**
         * Sets all the keys related with the URL of a media resource in one go.
         * @param url the media's URL
         * @param mime the @url mime type
         * @param bitrate the @url bitrate, or -1 to ignore
         * @param framerate media framerate, or -1 to ignore
         * @param width media width, or -1 to ignore
         * @param height media height, or -1 to ignore
         */
        set_url_data(
            url: string,
            mime: string,
            bitrate: number,
            framerate: number,
            width: number,
            height: number,
        ): void;
        /**
         * Set the width of the media
         * @param width the video's width
         */
        set_width(width: number): void;
    }

    module OperationOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class OperationOptions extends GObject.Object {
        static $gtype: GObject.GType<OperationOptions>;

        // Constructors of Grl.OperationOptions

        constructor(properties?: Partial<OperationOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](caps?: Caps | null): OperationOptions;

        // Own methods of Grl.OperationOptions

        copy(): OperationOptions;
        /**
         * Get the count option, that is, the number of elements to retrieve in an
         * operation done with `options`.
         * @returns the value of the count option, or a default value if it is not set.
         */
        get_count(): number;
        get_key_filter(key: KeyID): GObject.Value;
        get_key_filter_list(): KeyID[];
        /**
         * Stores the limits of the range in the filter for `key` in `min_value` and
         * `max_value`. If some of the values has no limit, it will set a %NULL.
         * @param key a #GrlKeyID
         */
        get_key_range_filter(key: KeyID): [GObject.Value | null, GObject.Value | null];
        get_key_range_filter_list(): KeyID[];
        get_resolution_flags(): ResolutionFlags;
        /**
         * Get the skip option, that is, the number of elements to skip before
         * retrieving media items in an operation done with `options`.
         * @returns the value of the skip option, or a default value if it is not set.
         */
        get_skip(): number;
        get_type_filter(): TypeFilter;
        /**
         * Check whether `options` obey to `caps`.
         * Optionally provide the options that match (respectively don't match) `caps`
         * in `supported_options` (respectively `unsupported_options)`.
         * This would typically (but not necessarily) be used with a
         * #GrlOperationOptions instance that was created with %NULL caps.
         * @param caps capabilities against which we want to test @options
         * @returns %TRUE if @options obey to @caps, %FALSE otherwise.
         */
        obey_caps(caps: Caps): [boolean, OperationOptions, OperationOptions];
        /**
         * Set the count option for an operation. Will only succeed if `count` obey to
         * the inherent capabilities of `options`.
         * @param count number of elements to retrieve in an operation
         * @returns %TRUE if @count could be set, %FALSE otherwise.
         */
        set_count(count: number): boolean;
        set_key_filters(filters: GLib.HashTable<KeyID, GObject.Value>): boolean;
        /**
         * Set filter as "`key` == `value"`.
         * @param key a #GrlKeyID
         * @param value a #GValue
         * @returns %TRUE on success
         */
        set_key_filter_value(key: KeyID, value: GObject.Value): boolean;
        /**
         * Set filter as "`min_value` <= `key` <= `max_value"`.
         *
         * If `min_value` is %NULL, then filter is "`key` <= `max_value"`.
         *
         * If `max_value` is %NULL, then filter is "`key` >= `min_value"`.
         *
         * Note that `key` will always respect the limits defined at creation time.
         * e.g: Core's GRL_METADATA_KEY_ORIENTATION has "max = 359" and "min = 0",
         * user can set "`max_value` = 180" but "`max_value` = 720" would be ignored.
         * @param key a #GrlKeyID
         * @param min_value minimum value for range
         * @param max_value maximum value for range
         * @returns %TRUE on success
         */
        set_key_range_filter_value(
            key: KeyID,
            min_value?: GObject.Value | null,
            max_value?: GObject.Value | null,
        ): boolean;
        /**
         * Set the resolution flags for an operation. Will only succeed if `flags` obey
         * to the inherent capabilities of `options`.
         * @param flags the resolution flags to be set for an operation. See #GrlResolutionFlags for possible values.
         * @returns %TRUE if @flags could be set, %FALSE otherwise.
         */
        set_resolution_flags(flags: ResolutionFlags): boolean;
        /**
         * Set the skip option for an operation. Will only succeed if `skip` obeys to the
         * inherent capabilities of `options`.
         * @param skip number of elements to skip in an operation
         * @returns %TRUE if @skip could be set, %FALSE otherwise.
         */
        set_skip(skip: number): boolean;
        /**
         * Set the type of media filter for an operation. Only those media elements that
         * match the `filter` will be returned. Will only succeed if `filter` obey to the
         * inherent capabilities of `options`.
         * @param filter the type of media to get
         * @returns %TRUE if @flags could be set, %FALSE otherwise
         */
        set_type_filter(filter: TypeFilter): boolean;
    }

    module Plugin {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            loaded: boolean;
        }
    }

    class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;

        // Own properties of Grl.Plugin

        /**
         * `TRUE` if plugin is loaded.
         */
        get loaded(): boolean;

        // Constructors of Grl.Plugin

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Grl.Plugin

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
         * Get the license of the plugin
         * @returns the license of the @plugin
         */
        get_license(): string;
        /**
         * Get the plugin module name
         * @returns the module name containing @plugin
         */
        get_module_name(): string;
        /**
         * Get the name of the plugin
         * @returns the name of the @plugin
         */
        get_name(): string;
        /**
         * Get the site of the plugin
         * @returns the site of the @plugin
         */
        get_site(): string;
        /**
         * Gets the sources belonging to `plugin`.
         * @returns a #GList of #GrlSource<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
         */
        get_sources(): Source[];
        /**
         * Get the version of the plugin
         * @returns the version of the @plugin
         */
        get_version(): string;
    }

    module Registry {
        // Signal callback interfaces

        interface MetadataKeyAdded {
            (key: string): void;
        }

        interface SourceAdded {
            (source: Source): void;
        }

        interface SourceRemoved {
            (source: Source): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Registry extends GObject.Object {
        static $gtype: GObject.GType<Registry>;

        // Constructors of Grl.Registry

        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Grl.Registry

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'metadata-key-added', callback: (_source: this, key: string) => void): number;
        connect_after(signal: 'metadata-key-added', callback: (_source: this, key: string) => void): number;
        emit(signal: 'metadata-key-added', key: string): void;
        connect(signal: 'source-added', callback: (_source: this, source: Source) => void): number;
        connect_after(signal: 'source-added', callback: (_source: this, source: Source) => void): number;
        emit(signal: 'source-added', source: Source): void;
        connect(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;
        connect_after(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;
        emit(signal: 'source-removed', source: Source): void;

        // Own static methods of Grl.Registry

        /**
         * As the registry is designed to work as a singleton, this
         * method is in charge of creating the only instance or
         * returned it if it is already in memory.
         */
        static get_default(): Registry;

        // Own methods of Grl.Registry

        /**
         * Activate all the plugins loaded.
         * @returns %TRUE if some plugin has been activated
         */
        activate_all_plugins(): boolean;
        /**
         * Activates plugin identified by `plugin_id`.
         * @param plugin_id plugin identifier
         * @returns %TRUE if the plugin is loaded correctly
         */
        activate_plugin_by_id(plugin_id: string): boolean;
        /**
         * Add a configuration for a plugin/source.
         * @param config a configuration set
         * @returns %TRUE on success
         */
        add_config(config: Config): boolean;
        /**
         * Load plugin configurations from a .ini-like config file.
         * @param config_file a key-value file containing the configuration
         * @returns %TRUE on success
         */
        add_config_from_file(config_file: string): boolean;
        /**
         * Load plugin configurations from a .ini-like resource file.
         * @param resource_path a key-value file containing the configuration
         * @returns %TRUE on success
         */
        add_config_from_resource(resource_path: string): boolean;
        /**
         * Set this path as part of default paths to load plugins.
         * @param path a path with plugins
         */
        add_directory(path: string): void;
        /**
         * Returns a list with all registered keys in system.
         * @returns a #GList with all the available #GrlKeyID<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
         */
        get_metadata_keys(): KeyID[];
        /**
         * This function will return all the available plugins in the `registry`.
         *
         * If `only_loaded` is %TRUE, the plugin list will contain only plugins that are
         * loaded.
         * @param only_loaded whether the returned list shall include only loaded plugins
         * @returns a #GList of available #GrlPlugin<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
         */
        get_plugins(only_loaded: boolean): Plugin[];
        /**
         * This function will return all the available sources in the `registry`.
         *
         * If `ranked` is %TRUE, the source list will be ordered by rank.
         * @param ranked whether the returned list shall be returned ordered by rank
         * @returns a #GList of available #GrlSource<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
         */
        get_sources(ranked: boolean): Source[];
        /**
         * Give an array of all the available sources in the `registry` capable of
         * perform the operations requested in `ops`.
         *
         * If `ranked` is %TRUE, the source list will be ordered by rank.
         * @param ops a bitwise mangle of the requested operations.
         * @param ranked whether the returned list shall be returned ordered by rank
         * @returns a #GList of available #GrlSource<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
         */
        get_sources_by_operations(ops: SupportedOps, ranked: boolean): Source[];
        /**
         * Load all the modules available in the default directory path.
         *
         * The default directory path can be changed through the environment
         * variable %GRL_PLUGIN_PATH and it can contain several paths separated
         * by ":"
         * @param activate %TRUE if plugins must be activated after loading
         * @returns %FALSE% is all the configured plugin paths are invalid, %TRUE% otherwise.
         */
        load_all_plugins(activate: boolean): boolean;
        /**
         * Loads a module from shared object file stored in `path`
         * @param library_filename the path to the so file
         * @returns %TRUE if the module is loaded correctly
         */
        load_plugin(library_filename: string): boolean;
        /**
         * Loads a set of modules from directory in `path` which contains
         * a group shared object files.
         * @param path the path to the directory
         * @returns %TRUE if the directory is valid.
         */
        load_plugin_directory(path: string): boolean;
        /**
         * Look up for the metadata key with name `key_name`.
         * @param key_name the key name
         * @returns The metadata key, or GRL_METADATA_KEY_INVALID if not found
         */
        lookup_metadata_key(key_name: string): KeyID;
        /**
         * Returns `key` description.
         * @param key a metadata key
         * @returns metadata key description, or @NULL if not found
         */
        lookup_metadata_key_desc(key: KeyID): string;
        /**
         * Returns `key` name.
         * @param key a metadata key
         * @returns metadata key name, or @NULL if not found
         */
        lookup_metadata_key_name(key: KeyID): string;
        /**
         * Look up the list of keys that have a relation with `key`.
         *
         * `key` is included in that list.
         * @param key a metadata key
         * @returns a #GList of related keys, or @NULL if key is invalid.
         */
        lookup_metadata_key_relation(key: KeyID): KeyID[];
        /**
         * Returns `key` expected value type.
         * @param key a metadata key
         * @returns metadata key type, or @G_TYPE_INVALID if not found
         */
        lookup_metadata_key_type(key: KeyID): GObject.GType;
        /**
         * This function will search and retrieve a plugin given its identifier.
         * @param plugin_id the id of a plugin
         * @returns The plugin found
         */
        lookup_plugin(plugin_id: string): Plugin;
        /**
         * This function will search and retrieve a source given its identifier.
         * @param source_id the id of a source
         * @returns The source found.
         */
        lookup_source(source_id: string): Source;
        /**
         * Validates `value` content complies with the key specification. That is, it has
         * the expected type, and value are within the range specified in key (for
         * integer values).
         * @param key a metadata key
         * @param value value to be validate
         * @returns %TRUE if complies
         */
        metadata_key_validate(key: KeyID, value: GObject.Value): boolean;
        /**
         * Registers a new metadata key, creating a relation between the new key and
         * `bind_key`.
         *
         * Two keys are related when the values of both keys are somehow related.
         *
         * One example of a relation would be the one between the URI of a media
         * resource and its mime-type: they are both tied together and one does not make
         * sense without the other.
         *
         * Relations between keys allow the framework to provide all the data that is
         * somehow related when any of the related keys are requested.
         * @param param_spec The definition of the key to register
         * @param bind_key The key the new key is bind to, or #GRL_METADATA_KEY_INVALID if it is not bound.
         * @returns The #GrlKeyID registered.
         */
        register_metadata_key(param_spec: GObject.ParamSpec, bind_key: KeyID): KeyID;
        /**
         * Register a `source` in the `registry` with the given `plugin` information
         * @param plugin the plugin which owns the source
         * @param source the source to register
         * @returns %TRUE if success, %FALSE% otherwise.
         */
        register_source(plugin: Plugin, source: Source): boolean;
        /**
         * Unload from memory a module identified by `plugin_id`. This means call the
         * module's deinit function.
         * @param plugin_id the identifier of the plugin
         * @returns %TRUE% on success.
         */
        unload_plugin(plugin_id: string): boolean;
        /**
         * Removes the `source` from the `registry` hash table
         * @param source the source to unregister
         * @returns %TRUE if success, %FALSE% otherwise.
         */
        unregister_source(source: Source): boolean;
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
         * Makes a deep copy of `relkeys` and its contents.
         * @returns a new #GrlRelatedKeys. Free it with #g_object_unref.
         */
        dup(): RelatedKeys;
        /**
         * Get the value associated with `key` from `relkeys`. If it does not contain any
         * value, %NULL will be returned.
         * @param key key to look up.
         * @returns a #GValue. This value should not be modified nor freed by user.
         */
        get(key: KeyID): GObject.Value;
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a binary, or `key` is not in `relkeys,` then 0 is returned.
         * @param key key to use
         * @returns buffer location associated with @key, or %NULL in other case. If successful @size will be set to the buffer size.
         */
        get_binary(key: KeyID): [number, number];
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a gboolean, or `key` is not in `relkeys,` then %FALSE is
         * returned.
         * @param key key to use
         * @returns float value associated with @key, or %FALSE in other case.
         */
        get_boolean(key: KeyID): boolean;
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * the value is not of a boxed type, or `key` is not in `relkeys,` then %NULL is
         * returned.
         * @param key key to use
         * @returns the #GBoxed value associated with @key if possible, or %NULL in other case. The caller should not change nor free the value.
         */
        get_boxed(key: KeyID): any | null;
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a gfloat, or `key` is not in `relkeys,` then 0 is returned.
         * @param key key to use
         * @returns float value associated with @key, or 0 in other case.
         */
        get_float(key: KeyID): number;
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a gint, or `key` is not in `relkeys,` then 0 is returned.
         * @param key key to use
         * @returns int value associated with @key, or 0 in other case.
         */
        get_int(key: KeyID): number;
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not a gint64, or `key` is not in `relkeys,` then 0 is returned.
         * @param key key to use
         * @returns int64 value associated with @key, or 0 in other case.
         */
        get_int64(key: KeyID): number;
        /**
         * Returns a list with keys contained in `relkeys`.
         * @returns a list with the keys. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
         */
        get_keys(): KeyID[];
        /**
         * Returns the value associated with `key` from `relkeys`. If `key` has no value,
         * or value is not string, or `key` is not in `relkeys,` then %NULL is returned.
         * @param key key to use
         * @returns string associated with @key, or %NULL in other case. Caller should not change nor free the value.
         */
        get_string(key: KeyID): string;
        /**
         * Checks if `key` is in `relkeys`.
         * @param key key to search
         * @returns %TRUE if @key is in @relkeys, %FALSE in other case.
         */
        has_key(key: KeyID): boolean;
        /**
         * Removes `key` from `relkeys` set.
         * @param key key to remove
         */
        remove(key: KeyID): void;
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
        set(key: KeyID, value: GObject.Value): void;
        set(...args: never[]): any;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a binary-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param buf buffer holding the relkeys
         * @param size size of the buffer
         */
        set_binary(key: KeyID, buf: number, size: number): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a boolean-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param booleanvalue the new value
         */
        set_boolean(key: KeyID, booleanvalue: boolean): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a boxed-type key. Old value is freed and the new one is set.
         * @param key key to change or add
         * @param boxed the new value
         */
        set_boxed(key: KeyID, boxed?: any | null): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a float-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param floatvalue the new value
         */
        set_float(key: KeyID, floatvalue: number): void;
        /**
         * Sets the value associated with `key_name` in `relkeys`. This `key_name` is used to create
         * a new #GParamSpec instance, which is further used to create and register a key using
         * grl_registry_register_metadata_key(). If `key_name` already has a `value,` old value
         * is replaced by the new one.
         *
         * A property key_name consists of segments consisting of ASCII letters and
         * digits, separated by either the '-' or '_' character. The first
         * character of a property key_name must be a letter. Key_names which violate these
         * rules lead to undefined behaviour.
         * @param key_name name of the key to change or add
         * @param value the new value
         * @returns TRUE if @value was set to @key_name, FALSE otherwise.
         */
        set_for_id(key_name: string, value: GObject.Value): boolean;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as an int-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param intvalue the new value
         */
        set_int(key: KeyID, intvalue: number): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a int64-type key. Old value is replaced by the new one.
         * @param key key to change or add
         * @param intvalue the new value
         */
        set_int64(key: KeyID, intvalue: number): void;
        /**
         * Sets the value associated with `key` into `relkeys`. `key` must have been
         * registered as a strying-type key. Old value is freed and the new one is set.
         * @param key key to change or add
         * @param strvalue the new value
         */
        set_string(key: KeyID, strvalue: string): void;
    }

    module Source {
        // Signal callback interfaces

        interface ContentChanged {
            (changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auto_split_threshold: number;
            autoSplitThreshold: number;
            plugin: Plugin;
            rank: number;
            source_desc: string;
            sourceDesc: string;
            source_icon: Gio.Icon;
            sourceIcon: Gio.Icon;
            source_id: string;
            sourceId: string;
            source_name: string;
            sourceName: string;
            source_tags: string[];
            sourceTags: string[];
            supported_media: SupportedMedia;
            supportedMedia: SupportedMedia;
        }
    }

    abstract class Source extends GObject.Object {
        static $gtype: GObject.GType<Source>;

        // Own properties of Grl.Source

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
        /**
         * Plugin the source belongs to
         */
        get plugin(): Plugin;
        set plugin(val: Plugin);
        /**
         * Source rank
         */
        get rank(): number;
        set rank(val: number);
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
         * #GIcon representing the source
         */
        get source_icon(): Gio.Icon;
        set source_icon(val: Gio.Icon);
        /**
         * #GIcon representing the source
         */
        get sourceIcon(): Gio.Icon;
        set sourceIcon(val: Gio.Icon);
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
        /**
         * A string array of tags relevant this source.
         *
         * The tags are arbitrary, and applications should just pass over the tags
         * it does not understand. Applications would usually use this to either
         * group sources together, or hide certain sources: a radio application
         * would filter for %GRL_MEDIA_TYPE_AUDIO in GrlSource::supported-media as
         * well as "radio" being listed in the tags.
         *
         * To avoid irrelevant content being listed in applications, sources
         * such as generic video sites should not be tagged as "cinema" or
         * "tv" as they contain a lot of content that's not either of those.
         *
         * This is a list of commonly used values:
         *
         * - "cinema", or "tv"
         *   The content served is from cinema or TV sources. For example, a
         *   source for movie trailers would select the former, a source for
         *   streaming live TV would select the latter.
         *
         * - "radio"
         *   The content served is from streaming radios.
         *
         * - "music"
         *   The content served is music, for example, music stores such as
         *   Jamendo or Magnatune.
         *
         * - "country:country-code"
         *   The content is mostly relevant to users from a particular country,
         *   such as a national broadcaster. For example, BBC content would be
         *   tagged as "country:uk". Country codes should be an ISO-639-1 or
         *   ISO-639-2 code.
         *
         * - "protocol:protocol-name"
         *   The content browsing or searching uses a particular protocol, such
         *   as DLNA/UPnP or DMAP/DAAP. This makes it easier to whitelist or
         *   blacklist sources rather than matching the implementation specific
         *   source ID. Examples are "protocol:dlna" and "protocol:dmap".
         *
         * - "localhost", or "localuser"
         *   The content is served from the machine the application is running on,
         *   or by an application the user is running. Applications might choose to
         *   avoid showing the user's own data in their interfaces, or integrate it
         *   in the user's local collection.
         *
         *   "net:local", or "net:internet"
         *   The source requires a connection to the local network, or a connection
         *   to the Internet. Sources with those tags will be automatically hidden
         *   from the application's reach when such networks aren't available, or
         *   we're not connected to a network.
         *
         *   "net:plaintext"
         *   The source makes requests over plain text, non-encrypted, network channels,
         *   such as using HTTP to do searches or lookups. Applications would usually
         *   disable those by default, so that privacy is respected by default, and no
         *   data is leaked unintentionally.
         */
        get source_tags(): string[];
        set source_tags(val: string[]);
        /**
         * A string array of tags relevant this source.
         *
         * The tags are arbitrary, and applications should just pass over the tags
         * it does not understand. Applications would usually use this to either
         * group sources together, or hide certain sources: a radio application
         * would filter for %GRL_MEDIA_TYPE_AUDIO in GrlSource::supported-media as
         * well as "radio" being listed in the tags.
         *
         * To avoid irrelevant content being listed in applications, sources
         * such as generic video sites should not be tagged as "cinema" or
         * "tv" as they contain a lot of content that's not either of those.
         *
         * This is a list of commonly used values:
         *
         * - "cinema", or "tv"
         *   The content served is from cinema or TV sources. For example, a
         *   source for movie trailers would select the former, a source for
         *   streaming live TV would select the latter.
         *
         * - "radio"
         *   The content served is from streaming radios.
         *
         * - "music"
         *   The content served is music, for example, music stores such as
         *   Jamendo or Magnatune.
         *
         * - "country:country-code"
         *   The content is mostly relevant to users from a particular country,
         *   such as a national broadcaster. For example, BBC content would be
         *   tagged as "country:uk". Country codes should be an ISO-639-1 or
         *   ISO-639-2 code.
         *
         * - "protocol:protocol-name"
         *   The content browsing or searching uses a particular protocol, such
         *   as DLNA/UPnP or DMAP/DAAP. This makes it easier to whitelist or
         *   blacklist sources rather than matching the implementation specific
         *   source ID. Examples are "protocol:dlna" and "protocol:dmap".
         *
         * - "localhost", or "localuser"
         *   The content is served from the machine the application is running on,
         *   or by an application the user is running. Applications might choose to
         *   avoid showing the user's own data in their interfaces, or integrate it
         *   in the user's local collection.
         *
         *   "net:local", or "net:internet"
         *   The source requires a connection to the local network, or a connection
         *   to the Internet. Sources with those tags will be automatically hidden
         *   from the application's reach when such networks aren't available, or
         *   we're not connected to a network.
         *
         *   "net:plaintext"
         *   The source makes requests over plain text, non-encrypted, network channels,
         *   such as using HTTP to do searches or lookups. Applications would usually
         *   disable those by default, so that privacy is respected by default, and no
         *   data is leaked unintentionally.
         */
        get sourceTags(): string[];
        set sourceTags(val: string[]);
        /**
         * List of supported media types by this source.
         */
        get supported_media(): SupportedMedia;
        set supported_media(val: SupportedMedia);
        /**
         * List of supported media types by this source.
         */
        get supportedMedia(): SupportedMedia;
        set supportedMedia(val: SupportedMedia);

        // Constructors of Grl.Source

        constructor(properties?: Partial<Source.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Grl.Source

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'content-changed',
            callback: (
                _source: this,
                changed_medias: Media[],
                change_type: SourceChangeType,
                location_unknown: boolean,
            ) => void,
        ): number;
        connect_after(
            signal: 'content-changed',
            callback: (
                _source: this,
                changed_medias: Media[],
                change_type: SourceChangeType,
                location_unknown: boolean,
            ) => void,
        ): number;
        emit(
            signal: 'content-changed',
            changed_medias: Media[],
            change_type: SourceChangeType,
            location_unknown: boolean,
        ): void;

        // Own virtual methods of Grl.Source

        vfunc_browse(bs: SourceBrowseSpec): void;
        vfunc_cancel(operation_id: number): void;
        /**
         * Get the capabilities of `source` for `operation`.
         * @param operation a supported operation. Even though the type allows to specify several operations, only one should be provided here.
         */
        vfunc_get_caps(operation: SupportedOps): Caps;
        /**
         * Checks whether `key_id` may be resolved with `source` for `media,` so that the
         * caller can avoid calling grl_source_resolve() if it can be known in
         * advance it will fail.
         *
         * If the resolution is known to be impossible because more keys are needed in
         * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
         * GrlKeyID that would be needed.
         *
         * This function is synchronous and should not block.
         * @param media a media on which we want more metadata
         * @param key_id the key corresponding to a metadata we might want
         * @param missing_keys an optional originally empty list
         */
        vfunc_may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean;
        vfunc_media_from_uri(mfus: SourceMediaFromUriSpec): void;
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
        vfunc_query(qs: SourceQuerySpec): void;
        vfunc_remove(rs: SourceRemoveSpec): void;
        vfunc_resolve(ms: SourceResolveSpec): void;
        vfunc_search(ss: SourceSearchSpec): void;
        /**
         * Similar to grl_source_supported_keys(), but these keys
         * are marked as slow because of the amount of traffic/processing needed
         * to fetch them.
         */
        vfunc_slow_keys(): KeyID[];
        vfunc_store(ss: SourceStoreSpec): void;
        vfunc_store_metadata(sms: SourceStoreMetadataSpec): void;
        /**
         * Get a list of #GrlKeyID, which describe a metadata types that this
         * source can fetch and store.
         */
        vfunc_supported_keys(): KeyID[];
        vfunc_supported_operations(): SupportedOps;
        /**
         * Tests whether `source` can instantiate a #GrlMedia object representing
         * the media resource exposed at `uri`.
         * @param uri A URI that can be used to identify a media resource
         */
        vfunc_test_media_from_uri(uri: string): boolean;
        /**
         * Similar to grl_source_supported_keys(), but these keys
         * are marked as writable, meaning the source allows the client
         * to provide new values for these keys that will be stored permanently.
         */
        vfunc_writable_keys(): KeyID[];

        // Own methods of Grl.Source

        /**
         * Browse from media elements through an available list.
         *
         * This method is asynchronous.
         * @param container a container of data transfer objects
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options wanted for that operation
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number;
        /**
         * Browse media elements through an available
         * list.
         *
         * This method is synchronous.
         * @param container a container of data transfer objects
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options wanted for that operation
         * @returns a #GList with #GrlMedia elements. After use g_object_unref() every element and g_list_free() the list.
         */
        browse_sync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[];
        /**
         * Gets how much elements the source is able to handle in a single request.
         *
         * See #grl_source_set_auto_split_threshold()
         * @returns the assigned threshold, or 0 if there is no threshold
         */
        get_auto_split_threshold(): number;
        /**
         * Get the capabilities of `source` for `operation`.
         * @param operation a supported operation. Even though the type allows to specify several operations, only one should be provided here.
         * @returns The capabilities
         */
        get_caps(operation: SupportedOps): Caps;
        get_description(): string;
        get_icon(): Gio.Icon;
        get_id(): string;
        /**
         * Creates an instance of #GrlMedia representing the media resource
         * exposed at `uri`.
         *
         * It is recommended to call grl_source_test_media_from_uri() before invoking
         * this to check whether the target source can theoretically do the resolution.
         *
         * This method is asynchronous.
         * @param uri A URI that can be used to identify a media resource
         * @param keys A list of keys to resolve
         * @param options options wanted for that operation
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number;
        /**
         * Creates an instance of #GrlMedia representing the media resource
         * exposed at `uri`.
         *
         * It is recommended to call grl_source_test_media_from_uri() before
         * invoking this to check whether the target source can theoretically do the
         * resolution.
         *
         * This method is synchronous.
         * @param uri A URI that can be used to identify a media resource
         * @param keys a list of keys to resolve
         * @param options options wanted for that operation
         * @returns a filled #GrlMedia
         */
        get_media_from_uri_sync(uri: string, keys: KeyID[], options: OperationOptions): Media;
        get_name(): string;
        get_plugin(): Plugin;
        /**
         * Gets the source rank
         * @returns rank value
         */
        get_rank(): number;
        /**
         * Gets the supported type of medias `source` can deal with.
         * @returns a #GrlSupportedMedia value
         */
        get_supported_media(): SupportedMedia;
        get_tags(): string[];
        /**
         * Checks whether `key_id` may be resolved with `source` for `media,` so that the
         * caller can avoid calling grl_source_resolve() if it can be known in
         * advance it will fail.
         *
         * If the resolution is known to be impossible because more keys are needed in
         * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
         * GrlKeyID that would be needed.
         *
         * This function is synchronous and should not block.
         * @param media a media on which we want more metadata
         * @param key_id the key corresponding to a metadata we might want
         * @param missing_keys an optional originally empty list
         * @returns @TRUE if there's a possibility that @source resolves @key_id for @media, @FALSE otherwise.
         */
        may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean;
        /**
         * Emits "content-changed" signal to notify subscribers that a change ocurred
         * in `source`.
         *
         * See #grl_source_notify_change_list() function.
         *
         * <note>
         *  <para>
         *    This function is intended to be used only by plugins.
         *  </para>
         * </note>
         * @param media the media which has changed, or @NULL to use the root container.
         * @param change_type the type of change
         * @param location_unknown if change has happened in @media or any descendant
         */
        notify_change(media: Media | null, change_type: SourceChangeType, location_unknown: boolean): void;
        /**
         * Emits "content-changed" signal to notify subscribers that a change ocurred
         * in `source`.
         *
         * The function will take ownership of `changed` medias and it should not be
         * manipulated in any way by the caller after invoking this function. If that is
         * needed, the caller must ref the array in advance.
         *
         * See GrlSource::content-changed signal.
         *
         * <note>
         *  <para>
         *    This function is intended to be used only by plugins.
         *  </para>
         * </note>
         * @param changed_medias the list of medias that have changed
         * @param change_type the type of change
         * @param location_unknown if change has happpened in @media or any descendant
         */
        notify_change_list(changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void;
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
         * It is different from grl_source_search() semantically, because the query
         * implies a carefully crafted string, rather than a simple string to search.
         *
         * This method is asynchronous.
         * @param query the query to process
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options wanted for that operation
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number;
        /**
         * Execute a specialized query (specific for each provider) on a media
         * repository.
         *
         * This method is synchronous.
         * @param query the query to process
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options wanted for that operation
         * @returns a #GList with #GrlMedia elements. After use g_object_unref() every element and g_list_free() the list.
         */
        query_sync(query: string, keys: KeyID[], options: OperationOptions): Media[];
        /**
         * Remove a `media` from the `source` repository.
         *
         * This method is asynchronous.
         * @param media a data transfer object
         * @param callback the user defined callback
         */
        remove(media: Media, callback: SourceRemoveCb): void;
        /**
         * Remove a `media` from the `source` repository.
         *
         * This method is synchronous.
         * @param media a data transfer object
         */
        remove_sync(media: Media): void;
        /**
         * This method is intended to fetch the requested keys of metadata of
         * a given `media` to the media source.
         *
         * This method is asynchronous.
         * @param media a data transfer object
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options to pass to this operation
         * @param callback the user defined callback
         * @returns the operation identifie
         */
        resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number;
        /**
         * This method is intended to fetch the requested keys of metadata of
         * a given `media` to the media source.
         *
         * This method is synchronous.
         * @param media a data transfer object
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options to pass to this operation
         * @returns a filled #GrlMedia
         */
        resolve_sync(media: Media | null, keys: KeyID[], options: OperationOptions): Media;
        /**
         * Search for the `text` string in a source for data identified with that string.
         *
         * If `text` is `NULL` then no text filter will be applied, and thus, no media
         * items from `source` will be filtered. If `source` does not support NULL-text
         * search operations it should notiy the client by setting
         * `GRL_CORE_ERROR_SEARCH_NULL_UNSUPPORTED` in `callback'`s error parameter.
         *
         * This method is asynchronous.
         * @param text the text to search
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options wanted for that operation
         * @param callback the user defined callback
         * @returns the operation identifier
         */
        search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number;
        /**
         * Search for the `text` string in a source for data identified with that string.
         *
         * If `text` is `NULL` then no text filter will be applied, and thus, no media
         * items from `source` will be filtered. If `source` does not support NULL-text
         * search operations it should notiy the client by setting
         * `GRL_CORE_ERROR_SEARCH_NULL_UNSUPPORTED` in the error parameter.
         *
         * This method is synchronous.
         * @param text the text to search
         * @param keys the #GList of #GrlKeyID<!-- -->s to request
         * @param options options wanted for that operation
         * @returns a #GList with #GrlMedia elements. After use g_object_unref() every element and g_list_free() the list.
         */
        search_sync(text: string, keys: KeyID[], options: OperationOptions): Media[];
        /**
         * Sets how much elements the source is able to handle in a single request.
         *
         * If user, during a search or browsing operation, asks for more elements than
         * the threshold, the request will be automatically splitted in chunks, so up to
         * `threshold` elements will be asked in each request.
         *
         * Source will act as if user were asking just a chunk, and user won't notice
         * that the request was chunked.
         *
         * <note>
         *  <para>
         *    This function is intended to be used only by plugins.
         *  </para>
         * </note>
         * @param threshold the threshold to set
         */
        set_auto_split_threshold(threshold: number): void;
        /**
         * Similar to grl_source_supported_keys(), but these keys
         * are marked as slow because of the amount of traffic/processing needed
         * to fetch them.
         * @returns a #GList with the keys
         */
        slow_keys(): KeyID[];
        /**
         * Store the `media` into the `parent` container
         *
         * This method is asynchronous.
         * @param parent a parent to store the data transfer objects
         * @param media a data transfer object
         * @param flags flags to configure specific behaviour of the operation
         * @param callback the user defined callback
         */
        store(parent: Media | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void;
        /**
         * Get the values for `keys` from `media` and store it permanently. After
         * calling this method, future queries that return this media object
         * shall return this new values for the selected keys.
         *
         * This function is asynchronous and uses the Glib's main loop.
         * @param media the #GrlMedia object that we want to operate on.
         * @param keys a list of #GrlKeyID whose values we want to change.
         * @param flags Flags to configure specific behaviors of the operation.
         * @param callback the callback to execute when the operation is finished.
         */
        store_metadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void;
        /**
         * Update `keys` values from `media` in the `source`. After calling this method,
         * future queries that return this media object shall return this new value for
         * the selected key.
         *
         * This function is synchronous.
         * @param media the #GrlMedia object that we want to operate on
         * @param keys a list of #GrlKeyID whose values we want to change
         * @param flags Flags to configure specific behaviors of the operation.
         * @returns a #GList of keys that could not be updated, or @NULL
         */
        store_metadata_sync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[];
        /**
         * Store the `media` into the `parent` container.
         *
         * This method is synchronous.
         * @param parent a #GrlMedia container to store the data transfer objects
         * @param media a #GrlMedia data transfer object
         * @param flags flags to configure specific behaviour of the operation
         */
        store_sync(parent: Media | null, media: Media, flags: WriteFlags): void;
        /**
         * Get a list of #GrlKeyID, which describe a metadata types that this
         * source can fetch and store.
         * @returns a #GList with the keys
         */
        supported_keys(): KeyID[];
        /**
         * By default the derived objects of #GrlSource can only resolve.
         * @returns a bitwise mangle with the supported operations by the source
         */
        supported_operations(): number;
        /**
         * Tests whether `source` can instantiate a #GrlMedia object representing
         * the media resource exposed at `uri`.
         * @param uri A URI that can be used to identify a media resource
         * @returns %TRUE if it can, %FALSE otherwise. This method is synchronous.
         */
        test_media_from_uri(uri: string): boolean;
        /**
         * Similar to grl_source_supported_keys(), but these keys
         * are marked as writable, meaning the source allows the client
         * to provide new values for these keys that will be stored permanently.
         * @returns a #GList with the keys
         */
        writable_keys(): KeyID[];
    }

    type CapsClass = typeof Caps;
    abstract class CapsPrivate {
        static $gtype: GObject.GType<CapsPrivate>;

        // Constructors of Grl.CapsPrivate

        _init(...args: any[]): void;
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

        /**
         * Releases `domain`.
         */
        free(): void;
    }

    type MediaClass = typeof Media;
    abstract class MediaPrivate {
        static $gtype: GObject.GType<MediaPrivate>;

        // Constructors of Grl.MediaPrivate

        _init(...args: any[]): void;
    }

    type OperationOptionsClass = typeof OperationOptions;
    abstract class OperationOptionsPrivate {
        static $gtype: GObject.GType<OperationOptionsPrivate>;

        // Constructors of Grl.OperationOptionsPrivate

        _init(...args: any[]): void;
    }

    type PluginClass = typeof Plugin;
    /**
     * This structure is used for the module loader
     */
    class PluginDescriptor {
        static $gtype: GObject.GType<PluginDescriptor>;

        // Own fields of Grl.PluginDescriptor

        major_version: number;
        minor_version: number;
        id: string;
        name: string;
        description: string;
        author: string;
        version: string;
        license: string;
        site: string;
        deinit: PluginDeinitFunc;
        register_keys: PluginRegisterKeysFunc;

        // Constructors of Grl.PluginDescriptor

        _init(...args: any[]): void;
    }

    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;

        // Constructors of Grl.PluginPrivate

        _init(...args: any[]): void;
    }

    class RangeValue {
        static $gtype: GObject.GType<RangeValue>;

        // Constructors of Grl.RangeValue

        constructor(min: GObject.Value, max: GObject.Value);
        _init(...args: any[]): void;

        static ['new'](min: GObject.Value, max: GObject.Value): RangeValue;

        // Own static methods of Grl.RangeValue

        static hashtable_insert(
            hash_table: GLib.HashTable<any, any>,
            key: any | null,
            min: GObject.Value,
            max: GObject.Value,
        ): void;
        static hashtable_new(): GLib.HashTable<any, RangeValue>;

        // Own methods of Grl.RangeValue

        dup(): RangeValue;
        free(): void;
    }

    type RegistryClass = typeof Registry;
    abstract class RegistryPrivate {
        static $gtype: GObject.GType<RegistryPrivate>;

        // Constructors of Grl.RegistryPrivate

        _init(...args: any[]): void;
    }

    type RelatedKeysClass = typeof RelatedKeys;
    abstract class RelatedKeysPrivate {
        static $gtype: GObject.GType<RelatedKeysPrivate>;

        // Constructors of Grl.RelatedKeysPrivate

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * browse vmethod.
     */
    class SourceBrowseSpec {
        static $gtype: GObject.GType<SourceBrowseSpec>;

        // Own fields of Grl.SourceBrowseSpec

        source: Source;
        operation_id: number;
        container: Media;
        keys: any[];
        options: OperationOptions;
        callback: SourceResultCb;
        user_data: any;

        // Constructors of Grl.SourceBrowseSpec

        _init(...args: any[]): void;
    }

    type SourceClass = typeof Source;
    /**
     * Data transport structure used internally by the plugins which support
     * media_from_uri vmethod.
     */
    class SourceMediaFromUriSpec {
        static $gtype: GObject.GType<SourceMediaFromUriSpec>;

        // Own fields of Grl.SourceMediaFromUriSpec

        source: Source;
        operation_id: number;
        uri: string;
        keys: any[];
        options: OperationOptions;
        callback: SourceResolveCb;
        user_data: any;

        // Constructors of Grl.SourceMediaFromUriSpec

        _init(...args: any[]): void;
    }

    abstract class SourcePrivate {
        static $gtype: GObject.GType<SourcePrivate>;

        // Constructors of Grl.SourcePrivate

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * query vmethod.
     */
    class SourceQuerySpec {
        static $gtype: GObject.GType<SourceQuerySpec>;

        // Own fields of Grl.SourceQuerySpec

        source: Source;
        operation_id: number;
        query: string;
        keys: any[];
        options: OperationOptions;
        callback: SourceResultCb;
        user_data: any;

        // Constructors of Grl.SourceQuerySpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * store vmethod.
     */
    class SourceRemoveSpec {
        static $gtype: GObject.GType<SourceRemoveSpec>;

        // Own fields of Grl.SourceRemoveSpec

        source: Source;
        media_id: string;
        media: Media;
        callback: SourceRemoveCb;
        user_data: any;

        // Constructors of Grl.SourceRemoveSpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * resolve vmethod.
     */
    class SourceResolveSpec {
        static $gtype: GObject.GType<SourceResolveSpec>;

        // Own fields of Grl.SourceResolveSpec

        source: Source;
        operation_id: number;
        media: Media;
        keys: any[];
        options: OperationOptions;
        callback: SourceResolveCb;
        user_data: any;

        // Constructors of Grl.SourceResolveSpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * search vmethod.
     */
    class SourceSearchSpec {
        static $gtype: GObject.GType<SourceSearchSpec>;

        // Own fields of Grl.SourceSearchSpec

        source: Source;
        operation_id: number;
        text: string;
        keys: any[];
        options: OperationOptions;
        callback: SourceResultCb;
        user_data: any;

        // Constructors of Grl.SourceSearchSpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * store_metadata vmethod.
     */
    class SourceStoreMetadataSpec {
        static $gtype: GObject.GType<SourceStoreMetadataSpec>;

        // Own fields of Grl.SourceStoreMetadataSpec

        source: Source;
        media: Media;
        keys: any[];
        flags: WriteFlags;
        callback: SourceStoreCb;
        user_data: any;
        failed_keys: any[];

        // Constructors of Grl.SourceStoreMetadataSpec

        _init(...args: any[]): void;
    }

    /**
     * Data transport structure used internally by the plugins which support
     * store vmethod.
     */
    class SourceStoreSpec {
        static $gtype: GObject.GType<SourceStoreSpec>;

        // Own fields of Grl.SourceStoreSpec

        source: Source;
        media: Media;
        callback: SourceStoreCb;
        user_data: any;

        // Constructors of Grl.SourceStoreSpec

        _init(...args: any[]): void;
    }

    type KeyID = number;
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
