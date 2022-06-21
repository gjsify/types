// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Grl-0.2
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

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
     * #GrlMedia has changed, or in case of #GrlMediaBox, if several children have
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
enum MediaType {
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
 * Resolution flags
 * @bitfield 
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
/**
 * Bitwise flags which reflect the kind of operations that a
 * #GrlSource supports.
 * @bitfield 
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
 * @bitfield 
 */
enum TypeFilter {
    /**
     * allow no content (only #GrlMediaBox)
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
 * @bitfield 
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
const CONFIG_KEY_APIKEY: string
const CONFIG_KEY_APIKEY_BLOB: string
const CONFIG_KEY_APISECRET: string
const CONFIG_KEY_APITOKEN: string
const CONFIG_KEY_APITOKEN_SECRET: string
const CONFIG_KEY_PASSWORD: string
const CONFIG_KEY_PLUGIN: string
const CONFIG_KEY_SOURCE: string
const CONFIG_KEY_USERNAME: string
const COUNT_INFINITY: number
const KEYID_FORMAT: string
const METADATA_KEY_ALBUM: number
const METADATA_KEY_ARTIST: number
const METADATA_KEY_AUDIO_TRACK: number
const METADATA_KEY_AUTHOR: number
const METADATA_KEY_BITRATE: number
const METADATA_KEY_CAMERA_MODEL: number
const METADATA_KEY_CERTIFICATE: number
const METADATA_KEY_CHILDCOUNT: number
const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
const METADATA_KEY_CREATION_DATE: number
const METADATA_KEY_DESCRIPTION: number
const METADATA_KEY_DIRECTOR: number
const METADATA_KEY_DURATION: number
const METADATA_KEY_EPISODE: number
const METADATA_KEY_EPISODE_TITLE: number
const METADATA_KEY_EXPOSURE_TIME: number
const METADATA_KEY_EXTERNAL_PLAYER: number
const METADATA_KEY_EXTERNAL_URL: number
const METADATA_KEY_FAVOURITE: number
const METADATA_KEY_FLASH_USED: number
const METADATA_KEY_FRAMERATE: number
const METADATA_KEY_GENRE: number
const METADATA_KEY_HEIGHT: number
const METADATA_KEY_ID: number
const METADATA_KEY_INVALID: number
const METADATA_KEY_ISO_SPEED: number
const METADATA_KEY_KEYWORD: number
const METADATA_KEY_LAST_PLAYED: number
const METADATA_KEY_LAST_POSITION: number
const METADATA_KEY_LICENSE: number
const METADATA_KEY_LYRICS: number
const METADATA_KEY_MB_ALBUM_ID: number
const METADATA_KEY_MB_ARTIST_ID: number
const METADATA_KEY_MB_RECORDING_ID: number
const METADATA_KEY_MB_TRACK_ID: number
const METADATA_KEY_MIME: number
const METADATA_KEY_MODIFICATION_DATE: number
const METADATA_KEY_ORIENTATION: number
const METADATA_KEY_ORIGINAL_TITLE: number
const METADATA_KEY_PERFORMER: number
const METADATA_KEY_PLAY_COUNT: number
const METADATA_KEY_PRODUCER: number
const METADATA_KEY_PUBLICATION_DATE: number
const METADATA_KEY_RATING: number
const METADATA_KEY_REGION: number
const METADATA_KEY_SEASON: number
const METADATA_KEY_SHOW: number
const METADATA_KEY_SITE: number
const METADATA_KEY_SIZE: number
const METADATA_KEY_SOURCE: number
const METADATA_KEY_START_TIME: number
const METADATA_KEY_STUDIO: number
const METADATA_KEY_THUMBNAIL: number
const METADATA_KEY_THUMBNAIL_BINARY: number
const METADATA_KEY_TITLE: number
const METADATA_KEY_TITLE_FROM_FILENAME: number
const METADATA_KEY_TRACK_NUMBER: number
const METADATA_KEY_URL: number
const METADATA_KEY_WIDTH: number
const OPERATION_OPTION_COUNT: string
const OPERATION_OPTION_KEY_EQUAL_FILTER: string
const OPERATION_OPTION_KEY_RANGE_FILTER: string
const OPERATION_OPTION_RESOLUTION_FLAGS: string
const OPERATION_OPTION_SKIP: string
const OPERATION_OPTION_TYPE_FILTER: string
const PADDING: number
const PADDING_SMALL: number
const PLUGIN_AUTHOR: string
const PLUGIN_DESCRIPTION: string
const PLUGIN_LICENSE: string
const PLUGIN_LIST_VAR: string
const PLUGIN_NAME: string
const PLUGIN_PATH_VAR: string
const PLUGIN_RANKS_VAR: string
const PLUGIN_SITE: string
const PLUGIN_VERSION: string
const SOURCE_REMAINING_UNKNOWN: number
function date_time_from_iso8601(date: string): GLib.DateTime
/**
 * Deinitializes the Grilo library.
 * 
 * Call this function after finalizing using Grilo, in order to free and clean
 * up all the resources created.
 */
function deinit(): void
function g_value_dup(value: any): any
function g_value_free(value: any): void
function g_value_hashtable_new(): GLib.HashTable
function g_value_hashtable_new_direct(): GLib.HashTable
function g_value_new(g_type: GObject.GType): any
/**
 * Initializes the Grilo library
 * @param argv list of arguments
 */
function init(argv: string[] | null): /* argv */ string[] | null
/**
 * Returns a #GOptionGroup with Grilo's argument specifications.
 * 
 * This function is useful if you want to integrate Grilo with other
 * libraries that use the GOption commandline parser
 * (see g_option_context_add_group() ).
 */
function init_get_option_group(): GLib.OptionGroup
/**
 * Configure a set of log domains. The default configuration is to display
 * warning and error messages only for all the log domains.
 * 
 * The configuration string follows the following grammar:
 * 
 * |[
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
function log_configure(config: string): void
function marshal_VOID__BOXED_ENUM_BOOLEAN(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
/**
 * Retrieves the description associated with the key
 * @param key key to look up
 */
function metadata_key_get_desc(key: KeyID): string
/**
 * Retrieves the name associated with the key
 * @param key key to look up
 */
function metadata_key_get_name(key: KeyID): string
/**
 * Retrieves the expected type for values associated with this key
 * @param key key to look up
 */
function metadata_key_get_type(key: KeyID): GObject.GType
function metadata_key_setup_system_keys(registry: Registry): void
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
function multiple_get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): void
/**
 * Search for `text` in all the sources specified in `sources`.
 * 
 * If `text` is `NULL` then NULL-text searchs will be used for each searchable
 * plugin (see #grl_source_search for more details).
 * 
 * This method is asynchronous.
 * @param sources  a #GList of #GrlSource<!-- -->s to search from (%NULL for all searchable sources)
 * @param text the text to search for
 * @param keys the #GList of #GrlKeyID to retrieve
 * @param options options wanted for that operation
 * @param callback the user defined callback
 */
function multiple_search(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
/**
 * Search for `text` in all the sources specified in `sources`.
 * 
 * This method is synchronous.
 * @param sources  a #GList of #GrlSource<!-- -->s where to search from (%NULL for all available sources with search capability)
 * @param text the text to search for
 * @param keys the #GList of #GrlKeyID to retrieve
 * @param options options wanted for that operation
 */
function multiple_search_sync(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions): Media[]
/**
 * Cancel an operation.
 * @param operation_id the identifier of a running operation
 */
function operation_cancel(operation_id: number): void
function operation_generate_id(): number
/**
 * Obtains the previously attached data
 * @param operation_id the identifier of a running operation
 */
function operation_get_data(operation_id: number): object | null
function operation_init(): void
function operation_remove(operation_id: number): void
/**
 * Attach a pointer to the specific operation.
 * @param operation_id the identifier of a running operation
 * @param user_data the data to attach
 */
function operation_set_data(operation_id: number, user_data: object | null): void
/**
 * Attach a pointer to the specific operation.
 * 
 * Note that the `destroy_func` callback is not called if `user_data` is %NULL.
 * @param operation_id the identifier of a running operation
 * @param user_data the data to attach
 * @param destroy_func function to release `user_data` when the operation terminates
 */
function operation_set_data_full(operation_id: number, user_data: object | null, destroy_func: GLib.DestroyNotify | null): void
function operation_set_private_data(operation_id: number, private_data: object | null, cancel_cb: OperationCancelCb): void
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
 * @param internal_offset in the `page_number,` offset where first element can be found (starting at 0)
 */
function paging_translate(skip: number, count: number, max_page_size: number, page_size: number, page_number: number, internal_offset: number): void
function range_value_hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: any, max: any): void
function range_value_hashtable_new(): GLib.HashTable
interface OperationCancelCb {
    (data: object | null): void
}
/**
 * Prototype for the callback passed to grl_source_remove()
 * @callback 
 * @param source a source
 * @param media a data transfer object
 * @param error possible #GError generated at processing
 */
interface SourceRemoveCb {
    (source: Source, media: Media, error: GLib.Error | null): void
}
/**
 * Prototype for the callback passed to grl_source_resolve(). If the URI did
 * not resolve to a valid media record, `media` will be %NULL. If there was an
 * error during resolution, `error` will be set.
 * 
 * If `media` is non-%NULL, ownership of it is transferred to the callback, and
 * it must be freed afterwards using g_object_unref().
 * @callback 
 * @param source a source
 * @param operation_id operation identifier
 * @param media a data transfer object
 * @param error possible #GError generated at processing
 */
interface SourceResolveCb {
    (source: Source, operation_id: number, media: Media, error: GLib.Error | null): void
}
/**
 * Prototype for the callback passed to the media sources' methods
 * @callback 
 * @param source a source
 * @param operation_id operation identifier
 * @param media a data transfer object
 * @param remaining the number of remaining #GrlMedia to process, or GRL_SOURCE_REMAINING_UNKNOWN if it is unknown
 * @param error possible #GError generated at processing
 */
interface SourceResultCb {
    (source: Source, operation_id: number, media: Media | null, remaining: number, error: GLib.Error | null): void
}
/**
 * Prototype for the callback passed to grl_source_store_foo functions
 * @callback 
 * @param source a source
 * @param media a #GrlMedia transfer object
 * @param failed_keys #GList of keys that could not be updated, if any
 * @param error possible #GError generated
 */
interface SourceStoreCb {
    (source: Source, media: Media, failed_keys: KeyID[], error: GLib.Error | null): void
}
interface Caps_ConstructProps extends GObject.Object_ConstructProps {
}

interface Caps {

    // Own fields of Grl-0.2.Grl.Caps

    parent: GObject.Object

    // Owm methods of Grl-0.2.Grl.Caps

    get_key_filter(): KeyID[]
    get_key_range_filter(): KeyID[]
    get_type_filter(): TypeFilter
    /**
     * Checks if `key` is supported for filtering in `caps`.
     * @param key a #GrlKeyID
     */
    is_key_filter(key: KeyID): boolean
    /**
     * Checks if `key` is supported for filtering by range in `caps`.
     * @param key a #GrlKeyID
     */
    is_key_range_filter(key: KeyID): boolean
    set_key_filter(keys: KeyID[]): void
    set_key_range_filter(keys: KeyID[]): void
    /**
     * Sets the supported filter capability.
     * @param filter a #GrlTypeFilter
     */
    set_type_filter(filter: TypeFilter): void
    /**
     * Checks whether (`key,` `value)` are authorized by `caps`.
     * @param key a key to test
     * @param value the value corresponding to `key` to test against `caps`
     */
    test_option(key: string, value: any): boolean

    // Class property signals of Grl-0.2.Grl.Caps

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Caps extends GObject.Object {

    // Own properties of Grl-0.2.Grl.Caps

    static name: string
    static $gtype: GObject.GType<Caps>

    // Constructors of Grl-0.2.Grl.Caps

    constructor(config?: Caps_ConstructProps) 
    /**
     * Creates a new caps object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new caps object.
     * @constructor 
     */
    static new(): Caps
    _init(config?: Caps_ConstructProps): void
}

interface Config_ConstructProps extends GObject.Object_ConstructProps {
}

interface Config {

    // Own fields of Grl-0.2.Grl.Config

    parent: GObject.Object
    priv: ConfigPrivate
    _grl_reserved: object[]

    // Owm methods of Grl-0.2.Grl.Config

    get_api_key(): string
    get_api_key_blob(size: number): number
    get_api_secret(): string
    get_api_token(): string
    get_api_token_secret(): string
    /**
     * Gets the value of `param` encoded as base64. If `size` is not %NULL, it puts
     * there the size of the value.
     * @param param a binary type parameter
     * @param size place for size of value
     */
    get_binary(param: string, size: number | null): number
    get_boolean(param: string): boolean
    get_float(param: string): number
    get_int(param: string): number
    get_password(): string
    get_plugin(): string
    get_source(): string
    get_string(param: string): string
    get_username(): string
    has_param(param: string): boolean
    /**
     * Set `param` `value`.
     * @param param a parameter
     * @param value value
     */
    set(param: string, value: any): void
    /**
     * Set the webservice API key in the configuration
     * @param key the API key
     */
    set_api_key(key: string): void
    /**
     * Set the binary API key in the configuration
     * @param blob the binary API key blob
     * @param size the size of the blob
     */
    set_api_key_blob(blob: number, size: number): void
    /**
     * Set the webservice passphrase in the configuration
     * @param secret the webservice passphrase
     */
    set_api_secret(secret: string): void
    /**
     * Set the webservice API token in the configuration
     * @param token the API token
     */
    set_api_token(token: string): void
    /**
     * Set the webservice API token secret in the configuration
     * (Needed by OAuth)
     * @param secret the API token
     */
    set_api_token_secret(secret: string): void
    /**
     * Set `param` value.
     * @param param a binary type parameter
     * @param blob a base64 encoded binary value
     * @param size size of `value`
     */
    set_binary(param: string, blob: number, size: number): void
    /**
     * Set `param` `value`.
     * @param param a boolean type parameter
     * @param value a value
     */
    set_boolean(param: string, value: boolean): void
    /**
     * Set `param` `value`.
     * @param param a float type parameter
     * @param value a value
     */
    set_float(param: string, value: number): void
    /**
     * Set `param` `value`.
     * @param param an integer type parameter
     * @param value a value
     */
    set_int(param: string, value: number): void
    /**
     * Set the password in the configuration
     * @param password the password
     */
    set_password(password: string): void
    /**
     * Set the plugin key in the configuration
     * @param plugin the plugin id
     */
    set_plugin(plugin: string): void
    /**
     * Set the source key in the configuration
     * @param source the source id
     */
    set_source(source: string): void
    /**
     * Set `param` `value`.
     * @param param a string type parameter
     * @param value a value
     */
    set_string(param: string, value: string): void
    /**
     * Set the username in the configuration
     * @param username the username
     */
    set_username(username: string): void

    // Class property signals of Grl-0.2.Grl.Config

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Config extends GObject.Object {

    // Own properties of Grl-0.2.Grl.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of Grl-0.2.Grl.Config

    constructor(config?: Config_ConstructProps) 
    /**
     * Creates a new data config object that will be associated with a plugin
     * (if `source` is NULL), or a specific source spawned from a plugin (if
     * `source` is not NULL). The latter may be useful for plugins
     * spawning various sources, each one needing a different configuration.
     * @constructor 
     * @param plugin plugin id for this configuration
     * @param source source id for this configuration
     */
    constructor(plugin: string, source: string | null) 
    /**
     * Creates a new data config object that will be associated with a plugin
     * (if `source` is NULL), or a specific source spawned from a plugin (if
     * `source` is not NULL). The latter may be useful for plugins
     * spawning various sources, each one needing a different configuration.
     * @constructor 
     * @param plugin plugin id for this configuration
     * @param source source id for this configuration
     */
    static new(plugin: string, source: string | null): Config
    _init(config?: Config_ConstructProps): void
}

interface Data_ConstructProps extends GObject.Object_ConstructProps {
}

interface Data {

    // Own fields of Grl-0.2.Grl.Data

    parent: GObject.Object
    priv: DataPrivate
    _grl_reserved: object[]

    // Owm methods of Grl-0.2.Grl.Data

    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    add_binary(key: KeyID, buf: number, size: number): void
    /**
     * Appends a new boxed value for `key` in `data`.
     * @param key key to append
     * @param boxed the new value
     */
    add_boxed(key: KeyID, boxed: object | null): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    add_float(key: KeyID, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int(key: KeyID, intvalue: number): void
    /**
     * Appends a new int64 value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int64(key: KeyID, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    add_related_keys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    add_string(key: KeyID, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * @param key key to look up.
     */
    get(key: KeyID): any
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * @param key key to use
     */
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    /**
     * Returns the first boxed value associated with `key` from `data`. If `key` has
     * no first value, that value is not of a boxed type, or `key` is not in `data,`
     * then %NULL is returned.
     * @param key key to use
     */
    get_boxed(key: KeyID): object | null
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_float(key: KeyID): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int(key: KeyID): number
    /**
     * Returns the first int64 value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int64(key: KeyID): number
    /**
     * Returns a list with keys contained in `data`.
     */
    get_keys(): KeyID[]
    /**
     * Returns a set containing the values for `key` and related keys at position
     * `index` from `data`.
     * 
     * If user changes any of the values in the related keys, the changes will
     * become permanent.
     * @param key a metadata key
     * @param index element to retrieve, starting at 0
     */
    get_related_keys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * @param key a metadata key
     */
    get_single_values_for_key(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * @param key a metadata key
     */
    get_single_values_for_key_string(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * @param key key to use
     */
    get_string(key: KeyID): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     */
    has_key(key: KeyID): boolean
    /**
     * Returns how many values `key` or related keys have in `data:` if `key` has no
     * value, but a related key has, then it is counted as positive.
     * 
     * As example, let's think in three related keys, K1, K2 and K3, and then thinks
     * we have added several values for those keys, as:
     * 
     *   (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
     * 
     * Therefore, when invoking grl_data_length (data, K2) it will return 3:
     * considering K2 and the related keys (K1 and K3), there are 3 values.
     * @param key a metadata key
     */
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: KeyID): void
    /**
     * Removes the value at position `index` for `key` from `data`. If there are other
     * keys related to `key,` their values at position `index` will also be removed
     * from `data`.
     * @param key a metadata key
     * @param index index of key to be removed, starting at 0
     */
    remove_nth(key: KeyID, index: number): void
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
    set(key: KeyID, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    set_binary(key: KeyID, buf: number, size: number): void
    /**
     * Sets the first boolean value associated with `key` in `data`. If `key` already
     * has a first value, old value is replaced by the new one.
     * @param key key to change or add
     * @param boolvalue the new value
     */
    set_boolean(key: KeyID, boolvalue: boolean): void
    /**
     * Sets the first boxed value associated with `key` in `data`. If `key` already
     * has a value, the old value is freed and the new one is set.
     * @param key key to change or add
     * @param boxed the new value
     */
    set_boxed(key: KeyID, boxed: object | null): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: KeyID, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: KeyID, intvalue: number): void
    /**
     * Sets the first int64 value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int64(key: KeyID, intvalue: number): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    set_related_keys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: KeyID, strvalue: string): void

    // Class property signals of Grl-0.2.Grl.Data

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Data extends GObject.Object {

    // Own properties of Grl-0.2.Grl.Data

    static name: string
    static $gtype: GObject.GType<Data>

    // Constructors of Grl-0.2.Grl.Data

    constructor(config?: Data_ConstructProps) 
    /**
     * Creates a new data object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new data object.
     * @constructor 
     */
    static new(): Data
    _init(config?: Data_ConstructProps): void
}

interface Media_ConstructProps extends Data_ConstructProps {
}

interface Media {

    // Own fields of Grl-0.2.Grl.Media

    parent: Data

    // Owm methods of Grl-0.2.Grl.Media

    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    add_author(author: string): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    add_external_player(player: string): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    add_external_url(url: string): void
    /**
     * Adds the keyword describing the `media`.
     * @param keyword a keyword describing the media
     */
    add_keyword(keyword: string): void
    /**
     * Adds regional publication and certification information for `region`.
     * @param region the region's ISO-3166-1 code
     * @param publication_date the publication date
     * @param certificate the age certification
     */
    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    add_thumbnail(thumbnail: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    add_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime?: string): void
    get_author(): string
    get_author_nth(index: number): string
    /**
     * Returns the media's first age certificate.
     * This should usually be the media's most relevant
     * age certificate. Use grl_media_get_region_data_nth() to
     * get other age certificates.
     */
    get_certificate(): string
    get_creation_date(): GLib.DateTime
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_favourite(): boolean
    get_id(): string
    get_keyword(): string
    get_keyword_nth(index: number): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_modification_date(): GLib.DateTime
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_publication_date(): GLib.DateTime
    get_rating(): number
    get_region(): string
    /**
     * Returns the media's age certificate and publication date for the first region.
     * This should usually be the media's most relevant region.
     * Use grl_media_get_region_data_nth() to get the age certificate and
     * publication date for other regions.
     */
    get_region_data(): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
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
     */
    get_region_data_nth(index: number): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_site(): string
    get_size(): number
    get_source(): string
    get_start_time(): number
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     */
    serialize(): string
    /**
     * Set the media's author
     * @param author the media's author
     */
    set_author(author: string): void
    /**
     * Set the media's first age certification.
     * This should usually be the media's most relevant
     * age certificate. Use grl_media_set_region_data() to
     * set other age certificates.
     * @param certificate The age certificate of the media
     */
    set_certificate(certificate: string): void
    /**
     * Set the creation_date of the media
     * @param creation_date date when media was created
     */
    set_creation_date(creation_date: GLib.DateTime): void
    /**
     * Set the media's description
     * @param description the description
     */
    set_description(description: string): void
    /**
     * Set the media's duration
     * @param duration the duration in seconds
     */
    set_duration(duration: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    set_external_player(player: string): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    set_external_url(url: string): void
    /**
     * Set if the media is favourite or not
     * @param favourite whether the item is favourite or not
     */
    set_favourite(favourite: boolean): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    set_id(id: string): void
    /**
     * Sets the keyword describing the `media`.
     * @param keyword a keyword describing the media
     */
    set_keyword(keyword: string): void
    /**
     * Set the media last played date
     * @param last_played date when the media was last played
     */
    set_last_played(last_played: string): void
    /**
     * Set the media last played position
     * @param last_position second at which the media playback was interrupted
     */
    set_last_position(last_position: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    set_license(license: string): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    set_mime(mime: string): void
    /**
     * Set the modification date of the media
     * @param modification_date date when the media was last modified
     */
    set_modification_date(modification_date: GLib.DateTime): void
    /**
     * Set the media play count
     * @param play_count the play count
     */
    set_play_count(play_count: number): void
    /**
     * Set the publication date of `media`.
     * @param date the date
     */
    set_publication_date(date: GLib.DateTime): void
    /**
     * This method receives a rating and its scale and normalizes it on a scale
     * from 0...5 to match the usual five-star rating.
     * @param rating a rating value
     * @param max maximum rating value
     */
    set_rating(rating: number, max: number): void
    /**
     * Sets the `region` where `media` was published.
     * @param region the region's ISO-3166-1 code
     */
    set_region(region: string): void
    /**
     * Sets regional publication and certification information for `region`.
     * @param region the region's ISO-3166-1 code
     * @param publication_date the publication date
     * @param certificate the age certification
     */
    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    /**
     * Set the media's site. A site is a website about the media such as a
     * studio's promotional website for a movie.
     * @param site the site
     */
    set_site(site: string): void
    /**
     * Set the size of the media
     * @param size the size in bytes
     */
    set_size(size: number): void
    /**
     * Set the media's source
     * @param source the source
     */
    set_source(source: string): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    set_studio(studio: string): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    set_thumbnail(thumbnail: string): void
    /**
     * Set the media's binary thumbnail
     * @param thumbnail thumbnail buffer
     * @param size thumbnail buffer size
     */
    set_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Set the media's title
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    set_url(url: string): void
    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime?: string): void

    // Class property signals of Grl-0.2.Grl.Media

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Media extends Data {

    // Own properties of Grl-0.2.Grl.Media

    static name: string
    static $gtype: GObject.GType<Media>

    // Constructors of Grl-0.2.Grl.Media

    constructor(config?: Media_ConstructProps) 
    /**
     * Creates a new data media object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new data media object.
     * @constructor 
     */
    static new(): Media

    // Overloads of new

    /**
     * Creates a new data object.
     * @constructor 
     */
    static new(): Data
    _init(config?: Media_ConstructProps): void
    /**
     * Unserializes a GrlMedia.
     * @param serial a serialized media
     */
    static unserialize(serial: string): Media
}

interface MediaAudio_ConstructProps extends Media_ConstructProps {
}

interface MediaAudio {

    // Own fields of Grl-0.2.Grl.MediaAudio

    parent: Media

    // Owm methods of Grl-0.2.Grl.MediaAudio

    /**
     * Adds a new artist to `audio`.
     * @param artist an audio's artist
     */
    add_artist(artist: string): void
    /**
     * Adds a new genre to `audio`.
     * @param genre an audio's genre
     */
    add_genre(genre: string): void
    /**
     * Adds a new lyrics to `audio`.
     * @param lyrics an audio's lyrics
     */
    add_lyrics(lyrics: string): void
    /**
     * Adds a new MusicBrainz artist id to `audio`.
     * @param mb_artist_id a MusicBrainz artist identifier
     */
    add_mb_artist_id(mb_artist_id: string): void
    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `audio` (useful for resources with more than one URL).
     * @param url an audio's url
     * @param mime the `url` mime-type
     * @param bitrate the `url` bitrate, or -1 to ignore
     */
    add_url_data(url: string, mime?: string, bitrate?: number): void

    // Overloads of add_url_data

    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime?: string): void
    add_url_data(...args: any[]): any
    add_url_data(args_or_url: any[] | string, mime?: string): void | any
    get_album(): string
    get_artist(): string
    get_artist_nth(index: number): string
    get_bitrate(): number
    get_genre(): string
    get_genre_nth(index: number): string
    get_lyrics(): string
    get_lyrics_nth(index: number): string
    get_mb_album_id(): string
    get_mb_artist_id(): string
    get_mb_artist_id_nth(index: number): string
    get_mb_recording_id(): string
    get_mb_track_id(): string
    get_track_number(): number
    get_url_data(): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]

    // Overloads of get_url_data

    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data(...args: any[]): any
    get_url_data(...args: any[]): [ /* returnType */ string | any, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]

    // Overloads of get_url_data_nth

    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(...args: any[]): any
    get_url_data_nth(args_or_index: any[] | number): [ /* returnType */ string | any, /* mime */ string ]
    /**
     * Set the album of the audio
     * @param album the audio's album
     */
    set_album(album: string): void
    /**
     * Set the artist of the audio
     * @param artist the audio's artist
     */
    set_artist(artist: string): void
    /**
     * Set the bitrate of the audio
     * @param bitrate the audio's bitrate
     */
    set_bitrate(bitrate: number): void
    /**
     * Set the genre of the audio
     * @param genre the audio's genre
     */
    set_genre(genre: string): void
    /**
     * Set the lyrics of the audio
     * @param lyrics the audio's lyrics
     */
    set_lyrics(lyrics: string): void
    /**
     * Set the MusicBrainz album identifier of the audio
     * @param mb_album_id the MusicBrainz album identifier
     */
    set_mb_album_id(mb_album_id: string): void
    /**
     * Set the MusicBrainz artist identifier of the audio
     * @param mb_artist_id the MusicBrainz artist identifier
     */
    set_mb_artist_id(mb_artist_id: string): void
    /**
     * Set the MusicBrainz recording identifier of the audio
     * @param mb_recording_id the MusicBrainz recording identifier
     */
    set_mb_recording_id(mb_recording_id: string): void
    /**
     * Set the MusicBrainz track identifier of the audio
     * @param mb_track_id the MusicBrainz track identifier
     */
    set_mb_track_id(mb_track_id: string): void
    /**
     * Set the track number of the audio
     * @param track_number the audio's track number
     */
    set_track_number(track_number: number): void
    /**
     * Sets all the keys related with the URL of an audio resource in one go.
     * @param url the audio's url
     * @param mime the `url` mime-type
     * @param bitrate the `url` bitrate, or -1 to ignore
     */
    set_url_data(url: string, mime?: string, bitrate?: number): void

    // Overloads of set_url_data

    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime?: string): void
    set_url_data(...args: any[]): any
    set_url_data(args_or_url: any[] | string, mime?: string): void | any

    // Class property signals of Grl-0.2.Grl.MediaAudio

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaAudio extends Media {

    // Own properties of Grl-0.2.Grl.MediaAudio

    static name: string
    static $gtype: GObject.GType<MediaAudio>

    // Constructors of Grl-0.2.Grl.MediaAudio

    constructor(config?: MediaAudio_ConstructProps) 
    /**
     * Creates a new data audio object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new data audio object.
     * @constructor 
     */
    static new(): MediaAudio

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     */
    static new(): Data
    _init(config?: MediaAudio_ConstructProps): void
}

interface MediaBox_ConstructProps extends Media_ConstructProps {
}

interface MediaBox {

    // Own fields of Grl-0.2.Grl.MediaBox

    parent: Media

    // Owm methods of Grl-0.2.Grl.MediaBox

    /**
     * Number of children of this box.
     */
    get_childcount(): number
    /**
     * Sets the number of children of this box. Use
     * #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if it is unknown.
     * @param childcount number of children
     */
    set_childcount(childcount: number): void

    // Class property signals of Grl-0.2.Grl.MediaBox

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaBox extends Media {

    // Own properties of Grl-0.2.Grl.MediaBox

    static name: string
    static $gtype: GObject.GType<MediaBox>

    // Constructors of Grl-0.2.Grl.MediaBox

    constructor(config?: MediaBox_ConstructProps) 
    /**
     * Creates a new data box object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new data box object.
     * @constructor 
     */
    static new(): MediaBox

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     */
    static new(): Data
    _init(config?: MediaBox_ConstructProps): void
}

interface MediaImage_ConstructProps extends Media_ConstructProps {
}

interface MediaImage {

    // Own fields of Grl-0.2.Grl.MediaImage

    parent: Media

    // Owm methods of Grl-0.2.Grl.MediaImage

    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `image` (useful for resources with more than one URL).
     * @param url a image's url
     * @param mime image mime-type
     * @param width image width, or -1 to ignore
     * @param height image height, or -1 to ignore
     */
    add_url_data(url: string, mime?: string, width?: number, height?: number): void

    // Overloads of add_url_data

    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime?: string): void
    add_url_data(...args: any[]): any
    add_url_data(args_or_url: any[] | string, mime?: string): void | any
    get_camera_model(): string
    get_exposure_time(): number
    get_flash_used(): string
    get_height(): number
    get_iso_speed(): number
    get_orientation(): number
    get_url_data(width?: number, height?: number): [ /* returnType */ string, /* mime */ string ]

    // Overloads of get_url_data

    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data(...args: any[]): any
    get_url_data(...args: any[]): [ /* returnType */ string | any, /* mime */ string ]
    get_url_data_nth(index: number, width?: number, height?: number): [ /* returnType */ string, /* mime */ string ]

    // Overloads of get_url_data_nth

    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(...args: any[]): any
    get_url_data_nth(args_or_index: any[] | number): [ /* returnType */ string | any, /* mime */ string ]
    get_width(): number
    set_camera_model(camera_model: string): void
    set_exposure_time(exposure_time: number): void
    set_flash_used(flash_used: string): void
    /**
     * Set the height of the image
     * @param height the image's height
     */
    set_height(height: number): void
    /**
     * Set the iso_speed of the image
     * @param iso_speed picture's iso speed
     */
    set_iso_speed(iso_speed: number): void
    /**
     * Set the orientation of the image
     * @param orientation degrees clockwise orientation of the picture
     */
    set_orientation(orientation: number): void
    /**
     * Set the size of the image
     * @param width the image's width
     * @param height the image's height
     */
    set_size(width: number, height?: number): void

    // Overloads of set_size

    /**
     * Set the size of the media
     * @param size the size in bytes
     */
    set_size(size: number): void
    set_size(...args: any[]): any
    set_size(args_or_size: any[] | number): void | any
    /**
     * Sets all the keys related with the URL of an image resource in one go.
     * @param url the image's url
     * @param mime image mime-type
     * @param width image width, or -1 to ignore
     * @param height image height, or -1 to ignore
     */
    set_url_data(url: string, mime?: string, width?: number, height?: number): void

    // Overloads of set_url_data

    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime?: string): void
    set_url_data(...args: any[]): any
    set_url_data(args_or_url: any[] | string, mime?: string): void | any
    /**
     * Set the width of the image
     * @param width the image's width
     */
    set_width(width: number): void

    // Class property signals of Grl-0.2.Grl.MediaImage

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaImage extends Media {

    // Own properties of Grl-0.2.Grl.MediaImage

    static name: string
    static $gtype: GObject.GType<MediaImage>

    // Constructors of Grl-0.2.Grl.MediaImage

    constructor(config?: MediaImage_ConstructProps) 
    /**
     * Creates a new data image object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new data image object.
     * @constructor 
     */
    static new(): MediaImage

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     */
    static new(): Data
    _init(config?: MediaImage_ConstructProps): void
}

interface MediaVideo_ConstructProps extends Media_ConstructProps {
}

interface MediaVideo {

    // Own fields of Grl-0.2.Grl.MediaVideo

    parent: Media

    // Owm methods of Grl-0.2.Grl.MediaVideo

    /**
     * Adds the director of the movie.
     * @param director director of the movie
     */
    add_director(director: string): void
    /**
     * Adds the actor performing in the movie.
     * @param performer an actor performing in the movie
     */
    add_performer(performer: string): void
    /**
     * Adds the producer of the movie.
     * @param producer producer of the movie
     */
    add_producer(producer: string): void
    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `video` (useful for resources with more than one URL).
     * @param url a video's url
     * @param mime video mime-type
     * @param framerate video framerate, or -1 to ignore
     * @param width video width, or -1 to ignore
     * @param height video height, or -1 to ignore
     */
    add_url_data(url: string, mime?: string, framerate?: number, width?: number, height?: number): void

    // Overloads of add_url_data

    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime?: string): void
    add_url_data(...args: any[]): any
    add_url_data(args_or_url: any[] | string, mime?: string): void | any
    get_director(): string
    get_director_nth(index: number): string
    get_episode(): number
    get_episode_title(): string
    get_framerate(): number
    get_height(): number
    get_original_title(): string
    get_performer(): string
    get_performer_nth(index: number): string
    get_producer(): string
    get_producer_nth(index: number): string
    get_season(): number
    get_show(): string
    get_url_data(framerate?: number, width?: number, height?: number): [ /* returnType */ string, /* mime */ string ]

    // Overloads of get_url_data

    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data(...args: any[]): any
    get_url_data(...args: any[]): [ /* returnType */ string | any, /* mime */ string ]
    get_url_data_nth(index: number, framerate?: number, width?: number, height?: number): [ /* returnType */ string, /* mime */ string ]

    // Overloads of get_url_data_nth

    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(...args: any[]): any
    get_url_data_nth(args_or_index: any[] | number): [ /* returnType */ string | any, /* mime */ string ]
    get_width(): number
    /**
     * Sets the director of the movie.
     * @param director director of the movie
     */
    set_director(director: string): void
    /**
     * Sets the episode number of the video
     * @param episode the video's episode
     */
    set_episode(episode: number): void
    /**
     * Sets the title of an episode
     * @param episode_title the title of the episode
     */
    set_episode_title(episode_title: string): void
    /**
     * Set the framerate of the video
     * @param framerate the video's framerate
     */
    set_framerate(framerate: number): void
    /**
     * Set the height of the video
     * @param height the video's height
     */
    set_height(height: number): void
    /**
     * Sets the original, untranslated title of the movie.
     * @param original_title original, untranslated title of the movie
     */
    set_original_title(original_title: string): void
    /**
     * Sets the actor performing in the movie.
     * @param performer an actor performing in the movie
     */
    set_performer(performer: string): void
    /**
     * Sets the producer of the movie.
     * @param producer producer of the movie
     */
    set_producer(producer: string): void
    /**
     * Sets the season number of the video
     * @param season the video's season
     */
    set_season(season: number): void
    /**
     * Sets the show title of the video
     * @param show the video's show name
     */
    set_show(show: string): void
    /**
     * Set the width and the height of the video
     * @param width the video's width
     * @param height the video's height
     */
    set_size(width: number, height?: number): void

    // Overloads of set_size

    /**
     * Set the size of the media
     * @param size the size in bytes
     */
    set_size(size: number): void
    set_size(...args: any[]): any
    set_size(args_or_size: any[] | number): void | any
    /**
     * Sets all the keys related with the URL of a video resource in one go.
     * @param url the video's url
     * @param mime video mime-type
     * @param framerate video framerate, or -1 to ignore
     * @param width video width, or -1 to ignore
     * @param height video height, or -1 to ignore
     */
    set_url_data(url: string, mime?: string, framerate?: number, width?: number, height?: number): void

    // Overloads of set_url_data

    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime?: string): void
    set_url_data(...args: any[]): any
    set_url_data(args_or_url: any[] | string, mime?: string): void | any
    /**
     * Set the width of the video
     * @param width the video's width
     */
    set_width(width: number): void

    // Class property signals of Grl-0.2.Grl.MediaVideo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaVideo extends Media {

    // Own properties of Grl-0.2.Grl.MediaVideo

    static name: string
    static $gtype: GObject.GType<MediaVideo>

    // Constructors of Grl-0.2.Grl.MediaVideo

    constructor(config?: MediaVideo_ConstructProps) 
    /**
     * Creates a new data video object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new data video object.
     * @constructor 
     */
    static new(): MediaVideo

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     */
    static new(): Data
    _init(config?: MediaVideo_ConstructProps): void
}

interface OperationOptions_ConstructProps extends GObject.Object_ConstructProps {
}

interface OperationOptions {

    // Own fields of Grl-0.2.Grl.OperationOptions

    parent: GObject.Object

    // Owm methods of Grl-0.2.Grl.OperationOptions

    copy(): OperationOptions
    /**
     * Get the count option, that is, the number of elements to retrieve in an
     * operation done with `options`.
     */
    get_count(): number
    get_flags(): ResolutionFlags
    get_key_filter(key: KeyID): any
    get_key_filter_list(): KeyID[]
    /**
     * Stores the limits of the range in the filter for `key` in `min_value` and
     * `max_value`. If some of the values has no limit, it will set a %NULL.
     * @param key a #GrlKeyID
     */
    get_key_range_filter(key: KeyID): [ /* min_value */ any, /* max_value */ any ]
    get_key_range_filter_list(): KeyID[]
    get_resolution_flags(): ResolutionFlags
    /**
     * Get the skip option, that is, the number of elements to skip before
     * retrieving media items in an operation done with `options`.
     */
    get_skip(): number
    get_type_filter(): TypeFilter
    /**
     * This is an internal method that shouldn't be used outside of Grilo.
     * @param key an operation option key
     */
    key_is_set(key: string): boolean
    /**
     * Check whether `options` obey to `caps`.
     * Optionally provide the options that match (respectively don't match) `caps`
     * in `supported_options` (respectively `unsupported_options)`.
     * This would typically (but not necessarily) be used with a
     * #GrlOperationOptions instance that was created with %NULL caps.
     * @param caps capabilities against which we want to test `options`
     */
    obey_caps(caps: Caps): [ /* returnType */ boolean, /* supported_options */ OperationOptions, /* unsupported_options */ OperationOptions ]
    /**
     * Set the count option for an operation. Will only succeed if `count` obey to
     * the inherent capabilities of `options`.
     * @param count number of elements to retrieve in an operation
     */
    set_count(count: number): boolean
    /**
     * Set the resolution flags for an operation. Will only succeed if `flags` obey
     * to the inherent capabilities of `options`.
     * @param flags the resolution flags to be set for an operation. See #GrlResolutionFlags for possible values.
     */
    set_flags(flags: ResolutionFlags): boolean
    set_key_filters(filters: GLib.HashTable): boolean
    /**
     * Set filter as "`key` == `value"`.
     * @param key a #GrlKeyID
     * @param value a #GValue
     */
    set_key_filter_value(key: KeyID, value: any): boolean
    /**
     * Set filter as "`min_value` <= `key` <= `max_value"`.
     * 
     * If `min_value` is %NULL, then filter is "`key` <= `max_value"`.
     * 
     * If `max_value` is %NULL, then filter is "`key` >= `min_value"`.
     * @param key a #GrlKeyID
     * @param min_value minimum value for range
     * @param max_value maximum value for range
     */
    set_key_range_filter_value(key: KeyID, min_value: any | null, max_value: any | null): boolean
    /**
     * Set the resolution flags for an operation. Will only succeed if `flags` obey
     * to the inherent capabilities of `options`.
     * @param flags the resolution flags to be set for an operation. See #GrlResolutionFlags for possible values.
     */
    set_resolution_flags(flags: ResolutionFlags): boolean
    /**
     * Set the skip option for an operation. Will only succeed if `skip` obeys to the
     * inherent capabilities of `options`.
     * @param skip number of elements to skip in an operation
     */
    set_skip(skip: number): boolean
    /**
     * Set the type of media filter for an operation. Only those media elements that
     * match the `filter` will be returned. Will only succeed if `filter` obey to the
     * inherent capabilities of `options`.
     * @param filter the type of media to get
     */
    set_type_filter(filter: TypeFilter): boolean

    // Class property signals of Grl-0.2.Grl.OperationOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OperationOptions extends GObject.Object {

    // Own properties of Grl-0.2.Grl.OperationOptions

    static name: string
    static $gtype: GObject.GType<OperationOptions>

    // Constructors of Grl-0.2.Grl.OperationOptions

    constructor(config?: OperationOptions_ConstructProps) 
    /**
     * Creates a new GrlOperationOptions object.
     * @constructor 
     * @param caps caps that options will have to match. If %NULL, all options will be accepted.
     */
    constructor(caps: Caps | null) 
    /**
     * Creates a new GrlOperationOptions object.
     * @constructor 
     * @param caps caps that options will have to match. If %NULL, all options will be accepted.
     */
    static new(caps: Caps | null): OperationOptions
    _init(config?: OperationOptions_ConstructProps): void
}

interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}

interface Plugin {

    // Own properties of Grl-0.2.Grl.Plugin

    /**
     * `TRUE` if plugin is loaded.
     */
    readonly loaded: boolean

    // Own fields of Grl-0.2.Grl.Plugin

    parent: GObject.Object

    // Owm methods of Grl-0.2.Grl.Plugin

    /**
     * Get the author of the plugin
     */
    get_author(): string
    /**
     * Get the description of the plugin
     */
    get_description(): string
    /**
     * Get the filename containing the plugin
     */
    get_filename(): string
    /**
     * Get the id of the plugin
     */
    get_id(): string
    /**
     * Get the information of the `plugin` that is associated with the given key
     * @param key a key representing information about this plugin
     */
    get_info(key: string): string
    /**
     * Returns a list of keys that can be queried to retrieve information about the
     * plugin.
     */
    get_info_keys(): string[]
    /**
     * Get the license of the plugin
     */
    get_license(): string
    /**
     * Get the name of the plugin
     */
    get_name(): string
    /**
     * Get the site of the plugin
     */
    get_site(): string
    /**
     * Gets the sources belonging to `plugin`.
     */
    get_sources(): Source[]
    /**
     * Get the version of the plugin
     */
    get_version(): string
    /**
     * Load the plugin
     * @param configurations a list of configurations
     */
    load(configurations: Config[]): boolean
    register_keys(): void
    set_filename(filename: string): void
    set_id(id: string): void
    set_info(key: string, value: string): void
    set_load_func(load_function: object | null): void
    set_module(module: GModule.Module): void
    set_optional_info(info: GLib.HashTable): void
    set_register_keys_func(register_keys_function: object | null): void
    set_unload_func(unload_function: object | null): void
    unload(): void

    // Class property signals of Grl-0.2.Grl.Plugin

    connect(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loaded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Plugin extends GObject.Object {

    // Own properties of Grl-0.2.Grl.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of Grl-0.2.Grl.Plugin

    constructor(config?: Plugin_ConstructProps) 
    _init(config?: Plugin_ConstructProps): void
}

interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `metadata-key-added`
 */
interface Registry_MetadataKeyAddedSignalCallback {
    ($obj: Registry, key: string): void
}

/**
 * Signal callback interface for `source-added`
 */
interface Registry_SourceAddedSignalCallback {
    ($obj: Registry, source: Source): void
}

/**
 * Signal callback interface for `source-removed`
 */
interface Registry_SourceRemovedSignalCallback {
    ($obj: Registry, source: Source): void
}

interface Registry {

    // Own fields of Grl-0.2.Grl.Registry

    parent: GObject.Object

    // Owm methods of Grl-0.2.Grl.Registry

    /**
     * Add a configuration for a plugin/source.
     * @param config a configuration set
     */
    add_config(config: Config): boolean
    /**
     * Load plugin configurations from a .ini-like config file.
     * @param config_file a key-value file containing the configuration
     */
    add_config_from_file(config_file: string): boolean
    /**
     * Load plugin configurations from a .ini-like resource file.
     * @param resource_path a key-value file containing the configuration
     */
    add_config_from_resource(resource_path: string): boolean
    /**
     * Set this path as part of default paths to load plugins.
     * @param path a path with plugins
     */
    add_directory(path: string): void
    /**
     * Returns a list with all registered keys in system.
     */
    get_metadata_keys(): KeyID[]
    /**
     * This function will return all the available plugins in the `registry`.
     * 
     * If `only_loaded` is %TRUE, the plugin list will contain only plugins that are
     * loaded.
     * @param only_loaded whether the returned list shall include only loaded plugins
     */
    get_plugins(only_loaded: boolean): Plugin[]
    /**
     * This function will return all the available sources in the `registry`.
     * 
     * If `ranked` is %TRUE, the source list will be ordered by rank.
     * @param ranked whether the returned list shall be returned ordered by rank
     */
    get_sources(ranked: boolean): Source[]
    /**
     * Give an array of all the available sources in the `registry` capable of
     * perform the operations requested in `ops`.
     * 
     * If `ranked` is %TRUE, the source list will be ordered by rank.
     * @param ops a bitwise mangle of the requested operations.
     * @param ranked whether the returned list shall be returned ordered by rank
     */
    get_sources_by_operations(ops: SupportedOps, ranked: boolean): Source[]
    /**
     * Load all the modules available in the default directory path.
     * 
     * The default directory path can be changed through the environment
     * variable %GRL_PLUGIN_PATH and it can contain several paths separated
     * by ":"
     */
    load_all_plugins(): boolean
    /**
     * Loads a module from shared object file stored in `path`
     * @param library_filename the path to the so file
     */
    load_plugin(library_filename: string): boolean
    /**
     * Loads plugin identified by `plugin_id`.
     * 
     * This requires the XML plugin information file to define a "module" key with
     * the name of the module that provides the plugin or the absolute path of the
     * actual module file.
     * @param plugin_id plugin identifier
     */
    load_plugin_by_id(plugin_id: string): boolean
    /**
     * Loads a set of modules from directory in `path` which contains
     * a group shared object files.
     * @param path the path to the directory
     */
    load_plugin_directory(path: string): boolean
    /**
     * Look up for the metadata key with name `key_name`.
     * @param key_name the key name
     */
    lookup_metadata_key(key_name: string): KeyID
    /**
     * Returns `key` description.
     * @param key a metadata key
     */
    lookup_metadata_key_desc(key: KeyID): string
    /**
     * Returns `key` name.
     * @param key a metadata key
     */
    lookup_metadata_key_name(key: KeyID): string
    /**
     * Look up the list of keys that have a relation with `key`.
     * 
     * `key` is included in that list.
     * @param key a metadata key
     */
    lookup_metadata_key_relation(key: KeyID): KeyID[]
    /**
     * Returns `key` expected value type.
     * @param key a metadata key
     */
    lookup_metadata_key_type(key: KeyID): GObject.GType
    /**
     * This function will search and retrieve a plugin given its identifier.
     * @param plugin_id the id of a plugin
     */
    lookup_plugin(plugin_id: string): Plugin
    /**
     * This function will search and retrieve a source given its identifier.
     * @param source_id the id of a source
     */
    lookup_source(source_id: string): Source
    /**
     * Validates `value` content complies with the key specification. That is, it has
     * the expected type, and value are within the range specified in key (for
     * integer values).
     * @param key a metadata key
     * @param value value to be validate
     */
    metadata_key_validate(key: KeyID, value: any): boolean
    /**
     * Registers a metadata key
     * @param param_spec The definition of the key to register
     */
    register_metadata_key(param_spec: GObject.ParamSpec): KeyID
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
    register_metadata_key_relation(key1: KeyID, key2: KeyID): void
    register_metadata_key_system(param_spec: GObject.ParamSpec, key: KeyID): KeyID
    /**
     * Register a `source` in the `registry` with the given `plugin` information
     * @param plugin the plugin which owns the source
     * @param source the source to register
     */
    register_source(plugin: Plugin, source: Source): boolean
    restrict_plugins(plugins: string): void
    shutdown(): void
    /**
     * Unload from memory a module identified by `plugin_id`. This means call the
     * module's deinit function.
     * @param plugin_id the identifier of the plugin
     */
    unload_plugin(plugin_id: string): boolean
    /**
     * Removes the `source` from the `registry` hash table
     * @param source the source to unregister
     */
    unregister_source(source: Source): boolean

    // Own signals of Grl-0.2.Grl.Registry

    connect(sigName: "metadata-key-added", callback: Registry_MetadataKeyAddedSignalCallback): number
    connect_after(sigName: "metadata-key-added", callback: Registry_MetadataKeyAddedSignalCallback): number
    emit(sigName: "metadata-key-added", key: string, ...args: any[]): void
    connect(sigName: "source-added", callback: Registry_SourceAddedSignalCallback): number
    connect_after(sigName: "source-added", callback: Registry_SourceAddedSignalCallback): number
    emit(sigName: "source-added", source: Source, ...args: any[]): void
    connect(sigName: "source-removed", callback: Registry_SourceRemovedSignalCallback): number
    connect_after(sigName: "source-removed", callback: Registry_SourceRemovedSignalCallback): number
    emit(sigName: "source-removed", source: Source, ...args: any[]): void

    // Class property signals of Grl-0.2.Grl.Registry

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Registry extends GObject.Object {

    // Own properties of Grl-0.2.Grl.Registry

    static name: string
    static $gtype: GObject.GType<Registry>

    // Constructors of Grl-0.2.Grl.Registry

    constructor(config?: Registry_ConstructProps) 
    _init(config?: Registry_ConstructProps): void
    /**
     * As the registry is designed to work as a singleton, this
     * method is in charge of creating the only instance or
     * returned it if it is already in memory.
     */
    static get_default(): Registry
}

interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}

interface RelatedKeys {

    // Own fields of Grl-0.2.Grl.RelatedKeys

    parent: GObject.Object

    // Owm methods of Grl-0.2.Grl.RelatedKeys

    /**
     * Makes a deep copy of `relkeys` and its contents.
     */
    dup(): RelatedKeys
    /**
     * Get the value associated with `key` from `relkeys`. If it does not contain any
     * value, %NULL will be returned.
     * @param key key to look up.
     */
    get(key: KeyID): any
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a binary, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     */
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gboolean, or `key` is not in `relkeys,` then %FALSE is
     * returned.
     * @param key key to use
     */
    get_boolean(key: KeyID): boolean
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * the value is not of a boxed type, or `key` is not in `relkeys,` then %NULL is
     * returned.
     * @param key key to use
     */
    get_boxed(key: KeyID): object | null
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gfloat, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     */
    get_float(key: KeyID): number
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gint, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     */
    get_int(key: KeyID): number
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gint64, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     */
    get_int64(key: KeyID): number
    /**
     * Returns a list with keys contained in `relkeys`.
     */
    get_keys(): KeyID[]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not string, or `key` is not in `relkeys,` then %NULL is returned.
     * @param key key to use
     */
    get_string(key: KeyID): string
    /**
     * Checks if `key` is in `relkeys`.
     * @param key key to search
     */
    has_key(key: KeyID): boolean
    /**
     * Removes `key` from `relkeys` set.
     * @param key key to remove
     */
    remove(key: KeyID): void
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
    set(key: KeyID, value: any): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a binary-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the relkeys
     * @param size size of the buffer
     */
    set_binary(key: KeyID, buf: number, size: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a boolean-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param booleanvalue the new value
     */
    set_boolean(key: KeyID, booleanvalue: boolean): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a boxed-type key. Old value is freed and the new one is set.
     * @param key key to change or add
     * @param boxed the new value
     */
    set_boxed(key: KeyID, boxed: object | null): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a float-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: KeyID, floatvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as an int-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: KeyID, intvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a int64-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int64(key: KeyID, intvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a strying-type key. Old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: KeyID, strvalue: string): void

    // Class property signals of Grl-0.2.Grl.RelatedKeys

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RelatedKeys extends GObject.Object {

    // Own properties of Grl-0.2.Grl.RelatedKeys

    static name: string
    static $gtype: GObject.GType<RelatedKeys>

    // Constructors of Grl-0.2.Grl.RelatedKeys

    constructor(config?: RelatedKeys_ConstructProps) 
    /**
     * Creates a new #GrlRelatedKeys instance that can be used to store related
     * keys and their values.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GrlRelatedKeys instance that can be used to store related
     * keys and their values.
     * @constructor 
     */
    static new(): RelatedKeys
    _init(config?: RelatedKeys_ConstructProps): void
}

interface Source_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Grl-0.2.Grl.Source

    /**
     * Transparently split queries with count requests
     * bigger than a certain threshold into smaller queries.
     */
    auto_split_threshold?: number | null
    /**
     * Plugin the source belongs to
     */
    plugin?: Plugin | null
    /**
     * Source rank
     */
    rank?: number | null
    /**
     * A description of the source
     */
    source_desc?: string | null
    /**
     * #GIcon representing the source
     */
    source_icon?: Gio.Icon | null
    /**
     * The identifier of the source.
     */
    source_id?: string | null
    /**
     * The name of the source.
     */
    source_name?: string | null
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
    source_tags?: string[] | null
    /**
     * List of supported media types by this source.
     */
    supported_media?: MediaType | null
}

/**
 * Signal callback interface for `content-changed`
 */
interface Source_ContentChangedSignalCallback {
    ($obj: Source, changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void
}

interface Source {

    // Own properties of Grl-0.2.Grl.Source

    /**
     * Transparently split queries with count requests
     * bigger than a certain threshold into smaller queries.
     */
    auto_split_threshold: number
    /**
     * Plugin the source belongs to
     */
    plugin: Plugin
    /**
     * Source rank
     */
    rank: number
    /**
     * A description of the source
     */
    source_desc: string
    /**
     * #GIcon representing the source
     */
    source_icon: Gio.Icon
    /**
     * The identifier of the source.
     */
    source_id: string
    /**
     * The name of the source.
     */
    source_name: string
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
    source_tags: string[]
    /**
     * List of supported media types by this source.
     */
    supported_media: MediaType

    // Own fields of Grl-0.2.Grl.Source

    parent: GObject.Object

    // Owm methods of Grl-0.2.Grl.Source

    /**
     * Browse from media elements through an available list.
     * 
     * This method is asynchronous.
     * @param container a container of data transfer objects
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param options options wanted for that operation
     * @param callback the user defined callback
     */
    browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    /**
     * Browse media elements through an available
     * list.
     * 
     * This method is synchronous.
     * @param container a container of data transfer objects
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param options options wanted for that operation
     */
    browse_sync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[]
    /**
     * Gets how much elements the source is able to handle in a single request.
     * 
     * See #grl_source_set_auto_split_threshold()
     */
    get_auto_split_threshold(): number
    /**
     * Get the capabilities of `source` for `operation`.
     * @param operation a supported operation. Even though the type allows to specify several operations, only one should be provided here.
     */
    get_caps(operation: SupportedOps): Caps
    get_description(): string
    get_icon(): Gio.Icon
    get_id(): string
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
     */
    get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
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
     */
    get_media_from_uri_sync(uri: string, keys: KeyID[], options: OperationOptions): Media
    get_name(): string
    get_plugin(): Plugin
    /**
     * Gets the source rank
     */
    get_rank(): number
    /**
     * Gets the supported type of medias `source` can deal with.
     */
    get_supported_media(): MediaType
    get_tags(): string[]
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
    may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean
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
     * @param media the media which has changed, or `NULL` to use the root box.
     * @param change_type the type of change
     * @param location_unknown if change has happened in `media` or any descendant
     */
    notify_change(media: Media | null, change_type: SourceChangeType, location_unknown: boolean): void
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
     * @param location_unknown if change has happpened in `media` or any descendant
     */
    notify_change_list(changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void
    /**
     * Starts emitting ::content-changed signals when `source` discovers changes in
     * the content. This instructs `source` to setup the machinery needed to be aware
     * of changes in the content.
     */
    notify_change_start(): boolean
    /**
     * This will drop emission of ::content-changed signals from `source`. When this
     * is done `source` should stop the machinery required for it to track changes in
     * the content.
     */
    notify_change_stop(): boolean
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
     */
    query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    /**
     * Execute a specialized query (specific for each provider) on a media
     * repository.
     * 
     * This method is synchronous.
     * @param query the query to process
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param options options wanted for that operation
     */
    query_sync(query: string, keys: KeyID[], options: OperationOptions): Media[]
    /**
     * Remove a `media` from the `source` repository.
     * 
     * This method is asynchronous.
     * @param media a data transfer object
     * @param callback the user defined callback
     */
    remove(media: Media, callback: SourceRemoveCb): void
    /**
     * Remove a `media` from the `source` repository.
     * 
     * This method is synchronous.
     * @param media a data transfer object
     */
    remove_sync(media: Media): void
    /**
     * This method is intended to fetch the requested keys of metadata of
     * a given `media` to the media source.
     * 
     * This method is asynchronous.
     * @param media a data transfer object
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param options options to pass to this operation
     * @param callback the user defined callback
     */
    resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    /**
     * This method is intended to fetch the requested keys of metadata of
     * a given `media` to the media source.
     * 
     * This method is synchronous.
     * @param media a data transfer object
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param options options to pass to this operation
     */
    resolve_sync(media: Media | null, keys: KeyID[], options: OperationOptions): Media
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
     */
    search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
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
     */
    search_sync(text: string, keys: KeyID[], options: OperationOptions): Media[]
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
    set_auto_split_threshold(threshold: number): void
    /**
     * Similar to grl_source_supported_keys(), but these keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     */
    slow_keys(): KeyID[]
    /**
     * Store the `media` into the `parent` container
     * 
     * This method is asynchronous.
     * @param parent a parent to store the data transfer objects
     * @param media a data transfer object
     * @param flags flags to configure specific behaviour of the operation
     * @param callback the user defined callback
     */
    store(parent: MediaBox | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void
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
    store_metadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void
    /**
     * Update `keys` values from `media` in the `source`. After calling this method,
     * future queries that return this media object shall return this new value for
     * the selected key.
     * 
     * This function is synchronous.
     * @param media the #GrlMedia object that we want to operate on
     * @param keys a list of #GrlKeyID whose values we want to change
     * @param flags Flags to configure specific behaviors of the operation.
     */
    store_metadata_sync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[]
    /**
     * Store the `media` into the `parent` container.
     * 
     * This method is synchronous.
     * @param parent a #GrlMediaBox to store the data transfer objects
     * @param media a #GrlMedia data transfer object
     * @param flags flags to configure specific behaviour of the operation
     */
    store_sync(parent: MediaBox | null, media: Media, flags: WriteFlags): void
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     */
    supported_keys(): KeyID[]
    /**
     * By default the derived objects of #GrlSource can only resolve.
     */
    supported_operations(): number
    /**
     * Tests whether `source` can instantiate a #GrlMedia object representing
     * the media resource exposed at `uri`.
     * @param uri A URI that can be used to identify a media resource
     */
    test_media_from_uri(uri: string): boolean
    /**
     * Similar to grl_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     */
    writable_keys(): KeyID[]

    // Own virtual methods of Grl-0.2.Grl.Source

    vfunc_browse(bs: SourceBrowseSpec): void
    vfunc_cancel(operation_id: number): void
    /**
     * Get the capabilities of `source` for `operation`.
     * @virtual 
     * @param operation a supported operation. Even though the type allows to specify several operations, only one should be provided here.
     */
    vfunc_get_caps(operation: SupportedOps): Caps
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
     * @virtual 
     * @param media a media on which we want more metadata
     * @param key_id the key corresponding to a metadata we might want
     * @param missing_keys an optional originally empty list
     */
    vfunc_may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean
    vfunc_media_from_uri(mfus: SourceMediaFromUriSpec): void
    /**
     * Starts emitting ::content-changed signals when `source` discovers changes in
     * the content. This instructs `source` to setup the machinery needed to be aware
     * of changes in the content.
     * @virtual 
     */
    vfunc_notify_change_start(): boolean
    /**
     * This will drop emission of ::content-changed signals from `source`. When this
     * is done `source` should stop the machinery required for it to track changes in
     * the content.
     * @virtual 
     */
    vfunc_notify_change_stop(): boolean
    vfunc_query(qs: SourceQuerySpec): void
    vfunc_remove(rs: SourceRemoveSpec): void
    vfunc_resolve(ms: SourceResolveSpec): void
    vfunc_search(ss: SourceSearchSpec): void
    /**
     * Similar to grl_source_supported_keys(), but these keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     * @virtual 
     */
    vfunc_slow_keys(): KeyID[]
    vfunc_store(ss: SourceStoreSpec): void
    vfunc_store_metadata(sms: SourceStoreMetadataSpec): void
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     * @virtual 
     */
    vfunc_supported_keys(): KeyID[]
    vfunc_supported_operations(): SupportedOps
    /**
     * Tests whether `source` can instantiate a #GrlMedia object representing
     * the media resource exposed at `uri`.
     * @virtual 
     * @param uri A URI that can be used to identify a media resource
     */
    vfunc_test_media_from_uri(uri: string): boolean
    /**
     * Similar to grl_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     * @virtual 
     */
    vfunc_writable_keys(): KeyID[]

    // Own signals of Grl-0.2.Grl.Source

    connect(sigName: "content-changed", callback: Source_ContentChangedSignalCallback): number
    connect_after(sigName: "content-changed", callback: Source_ContentChangedSignalCallback): number
    emit(sigName: "content-changed", changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean, ...args: any[]): void

    // Class property signals of Grl-0.2.Grl.Source

    connect(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-split-threshold", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rank", ...args: any[]): void
    connect(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-desc", ...args: any[]): void
    connect(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-icon", ...args: any[]): void
    connect(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-id", ...args: any[]): void
    connect(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-name", ...args: any[]): void
    connect(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-tags", ...args: any[]): void
    connect(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supported-media", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Source extends GObject.Object {

    // Own properties of Grl-0.2.Grl.Source

    static name: string
    static $gtype: GObject.GType<Source>

    // Constructors of Grl-0.2.Grl.Source

    constructor(config?: Source_ConstructProps) 
    _init(config?: Source_ConstructProps): void
}

interface CapsClass {

    // Own fields of Grl-0.2.Grl.CapsClass

    /**
     * the parent class structure
     * @field 
     */
    parent: GObject.ObjectClass
}

/**
 * Grilo Capabilities class.
 * @record 
 */
abstract class CapsClass {

    // Own properties of Grl-0.2.Grl.CapsClass

    static name: string
}

interface CapsPrivate {
}

class CapsPrivate {

    // Own properties of Grl-0.2.Grl.CapsPrivate

    static name: string
}

interface ConfigClass {

    // Own fields of Grl-0.2.Grl.ConfigClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Grilo Config Class
 * @record 
 */
abstract class ConfigClass {

    // Own properties of Grl-0.2.Grl.ConfigClass

    static name: string
}

interface ConfigPrivate {
}

class ConfigPrivate {

    // Own properties of Grl-0.2.Grl.ConfigPrivate

    static name: string
}

interface DataClass {

    // Own fields of Grl-0.2.Grl.DataClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Grilo Data class
 * @record 
 */
abstract class DataClass {

    // Own properties of Grl-0.2.Grl.DataClass

    static name: string
}

interface DataPrivate {
}

class DataPrivate {

    // Own properties of Grl-0.2.Grl.DataPrivate

    static name: string
}

interface LogDomain {

    // Owm methods of Grl-0.2.Grl.LogDomain

    /**
     * Releases `domain`.
     */
    free(): void
}

class LogDomain {

    // Own properties of Grl-0.2.Grl.LogDomain

    static name: string
}

interface MediaAudioClass {

    // Own fields of Grl-0.2.Grl.MediaAudioClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: MediaClass
}

/**
 * Grilo Media audio Class
 * @record 
 */
abstract class MediaAudioClass {

    // Own properties of Grl-0.2.Grl.MediaAudioClass

    static name: string
}

interface MediaBoxClass {

    // Own fields of Grl-0.2.Grl.MediaBoxClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: MediaClass
}

/**
 * Grilo Media box Class
 * @record 
 */
abstract class MediaBoxClass {

    // Own properties of Grl-0.2.Grl.MediaBoxClass

    static name: string
}

interface MediaClass {

    // Own fields of Grl-0.2.Grl.MediaClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: DataClass
}

/**
 * Grilo Media Class
 * @record 
 */
abstract class MediaClass {

    // Own properties of Grl-0.2.Grl.MediaClass

    static name: string
}

interface MediaImageClass {

    // Own fields of Grl-0.2.Grl.MediaImageClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: MediaClass
}

/**
 * Grilo Media image Class
 * @record 
 */
abstract class MediaImageClass {

    // Own properties of Grl-0.2.Grl.MediaImageClass

    static name: string
}

interface MediaVideoClass {

    // Own fields of Grl-0.2.Grl.MediaVideoClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: MediaClass
}

/**
 * Grilo Media video Class
 * @record 
 */
abstract class MediaVideoClass {

    // Own properties of Grl-0.2.Grl.MediaVideoClass

    static name: string
}

interface OperationOptionsClass {

    // Own fields of Grl-0.2.Grl.OperationOptionsClass

    /**
     * the parent class structure
     * @field 
     */
    parent: GObject.ObjectClass
}

/**
 * Grilo Operation Options class.
 * @record 
 */
abstract class OperationOptionsClass {

    // Own properties of Grl-0.2.Grl.OperationOptionsClass

    static name: string
}

interface OperationOptionsPrivate {
}

class OperationOptionsPrivate {

    // Own properties of Grl-0.2.Grl.OperationOptionsPrivate

    static name: string
}

interface PluginClass {

    // Own fields of Grl-0.2.Grl.PluginClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: GObject.ObjectClass
}

abstract class PluginClass {

    // Own properties of Grl-0.2.Grl.PluginClass

    static name: string
}

interface PluginDescriptor {

    // Own fields of Grl-0.2.Grl.PluginDescriptor

    /**
     * the module identifier
     * @field 
     */
    plugin_id: string
    plugin_deinit: (plugin: Plugin) => void
    /**
     * the #GModule instance.
     * @field 
     */
    module: GModule.Module
    plugin_register_keys: (registry: Registry, plugin: Plugin) => void
}

/**
 * This structure is used for the module loader
 * @record 
 */
class PluginDescriptor {

    // Own properties of Grl-0.2.Grl.PluginDescriptor

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of Grl-0.2.Grl.PluginPrivate

    static name: string
}

interface RangeValue {

    // Own fields of Grl-0.2.Grl.RangeValue

    min: any
    max: any

    // Owm methods of Grl-0.2.Grl.RangeValue

    dup(): RangeValue
    free(): void
}

class RangeValue {

    // Own properties of Grl-0.2.Grl.RangeValue

    static name: string

    // Constructors of Grl-0.2.Grl.RangeValue

    constructor(min: any, max: any) 
    static new(min: any, max: any): RangeValue
    static hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: any, max: any): void
    static hashtable_new(): GLib.HashTable
}

interface RegistryClass {

    // Own fields of Grl-0.2.Grl.RegistryClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Grilo Registry class. Dynamic loader of plugins.
 * @record 
 */
abstract class RegistryClass {

    // Own properties of Grl-0.2.Grl.RegistryClass

    static name: string
}

interface RegistryPrivate {
}

class RegistryPrivate {

    // Own properties of Grl-0.2.Grl.RegistryPrivate

    static name: string
}

interface RelatedKeysClass {

    // Own fields of Grl-0.2.Grl.RelatedKeysClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Grilo Data Multivalued class
 * @record 
 */
abstract class RelatedKeysClass {

    // Own properties of Grl-0.2.Grl.RelatedKeysClass

    static name: string
}

interface RelatedKeysPrivate {
}

class RelatedKeysPrivate {

    // Own properties of Grl-0.2.Grl.RelatedKeysPrivate

    static name: string
}

interface SourceBrowseSpec {

    // Own fields of Grl-0.2.Grl.SourceBrowseSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operation_id: number
    /**
     * a container of data transfer objects
     * @field 
     */
    container: Media
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: object[]
    /**
     * options wanted for that operation
     * @field 
     */
    options: OperationOptions
    /**
     * the user defined callback
     * @field 
     */
    callback: SourceResultCb
    /**
     * the user data to pass in the callback
     * @field 
     */
    user_data: object
}

/**
 * Data transport structure used internally by the plugins which support
 * browse vmethod.
 * @record 
 */
class SourceBrowseSpec {

    // Own properties of Grl-0.2.Grl.SourceBrowseSpec

    static name: string
}

interface SourceClass {

    // Own fields of Grl-0.2.Grl.SourceClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: GObject.ObjectClass
    supported_operations: (source: Source) => SupportedOps
    supported_keys: (source: Source) => KeyID[]
    slow_keys: (source: Source) => KeyID[]
    writable_keys: (source: Source) => KeyID[]
    get_caps: (source: Source, operation: SupportedOps) => Caps
    resolve: (source: Source, ms: SourceResolveSpec) => void
    may_resolve: (source: Source, media: Media, key_id: KeyID, missing_keys: KeyID[]) => boolean
    test_media_from_uri: (source: Source, uri: string) => boolean
    media_from_uri: (source: Source, mfus: SourceMediaFromUriSpec) => void
    browse: (source: Source, bs: SourceBrowseSpec) => void
    search: (source: Source, ss: SourceSearchSpec) => void
    query: (source: Source, qs: SourceQuerySpec) => void
    remove: (source: Source, rs: SourceRemoveSpec) => void
    store: (source: Source, ss: SourceStoreSpec) => void
    store_metadata: (source: Source, sms: SourceStoreMetadataSpec) => void
    cancel: (source: Source, operation_id: number) => void
    notify_change_start: (source: Source) => boolean
    notify_change_stop: (source: Source) => boolean
}

/**
 * Grilo Source class. Override the vmethods to implement the
 * element functionality.
 * @record 
 */
abstract class SourceClass {

    // Own properties of Grl-0.2.Grl.SourceClass

    static name: string
}

interface SourceMediaFromUriSpec {

    // Own fields of Grl-0.2.Grl.SourceMediaFromUriSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operation_id: number
    /**
     * A URI that can be used to identify a media resource
     * @field 
     */
    uri: string
    /**
     * Metadata keys to resolve
     * @field 
     */
    keys: object[]
    /**
     * options wanted for that operation
     * @field 
     */
    options: OperationOptions
    /**
     * the user defined callback
     * @field 
     */
    callback: SourceResolveCb
    /**
     * the user data to pass in the callback
     * @field 
     */
    user_data: object
}

/**
 * Data transport structure used internally by the plugins which support
 * media_from_uri vmethod.
 * @record 
 */
class SourceMediaFromUriSpec {

    // Own properties of Grl-0.2.Grl.SourceMediaFromUriSpec

    static name: string
}

interface SourcePrivate {
}

class SourcePrivate {

    // Own properties of Grl-0.2.Grl.SourcePrivate

    static name: string
}

interface SourceQuerySpec {

    // Own fields of Grl-0.2.Grl.SourceQuerySpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operation_id: number
    /**
     * the query to process
     * @field 
     */
    query: string
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: object[]
    /**
     * options wanted for that operation
     * @field 
     */
    options: OperationOptions
    /**
     * the user defined callback
     * @field 
     */
    callback: SourceResultCb
    /**
     * the user data to pass in the callback
     * @field 
     */
    user_data: object
}

/**
 * Data transport structure used internally by the plugins which support
 * query vmethod.
 * @record 
 */
class SourceQuerySpec {

    // Own properties of Grl-0.2.Grl.SourceQuerySpec

    static name: string
}

interface SourceRemoveSpec {

    // Own fields of Grl-0.2.Grl.SourceRemoveSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * media identifier to remove
     * @field 
     */
    media_id: string
    /**
     * a data transfer object
     * @field 
     */
    media: Media
    /**
     * the user defined callback
     * @field 
     */
    callback: SourceRemoveCb
    /**
     * the user data to pass in the callback
     * @field 
     */
    user_data: object
}

/**
 * Data transport structure used internally by the plugins which support
 * store vmethod.
 * @record 
 */
class SourceRemoveSpec {

    // Own properties of Grl-0.2.Grl.SourceRemoveSpec

    static name: string
}

interface SourceResolveSpec {

    // Own fields of Grl-0.2.Grl.SourceResolveSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operation_id: number
    /**
     * a data transfer object
     * @field 
     */
    media: Media
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: object[]
    /**
     * options wanted for that operation
     * @field 
     */
    options: OperationOptions
    /**
     * the user defined callback
     * @field 
     */
    callback: SourceResolveCb
    /**
     * the user data to pass in the callback
     * @field 
     */
    user_data: object
}

/**
 * Data transport structure used internally by the plugins which support
 * resolve vmethod.
 * @record 
 */
class SourceResolveSpec {

    // Own properties of Grl-0.2.Grl.SourceResolveSpec

    static name: string
}

interface SourceSearchSpec {

    // Own fields of Grl-0.2.Grl.SourceSearchSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operation_id: number
    /**
     * the text to search
     * @field 
     */
    text: string
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: object[]
    /**
     * options wanted for that operation
     * @field 
     */
    options: OperationOptions
    /**
     * the user defined callback
     * @field 
     */
    callback: SourceResultCb
    /**
     * the user data to pass in the callback
     * @field 
     */
    user_data: object
}

/**
 * Data transport structure used internally by the plugins which support
 * search vmethod.
 * @record 
 */
class SourceSearchSpec {

    // Own properties of Grl-0.2.Grl.SourceSearchSpec

    static name: string
}

interface SourceStoreMetadataSpec {

    // Own fields of Grl-0.2.Grl.SourceStoreMetadataSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * a #GrlMedia transfer object
     * @field 
     */
    media: Media
    /**
     * List of keys to be stored/updated.
     * @field 
     */
    keys: object[]
    /**
     * Flags to control specific bahviors of the set metadata operation.
     * @field 
     */
    flags: WriteFlags
    /**
     * the callback passed to grl_source_store_metadata()
     * @field 
     */
    callback: SourceStoreCb
    /**
     * user data passed to grl_source_store_metadata()
     * @field 
     */
    user_data: object
    /**
     * for internal use of the framework only.
     * @field 
     */
    failed_keys: object[]
}

/**
 * Data transport structure used internally by the plugins which support
 * store_metadata vmethod.
 * @record 
 */
class SourceStoreMetadataSpec {

    // Own properties of Grl-0.2.Grl.SourceStoreMetadataSpec

    static name: string
}

interface SourceStoreSpec {

    // Own fields of Grl-0.2.Grl.SourceStoreSpec

    /**
     * a media source
     * @field 
     */
    source: Source
    /**
     * a parent to store the data transfer objects
     * @field 
     */
    parent: MediaBox
    /**
     * a data transfer object
     * @field 
     */
    media: Media
    /**
     * the user defined callback
     * @field 
     */
    callback: SourceStoreCb
    /**
     * the user data to pass in the callback
     * @field 
     */
    user_data: object
}

/**
 * Data transport structure used internally by the plugins which support
 * store vmethod.
 * @record 
 */
class SourceStoreSpec {

    // Own properties of Grl-0.2.Grl.SourceStoreSpec

    static name: string
}

    type KeyID = number
}
export default Grl;