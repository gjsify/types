/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Grss {
    /**
     * Grss-0.7
     */

    module FeedAtomFormatter {
        // Constructor properties interface

        interface ConstructorProps extends FeedFormatter.ConstructorProps {}
    }

    class FeedAtomFormatter extends FeedFormatter {
        static $gtype: GObject.GType<FeedAtomFormatter>;

        // Constructors

        constructor(properties?: Partial<FeedAtomFormatter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedAtomFormatter;
    }

    module FeedChannel {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedChannel extends GObject.Object {
        static $gtype: GObject.GType<FeedChannel>;

        // Constructors

        constructor(properties?: Partial<FeedChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedChannel;

        static new_from_file(path: string): FeedChannel;

        static new_from_memory(data: string): FeedChannel;

        static new_from_xml(doc: libxml2.DocPtr): FeedChannel;

        static new_with_source(source: string): FeedChannel;

        // Methods

        /**
         * To add a contributor to the `channel`.
         * @param contributor a #GrssPerson.
         */
        add_contributor(contributor: Person): void;
        /**
         * To add a cookie related to the `channel,` will be involved in HTTP sessions
         * while fetching it. More cookie can be added to every #GrssFeedChannel
         * @param cookie HTML cookie to add to the #GrssFeedChannel's cookie jar
         */
        add_cookie(cookie: Soup.Cookie): void;
        /**
         * Utility to fetch and populate a #GrssFeedChannel for the first time, and init
         * all his internal values. Only the source URL has to be set in `channel`
         * (with grss_feed_channel_set_source()). Be aware this function is sync, do not
         * returns until the feed isn't downloaded and parsed.
         * @returns %TRUE if the feed is correctly fetched and parsed, %FALSE otherwise.
         */
        fetch(): boolean;
        /**
         * Utility to fetch and populate a #GrssFeedChannel, and retrieve all its
         * items.
         * @returns a GList of #GrssFeedItem, to be completely unreferenced and freed when no longer in use, or %NULL if an error occurs.
         */
        fetch_all(): FeedItem[];
        /**
         * Similar to grss_feed_channel_fetch_all(), but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_all_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finalizes an asyncronous operation started with
         * grss_feed_channel_fetch_all_async().
         * @param res the #GAsyncResult passed to the callback.
         * @returns list of items fetched from the #GrssFeedChannel, or %NULL if @error is set. The list (and contained items) is freed at the end of the callback
         */
        fetch_all_finish(res: Gio.AsyncResult): FeedItem[];
        /**
         * Similar to grss_feed_channel_fetch(), but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * If a fetch operation was scheduled with grss_feed_channel_fetch_async() or
         * grss_feed_channel_fetch_all_async(), cancel it.
         * @returns %TRUE if a fetch was scheduled (and now cancelled), %FALSE if this function had nothing to do
         */
        fetch_cancel(): boolean;
        /**
         * Finalizes an asyncronous operation started with
         * grss_feed_channel_fetch_async().
         * @param res the #GAsyncResult passed to the callback.
         * @returns %TRUE if @channel informations have been successfully fetched, %FALSE otherwise.
         */
        fetch_finish(res: Gio.AsyncResult): boolean;
        /**
         * Retrieves category of the `channel`.
         * @returns category of the feed, or %NULL.
         */
        get_category(): string;
        /**
         * Retrieves reference to the contributors of the `channel`.
         * @returns list of contributors to the channel, or %NULL.
         */
        get_contributors(): Person[];
        /**
         * Retrieves reference to the HTML cookies of the `channel`.
         * The list and the individual cookies should all be freed after use.
         * You can use soup_cookies_free.
         * @returns list of cookies to the channel, or %NULL.
         */
        get_cookies(): Soup.Cookie[];
        /**
         * Retrieves indications about the copyright.
         * @returns copyright of the @channel, or %NULL.
         */
        get_copyright(): string;
        /**
         * Retrieves the description of `channel`.
         * @returns description of the feed, or %NULL.
         */
        get_description(): string;
        /**
         * Retrieves reference to the editor or the `channel`.
         * @returns #GrssPerson, or %NULL.
         */
        get_editor(): Person;
        /**
         * Retrieves the file format of `channel`.
         * @returns file format of channel.
         */
        get_format(): string;
        /**
         * Retrieves information about the feed's software generator.
         * @returns generator of @channel, or %NULL.
         */
        get_generator(): string;
        /**
         * GZIP compression of the channel is either on or off.
         * @returns %TRUE if @channel has GZIP compression on.
         */
        get_gzip_compression(): boolean;
        /**
         * Retrieves the homepage of the site for which `channel` is the feed.
         * @returns reference homepage of the feed, or %NULL.
         */
        get_homepage(): string;
        /**
         * Retrieves URL of the favicon of the channel (and/or the website for which
         * this is the feed).
         * @returns URL of the favicon, or %NULL.
         */
        get_icon(): string;
        /**
         * Retrieves the URL of the image assigned to the channel.
         * @returns URL of the image, or %NULL.
         */
        get_image(): string;
        /**
         * Retrieves the language of the `channel`.
         * @returns string rappresenting the language of channel, or %NULL.
         */
        get_language(): string;
        /**
         * Retrieves the publishing time of `channel`.
         * @returns time of feed's publish.
         */
        get_publish_time(): never;
        /**
         * Retrieves information about the PubSubHubbub hub of the channel.
         * @param hub location for the hub string, or %NULL.
         * @returns %TRUE if a valid PubSubHubbub hub has been set for the @channel, %FALSE otherwise.
         */
        get_pubsubhub(hub: string): boolean;
        /**
         * Retrieves information about the RSSCloud coordinates of the channel.
         * @param path location for the path string, or %NULL.
         * @param protocol location for the protocol string, or %NULL.
         * @returns %TRUE if a valid RSSCloud path has been set for the @channel, %FALSE otherwise.
         */
        get_rsscloud(path: string, protocol: string): boolean;
        /**
         * Retrieves URL where to fetch the `channel`.
         * @returns URL of the channel.
         */
        get_source(): string;
        /**
         * Retrieves title of the `channel`.
         * @returns title of the feed, or %NULL.
         */
        get_title(): string;
        /**
         * Retrieves the update interval for the feed. Pay attention to the fact the
         * value can be unset, and the function returns 0: in this case the caller
         * must manually set a default update interval with
         * grss_feed_channel_set_update_interval().
         * @returns update interval for the @channel, in minutes.
         */
        get_update_interval(): number;
        /**
         * Retrieves the update time of `channel`.
         * @returns time of the feed's latest update. If this value was not set (with grss_feed_channel_set_update_time()) returns grss_feed_channel_get_publish_time().
         */
        get_update_time(): never;
        /**
         * Retrieves reference to the webmaster of the feed.
         * @returns webmaster of @channel, or %NULL.
         */
        get_webmaster(): string;
        /**
         * To set the category of the `channel`.
         * @param category category of the feed.
         */
        set_category(category: string): void;
        /**
         * To set the copyright of the feed.
         * @param copyright copyright of the channel.
         */
        set_copyright(copyright: string): void;
        /**
         * To set the description of `channel`.
         * @param description description of the feed.
         */
        set_description(description: string): void;
        /**
         * To set the editor of the `channel`.
         * @param editor a #GrssPerson.
         */
        set_editor(editor: Person): void;
        /**
         * To assign a file format to the feed.
         * @param format format of the file, such as "application/atom+xml" or "application/rss+xml".
         */
        set_format(format: string): void;
        /**
         * To set information about the software generator of `channel`.
         * @param generator software generator of the feed.
         */
        set_generator(generator: string): void;
        /**
         * Set the GZIP compression for the channel to on or off.
         * @param value %TRUE to enable GZIP compression when fetching the channel
         */
        set_gzip_compression(value: boolean): void;
        /**
         * To set the homepage of the site the `channel` belongs.
         * @param homepage homepage for the main website.
         * @returns %TRUE if @homepage is a valid URL, %FALSE otherwise
         */
        set_homepage(homepage: string): boolean;
        /**
         * To set the URL of the icon rappresenting `channel`.
         * @param icon URL where to retrieve the favicon.
         * @returns %TRUE if @icon is a valid URL, %FALSE otherwise
         */
        set_icon(icon: string): boolean;
        /**
         * To set a rappresentative image to `channel`.
         * @param image URL of the image.
         * @returns %TRUE if @image is a valid URL, %FALSE otherwise
         */
        set_image(image: string): boolean;
        /**
         * To set the language of `channel`.
         * @param language string holding the language of the feed.
         */
        set_language(language: string): void;
        /**
         * To set the time of publishing for the feed.
         * @param publish timestamp of publishing.
         */
        set_publish_time(publish: never): void;
        /**
         * To set information about PubSubHubbub for the channel. To unset the hub,
         * pass %NULL as parameter.
         * @param hub hub for the feed, or %NULL.
         * @returns %TRUE if @hub is a valid URL, %FALSE otherwise
         */
        set_pubsubhub(hub: string): boolean;
        /**
         * To set information about RSSCloud notifications for the channel.
         * @param path complete references of the URL where to register subscription, e.g.        http://example.com/rsscloudNotify .
         * @param protocol type of protocol used for notifications.
         */
        set_rsscloud(path: string, protocol: string): void;
        /**
         * To assign the URL where to fetch the feed.
         * @param source URL of the feed.
         * @returns %TRUE if @source is a valid URL, %FALSE otherwise
         */
        set_source(source: string): boolean;
        /**
         * To set a title to the `channel`.
         * @param title title of the feed.
         */
        set_title(title: string): void;
        /**
         * To set the update interval for `channel`.
         * @param minutes update interval, in minutes.
         */
        set_update_interval(minutes: number): void;
        /**
         * To set the latest update time of `channel`.
         * @param update update time of the feed.
         */
        set_update_time(update: never): void;
        /**
         * To assign a webmaster to the `channel`.
         * @param webmaster webmaster of the feed.
         */
        set_webmaster(webmaster: string): void;
    }

    module FeedEnclosure {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedEnclosure extends GObject.Object {
        static $gtype: GObject.GType<FeedEnclosure>;

        // Constructors

        constructor(properties?: Partial<FeedEnclosure.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](url: string): FeedEnclosure;

        // Methods

        /**
         * Utility to fetch a #GrssFeedEnclosure. Contents are stored in a temporary
         * #GFile, which is suggested to move on a permanent location to keep it over
         * time.
         * @returns temporary file where the contents have been written, or %NULL if an error occours.
         */
        fetch(): Gio.File;
        /**
         * Similar to grss_feed_enclosure_fetch(), but asyncronous.
         * @param callback function to invoke at the end of the download.
         */
        fetch_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finalizes an asyncronous operation started with
         * grss_feed_enclosure_fetch_async().
         * @param res the #GAsyncResult passed to the callback.
         * @returns temporary file where the contents have been written, or %NULL if an error occours.
         */
        fetch_finish(res: Gio.AsyncResult): Gio.File;
        /**
         * Retrieves the format of the enclosed file.
         * @returns type of @enclosure.
         */
        get_format(): string;
        /**
         * Retrieves the size of the embedded file.
         * @returns size of the @enclosure, in bytes.
         */
        get_length(): number;
        /**
         * Retrieves the URL of the `enclosure`.
         * @returns the URL where the enclosure may be found.
         */
        get_url(): string;
        /**
         * To set the type of the external file.
         * @param type type of content.
         */
        set_format(type: string): void;
        /**
         * To set the size of the embedded `enclosure`.
         * @param length size of the enclosure, in bytes.
         */
        set_length(length: number): void;
    }

    module FeedFormatter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class FeedFormatter extends GObject.Object {
        static $gtype: GObject.GType<FeedFormatter>;

        // Constructors

        constructor(properties?: Partial<FeedFormatter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Formats the assigned #GrssFeedChannel and #GrssFeedItems into a plain text
         * string, accordly to the current #GrssFeedFormatter instance.
         */
        vfunc_format(): string;

        // Methods

        /**
         * Adds a single #GrssFeedItem in the `formatter`.
         * @param item a #GrssFeedItem to add into the @formatter.
         */
        add_item(item: FeedItem): void;
        /**
         * Adds a list of #GrssFeedItems in the `formatter`.
         * @param items a list of #GrssFeedItems to add into         the @formatter.
         */
        add_items(items: FeedItem[]): void;
        /**
         * Formats the assigned #GrssFeedChannel and #GrssFeedItems into a plain text
         * string, accordly to the current #GrssFeedFormatter instance.
         * @returns a string containing the plain text rappresentation of the given channel containing the given items.
         */
        format(): string;
        /**
         * Gets the current #GrssFeedChannel assigned to the `formatter`.
         * @returns a #GrssFeedChannel, or %NULL if none has been assigned.
         */
        get_channel(): FeedChannel;
        /**
         * Gets the current #GrssFeedItems assigned to the `formatter`.
         * @returns a list of #GrssFeedItems, or %NULL if none has been assigned.
         */
        get_items(): FeedItem[];
        /**
         * Resets the status of the #GrssFeedFormatter, cleaning up the assigned
         * #GrssFeedChannel and related #GrssFeedItems. This way `formatter` is ready to
         * be used again with new data.
         */
        reset(): void;
        /**
         * Inits the #GrssFeedFormatter with the given `channel`. A #GrssFeedFormatter
         * can format a single #GrssFeedChannel each time, but may be reused by calling
         * grss_feed_formatter_reset()
         * @param channel the reference #GrssFeedChannel for the @formatter.
         */
        set_channel(channel: FeedChannel): void;
    }

    module FeedItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedItem extends GObject.Object {
        static $gtype: GObject.GType<FeedItem>;

        // Constructors

        constructor(properties?: Partial<FeedItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: FeedChannel): FeedItem;

        // Methods

        /**
         * Adds a category to the `item`. The complete list can be obtained with
         * grss_feed_item_get_categories().
         * @param category a new category to assign to the item.
         */
        add_category(category: string): void;
        /**
         * To add a contributor to the `item`.
         * @param contributor a #GrssPerson.
         */
        add_contributor(contributor: Person): void;
        /**
         * Adds an enclosure to the `item`. That external elements may be references
         * to images, videos, or other contents (usually multimedial) embedded in the
         * element.
         * @param enclosure a #GrssFeedEnclosure to add to the item.
         */
        add_enclosure(enclosure: FeedEnclosure): void;
        /**
         * Retrieves the author of `item`.
         * @returns #GrssPerson, or %NULL.
         */
        get_author(): Person;
        /**
         * Retrieves list of categories assigned to the `item`.
         * @returns list of strings, one for assigned category. Do not free or modify this list.
         */
        get_categories(): string[];
        /**
         * Retrieves the URL where to catch comments to the `item`.
         * @returns URL to parse to read comments for @item, or %NULL.
         */
        get_comments_url(): string;
        /**
         * Retrieves contributors for `item`.
         * @returns list of          contributors to the item.
         */
        get_contributors(): Person[];
        /**
         * Retrieves copyright reference for the `item`.
         * @returns copyright mark, or %NULL.
         */
        get_copyright(): string;
        /**
         * Retrieves the description of the `item`.
         * @returns description of @item.
         */
        get_description(): string;
        /**
         * Retrieves the list of enclosures added with grss_feed_item_add_enclosure().
         * @returns a list of #GrssFeedEnclosure. This is a direct reference to the internal list, do not free or modify it.
         */
        get_enclosures(): FeedEnclosure[];
        /**
         * Retrieves the geo reference of the `item`.
         * @param latitude will be assigned to the latitude of the point, or %NULL.
         * @param longitude will be assigned to the longitude of the point, or %NULL.
         * @returns %TRUE if @item has geographic coordinates assigned and @latitude and @longitude have been set, %FALSE if @item has not geo reference.
         */
        get_geo_point(latitude: number, longitude: number): boolean;
        /**
         * Retrieves the ID assigned to the `item`. If no ID was set with
         * grss_feed_item_set_id() this returns the same of grss_feed_item_get_source().
         * Pay attention to the fact this library do not check uniqueness of assigned
         * IDs.
         * @returns ID of the item.
         */
        get_id(): string;
        /**
         * Retrieves the feed from which the item belongs.
         * @returns the parent feed, as set in grss_feed_item_new().
         */
        get_parent(): FeedChannel;
        /**
         * Retrieves the publish time of the item. By default this value is the
         * current timestamp assigned when creating the #GrssFeedItem, and may be
         * changed with grss_feed_item_set_publish_time().
         * @returns publish time of @item.
         */
        get_publish_time(): never;
        /**
         * Retrieves references to the real source of `item`.
         * @param realsource will be assigned to the URL of the real source, or %NULL.
         * @param title will be assigned to the title of the real source, or %NULL.
         */
        get_real_source(realsource: string, title: string): void;
        /**
         * Retrieves indication about posts related to `item`.
         * @returns related posts, or %NULL.
         */
        get_related(): string;
        /**
         * Retrieves the URL where the `item` can be found.
         * @returns URL of the item, or %NULL.
         */
        get_source(): string;
        /**
         * Retrieves the title assigned to `item`.
         * @returns title of the element.
         */
        get_title(): string;
        /**
         * To assign an author to the `item`.
         * @param author a #GrssPerson.
         */
        set_author(author: Person): void;
        /**
         * To assign the URL where to fetch comments for the item.
         * @param url URL where to retrieve comments to the item.
         * @returns %TRUE if @url is a valid URL, %FALSE otherwise
         */
        set_comments_url(url: string): boolean;
        /**
         * To set a copyright reference to `item`.
         * @param copyright copyright declaration for the item.
         */
        set_copyright(copyright: string): void;
        /**
         * To set the description of `item`. Usually "description" means his content.
         * @param description content of the item.
         */
        set_description(description: string): void;
        /**
         * To assign geographic context to the `item`.
         * Passing -1 as `latitude` or `longitude,` the relative value is untouched in
         * the object. This is to easy assignment of coordinates in more than a
         * single step. If both are -1, nothing happens.
         * @param latitude latitude of the point, or -1 to leave the previous one.
         * @param longitude longitude of the point, or -1 to leave the previous one.
         */
        set_geo_point(latitude: number, longitude: number): void;
        /**
         * To set the ID of the `item`. This parameter has not a particular format: it
         * is just a string used to identify in unique way the item.
         * @param id the new ID to set.
         */
        set_id(id: string): void;
        /**
         * To set the publish time of the item.
         * @param publish publishing timestamp of the item.
         */
        set_publish_time(publish: never): void;
        /**
         * To set an alternative real source for `item`. This parameter is used by web
         * aggregators to explicit the origin of a content reproduced in them.
         * @param realsource URL of the real source for the item.
         * @param title title of the real source.
         * @returns %TRUE if @realsource is a valid URL, %FALSE otherwise
         */
        set_real_source(realsource: string, title: string): boolean;
        /**
         * To set reference to a post related to `item`.
         * @param related reference to a related post.
         */
        set_related(related: string): void;
        /**
         * To set the source of the `item`.
         * @param source URL of the item.
         * @returns %TRUE if @source is a valid URL, %FALSE otherwise
         */
        set_source(source: string): boolean;
        /**
         * To set a title to the `item`.
         * @param title title of the item.
         */
        set_title(title: string): void;
    }

    module FeedParser {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedParser extends GObject.Object {
        static $gtype: GObject.GType<FeedParser>;

        // Constructors

        constructor(properties?: Partial<FeedParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedParser;

        // Methods

        /**
         * Parses the given XML `doc,` belonging to the given `feed,` to obtain a list
         * of #GrssFeedItem.
         * @param feed a #GrssFeedChannel to be parsed.
         * @param doc XML document extracted from the contents of the feed, which must       already been fetched.
         * @returns a list of #GrssFeedItem, to be freed when no longer in use, or NULL if anerror occours and @error is set.
         */
        parse(feed: FeedChannel, doc: libxml2.DocPtr): FeedItem[];
        /**
         * Parses the given XML `doc,` belonging to the given `feed`.
         *
         * Similar to grss_feed_parser_parse(), but grss_feed_parser_parse_channel()
         * skips parsing of items into the document.
         * @param feed a #GrssFeedChannel to be parsed.
         * @param doc XML document extracted from the contents of the feed, which must       already been fetched.
         */
        parse_channel(feed: FeedChannel, doc: libxml2.DocPtr): void;
    }

    module FeedRssFormatter {
        // Constructor properties interface

        interface ConstructorProps extends FeedFormatter.ConstructorProps {}
    }

    class FeedRssFormatter extends FeedFormatter {
        static $gtype: GObject.GType<FeedRssFormatter>;

        // Constructors

        constructor(properties?: Partial<FeedRssFormatter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedRssFormatter;
    }

    module FeedsGroup {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedsGroup extends GObject.Object {
        static $gtype: GObject.GType<FeedsGroup>;

        // Constructors

        constructor(properties?: Partial<FeedsGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsGroup;

        // Methods

        /**
         * Creates a new file with the list of `channels` rappresented in the required
         * `format`. It a file already exists at the `uri` location, it is overwritten.
         * @param channels list of #GrssFeedChannels.
         * @param format string rappresenting the desired export format, as returnes by          grss_feeds_group_get_formats().
         * @param uri URI of the file to write.
         * @returns %TRUE if the file is created correctly, or %FALSE if an error occours and @error is set.
         */
        export_file(channels: FeedChannel[], format: string, uri: string): boolean;
        /**
         * Returns the list of supported file formats.
         * @returns a list of constant strings with names of supported formats. The list must be freed when no longer used
         */
        get_formats(): string[];
        /**
         * Parses the given file to obtain list of listed feeds.
         * @param path path of the file to parse.
         * @returns a list of #GrssFeedChannels, or NULL if an error occours and @error is set.
         */
        parse_file(path: string): FeedChannel[];
    }

    module FeedsPool {
        // Signal callback interfaces

        interface FeedFail {
            (feed: GObject.Object): void;
        }

        interface FeedFetching {
            (feed: GObject.Object): void;
        }

        interface FeedReady {
            (feed: GObject.Object, items: FeedItem[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedsPool extends GObject.Object {
        static $gtype: GObject.GType<FeedsPool>;

        // Constructors

        constructor(properties?: Partial<FeedsPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsPool;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'feed-fail', callback: (_source: this, feed: GObject.Object) => void): number;
        connect_after(signal: 'feed-fail', callback: (_source: this, feed: GObject.Object) => void): number;
        emit(signal: 'feed-fail', feed: GObject.Object): void;
        connect(signal: 'feed-fetching', callback: (_source: this, feed: GObject.Object) => void): number;
        connect_after(signal: 'feed-fetching', callback: (_source: this, feed: GObject.Object) => void): number;
        emit(signal: 'feed-fetching', feed: GObject.Object): void;
        connect(
            signal: 'feed-ready',
            callback: (_source: this, feed: GObject.Object, items: FeedItem[]) => void,
        ): number;
        connect_after(
            signal: 'feed-ready',
            callback: (_source: this, feed: GObject.Object, items: FeedItem[]) => void,
        ): number;
        emit(signal: 'feed-ready', feed: GObject.Object, items: FeedItem[]): void;

        // Virtual methods

        vfunc_feed_fetching(feed: FeedChannel): void;

        // Methods

        /**
         * Returns the list of feeds currently managed by the `pool`. Please consider
         * this function has to build the list that returns, and of course this is a
         * time and resources consuming task: if you only need to know how many feeds
         * are currently handled, check grss_feeds_pool_get_listened_num().
         * @returns a list of #GrssFeedChannel, to be freed with g_list_free() when no longer in use. Do not modify elements found in this list.
         */
        get_listened(): FeedChannel[];
        /**
         * Returns number of feeds under the `pool` control, as provided by
         * grss_feeds_pool_listen(). To get the complete list of those feeds, check
         * grss_feeds_pool_get_listened().
         * @returns number of feeds currently managed by the #GrssFeedsPool.
         */
        get_listened_num(): number;
        /**
         * To access the internal #SoupSession used by the `pool` to fetch items.
         * @returns instance of #SoupSession. Do not free it.
         */
        get_session(): Soup.Session;
        /**
         * To set the list of feeds to be managed by the pool. The previous list, if
         * any, is invalidated. After invokation to the function, grss_feeds_pool_switch()
         * must be call to run the auto-fetching (always, also if previous state was
         * "running").
         * The list in `feeds` can be freed after calling this; linked #GrssFeedChannel
         * are g_object_ref'd here.
         * @param feeds a list of #GrssFeedChannel.
         */
        listen(feeds: FeedChannel[]): void;
        /**
         * Permits to pause or resume the `pool` fetching feeds. If `run` is %TRUE, the
         * `pool` starts immediately.
         * @param run %TRUE to run the pool, %FALSE to pause it.
         */
        ['switch'](run: boolean): void;
    }

    module FeedsPublisher {
        // Signal callback interfaces

        interface DeleteSubscription {
            (object: FeedChannel, p0: string): void;
        }

        interface NewSubscription {
            (object: FeedChannel, p0: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedsPublisher extends GObject.Object {
        static $gtype: GObject.GType<FeedsPublisher>;

        // Constructors

        constructor(properties?: Partial<FeedsPublisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsPublisher;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'delete-subscription',
            callback: (_source: this, object: FeedChannel, p0: string) => void,
        ): number;
        connect_after(
            signal: 'delete-subscription',
            callback: (_source: this, object: FeedChannel, p0: string) => void,
        ): number;
        emit(signal: 'delete-subscription', object: FeedChannel, p0: string): void;
        connect(signal: 'new-subscription', callback: (_source: this, object: FeedChannel, p0: string) => void): number;
        connect_after(
            signal: 'new-subscription',
            callback: (_source: this, object: FeedChannel, p0: string) => void,
        ): number;
        emit(signal: 'new-subscription', object: FeedChannel, p0: string): void;

        // Virtual methods

        vfunc_delete_subscription(topic: FeedChannel, callback: string): void;
        vfunc_new_subscription(topic: FeedChannel, callback: string): void;

        // Methods

        /**
         * Format a #GrssFeedChannel in Atom and returns the resulting string.
         * @param channel the #GrssFeedChannel to dump in the file.
         * @param items list of #GrssFeedItems to be added in         the feed.
         * @returns a newly allocated string holding the formatted feed, to be freed when no longer in use.
         */
        format_content(channel: FeedChannel, items: FeedItem[]): string;
        /**
         * To customize the port opened by the local server to deliver feeds and
         * catch incoming subscriptions. By default this is 80. Changing the port
         * while the hub is running imply restart the local server.
         * @param port new listening port for the server.
         */
        hub_set_port(port: number): void;
        /**
         * To define a list of valid "topics" for which the #GrssFeedsPublisher will
         * deliver contents. Sources of those channels, as retrieved by
         * grss_feed_channel_get_source(), are accepted as "hub.topic" parameter in
         * PubSubHubbub registration requests from remote subscribers.
         * Pay attention to the fact subscriptions requests for different topic are
         * now rejected.
         * @param topics a list of #GrssFeedChannels.
         */
        hub_set_topics(topics: FeedChannel[]): void;
        /**
         * Permits to start and stop the webserver implemented by this object.
         * @param run %TRUE to run the local server, %FALSE to stop it.
         */
        hub_switch(run: boolean): void;
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
        publish_file(channel: FeedChannel, items: FeedItem[], uri: string): boolean;
        /**
         * If the local web server has been executed (with
         * grss_feeds_publisher_hub_switch()) this function exposes the given `channel`
         * as an Atom formatted file avalable to http://[LOCAL_IP:DEFINED_PORT]/`id` .
         * @param channel the #GrssFeedChannel to dump in the file.
         * @param items list of #GrssFeedItems to be added in         the feed.
         * @param id name used in the external URL of the feed.
         * @returns %TRUE if the file is successfully written, %FALSE otherwise.
         */
        publish_web(channel: FeedChannel, items: FeedItem[], id: string): boolean;
    }

    module FeedsStore {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class FeedsStore extends GObject.Object {
        static $gtype: GObject.GType<FeedsStore>;

        // Constructors

        constructor(properties?: Partial<FeedsStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * To save a new #GrssFeedItem into the `store`. It performs a check to grant
         * `item` is not already saved.
         * @param channel parent feed for the new item.
         * @param item new item to permanently save.
         */
        vfunc_add_item_in_channel(channel: FeedChannel, item: FeedItem): void;
        /**
         * To retrieve list of feeds permanently saved into the store.
         */
        vfunc_get_channels(): FeedChannel[];
        /**
         * To retrieve list of items saved into the store, assigned to the given
         * `channel`.
         * @param channel parent feed containing required items.
         */
        vfunc_get_items_by_channel(channel: FeedChannel): FeedItem[];
        /**
         * To retrieve an item into a feed, given his unique ID.
         * @param channel parent feed containing required item.
         * @param id unique ID to look for.
         */
        vfunc_has_item(channel: FeedChannel, id: string): boolean;

        // Methods

        /**
         * To save a new #GrssFeedItem into the `store`. It performs a check to grant
         * `item` is not already saved.
         * @param channel parent feed for the new item.
         * @param item new item to permanently save.
         */
        add_item_in_channel(channel: FeedChannel, item: FeedItem): void;
        /**
         * To retrieve list of feeds permanently saved into the store.
         * @returns list of #GrssFeedChannel found in the @store. Do not modify or free it.
         */
        get_channels(): FeedChannel[];
        /**
         * To retrieve list of items saved into the store, assigned to the given
         * `channel`.
         * @param channel parent feed containing required items.
         * @returns list of #GrssFeedItem found in the @store. Do not modify or free it.
         */
        get_items_by_channel(channel: FeedChannel): FeedItem[];
        /**
         * To retrieve an item into a feed, given his unique ID.
         * @param channel parent feed containing required item.
         * @param id unique ID to look for.
         * @returns %TRUE if the specified item exists, %FALSE otherwise.
         */
        has_item(channel: FeedChannel, id: string): boolean;
        /**
         * This is to permit the `store` to auto-update itself: it creates an internal
         * #GrssFeedsPool and listens for his signals, so to implement the whole loop
         * fetch-parse-save trasparently.
         * @param run %TRUE to run the @store, %FALSE to stop.
         */
        ['switch'](run: boolean): void;
    }

    module FeedsSubscriber {
        // Signal callback interfaces

        interface NotificationReceived {
            (feed: GObject.Object, item: GObject.Object): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedsSubscriber extends GObject.Object {
        static $gtype: GObject.GType<FeedsSubscriber>;

        // Constructors

        constructor(properties?: Partial<FeedsSubscriber.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeedsSubscriber;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'notification-received',
            callback: (_source: this, feed: GObject.Object, item: GObject.Object) => void,
        ): number;
        connect_after(
            signal: 'notification-received',
            callback: (_source: this, feed: GObject.Object, item: GObject.Object) => void,
        ): number;
        emit(signal: 'notification-received', feed: GObject.Object, item: GObject.Object): void;

        // Virtual methods

        vfunc_notification_received(feed: FeedChannel, item: FeedItem): void;

        // Methods

        /**
         * This function returns the Internet address where `sub` is listening for
         * external events. It is often required by #GrssFeedsSubscriberHandlers while
         * subscribing contents to specify the local endpoint for communications.
         * @returns the #GInetAddress used by @sub, or %NULL if the #GrssFeedsSubscriber is switched off.
         */
        get_address(): Gio.InetAddress;
        /**
         * Returns the list of feeds currently managed by `sub`.
         * @returns a list of #GrssFeedChannel, to be freed with g_list_free() when no longer in use. Do not modify elements found in this list.
         */
        get_listened(): FeedChannel[];
        /**
         * This function returns the Internet port where `sub` is listening for
         * external events. It is often required by #GrssFeedsSubscriberHandlers while
         * subscribing contents to specify the local endpoint for communications.
         * @returns the port of the socket locally opened by @sub.
         */
        get_port(): number;
        /**
         * To obtain the internal #SoupSession of a #GrssFeedsSubscriber, so to re-use
         * it in #GrssFeedsSubscriberHandlers or similar tasks.
         * @returns the #SoupSession used by the provided #GrssFeedsSubscriber.
         */
        get_session(): Soup.Session;
        /**
         * To set the list of feeds to be managed by `sub`. The previous list, if any,
         * is invalidated. After invokation to the function, grss_feeds_subscriber_switch()
         * must be call to run the subscription.
         * The list in `feeds` can be freed after calling this; linked #GrssFeedChannel
         * are g_object_ref'd here.
         * @param feeds a list of #GrssFeedChannel.
         * @returns %TRUE if all #GrssFeedChannels involved in @feeds are valid and can be listened with one of the implemented procotols, %FALSE otherwise.
         */
        listen(feeds: FeedChannel[]): boolean;
        /**
         * To customize the port opened by the local server to catch incoming
         * publishers' events. By default this is 8444. Changing the port while the
         * subscriber is running imply restart the local server.
         * Pay attention to the fact many publishers' implementations accept only
         * certain ports.
         * @param port new listening port for the server.
         */
        set_port(port: number): void;
        /**
         * Permits to pause or resume `sub` listening for events.
         * @param run %TRUE to run the subscriber, %FALSE to pause it.
         */
        ['switch'](run: boolean): void;
    }

    type FeedAtomFormatterClass = typeof FeedAtomFormatter;
    abstract class FeedAtomFormatterPrivate {
        static $gtype: GObject.GType<FeedAtomFormatterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedChannelClass = typeof FeedChannel;
    abstract class FeedChannelPrivate {
        static $gtype: GObject.GType<FeedChannelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedEnclosureClass = typeof FeedEnclosure;
    abstract class FeedEnclosurePrivate {
        static $gtype: GObject.GType<FeedEnclosurePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedFormatterClass = typeof FeedFormatter;
    abstract class FeedFormatterPrivate {
        static $gtype: GObject.GType<FeedFormatterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedItemClass = typeof FeedItem;
    abstract class FeedItemPrivate {
        static $gtype: GObject.GType<FeedItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedParserClass = typeof FeedParser;
    abstract class FeedParserPrivate {
        static $gtype: GObject.GType<FeedParserPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedRssFormatterClass = typeof FeedRssFormatter;
    abstract class FeedRssFormatterPrivate {
        static $gtype: GObject.GType<FeedRssFormatterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedsGroupClass = typeof FeedsGroup;
    abstract class FeedsGroupPrivate {
        static $gtype: GObject.GType<FeedsGroupPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedsPoolClass = typeof FeedsPool;
    abstract class FeedsPoolPrivate {
        static $gtype: GObject.GType<FeedsPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedsPublisherClass = typeof FeedsPublisher;
    abstract class FeedsPublisherPrivate {
        static $gtype: GObject.GType<FeedsPublisherPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedsStoreClass = typeof FeedsStore;
    abstract class FeedsStorePrivate {
        static $gtype: GObject.GType<FeedsStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FeedsSubscriberClass = typeof FeedsSubscriber;
    abstract class FeedsSubscriberPrivate {
        static $gtype: GObject.GType<FeedsSubscriberPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * `GrssPerson` is an opaque structure whose members
     * cannot be accessed directly.
     */
    class Person {
        static $gtype: GObject.GType<Person>;

        // Constructors

        constructor(name: string, email?: string | null, uri?: string | null);
        _init(...args: any[]): void;

        static ['new'](name: string, email?: string | null, uri?: string | null): Person;

        // Methods

        get_email(): string;
        get_name(): string;
        get_uri(): string;
        /**
         * Atomically increments the reference count of `person` by one.
         * @returns the #GrssPerson with the reference count increased
         */
        ref(): Person;
        /**
         * Atomically decrements the reference count of `person` by one.
         *
         * When the reference count reaches zero, the resources allocated by
         * `person` are freed
         */
        unref(): void;
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

export default Grss;

// END
