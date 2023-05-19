
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-grl-0.1-import.d.ts';
    
/**
 * Grl-0.1
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
/**
 * GrlMetadata resolution flags
 * @bitfield 
 */
enum MetadataResolutionFlags {
    NORMAL,
    FULL,
    IDLE_RELAY,
    FAST_ONLY,
}
/**
 * Flags for metadata writing operations.
 * @bitfield 
 */
enum MetadataWritingFlags {
    NORMAL,
    FULL,
}
/**
 * Bitwise flags which reflect the kind of operations that a
 * #GrlMediaPlugin supports.
 * @bitfield 
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
const CONFIG_KEY_APIKEY: string | null
const CONFIG_KEY_APIKEY_BLOB: string | null
const CONFIG_KEY_APISECRET: string | null
const CONFIG_KEY_APITOKEN: string | null
const CONFIG_KEY_PASSWORD: string | null
const CONFIG_KEY_PLUGIN: string | null
const CONFIG_KEY_SOURCE: string | null
const CONFIG_KEY_USERNAME: string | null
const KEYID_FORMAT: string | null
const MEDIA_PLUGIN_AUTHOR: string | null
const MEDIA_PLUGIN_DESCRIPTION: string | null
const MEDIA_PLUGIN_LICENSE: string | null
const MEDIA_PLUGIN_NAME: string | null
const MEDIA_PLUGIN_SITE: string | null
const MEDIA_PLUGIN_VERSION: string | null
const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
const PADDING: number
const PADDING_SMALL: number
const PLUGIN_LIST_VAR: string | null
const PLUGIN_PATH_VAR: string | null
const PLUGIN_RANKS_VAR: string | null
const SOURCE_REMAINING_UNKNOWN: number
/**
 * Initializes the Grilo library
 * @param argv list of arguments
 */
function init(argv?: string[] | null): /* argv */ string[] | null
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
function logConfigure(config: string | null): void
function marshalVOIDBOXEDENUMBOOLEAN(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any, marshalData: any): void
/**
 * Retrieves the description associated with the key
 * @param key key to look up
 * @returns the description of the key
 */
function metadataKeyGetDesc(key: GObject.ParamSpec): string | null
/**
 * Retrieves the name associated with the key
 * @param key key to look up
 * @returns The name of the key
 */
function metadataKeyGetName(key: GObject.ParamSpec): string | null
function metadataKeySetupSystemKeys(registry: PluginRegistry): void
/**
 * Cancel a running multiple search by issuing a cancel operation on each
 * source involved involved in the operation.
 * @param searchId the identifier of the multiple operation to cancel
 */
function multipleCancel(searchId: number): void
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
function multipleGetMediaFromUri(uri: string | null, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): void
/**
 * Search for `text` in all the sources specified in `sources`.
 * 
 * If `text` is `NULL` then NULL-text searchs will be used for each searchable
 * plugin (see #grl_media_source_search for more details).
 * 
 * This method is asynchronous.
 * @param sources  a #GList of #GrlMediaSource<!-- -->s to search from (%NULL for all searchable sources)
 * @param text the text to search for
 * @param keys the #GList of #GrlKeyID to retrieve
 * @param count the maximum number of elements to retrieve
 * @param flags the operation flags
 * @param callback the user defined callback
 * @returns the operation identifier
 */
function multipleSearch(sources: MediaSource[] | null, text: string | null, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
/**
 * Search for `text` in all the sources specified in `sources`.
 * 
 * This method is synchronous.
 * @param sources  a #GList of #GrlMediaSource<!-- -->s where to search from (%NULL for all available sources with search capability)
 * @param text the text to search for
 * @param keys the #GList of #GrlKeyID to retrieve
 * @param count the maximum number of elements to retrieve
 * @param flags the operation flags
 * @returns a list with #GrlMedia elements
 */
function multipleSearchSync(sources: MediaSource[] | null, text: string | null, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags): Media[]
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
function operationGetData(operationId: number): any
/**
 * Attach a pointer to the specific operation.
 * @param operationId the identifier of a running operation
 * @param userData the data to attach
 */
function operationSetData(operationId: number, userData: any): void
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
 * @param maxPageSize maximum value for page size
 * @param pageSize optimal page size
 * @param pageNumber page which contain the first element to retrieve (starting at 1)
 * @param internalOffset in the `page_number,` offset where first element can be found (starting at 0)
 */
function pagingTranslate(skip: number, count: number, maxPageSize: number, pageSize: number, pageNumber: number, internalOffset: number): void
/**
 * Prototype for the callback passed to grl_media_source_metadata()
 * @callback 
 * @param source a media source
 * @param operationId operation identifier
 * @param media a data transfer object
 * @param error possible #GError generated at processing
 */
interface MediaSourceMetadataCb {
    (source: MediaSource, operationId: number, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to grl_media_source_remove()
 * @callback 
 * @param source a media source
 * @param media a data transfer object
 * @param error possible #GError generated at processing
 */
interface MediaSourceRemoveCb {
    (source: MediaSource, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to the media sources' methods
 * @callback 
 * @param source a media source
 * @param operationId operation identifier
 * @param media a data transfer object
 * @param remaining the number of remaining #GrlMedia to process, or GRL_SOURCE_REMAINING_UNKNOWN if it is unknown
 * @param error possible #GError generated at processing
 */
interface MediaSourceResultCb {
    (source: MediaSource, operationId: number, media: Media, remaining: number, error: number): void
}
/**
 * Prototype for the callback passed to grl_media_source_store()
 * @callback 
 * @param source a media source
 * @param parent The #GrlMediaBox who parents the `media`
 * @param media a data transfer object
 * @param error possible #GError generated at processing
 */
interface MediaSourceStoreCb {
    (source: MediaSource, parent: MediaBox, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to grl_metadata_source_resolve()
 * @callback 
 * @param source a metadata source
 * @param operationId operation identifier
 * @param media a #GrlMedia transfer object
 * @param error possible #GError generated when resolving the metadata
 */
interface MetadataSourceResolveCb {
    (source: MetadataSource, operationId: number, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to grl_metadata_source_set_metadata()
 * @callback 
 * @param source a metadata source
 * @param media a #GrlMedia transfer object
 * @param failedKeys #GList of keys that could not be updated, if any
 * @param error possible #GError generated when updating the metadata
 */
interface MetadataSourceSetMetadataCb {
    (source: MetadataSource, media: Media, failedKeys: GObject.ParamSpec[], error: number): void
}
module Config {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Config {

    // Own properties of Grl-0.1.Grl.Config

    __gtype__: number

    // Own fields of Grl-0.1.Grl.Config

    parent: GObject.Object
    priv: ConfigPrivate
    grlReserved: any[]

    // Owm methods of Grl-0.1.Grl.Config

    getApiKey(): string | null
    getApiKeyBlob(size: number): number
    getApiSecret(): string | null
    getApiToken(): string | null
    getBinary(param: string | null, size: number): number
    getBoolean(param: string | null): boolean
    getFloat(param: string | null): number
    getInt(param: string | null): number
    getPassword(): string | null
    getPlugin(): string | null
    getString(param: string | null): string | null
    getUsername(): string | null
    /**
     * otherwise.
     * @param param the param
     * @returns TRUE if @params has a defined value within @config, FALSE
     */
    hasParam(param: string | null): boolean
    set(param: string | null, value: any): void
    /**
     * Set the webservice API key in the configuration
     * @param key the API key
     */
    setApiKey(key: string | null): void
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
    setApiSecret(secret: string | null): void
    /**
     * Set the webservice API token in the configuration
     * @param token the API token
     */
    setApiToken(token: string | null): void
    setBinary(param: string | null, blob: number, size: number): void
    setBoolean(param: string | null, value: boolean): void
    setFloat(param: string | null, value: number): void
    setInt(param: string | null, value: number): void
    /**
     * Set the password in the configuration
     * @param password the password
     */
    setPassword(password: string | null): void
    /**
     * Set the plugin key in the configuration
     * @param plugin the plugin id
     */
    setPlugin(plugin: string | null): void
    /**
     * Set the plugin key in the configuration
     * @param source the source id
     */
    setSource(source: string | null): void
    setString(param: string | null, value: string | null): void
    /**
     * Set the username in the configuration
     * @param username the username
     */
    setUsername(username: string | null): void

    // Class property signals of Grl-0.1.Grl.Config

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
}

class Config extends GObject.Object {

    // Own properties of Grl-0.1.Grl.Config

    static name: string

    // Constructors of Grl-0.1.Grl.Config

    constructor(config?: Config.ConstructorProperties) 
    /**
     * Creates a new data config object that will be associated with a plugin
     * (if `source` is NULL), or a specific source spawned from a plugin (if
     * `source` is not NULL). The latter may be useful for plugins
     * spawning various sources, each one needing a different configuration.
     * 
     * config associated with the plugin should not be freed until the plugin
     * has been unloaded.
     * @constructor 
     * @param plugin plugin id for this configuration
     * @param source source id for this configuration
     * @returns a newly-allocated data config. The data
     */
    constructor(plugin: string | null, source?: string | null) 
    /**
     * Creates a new data config object that will be associated with a plugin
     * (if `source` is NULL), or a specific source spawned from a plugin (if
     * `source` is not NULL). The latter may be useful for plugins
     * spawning various sources, each one needing a different configuration.
     * 
     * config associated with the plugin should not be freed until the plugin
     * has been unloaded.
     * @constructor 
     * @param plugin plugin id for this configuration
     * @param source source id for this configuration
     * @returns a newly-allocated data config. The data
     */
    static new(plugin: string | null, source?: string | null): Config
    _init(config?: Config.ConstructorProperties): void
}

module Data {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Grl-0.1.Grl.Data

        overwrite?: boolean | null
    }

}

interface Data {

    // Own properties of Grl-0.1.Grl.Data

    overwrite: boolean
    __gtype__: number

    // Own fields of Grl-0.1.Grl.Data

    parent: GObject.Object
    priv: DataPrivate
    grlReserved: any[]

    // Owm methods of Grl-0.1.Grl.Data

    /**
     * Adds a new `key` to `data,` with no value. If key already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    addBinary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    addFloat(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    addInt(key: GObject.ParamSpec, intvalue: number): void
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
    addString(key: GObject.ParamSpec, strvalue: string | null): void
    /**
     * Makes a deep copy of `data` and all its contents.
     * @returns a new #GrlData. Free it with #g_object_unref.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * 
     * freed by user.
     * @param key key to look up.
     * @returns a #GValue. This value should not be modified nor
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     * @returns a #GList with
     */
    getAllSingleRelatedKeys(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     * @returns a #GList with values. Do
     */
    getAllSingleRelatedKeysString(key: KeyID): string[]
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * 
     * successful `size` will be set the to the buffer size.
     * @param key key to use
     * @returns buffer location associated with the @key, or %NULL in other case. If
     */
    getBinary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     * @returns float value associated with @key, or 0 in other case.
     */
    getFloat(key: GObject.ParamSpec): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     * @returns int value associated with @key, or 0 in other case.
     */
    getInt(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `data`.
     * 
     * keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     * @returns an array with the
     */
    getKeys(): GObject.ParamSpec[]
    /**
     * Checks if old values are replaced when calling #grl_data_set.
     * @returns %TRUE if values will be overwritten.
     */
    getOverwrite(): boolean
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
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     * @returns a #GList with
     */
    getSingleValuesForKey(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     * @returns a #GList with values. Do
     */
    getSingleValuesForKeyString(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     * @returns string associated with @key, or %NULL in other case. Caller should
     */
    getString(key: GObject.ParamSpec): string | null
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     * @returns %TRUE if @key is in @data, %FALSE in other case.
     */
    hasKey(key: GObject.ParamSpec): boolean
    /**
     * Checks if the `key` has a first value in `data`.
     * @param key key to search
     * @returns %TRUE if key has a value.
     */
    keyIsKnown(key: GObject.ParamSpec): boolean
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
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: GObject.ParamSpec): void
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
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    setInt(key: GObject.ParamSpec, intvalue: number): void
    /**
     * This controls if #grl_data_set will overwrite the current value of a property
     * with the new one.
     * 
     * Set it to %TRUE so old values are overwritten, or %FALSE in other case
     * (default is %FALSE).
     * @param overwrite if data can be overwritten
     */
    setOverwrite(overwrite: boolean): void
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
    setString(key: GObject.ParamSpec, strvalue: string | null): void

    // Class property signals of Grl-0.1.Grl.Data

    connect(sigName: "notify::overwrite", callback: (...args: any[]) => void): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overwrite", ...args: any[]): void
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
}

class Data extends GObject.Object {

    // Own properties of Grl-0.1.Grl.Data

    static name: string

    // Constructors of Grl-0.1.Grl.Data

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
    }

}

interface Media {

    // Own properties of Grl-0.1.Grl.Media

    __gtype__: number

    // Own fields of Grl-0.1.Grl.Media

    parent: Data & GObject.Object

    // Owm methods of Grl-0.1.Grl.Media

    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    addAuthor(author: string | null): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    addExternalPlayer(player: string | null): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    addExternalUrl(url: string | null): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    addThumbnail(thumbnail: string | null): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    addThumbnailBinary(thumbnail: number, size: number): void
    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    addUrlData(url: string | null, mime: string | null): void
    getAuthor(): string | null
    getAuthorNth(index: number): string | null
    getCertificate(): string | null
    getCreationDate(): string | null
    getDate(): string | null
    getDescription(): string | null
    getDuration(): number
    /**
     * where the user play the media.
     * @returns URL of an external location
     */
    getExternalUrl(): string | null
    getExternalUrlNth(index: number): string | null
    getId(): string | null
    getLastPlayed(): string | null
    getLastPosition(): number
    getLicense(): string | null
    getMime(): string | null
    getPlayCount(): number
    /**
     * object for this media
     * @returns URL of an external player
     */
    getPlayer(): string | null
    getPlayerNth(index: number): string | null
    getRating(): number
    getSite(): string | null
    getSource(): string | null
    getStudio(): string | null
    getThumbnail(): string | null
    getThumbnailBinary(size: number): number
    /**
     * buffer size.
     * @param size pointer to store the thumbnail buffer size
     * @param index element to retrieve
     * @returns the n-th media's thumbnail binary and sets size to the thumbnail
     */
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string | null
    getTitle(): string | null
    getUrl(): string | null
    getUrlData(): [ /* returnType */ string | null, /* mime */ string | null ]
    getUrlDataNth(index: number): [ /* returnType */ string | null, /* mime */ string | null ]
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     * @returns serialized media
     */
    serialize(): string | null
    /**
     * Set the media's author
     * @param author the media's author
     */
    setAuthor(author: string | null): void
    /**
     * Set the media certificate
     * @param certificate The rating certificate of the media
     */
    setCertificate(certificate: string | null): void
    /**
     * Set the creation_date of the media
     * @param creationDate date when media was created
     */
    setCreationDate(creationDate: string | null): void
    /**
     * Set the media's date (TBD)
     * @param date the date
     */
    setDate(date: string | null): void
    /**
     * Set the media's description
     * @param description the description
     */
    setDescription(description: string | null): void
    /**
     * Set the media's duration
     * @param duration the duration
     */
    setDuration(duration: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    setExternalPlayer(player: string | null): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    setExternalUrl(url: string | null): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    setId(id: string | null): void
    /**
     * Set the media last played date
     * @param lastPlayed date when the media was last played
     */
    setLastPlayed(lastPlayed: string | null): void
    /**
     * Set the media last played position
     * @param lastPosition second at which the media playback was interrupted
     */
    setLastPosition(lastPosition: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    setLicense(license: string | null): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    setMime(mime: string | null): void
    /**
     * Set the media play count
     * @param playCount the play count
     */
    setPlayCount(playCount: number): void
    /**
     * This method receives a rating and its scale and normalizes it
     * @param rating a rating value
     * @param max maximum rating value
     */
    setRating(rating: number, max: number): void
    /**
     * Set the media's site
     * @param site the site
     */
    setSite(site: string | null): void
    /**
     * Set the media's source
     * @param source the source
     */
    setSource(source: string | null): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    setStudio(studio: string | null): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    setThumbnail(thumbnail: string | null): void
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
    setTitle(title: string | null): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    setUrl(url: string | null): void
    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    setUrlData(url: string | null, mime: string | null): void

    // Class property signals of Grl-0.1.Grl.Media

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (...args: any[]) => void): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Media extends Data {

    // Own properties of Grl-0.1.Grl.Media

    static name: string

    // Constructors of Grl-0.1.Grl.Media

    constructor(config?: Media.ConstructorProperties) 
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
    _init(config?: Media.ConstructorProperties): void
    /**
     * Unserializes a GrlMedia.
     * @param serial a serialized media
     * @returns the GrlMedia from the serial
     */
    static unserialize(serial: string | null): Media
}

module MediaAudio {

    // Constructor properties interface

    interface ConstructorProperties extends Media.ConstructorProperties {
    }

}

interface MediaAudio {

    // Own properties of Grl-0.1.Grl.MediaAudio

    __gtype__: number

    // Own fields of Grl-0.1.Grl.MediaAudio

    parent: Media & Data & GObject.Object & GObject.Object

    // Owm methods of Grl-0.1.Grl.MediaAudio

    /**
     * Adds a new artist to `audio`.
     * @param artist an audio's artist
     */
    addArtist(artist: string | null): void
    /**
     * Adds a new genre to `audio`.
     * @param genre an audio's genre
     */
    addGenre(genre: string | null): void
    /**
     * Adds a new lyrics to `audio`.
     * @param lyrics an audio's lyrics
     */
    addLyrics(lyrics: string | null): void
    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `audio` (useful for resources with more than one URL).
     * @param url an audio's url
     * @param mime the `url` mime-type
     * @param bitrate the `url` bitrate, or -1 to ignore
     */
    addUrlData(url: string | null, mime: string | null, bitrate: number): void

    // Overloads of addUrlData

    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    addUrlData(url: string | null, mime: string | null): void
    getAlbum(): string | null
    getArtist(): string | null
    getArtistNth(index: number): string | null
    getBitrate(): number
    getGenre(): string | null
    getGenreNth(index: number): string | null
    getLyrics(): string | null
    getLyricsNth(index: number): string | null
    getTrackNumber(): number
    getUrlData(): [ /* returnType */ string | null, /* mime */ string | null, /* bitrate */ number ]

    // Overloads of getUrlData

    getUrlData(): [ /* returnType */ string | null, /* mime */ string | null ]
    /**
     * in one go.
     * @param index element to retrieve, starting at 0
     * @returns all the keys related with the URL number @index of an audio resource
     */
    getUrlDataNth(index: number): [ /* returnType */ string | null, /* mime */ string | null, /* bitrate */ number ]

    // Overloads of getUrlDataNth

    getUrlDataNth(index: number): [ /* returnType */ string | null, /* mime */ string | null ]
    /**
     * Set the album of the audio
     * @param album the audio's album
     */
    setAlbum(album: string | null): void
    /**
     * Set the artist of the audio
     * @param artist the audio's artist
     */
    setArtist(artist: string | null): void
    /**
     * Set the bitrate of the audio
     * @param bitrate the audio's bitrate
     */
    setBitrate(bitrate: number): void
    /**
     * Set the genre of the audio
     * @param genre the audio's genre
     */
    setGenre(genre: string | null): void
    /**
     * Set the lyrics of the audio
     * @param lyrics the audio's lyrics
     */
    setLyrics(lyrics: string | null): void
    /**
     * Set the track number of the audio
     * @param trackNumber the audio's track number
     */
    setTrackNumber(trackNumber: number): void
    /**
     * Sets all the keys related with the URL of an audio resource in one go.
     * @param url the audio's url
     * @param mime the `url` mime-type
     * @param bitrate the `url` bitrate, or -1 to ignore
     */
    setUrlData(url: string | null, mime: string | null, bitrate: number): void

    // Overloads of setUrlData

    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    setUrlData(url: string | null, mime: string | null): void

    // Class property signals of Grl-0.1.Grl.MediaAudio

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (...args: any[]) => void): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaAudio extends Media {

    // Own properties of Grl-0.1.Grl.MediaAudio

    static name: string

    // Constructors of Grl-0.1.Grl.MediaAudio

    constructor(config?: MediaAudio.ConstructorProperties) 
    /**
     * Creates a new data audio object.
     * @constructor 
     * @returns a newly-allocated data audio.
     */
    constructor() 
    /**
     * Creates a new data audio object.
     * @constructor 
     * @returns a newly-allocated data audio.
     */
    static new(): MediaAudio

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     * @returns a newly-allocated data media.
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     * @returns a new data object.
     */
    static new(): Data
    _init(config?: MediaAudio.ConstructorProperties): void
}

module MediaBox {

    // Constructor properties interface

    interface ConstructorProperties extends Media.ConstructorProperties {
    }

}

interface MediaBox {

    // Own properties of Grl-0.1.Grl.MediaBox

    __gtype__: number

    // Own fields of Grl-0.1.Grl.MediaBox

    parent: Media & Data & GObject.Object & GObject.Object

    // Owm methods of Grl-0.1.Grl.MediaBox

    /**
     * Number of children of this box.
     * 
     * unknown.
     * @returns number of children, or #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if
     */
    getChildcount(): number
    /**
     * Sets the number of children of this box. Use
     * #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if it is unknown.
     * @param childcount number of children
     */
    setChildcount(childcount: number): void

    // Class property signals of Grl-0.1.Grl.MediaBox

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (...args: any[]) => void): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaBox extends Media {

    // Own properties of Grl-0.1.Grl.MediaBox

    static name: string

    // Constructors of Grl-0.1.Grl.MediaBox

    constructor(config?: MediaBox.ConstructorProperties) 
    /**
     * Creates a new data box object.
     * @constructor 
     * @returns a newly-allocated data box.
     */
    constructor() 
    /**
     * Creates a new data box object.
     * @constructor 
     * @returns a newly-allocated data box.
     */
    static new(): MediaBox

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     * @returns a newly-allocated data media.
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     * @returns a new data object.
     */
    static new(): Data
    _init(config?: MediaBox.ConstructorProperties): void
}

module MediaImage {

    // Constructor properties interface

    interface ConstructorProperties extends Media.ConstructorProperties {
    }

}

interface MediaImage {

    // Own properties of Grl-0.1.Grl.MediaImage

    __gtype__: number

    // Own fields of Grl-0.1.Grl.MediaImage

    parent: Media & Data & GObject.Object & GObject.Object

    // Owm methods of Grl-0.1.Grl.MediaImage

    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `image` (useful for resources with more than one URL).
     * @param url a image's url
     * @param mime image mime-type
     * @param width image width, or -1 to ignore
     * @param height image height, or -1 to ignore
     */
    addUrlData(url: string | null, mime: string | null, width: number, height: number): void

    // Overloads of addUrlData

    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    addUrlData(url: string | null, mime: string | null): void
    getCameraModel(): string | null
    getExposureTime(): number
    /**
     * See
     * http://library.gnome.org/devel/ontology/unstable/nmm-classes.html#nmm-Flash
     * @returns whether the flash was used
     */
    getFlashUsed(): string | null
    getHeight(): number
    getIsoSpeed(): number
    getOrientation(): number
    getUrlData(width: number, height: number): [ /* returnType */ string | null, /* mime */ string | null ]

    // Overloads of getUrlData

    getUrlData(): [ /* returnType */ string | null, /* mime */ string | null ]
    /**
     * in one go.
     * @param index element to retrieve
     * @param width the width, or %NULL to ignore
     * @param height the height, or %NULL to ignore
     * @returns all the keys related with the URL number @index of an image resource
     */
    getUrlDataNth(index: number, width: number, height: number): [ /* returnType */ string | null, /* mime */ string | null ]

    // Overloads of getUrlDataNth

    getUrlDataNth(index: number): [ /* returnType */ string | null, /* mime */ string | null ]
    getWidth(): number
    setCameraModel(cameraModel: string | null): void
    setExposureTime(exposureTime: number): void
    setFlashUsed(flashUsed: string | null): void
    /**
     * Set the height of the image
     * @param height the image's height
     */
    setHeight(height: number): void
    setIsoSpeed(isoSpeed: number): void
    setOrientation(orientation: number): void
    /**
     * Set the size of the image
     * @param width the image's width
     * @param height the image's height
     */
    setSize(width: number, height: number): void
    /**
     * Sets all the keys related with the URL of an image resource in one go.
     * @param url the image's url
     * @param mime image mime-type
     * @param width image width, or -1 to ignore
     * @param height image height, or -1 to ignore
     */
    setUrlData(url: string | null, mime: string | null, width: number, height: number): void

    // Overloads of setUrlData

    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    setUrlData(url: string | null, mime: string | null): void
    /**
     * Set the width of the image
     * @param width the image's width
     */
    setWidth(width: number): void

    // Class property signals of Grl-0.1.Grl.MediaImage

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (...args: any[]) => void): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaImage extends Media {

    // Own properties of Grl-0.1.Grl.MediaImage

    static name: string

    // Constructors of Grl-0.1.Grl.MediaImage

    constructor(config?: MediaImage.ConstructorProperties) 
    /**
     * Creates a new data image object.
     * @constructor 
     * @returns a newly-allocated data image.
     */
    constructor() 
    /**
     * Creates a new data image object.
     * @constructor 
     * @returns a newly-allocated data image.
     */
    static new(): MediaImage

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     * @returns a newly-allocated data media.
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     * @returns a new data object.
     */
    static new(): Data
    _init(config?: MediaImage.ConstructorProperties): void
}

module MediaPlugin {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MediaPlugin {

    // Own properties of Grl-0.1.Grl.MediaPlugin

    __gtype__: number

    // Own fields of Grl-0.1.Grl.MediaPlugin

    parent: GObject.Object

    // Owm methods of Grl-0.1.Grl.MediaPlugin

    /**
     * Get the author of the plugin
     * @returns the author of the @plugin
     */
    getAuthor(): string | null
    /**
     * Get the description of the plugin
     * @returns the description of the @plugin
     */
    getDescription(): string | null
    /**
     * Get the filename containing the plugin
     * @returns the filename containing @plugin
     */
    getFilename(): string | null
    /**
     * Get the id of the plugin
     * @returns the id of the @plugin
     */
    getId(): string | null
    /**
     * Get the information of the `plugin` that is associated with the given key
     * @param key a key representing information about this plugin
     * @returns the information assigned to the given @key or NULL if there is no such information
     */
    getInfo(key: string | null): string | null
    /**
     * Returns a list of keys that can be queried to retrieve information about the
     * plugin.
     * 
     * a #GList of strings containing the keys. The content of the list is
     * owned by the plugin and should not be modified or freed. Use g_list_free()
     * when done using the list.
     */
    getInfoKeys(): string[]
    /**
     * Get the license of the plugin
     * @returns the license of the @plugin
     */
    getLicense(): string | null
    /**
     * Get the name of the plugin
     * @returns the name of the @plugin
     */
    getName(): string | null
    /**
     * Get the #GrlPluginRank of the plugin
     * @returns the rank of the plugin
     */
    getRank(): number
    /**
     * Get the site of the plugin
     * @returns the site of the @plugin
     */
    getSite(): string | null
    /**
     * Get the version of the plugin
     * @returns the version of the @plugin
     */
    getVersion(): string | null
    setPluginInfo(info: PluginInfo): void

    // Class property signals of Grl-0.1.Grl.MediaPlugin

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
}

class MediaPlugin extends GObject.Object {

    // Own properties of Grl-0.1.Grl.MediaPlugin

    static name: string

    // Constructors of Grl-0.1.Grl.MediaPlugin

    constructor(config?: MediaPlugin.ConstructorProperties) 
    _init(config?: MediaPlugin.ConstructorProperties): void
}

module MediaSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `content-changed`
     */
    interface ContentChangedSignalCallback {
        (changedMedias: any[], changeType: MediaSourceChangeType, locationUnknown: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends MetadataSource.ConstructorProperties {

        // Own constructor properties of Grl-0.1.Grl.MediaSource

        /**
         * Transparently split queries with count requests
         * bigger than a certain threshold into smaller queries.
         */
        autoSplitThreshold?: number | null
    }

}

interface MediaSource {

    // Own properties of Grl-0.1.Grl.MediaSource

    /**
     * Transparently split queries with count requests
     * bigger than a certain threshold into smaller queries.
     */
    autoSplitThreshold: number
    __gtype__: number

    // Own fields of Grl-0.1.Grl.MediaSource

    parent: MetadataSource & MediaPlugin & GObject.Object & GObject.Object

    // Owm methods of Grl-0.1.Grl.MediaSource

    // Has conflict: browse(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
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
    browseSync(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    // Has conflict: cancel(operationId: number): void
    /**
     * TBD
     * @returns the assigned threshold
     */
    getAutoSplitThreshold(): number
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
    getMediaFromUri(uri: string | null, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
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
    getMediaFromUriSync(uri: string | null, keys: KeyID[], flags: MetadataResolutionFlags): Media
    /**
     * Obtains the previously attached data
     * @param operationId the identifier of a running operation
     * @returns The previously attached data.
     */
    getOperationData(operationId: number): any
    // Has conflict: metadata(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
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
    metadataSync(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags): Media
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
     * @param media the media which has changed, or `NULL` to use the root box.
     * @param changeType the type of change
     * @param locationUnknown if change has happened in `media` or any descendant
     */
    notifyChange(media: Media | null, changeType: MediaSourceChangeType, locationUnknown: boolean): void
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
     * @param changedMedias : the list of medias that have changed
     * @param changeType the type of change
     * @param locationUnknown if change has happpened in `media` or any descendant
     */
    notifyChangeList(changedMedias: Media[], changeType: MediaSourceChangeType, locationUnknown: boolean): void
    // Has conflict: notifyChangeStart(): boolean
    // Has conflict: notifyChangeStop(): boolean
    // Has conflict: query(query: string | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
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
    querySync(query: string | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    // Has conflict: remove(media: Media, callback: MediaSourceRemoveCb): void
    /**
     * Remove a `media` from the `source` repository.
     * 
     * This method is synchronous.
     * @param media a data transfer object
     */
    removeSync(media: Media): void
    // Has conflict: search(text: string | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
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
    searchSync(text: string | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    /**
     * TBD
     * @param threshold the threshold to request
     */
    setAutoSplitThreshold(threshold: number): void
    /**
     * Attach a pointer to the specific operation.
     * @param operationId the identifier of a running operation
     * @param data the data to attach
     */
    setOperationData(operationId: number, data: any): void
    // Has conflict: store(parent: MediaBox | null, media: Media, callback: MediaSourceStoreCb): void
    /**
     * Store the `media` into the `parent` container.
     * 
     * This method is synchronous.
     * @param parent a #GrlMediaBox to store the data transfer objects
     * @param media a #GrlMedia data transfer object
     */
    storeSync(parent: MediaBox | null, media: Media): void
    // Has conflict: testMediaFromUri(uri: string | null): boolean

    // Own virtual methods of Grl-0.1.Grl.MediaSource

    browse(bs: MediaSourceBrowseSpec): void
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
     * @virtual 
     * @param operationId the identifier of the running operation, as returned by the function that started it
     */
    cancel(operationId: number): void

    // Overloads of cancel

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
     * @virtual 
     * @param operationId the identifier of the running operation, as returned by the function that started it
     */
    cancel(operationId: number): void
    mediaFromUri(mfss: MediaSourceMediaFromUriSpec): void
    metadata(ms: MediaSourceMetadataSpec): void
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
    query(qs: MediaSourceQuerySpec): void
    remove(ss: MediaSourceRemoveSpec): void
    search(ss: MediaSourceSearchSpec): void
    store(ss: MediaSourceStoreSpec): void
    /**
     * Tests whether `source` can instantiate a #GrlMedia object representing
     * the media resource exposed at `uri`.
     * 
     * 
     * This method is synchronous.
     * @virtual 
     * @param uri A URI that can be used to identify a media resource
     * @returns %TRUE if it can, %FALSE otherwise.
     */
    testMediaFromUri(uri: string | null): boolean

    // Own signals of Grl-0.1.Grl.MediaSource

    connect(sigName: "content-changed", callback: MediaSource.ContentChangedSignalCallback): number
    on(sigName: "content-changed", callback: MediaSource.ContentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-changed", callback: MediaSource.ContentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-changed", callback: MediaSource.ContentChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "content-changed", changeType: MediaSourceChangeType, locationUnknown: boolean, ...args: any[]): void

    // Class property signals of Grl-0.1.Grl.MediaSource

    connect(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-split-threshold", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::source-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-desc", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaSource extends MetadataSource {

    // Own properties of Grl-0.1.Grl.MediaSource

    static name: string

    // Constructors of Grl-0.1.Grl.MediaSource

    constructor(config?: MediaSource.ConstructorProperties) 
    _init(config?: MediaSource.ConstructorProperties): void
}

module MediaVideo {

    // Constructor properties interface

    interface ConstructorProperties extends Media.ConstructorProperties {
    }

}

interface MediaVideo {

    // Own properties of Grl-0.1.Grl.MediaVideo

    __gtype__: number

    // Own fields of Grl-0.1.Grl.MediaVideo

    parent: Media & Data & GObject.Object & GObject.Object

    // Owm methods of Grl-0.1.Grl.MediaVideo

    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `video` (useful for resources with more than one URL).
     * @param url a video's url
     * @param mime video mime-type
     * @param framerate video framerate, or -1 to ignore
     * @param width video width, or -1 to ignore
     * @param height video height, or -1 to ignore
     */
    addUrlData(url: string | null, mime: string | null, framerate: number, width: number, height: number): void

    // Overloads of addUrlData

    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    addUrlData(url: string | null, mime: string | null): void
    getEpisode(): number
    getFramerate(): number
    getHeight(): number
    getSeason(): number
    getShow(): string | null
    getUrlData(framerate: number, width: number, height: number): [ /* returnType */ string | null, /* mime */ string | null ]

    // Overloads of getUrlData

    getUrlData(): [ /* returnType */ string | null, /* mime */ string | null ]
    /**
     * in one go.
     * @param index element to retrieve
     * @param framerate the url framerate, or %NULL to ignore
     * @param width the url width, or %NULL to ignore
     * @param height the url height, or %NULL to ignore
     * @returns all the keys related with the URL number @index of a video resource
     */
    getUrlDataNth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string | null, /* mime */ string | null ]

    // Overloads of getUrlDataNth

    getUrlDataNth(index: number): [ /* returnType */ string | null, /* mime */ string | null ]
    getWidth(): number
    /**
     * Sets the episode number of the video
     * @param episode the video's episode
     */
    setEpisode(episode: number): void
    /**
     * Set the framerate of the video
     * @param framerate the video's framerate
     */
    setFramerate(framerate: number): void
    /**
     * Set the height of the video
     * @param height the video's height
     */
    setHeight(height: number): void
    /**
     * Sets the season number of the video
     * @param season the video's season
     */
    setSeason(season: number): void
    /**
     * Sets the show title of the video
     * @param show the video's show name
     */
    setShow(show: string | null): void
    /**
     * Set the width and the height of the video
     * @param width the video's width
     * @param height the video's height
     */
    setSize(width: number, height: number): void
    /**
     * Sets all the keys related with the URL of a video resource in one go.
     * @param url the video's url
     * @param mime video mime-type
     * @param framerate video framerate, or -1 to ignore
     * @param width video width, or -1 to ignore
     * @param height video height, or -1 to ignore
     */
    setUrlData(url: string | null, mime: string | null, framerate: number, width: number, height: number): void

    // Overloads of setUrlData

    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    setUrlData(url: string | null, mime: string | null): void
    /**
     * Set the width of the video
     * @param width the video's width
     */
    setWidth(width: number): void

    // Class property signals of Grl-0.1.Grl.MediaVideo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (...args: any[]) => void): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaVideo extends Media {

    // Own properties of Grl-0.1.Grl.MediaVideo

    static name: string

    // Constructors of Grl-0.1.Grl.MediaVideo

    constructor(config?: MediaVideo.ConstructorProperties) 
    /**
     * Creates a new data video object.
     * @constructor 
     * @returns a newly-allocated data video.
     */
    constructor() 
    /**
     * Creates a new data video object.
     * @constructor 
     * @returns a newly-allocated data video.
     */
    static new(): MediaVideo

    // Overloads of new

    /**
     * Creates a new data media object.
     * @constructor 
     * @returns a newly-allocated data media.
     */
    static new(): Media
    /**
     * Creates a new data object.
     * @constructor 
     * @returns a new data object.
     */
    static new(): Data
    _init(config?: MediaVideo.ConstructorProperties): void
}

module MetadataSource {

    // Constructor properties interface

    interface ConstructorProperties extends MediaPlugin.ConstructorProperties {

        // Own constructor properties of Grl-0.1.Grl.MetadataSource

        /**
         * A description of the source
         */
        sourceDesc?: string | null
        /**
         * The identifier of the source.
         */
        sourceId?: string | null
        /**
         * The name of the source.
         */
        sourceName?: string | null
    }

}

interface MetadataSource {

    // Own properties of Grl-0.1.Grl.MetadataSource

    /**
     * A description of the source
     */
    sourceDesc: string
    /**
     * The identifier of the source.
     */
    sourceId: string
    /**
     * The name of the source.
     */
    sourceName: string
    __gtype__: number

    // Own fields of Grl-0.1.Grl.MetadataSource

    parent: MediaPlugin & GObject.Object

    // Owm methods of Grl-0.1.Grl.MetadataSource

    // Has conflict: cancel(operationId: number): void
    /**
     * This function does the opposite of other filter functions: removes the slow
     * keys from `keys`. If `return_filtered` is %TRUE the removed slow keys are
     * returned in a new list.
     * 
     * `return_filtered` is %TRUE will return the list of slow keys; otherwise
     * %NULL
     * @param keys  the list of keys to filter out
     * @param returnFiltered if %TRUE the return value shall be a new list with the slow keys
     * @returns if
     */
    filterSlow(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    /**
     * Compares the received `keys` list with the supported key list by the
     * metadata `source,` and deletes those keys which are not supported.
     * 
     * if `return_filtered` is %TRUE will return the list of removed keys;
     * otherwise %NULL
     * @param keys  the list of keys to filter out
     * @param returnFiltered if %TRUE the return value shall be a new list with the unsupported keys
     */
    filterSupported(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
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
     * @param keys  the list of keys to filter out
     * @param returnFiltered if %TRUE the return value shall be a new list with the non-writable keys
     */
    filterWritable(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    genOperationId(): number
    getDescription(): string | null
    getId(): string | null
    getName(): string | null
    /**
     * Obtains the previously attached data
     * @param operationId the identifier of a running operation
     * @returns The previously attached data.
     */
    getOperationData(operationId: number): any
    // Has conflict: keyDepends(keyId: GObject.ParamSpec): GObject.ParamSpec[]
    // Has conflict: mayResolve(media: Media, keyId: KeyID): [ /* returnType */ boolean, /* missingKeys */ KeyID[] ]
    operationIsCancelled(operationId: number): boolean
    operationIsCompleted(operationId: number): boolean
    operationIsFinished(operationId: number): boolean
    operationIsOngoing(operationId: number): boolean
    // Has conflict: resolve(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags, callback: MetadataSourceResolveCb): number
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
    resolveSync(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags): Media
    // Has conflict: setMetadata(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags, callback: MetadataSourceSetMetadataCb): void
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
    setMetadataSync(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags): GObject.ParamSpec[]
    setOperationCancelled(operationId: number): void
    setOperationCompleted(operationId: number): void
    /**
     * Attach a pointer to the specific operation.
     * @param operationId the identifier of a running operation
     * @param data the data to attach
     */
    setOperationData(operationId: number, data: any): void
    setOperationFinished(operationId: number): void
    setOperationOngoing(operationId: number): void
    // Has conflict: slowKeys(): GObject.ParamSpec[]
    // Has conflict: supportedKeys(): GObject.ParamSpec[]
    // Has conflict: supportedOperations(): number
    // Has conflict: writableKeys(): GObject.ParamSpec[]

    // Own virtual methods of Grl-0.1.Grl.MetadataSource

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
     * @virtual 
     * @param operationId the identifier of the running operation, as returned by the function that started it
     */
    cancel(operationId: number): void
    /**
     * Get the list of #GrlKeyID which are needed a priori, in order to fetch
     * and store the requested `key_id`
     * 
     * a #GList with the keys, or `NULL` if it can not resolve `key_id`
     * @virtual 
     * @param keyId the requested metadata key
     */
    keyDepends(keyId: GObject.ParamSpec): GObject.ParamSpec[]
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
     * @virtual 
     * @param media a media on which we want more metadata
     * @param keyId the key corresponding to a metadata we might want
     * @returns @TRUE if there's a possibility that @source resolves @key_id for
     */
    mayResolve(media: Media, keyId: KeyID): [ /* returnType */ boolean, /* missingKeys */ KeyID[] ]
    resolve(rs: MetadataSourceResolveSpec): void
    setMetadata(sms: MetadataSourceSetMetadataSpec): void
    /**
     * Similar to grl_metadata_source_supported_keys(), but this keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     * @virtual 
     * @returns a #GList with the keys
     */
    slowKeys(): GObject.ParamSpec[]
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     * @virtual 
     * @returns a #GList with the keys
     */
    supportedKeys(): GObject.ParamSpec[]
    supportedOperations(): SupportedOps
    /**
     * Similar to grl_metadata_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     * 
     * a #GList with the keys
     * @virtual 
     */
    writableKeys(): GObject.ParamSpec[]

    // Class property signals of Grl-0.1.Grl.MetadataSource

    connect(sigName: "notify::source-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-desc", ...args: any[]): void
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
}

class MetadataSource extends MediaPlugin {

    // Own properties of Grl-0.1.Grl.MetadataSource

    static name: string

    // Constructors of Grl-0.1.Grl.MetadataSource

    constructor(config?: MetadataSource.ConstructorProperties) 
    _init(config?: MetadataSource.ConstructorProperties): void
}

module PluginRegistry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `source-added`
     */
    interface SourceAddedSignalCallback {
        (plugin: MediaPlugin): void
    }

    /**
     * Signal callback interface for `source-removed`
     */
    interface SourceRemovedSignalCallback {
        (plugin: MediaPlugin): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PluginRegistry {

    // Own properties of Grl-0.1.Grl.PluginRegistry

    __gtype__: number

    // Own fields of Grl-0.1.Grl.PluginRegistry

    parent: GObject.Object

    // Owm methods of Grl-0.1.Grl.PluginRegistry

    /**
     * Add a configuration for a plugin/source.
     * @param config a configuration set
     */
    addConfig(config: Config): boolean
    /**
     * Load plugin configurations from a .ini-like config file.
     * @param configFile a key-value file containing the configuration
     * @returns %TRUE on success
     */
    addConfigFromFile(configFile: string | null): boolean
    /**
     * Set this path as part of default paths to load plugins.
     * @param path a path with plugins
     */
    addDirectory(path: string | null): void
    /**
     * Returns a list with all registered keys in system.
     * 
     * with all the available #GrlKeyID<!-- -->s. The content of the list should
     * not be modified or freed. Use g_list_free() when done using the list.
     * @returns a #GList
     */
    getMetadataKeys(): GObject.ParamSpec[]
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
    getSources(ranked: boolean): MediaPlugin[]
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
    getSourcesByOperations(ops: SupportedOps, ranked: boolean): MediaPlugin[]
    /**
     * Loads a module from shared object file stored in `path`
     * @param libraryFilename the path to the so file
     * @returns %TRUE if the module is loaded correctly
     */
    load(libraryFilename: string | null): boolean
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
    loadAll(): boolean
    /**
     * Loads plugin identified by `plugin_id`.
     * 
     * This requires the XML plugin information file to define a "module" key with
     * the name of the module that provides the plugin or the absolute path of the
     * actual module file.
     * @param pluginId plugin identifier
     * @returns %TRUE if the plugin is loaded correctly
     */
    loadById(pluginId: string | null): boolean
    /**
     * Loads a set of modules from directory in `path` which contains
     * a group shared object files.
     * @param path the path to the directory
     * @returns %TRUE if the directory is valid.
     */
    loadDirectory(path: string | null): boolean
    /**
     * Look up for the metadata key with name `key_name`.
     * @param keyName the key name
     * @returns The metadata key, or @NULL if not found
     */
    lookupMetadataKey(keyName: string | null): GObject.ParamSpec
    /**
     * Look up the list of keys that have a relation with `key`.
     * 
     * `key` is included in that list.
     * 
     * related keys, or `NULL` if key is invalid.
     * @param key a metadata key
     * @returns a #GList of
     */
    lookupMetadataKeyRelation(key: KeyID): GObject.ParamSpec[]
    /**
     * This function will search and retrieve a source given its identifier.
     * @param sourceId the id of a source
     * @returns The source found.
     */
    lookupSource(sourceId: string | null): MediaPlugin
    /**
     * Registers a metadata key
     * 
     * or `NULL` on error.
     * @param key The key to register
     * @returns The #GrlKeyID registered
     */
    registerMetadataKey(key: GObject.ParamSpec): GObject.ParamSpec
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
    registerMetadataKeyRelation(key1: KeyID, key2: KeyID): void
    /**
     * Register a `source` in the `registry` with the given `plugin` information
     * @param plugin the descriptor of the plugin which owns the source
     * @param source the source to register
     * @returns %TRUE if success, %FALSE% otherwise.
     */
    registerSource(plugin: PluginInfo, source: MediaPlugin): boolean
    /**
     * Restrict the plugins that application sees to this list.
     * 
     * Other plugins will not be available for the application, unless it uses
     * directly #grl_plugin_registry_load() function.
     * @param plugins a `NULL-terminated` array of plugins identifiers
     */
    restrictPlugins(plugins: string | null): void
    /**
     * Unload from memory a module identified by `plugin_id`. This means call the
     * module's deinit function.
     * @param pluginId the identifier of the plugin
     * @returns %TRUE% on success.
     */
    unload(pluginId: string | null): boolean
    /**
     * Removes the `source` from the `registry` hash table
     * @param source the source to unregister
     * @returns %TRUE if success, %FALSE% otherwise.
     */
    unregisterSource(source: MediaPlugin): boolean

    // Own signals of Grl-0.1.Grl.PluginRegistry

    connect(sigName: "source-added", callback: PluginRegistry.SourceAddedSignalCallback): number
    on(sigName: "source-added", callback: PluginRegistry.SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: PluginRegistry.SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: PluginRegistry.SourceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-added", ...args: any[]): void
    connect(sigName: "source-removed", callback: PluginRegistry.SourceRemovedSignalCallback): number
    on(sigName: "source-removed", callback: PluginRegistry.SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: PluginRegistry.SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: PluginRegistry.SourceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-removed", ...args: any[]): void

    // Class property signals of Grl-0.1.Grl.PluginRegistry

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
}

class PluginRegistry extends GObject.Object {

    // Own properties of Grl-0.1.Grl.PluginRegistry

    static name: string

    // Constructors of Grl-0.1.Grl.PluginRegistry

    constructor(config?: PluginRegistry.ConstructorProperties) 
    _init(config?: PluginRegistry.ConstructorProperties): void
    /**
     * As the registry is designed to work as a singleton, this
     * method is in charge of creating the only instance or
     * returned it if it is already in memory.
     * 
     * 
     * It is NOT MT-safe
     * @returns a new or an already created instance of the registry.
     */
    static getDefault(): PluginRegistry
}

module RelatedKeys {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RelatedKeys {

    // Own properties of Grl-0.1.Grl.RelatedKeys

    __gtype__: number

    // Own fields of Grl-0.1.Grl.RelatedKeys

    parent: GObject.Object

    // Owm methods of Grl-0.1.Grl.RelatedKeys

    /**
     * Adds a new `key` to `relkeys,` with no value. If `key` already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Makes a deep copy of `relkeys` and its contents.
     * 
     * Free it with #g_object_unref.
     * @returns a new #GrlRelatedKeys.
     */
    dup(): RelatedKeys
    /**
     * Get the value associated with `key` from `relkeys`. If it does not contain any
     * value, %NULL will be returned.
     * 
     * freed by user.
     * @param key key to look up.
     * @returns a #GValue. This value should not be modified nor
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a binary, or `key` is not in `relkeys,` then 0 is returned.
     * 
     * successful `size` will be set to the buffer size.
     * @param key key to use
     * @returns buffer location associated with @key, or %NULL in other case. If
     */
    getBinary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gfloat, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     * @returns float value associated with @key, or 0 in other case.
     */
    getFloat(key: GObject.ParamSpec): number
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gint, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     * @returns int value associated with @key, or 0 in other case.
     */
    getInt(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `relkeys`.
     * 
     * the keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     * @returns a list with
     */
    getKeys(): GObject.ParamSpec[]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not string, or `key` is not in `relkeys,` then %NULL is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     * @returns string associated with @key, or %NULL in other case. Caller should
     */
    getString(key: GObject.ParamSpec): string | null
    /**
     * Checks if `key` is in `relkeys`.
     * @param key key to search
     * @returns %TRUE if @key is in @relkeys, %FALSE in other case.
     */
    hasKey(key: GObject.ParamSpec): boolean
    /**
     * Checks if `key` has a value in `relkeys`.
     * @param key key to search
     * @returns %TRUE if @key has a value.
     */
    keyIsKnown(key: GObject.ParamSpec): boolean
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
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a binary-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the relkeys
     * @param size size of the buffer
     */
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a float-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as an int-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    setInt(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a strying-type key. Old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    setString(key: GObject.ParamSpec, strvalue: string | null): void

    // Class property signals of Grl-0.1.Grl.RelatedKeys

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
}

class RelatedKeys extends GObject.Object {

    // Own properties of Grl-0.1.Grl.RelatedKeys

    static name: string

    // Constructors of Grl-0.1.Grl.RelatedKeys

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

interface ConfigClass {

    // Own fields of Grl-0.1.Grl.ConfigClass

    parentClass: GObject.ObjectClass
}

/**
 * Grilo Config Class
 * @record 
 */
abstract class ConfigClass {

    // Own properties of Grl-0.1.Grl.ConfigClass

    static name: string
}

interface ConfigPrivate {
}

class ConfigPrivate {

    // Own properties of Grl-0.1.Grl.ConfigPrivate

    static name: string
}

interface DataClass {

    // Own fields of Grl-0.1.Grl.DataClass

    parentClass: GObject.ObjectClass
}

/**
 * Grilo Data class
 * @record 
 */
abstract class DataClass {

    // Own properties of Grl-0.1.Grl.DataClass

    static name: string
}

interface DataPrivate {
}

class DataPrivate {

    // Own properties of Grl-0.1.Grl.DataPrivate

    static name: string
}

interface LogDomain {

    // Owm methods of Grl-0.1.Grl.LogDomain

    free(): void
}

class LogDomain {

    // Own properties of Grl-0.1.Grl.LogDomain

    static name: string
}

interface MediaAudioClass {

    // Own fields of Grl-0.1.Grl.MediaAudioClass

    parentClass: MediaClass
}

/**
 * Grilo Media audio Class
 * @record 
 */
abstract class MediaAudioClass {

    // Own properties of Grl-0.1.Grl.MediaAudioClass

    static name: string
}

interface MediaBoxClass {

    // Own fields of Grl-0.1.Grl.MediaBoxClass

    parentClass: MediaClass
}

/**
 * Grilo Media box Class
 * @record 
 */
abstract class MediaBoxClass {

    // Own properties of Grl-0.1.Grl.MediaBoxClass

    static name: string
}

interface MediaClass {

    // Own fields of Grl-0.1.Grl.MediaClass

    parentClass: DataClass
}

/**
 * Grilo Media Class
 * @record 
 */
abstract class MediaClass {

    // Own properties of Grl-0.1.Grl.MediaClass

    static name: string
}

interface MediaImageClass {

    // Own fields of Grl-0.1.Grl.MediaImageClass

    parentClass: MediaClass
}

/**
 * Grilo Media image Class
 * @record 
 */
abstract class MediaImageClass {

    // Own properties of Grl-0.1.Grl.MediaImageClass

    static name: string
}

interface MediaPluginClass {

    // Own fields of Grl-0.1.Grl.MediaPluginClass

    parentClass: GObject.ObjectClass
}

abstract class MediaPluginClass {

    // Own properties of Grl-0.1.Grl.MediaPluginClass

    static name: string
}

interface MediaPluginPrivate {
}

class MediaPluginPrivate {

    // Own properties of Grl-0.1.Grl.MediaPluginPrivate

    static name: string
}

interface MediaSourceBrowseSpec {

    // Own fields of Grl-0.1.Grl.MediaSourceBrowseSpec

    source: MediaSource
    browseId: number
    container: Media
    keys: any[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * browse vmethod.
 * @record 
 */
class MediaSourceBrowseSpec {

    // Own properties of Grl-0.1.Grl.MediaSourceBrowseSpec

    static name: string
}

interface MediaSourceClass {

    // Own fields of Grl-0.1.Grl.MediaSourceClass

    parentClass: MetadataSourceClass
    browse: (source: MediaSource, bs: MediaSourceBrowseSpec) => void
    search: (source: MediaSource, ss: MediaSourceSearchSpec) => void
    query: (source: MediaSource, qs: MediaSourceQuerySpec) => void
    cancel: (source: MediaSource, operationId: number) => void
    metadata: (source: MediaSource, ms: MediaSourceMetadataSpec) => void
    store: (source: MediaSource, ss: MediaSourceStoreSpec) => void
    remove: (source: MediaSource, ss: MediaSourceRemoveSpec) => void
    testMediaFromUri: (source: MediaSource, uri: string | null) => boolean
    mediaFromUri: (source: MediaSource, mfss: MediaSourceMediaFromUriSpec) => void
    notifyChangeStart: (source: MediaSource) => boolean
    notifyChangeStop: (source: MediaSource) => boolean
}

/**
 * Grilo MediaSource class. Override the vmethods to implement the
 * source functionality.
 * @record 
 */
abstract class MediaSourceClass {

    // Own properties of Grl-0.1.Grl.MediaSourceClass

    static name: string
}

interface MediaSourceMediaFromUriSpec {

    // Own fields of Grl-0.1.Grl.MediaSourceMediaFromUriSpec

    source: MediaSource
    mediaFromUriId: number
    uri: string | null
    keys: any[]
    flags: MetadataResolutionFlags
    callback: MediaSourceMetadataCb
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * media_from_uri vmethod.
 * @record 
 */
class MediaSourceMediaFromUriSpec {

    // Own properties of Grl-0.1.Grl.MediaSourceMediaFromUriSpec

    static name: string
}

interface MediaSourceMetadataSpec {

    // Own fields of Grl-0.1.Grl.MediaSourceMetadataSpec

    source: MediaSource
    metadataId: number
    media: Media
    keys: any[]
    flags: MetadataResolutionFlags
    callback: MediaSourceMetadataCb
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * metadata vmethod.
 * @record 
 */
class MediaSourceMetadataSpec {

    // Own properties of Grl-0.1.Grl.MediaSourceMetadataSpec

    static name: string
}

interface MediaSourcePrivate {
}

class MediaSourcePrivate {

    // Own properties of Grl-0.1.Grl.MediaSourcePrivate

    static name: string
}

interface MediaSourceQuerySpec {

    // Own fields of Grl-0.1.Grl.MediaSourceQuerySpec

    source: MediaSource
    queryId: number
    query: string | null
    keys: any[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * query vmethod.
 * @record 
 */
class MediaSourceQuerySpec {

    // Own properties of Grl-0.1.Grl.MediaSourceQuerySpec

    static name: string
}

interface MediaSourceRemoveSpec {

    // Own fields of Grl-0.1.Grl.MediaSourceRemoveSpec

    source: MediaSource
    mediaId: string | null
    media: Media
    callback: MediaSourceRemoveCb
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * store vmethod.
 * @record 
 */
class MediaSourceRemoveSpec {

    // Own properties of Grl-0.1.Grl.MediaSourceRemoveSpec

    static name: string
}

interface MediaSourceSearchSpec {

    // Own fields of Grl-0.1.Grl.MediaSourceSearchSpec

    source: MediaSource
    searchId: number
    text: string | null
    keys: any[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * search vmethod.
 * @record 
 */
class MediaSourceSearchSpec {

    // Own properties of Grl-0.1.Grl.MediaSourceSearchSpec

    static name: string
}

interface MediaSourceStoreSpec {

    // Own fields of Grl-0.1.Grl.MediaSourceStoreSpec

    source: MediaSource
    parent: MediaBox
    media: Media
    callback: MediaSourceStoreCb
    userData: any
}

/**
 * Data transport structure used internally by the plugins which support
 * store vmethod.
 * @record 
 */
class MediaSourceStoreSpec {

    // Own properties of Grl-0.1.Grl.MediaSourceStoreSpec

    static name: string
}

interface MediaVideoClass {

    // Own fields of Grl-0.1.Grl.MediaVideoClass

    parentClass: MediaClass
}

/**
 * Grilo Media video Class
 * @record 
 */
abstract class MediaVideoClass {

    // Own properties of Grl-0.1.Grl.MediaVideoClass

    static name: string
}

interface MetadataSourceClass {

    // Own fields of Grl-0.1.Grl.MetadataSourceClass

    parentClass: MediaPluginClass
    operationId: number
    supportedOperations: (source: MetadataSource) => SupportedOps
    supportedKeys: (source: MetadataSource) => GObject.ParamSpec[]
    slowKeys: (source: MetadataSource) => GObject.ParamSpec[]
    keyDepends: (source: MetadataSource, keyId: GObject.ParamSpec) => GObject.ParamSpec[]
    writableKeys: (source: MetadataSource) => GObject.ParamSpec[]
    resolve: (source: MetadataSource, rs: MetadataSourceResolveSpec) => void
    setMetadata: (source: MetadataSource, sms: MetadataSourceSetMetadataSpec) => void
    mayResolve: (source: MetadataSource, media: Media, keyId: KeyID) => [ /* returnType */ boolean, /* missingKeys */ KeyID[] ]
    cancel: (source: MetadataSource, operationId: number) => void
}

/**
 * Grilo MetadataSource class. Override the vmethods to implement the
 * element functionality.
 * @record 
 */
abstract class MetadataSourceClass {

    // Own properties of Grl-0.1.Grl.MetadataSourceClass

    static name: string
}

interface MetadataSourcePrivate {
}

class MetadataSourcePrivate {

    // Own properties of Grl-0.1.Grl.MetadataSourcePrivate

    static name: string
}

interface MetadataSourceResolveSpec {

    // Own fields of Grl-0.1.Grl.MetadataSourceResolveSpec

    source: MetadataSource
    resolveId: number
    keys: any[]
    media: Media
    flags: MetadataResolutionFlags
    callback: MetadataSourceResolveCb
    userData: any
}

/**
 * Represents the closure used by the derived objects to fetch, store and
 * return the transfer object to the client's code.
 * @record 
 */
class MetadataSourceResolveSpec {

    // Own properties of Grl-0.1.Grl.MetadataSourceResolveSpec

    static name: string
}

interface MetadataSourceSetMetadataSpec {

    // Own fields of Grl-0.1.Grl.MetadataSourceSetMetadataSpec

    source: MetadataSource
    media: Media
    keys: any[]
    flags: MetadataWritingFlags
    callback: MetadataSourceSetMetadataCb
    userData: any
    failedKeys: any[]
}

/**
 * Represents the closure used by the derived objects to operate.
 * @record 
 */
class MetadataSourceSetMetadataSpec {

    // Own properties of Grl-0.1.Grl.MetadataSourceSetMetadataSpec

    static name: string
}

interface PluginDescriptor {

    // Own fields of Grl-0.1.Grl.PluginDescriptor

    pluginId: string | null
    pluginDeinit: () => void
    module: GModule.Module
}

class PluginDescriptor {

    // Own properties of Grl-0.1.Grl.PluginDescriptor

    static name: string
}

interface PluginInfo {

    // Own fields of Grl-0.1.Grl.PluginInfo

    id: string | null
    filename: string | null
    optionalInfo: GLib.HashTable
    rank: number
}

/**
 * This structure stores the information related to a module
 * @record 
 */
class PluginInfo {

    // Own properties of Grl-0.1.Grl.PluginInfo

    static name: string
}

interface PluginRegistryClass {

    // Own fields of Grl-0.1.Grl.PluginRegistryClass

    parentClass: GObject.ObjectClass
}

/**
 * Grilo PluginRegistry class. Dynamic loader of plugins.
 * @record 
 */
abstract class PluginRegistryClass {

    // Own properties of Grl-0.1.Grl.PluginRegistryClass

    static name: string
}

interface PluginRegistryPrivate {
}

class PluginRegistryPrivate {

    // Own properties of Grl-0.1.Grl.PluginRegistryPrivate

    static name: string
}

interface RelatedKeysClass {

    // Own fields of Grl-0.1.Grl.RelatedKeysClass

    parentClass: GObject.ObjectClass
}

/**
 * Grilo Data Multivalued class
 * @record 
 */
abstract class RelatedKeysClass {

    // Own properties of Grl-0.1.Grl.RelatedKeysClass

    static name: string
}

interface RelatedKeysPrivate {
}

class RelatedKeysPrivate {

    // Own properties of Grl-0.1.Grl.RelatedKeysPrivate

    static name: string
}

    type KeyID = any
}

export default Grl;
// END