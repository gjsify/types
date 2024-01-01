
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-grl-0.3-import.d.ts';
    
/**
 * Grl-0.3
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

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
const CONFIG_PATH_VAR: string
const COUNT_INFINITY: number
const KEYID_FORMAT: string
const METADATA_KEY_ALBUM: number
const METADATA_KEY_ALBUM_ARTIST: number
const METADATA_KEY_ALBUM_DISC_NUMBER: number
const METADATA_KEY_ARTIST: number
const METADATA_KEY_AUDIO_TRACK: number
const METADATA_KEY_AUTHOR: number
const METADATA_KEY_BITRATE: number
const METADATA_KEY_CAMERA_MODEL: number
const METADATA_KEY_CERTIFICATE: number
const METADATA_KEY_CHILDCOUNT: number
const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
const METADATA_KEY_COMPOSER: number
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
const METADATA_KEY_MB_RELEASE_GROUP_ID: number
const METADATA_KEY_MB_RELEASE_ID: number
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
function dateTimeFromIso8601(date: string): GLib.DateTime
/**
 * Deinitializes the Grilo library.
 * 
 * Call this function after finalizing using Grilo, in order to free and clean
 * up all the resources created.
 */
function deinit(): void
function gValueDup(value: any): any
function gValueFree(value: any): void
function gValueHashtableNew(): GLib.HashTable
function gValueHashtableNewDirect(): GLib.HashTable
function gValueNew(gType: GObject.GType): any
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
 * @returns a pointer to Grilo's option group. Should be dereferenced after use.
 */
function initGetOptionGroup(): GLib.OptionGroup
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
function logConfigure(config: string): void
/**
 * Retrieves the description associated with the key
 * @param key key to look up
 * @returns the description of the key
 */
function metadataKeyGetDesc(key: KeyID): string
/**
 * Retrieves the name associated with the key
 * @param key key to look up
 * @returns The name of the key
 */
function metadataKeyGetName(key: KeyID): string
/**
 * Retrieves the expected type for values associated with this key
 * @param key key to look up
 * @returns the expected value type
 */
function metadataKeyGetType(key: KeyID): GObject.GType
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
function multipleGetMediaFromUri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): void
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
 * @returns the operation identifier
 */
function multipleSearch(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
/**
 * Search for `text` in all the sources specified in `sources`.
 * 
 * This method is synchronous.
 * @param sources  a #GList of #GrlSource<!-- -->s where to search from (%NULL for all available sources with search capability)
 * @param text the text to search for
 * @param keys the #GList of #GrlKeyID to retrieve
 * @param options options wanted for that operation
 * @returns a list with #GrlMedia elements
 */
function multipleSearchSync(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions): Media[]
/**
 * Cancel an operation.
 * @param operationId the identifier of a running operation
 */
function operationCancel(operationId: number): void
/**
 * Obtains the previously attached data
 * @param operationId the identifier of a running operation
 * @returns The previously attached data.
 */
function operationGetData(operationId: number): any | null
/**
 * Attach a pointer to the specific operation.
 * @param operationId the identifier of a running operation
 * @param userData the data to attach
 */
function operationSetData(operationId: number, userData: any | null): void
/**
 * Attach a pointer to the specific operation.
 * 
 * Note that the `destroy_func` callback is not called if `user_data` is %NULL.
 * @param operationId the identifier of a running operation
 * @param userData the data to attach
 * @param destroyFunc function to release `user_data` when the operation terminates
 */
function operationSetDataFull(operationId: number, userData: any | null, destroyFunc: GLib.DestroyNotify | null): void
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
 * @param maxPageSize maximum value for page size (0 for unlimited size)
 * @param pageSize optimal page size
 * @param pageNumber page which contain the first element to retrieve (starting at 1)
 * @param internalOffset in the `page_number,` offset where first element can be found (starting at 0)
 */
function pagingTranslate(skip: number, count: number, maxPageSize: number, pageSize: number, pageNumber: number, internalOffset: number): void
function rangeValueHashtableInsert(hashTable: GLib.HashTable, key: any | null, min: any, max: any): void
function rangeValueHashtableNew(): GLib.HashTable
interface PluginDeinitFunc {
    (plugin: Plugin): void
}
interface PluginRegisterKeysFunc {
    (registry: Registry, plugin: Plugin): void
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
 * @param operationId operation identifier
 * @param media a data transfer object
 * @param error possible #GError generated at processing
 */
interface SourceResolveCb {
    (source: Source, operationId: number, media: Media, error: GLib.Error | null): void
}
/**
 * Prototype for the callback passed to the media sources' methods
 * @callback 
 * @param source a source
 * @param operationId operation identifier
 * @param media a data transfer object
 * @param remaining the number of remaining #GrlMedia to process, or GRL_SOURCE_REMAINING_UNKNOWN if it is unknown
 * @param error possible #GError generated at processing
 */
interface SourceResultCb {
    (source: Source, operationId: number, media: Media | null, remaining: number, error: GLib.Error | null): void
}
/**
 * Prototype for the callback passed to grl_source_store_foo functions
 * @callback 
 * @param source a source
 * @param media a #GrlMedia transfer object
 * @param failedKeys #GList of keys that could not be updated, if any
 * @param error possible #GError generated
 */
interface SourceStoreCb {
    (source: Source, media: Media, failedKeys: KeyID[], error: GLib.Error | null): void
}
module Caps {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Caps {

    // Own properties of Grl-0.3.Grl.Caps

    __gtype__: number

    // Own fields of Grl-0.3.Grl.Caps

    parent: GObject.Object

    // Owm methods of Grl-0.3.Grl.Caps

    getKeyFilter(): KeyID[]
    getKeyRangeFilter(): KeyID[]
    getTypeFilter(): TypeFilter
    /**
     * Checks if `key` is supported for filtering in `caps`.
     * @param key a #GrlKeyID
     * @returns %TRUE if @key can be used for filtering
     */
    isKeyFilter(key: KeyID): boolean
    /**
     * Checks if `key` is supported for filtering by range in `caps`.
     * @param key a #GrlKeyID
     * @returns %TRUE if @key can be used for filtering
     */
    isKeyRangeFilter(key: KeyID): boolean
    setKeyFilter(keys: KeyID[]): void
    setKeyRangeFilter(keys: KeyID[]): void
    /**
     * Sets the supported filter capability.
     * @param filter a #GrlTypeFilter
     */
    setTypeFilter(filter: TypeFilter): void
    /**
     * Checks whether (`key,` `value)` are authorized by `caps`.
     * @param key a key to test
     * @param value the value corresponding to `key` to test against `caps`
     * @returns %TRUE if (@key, @value) obey to @caps, %FALSE otherwise.
     */
    testOption(key: string, value: any): boolean

    // Class property signals of Grl-0.3.Grl.Caps

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Caps extends GObject.Object {

    // Own properties of Grl-0.3.Grl.Caps

    static name: string

    // Constructors of Grl-0.3.Grl.Caps

    constructor(config?: Caps.ConstructorProperties) 
    /**
     * Creates a new caps object.
     * @constructor 
     * @returns a new caps object.
     */
    constructor() 
    /**
     * Creates a new caps object.
     * @constructor 
     * @returns a new caps object.
     */
    static new(): Caps
    _init(config?: Caps.ConstructorProperties): void
}

module Config {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Config {

    // Own properties of Grl-0.3.Grl.Config

    __gtype__: number

    // Own fields of Grl-0.3.Grl.Config

    parent: GObject.Object
    priv: ConfigPrivate
    grlReserved: any[]

    // Owm methods of Grl-0.3.Grl.Config

    getApiKey(): string | null
    getApiKeyBlob(size: number): number
    getApiSecret(): string | null
    getApiToken(): string | null
    getApiTokenSecret(): string | null
    /**
     * Gets the value of `param` encoded as base64. If `size` is not %NULL, it puts
     * there the size of the value.
     * @param param a binary type parameter
     * @param size place for size of value
     * @returns @param value
     */
    getBinary(param: string, size: number | null): number
    getBoolean(param: string): boolean
    getFloat(param: string): number
    getInt(param: string): number
    getPassword(): string | null
    getPlugin(): string | null
    getSource(): string | null
    getString(param: string): string | null
    getUsername(): string | null
    hasParam(param: string): boolean
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
    setApiKey(key: string): void
    /**
     * Set the binary API key in the configuration
     * @param blob the binary API key blob
     * @param size the size of the blob
     */
    setApiKeyBlob(blob: number, size: number): void
    /**
     * Set the webservice passphrase in the configuration
     * @param secret the webservice passphrase
     */
    setApiSecret(secret: string): void
    /**
     * Set the webservice API token in the configuration
     * @param token the API token
     */
    setApiToken(token: string): void
    /**
     * Set the webservice API token secret in the configuration
     * (Needed by OAuth)
     * @param secret the API token
     */
    setApiTokenSecret(secret: string): void
    /**
     * Set `param` value.
     * @param param a binary type parameter
     * @param blob a base64 encoded binary value
     * @param size size of `value`
     */
    setBinary(param: string, blob: number, size: number): void
    /**
     * Set `param` `value`.
     * @param param a boolean type parameter
     * @param value a value
     */
    setBoolean(param: string, value: boolean): void
    /**
     * Set `param` `value`.
     * @param param a float type parameter
     * @param value a value
     */
    setFloat(param: string, value: number): void
    /**
     * Set `param` `value`.
     * @param param an integer type parameter
     * @param value a value
     */
    setInt(param: string, value: number): void
    /**
     * Set the password in the configuration
     * @param password the password
     */
    setPassword(password: string): void
    /**
     * Set the plugin key in the configuration
     * @param plugin the plugin id
     */
    setPlugin(plugin: string): void
    /**
     * Set the source key in the configuration
     * @param source the source id
     */
    setSource(source: string): void
    /**
     * Set `param` `value`.
     * @param param a string type parameter
     * @param value a value
     */
    setString(param: string, value: string): void
    /**
     * Set the username in the configuration
     * @param username the username
     */
    setUsername(username: string): void

    // Class property signals of Grl-0.3.Grl.Config

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Config extends GObject.Object {

    // Own properties of Grl-0.3.Grl.Config

    static name: string

    // Constructors of Grl-0.3.Grl.Config

    constructor(config?: Config.ConstructorProperties) 
    /**
     * Creates a new data config object that will be associated with a plugin
     * (if `source` is NULL), or a specific source spawned from a plugin (if
     * `source` is not NULL). The latter may be useful for plugins
     * spawning various sources, each one needing a different configuration.
     * @constructor 
     * @param plugin plugin id for this configuration
     * @param source source id for this configuration
     * @returns a newly-allocated data config. The data config associated with the plugin should not be freed until the plugin has been unloaded.
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
     * @returns a newly-allocated data config. The data config associated with the plugin should not be freed until the plugin has been unloaded.
     */
    static new(plugin: string, source: string | null): Config
    _init(config?: Config.ConstructorProperties): void
}

module Data {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Data {

    // Own properties of Grl-0.3.Grl.Data

    __gtype__: number

    // Own fields of Grl-0.3.Grl.Data

    parent: GObject.Object
    priv: DataPrivate
    grlReserved: any[]

    // Owm methods of Grl-0.3.Grl.Data

    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    addBinary(key: KeyID, buf: number, size: number): void
    /**
     * Appends a new boxed value for `key` in `data`.
     * @param key key to append
     * @param boxed the new value
     */
    addBoxed(key: KeyID, boxed: any | null): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    addFloat(key: KeyID, floatvalue: number): void
    /**
     * Appends the value associated with `key_name` to `data`. This `key_name` is used to create
     * a new #GParamSpec instance, which is further used to create and register a key using
     * grl_registry_register_metadata_key().
     * 
     * A property key_name consists of segments consisting of ASCII letters and
     * digits, separated by either the '-' or '_' character. The first
     * character of a property key_name must be a letter. Key_names which violate these
     * rules lead to undefined behaviour.
     * @param keyName name of the key to change or add
     * @param value the new value
     * @returns TRUE if @value was added to @key_name, FALSE otherwise.
     */
    addForId(keyName: string, value: any): boolean
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    addInt(key: KeyID, intvalue: number): void
    /**
     * Appends a new int64 value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    addInt64(key: KeyID, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    addRelatedKeys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    addString(key: KeyID, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     * @returns a new #GrlData. Free it with #g_object_unref.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * @param key key to look up.
     * @returns a #GValue. This value should not be modified nor freed by user.
     */
    get(key: KeyID): any
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * @param key key to use
     * @returns buffer location associated with the @key, or %NULL in other case. If successful @size will be set the to the buffer size.
     */
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    /**
     * Returns the first boxed value associated with `key` from `data`. If `key` has
     * no first value, that value is not of a boxed type, or `key` is not in `data,`
     * then %NULL is returned.
     * @param key key to use
     * @returns the boxed instance associated with @key if possible, or %NULL in other cases. The caller should not change nor free the value.
     */
    getBoxed(key: KeyID): any | null
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     * @returns float value associated with @key, or 0 in other case.
     */
    getFloat(key: KeyID): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     * @returns int value associated with @key, or 0 in other case.
     */
    getInt(key: KeyID): number
    /**
     * Returns the first int64 value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     * @returns int value associated with @key, or 0 in other case.
     */
    getInt64(key: KeyID): number
    /**
     * Returns a list with keys contained in `data`.
     * @returns an array with the keys. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
     */
    getKeys(): KeyID[]
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
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * @param key a metadata key
     * @returns a #GList with values. Do not change or free the values. Free the list with #g_list_free.
     */
    getSingleValuesForKey(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * @param key a metadata key
     * @returns a #GList with values. Do not change or free the strings. Free the list with #g_list_free.
     */
    getSingleValuesForKeyString(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * @param key key to use
     * @returns string associated with @key, or %NULL in other case. Caller should not change nor free the value.
     */
    getString(key: KeyID): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     * @returns %TRUE if @key is in @data, %FALSE in other case.
     */
    hasKey(key: KeyID): boolean
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
    removeNth(key: KeyID, index: number): void
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
    setBinary(key: KeyID, buf: number, size: number): void
    /**
     * Sets the first boolean value associated with `key` in `data`. If `key` already
     * has a first value, old value is replaced by the new one.
     * @param key key to change or add
     * @param boolvalue the new value
     */
    setBoolean(key: KeyID, boolvalue: boolean): void
    /**
     * Sets the first boxed value associated with `key` in `data`. If `key` already
     * has a value, the old value is freed and the new one is set.
     * @param key key to change or add
     * @param boxed the new value
     */
    setBoxed(key: KeyID, boxed: any | null): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    setFloat(key: KeyID, floatvalue: number): void
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
     * @param keyName name of the key to change or add
     * @param value the new value
     * @returns TRUE if @value was set to @key_name, FALSE otherwise.
     */
    setForId(keyName: string, value: any): boolean
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    setInt(key: KeyID, intvalue: number): void
    /**
     * Sets the first int64 value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    setInt64(key: KeyID, intvalue: number): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    setString(key: KeyID, strvalue: string): void

    // Class property signals of Grl-0.3.Grl.Data

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Data extends GObject.Object {

    // Own properties of Grl-0.3.Grl.Data

    static name: string

    // Constructors of Grl-0.3.Grl.Data

    constructor(config?: Data.ConstructorProperties) 
    /**
     * Creates a new data object.
     * @constructor 
     * @returns a new data object.
     */
    constructor() 
    /**
     * Creates a new data object.
     * @constructor 
     * @returns a new data object.
     */
    static new(): Data
    _init(config?: Data.ConstructorProperties): void
}

module Media {

    // Constructor properties interface

    interface ConstructorProperties extends Data.ConstructorProperties {

        // Own constructor properties of Grl-0.3.Grl.Media

        mediaType?: MediaType | null
    }

}

interface Media {

    // Own properties of Grl-0.3.Grl.Media

    mediaType: MediaType
    __gtype__: number

    // Own fields of Grl-0.3.Grl.Media

    parent: Data & GObject.Object

    // Owm methods of Grl-0.3.Grl.Media

    /**
     * Adds a new artist to `media`.
     * @param artist an audio's artist
     */
    addArtist(artist: string): void
    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    addAuthor(author: string): void
    /**
     * Adds the director of the media
     * @param director director of the movie
     */
    addDirector(director: string): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    addExternalPlayer(player: string): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    addExternalUrl(url: string): void
    /**
     * Adds a new genre to `media`.
     * @param genre an audio's genre
     */
    addGenre(genre: string): void
    /**
     * Adds the keyword describing the `media`.
     * @param keyword a keyword describing the media
     */
    addKeyword(keyword: string): void
    /**
     * Adds a new lyrics to `media`.
     * @param lyrics an audio's lyrics
     */
    addLyrics(lyrics: string): void
    /**
     * Adds a new MusicBrainz artist id to `media`.
     * @param mbArtistId a MusicBrainz artist identifier
     */
    addMbArtistId(mbArtistId: string): void
    /**
     * Adds the actor performing in the movie.
     * @param performer an actor performing in the movie
     */
    addPerformer(performer: string): void
    /**
     * Adds the producer of the media.
     * @param producer producer of the movie
     */
    addProducer(producer: string): void
    /**
     * Adds regional publication and certification information for `region`.
     * @param region the region's ISO-3166-1 code
     * @param publicationDate the publication date
     * @param certificate the age certification
     */
    addRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    addThumbnail(thumbnail: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    addThumbnailBinary(thumbnail: number, size: number): void
    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `media` (useful for resources with more than one URL).
     * @param url a media's URL
     * @param mime th `url` mime type
     * @param bitrate the `url` bitrate, or -1 to ignore
     * @param framerate media framerate, or -1 to ignore
     * @param width media width, or -1 to ignore
     * @param height media height, or -1 to ignore
     */
    addUrlData(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void
    getAlbum(): string
    getAlbumArtist(): string
    getAlbumDiscNumber(): number
    getArtist(): string
    getArtistNth(index: number): string
    getAuthor(): string
    getAuthorNth(index: number): string
    getBitrate(): number
    getCameraModel(): string
    /**
     * Returns the media's first age certificate.
     * This should usually be the media's most relevant
     * age certificate. Use grl_media_get_region_data_nth() to
     * get other age certificates.
     * @returns the media's age certification
     */
    getCertificate(): string
    /**
     * Number of children of this container.
     * @returns number of children, or #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if unknown.
     */
    getChildcount(): number
    getComposer(): string
    getComposerNth(index: number): string
    getCreationDate(): GLib.DateTime
    getDescription(): string
    getDirector(): string
    getDirectorNth(index: number): string
    getDuration(): number
    getEpisode(): number
    getEpisodeTitle(): string
    getExposureTime(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getFavourite(): boolean
    getFlashUsed(): string
    getFramerate(): number
    getGenre(): string
    getGenreNth(index: number): string
    getHeight(): number
    getId(): string
    getIsoSpeed(): number
    getKeyword(): string
    getKeywordNth(index: number): string
    getLastPlayed(): GLib.DateTime
    getLastPosition(): number
    getLicense(): string
    getLyrics(): string
    getLyricsNth(index: number): string
    getMbAlbumId(): string
    getMbArtistId(): string
    getMbArtistIdNth(index: number): string
    getMbRecordingId(): string
    getMbReleaseGroupId(): string
    getMbReleaseId(): string
    getMbTrackId(): string
    /**
     * Gets the "media-type" property.
     * @returns media type
     */
    getMediaType(): MediaType
    getMime(): string
    getModificationDate(): GLib.DateTime
    getOrientation(): number
    getOriginalTitle(): string
    getPerformer(): string
    getPerformerNth(index: number): string
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getProducer(): string
    getProducerNth(index: number): string
    getPublicationDate(): GLib.DateTime
    getRating(): number
    getRegion(): string
    /**
     * Returns the media's age certificate and publication date for the first region.
     * This should usually be the media's most relevant region.
     * Use grl_media_get_region_data_nth() to get the age certificate and
     * publication date for other regions.
     * @returns the ISO-3166-1 of the region where the media was published (owned by @media).
     */
    getRegionData(): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
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
    getRegionDataNth(index: number): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getSeason(): number
    getShow(): string
    getSite(): string
    getSize(): number
    getSource(): string
    getStartTime(): number
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getTrackNumber(): number
    getUrl(): string
    getUrlData(framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string | null, /* bitrate */ number ]
    getUrlDataNth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string | null, /* bitrate */ number ]
    getWidth(): number
    /**
     * Check if `media` is an audio
     * @returns %TRUE if @media is an audio
     */
    isAudio(): boolean
    /**
     * Check if `media` is a container
     * @returns %TRUE if @media is a container
     */
    isContainer(): boolean
    /**
     * Check if `media` is an image
     * @returns %TRUE if @media is an image
     */
    isImage(): boolean
    /**
     * Check if `media` is a video
     * @returns %TRUE if @media is a video
     */
    isVideo(): boolean
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     * @returns serialized media
     */
    serialize(): string | null
    /**
     * Set the album of the media
     * @param album the audio's album
     */
    setAlbum(album: string): void
    /**
     * Set the main artist of the album of the media
     * @param albumArtist the audio's album main artist
     */
    setAlbumArtist(albumArtist: string): void
    /**
     * Set the disc number of the media for multi-disc album sets.
     * @param discNumber the disc number within an album
     */
    setAlbumDiscNumber(discNumber: number): void
    /**
     * Set the artist of the media
     * @param artist the audio's artist
     */
    setArtist(artist: string): void
    /**
     * Set the media's author
     * @param author the media's author
     */
    setAuthor(author: string): void
    /**
     * Set the bitrate of the media
     * @param bitrate the audio's bitrate
     */
    setBitrate(bitrate: number): void
    /**
     * Set the camera_model of the media
     * @param cameraModel model of camera used to take picture
     */
    setCameraModel(cameraModel: string): void
    /**
     * Set the media's first age certification.
     * This should usually be the media's most relevant
     * age certificate. Use grl_media_set_region_data() to
     * set other age certificates.
     * @param certificate The age certificate of the media
     */
    setCertificate(certificate: string): void
    /**
     * Sets the number of children of this container. Use
     * #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if it is unknown.
     * @param childcount number of children
     */
    setChildcount(childcount: number): void
    /**
     * Set the composer of the media
     * @param composer the audio's composer
     */
    setComposer(composer: string): void
    /**
     * Set the creation_date of the media
     * @param creationDate date when media was created
     */
    setCreationDate(creationDate: GLib.DateTime): void
    /**
     * Set the media's description
     * @param description the description
     */
    setDescription(description: string): void
    /**
     * Sets the director of the media.
     * @param director director of the movie
     */
    setDirector(director: string): void
    /**
     * Set the media's duration
     * @param duration the duration in seconds
     */
    setDuration(duration: number): void
    /**
     * Sets the episode number of the media
     * @param episode the video's episode
     */
    setEpisode(episode: number): void
    /**
     * Sets the title of an media
     * @param episodeTitle the title of the episode
     */
    setEpisodeTitle(episodeTitle: string): void
    /**
     * Set the exposure_time of the media
     * @param exposureTime picture's exposure time
     */
    setExposureTime(exposureTime: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    setExternalPlayer(player: string): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    setExternalUrl(url: string): void
    /**
     * Set if the media is favourite or not
     * @param favourite whether the item is favourite or not
     */
    setFavourite(favourite: boolean): void
    /**
     * Set the flash_used of the media
     * See
     * http://library.gnome.org/devel/ontology/unstable/nmm-classes.html#nmm-Flash
     * @param flashUsed whether the flash was used
     */
    setFlashUsed(flashUsed: string): void
    /**
     * Set the framerate of the media
     * @param framerate the video's framerate
     */
    setFramerate(framerate: number): void
    /**
     * Set the genre of the media
     * @param genre the audio's genre
     */
    setGenre(genre: string): void
    /**
     * Set the height of the media
     * @param height the video's height
     */
    setHeight(height: number): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    setId(id: string): void
    /**
     * Set the iso_speed of the media
     * @param isoSpeed picture's iso speed
     */
    setIsoSpeed(isoSpeed: number): void
    /**
     * Sets the keyword describing the `media`.
     * @param keyword a keyword describing the media
     */
    setKeyword(keyword: string): void
    /**
     * Set the media last played date
     * @param lastPlayed date when the media was last played
     */
    setLastPlayed(lastPlayed: GLib.DateTime): void
    /**
     * Set the media last played position
     * @param lastPosition second at which the media playback was interrupted
     */
    setLastPosition(lastPosition: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    setLicense(license: string): void
    /**
     * Set the lyrics of the media
     * @param lyrics the audio's lyrics
     */
    setLyrics(lyrics: string): void
    /**
     * Set the MusicBrainz album identifier of the media
     * @param mbAlbumId the MusicBrainz album identifier
     */
    setMbAlbumId(mbAlbumId: string): void
    /**
     * Set the MusicBrainz artist identifier of the media
     * @param mbArtistId the MusicBrainz artist identifier
     */
    setMbArtistId(mbArtistId: string): void
    /**
     * Set the MusicBrainz recording identifier of the media
     * @param mbRecordingId the MusicBrainz recording identifier
     */
    setMbRecordingId(mbRecordingId: string): void
    /**
     * Set the MusicBrainz Release Group identifier of the media
     * @param mbReleaseGroupId Album group release identifier in MusicBrainz
     */
    setMbReleaseGroupId(mbReleaseGroupId: string): void
    /**
     * Set the MusicBrainz release identifier of the media
     * @param mbReleaseId Album release identifier in MusicBrainz
     */
    setMbReleaseId(mbReleaseId: string): void
    /**
     * Set the MusicBrainz track identifier of the media
     * @param mbTrackId the MusicBrainz track identifier
     */
    setMbTrackId(mbTrackId: string): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    setMime(mime: string): void
    /**
     * Set the modification date of the media
     * @param modificationDate date when the media was last modified
     */
    setModificationDate(modificationDate: GLib.DateTime): void
    /**
     * Set the orientation of the media
     * @param orientation degrees clockwise orientation of the picture
     */
    setOrientation(orientation: number): void
    /**
     * Sets the original, untranslated title of the media.
     * @param originalTitle original, untranslated title of the movie
     */
    setOriginalTitle(originalTitle: string): void
    /**
     * Sets the actor performing in the movie.
     * @param performer an actor performing in the movie
     */
    setPerformer(performer: string): void
    /**
     * Set the media play count
     * @param playCount the play count
     */
    setPlayCount(playCount: number): void
    /**
     * Sets the producer of the media.
     * @param producer producer of the movie
     */
    setProducer(producer: string): void
    /**
     * Set the publication date of `media`.
     * @param date the date
     */
    setPublicationDate(date: GLib.DateTime): void
    /**
     * This method receives a rating and its scale and normalizes it on a scale
     * from 0...5 to match the usual five-star rating.
     * @param rating a rating value
     * @param max maximum rating value
     */
    setRating(rating: number, max: number): void
    /**
     * Sets the `region` where `media` was published.
     * @param region the region's ISO-3166-1 code
     */
    setRegion(region: string): void
    /**
     * Sets regional publication and certification information for `region`.
     * @param region the region's ISO-3166-1 code
     * @param publicationDate the publication date
     * @param certificate the age certification
     */
    setRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    /**
     * Sets the season number of the media
     * @param season the video's season
     */
    setSeason(season: number): void
    /**
     * Sets the show title of the media
     * @param show the video's show name
     */
    setShow(show: string): void
    /**
     * Set the media's site. A site is a website about the media such as a
     * studio's promotional website for a movie.
     * @param site the site
     */
    setSite(site: string): void
    /**
     * Set the size of the media
     * @param size the size in bytes
     */
    setSize(size: number): void
    /**
     * Set the media's source
     * @param source the source
     */
    setSource(source: string): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    setStudio(studio: string): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    setThumbnail(thumbnail: string): void
    /**
     * Set the media's binary thumbnail
     * @param thumbnail thumbnail buffer
     * @param size thumbnail buffer size
     */
    setThumbnailBinary(thumbnail: number, size: number): void
    /**
     * Set the media's title
     * @param title the title
     */
    setTitle(title: string): void
    /**
     * Set the track number of the media
     * @param trackNumber the audio's track number
     */
    setTrackNumber(trackNumber: number): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    setUrl(url: string): void
    /**
     * Sets all the keys related with the URL of a media resource in one go.
     * @param url the media's URL
     * @param mime the `url` mime type
     * @param bitrate the `url` bitrate, or -1 to ignore
     * @param framerate media framerate, or -1 to ignore
     * @param width media width, or -1 to ignore
     * @param height media height, or -1 to ignore
     */
    setUrlData(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void
    /**
     * Set the width of the media
     * @param width the video's width
     */
    setWidth(width: number): void

    // Class property signals of Grl-0.3.Grl.Media

    connect(sigName: "notify::media-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Media extends Data {

    // Own properties of Grl-0.3.Grl.Media

    static name: string

    // Constructors of Grl-0.3.Grl.Media

    constructor(config?: Media.ConstructorProperties) 
    /**
     * Creates a new media audio object.
     * @constructor 
     * @returns a newly-allocated media audio.
     */
    static audioNew(): Media
    /**
     * Creates a new media container object.
     * @constructor 
     * @returns a newly-allocated media container.
     */
    static containerNew(): Media
    /**
     * Creates a new media image object.
     * @constructor 
     * @returns a newly-allocated media image.
     */
    static imageNew(): Media
    /**
     * Creates a new data media object.
     * @constructor 
     * @returns a newly-allocated data media.
     */
    constructor() 
    /**
     * Creates a new data media object.
     * @constructor 
     * @returns a newly-allocated data media.
     */
    static new(): Media

    // Overloads of new

    /**
     * Creates a new data object.
     * @constructor 
     * @returns a new data object.
     */
    static new(): Data
    /**
     * Creates a new media video object.
     * @constructor 
     * @returns a newly-allocated media video.
     */
    static videoNew(): Media
    _init(config?: Media.ConstructorProperties): void
    /**
     * Unserializes a GrlMedia.
     * @param serial a serialized media
     * @returns the GrlMedia from the serial
     */
    static unserialize(serial: string): Media
}

module OperationOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface OperationOptions {

    // Own properties of Grl-0.3.Grl.OperationOptions

    __gtype__: number

    // Own fields of Grl-0.3.Grl.OperationOptions

    parent: GObject.Object

    // Owm methods of Grl-0.3.Grl.OperationOptions

    copy(): OperationOptions
    /**
     * Get the count option, that is, the number of elements to retrieve in an
     * operation done with `options`.
     * @returns the value of the count option, or a default value if it is not set.
     */
    getCount(): number
    getKeyFilter(key: KeyID): any
    getKeyFilterList(): KeyID[]
    /**
     * Stores the limits of the range in the filter for `key` in `min_value` and
     * `max_value`. If some of the values has no limit, it will set a %NULL.
     * @param key a #GrlKeyID
     */
    getKeyRangeFilter(key: KeyID): [ /* minValue */ any, /* maxValue */ any ]
    getKeyRangeFilterList(): KeyID[]
    getResolutionFlags(): ResolutionFlags
    /**
     * Get the skip option, that is, the number of elements to skip before
     * retrieving media items in an operation done with `options`.
     * @returns the value of the skip option, or a default value if it is not set.
     */
    getSkip(): number
    getTypeFilter(): TypeFilter
    /**
     * Check whether `options` obey to `caps`.
     * Optionally provide the options that match (respectively don't match) `caps`
     * in `supported_options` (respectively `unsupported_options)`.
     * This would typically (but not necessarily) be used with a
     * #GrlOperationOptions instance that was created with %NULL caps.
     * @param caps capabilities against which we want to test `options`
     * @returns %TRUE if @options obey to @caps, %FALSE otherwise.
     */
    obeyCaps(caps: Caps): [ /* returnType */ boolean, /* supportedOptions */ OperationOptions, /* unsupportedOptions */ OperationOptions ]
    /**
     * Set the count option for an operation. Will only succeed if `count` obey to
     * the inherent capabilities of `options`.
     * @param count number of elements to retrieve in an operation
     * @returns %TRUE if @count could be set, %FALSE otherwise.
     */
    setCount(count: number): boolean
    setKeyFilters(filters: GLib.HashTable): boolean
    /**
     * Set filter as "`key` == `value"`.
     * @param key a #GrlKeyID
     * @param value a #GValue
     * @returns %TRUE on success
     */
    setKeyFilterValue(key: KeyID, value: any): boolean
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
     * @param minValue minimum value for range
     * @param maxValue maximum value for range
     * @returns %TRUE on success
     */
    setKeyRangeFilterValue(key: KeyID, minValue: any | null, maxValue: any | null): boolean
    /**
     * Set the resolution flags for an operation. Will only succeed if `flags` obey
     * to the inherent capabilities of `options`.
     * @param flags the resolution flags to be set for an operation. See #GrlResolutionFlags for possible values.
     * @returns %TRUE if @flags could be set, %FALSE otherwise.
     */
    setResolutionFlags(flags: ResolutionFlags): boolean
    /**
     * Set the skip option for an operation. Will only succeed if `skip` obeys to the
     * inherent capabilities of `options`.
     * @param skip number of elements to skip in an operation
     * @returns %TRUE if @skip could be set, %FALSE otherwise.
     */
    setSkip(skip: number): boolean
    /**
     * Set the type of media filter for an operation. Only those media elements that
     * match the `filter` will be returned. Will only succeed if `filter` obey to the
     * inherent capabilities of `options`.
     * @param filter the type of media to get
     * @returns %TRUE if @flags could be set, %FALSE otherwise
     */
    setTypeFilter(filter: TypeFilter): boolean

    // Class property signals of Grl-0.3.Grl.OperationOptions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OperationOptions extends GObject.Object {

    // Own properties of Grl-0.3.Grl.OperationOptions

    static name: string

    // Constructors of Grl-0.3.Grl.OperationOptions

    constructor(config?: OperationOptions.ConstructorProperties) 
    /**
     * Creates a new GrlOperationOptions object.
     * @constructor 
     * @param caps caps that options will have to match. If %NULL, all options will be accepted.
     * @returns a new GrlOperationOptions instance.
     */
    constructor(caps: Caps | null) 
    /**
     * Creates a new GrlOperationOptions object.
     * @constructor 
     * @param caps caps that options will have to match. If %NULL, all options will be accepted.
     * @returns a new GrlOperationOptions instance.
     */
    static new(caps: Caps | null): OperationOptions
    _init(config?: OperationOptions.ConstructorProperties): void
}

module Plugin {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Plugin {

    // Own properties of Grl-0.3.Grl.Plugin

    /**
     * `TRUE` if plugin is loaded.
     */
    readonly loaded: boolean
    __gtype__: number

    // Own fields of Grl-0.3.Grl.Plugin

    parent: GObject.Object

    // Owm methods of Grl-0.3.Grl.Plugin

    /**
     * Get the author of the plugin
     * @returns the author of the @plugin
     */
    getAuthor(): string
    /**
     * Get the description of the plugin
     * @returns the description of the @plugin
     */
    getDescription(): string
    /**
     * Get the filename containing the plugin
     * @returns the filename containing @plugin
     */
    getFilename(): string
    /**
     * Get the id of the plugin
     * @returns the id of the @plugin
     */
    getId(): string
    /**
     * Get the license of the plugin
     * @returns the license of the @plugin
     */
    getLicense(): string
    /**
     * Get the plugin module name
     * @returns the module name containing @plugin
     */
    getModuleName(): string
    /**
     * Get the name of the plugin
     * @returns the name of the @plugin
     */
    getName(): string
    /**
     * Get the site of the plugin
     * @returns the site of the @plugin
     */
    getSite(): string
    /**
     * Gets the sources belonging to `plugin`.
     * @returns a #GList of #GrlSource<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
     */
    getSources(): Source[]
    /**
     * Get the version of the plugin
     * @returns the version of the @plugin
     */
    getVersion(): string

    // Class property signals of Grl-0.3.Grl.Plugin

    connect(sigName: "notify::loaded", callback: (...args: any[]) => void): number
    on(sigName: "notify::loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loaded", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Plugin extends GObject.Object {

    // Own properties of Grl-0.3.Grl.Plugin

    static name: string

    // Constructors of Grl-0.3.Grl.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
}

module Registry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `metadata-key-added`
     */
    interface MetadataKeyAddedSignalCallback {
        (key: string | null): void
    }

    /**
     * Signal callback interface for `source-added`
     */
    interface SourceAddedSignalCallback {
        (source: Source): void
    }

    /**
     * Signal callback interface for `source-removed`
     */
    interface SourceRemovedSignalCallback {
        (source: Source): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Registry {

    // Own properties of Grl-0.3.Grl.Registry

    __gtype__: number

    // Own fields of Grl-0.3.Grl.Registry

    parent: GObject.Object

    // Owm methods of Grl-0.3.Grl.Registry

    /**
     * Activate all the plugins loaded.
     * @returns %TRUE if some plugin has been activated
     */
    activateAllPlugins(): boolean
    /**
     * Activates plugin identified by `plugin_id`.
     * @param pluginId plugin identifier
     * @returns %TRUE if the plugin is loaded correctly
     */
    activatePluginById(pluginId: string): boolean
    /**
     * Add a configuration for a plugin/source.
     * @param config a configuration set
     * @returns %TRUE on success
     */
    addConfig(config: Config): boolean
    /**
     * Load plugin configurations from a .ini-like config file.
     * @param configFile a key-value file containing the configuration
     * @returns %TRUE on success
     */
    addConfigFromFile(configFile: string): boolean
    /**
     * Load plugin configurations from a .ini-like resource file.
     * @param resourcePath a key-value file containing the configuration
     * @returns %TRUE on success
     */
    addConfigFromResource(resourcePath: string): boolean
    /**
     * Set this path as part of default paths to load plugins.
     * @param path a path with plugins
     */
    addDirectory(path: string): void
    /**
     * Returns a list with all registered keys in system.
     * @returns a #GList with all the available #GrlKeyID<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
     */
    getMetadataKeys(): KeyID[]
    /**
     * This function will return all the available plugins in the `registry`.
     * 
     * If `only_loaded` is %TRUE, the plugin list will contain only plugins that are
     * loaded.
     * @param onlyLoaded whether the returned list shall include only loaded plugins
     * @returns a #GList of available #GrlPlugin<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
     */
    getPlugins(onlyLoaded: boolean): Plugin[]
    /**
     * This function will return all the available sources in the `registry`.
     * 
     * If `ranked` is %TRUE, the source list will be ordered by rank.
     * @param ranked whether the returned list shall be returned ordered by rank
     * @returns a #GList of available #GrlSource<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
     */
    getSources(ranked: boolean): Source[]
    /**
     * Give an array of all the available sources in the `registry` capable of
     * perform the operations requested in `ops`.
     * 
     * If `ranked` is %TRUE, the source list will be ordered by rank.
     * @param ops a bitwise mangle of the requested operations.
     * @param ranked whether the returned list shall be returned ordered by rank
     * @returns a #GList of available #GrlSource<!-- -->s. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
     */
    getSourcesByOperations(ops: SupportedOps, ranked: boolean): Source[]
    /**
     * Load all the modules available in the default directory path.
     * 
     * The default directory path can be changed through the environment
     * variable %GRL_PLUGIN_PATH and it can contain several paths separated
     * by ":"
     * @param activate %TRUE if plugins must be activated after loading
     * @returns %FALSE% is all the configured plugin paths are invalid, %TRUE% otherwise.
     */
    loadAllPlugins(activate: boolean): boolean
    /**
     * Loads a module from shared object file stored in `path`
     * @param libraryFilename the path to the so file
     * @returns %TRUE if the module is loaded correctly
     */
    loadPlugin(libraryFilename: string): boolean
    /**
     * Loads a set of modules from directory in `path` which contains
     * a group shared object files.
     * @param path the path to the directory
     * @returns %TRUE if the directory is valid.
     */
    loadPluginDirectory(path: string): boolean
    /**
     * Look up for the metadata key with name `key_name`.
     * @param keyName the key name
     * @returns The metadata key, or GRL_METADATA_KEY_INVALID if not found
     */
    lookupMetadataKey(keyName: string): KeyID
    /**
     * Returns `key` description.
     * @param key a metadata key
     * @returns metadata key description, or @NULL if not found
     */
    lookupMetadataKeyDesc(key: KeyID): string
    /**
     * Returns `key` name.
     * @param key a metadata key
     * @returns metadata key name, or @NULL if not found
     */
    lookupMetadataKeyName(key: KeyID): string
    /**
     * Look up the list of keys that have a relation with `key`.
     * 
     * `key` is included in that list.
     * @param key a metadata key
     * @returns a #GList of related keys, or @NULL if key is invalid.
     */
    lookupMetadataKeyRelation(key: KeyID): KeyID[]
    /**
     * Returns `key` expected value type.
     * @param key a metadata key
     * @returns metadata key type, or @G_TYPE_INVALID if not found
     */
    lookupMetadataKeyType(key: KeyID): GObject.GType
    /**
     * This function will search and retrieve a plugin given its identifier.
     * @param pluginId the id of a plugin
     * @returns The plugin found
     */
    lookupPlugin(pluginId: string): Plugin
    /**
     * This function will search and retrieve a source given its identifier.
     * @param sourceId the id of a source
     * @returns The source found.
     */
    lookupSource(sourceId: string): Source
    /**
     * Validates `value` content complies with the key specification. That is, it has
     * the expected type, and value are within the range specified in key (for
     * integer values).
     * @param key a metadata key
     * @param value value to be validate
     * @returns %TRUE if complies
     */
    metadataKeyValidate(key: KeyID, value: any): boolean
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
     * @param paramSpec The definition of the key to register
     * @param bindKey The key the new key is bind to, or #GRL_METADATA_KEY_INVALID if it is not bound.
     * @returns The #GrlKeyID registered.
     */
    registerMetadataKey(paramSpec: GObject.ParamSpec, bindKey: KeyID): KeyID
    /**
     * Register a `source` in the `registry` with the given `plugin` information
     * @param plugin the plugin which owns the source
     * @param source the source to register
     * @returns %TRUE if success, %FALSE% otherwise.
     */
    registerSource(plugin: Plugin, source: Source): boolean
    /**
     * Unload from memory a module identified by `plugin_id`. This means call the
     * module's deinit function.
     * @param pluginId the identifier of the plugin
     * @returns %TRUE% on success.
     */
    unloadPlugin(pluginId: string): boolean
    /**
     * Removes the `source` from the `registry` hash table
     * @param source the source to unregister
     * @returns %TRUE if success, %FALSE% otherwise.
     */
    unregisterSource(source: Source): boolean

    // Own signals of Grl-0.3.Grl.Registry

    connect(sigName: "metadata-key-added", callback: Registry.MetadataKeyAddedSignalCallback): number
    on(sigName: "metadata-key-added", callback: Registry.MetadataKeyAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "metadata-key-added", callback: Registry.MetadataKeyAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "metadata-key-added", callback: Registry.MetadataKeyAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "metadata-key-added", ...args: any[]): void
    connect(sigName: "source-added", callback: Registry.SourceAddedSignalCallback): number
    on(sigName: "source-added", callback: Registry.SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: Registry.SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: Registry.SourceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-added", ...args: any[]): void
    connect(sigName: "source-removed", callback: Registry.SourceRemovedSignalCallback): number
    on(sigName: "source-removed", callback: Registry.SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: Registry.SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: Registry.SourceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-removed", ...args: any[]): void

    // Class property signals of Grl-0.3.Grl.Registry

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Registry extends GObject.Object {

    // Own properties of Grl-0.3.Grl.Registry

    static name: string

    // Constructors of Grl-0.3.Grl.Registry

    constructor(config?: Registry.ConstructorProperties) 
    _init(config?: Registry.ConstructorProperties): void
    /**
     * As the registry is designed to work as a singleton, this
     * method is in charge of creating the only instance or
     * returned it if it is already in memory.
     * @returns a new or an already created instance of the registry. It is NOT MT-safe
     */
    static getDefault(): Registry
}

module RelatedKeys {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RelatedKeys {

    // Own properties of Grl-0.3.Grl.RelatedKeys

    __gtype__: number

    // Own fields of Grl-0.3.Grl.RelatedKeys

    parent: GObject.Object

    // Owm methods of Grl-0.3.Grl.RelatedKeys

    /**
     * Makes a deep copy of `relkeys` and its contents.
     * @returns a new #GrlRelatedKeys. Free it with #g_object_unref.
     */
    dup(): RelatedKeys
    /**
     * Get the value associated with `key` from `relkeys`. If it does not contain any
     * value, %NULL will be returned.
     * @param key key to look up.
     * @returns a #GValue. This value should not be modified nor freed by user.
     */
    get(key: KeyID): any
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a binary, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     * @returns buffer location associated with @key, or %NULL in other case. If successful @size will be set to the buffer size.
     */
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gboolean, or `key` is not in `relkeys,` then %FALSE is
     * returned.
     * @param key key to use
     * @returns float value associated with @key, or %FALSE in other case.
     */
    getBoolean(key: KeyID): boolean
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * the value is not of a boxed type, or `key` is not in `relkeys,` then %NULL is
     * returned.
     * @param key key to use
     * @returns the #GBoxed value associated with @key if possible, or %NULL in other case. The caller should not change nor free the value.
     */
    getBoxed(key: KeyID): any | null
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gfloat, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     * @returns float value associated with @key, or 0 in other case.
     */
    getFloat(key: KeyID): number
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gint, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     * @returns int value associated with @key, or 0 in other case.
     */
    getInt(key: KeyID): number
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gint64, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     * @returns int64 value associated with @key, or 0 in other case.
     */
    getInt64(key: KeyID): number
    /**
     * Returns a list with keys contained in `relkeys`.
     * @returns a list with the keys. The content of the list should not be modified or freed. Use g_list_free() when done using the list.
     */
    getKeys(): KeyID[]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not string, or `key` is not in `relkeys,` then %NULL is returned.
     * @param key key to use
     * @returns string associated with @key, or %NULL in other case. Caller should not change nor free the value.
     */
    getString(key: KeyID): string
    /**
     * Checks if `key` is in `relkeys`.
     * @param key key to search
     * @returns %TRUE if @key is in @relkeys, %FALSE in other case.
     */
    hasKey(key: KeyID): boolean
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
    setBinary(key: KeyID, buf: number, size: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a boolean-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param booleanvalue the new value
     */
    setBoolean(key: KeyID, booleanvalue: boolean): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a boxed-type key. Old value is freed and the new one is set.
     * @param key key to change or add
     * @param boxed the new value
     */
    setBoxed(key: KeyID, boxed: any | null): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a float-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    setFloat(key: KeyID, floatvalue: number): void
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
     * @param keyName name of the key to change or add
     * @param value the new value
     * @returns TRUE if @value was set to @key_name, FALSE otherwise.
     */
    setForId(keyName: string, value: any): boolean
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as an int-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    setInt(key: KeyID, intvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a int64-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    setInt64(key: KeyID, intvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a strying-type key. Old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    setString(key: KeyID, strvalue: string): void

    // Class property signals of Grl-0.3.Grl.RelatedKeys

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RelatedKeys extends GObject.Object {

    // Own properties of Grl-0.3.Grl.RelatedKeys

    static name: string

    // Constructors of Grl-0.3.Grl.RelatedKeys

    constructor(config?: RelatedKeys.ConstructorProperties) 
    /**
     * Creates a new #GrlRelatedKeys instance that can be used to store related
     * keys and their values.
     * @constructor 
     * @returns a new object.
     */
    constructor() 
    /**
     * Creates a new #GrlRelatedKeys instance that can be used to store related
     * keys and their values.
     * @constructor 
     * @returns a new object.
     */
    static new(): RelatedKeys
    _init(config?: RelatedKeys.ConstructorProperties): void
}

module Source {

    // Signal callback interfaces

    /**
     * Signal callback interface for `content-changed`
     */
    interface ContentChangedSignalCallback {
        (changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Grl-0.3.Grl.Source

        /**
         * Transparently split queries with count requests
         * bigger than a certain threshold into smaller queries.
         */
        autoSplitThreshold?: number | null
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
        sourceDesc?: string | null
        /**
         * #GIcon representing the source
         */
        sourceIcon?: Gio.Icon | null
        /**
         * The identifier of the source.
         */
        sourceId?: string | null
        /**
         * The name of the source.
         */
        sourceName?: string | null
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
        sourceTags?: string[] | null
        /**
         * List of supported media types by this source.
         */
        supportedMedia?: SupportedMedia | null
    }

}

interface Source {

    // Own properties of Grl-0.3.Grl.Source

    /**
     * Transparently split queries with count requests
     * bigger than a certain threshold into smaller queries.
     */
    autoSplitThreshold: number
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
    sourceDesc: string | null
    /**
     * #GIcon representing the source
     */
    sourceIcon: Gio.Icon
    /**
     * The identifier of the source.
     */
    sourceId: string | null
    /**
     * The name of the source.
     */
    sourceName: string | null
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
    sourceTags: string[]
    /**
     * List of supported media types by this source.
     */
    supportedMedia: SupportedMedia
    __gtype__: number

    // Own fields of Grl-0.3.Grl.Source

    parent: GObject.Object

    // Owm methods of Grl-0.3.Grl.Source

    // Has conflict: browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
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
    browseSync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[]
    /**
     * Gets how much elements the source is able to handle in a single request.
     * 
     * See #grl_source_set_auto_split_threshold()
     * @returns the assigned threshold, or 0 if there is no threshold
     */
    getAutoSplitThreshold(): number
    // Has conflict: getCaps(operation: SupportedOps): Caps
    getDescription(): string
    getIcon(): Gio.Icon
    getId(): string
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
    getMediaFromUri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
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
    getMediaFromUriSync(uri: string, keys: KeyID[], options: OperationOptions): Media
    getName(): string
    getPlugin(): Plugin
    /**
     * Gets the source rank
     * @returns rank value
     */
    getRank(): number
    /**
     * Gets the supported type of medias `source` can deal with.
     * @returns a #GrlSupportedMedia value
     */
    getSupportedMedia(): SupportedMedia
    getTags(): string[]
    // Has conflict: mayResolve(media: Media, keyId: KeyID, missingKeys: KeyID[]): boolean
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
     * @param media the media which has changed, or `NULL` to use the root container.
     * @param changeType the type of change
     * @param locationUnknown if change has happened in `media` or any descendant
     */
    notifyChange(media: Media | null, changeType: SourceChangeType, locationUnknown: boolean): void
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
     * @param changedMedias the list of medias that have changed
     * @param changeType the type of change
     * @param locationUnknown if change has happpened in `media` or any descendant
     */
    notifyChangeList(changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean): void
    // Has conflict: notifyChangeStart(): boolean
    // Has conflict: notifyChangeStop(): boolean
    // Has conflict: query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
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
    querySync(query: string, keys: KeyID[], options: OperationOptions): Media[]
    // Has conflict: remove(media: Media, callback: SourceRemoveCb): void
    /**
     * Remove a `media` from the `source` repository.
     * 
     * This method is synchronous.
     * @param media a data transfer object
     */
    removeSync(media: Media): void
    // Has conflict: resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
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
    resolveSync(media: Media | null, keys: KeyID[], options: OperationOptions): Media
    // Has conflict: search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
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
    searchSync(text: string, keys: KeyID[], options: OperationOptions): Media[]
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
    setAutoSplitThreshold(threshold: number): void
    // Has conflict: slowKeys(): KeyID[]
    // Has conflict: store(parent: Media | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void
    // Has conflict: storeMetadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void
    /**
     * Update `keys` values from `media` in the `source`. After calling this method,
     * future queries that return this media object shall return this new value for
     * the selected key.
     * 
     * This function is synchronous.
     * @param media the #GrlMedia object that we want to operate on
     * @param keys a list of #GrlKeyID whose values we want to change
     * @param flags Flags to configure specific behaviors of the operation.
     * @returns  a #GList of keys that could not be updated, or @NULL
     */
    storeMetadataSync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[]
    /**
     * Store the `media` into the `parent` container.
     * 
     * This method is synchronous.
     * @param parent a #GrlMedia container to store the data transfer objects
     * @param media a #GrlMedia data transfer object
     * @param flags flags to configure specific behaviour of the operation
     */
    storeSync(parent: Media | null, media: Media, flags: WriteFlags): void
    // Has conflict: supportedKeys(): KeyID[]
    // Has conflict: supportedOperations(): number
    // Has conflict: testMediaFromUri(uri: string): boolean
    // Has conflict: writableKeys(): KeyID[]

    // Own virtual methods of Grl-0.3.Grl.Source

    browse(bs: SourceBrowseSpec): void
    cancel(operationId: number): void
    /**
     * Get the capabilities of `source` for `operation`.
     * @virtual 
     * @param operation a supported operation. Even though the type allows to specify several operations, only one should be provided here.
     * @returns The capabilities
     */
    getCaps(operation: SupportedOps): Caps
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
     * @param keyId the key corresponding to a metadata we might want
     * @param missingKeys an optional originally empty list
     * @returns @TRUE if there's a possibility that @source resolves @key_id for @media, @FALSE otherwise.
     */
    mayResolve(media: Media, keyId: KeyID, missingKeys: KeyID[]): boolean
    mediaFromUri(mfus: SourceMediaFromUriSpec): void
    /**
     * Starts emitting ::content-changed signals when `source` discovers changes in
     * the content. This instructs `source` to setup the machinery needed to be aware
     * of changes in the content.
     * @virtual 
     * @returns @TRUE if initialization has succeed.
     */
    notifyChangeStart(): boolean
    /**
     * This will drop emission of ::content-changed signals from `source`. When this
     * is done `source` should stop the machinery required for it to track changes in
     * the content.
     * @virtual 
     * @returns @TRUE if stop has succeed.
     */
    notifyChangeStop(): boolean
    query(qs: SourceQuerySpec): void
    remove(rs: SourceRemoveSpec): void
    resolve(ms: SourceResolveSpec): void
    search(ss: SourceSearchSpec): void
    /**
     * Similar to grl_source_supported_keys(), but these keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     * @virtual 
     * @returns a #GList with the keys
     */
    slowKeys(): KeyID[]
    store(ss: SourceStoreSpec): void
    storeMetadata(sms: SourceStoreMetadataSpec): void
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     * @virtual 
     * @returns a #GList with the keys
     */
    supportedKeys(): KeyID[]
    supportedOperations(): SupportedOps
    /**
     * Tests whether `source` can instantiate a #GrlMedia object representing
     * the media resource exposed at `uri`.
     * @virtual 
     * @param uri A URI that can be used to identify a media resource
     * @returns %TRUE if it can, %FALSE otherwise. This method is synchronous.
     */
    testMediaFromUri(uri: string): boolean
    /**
     * Similar to grl_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     * @virtual 
     * @returns  a #GList with the keys
     */
    writableKeys(): KeyID[]

    // Own signals of Grl-0.3.Grl.Source

    connect(sigName: "content-changed", callback: Source.ContentChangedSignalCallback): number
    on(sigName: "content-changed", callback: Source.ContentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-changed", callback: Source.ContentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-changed", callback: Source.ContentChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "content-changed", changeType: SourceChangeType, locationUnknown: boolean, ...args: any[]): void

    // Class property signals of Grl-0.3.Grl.Source

    connect(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-split-threshold", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::rank", callback: (...args: any[]) => void): number
    on(sigName: "notify::rank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rank", ...args: any[]): void
    connect(sigName: "notify::source-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-desc", ...args: any[]): void
    connect(sigName: "notify::source-icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-icon", ...args: any[]): void
    connect(sigName: "notify::source-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-id", ...args: any[]): void
    connect(sigName: "notify::source-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-name", ...args: any[]): void
    connect(sigName: "notify::source-tags", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-tags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-tags", ...args: any[]): void
    connect(sigName: "notify::supported-media", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-media", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Source extends GObject.Object {

    // Own properties of Grl-0.3.Grl.Source

    static name: string

    // Constructors of Grl-0.3.Grl.Source

    constructor(config?: Source.ConstructorProperties) 
    _init(config?: Source.ConstructorProperties): void
}

interface CapsClass {

    // Own fields of Grl-0.3.Grl.CapsClass

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

    // Own properties of Grl-0.3.Grl.CapsClass

    static name: string
}

interface CapsPrivate {
}

class CapsPrivate {

    // Own properties of Grl-0.3.Grl.CapsPrivate

    static name: string
}

interface ConfigClass {

    // Own fields of Grl-0.3.Grl.ConfigClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Grilo Config Class
 * @record 
 */
abstract class ConfigClass {

    // Own properties of Grl-0.3.Grl.ConfigClass

    static name: string
}

interface ConfigPrivate {
}

class ConfigPrivate {

    // Own properties of Grl-0.3.Grl.ConfigPrivate

    static name: string
}

interface DataClass {

    // Own fields of Grl-0.3.Grl.DataClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Grilo Data class
 * @record 
 */
abstract class DataClass {

    // Own properties of Grl-0.3.Grl.DataClass

    static name: string
}

interface DataPrivate {
}

class DataPrivate {

    // Own properties of Grl-0.3.Grl.DataPrivate

    static name: string
}

interface LogDomain {

    // Owm methods of Grl-0.3.Grl.LogDomain

    /**
     * Releases `domain`.
     */
    free(): void
}

class LogDomain {

    // Own properties of Grl-0.3.Grl.LogDomain

    static name: string
}

interface MediaClass {

    // Own fields of Grl-0.3.Grl.MediaClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: DataClass
}

/**
 * Grilo Media Class
 * @record 
 */
abstract class MediaClass {

    // Own properties of Grl-0.3.Grl.MediaClass

    static name: string
}

interface MediaPrivate {
}

class MediaPrivate {

    // Own properties of Grl-0.3.Grl.MediaPrivate

    static name: string
}

interface OperationOptionsClass {

    // Own fields of Grl-0.3.Grl.OperationOptionsClass

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

    // Own properties of Grl-0.3.Grl.OperationOptionsClass

    static name: string
}

interface OperationOptionsPrivate {
}

class OperationOptionsPrivate {

    // Own properties of Grl-0.3.Grl.OperationOptionsPrivate

    static name: string
}

interface PluginClass {

    // Own fields of Grl-0.3.Grl.PluginClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
}

abstract class PluginClass {

    // Own properties of Grl-0.3.Grl.PluginClass

    static name: string
}

interface PluginDescriptor {

    // Own fields of Grl-0.3.Grl.PluginDescriptor

    /**
     * the major version number of core that plugin was compiled for
     * @field 
     */
    majorVersion: number
    /**
     * the minor version number of core that plugin was compiled for
     * @field 
     */
    minorVersion: number
    /**
     * the plugin identifier
     * @field 
     */
    id: string | null
    /**
     * name of plugin
     * @field 
     */
    name: string | null
    /**
     * description of plugin
     * @field 
     */
    description: string | null
    /**
     * author of plugin
     * @field 
     */
    author: string | null
    /**
     * version of plugin
     * @field 
     */
    version: string | null
    /**
     * license of plugin
     * @field 
     */
    license: string | null
    /**
     * URL to provider of plugin
     * @field 
     */
    site: string | null
    /**
     * function to execute when the registry needs
     * to dispose the module.
     * @field 
     */
    deinit: PluginDeinitFunc
    /**
     * function to execute before loading the plugin. It's aim
     * is to register new keys
     * @field 
     */
    registerKeys: PluginRegisterKeysFunc
}

/**
 * This structure is used for the module loader
 * @record 
 */
class PluginDescriptor {

    // Own properties of Grl-0.3.Grl.PluginDescriptor

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of Grl-0.3.Grl.PluginPrivate

    static name: string
}

interface RangeValue {

    // Own fields of Grl-0.3.Grl.RangeValue

    min: any
    max: any

    // Owm methods of Grl-0.3.Grl.RangeValue

    dup(): RangeValue
    free(): void
}

class RangeValue {

    // Own properties of Grl-0.3.Grl.RangeValue

    static name: string

    // Constructors of Grl-0.3.Grl.RangeValue

    constructor(min: any, max: any) 
    static new(min: any, max: any): RangeValue
    static hashtableInsert(hashTable: GLib.HashTable, key: any | null, min: any, max: any): void
    static hashtableNew(): GLib.HashTable
}

interface RegistryClass {

    // Own fields of Grl-0.3.Grl.RegistryClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Grilo Registry class. Dynamic loader of plugins.
 * @record 
 */
abstract class RegistryClass {

    // Own properties of Grl-0.3.Grl.RegistryClass

    static name: string
}

interface RegistryPrivate {
}

class RegistryPrivate {

    // Own properties of Grl-0.3.Grl.RegistryPrivate

    static name: string
}

interface RelatedKeysClass {

    // Own fields of Grl-0.3.Grl.RelatedKeysClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Grilo Data Multivalued class
 * @record 
 */
abstract class RelatedKeysClass {

    // Own properties of Grl-0.3.Grl.RelatedKeysClass

    static name: string
}

interface RelatedKeysPrivate {
}

class RelatedKeysPrivate {

    // Own properties of Grl-0.3.Grl.RelatedKeysPrivate

    static name: string
}

interface SourceBrowseSpec {

    // Own fields of Grl-0.3.Grl.SourceBrowseSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operationId: number
    /**
     * a container of data transfer objects
     * @field 
     */
    container: Media
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: any[]
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
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * browse vmethod.
 * @record 
 */
class SourceBrowseSpec {

    // Own properties of Grl-0.3.Grl.SourceBrowseSpec

    static name: string
}

interface SourceClass {

    // Own fields of Grl-0.3.Grl.SourceClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
    supportedOperations: (source: Source) => SupportedOps
    supportedKeys: (source: Source) => KeyID[]
    slowKeys: (source: Source) => KeyID[]
    writableKeys: (source: Source) => KeyID[]
    getCaps: (source: Source, operation: SupportedOps) => Caps
    resolve: (source: Source, ms: SourceResolveSpec) => void
    mayResolve: (source: Source, media: Media, keyId: KeyID, missingKeys: KeyID[]) => boolean
    testMediaFromUri: (source: Source, uri: string) => boolean
    mediaFromUri: (source: Source, mfus: SourceMediaFromUriSpec) => void
    browse: (source: Source, bs: SourceBrowseSpec) => void
    search: (source: Source, ss: SourceSearchSpec) => void
    query: (source: Source, qs: SourceQuerySpec) => void
    remove: (source: Source, rs: SourceRemoveSpec) => void
    store: (source: Source, ss: SourceStoreSpec) => void
    storeMetadata: (source: Source, sms: SourceStoreMetadataSpec) => void
    cancel: (source: Source, operationId: number) => void
    notifyChangeStart: (source: Source) => boolean
    notifyChangeStop: (source: Source) => boolean
}

/**
 * Grilo Source class. Override the vmethods to implement the
 * element functionality.
 * @record 
 */
abstract class SourceClass {

    // Own properties of Grl-0.3.Grl.SourceClass

    static name: string
}

interface SourceMediaFromUriSpec {

    // Own fields of Grl-0.3.Grl.SourceMediaFromUriSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operationId: number
    /**
     * A URI that can be used to identify a media resource
     * @field 
     */
    uri: string | null
    /**
     * Metadata keys to resolve
     * @field 
     */
    keys: any[]
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
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * media_from_uri vmethod.
 * @record 
 */
class SourceMediaFromUriSpec {

    // Own properties of Grl-0.3.Grl.SourceMediaFromUriSpec

    static name: string
}

interface SourcePrivate {
}

class SourcePrivate {

    // Own properties of Grl-0.3.Grl.SourcePrivate

    static name: string
}

interface SourceQuerySpec {

    // Own fields of Grl-0.3.Grl.SourceQuerySpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operationId: number
    /**
     * the query to process
     * @field 
     */
    query: string | null
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: any[]
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
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * query vmethod.
 * @record 
 */
class SourceQuerySpec {

    // Own properties of Grl-0.3.Grl.SourceQuerySpec

    static name: string
}

interface SourceRemoveSpec {

    // Own fields of Grl-0.3.Grl.SourceRemoveSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * media identifier to remove
     * @field 
     */
    mediaId: string | null
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
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * store vmethod.
 * @record 
 */
class SourceRemoveSpec {

    // Own properties of Grl-0.3.Grl.SourceRemoveSpec

    static name: string
}

interface SourceResolveSpec {

    // Own fields of Grl-0.3.Grl.SourceResolveSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operationId: number
    /**
     * a data transfer object
     * @field 
     */
    media: Media
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: any[]
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
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * resolve vmethod.
 * @record 
 */
class SourceResolveSpec {

    // Own properties of Grl-0.3.Grl.SourceResolveSpec

    static name: string
}

interface SourceSearchSpec {

    // Own fields of Grl-0.3.Grl.SourceSearchSpec

    /**
     * a source
     * @field 
     */
    source: Source
    /**
     * operation identifier
     * @field 
     */
    operationId: number
    /**
     * the text to search
     * @field 
     */
    text: string | null
    /**
     * the #GList of #GrlKeyID<!-- -->s to request
     * @field 
     */
    keys: any[]
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
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * search vmethod.
 * @record 
 */
class SourceSearchSpec {

    // Own properties of Grl-0.3.Grl.SourceSearchSpec

    static name: string
}

interface SourceStoreMetadataSpec {

    // Own fields of Grl-0.3.Grl.SourceStoreMetadataSpec

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
    keys: any[]
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
    userData: any
    /**
     * for internal use of the framework only.
     * @field 
     */
    failedKeys: any[]
}

/**
 * Data transport structure used internally by the plugins which support
 * store_metadata vmethod.
 * @record 
 */
class SourceStoreMetadataSpec {

    // Own properties of Grl-0.3.Grl.SourceStoreMetadataSpec

    static name: string
}

interface SourceStoreSpec {

    // Own fields of Grl-0.3.Grl.SourceStoreSpec

    /**
     * a media source
     * @field 
     */
    source: Source
    /**
     * a parent to store the data transfer objects
     * @field 
     */
    parent: Media
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
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * store vmethod.
 * @record 
 */
class SourceStoreSpec {

    // Own properties of Grl-0.3.Grl.SourceStoreSpec

    static name: string
}

    type KeyID = number
}

export default Grl;
// END