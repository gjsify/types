
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-grss-0.7-import.d.ts';
    
/**
 * Grss-0.7
 */

import type libxml2 from '@girs/node-libxml2-2.0';
import type Soup from '@girs/node-soup-2.4';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace Grss {

module FeedAtomFormatter {

    // Constructor properties interface

    interface ConstructorProperties extends FeedFormatter.ConstructorProperties {
    }

}

interface FeedAtomFormatter {

    // Own properties of Grss-0.7.Grss.FeedAtomFormatter

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedAtomFormatter

    parent: FeedFormatter & GObject.Object

    // Class property signals of Grss-0.7.Grss.FeedAtomFormatter

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

class FeedAtomFormatter extends FeedFormatter {

    // Own properties of Grss-0.7.Grss.FeedAtomFormatter

    static name: string

    // Constructors of Grss-0.7.Grss.FeedAtomFormatter

    constructor(config?: FeedAtomFormatter.ConstructorProperties) 
    constructor() 
    static new(): FeedAtomFormatter
    _init(config?: FeedAtomFormatter.ConstructorProperties): void
}

module FeedChannel {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedChannel {

    // Own properties of Grss-0.7.Grss.FeedChannel

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedChannel

    parent: GObject.Object
    priv: FeedChannelPrivate

    // Owm methods of Grss-0.7.Grss.FeedChannel

    /**
     * To add a contributor to the `channel`.
     * @param contributor a #GrssPerson.
     */
    addContributor(contributor: Person): void
    /**
     * To add a cookie related to the `channel,` will be involved in HTTP sessions
     * while fetching it. More cookie can be added to every #GrssFeedChannel
     * @param cookie HTML cookie to add to the #GrssFeedChannel's cookie jar
     */
    addCookie(cookie: Soup.Cookie): void
    /**
     * Utility to fetch and populate a #GrssFeedChannel for the first time, and init
     * all his internal values. Only the source URL has to be set in `channel`
     * (with grss_feed_channel_set_source()). Be aware this function is sync, do not
     * returns until the feed isn't downloaded and parsed.
     * @returns %TRUE if the feed is correctly fetched and parsed, %FALSE otherwise.
     */
    fetch(): boolean
    /**
     * Utility to fetch and populate a #GrssFeedChannel, and retrieve all its
     * items.
     * @returns a GList of #GrssFeedItem, to be completely unreferenced and freed when no longer in use, or %NULL if an error occurs.
     */
    fetchAll(): FeedItem[]
    /**
     * Similar to grss_feed_channel_fetch_all(), but asyncronous.
     * @param callback function to invoke at the end of the download.
     */
    fetchAllAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finalizes an asyncronous operation started with
     * grss_feed_channel_fetch_all_async().
     * @param res the #GAsyncResult passed to the callback.
     * @returns list of items fetched from the #GrssFeedChannel, or %NULL if @error is set. The list (and contained items) is freed at the end of the callback
     */
    fetchAllFinish(res: Gio.AsyncResult): FeedItem[]
    /**
     * Similar to grss_feed_channel_fetch(), but asyncronous.
     * @param callback function to invoke at the end of the download.
     */
    fetchAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * If a fetch operation was scheduled with grss_feed_channel_fetch_async() or
     * grss_feed_channel_fetch_all_async(), cancel it.
     * @returns %TRUE if a fetch was scheduled (and now cancelled), %FALSE if this function had nothing to do
     */
    fetchCancel(): boolean
    /**
     * Finalizes an asyncronous operation started with
     * grss_feed_channel_fetch_async().
     * @param res the #GAsyncResult passed to the callback.
     * @returns %TRUE if @channel informations have been successfully fetched, %FALSE otherwise.
     */
    fetchFinish(res: Gio.AsyncResult): boolean
    /**
     * Retrieves category of the `channel`.
     * @returns category of the feed, or %NULL.
     */
    getCategory(): string
    /**
     * Retrieves reference to the contributors of the `channel`.
     * @returns list of contributors to the channel, or %NULL.
     */
    getContributors(): Person[]
    /**
     * Retrieves reference to the HTML cookies of the `channel`.
     * The list and the individual cookies should all be freed after use.
     * You can use soup_cookies_free.
     * @returns list of cookies to the channel, or %NULL.
     */
    getCookies(): Soup.Cookie[]
    /**
     * Retrieves indications about the copyright.
     * @returns copyright of the @channel, or %NULL.
     */
    getCopyright(): string
    /**
     * Retrieves the description of `channel`.
     * @returns description of the feed, or %NULL.
     */
    getDescription(): string
    /**
     * Retrieves reference to the editor or the `channel`.
     * @returns #GrssPerson, or %NULL.
     */
    getEditor(): Person
    /**
     * Retrieves the file format of `channel`.
     * @returns file format of channel.
     */
    getFormat(): string
    /**
     * Retrieves information about the feed's software generator.
     * @returns generator of @channel, or %NULL.
     */
    getGenerator(): string
    /**
     * GZIP compression of the channel is either on or off.
     * @returns %TRUE if @channel has GZIP compression on.
     */
    getGzipCompression(): boolean
    /**
     * Retrieves the homepage of the site for which `channel` is the feed.
     * @returns reference homepage of the feed, or %NULL.
     */
    getHomepage(): string
    /**
     * Retrieves URL of the favicon of the channel (and/or the website for which
     * this is the feed).
     * @returns URL of the favicon, or %NULL.
     */
    getIcon(): string
    /**
     * Retrieves the URL of the image assigned to the channel.
     * @returns URL of the image, or %NULL.
     */
    getImage(): string
    /**
     * Retrieves the language of the `channel`.
     * @returns string rappresenting the language of channel, or %NULL.
     */
    getLanguage(): string
    /**
     * Retrieves the publishing time of `channel`.
     * @returns time of feed's publish.
     */
    getPublishTime(): number
    /**
     * Retrieves information about the PubSubHubbub hub of the channel.
     * @param hub location for the hub string, or %NULL.
     * @returns %TRUE if a valid PubSubHubbub hub has been set for the @channel, %FALSE otherwise.
     */
    getPubsubhub(hub: string | null): boolean
    /**
     * Retrieves information about the RSSCloud coordinates of the channel.
     * @param path location for the path string, or %NULL.
     * @param protocol location for the protocol string, or %NULL.
     * @returns %TRUE if a valid RSSCloud path has been set for the @channel, %FALSE otherwise.
     */
    getRsscloud(path: string | null, protocol: string | null): boolean
    /**
     * Retrieves URL where to fetch the `channel`.
     * @returns URL of the channel.
     */
    getSource(): string
    /**
     * Retrieves title of the `channel`.
     * @returns title of the feed, or %NULL.
     */
    getTitle(): string
    /**
     * Retrieves the update interval for the feed. Pay attention to the fact the
     * value can be unset, and the function returns 0: in this case the caller
     * must manually set a default update interval with
     * grss_feed_channel_set_update_interval().
     * @returns update interval for the @channel, in minutes.
     */
    getUpdateInterval(): number
    /**
     * Retrieves the update time of `channel`.
     * @returns time of the feed's latest update. If this value was not set (with grss_feed_channel_set_update_time()) returns grss_feed_channel_get_publish_time().
     */
    getUpdateTime(): number
    /**
     * Retrieves reference to the webmaster of the feed.
     * @returns webmaster of @channel, or %NULL.
     */
    getWebmaster(): string
    /**
     * To set the category of the `channel`.
     * @param category category of the feed.
     */
    setCategory(category: string | null): void
    /**
     * To set the copyright of the feed.
     * @param copyright copyright of the channel.
     */
    setCopyright(copyright: string | null): void
    /**
     * To set the description of `channel`.
     * @param description description of the feed.
     */
    setDescription(description: string | null): void
    /**
     * To set the editor of the `channel`.
     * @param editor a #GrssPerson.
     */
    setEditor(editor: Person): void
    /**
     * To assign a file format to the feed.
     * @param format format of the file, such as "application/atom+xml" or "application/rss+xml".
     */
    setFormat(format: string | null): void
    /**
     * To set information about the software generator of `channel`.
     * @param generator software generator of the feed.
     */
    setGenerator(generator: string | null): void
    /**
     * Set the GZIP compression for the channel to on or off.
     * @param value %TRUE to enable GZIP compression when fetching the channel
     */
    setGzipCompression(value: boolean): void
    /**
     * To set the homepage of the site the `channel` belongs.
     * @param homepage homepage for the main website.
     * @returns %TRUE if @homepage is a valid URL, %FALSE otherwise
     */
    setHomepage(homepage: string | null): boolean
    /**
     * To set the URL of the icon rappresenting `channel`.
     * @param icon URL where to retrieve the favicon.
     * @returns %TRUE if @icon is a valid URL, %FALSE otherwise
     */
    setIcon(icon: string | null): boolean
    /**
     * To set a rappresentative image to `channel`.
     * @param image URL of the image.
     * @returns %TRUE if @image is a valid URL, %FALSE otherwise
     */
    setImage(image: string | null): boolean
    /**
     * To set the language of `channel`.
     * @param language string holding the language of the feed.
     */
    setLanguage(language: string | null): void
    /**
     * To set the time of publishing for the feed.
     * @param publish timestamp of publishing.
     */
    setPublishTime(publish: number): void
    /**
     * To set information about PubSubHubbub for the channel. To unset the hub,
     * pass %NULL as parameter.
     * @param hub hub for the feed, or %NULL.
     * @returns %TRUE if @hub is a valid URL, %FALSE otherwise
     */
    setPubsubhub(hub: string | null): boolean
    /**
     * To set information about RSSCloud notifications for the channel.
     * @param path complete references of the URL where to register subscription, e.g.        http://example.com/rsscloudNotify .
     * @param protocol type of protocol used for notifications.
     */
    setRsscloud(path: string | null, protocol: string | null): void
    /**
     * To assign the URL where to fetch the feed.
     * @param source URL of the feed.
     * @returns %TRUE if @source is a valid URL, %FALSE otherwise
     */
    setSource(source: string | null): boolean
    /**
     * To set a title to the `channel`.
     * @param title title of the feed.
     */
    setTitle(title: string | null): void
    /**
     * To set the update interval for `channel`.
     * @param minutes update interval, in minutes.
     */
    setUpdateInterval(minutes: number): void
    /**
     * To set the latest update time of `channel`.
     * @param update update time of the feed.
     */
    setUpdateTime(update: number): void
    /**
     * To assign a webmaster to the `channel`.
     * @param webmaster webmaster of the feed.
     */
    setWebmaster(webmaster: string | null): void

    // Class property signals of Grss-0.7.Grss.FeedChannel

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

class FeedChannel extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedChannel

    static name: string

    // Constructors of Grss-0.7.Grss.FeedChannel

    constructor(config?: FeedChannel.ConstructorProperties) 
    /**
     * Allocates a new #GrssFeedChannel.
     * @constructor 
     * @returns a #GrssFeedChannel.
     */
    constructor() 
    /**
     * Allocates a new #GrssFeedChannel.
     * @constructor 
     * @returns a #GrssFeedChannel.
     */
    static new(): FeedChannel
    /**
     * Allocates a new #GrssFeedChannel and init it with contents found in specified
     * file.
     * @constructor 
     * @param path path of the file to parse.
     * @returns a #GrssFeedChannel, or %NULL if the file in @path is not a valid document.
     */
    static newFromFile(path: string): FeedChannel
    /**
     * Allocates a new #GrssFeedChannel and init it with contents found in specified
     * memory block.
     * @constructor 
     * @param data string to parse.
     * @returns a #GrssFeedChannel, or %NULL if an error occurs.
     */
    static newFromMemory(data: string): FeedChannel
    /**
     * Allocates a new #GrssFeedChannel and init it with contents found in specified
     * XML document.
     * @constructor 
     * @param doc an XML document previously parsed with libxml2.
     * @returns a #GrssFeedChannel, or %NULL if an error occurs.
     */
    static newFromXml(doc: libxml2.DocPtr): FeedChannel
    /**
     * Allocates a new #GrssFeedChannel and assign it the given remote source.
     * @constructor 
     * @param source URL of the feed.
     * @returns a #GrssFeedChannel.
     */
    static newWithSource(source: string | null): FeedChannel
    _init(config?: FeedChannel.ConstructorProperties): void
}

module FeedEnclosure {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedEnclosure {

    // Own properties of Grss-0.7.Grss.FeedEnclosure

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedEnclosure

    parent: GObject.Object
    priv: FeedEnclosurePrivate

    // Owm methods of Grss-0.7.Grss.FeedEnclosure

    /**
     * Utility to fetch a #GrssFeedEnclosure. Contents are stored in a temporary
     * #GFile, which is suggested to move on a permanent location to keep it over
     * time.
     * @returns temporary file where the contents have been written, or %NULL if an error occours.
     */
    fetch(): Gio.File
    /**
     * Similar to grss_feed_enclosure_fetch(), but asyncronous.
     * @param callback function to invoke at the end of the download.
     */
    fetchAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finalizes an asyncronous operation started with
     * grss_feed_enclosure_fetch_async().
     * @param res the #GAsyncResult passed to the callback.
     * @returns temporary file where the contents have been written, or %NULL if an error occours.
     */
    fetchFinish(res: Gio.AsyncResult): Gio.File
    /**
     * Retrieves the format of the enclosed file.
     * @returns type of @enclosure.
     */
    getFormat(): string
    /**
     * Retrieves the size of the embedded file.
     * @returns size of the @enclosure, in bytes.
     */
    getLength(): number
    /**
     * Retrieves the URL of the `enclosure`.
     * @returns the URL where the enclosure may be found.
     */
    getUrl(): string
    /**
     * To set the type of the external file.
     * @param type type of content.
     */
    setFormat(type: string | null): void
    /**
     * To set the size of the embedded `enclosure`.
     * @param length size of the enclosure, in bytes.
     */
    setLength(length: number): void

    // Class property signals of Grss-0.7.Grss.FeedEnclosure

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

class FeedEnclosure extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedEnclosure

    static name: string

    // Constructors of Grss-0.7.Grss.FeedEnclosure

    constructor(config?: FeedEnclosure.ConstructorProperties) 
    /**
     * Allocates a new #GrssFeedEnclosure, to be downloaded separately.
     * @constructor 
     * @param url URL of the external element.
     * @returns a new #GrssFeedEnclosure.
     */
    constructor(url: string | null) 
    /**
     * Allocates a new #GrssFeedEnclosure, to be downloaded separately.
     * @constructor 
     * @param url URL of the external element.
     * @returns a new #GrssFeedEnclosure.
     */
    static new(url: string | null): FeedEnclosure
    _init(config?: FeedEnclosure.ConstructorProperties): void
}

module FeedFormatter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedFormatter {

    // Own properties of Grss-0.7.Grss.FeedFormatter

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedFormatter

    parent: GObject.Object
    priv: FeedFormatterPrivate

    // Owm methods of Grss-0.7.Grss.FeedFormatter

    /**
     * Adds a single #GrssFeedItem in the `formatter`.
     * @param item a #GrssFeedItem to add into the `formatter`.
     */
    addItem(item: FeedItem): void
    /**
     * Adds a list of #GrssFeedItems in the `formatter`.
     * @param items a list of #GrssFeedItems to add into         the `formatter`.
     */
    addItems(items: FeedItem[]): void
    // Has conflict: format(): string | null
    /**
     * Gets the current #GrssFeedChannel assigned to the `formatter`.
     * @returns a #GrssFeedChannel, or %NULL if none has been assigned.
     */
    getChannel(): FeedChannel
    /**
     * Gets the current #GrssFeedItems assigned to the `formatter`.
     * @returns a list of #GrssFeedItems, or %NULL if none has been assigned.
     */
    getItems(): FeedItem[]
    /**
     * Resets the status of the #GrssFeedFormatter, cleaning up the assigned
     * #GrssFeedChannel and related #GrssFeedItems. This way `formatter` is ready to
     * be used again with new data.
     */
    reset(): void
    /**
     * Inits the #GrssFeedFormatter with the given `channel`. A #GrssFeedFormatter
     * can format a single #GrssFeedChannel each time, but may be reused by calling
     * grss_feed_formatter_reset()
     * @param channel the reference #GrssFeedChannel for the `formatter`.
     */
    setChannel(channel: FeedChannel): void

    // Own virtual methods of Grss-0.7.Grss.FeedFormatter

    /**
     * Formats the assigned #GrssFeedChannel and #GrssFeedItems into a plain text
     * string, accordly to the current #GrssFeedFormatter instance.
     * @virtual 
     * @returns a string containing the plain text rappresentation of the given channel containing the given items.
     */
    format(): string | null

    // Class property signals of Grss-0.7.Grss.FeedFormatter

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

class FeedFormatter extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedFormatter

    static name: string

    // Constructors of Grss-0.7.Grss.FeedFormatter

    constructor(config?: FeedFormatter.ConstructorProperties) 
    _init(config?: FeedFormatter.ConstructorProperties): void
}

module FeedItem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedItem {

    // Own properties of Grss-0.7.Grss.FeedItem

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedItem

    parent: GObject.Object
    priv: FeedItemPrivate

    // Owm methods of Grss-0.7.Grss.FeedItem

    /**
     * Adds a category to the `item`. The complete list can be obtained with
     * grss_feed_item_get_categories().
     * @param category a new category to assign to the item.
     */
    addCategory(category: string | null): void
    /**
     * To add a contributor to the `item`.
     * @param contributor a #GrssPerson.
     */
    addContributor(contributor: Person): void
    /**
     * Adds an enclosure to the `item`. That external elements may be references
     * to images, videos, or other contents (usually multimedial) embedded in the
     * element.
     * @param enclosure a #GrssFeedEnclosure to add to the item.
     */
    addEnclosure(enclosure: FeedEnclosure): void
    /**
     * Retrieves the author of `item`.
     * @returns #GrssPerson, or %NULL.
     */
    getAuthor(): Person
    /**
     * Retrieves list of categories assigned to the `item`.
     * @returns list of strings, one for assigned category. Do not free or modify this list.
     */
    getCategories(): string[]
    /**
     * Retrieves the URL where to catch comments to the `item`.
     * @returns URL to parse to read comments for @item, or %NULL.
     */
    getCommentsUrl(): string
    /**
     * Retrieves contributors for `item`.
     * @returns list of          contributors to the item.
     */
    getContributors(): Person[]
    /**
     * Retrieves copyright reference for the `item`.
     * @returns copyright mark, or %NULL.
     */
    getCopyright(): string
    /**
     * Retrieves the description of the `item`.
     * @returns description of @item.
     */
    getDescription(): string
    /**
     * Retrieves the list of enclosures added with grss_feed_item_add_enclosure().
     * @returns a list of #GrssFeedEnclosure. This is a direct reference to the internal list, do not free or modify it.
     */
    getEnclosures(): FeedEnclosure[]
    /**
     * Retrieves the geo reference of the `item`.
     * @returns %TRUE if @item has geographic coordinates assigned and @latitude and @longitude have been set, %FALSE if @item has not geo reference.
     */
    getGeoPoint(): [ /* returnType */ boolean, /* latitude */ number, /* longitude */ number ]
    /**
     * Retrieves the ID assigned to the `item`. If no ID was set with
     * grss_feed_item_set_id() this returns the same of grss_feed_item_get_source().
     * Pay attention to the fact this library do not check uniqueness of assigned
     * IDs.
     * @returns ID of the item.
     */
    getId(): string
    /**
     * Retrieves the feed from which the item belongs.
     * @returns the parent feed, as set in grss_feed_item_new().
     */
    getParent(): FeedChannel
    /**
     * Retrieves the publish time of the item. By default this value is the
     * current timestamp assigned when creating the #GrssFeedItem, and may be
     * changed with grss_feed_item_set_publish_time().
     * @returns publish time of @item.
     */
    getPublishTime(): number
    /**
     * Retrieves references to the real source of `item`.
     * @param realsource will be assigned to the URL of the real source, or %NULL.
     * @param title will be assigned to the title of the real source, or %NULL.
     */
    getRealSource(realsource: string, title: string): void
    /**
     * Retrieves indication about posts related to `item`.
     * @returns related posts, or %NULL.
     */
    getRelated(): string
    /**
     * Retrieves the URL where the `item` can be found.
     * @returns URL of the item, or %NULL.
     */
    getSource(): string
    /**
     * Retrieves the title assigned to `item`.
     * @returns title of the element.
     */
    getTitle(): string
    /**
     * To assign an author to the `item`.
     * @param author a #GrssPerson.
     */
    setAuthor(author: Person): void
    /**
     * To assign the URL where to fetch comments for the item.
     * @param url URL where to retrieve comments to the item.
     * @returns %TRUE if @url is a valid URL, %FALSE otherwise
     */
    setCommentsUrl(url: string | null): boolean
    /**
     * To set a copyright reference to `item`.
     * @param copyright copyright declaration for the item.
     */
    setCopyright(copyright: string | null): void
    /**
     * To set the description of `item`. Usually "description" means his content.
     * @param description content of the item.
     */
    setDescription(description: string | null): void
    /**
     * To assign geographic context to the `item`.
     * Passing -1 as `latitude` or `longitude,` the relative value is untouched in
     * the object. This is to easy assignment of coordinates in more than a
     * single step. If both are -1, nothing happens.
     * @param latitude latitude of the point, or -1 to leave the previous one.
     * @param longitude longitude of the point, or -1 to leave the previous one.
     */
    setGeoPoint(latitude: number, longitude: number): void
    /**
     * To set the ID of the `item`. This parameter has not a particular format: it
     * is just a string used to identify in unique way the item.
     * @param id the new ID to set.
     */
    setId(id: string | null): void
    /**
     * To set the publish time of the item.
     * @param publish publishing timestamp of the item.
     */
    setPublishTime(publish: number): void
    /**
     * To set an alternative real source for `item`. This parameter is used by web
     * aggregators to explicit the origin of a content reproduced in them.
     * @param realsource URL of the real source for the item.
     * @param title title of the real source.
     * @returns %TRUE if @realsource is a valid URL, %FALSE otherwise
     */
    setRealSource(realsource: string | null, title: string | null): boolean
    /**
     * To set reference to a post related to `item`.
     * @param related reference to a related post.
     */
    setRelated(related: string | null): void
    /**
     * To set the source of the `item`.
     * @param source URL of the item.
     * @returns %TRUE if @source is a valid URL, %FALSE otherwise
     */
    setSource(source: string | null): boolean
    /**
     * To set a title to the `item`.
     * @param title title of the item.
     */
    setTitle(title: string | null): void

    // Class property signals of Grss-0.7.Grss.FeedItem

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

class FeedItem extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedItem

    static name: string

    // Constructors of Grss-0.7.Grss.FeedItem

    constructor(config?: FeedItem.ConstructorProperties) 
    /**
     * To allocate a new empty #GrssFeedItem.
     * @constructor 
     * @param parent the feed from which the new item belongs.
     * @returns a new #GrssFeedItem.
     */
    constructor(parent: FeedChannel) 
    /**
     * To allocate a new empty #GrssFeedItem.
     * @constructor 
     * @param parent the feed from which the new item belongs.
     * @returns a new #GrssFeedItem.
     */
    static new(parent: FeedChannel): FeedItem
    _init(config?: FeedItem.ConstructorProperties): void
}

module FeedParser {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedParser {

    // Own properties of Grss-0.7.Grss.FeedParser

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedParser

    parent: GObject.Object
    priv: FeedParserPrivate

    // Owm methods of Grss-0.7.Grss.FeedParser

    /**
     * Parses the given XML `doc,` belonging to the given `feed,` to obtain a list
     * of #GrssFeedItem.
     * @param feed a #GrssFeedChannel to be parsed.
     * @param doc XML document extracted from the contents of the feed, which must       already been fetched.
     * @returns a list of #GrssFeedItem, to be freed when no longer in use, or NULL if anerror occours and @error is set.
     */
    parse(feed: FeedChannel, doc: libxml2.DocPtr): FeedItem[]
    /**
     * Parses the given XML `doc,` belonging to the given `feed`.
     * 
     * Similar to grss_feed_parser_parse(), but grss_feed_parser_parse_channel()
     * skips parsing of items into the document.
     * @param feed a #GrssFeedChannel to be parsed.
     * @param doc XML document extracted from the contents of the feed, which must       already been fetched.
     */
    parseChannel(feed: FeedChannel, doc: libxml2.DocPtr): void

    // Class property signals of Grss-0.7.Grss.FeedParser

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

class FeedParser extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedParser

    static name: string

    // Constructors of Grss-0.7.Grss.FeedParser

    constructor(config?: FeedParser.ConstructorProperties) 
    /**
     * Allocates a new #GrssFeedParser.
     * @constructor 
     * @returns a new #GrssFeedParser.
     */
    constructor() 
    /**
     * Allocates a new #GrssFeedParser.
     * @constructor 
     * @returns a new #GrssFeedParser.
     */
    static new(): FeedParser
    _init(config?: FeedParser.ConstructorProperties): void
}

module FeedRssFormatter {

    // Constructor properties interface

    interface ConstructorProperties extends FeedFormatter.ConstructorProperties {
    }

}

interface FeedRssFormatter {

    // Own properties of Grss-0.7.Grss.FeedRssFormatter

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedRssFormatter

    parent: FeedFormatter & GObject.Object

    // Class property signals of Grss-0.7.Grss.FeedRssFormatter

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

class FeedRssFormatter extends FeedFormatter {

    // Own properties of Grss-0.7.Grss.FeedRssFormatter

    static name: string

    // Constructors of Grss-0.7.Grss.FeedRssFormatter

    constructor(config?: FeedRssFormatter.ConstructorProperties) 
    constructor() 
    static new(): FeedRssFormatter
    _init(config?: FeedRssFormatter.ConstructorProperties): void
}

module FeedsGroup {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedsGroup {

    // Own properties of Grss-0.7.Grss.FeedsGroup

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedsGroup

    parent: GObject.Object
    priv: FeedsGroupPrivate

    // Owm methods of Grss-0.7.Grss.FeedsGroup

    /**
     * Creates a new file with the list of `channels` represented in the required
     * `format`. If the file already exists at the `uri` location, it is overwritten.
     * @param channels list of #GrssFeedChannels.
     * @param format string rappresenting the desired export format, as returnes by          grss_feeds_group_get_formats().
     * @param uri URI of the file to write.
     * @returns %TRUE if the file is created correctly, or %FALSE if an error occours and @error is set.
     */
    exportFile(channels: FeedChannel[], format: string, uri: string): boolean
    /**
     * Returns the list of supported file formats.
     * @returns a list of constant strings with names of supported formats. The list must be freed when no longer used
     */
    getFormats(): string[]
    /**
     * Parses the given file to obtain list of listed feeds.
     * @param path path of the file to parse.
     * @returns a list of #GrssFeedChannels, or NULL if an error occours and @error is set.
     */
    parseFile(path: string): FeedChannel[]

    // Class property signals of Grss-0.7.Grss.FeedsGroup

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

class FeedsGroup extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedsGroup

    static name: string

    // Constructors of Grss-0.7.Grss.FeedsGroup

    constructor(config?: FeedsGroup.ConstructorProperties) 
    /**
     * Allocates a new #GrssFeedsGroup.
     * @constructor 
     * @returns a new #GrssFeedsGroup.
     */
    constructor() 
    /**
     * Allocates a new #GrssFeedsGroup.
     * @constructor 
     * @returns a new #GrssFeedsGroup.
     */
    static new(): FeedsGroup
    _init(config?: FeedsGroup.ConstructorProperties): void
}

module FeedsPool {

    // Signal callback interfaces

    /**
     * Signal callback interface for `feed-fail`
     */
    interface FeedFailSignalCallback {
        (feed: GObject.Object): void
    }

    /**
     * Signal callback interface for `feed-fetching`
     */
    interface FeedFetchingSignalCallback {
        (feed: GObject.Object): void
    }

    /**
     * Signal callback interface for `feed-ready`
     */
    interface FeedReadySignalCallback {
        (feed: GObject.Object, items: FeedItem[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedsPool {

    // Own properties of Grss-0.7.Grss.FeedsPool

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedsPool

    parent: GObject.Object
    priv: FeedsPoolPrivate

    // Owm methods of Grss-0.7.Grss.FeedsPool

    /**
     * Returns the list of feeds currently managed by the `pool`. Please consider
     * this function has to build the list that returns, and of course this is a
     * time and resources consuming task: if you only need to know how many feeds
     * are currently handled, check grss_feeds_pool_get_listened_num().
     * @returns a list of #GrssFeedChannel, to be freed with g_list_free() when no longer in use. Do not modify elements found in this list.
     */
    getListened(): FeedChannel[]
    /**
     * Returns number of feeds under the `pool` control, as provided by
     * grss_feeds_pool_listen(). To get the complete list of those feeds, check
     * grss_feeds_pool_get_listened().
     * @returns number of feeds currently managed by the #GrssFeedsPool.
     */
    getListenedNum(): number
    /**
     * To access the internal #SoupSession used by the `pool` to fetch items.
     * @returns instance of #SoupSession. Do not free it.
     */
    getSession(): Soup.Session
    /**
     * To set the list of feeds to be managed by the pool. The previous list, if
     * any, is invalidated. After invokation to the function, grss_feeds_pool_switch()
     * must be call to run the auto-fetching (always, also if previous state was
     * "running").
     * The list in `feeds` can be freed after calling this; linked #GrssFeedChannel
     * are g_object_ref'd here.
     * @param feeds a list of #GrssFeedChannel.
     */
    listen(feeds: FeedChannel[]): void
    /**
     * Permits to pause or resume the `pool` fetching feeds. If `run` is %TRUE, the
     * `pool` starts immediately.
     * @param run %TRUE to run the pool, %FALSE to pause it.
     */
    switch(run: boolean): void

    // Own virtual methods of Grss-0.7.Grss.FeedsPool

    feedFetching(feed: FeedChannel): void

    // Own signals of Grss-0.7.Grss.FeedsPool

    connect(sigName: "feed-fail", callback: FeedsPool.FeedFailSignalCallback): number
    on(sigName: "feed-fail", callback: FeedsPool.FeedFailSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feed-fail", callback: FeedsPool.FeedFailSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feed-fail", callback: FeedsPool.FeedFailSignalCallback): NodeJS.EventEmitter
    emit(sigName: "feed-fail", ...args: any[]): void
    connect(sigName: "feed-fetching", callback: FeedsPool.FeedFetchingSignalCallback): number
    on(sigName: "feed-fetching", callback: FeedsPool.FeedFetchingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feed-fetching", callback: FeedsPool.FeedFetchingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feed-fetching", callback: FeedsPool.FeedFetchingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "feed-fetching", ...args: any[]): void
    connect(sigName: "feed-ready", callback: FeedsPool.FeedReadySignalCallback): number
    on(sigName: "feed-ready", callback: FeedsPool.FeedReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feed-ready", callback: FeedsPool.FeedReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feed-ready", callback: FeedsPool.FeedReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "feed-ready", items: FeedItem[], ...args: any[]): void

    // Class property signals of Grss-0.7.Grss.FeedsPool

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

class FeedsPool extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedsPool

    static name: string

    // Constructors of Grss-0.7.Grss.FeedsPool

    constructor(config?: FeedsPool.ConstructorProperties) 
    /**
     * Allocates a new #GrssFeedsPool.
     * @constructor 
     * @returns a new #GrssFeedsPool.
     */
    constructor() 
    /**
     * Allocates a new #GrssFeedsPool.
     * @constructor 
     * @returns a new #GrssFeedsPool.
     */
    static new(): FeedsPool
    _init(config?: FeedsPool.ConstructorProperties): void
}

module FeedsPublisher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `delete-subscription`
     */
    interface DeleteSubscriptionSignalCallback {
        (object: FeedChannel, p0: string | null): void
    }

    /**
     * Signal callback interface for `new-subscription`
     */
    interface NewSubscriptionSignalCallback {
        (object: FeedChannel, p0: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedsPublisher {

    // Own properties of Grss-0.7.Grss.FeedsPublisher

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedsPublisher

    parent: GObject.Object
    priv: FeedsPublisherPrivate

    // Owm methods of Grss-0.7.Grss.FeedsPublisher

    /**
     * Format a #GrssFeedChannel in Atom and returns the resulting string.
     * @param channel the #GrssFeedChannel to dump in the file.
     * @param items list of #GrssFeedItems to be added in         the feed.
     * @returns a newly allocated string holding the formatted feed, to be freed when no longer in use.
     */
    formatContent(channel: FeedChannel, items: FeedItem[]): string | null
    /**
     * To customize the port opened by the local server to deliver feeds and
     * catch incoming subscriptions. By default this is 80. Changing the port
     * while the hub is running imply restart the local server.
     * @param port new listening port for the server.
     */
    hubSetPort(port: number): void
    /**
     * To define a list of valid "topics" for which the #GrssFeedsPublisher will
     * deliver contents. Sources of those channels, as retrieved by
     * grss_feed_channel_get_source(), are accepted as "hub.topic" parameter in
     * PubSubHubbub registration requests from remote subscribers.
     * Pay attention to the fact subscriptions requests for different topic are
     * now rejected.
     * @param topics a list of #GrssFeedChannels.
     */
    hubSetTopics(topics: FeedChannel[]): void
    /**
     * Permits to start and stop the webserver implemented by this object.
     * @param run %TRUE to run the local server, %FALSE to stop it.
     */
    hubSwitch(run: boolean): void
    /**
     * Dump the given `channel` in an Atom formatted file in `path`. If the local
     * PubSubHubbub hub has been activated (with grss_feeds_publisher_hub_switch())
     * notifies remote subscribers about the new items which has been added since
     * previous invocation of this function for the same #GrssFeedChannel.
     * @param channel the #GrssFeedChannel to dump in the file.
     * @param items list of #GrssFeedItems to be added in         the feed.
     * @param uri URI of the file to write. The full path must exists.
     * @returns %TRUE if the file is successfully written, %FALSE otherwise.
     */
    publishFile(channel: FeedChannel, items: FeedItem[], uri: string): boolean
    /**
     * If the local web server has been executed (with
     * grss_feeds_publisher_hub_switch()) this function exposes the given `channel`
     * as an Atom formatted file avalable to http://[LOCAL_IP:DEFINED_PORT]/`id` .
     * @param channel the #GrssFeedChannel to dump in the file.
     * @param items list of #GrssFeedItems to be added in         the feed.
     * @param id name used in the external URL of the feed.
     * @returns %TRUE if the file is successfully written, %FALSE otherwise.
     */
    publishWeb(channel: FeedChannel, items: FeedItem[], id: string): boolean

    // Own virtual methods of Grss-0.7.Grss.FeedsPublisher

    deleteSubscription(topic: FeedChannel, callback: string | null): void
    newSubscription(topic: FeedChannel, callback: string | null): void

    // Own signals of Grss-0.7.Grss.FeedsPublisher

    connect(sigName: "delete-subscription", callback: FeedsPublisher.DeleteSubscriptionSignalCallback): number
    on(sigName: "delete-subscription", callback: FeedsPublisher.DeleteSubscriptionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-subscription", callback: FeedsPublisher.DeleteSubscriptionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-subscription", callback: FeedsPublisher.DeleteSubscriptionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "delete-subscription", p0: string | null, ...args: any[]): void
    connect(sigName: "new-subscription", callback: FeedsPublisher.NewSubscriptionSignalCallback): number
    on(sigName: "new-subscription", callback: FeedsPublisher.NewSubscriptionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-subscription", callback: FeedsPublisher.NewSubscriptionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-subscription", callback: FeedsPublisher.NewSubscriptionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-subscription", p0: string | null, ...args: any[]): void

    // Class property signals of Grss-0.7.Grss.FeedsPublisher

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

class FeedsPublisher extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedsPublisher

    static name: string

    // Constructors of Grss-0.7.Grss.FeedsPublisher

    constructor(config?: FeedsPublisher.ConstructorProperties) 
    /**
     * Allocates a new #GrssFeedsPublisher.
     * @constructor 
     * @returns a new #GrssFeedsPublisher.
     */
    constructor() 
    /**
     * Allocates a new #GrssFeedsPublisher.
     * @constructor 
     * @returns a new #GrssFeedsPublisher.
     */
    static new(): FeedsPublisher
    _init(config?: FeedsPublisher.ConstructorProperties): void
}

module FeedsStore {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedsStore {

    // Own properties of Grss-0.7.Grss.FeedsStore

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedsStore

    parent: GObject.Object
    priv: FeedsStorePrivate

    // Owm methods of Grss-0.7.Grss.FeedsStore

    // Has conflict: addItemInChannel(channel: FeedChannel, item: FeedItem): void
    // Has conflict: getChannels(): FeedChannel[]
    // Has conflict: getItemsByChannel(channel: FeedChannel): FeedItem[]
    // Has conflict: hasItem(channel: FeedChannel, id: string): boolean
    /**
     * This is to permit the `store` to auto-update itself: it creates an internal
     * #GrssFeedsPool and listens for his signals, so to implement the whole loop
     * fetch-parse-save trasparently.
     * @param run %TRUE to run the `store,` %FALSE to stop.
     */
    switch(run: boolean): void

    // Own virtual methods of Grss-0.7.Grss.FeedsStore

    /**
     * To save a new #GrssFeedItem into the `store`. It performs a check to grant
     * `item` is not already saved.
     * @virtual 
     * @param channel parent feed for the new item.
     * @param item new item to permanently save.
     */
    addItemInChannel(channel: FeedChannel, item: FeedItem): void
    /**
     * To retrieve list of feeds permanently saved into the store.
     * @virtual 
     * @returns list of #GrssFeedChannel found in the @store. Do not modify or free it.
     */
    getChannels(): FeedChannel[]
    /**
     * To retrieve list of items saved into the store, assigned to the given
     * `channel`.
     * @virtual 
     * @param channel parent feed containing required items.
     * @returns list of #GrssFeedItem found in the @store. Do not modify or free it.
     */
    getItemsByChannel(channel: FeedChannel): FeedItem[]
    /**
     * To retrieve an item into a feed, given his unique ID.
     * @virtual 
     * @param channel parent feed containing required item.
     * @param id unique ID to look for.
     * @returns %TRUE if the specified item exists, %FALSE otherwise.
     */
    hasItem(channel: FeedChannel, id: string): boolean

    // Class property signals of Grss-0.7.Grss.FeedsStore

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

class FeedsStore extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedsStore

    static name: string

    // Constructors of Grss-0.7.Grss.FeedsStore

    constructor(config?: FeedsStore.ConstructorProperties) 
    _init(config?: FeedsStore.ConstructorProperties): void
}

module FeedsSubscriber {

    // Signal callback interfaces

    /**
     * Signal callback interface for `notification-received`
     */
    interface NotificationReceivedSignalCallback {
        (feed: GObject.Object, item: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeedsSubscriber {

    // Own properties of Grss-0.7.Grss.FeedsSubscriber

    __gtype__: number

    // Own fields of Grss-0.7.Grss.FeedsSubscriber

    parent: GObject.Object
    priv: FeedsSubscriberPrivate

    // Owm methods of Grss-0.7.Grss.FeedsSubscriber

    /**
     * This function returns the Internet address where `sub` is listening for
     * external events. It is often required by #GrssFeedsSubscriberHandlers while
     * subscribing contents to specify the local endpoint for communications.
     * @returns the #GInetAddress used by @sub, or %NULL if the #GrssFeedsSubscriber is switched off.
     */
    getAddress(): Gio.InetAddress
    /**
     * Returns the list of feeds currently managed by `sub`.
     * @returns a list of #GrssFeedChannel, to be freed with g_list_free() when no longer in use. Do not modify elements found in this list.
     */
    getListened(): FeedChannel[]
    /**
     * This function returns the Internet port where `sub` is listening for
     * external events. It is often required by #GrssFeedsSubscriberHandlers while
     * subscribing contents to specify the local endpoint for communications.
     * @returns the port of the socket locally opened by @sub.
     */
    getPort(): number
    /**
     * To obtain the internal #SoupSession of a #GrssFeedsSubscriber, so to re-use
     * it in #GrssFeedsSubscriberHandlers or similar tasks.
     * @returns the #SoupSession used by the provided #GrssFeedsSubscriber.
     */
    getSession(): Soup.Session
    /**
     * To set the list of feeds to be managed by `sub`. The previous list, if any,
     * is invalidated. After invokation to the function, grss_feeds_subscriber_switch()
     * must be call to run the subscription.
     * The list in `feeds` can be freed after calling this; linked #GrssFeedChannel
     * are g_object_ref'd here.
     * @param feeds a list of #GrssFeedChannel.
     * @returns %TRUE if all #GrssFeedChannels involved in @feeds are valid and can be listened with one of the implemented procotols, %FALSE otherwise.
     */
    listen(feeds: FeedChannel[]): boolean
    /**
     * To customize the port opened by the local server to catch incoming
     * publishers' events. By default this is 8444. Changing the port while the
     * subscriber is running imply restart the local server.
     * Pay attention to the fact many publishers' implementations accept only
     * certain ports.
     * @param port new listening port for the server.
     */
    setPort(port: number): void
    /**
     * Permits to pause or resume `sub` listening for events.
     * @param run %TRUE to run the subscriber, %FALSE to pause it.
     */
    switch(run: boolean): void

    // Own virtual methods of Grss-0.7.Grss.FeedsSubscriber

    notificationReceived(feed: FeedChannel, item: FeedItem): void

    // Own signals of Grss-0.7.Grss.FeedsSubscriber

    connect(sigName: "notification-received", callback: FeedsSubscriber.NotificationReceivedSignalCallback): number
    on(sigName: "notification-received", callback: FeedsSubscriber.NotificationReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification-received", callback: FeedsSubscriber.NotificationReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification-received", callback: FeedsSubscriber.NotificationReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "notification-received", item: GObject.Object, ...args: any[]): void

    // Class property signals of Grss-0.7.Grss.FeedsSubscriber

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

class FeedsSubscriber extends GObject.Object {

    // Own properties of Grss-0.7.Grss.FeedsSubscriber

    static name: string

    // Constructors of Grss-0.7.Grss.FeedsSubscriber

    constructor(config?: FeedsSubscriber.ConstructorProperties) 
    /**
     * Allocates a new #GrssFeedsSubscriber.
     * @constructor 
     * @returns a new #GrssFeedsSubscriber.
     */
    constructor() 
    /**
     * Allocates a new #GrssFeedsSubscriber.
     * @constructor 
     * @returns a new #GrssFeedsSubscriber.
     */
    static new(): FeedsSubscriber
    _init(config?: FeedsSubscriber.ConstructorProperties): void
}

interface FeedAtomFormatterClass {

    // Own fields of Grss-0.7.Grss.FeedAtomFormatterClass

    parent: FeedFormatterClass
}

abstract class FeedAtomFormatterClass {

    // Own properties of Grss-0.7.Grss.FeedAtomFormatterClass

    static name: string
}

interface FeedAtomFormatterPrivate {
}

class FeedAtomFormatterPrivate {

    // Own properties of Grss-0.7.Grss.FeedAtomFormatterPrivate

    static name: string
}

interface FeedChannelClass {

    // Own fields of Grss-0.7.Grss.FeedChannelClass

    parent: GObject.ObjectClass
}

abstract class FeedChannelClass {

    // Own properties of Grss-0.7.Grss.FeedChannelClass

    static name: string
}

interface FeedChannelPrivate {
}

class FeedChannelPrivate {

    // Own properties of Grss-0.7.Grss.FeedChannelPrivate

    static name: string
}

interface FeedEnclosureClass {

    // Own fields of Grss-0.7.Grss.FeedEnclosureClass

    parent: GObject.ObjectClass
}

abstract class FeedEnclosureClass {

    // Own properties of Grss-0.7.Grss.FeedEnclosureClass

    static name: string
}

interface FeedEnclosurePrivate {
}

class FeedEnclosurePrivate {

    // Own properties of Grss-0.7.Grss.FeedEnclosurePrivate

    static name: string
}

interface FeedFormatterClass {

    // Own fields of Grss-0.7.Grss.FeedFormatterClass

    parent: GObject.ObjectClass
    format: (formatter: FeedFormatter) => string | null
}

abstract class FeedFormatterClass {

    // Own properties of Grss-0.7.Grss.FeedFormatterClass

    static name: string
}

interface FeedFormatterPrivate {
}

class FeedFormatterPrivate {

    // Own properties of Grss-0.7.Grss.FeedFormatterPrivate

    static name: string
}

interface FeedItemClass {

    // Own fields of Grss-0.7.Grss.FeedItemClass

    parent: GObject.ObjectClass
}

abstract class FeedItemClass {

    // Own properties of Grss-0.7.Grss.FeedItemClass

    static name: string
}

interface FeedItemPrivate {
}

class FeedItemPrivate {

    // Own properties of Grss-0.7.Grss.FeedItemPrivate

    static name: string
}

interface FeedParserClass {

    // Own fields of Grss-0.7.Grss.FeedParserClass

    parent: GObject.ObjectClass
}

abstract class FeedParserClass {

    // Own properties of Grss-0.7.Grss.FeedParserClass

    static name: string
}

interface FeedParserPrivate {
}

class FeedParserPrivate {

    // Own properties of Grss-0.7.Grss.FeedParserPrivate

    static name: string
}

interface FeedRssFormatterClass {

    // Own fields of Grss-0.7.Grss.FeedRssFormatterClass

    parent: FeedFormatterClass
}

abstract class FeedRssFormatterClass {

    // Own properties of Grss-0.7.Grss.FeedRssFormatterClass

    static name: string
}

interface FeedRssFormatterPrivate {
}

class FeedRssFormatterPrivate {

    // Own properties of Grss-0.7.Grss.FeedRssFormatterPrivate

    static name: string
}

interface FeedsGroupClass {

    // Own fields of Grss-0.7.Grss.FeedsGroupClass

    parent: GObject.ObjectClass
}

abstract class FeedsGroupClass {

    // Own properties of Grss-0.7.Grss.FeedsGroupClass

    static name: string
}

interface FeedsGroupPrivate {
}

class FeedsGroupPrivate {

    // Own properties of Grss-0.7.Grss.FeedsGroupPrivate

    static name: string
}

interface FeedsPoolClass {

    // Own fields of Grss-0.7.Grss.FeedsPoolClass

    parent: GObject.ObjectClass
    feedFetching: (pool: FeedsPool, feed: FeedChannel) => void
}

abstract class FeedsPoolClass {

    // Own properties of Grss-0.7.Grss.FeedsPoolClass

    static name: string
}

interface FeedsPoolPrivate {
}

class FeedsPoolPrivate {

    // Own properties of Grss-0.7.Grss.FeedsPoolPrivate

    static name: string
}

interface FeedsPublisherClass {

    // Own fields of Grss-0.7.Grss.FeedsPublisherClass

    parent: GObject.ObjectClass
    newSubscription: (pub: FeedsPublisher, topic: FeedChannel, callback: string | null) => void
    deleteSubscription: (pub: FeedsPublisher, topic: FeedChannel, callback: string | null) => void
}

abstract class FeedsPublisherClass {

    // Own properties of Grss-0.7.Grss.FeedsPublisherClass

    static name: string
}

interface FeedsPublisherPrivate {
}

class FeedsPublisherPrivate {

    // Own properties of Grss-0.7.Grss.FeedsPublisherPrivate

    static name: string
}

interface FeedsStoreClass {

    // Own fields of Grss-0.7.Grss.FeedsStoreClass

    parent: GObject.ObjectClass
    getChannels: (store: FeedsStore) => FeedChannel[]
    getItemsByChannel: (store: FeedsStore, channel: FeedChannel) => FeedItem[]
    hasItem: (store: FeedsStore, channel: FeedChannel, id: string) => boolean
    addItemInChannel: (store: FeedsStore, channel: FeedChannel, item: FeedItem) => void
}

abstract class FeedsStoreClass {

    // Own properties of Grss-0.7.Grss.FeedsStoreClass

    static name: string
}

interface FeedsStorePrivate {
}

class FeedsStorePrivate {

    // Own properties of Grss-0.7.Grss.FeedsStorePrivate

    static name: string
}

interface FeedsSubscriberClass {

    // Own fields of Grss-0.7.Grss.FeedsSubscriberClass

    parent: GObject.ObjectClass
    notificationReceived: (sub: FeedsSubscriber, feed: FeedChannel, item: FeedItem) => void
}

abstract class FeedsSubscriberClass {

    // Own properties of Grss-0.7.Grss.FeedsSubscriberClass

    static name: string
}

interface FeedsSubscriberPrivate {
}

class FeedsSubscriberPrivate {

    // Own properties of Grss-0.7.Grss.FeedsSubscriberPrivate

    static name: string
}

interface Person {

    // Owm methods of Grss-0.7.Grss.Person

    getEmail(): string
    getName(): string
    getUri(): string
    /**
     * Atomically increments the reference count of `person` by one.
     * @returns the #GrssPerson with the reference count increased
     */
    ref(): Person
    /**
     * Atomically decrements the reference count of `person` by one.
     * 
     * When the reference count reaches zero, the resources allocated by
     * `person` are freed
     */
    unref(): void
}

/**
 * `GrssPerson` is an opaque structure whose members
 * cannot be accessed directly.
 * @record 
 */
class Person {

    // Own properties of Grss-0.7.Grss.Person

    static name: string

    // Constructors of Grss-0.7.Grss.Person

    /**
     * Creates a new #GrssPerson.
     * @constructor 
     * @param name the name of the person
     * @param email the email of the person, or %NULL
     * @param uri the homepage (uri) of the person, or %NULL
     * @returns a new #GrssPerson, or %NULL
     */
    constructor(name: string, email: string | null, uri: string | null) 
    /**
     * Creates a new #GrssPerson.
     * @constructor 
     * @param name the name of the person
     * @param email the email of the person, or %NULL
     * @param uri the homepage (uri) of the person, or %NULL
     * @returns a new #GrssPerson, or %NULL
     */
    static new(name: string, email: string | null, uri: string | null): Person
}

}

export default Grss;
// END